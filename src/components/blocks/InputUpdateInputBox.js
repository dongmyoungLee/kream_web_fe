import classes from "../../styles/pages/layout/mypage.module.css";
import SelectBox from "../atoms/SelectBox";

const
  InputUpdateInputBox = (props) => {
  return (
    <div className={classes.selectSection}>
      <div className={classes.selectText}>
        <p>{props.label}</p>
      </div>
      <div className={classes.btnSection2}>
        <input value={props.value} onChange={props.onChange} placeholder={props.placeholder} className={classes.inputSection} />
      </div>
    </div>
  );
}

export default InputUpdateInputBox;