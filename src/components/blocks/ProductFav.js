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
const ProductFav = (props) => {
  const [productInfo, setProductInfo] = useState(props);
  const [imgSrc, setImgSrc] = useState(null);
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

    setProductInfo(props);
  }, [props.imgUrl]);

  const deleteBookMark = () => {
    const deleteBookmark = window.confirm("관심 상품을 삭제 하시겠습니까 ?");

    if (deleteBookmark) {
      console.log(productInfo.product.productSeq)
      axios.delete(`http://localhost:8080/api/v1/interests/${memberSeq}/${productInfo.product.productSeq}`).then((res) => {

        if (res.status === 200) {
          alert("해당 관심정보가 삭제 되었습니다.");
          // props.observer();
          props.onDelete(productInfo.product.productSeq);
        }
      })
        .catch((err) => {

        })
    }
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
        <p className={classes.pruductPrice}>{(productInfo.product.price).toLocaleString()} <span>원</span></p>
        <div className={classes.userFavSection}>
          <p onClick={deleteBookMark} style={{cursor : 'pointer'}}>삭제</p>
        </div>
      </div>

    </div>
  );
}

export default ProductFav;