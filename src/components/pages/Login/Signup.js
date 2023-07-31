import classes from '../../../styles/pages/login/login.module.css';
import classes2 from '../../../styles/pages/login/signup.module.css';
import {useState} from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {Mobile, PC} from "../../config/Responsive";
import PopupDom from "../../blocks/PopupDom";
import PopupPostCode from "../../blocks/PopupPostCode";
import MsgPopup from "../../blocks/MsgPopup";
import {useNavigate} from "react-router-dom";
import MailValidPopup from "../../blocks/MailValidPopup";
import {emailValidService, signUp} from "../../../common/api/ApiPostService";
import {emailCheck, numberCheck, passCheck} from "../../../common/Reg";
import {useSelector} from "react-redux";


const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [passCheckInput, setPassCheckInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [afterVisitPath, setAfterVisitPath] = useState('');
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState({show : false, msg: ''});
  const [isMailValidPopupOpen, setIsMailValidPopupOpen] = useState({show : false, msg: ''});
  const [userPostData, setUserPostData] = useState('');
  const [idInputWidth, setIdInputWidth] = useState('100%');
  const [phoneInputWidth, setPhoneInputWidth] = useState('100%');
  const [birthBeforeInput, setBirthBeforeInput] = useState('');
  const [birthAfterInput, setBirthAfterInput] = useState('');
  const [isIdBtnShow, setIsIdBtnShow] = useState(false);
  const [isPhoneBtnShow, setIsPhoneBtnShow] = useState(false);
  const [userMailCode, setUserMailCode] = useState('');
  const [userEnteredMailCode, setUserEnteredMailCode] = useState('');
  const [userAddrDetail, setIserAddrDetail] = useState('');
  const [idValidBtnText, setIdValidBtnText] = useState('인증');
  const [idValidBtnDisabled, setIdValidBtnDisabled] = useState('');
  const navigate = useNavigate();
  const isMobileMenu = useSelector(state => state.pageNavigator.isMobileMenu);

  const idInputHandler = (e) => {
    setIdInput(e.target.value);
    setIdInputWidth('80%');
    setIsIdBtnShow(true);
  }

  const idBlur = () => {
    if (idInput === '') {
      setIdInputWidth('100%');
      setIsIdBtnShow(false);
    }
  }

  const phoneBlur = () => {
    if (phoneInput === '') {
      setPhoneInputWidth('100%');
      setIsPhoneBtnShow(false);
    }
  }

  const passInputHandler = (e) => {
    setPassInput(e.target.value);
  }

  const passCheckInputHandler = (e) => {
    setPassCheckInput(e.target.value);
  }

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  }

  const phoneInputHandler = (e) => {
    setPhoneInput((e.target.value).replaceAll("-", ""));
    //setPhoneInputWidth('80%');
    //setIsPhoneBtnShow(true);
  }
  const birthBeforeInputHandler = (e) => {
    setBirthBeforeInput(e.target.value);
  }

  const birthAfterInputHandler = (e) => {
    if(!numberCheck(e.target.value)) {
      return ;
    }
    setBirthAfterInput(e.target.value);
  }

  const userAddrDetailHandler = (e) => {
    setIserAddrDetail(e.target.value);
  }

  const sendUserInfoDataHandler = (e) => {
    e.preventDefault();

    if (!emailCheck(idInput)) {
      setIsMsgPopupOpen({show: true, msg: '아이디를 이메일형식으로 입력해주세요.'});
      return ;
    }

    if (!passCheck(passInput)) {
      setIsMsgPopupOpen({show: true, msg: '비밀번호는 영문, 숫자, 특문 포함 8자 이상 입니다.'});
      return ;
    }

    if(passInput !== passCheckInput) {
      setIsMsgPopupOpen({show: true, msg: '비밀번호 확인이 일치하지 않습니다.'});
      return ;
    }

    if(nameInput === '') {
      setIsMsgPopupOpen({show: true, msg: '성함을 입력 해주세요.'});
      return ;
    }

    if(userAddrDetail === '') {
      setIsMsgPopupOpen({show: true, msg: '상세주소를 입력 해주세요.'});
      return ;
    }

    if(!numberCheck(phoneInput)) {
      setIsMsgPopupOpen({show: true, msg: '연락처를 숫자 형식으로 입력 해주세요.'});
      return ;
    }

    if(!numberCheck(birthBeforeInput)) {
      setIsMsgPopupOpen({show: true, msg: '주민번호를 숫자 형식으로 입력 해주세요.'});
      return ;
    }

    if(birthAfterInput === '') {
      setIsMsgPopupOpen({show: true, msg: '주민번호를 숫자 형식으로 입력 해주세요.'});
      return ;
    }

    // if(idValidBtnText !== '완료') {
    //   setIsMsgPopupOpen({show: true, msg: '이메일 인증을 완료 해주세요.'});
    //   return ;
    // }

    signUp(idInput, passInput, phoneInput, birthBeforeInput, birthAfterInput, (userPostData + ' ' +  userAddrDetail), nameInput)
    .then((res) => {
      if (res.status === 200) {
        setAfterVisitPath('/member/login');
        setIsMsgPopupOpen({show: true, msg: '회원가입이 완료 되었습니다.'});
      }
    })
    .catch((error) => {
      setIsMsgPopupOpen({show: true, msg: error.response.data.message === undefined ? '데이터베이스 오류 입니다. 관리자에게 문의하세요.' : error.response.data.message });
    })
  }


  const openPostCode = () => {
    setIsPostPopupOpen(true);
  }

  const closePostCode = () => {
    setIsPostPopupOpen(false);
  }

  const closeMsgPopup = () => {
    setIsMsgPopupOpen({show: false, msg: ''});

    if (afterVisitPath !== '') {
      navigate(afterVisitPath);
    }

  }

  const emailValidForm = (e) => {
    e.preventDefault();

    if (!emailCheck(idInput)) {
      setIsMsgPopupOpen({show: true, msg: '아이디를 이메일형식으로 입력해주세요.'});
      return ;
    }

    emailValidService(idInput, 'signup')
    .then((res) => {
      if (res.status === 200) {
        setUserMailCode(res.data.data);
        setIsMailValidPopupOpen({show: true, msg: '인증메일이 발송되었습니다.'});
      }
    })
    .catch((error) => {
      setIsMailValidPopupOpen({show: true, msg: '인증메일 발송처리 에러'});
    })

  }

  const emailValidCheck = (flag) => {

    if (flag === 'exit') {
      setIsMailValidPopupOpen({show: false, msg: ''});
      return;
    }

    if (userMailCode !== userEnteredMailCode) {
      setIsMailValidPopupOpen({show: true, msg: '인증코드가 올바르지 않습니다.'});
      return ;
    }

    setIsMailValidPopupOpen({show: false, msg: ''});
    setIdValidBtnText('완료');
    setIdValidBtnDisabled('disabled');

  }

  const userEnteredCodeData = (userCode) => {
    setUserEnteredMailCode(userCode);
  }


  const pcLoginForm = <form className={classes2.signupGeneralForm}>
                        <div className={classes2.flexOption}>
                          <Input label='아이디(이메일)' onBlur={idBlur} onChange={idInputHandler} input={{
                            type : 'text',
                            placeholder : 'example@email.com',
                            width : idInputWidth,
                            name: 'userId'
                          }} />
                          <button onClick={emailValidForm} disabled={idValidBtnDisabled} tabIndex='-1' style={{display : isIdBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>{idValidBtnText}</button>
                        </div>

                        <Input label='비밀번호' onChange={passInputHandler} input={{
                          type : 'password',
                          placeholder : '********',
                          name: 'userPassword'
                        }} />
                        <Input label='비밀번호 확인' onChange={passCheckInputHandler} input={{
                          type : 'password',
                          placeholder : '********',
                        }} />

                        <Input label='성함' onChange={nameInputHandler} input={{
                          type : 'text',
                          placeholder : '홍길동',
                          name: 'userName',
                          maxLength: 10,
                        }} />

                        <div className={classes2.flexOption}>
                          <Input label='연락처' onBlur={phoneBlur} onChange={phoneInputHandler}  input={{
                            type : 'text',
                            placeholder : '"-(하이픈)" 을 빼고 입력 해주세요.',
                            width : phoneInputWidth,
                            name: 'userPhone',
                            maxLength: 13,
                          }} />
                          {/*<button tabIndex='-1' style={{display : isPhoneBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>인증</button>*/}
                        </div>

                        <div className={classes2.flexOption}>
                          <Input label='주민번호 (7자리)' onChange={birthBeforeInputHandler} input={{
                            type : 'text',
                            placeholder : '000000',
                            name: 'userBirth',
                            width: '48%',
                            maxLength: 6
                          }} />
                          <p className={classes2.lineHeight}>-</p>
                          <Input onChange={birthAfterInputHandler} input={{
                            type : 'text',
                            placeholder : '0******',
                            name: 'userBirth',
                            width: '48%',
                            maxLength: 1,
                          }} />
                        </div>

                        <Input label='주소' onClick={openPostCode} input={{
                          type : 'text',
                          readOnly : 'readonly',
                          placeholder : '클릭해서 검색하기',
                          value : userPostData,
                          name: 'userAddr'
                        }} />

                        <Input label='상세주소' onChange={userAddrDetailHandler} input={{
                          type : 'text',
                          placeholder : '상세주소 입력',
                          name: 'userAddrDetail'
                        }} />

                        <Button btn={{
                          type : '',
                          value : '회원가입',
                          onClick : sendUserInfoDataHandler
                        }} />
                      </form>;

  const mobileLoginForm = <form className={classes2.mobileSignupGeneralForm}>
                            <div className={classes2.flexOption}>
                              <Input label='아이디(이메일)' onBlur={idBlur} onChange={idInputHandler} input={{
                                type : 'text',
                                placeholder : 'example@email.com',
                                width : idInputWidth,
                                name: 'userId'
                              }} />
                              <button onClick={emailValidForm} disabled={idValidBtnDisabled} tabIndex='-1' style={{display : isIdBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>{idValidBtnText}</button>
                            </div>

                            <Input label='비밀번호' onChange={passInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            <Input label='비밀번호 확인' onChange={passCheckInputHandler} input={{
                              type : 'password',
                              placeholder : '********',
                            }} />
                            <Input label='성함' onChange={nameInputHandler} input={{
                              type : 'text',
                              placeholder : '홍길동',
                              name: 'userName',
                              maxLength: 10,
                            }} />
                            <div className={classes2.flexOption}>
                              <Input label='주민번호 (7자리)' onChange={birthBeforeInputHandler} input={{
                                type : 'text',
                                placeholder : '000000',
                                name: 'userBirth',
                                width: '48%',
                                maxLength: 6
                              }} />
                              <p className={classes2.lineHeight}>-</p>
                              <Input onChange={birthAfterInputHandler} input={{
                                type : 'text',
                                placeholder : '0******',
                                name: 'userBirth',
                                width: '48%',
                                maxLength : 1
                              }} />
                            </div>
                            <div className={classes2.flexOption}>
                              <Input label='연락처' onBlur={phoneBlur} onChange={phoneInputHandler}  input={{
                                type : 'text',
                                placeholder : '010-1234-5678',
                                width : phoneInputWidth,
                              }} />
                              {/*<button tabIndex='-1' style={{display : isPhoneBtnShow ? 'block' : 'none', transition : '0.5s'}} className={classes2.buttonOption}>인증</button>*/}
                            </div>
                            <Input label='주소' onClick={openPostCode} input={{
                              type : 'text',
                              readOnly : 'readonly',
                              placeholder : '클릭해서 검색하기',
                              value : userPostData
                            }} />
                            <Input label='상세주소' onChange={userAddrDetailHandler} input={{
                              type : 'text',
                              name: 'userAddrDetail',
                              placeholder : '상세주소 입력',
                            }} />
                            <Button btn={{
                              type : '',
                              value : '회원가입',
                              onClick : sendUserInfoDataHandler
                            }} />
                          </form>;
  return (
      <>
        <PC>
          <section className={classes.signup_section}>
            <div className={classes.wrap}>
              <article className={classes.signup_article}>
                <div className={classes2.formWrap}>
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
          <section className={isMobileMenu ? classes.hide_mobileSection : classes.mobileSection}>
            <article className={classes.signup_mobileArticle}>
              <div className={classes.mobileFormWrap}>
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
          {isPostPopupOpen && <PopupDom>
            <PopupPostCode onClose={closePostCode} setData={setUserPostData} />
          </PopupDom>}

          {isMsgPopupOpen.show && <PopupDom>
            <MsgPopup onClick={closeMsgPopup} msg={isMsgPopupOpen.msg} />
          </PopupDom>}

          {isMailValidPopupOpen.show && <PopupDom>
            <MailValidPopup userEnteredCodeData={userEnteredCodeData} onClick={emailValidCheck} msg={isMailValidPopupOpen.msg} userCode={userMailCode} />
          </PopupDom>}
        </div>
      </>
  );
}

export default Login;