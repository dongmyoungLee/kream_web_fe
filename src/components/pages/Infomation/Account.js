import Applicant from "../../blocks/Applicant";
import MypageLayout from "../../blocks/MypageLayout";
import classes from '../../../styles/pages/layout/mypage.module.css';
import {Mobile, PC} from "../../config/Responsive";
import { useDispatch, useSelector } from "react-redux";
import {findUserJobInfo, testA, updateUserPwd} from "../../../common/api/ApiPostService";
import axios from "axios";
import InputComponent from "../../blocks/InputComponent";
import Button from "../../atoms/Button";
import { useState } from "react";
import { passCheck } from "../../../common/Reg";
import PopupDom from "../../blocks/PopupDom";
import MsgPopup from "../../blocks/MsgPopup";
import { useNavigate } from "react-router-dom";
import { loginCheckAction } from "../../../ducks/loginCheck";

const Account = (props) => {
  const [currentPwd, setCurrentPwd] = useState("");
  const [changePwd,  setChangePwd] = useState("");
  const [changeCheckPwd, setChangeCheckPwd] = useState("");
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState({show : false, msg: ''});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector(state => state.loginCheck.loginInfo);  
  
  const currPwdHandler = (e) => {
    setCurrentPwd(e.target.value);
  }

  const changePwdHandler = (e) => {
    setChangePwd(e.target.value);
  }

  const changeCheckPwdHandler = (e) => {
    setChangeCheckPwd(e.target.value);
  }

  const changePwdSubmit = (e) => {

    // 한 블럭에 하나의 책임만  
    if (!passCheck(changePwd)) {
      setIsMsgPopupOpen({show: true, msg: '변경할 비밀번호는 영문, 숫자, 특문 포함 8자 이상 입니다.'});
      return ;
    }
    
    if (changePwd !== changeCheckPwd) {
      setIsMsgPopupOpen({show: true, msg: '비밀번호 확인이 일치하지 않습니다.'});
      return ;
    }

    // 정규식 다 통과하면 axios 요청..
    // 서버에게 비밀번호를 바꿔주세요~ 라는 POST 요청을 보낼거에요.
    // 나는 서버에 2개를 보내야됨. 현재 비밀번호와 바뀔비밀번호

    updateUserPwd(isLogin.userId, currentPwd, changePwd).then((res) => {
      if (res.status === 200) {

        //  요청이 성공적이라면 내 로그인정보 비워주기 -> 결론 로그아웃 시킴
        const res = {
          isLogin : false,
          token : null,
          loginEnteredTime : Date.now(),
          userId : null,
          userName : null,
          userPhone : null,
          userBirth : null,
          userAddr : null,
        }

        // Redux 에 있는 내 로그인정보를 비워주기
        dispatch(loginCheckAction.loginInfoSet(res));

        // 팝업을 띄워줌
        setIsMsgPopupOpen({show: true, msg: '비밀번호 변경이 완료 되었습니다.'});
      }
    }).catch((err) => {
      setIsMsgPopupOpen({show: true, msg: err.data.message});
    })

    // axios.post('http://cozlin.com/api/v1/user/update-pw-pagein', {
    //   id : isLogin.userId,
    //   currPwd : currentPwd,
    //   changePwd : changePwd,
    //   }).then((response) => {
    //
    //   if (response.status === 200) {
    //
    //     //  요청이 성공적이라면 내 로그인정보 비워주기 -> 결론 로그아웃 시킴
    //     const res = {
    //       isLogin : false,
    //       token : null,
    //       loginEnteredTime : Date.now(),
    //       userId : null,
    //       userName : null,
    //       userPhone : null,
    //       userBirth : null,
    //       userAddr : null,
    //     }
    //
    //     // Redux 에 있는 내 로그인정보를 비워주기
    //     dispatch(loginCheckAction.loginInfoSet(res));
    //
    //     // 팝업을 띄워줌
    //     setIsMsgPopupOpen({show: true, msg: '비밀번호 변경이 완료 되었습니다.'});
    //   }
    // }).catch((error) => {
    //   setIsMsgPopupOpen({show: true, msg: error.data.message});
    // })
    

  }

  const closeMsgPopup = () => {
    
    // 팝업에서 확인버튼을 눌렀을 때 내 로그인정보가 없다면 /humanResources 으로 가겠음. 
    if (isLogin.userId === null) {
      navigate("/employment/human-resources/");
    }

    setIsMsgPopupOpen({show: false, msg: ''});
  }


  // redux 에서 데이터를 꺼내오는 행위
  const userId = useSelector(state => state.loginCheck.loginInfo.userId);

  // 1. password input 에 쓰는 데이터를 저장한다.
  // 2. password input 에 정해져있는 정규식을 저장한다.
  // 3. 비밀번호 변경요청을 한다.
  
  return (
    <>
      <PC>
        <MypageLayout>
          <Applicant />
          <div className={classes.account}>
            <div className={classes.management_box}>
              <div className={classes.dark}>
                <h2 className={classes.h2_option}>계정 정보</h2>
                <p  className={classes.p_option}>로그인 정보를 변경할 수 있습니다.</p>
              </div>

            </div>
            <div className={classes.line}></div>
            <div className={classes.account_information}>
               <div className={classes.id_box}>
                 <div className={classes.id}>아이디</div>
                 <div className={classes.input_name}>{isLogin.userId}</div>
               </div>
            </div>
            <div className={classes.line}></div>
            <InputComponent onChange={{first : currPwdHandler, second : changePwdHandler, third : changeCheckPwdHandler}} placeholder={{first : "********", second : "********", third : "********", fourth :''}} use="isNotReadOnly" type="password" label="비밀번호" inputTitle={{first : '현재 비밀번호', second : '변경할 비밀번호', third : '비밀번호 확인', fourth : ''}}  />

            <div style={{display : 'flex', justifyContent : 'flex-end', paddingRight : '30px'}}>
              <div style={{width:'137px'}}>
                <Button btn={{value:'수정하기', onClick:changePwdSubmit}}/>
              </div>
            </div>
          </div>
        </MypageLayout>
      </PC>
      <Mobile>
        <div className={classes.mobile_account}>
          <div className={classes.mobile_top_info}>
            <h2 className={classes.mobile_h2}>계정 정보</h2>
            <p className={classes.mobile_param}>로그인 정보를 변경할 수 있습니다.</p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.mobile_bot_info}>
            <div className={classes.bottom_info}>
              <p>아이디</p>
              <p className={classes.indent}>your ID</p>
            </div>
            <div className={classes.bottom_info}>
              <p>비밀번호</p>
              <p className={classes.indentClick}>비밀번호 변경하기</p>
            </div>
          </div>
        </div>
      </Mobile>
      <div id='popupDom'>
          {isMsgPopupOpen.show && <PopupDom>
            <MsgPopup onClick={closeMsgPopup} msg={isMsgPopupOpen.msg} />
          </PopupDom>}
      </div>
    </>
  );
}

export default Account;