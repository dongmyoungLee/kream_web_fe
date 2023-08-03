import Input from "../atoms/Input";
import Button from "../atoms/Button";
import reviewImg from "../../asset/images/review.jpeg";

const Review = (props) => {

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
        <img style={{height : '300px'}} src={props.review.reviewImg} />
      </div>

      <div style={{marginBottom : '20px', display: 'flex', justifyContent : 'space-between'}}>
        <p>{props.review.content}</p>
        <p style={{fontWeight : '600'}}>{props.review.rating}/5점</p>
      </div>

      <Button btn={{
        type : '',
        value : '닫기',
        onClick : props.onClose,
      }} />
    </div>
  );
}

export default Review;