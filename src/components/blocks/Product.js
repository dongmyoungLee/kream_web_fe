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
import PopupDom from "./PopupDom";
import MsgPopup from "./MsgPopup";
import ConfirmPopup from "./ConfirmPopup";
import {useNavigate} from "react-router-dom";
const Product = (props) => {
  const [productInfo, setProductInfo] = useState(props);
  const [imgSrc, setImgSrc] = useState(null);
  const [bookMarkcount, setBookMarkcount] = useState(productInfo.product.interestDto != undefined ? productInfo.product.interestDto.length : 0);

  const memberSeq = useSelector(state => state.loginCheck.loginInfo.memberSeq);
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState({show : false, msg: ''});
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState({show : false, msg: ''});
  const [bookmarkFlag, setBookmarkFlag] = useState(false);
  const [cartFlag, setCartFlag] = useState(false);
  const navigate = useNavigate();



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

    if (isLogin.isLogin == false) {
      setIsMsgPopupOpen({show: true, msg: '로그인 후 이용하세요.'});
      return ;
    }
    setBookmarkFlag(true);
    setIsConfirmPopupOpen({show: true, msg: '관심 상품으로 등록하시겠습니까?'});
  }

  const cartHandler = () => {
    if (isLogin.id == null) {
      setIsMsgPopupOpen({show: true, msg: '로그인 후 이용하세요.'});
      return;
    }

    setCartFlag(true);
    setIsConfirmPopupOpen({show: true, msg: '장바구니에 추가 하시겠습니까 ?'});
  }

  const closeMsgPopup = () => {

    if (isLogin.id == null) {
      navigate("/member/login");
    }

    setIsMsgPopupOpen({show: false, msg: ''});
  }
  const closeConfirmPopup = () => {
    setIsConfirmPopupOpen({show: false, msg: ''});
  }

  const confirmHandler = () => {

    if(bookmarkFlag) {

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
            setIsMsgPopupOpen({show: true, msg: '관심정보가 추가 되었습니다.'});
            setIsConfirmPopupOpen({show: false, msg: ''});
          }
        })
        .catch((err) => {
          setIsMsgPopupOpen({show: true, msg: err.response.data.data.message});
          setIsConfirmPopupOpen({show: false, msg: ''});
        })
    }

    if(cartFlag) {
      // 장바구니 추가 로직..
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
        <p className={classes.pruductPrice}>{(productInfo.product.price) == null ? 0 :(productInfo.product.price).toLocaleString()} <span>원</span></p>
        <div className={classes.userFavSection}>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} onClick={bookmarkHandler} src={bookmark} />
            <span>{bookMarkcount}</span>
          </div>
          <div className={classes.bookmarkSection}>
            <img className={classes.bookmark} onClick={cartHandler} src={cart} />
            <span>{productInfo.product.reviewDto != undefined ? productInfo.product.reviewDto.length : 0}</span>
          </div>
        </div>
      </div>
      <div id='popupDom'>
        {isMsgPopupOpen.show && <PopupDom>
          <MsgPopup onClick={closeMsgPopup} msg={isMsgPopupOpen.msg} />
        </PopupDom>}
        {isConfirmPopupOpen.show && <PopupDom>
          <ConfirmPopup onConfirm={confirmHandler} onClick={closeConfirmPopup} msg={isConfirmPopupOpen.msg} />
        </PopupDom>}
      </div>
    </div>
  );
}

export default Product;