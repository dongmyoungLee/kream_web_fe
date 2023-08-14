import classes from '../../styles/pages/layout/mypage.module.css';
import {mypageTooltipAdminMenu, mypageTooltipMenu} from "../../common/Menus";
import MypageList from "./MypageList";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Applicant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTooltipMenu = useSelector(state => state.pageNavigator.isMobileTooltipMenu);
  const isLogin = useSelector(state => state.loginCheck.loginInfo);

  const clickMethods = (flag) => {
    navigate(`/member/${flag}`);
  }

  useEffect(() => {
    if (isLogin.id != 'pajang1515@gmail.com') {
      navigate(-1);
    }
  }, []);

  return (
    <>
      <div className={classes.asideSection} style={{height : 'auto'}}>
        <p className={classes.applicantText}>Admin Menu</p>
        <ul>
          {mypageTooltipAdminMenu.map((item, idx) => (
            <MypageList key={item.menuName} menuTitle={item.menuName} imgPath={item.imgPath} clickFlag={item.clickFlag} onClick={() => {clickMethods(item.clickFlag)}} borderRaPx="8px" marginBot="5px" />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Applicant;