import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import Product from "../../blocks/Product";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {humanResourcesDevJob, humanResourcesMarketingJob, humanResourcesPlannerJob} from "../../../common/Menus";
import axios from "axios";
import ApplicantAdmin from "../../blocks/ApplicantAdmin";
import {useSelector} from "react-redux";

const QnaAdmin = () => {
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
            <h2 className={classes.h2_option}>Q&A 관리</h2>
            <p  className={classes.p_option}>Q&A 답변 및 관리를 할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </MypageLayout>
  );
}

export default QnaAdmin;