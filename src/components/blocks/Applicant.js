import classes from '../../styles/pages/layout/mypage.module.css';
import {mypageTooltipMenu} from "../../common/Menus";
import MypageList from "./MypageList";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Applicant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTooltipMenu = useSelector(state => state.pageNavigator.isMobileTooltipMenu);

  const clickMethods = (flag) => {
    navigate(`/member/${flag}`);
  }

  return (
    <>
      <div className={classes.asideSection}>
        <p className={classes.applicantText}>My page</p>
        <ul>
          {mypageTooltipMenu.map((item, idx) => (
            <MypageList key={item.menuName} menuTitle={item.menuName} imgPath={item.imgPath} clickFlag={item.clickFlag} onClick={() => {clickMethods(item.clickFlag)}} borderRaPx="8px" marginBot="5px" />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Applicant;