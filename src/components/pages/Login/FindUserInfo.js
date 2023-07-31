import {Mobile, PC} from "../../config/Responsive";
import classes from "../../../styles/pages/login/login.module.css";
import RadioGroup from "../../atoms/RadioGroup";
import Radio from "../../atoms/Radio";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {useState} from "react";
import {findIdService, findPwdService} from "../../../common/api/ApiPostService";
import PopupDom from "../../blocks/PopupDom";
import MsgPopup from "../../blocks/MsgPopup";
import {emailCheck, numberCheck} from "../../../common/Reg";

const FindUserInfo = () => {
  const [isFindType, setIsFindType] = useState('id');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState({show : false, msg: ''});

  const radioChangeHandler = (e) => {
    setIsFindType(e.target.value);
  }

  const phoneInputHandler = (e) => {
    setPhoneInput(e.target.value);
  }

  const idInputHandler = (e) => {
    setEmailInput(e.target.value);
  }

  const idFindForm = <Input label='연락처' onChange={phoneInputHandler} input={{
                                type : 'text',
                                placeholder : '"-(하이픈)" 을 빼고 입력 해주세요.',
                                name: 'userPhone',
                                maxLength: 13,
                              }} />;

  const pwFindForm = <Input label='아이디(이메일)' onChange={idInputHandler} input={{
                        type : 'text',
                        placeholder : 'example@email.com'
                      }} />;

  const pwValidSubmitHandler = (e) => {


    if (isFindType === 'pwd') {

      if (!emailCheck(emailInput)) {
        setIsMsgPopupOpen({show: true, msg: '아이디를 이메일형식으로 입력해주세요.'});
        return ;
      }

      findPwdService(emailInput, 'find')
          .then((res) => {

            if (res.status === 200) {
              setIsMsgPopupOpen({show: true, msg: res.data.data});
            }

          })
          .catch((error) => {
            setIsMsgPopupOpen({show: true, msg: error.response.data.data});
          })

        return ;
    } else {
      if(!numberCheck(phoneInput)) {
        setIsMsgPopupOpen({show: true, msg: '연락처를 숫자 형식으로 입력 해주세요.'});
        return ;
      }

      findIdService(phoneInput)
        .then((res) => {
          setIsMsgPopupOpen({show: true, msg: `회원님의 아이디는 ${res.data.data} 입니다.`});
        })
        .catch((error) => {
          setIsMsgPopupOpen({show: true, msg: error.response.data.data.message});
        })

    }




  }


  const closeMsgPopup = () => {
    setIsMsgPopupOpen({show: false, msg: ''});
  }

  return (
      <>
        <PC>
          <section className={classes.section}>
            <div className={classes.wrap}>
              <article className={classes.article}>
                <div className={classes.findPwdFormWrap}>
                  <div className={classes.marginOption}>
                    <RadioGroup>
                      <Radio name="contact" value="id" defaultChecked onChange={radioChangeHandler}>
                        <p className={classes.fontSizeDefault}>아이디 찾기</p>
                      </Radio>
                      <Radio name="contact" value="pwd" onChange={radioChangeHandler}>
                        <p className={classes.fontSizeDefault}>비밀번호 찾기</p>
                      </Radio>
                    </RadioGroup>
                  </div>
                  <div className={classes.gapOption}>
                    {isFindType === 'id' && idFindForm}
                    {isFindType === 'pwd' && pwFindForm}
                    <Button btn={{
                      type : '',
                      value : '인증하기',
                      onClick : pwValidSubmitHandler
                    }} />
                  </div>
                </div>
              </article>
            </div>
          </section>
        </PC>
        <Mobile>
          <section className={classes.mobileSection}>
            <div className={classes.mWrap}>
              <article className={classes.mobileArticle}>
                <div className={classes.mobileFindPwdFormWrap}>
                  <div className={classes.marginOption}>
                    <RadioGroup>
                      <Radio name="contact" value="id" defaultChecked onChange={radioChangeHandler}>
                        <p className={classes.fontSizeDefault}>아이디 찾기</p>
                      </Radio>
                      <Radio name="contact" value="pwd" onChange={radioChangeHandler}>
                        <p className={classes.fontSizeDefault}>비밀번호 찾기</p>
                      </Radio>
                    </RadioGroup>
                  </div>
                  <div className={classes.gapOption}>
                    {isFindType === 'id' && idFindForm}
                    {isFindType === 'pwd' && pwFindForm}
                    <Button btn={{
                      type : '',
                      value : '인증하기',
                      onClick : pwValidSubmitHandler
                    }} />
                  </div>
                </div>
              </article>
            </div>
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

export default FindUserInfo;