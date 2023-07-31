import classes from "../../../styles/pages/infomation/company.module.css";
import mainBanner1 from "../../../asset/images/mainbanner.jpg";
import mainBanner2 from "../../../asset/images/mainbanner2.jpg";
import mainBanner3 from "../../../asset/images/mainbanner3.jpg";
import mainBanner4 from "../../../asset/images/mainbanner4.jpg";
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
          <img src={mainBanner1} className={classes.firstImg} />
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.imgWrap}>
          <img src={mainBanner2} className={classes.imgOption} />

        </div>
      </div>
      <div className={classes.secondSection2}>
        <div className={classes.imgWrap2}>
          <img src={mainBanner3} style={{height : '427px'}} />

        </div>
      </div>
    </>
  );

}

export default Company;