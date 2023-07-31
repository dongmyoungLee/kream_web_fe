import Input from "../atoms/Input";
import Button from "../atoms/Button";

const QnaModal = (props) => {

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
        <Input label='Q&A 제목' onChange={nameInputHandler} input={{
          type : 'text',
          placeholder : '제목을 입력하세요.',
          name: 'userName'
        }} />

        <div style={{width : '100%', height : '20px'}}></div>

        <Input label='Q&A 내용' onChange={nameInputHandler} input={{
          type : 'text',
          placeholder : '내용을 입력하세요.',
          name: 'userName'
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

export default QnaModal;