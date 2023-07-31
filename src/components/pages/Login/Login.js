import classes from '../../../styles/pages/login/login.module.css'
import RadioGroup from "../../atoms/RadioGroup";
import Radio from "../../atoms/Radio";
import {useEffect, useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {Mobile, PC, Tablet} from "../../config/Responsive";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../common/AuthContext";
import {loginCheckAction} from "../../../ducks/loginCheck";
import PopupDom from "../../blocks/PopupDom";
import MsgPopup from "../../blocks/MsgPopup";
import {emailCheck, passCheck} from "../../../common/Reg";

const Login = () => {
  const [isLoginType, setIsLoginType] = useState('general');
  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.loginCheck.loginInfo.isLogin);
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState({show : false, msg: ''});

  useEffect(() => {
    // 페이지 처음 들어왔을때 로그인상태 라면 홈으로 반환..
    if (isLogin) {
      navigate('/employment/human-resources');
    }
  }, []);

  const radioChangeHandler = (e) => {
    setIsLoginType(e.target.value);
  }
  const idInputHandler = (e) => {
    setIdInput(e.target.value);
  }
  const passInputHandler = (e) => {
    setPassInput(e.target.value);
  }
  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    // @@ isLoginType 분기하자 나중에..

    if (!emailCheck(idInput)) {
      setIsMsgPopupOpen({show: true, msg: '아이디를 형식에 맞게 입력해주세요.'});
      return ;
    }

    if (!passCheck(passInput)) {
      setIsMsgPopupOpen({show: true, msg: '비밀번호를 형식에 맞게 입력해주세요.'});
      return ;
    }


    // login 인증함수..
    const loginFn = await login(idInput, passInput)
      .then((res) => {
        if (res.isLogin) {
          // 로그인 성공
          navigate('/employment/human-resources');
          dispatch(loginCheckAction.loginInfoSet(res));
        } else {
          // 로그인 실패
          setIsMsgPopupOpen({show: true, msg: '로그인 정보가 일치하지 않습니다.'});
        }

      });
  }

  const closeMsgPopup = () => {
    setIsMsgPopupOpen({show: false, msg: ''});
  }


  const labelName = isLoginType === 'general' ? '아이디(이메일)' : '기업 아이디(이메일)';
  const errorParam = '이메일과 비밀번호가 일치하지 않습니다.';


  const pcLoginForm = <form className={classes.generalForm} onSubmit={loginSubmitHandler}>
                            <Input label={labelName} onChange={idInputHandler} input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />
                            <Input label='비밀번호' onChange={passInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            {error && <p className={classes.error}>{errorParam}</p>}
                            <Button btn={{
                              type : '',
                              value : '로그인',
                            }} />
                            <div className={classes.signUpBox}>
                              {isLoginType === 'general' ? <p><Link to='/member/signup'>회원가입 하기 ＞</Link></p> : <p><Link to='/'>기업회원 신청하기 ＞</Link></p>}
                              <p><Link to='/member/find-pwd'>아이디 및 비밀번호 찾기 ></Link></p>
                            </div>
                      </form>;

  const mobileLoginForm = <form className={classes.mobileGeneralForm} onSubmit={loginSubmitHandler}>
                            <Input label={labelName} onChange={idInputHandler} input={{
                              type : 'text',
                              placeholder : 'example@email.com'
                            }} />
                            <Input label='비밀번호' onChange={passInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            {error && <p className={classes.error}>{errorParam}</p>}
                            <Button btn={{
                              type : '',
                              value : '로그인',
                            }} />
                            <div className={classes.signUpBox}>
                              {isLoginType === 'general' ? <p><Link to='/member/signup'>회원가입 하기 ＞</Link></p> : <p><Link to='/'>기업회원 신청하기 ＞</Link></p>}
                              <p><Link to='/member/find-pwd'>아이디 및 비밀번호 찾기 ></Link></p>
                            </div>
                          </form>;
  return (
      <>
        <PC>
          <section className={classes.section}>
            <div className={classes.wrap}>
              <article className={classes.article}>
                <div className={classes.formWrap}>
                  <RadioGroup>
                    <Radio name="contact" value="general" defaultChecked onChange={radioChangeHandler}>
                      <p>일반회원</p>
                    </Radio>
                    <Radio name="contact" value="company" onChange={radioChangeHandler}>
                      기업회원
                    </Radio>
                  </RadioGroup>
                  <div>
                    <div className={classes.formOption}>
                      {pcLoginForm}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </PC>
        <Mobile>
          <section className={classes.mobileSection}>
            <article className={classes.mobileArticle}>
              <div className={classes.mobileFormWrap}>
                <RadioGroup>
                  <Radio name="contact" value="general" defaultChecked onChange={radioChangeHandler}>
                    <p>일반회원</p>
                  </Radio>
                  <Radio name="contact" value="company" onChange={radioChangeHandler}>
                    기업회원
                  </Radio>
                </RadioGroup>
                <div>
                  <div className={classes.formOption}>
                    {mobileLoginForm}
                  </div>
                </div>
              </div>
            </article>
          </section>
        </Mobile>
        <div id='popupDom'>
          {isMsgPopupOpen.show && <PopupDom>
            <MsgPopup onClick={closeMsgPopup} msg={isMsgPopupOpen.msg} />
          </PopupDom>}
        </div>
      </>
  );
}

export default Login;