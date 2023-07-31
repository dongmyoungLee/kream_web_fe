import React from 'react';
import DaumPostcode from "react-daum-postcode";
import {Mobile, PC, Tablet} from "../config/Responsive";

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    // console.log(data)
    // console.log(fullAddress)
    // console.log(data.zonecode)
    const addData = `(${data.zonecode}) ${fullAddress}`;
    props.setData(addData);
    props.onClose()
  }

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    width: '100%',
    height: '100%',
    top: "50%",
    left: '50%',
    transform : 'translate(-50%, -50%)',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '-35px',
    right: '-25px',
    transform : 'translateX(-50%)',
    cursor : 'pointer',
    fontWeight : '400',
    fontSize : '16px',
    borderRadius : '8px',
    backgroundColor : '#0062df',
    padding: '5px 10px',
    color: '#fff',
    outline : 'none',
  }

  const wrap = {
    position : 'fixed',
    width: "100%",
    height: "100vh",
    top: "50%",
    zIndex : '10',
    left: '50%',
    transform : 'translate(-50%, -50%)',
    padding: "7px",
    backgroundColor: 'rgba(0,0,0, 0.45)',
  }

  const layOutWrapPc = {
    position: 'absolute',
    width: '600px',
    height: '600px',
    top: "50%",
    left: '50%',
    transform : 'translate(-50%, -50%)',
  }

  const layOutWrapMobile = {
    position: 'absolute',
    width: '80%',
    height: '250px',
    top: "50%",
    left: '50%',
    transform : 'translate(-50%, -50%)',
  }

  return(

      <div style={wrap}>
        <PC>
          <div style={layOutWrapPc}>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button style={closeBtnStyle} type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
          </div>
        </PC>
        <Mobile>
          <div style={layOutWrapMobile}>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button style={closeBtnStyle} type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
          </div>
        </Mobile>

      </div>
  )
}

export default PopupPostCode;