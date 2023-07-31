import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";

const History = () => {
  return (
    <MypageLayout>
      <Applicant />
      <div className={classes.account}>
        <p>History</p>
      </div>
    </MypageLayout>
  );
}

export default History;