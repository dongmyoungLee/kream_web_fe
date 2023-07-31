import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import Product from "../../blocks/Product";

const History = () => {
  return (
    <MypageLayout remove_height="profile">
      <Applicant />
      <div className={classes.account}>
        <div className={classes.management_box}>
          <div className={classes.dark}>
            <h2 className={classes.h2_option}>장바구니</h2>
            <p  className={classes.p_option}>내 장바구니 내역을 확인할 수 있습니다.</p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.cartWrap}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </MypageLayout>
  );
}

export default History;