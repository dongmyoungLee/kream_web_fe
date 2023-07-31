import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ReviewModal = (props) => {

  const nameInputHandler = () => {

  }

  const addQnA = () => {

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
        <Input label='리뷰 제목' onChange={nameInputHandler} input={{
          type : 'text',
          placeholder : '제목을 입력하세요.',
          name: 'reviewTitle'
        }} />

        <div style={{width : '100%', height : '20px'}}></div>

        <Input label='리뷰 사진 URL' onChange={nameInputHandler} input={{
          type : 'text',
          placeholder : 'URL을 입력하세요.',
          name: 'reviewURL'
        }} />

        <div style={{width : '100%', height : '20px'}}></div>

        <Input label='리뷰 내용' onChange={nameInputHandler} input={{
          type : 'text',
          placeholder : '내용을 입력하세요.',
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