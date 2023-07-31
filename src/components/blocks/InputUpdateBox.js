import classes from "../../styles/pages/layout/mypage.module.css";
import SelectBox from "../atoms/SelectBox";

const InputUpdateBox = (props) => {
  return (
    <div className={classes.selectSection}>
      <div className={classes.selectText}>
        <p>{props.label}</p>
      </div>
      <div className={classes.btnSection1}>
        <SelectBox label={props.label} menuList={props.menuList} settingCategory={props.settingCategory} />
      </div>
    </div>
  );
}

export default InputUpdateBox;