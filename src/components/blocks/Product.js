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
import axios from "axios";
import {useSelector} from "react-redux";
const Product = (props) => {
  const [productInfo, setProductInfo] = useState(props);
  const [imgSrc, setImgSrc] = useState(null);
  const [bookMarkcount, setBookMarkcount] = useState(productInfo.product.interestDto.length);

  const memberSeq = useSelector(state => state.loginCheck.loginInfo.memberSeq);


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

  const bookmarkHandler = (e) => {

    const shouldBookmark = window.confirm("관심 상품으로 등록하시겠습니까?");

    if (shouldBookmark) {
      axios.post(`http://localhost:8080/api/v1/interests/${productInfo.product.productSeq}`, {
        interestDate : "2023-08-02",
        interestLike : 0
      }, {
        params : {
          memberSeq : memberSeq
        }
      }).then((res) => {
        if (res.status === 200) {
          setBookMarkcount(bookMarkcount + 1);
          alert("관심정보가 추가 되었습니다.")
        }
      })
        .catch((err) => {

        })
    }


  }

  const cartHandler = () => {
    alert("장바구니 추가");
  }

  return (
    <div className={classes.productWrap}>
      <div className={classes.imgWrap} onClick={props.onClick}>
        <img className={classes.imgSize} src={imgSrc} />
      </div>
      <div className={classes.infoSection}>
        <div style={{height : '90px'}}>
          <h6 className={classes.productTitle}>{productInfo.product.brand}</h6>
          <h6 className={classes.productSubTitle}>{productInfo.product.ename}</h6>
          <h6 className={classes.productKorTitle}>{productInfo.product.hname}</h6>
        </div>
        <p className={classes.pruductPrice}>{(productInfo.product.price) == null ? 0 :(productInfo.product.price).toLocaleString()} <span>원</span></p>
        <div className={classes.userFavSection}>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} onClick={bookmarkHandler} src={bookmark} />
            <span>{bookMarkcount}</span>
          </div>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} onClick={cartHandler} src={cart} />
            <span>{productInfo.product.reviewDto.length}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Product;