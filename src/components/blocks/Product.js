import classes from '../../styles/blocks/product.module.css';
import s1 from '../../asset/images/s1.webp';
import s2 from '../../asset/images/s2.webp';
import s3 from '../../asset/images/s3.webp';
import s4 from '../../asset/images/s4.webp';
import s5 from '../../asset/images/s5.webp';
import s6 from '../../asset/images/s6.webp';
import s7 from '../../asset/images/s7.webp';
import s8 from '../../asset/images/s8.webp';
import bookmark from "../../asset/images/bookmark2.png";
import cart from "../../asset/images/myhistory.png"
const Product = (props) => {
  return (
    <div className={classes.productWrap} onClick={props.onClick}>
      <div className={classes.imgWrap}>
        <img className={classes.imgSize} src={s1} />
      </div>
      <div className={classes.infoSection}>
        <h6 className={classes.productTitle}>Nike</h6>
        <h6 className={classes.productSubTitle}>Nike SB Dunk Low Heineken</h6>
        <h6 className={classes.productKorTitle}>나이키 SB 덩크 로우 하이네켄</h6>
        <p className={classes.pruductPrice}>8,000,000 <span>원</span></p>
        <div className={classes.userFavSection}>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} src={bookmark} />
            <span>203</span>
          </div>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} src={cart} />
            <span>103</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Product;