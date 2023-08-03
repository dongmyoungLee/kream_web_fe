import Input from "../atoms/Input";
import Button from "../atoms/Button";
import axios from "axios";
import {useState} from "react";

const ReviewModal = (props) => {

  const [imgSrc, setImgSrc] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [starInput, setStarInput] = useState(0);


  const imgHandler = (e) => {
    setImgSrc(e.target.value);
  }

  const contentHandler = (e) => {
    setContentInput(e.target.value);
  }

  const starHandler = (e) => {
    setStarInput(e.target.value);
  }

  const addQnA = () => {
    axios.post(`http://localhost:8080/api/v1/reviews/${props.productSeq}`, {
      "content" : contentInput,
      "rating" :   starInput,
      "reviewImg" : imgSrc,
      "heart" : 0
    }).then((res) => {
      if (res.status === 200) {
        alert("리뷰가 등록 되었습니다.");
        props.onClose();
      }
    })
    .catch((err) => {
        console.log(err);
    })
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 9999,
        borderRadius: '10px'
      }}
    >
      <div style={{marginBottom : '15px'}}>

        <Input label='리뷰 사진 URL' onChange={imgHandler} input={{
          type : 'text',
          placeholder : 'URL을 입력하세요.',
          name: 'reviewURL'
        }} />

        <div style={{width : '100%', height : '20px'}}></div>

        <Input label='리뷰 내용' onChange={contentHandler} input={{
          type : 'text',
          placeholder : '내용을 입력하세요.',
          name: 'reviewContent'
        }} />

        <div style={{width : '100%', height : '20px'}}></div>

        <Input label='별점' onChange={starHandler} input={{
          type : 'text',
          placeholder : '1~5점을 입력해주세요.',
          name: 'reviewContent'
        }} />
      </div>

      <div style={{display : 'flex', justifyContent : 'space-around'}}>
        <Button btn={{
          type : '',
          value : '등록',
          onClick : addQnA,
          width : '40%',
          height : '45px'
        }} />
        <Button btn={{
          type : '',
          value : '닫기',
          onClick : props.onClose,
          width : '40%',
          height : '45px'
        }} />
      </div>
    </div>
  );
}

export default ReviewModal;