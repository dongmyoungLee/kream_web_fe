import Radio from "../../atoms/Radio";
import RadioGroup from "../../atoms/RadioGroup";
import classes from '../../../styles/pages/layout/resize.module.css';
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const Resize = () => {
  const [resizeOption, setResizeOption] = useState('ratio');
  const [userWidth, setUserWidth] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [userFile, setUserFile] = useState('');



  const radioChangeHandler = (e) => {
    setResizeOption(e.target.value);
    document.querySelector('.userInput').value = null;
  }

  const widthChangeEvt = (e) => {
    setUserWidth(e.target.value);
  }

  const heightChangeEvt = (e) => {
    setUserHeight(e.target.value);
  }

  const userFileHandler = (e) => {

    setUserFile(e.target.files[0]);

  }

  const resizeTrigger = () => {

    if (userWidth === 0) {
      alert('가로(width)를 입력 해 주세요.');
      return ;
    }

    if (userHeight === 0) {
      alert('세로(height)를 입력 해 주세요.');
      return ;
    }

    if (userFile === '') {
      alert('파일을 첨부 해 주세요');
      return ;
    }

    let tmpPath = URL.createObjectURL(userFile);

    resizeAndDownloadImage(tmpPath, 500, 400);
  }

  const batchResizeTrigger = () => {

    let tmpPath = URL.createObjectURL(userFile);

    let batchWidth = 1000;
    let batchHeight = 1000;

    for(let i = 0; i < 6; i++) {

      resizeAndDownloadImage(tmpPath, batchWidth - (100 * i), batchHeight - (100 * i)).then(() => {

      })
    }

  }

  const resizeAndDownloadImage = (imageUrl, maxWidth, maxHeight) => {


    return new Promise((resolve, reject) => {

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      let width;
      let height;
      img.crossOrigin = 'anonymous';
      img.onload = () => {

      switch (resizeOption) {
          case 'ratio' :
            width = img.width;
            height = img.height;
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          break;

          case 'custom' :
            width = userWidth;
            height = userHeight;

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          break;

          case 'range' :
            width = maxWidth;
            height = maxHeight;

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            break;
        }


      canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;

          if (resizeOption === 'range') {
            link.download = `${userFile.name.split(".")[0]}_${width}×${height}.png`;
          } else {
            link.download = `resize.png`;
          }


          link.click();
          resolve();
        }, 'image/png');
      };
      img.onerror = (err) => {
        reject(err);
      };
      img.src = imageUrl;
    });
  }

  return (
    <div className={classes.wrap}>
      <RadioGroup>
        <Radio name="contact" value="ratio" defaultChecked onChange={radioChangeHandler}>
          <p>비율 맞춤</p>
        </Radio>
        <Radio name="contact" value="custom" onChange={radioChangeHandler}>
          사용자 임의
        </Radio>
        <Radio name="contact" value="range" onChange={radioChangeHandler}>
          일괄 다운
        </Radio>
      </RadioGroup>

      {resizeOption !== 'range' &&
          <>
            <Input label='가로 (width)' onChange={widthChangeEvt} input={{
              type : 'number',
              placeholder : '가로길이'
            }} />
            <Input label='세로 (height)' onChange={heightChangeEvt} input={{
              type : 'number',
              placeholder : '세로길이'
            }} />
          </>
      }
      {resizeOption === 'range' && <p className={classes.paramOption}>(1000 * 1000) ~ (500 * 500) 까지 일괄로 다운 됩니다.</p>}

      <div>
        <input className='userInput' type="file" onChange={userFileHandler} />
      </div>

      {resizeOption !== 'range' &&
          <Button btn={{
            type : '',
            value : '변환하기',
            onClick : resizeTrigger
          }} />
      }
      {resizeOption === 'range' &&
          <Button btn={{
            type : '',
            value : '다운로드',
            onClick : batchResizeTrigger
          }} />
      }

    </div>
  );
}

export default Resize;