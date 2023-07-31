import classes from "../../../styles/pages/infomation/company.module.css";
import mainBanner from "../../../asset/images/mainbanner01.png";
import pick from "../../../asset/images/pick.webp";
import {useNavigate} from "react-router-dom";
const Company = ()  => {
  const navigate = useNavigate();

  const linkHandler = () => {
    navigate('/employment/human-resources');
  }

  return (
    <>
      <div className={classes.mainArea}>
        <div className={classes.centerArea}>
          <p className={classes.mainText}>COZLIN.COM</p>
          <p className={classes.midText}>원하는 IT 인재 채용 플랫폼</p>
          <button onClick={linkHandler} className={classes.btnOption}><p>인재 채용</p></button>
          <img src={mainBanner} className={classes.firstImg} />
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.imgWrap}>
          <img src={pick} className={classes.imgOption} />
          <div className={classes.textWrap}>
            <h2 className={classes.firstH2Option}>인재 채용에 어려움을 겪고 계신가요?</h2>
            <h2 className={classes.secondH2Option}>COZLIN 에서</h2>
            <h2 className={classes.secondH2Option}>원하는 인재를 채용 하세요.</h2>
            <button onClick={linkHandler} className={classes.secondBtnOption}>바로가기</button>
          </div>
        </div>
      </div>
    </>
  );

}

export default Company;