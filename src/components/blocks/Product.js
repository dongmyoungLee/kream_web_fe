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
import {useEffect, useState} from "react";
const Product = (props) => {
  const [productInfo, setProductInfo] = useState(props);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    switch (productInfo.product.imgUrl) {
      case 's1':
        setImgSrc(s1);
        break;
      case 's2':
        setImgSrc(s2);
        break;
      case 's3':
        setImgSrc(s3);
        break;
      case 's4':
        setImgSrc(s4);
        break;
      case 's5':
        setImgSrc(s5);
        break;
      case 's6':
        setImgSrc(s6);
        break;
      case 's7':
        setImgSrc(s7);
        break;
      case 's8':
        setImgSrc(s8);
        break;
      default:
        setImgSrc(null);
    }
  }, [props.imgUrl]);

  return (
    <div className={classes.productWrap} onClick={props.onClick}>
      <div className={classes.imgWrap}>
        <img className={classes.imgSize} src={imgSrc} />
      </div>
      <div className={classes.infoSection}>
        <div style={{height : '90px'}}>
          <h6 className={classes.productTitle}>{productInfo.product.brand}</h6>
          <h6 className={classes.productSubTitle}>{productInfo.product.ename}</h6>
          <h6 className={classes.productKorTitle}>{productInfo.product.hname}</h6>
        </div>
        <p className={classes.pruductPrice}>{(productInfo.product.price).toLocaleString()} <span>원</span></p>
        <div className={classes.userFavSection}>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} src={bookmark} />
            <span>{productInfo.product.interestDto.length}</span>
          </div>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} src={cart} />
            <span>{productInfo.product.reviewDto.length}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Product;