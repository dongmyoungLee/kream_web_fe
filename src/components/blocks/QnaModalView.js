import Input from "../atoms/Input";
import Button from "../atoms/Button";
import {useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const QnaModalView = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isLogin = useSelector(state => state.loginCheck.loginInfo);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }
  const contentHandler = (e) => {
    setContent(e.target.value);
  }

  const addQnA = () => {
    axios.post(`http://localhost:8080/api/v1/qas/${props.productSeq}/${isLogin.memberSeq}`, {
      "title" : title,
      "content" : content,
      "answer" : ""
    })
      .then((res) => {
        if(res.status == 200) {
          alert("Q&A 가 등록 되었습니다.");
          props.onClose();
        }
      })
      .catch((err) => {

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
      <h2>답변</h2>
      <p style={{padding: '30px'}}>{props.answer}</p>

      <div style={{display : 'flex', justifyContent : 'space-around'}}>
        <Button btn={{
          type : '',
          value : '닫기',
          onClick : props.onClose,
          height : '45px'
        }} />
      </div>
    </div>
  );
}

export default QnaModalView;