import Layout from "../../blocks/Layout";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import Button from "../../atoms/Button";
import InputDivComponent from "../../blocks/InputDivComponent";
import MypageLayout from "../../blocks/MypageLayout";
import Applicant2 from "../../blocks/Applicant2";
import ApplicantAdmin from "../../blocks/ApplicantAdmin";


const Admin = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin.id != 'pajang1515@gmail.com') {
      navigate(-1);
    }
  }, []);
  return (
    <MypageLayout remove_height="profile" >
      <ApplicantAdmin />
      <div className={classes.account}>

      </div>
    </MypageLayout>
  );
}

export default Admin;