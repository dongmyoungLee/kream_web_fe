import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import ApplicantAdmin from "../../blocks/ApplicantAdmin";
import {useSelector} from "react-redux";

const OrderAdmin = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin.id != 'pajang1515@gmail.com') {
      navigate(-1);
    }
  }, []);


  return (
    <MypageLayout remove_height="profile">
      <ApplicantAdmin />
      <div className={classes.account}>
        <div className={classes.management_box}>
          <div className={classes.dark}>
            <h2 className={classes.h2_option}>주문 결제 관리</h2>
            <p  className={classes.p_option}>주문 결제 관리를 할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </MypageLayout>
  );
}

export default OrderAdmin;