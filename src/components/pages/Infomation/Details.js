import Layout from "../../blocks/Layout";
import classes from "../../../styles/pages/infomation/details.module.css";
import d1 from "../../../asset/images/d1.webp";
import d2 from "../../../asset/images/d2.webp";
import d3 from "../../../asset/images/d3.webp";
import d4 from "../../../asset/images/d4.webp";
import d5 from "../../../asset/images/d5.webp";
import d6 from "../../../asset/images/d6.webp";
import d7 from "../../../asset/images/d7.webp";
import d8 from "../../../asset/images/d8.webp";
import bookmark from "../../../asset/images/bookmark2.png";
import cart from "../../../asset/images/cart.png";
import Button from "../../atoms/Button";
import {useEffect, useState} from "react";
import QnaModal from "../../blocks/QnaModal";
import ReviewModal from "../../blocks/ReviewModal";
import Review from "../../blocks/Review";
import axios from "axios";
import {useParams} from "react-router-dom";
import QnaModalView from "../../blocks/QnaModalView";
import {useSelector} from "react-redux";
import PopupDom from "../../blocks/PopupDom";
import MsgPopup from "../../blocks/MsgPopup";
import ConfirmPopup from "../../blocks/ConfirmPopup";


const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  const [isReviewPopup, setIsReviewPopup] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [productInfoData, setProductInfoData] = useState([]);
  const { productSeq } = useParams();
  const [imgSrc, setImgSrc] = useState(null);
  const [observer, setObserver] = useState(false);
  const [qnAIdx, setQnAIdx] = useState(0);
  const [review, setReview] = useState('');
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const [isMsgPopupOpen, setIsMsgPopupOpen] = useState({show : false, msg: ''});
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState({show : false, msg: ''});
  const [orderFlag, setOrderFlag] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {


    axios.get(`http://localhost:8080/api/v1/products/${productSeq}`).then((res) => {
      if (res.status === 200) {
        setProductInfoData(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })


  }, [observer]);

  useEffect(() => {

    switch (productInfoData.detailImgUrl) {
      case 'd1':
        setImgSrc(d1);
        break;
      case 'd2':
        setImgSrc(d2);
        break;
      case 'd3':
        setImgSrc(d3);
        break;
      case 'd4':
        setImgSrc(d4);
        break;
      case 'd5':
        setImgSrc(d5);
        break;
      case 'd6':
        setImgSrc(d6);
        break;
      case 'd7':
        setImgSrc(d7);
        break;
      case 'd8':
        setImgSrc(d8);
        break;
      default:
        setImgSrc(null);
    }
  }, [productInfoData.detailImgUrl]);
  const qnaHandler = () => {
    if (isLogin.id == null) {
      setIsMsgPopupOpen({show: true, msg: '로그인 후 이용하세요.'});
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsMsgPopupOpen({show: true, msg: 'Q&A 가 등록 되었습니다.'});
    setIsModalOpen(false);
    setObserver(!observer);
  };

  const closeReviewModal = () => {
    setIsMsgPopupOpen({show: true, msg: 'Q&A 가 등록 되었습니다.'});
    setIsReviewModalOpen(false);
    setObserver(!observer);
  };

  const closeReviewPopup = () => {
    setIsReviewPopup(false);
  };

  const reviewHandler = () => {
    if (isLogin.id == null) {
      setIsMsgPopupOpen({show: true, msg: '로그인 후 이용하세요.'});
      return;
    }

    setIsReviewModalOpen(true);
  }

  const reviewPopup = (review) => {
    setIsReviewPopup(true);
    setReview(review);
  }

  const answerHandler = (idx) => {
    setIsAnswerModalOpen(true);
    setQnAIdx(idx);
  }

  const closeAnswerModal = () => {
    setIsAnswerModalOpen(false);
  }

  const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomCode = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters.charAt(randomIndex);
    }

    return randomCode;
  };
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  const buyHandler = () => {
    setOrderFlag(true);
    setIsConfirmPopupOpen({show: true, msg: '구매 하시겠습니까 ? '});
  }

  const likeHandler = (review) => {

    if (isLogin.id == null) {
      setIsMsgPopupOpen({show: true, msg: '로그인 후 이용하세요.'});
      return;
    }

    axios.post(`http://localhost:8080/api/v1/reviews/${review.reviewSeq}/like/${isLogin.memberSeq}`)
      .then((res) => {
        if(res.status == 200) {
          setObserver(!observer);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const closeMsgPopup = () => {
    setIsMsgPopupOpen({show: false, msg: ''});
    setIsConfirmPopupOpen({show: false, msg: ''});
  }
  const closeConfirmPopup = () => {
    setIsConfirmPopupOpen({show: false, msg: ''});
    setIsMsgPopupOpen({show: false, msg: ''});
  }

  const confirmHandler = () => {

    if(orderFlag) {
      const randomCode = generateRandomCode(10);
      const orderDate = getCurrentDate();

      axios.post(`http://localhost:8080/api/v1/orders/${productSeq}/${isLogin.memberSeq}`, {
        "orderNum" : randomCode,
        "orderDate" :orderDate,
        "paymentAmount" : productInfoData.price,
        "paymentMethod" : "card",
        "paymentStatus" : "결제",
        "cardType" : "신한",
        "paymentDate" : "2023-08-03T15:23:23",
        "recipientAddress" : isLogin.address,
        "memberSeq" : isLogin.memberSeq
      })
      .then((res) => {
        if(res.status == 200) {
          setIsMsgPopupOpen({show: true, msg: '구매가 완료 되었습니다.'});
        }
      })
      .catch((err) => {
        setIsMsgPopupOpen({show: true, msg: err.response.data.data.message});
        setIsConfirmPopupOpen({show: false, msg: ''});
      })
    }

  }

  return (
    <>
      <Layout>
        <div className={classes.box}>
          <div className={classes.leftSection}>
            <div className={classes.imgWrap}>
              <img src={imgSrc} className={classes.imgOption} />
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.spaceArea}>
              <div>
                <h2 className={classes.title}>{productInfoData.brand}</h2>
                <p className={classes.title2}>{productInfoData.ename}</p>
                <p className={classes.title3}>{productInfoData.hname}</p>
              </div>

              <div className={classes.sizeArea}>
                <p>사이즈</p>
                <p>245</p>
              </div>

              <div className={classes.sizeArea2} >
                <p>구매가</p>
                <p style={{fontSize : '18px', fontWeight : '600', color : '#222'}}>{productInfoData.price == undefined ? 0 : productInfoData.price.toLocaleString()}원</p>
              </div>

              <div className={classes.buyBtn} onClick={buyHandler}>
                <p>구매</p>
              </div>

              <div className={classes.bookmarkArea}>
                <img style={{height : '25px'}} src={bookmark} />
                <p>관심상품</p>
                <p style={{fontWeight : '600'}}> {productInfoData.interestDto == undefined ? 0 :productInfoData.interestDto.length} <span style={{color: 'rgba(34,34,34,.5)', fontSize : '14px'}}>명이 관심을 보이고 있어요.</span></p>
              </div>

              <div className={classes.bookmarkArea}>
                <img style={{height : '25px'}} src={cart} />
                <p>장바구니</p>
                <p style={{fontWeight : '600'}}>{productInfoData.reviewDto == undefined ? 0 : productInfoData.reviewDto.length} <span style={{color: 'rgba(34,34,34,.5)', fontSize : '14px'}}>명이 장바구니에 추가 했어요.</span></p>
              </div>

              <div className={classes.productInfo}>
                <h2 className={classes.productTitle}>상품 정보</h2>
                <div className={classes.productWrap}>
                  <div className={classes.productInfoItem}>
                    <p style={{color : 'rgba(34,34,34,.5)', fontSize : '14px', marginBottom : '10px'}}>모델번호</p>
                    <p>CZ0790-106</p>
                  </div>
                  <div className={classes.productInfoItem}>
                    <p style={{color : 'rgba(34,34,34,.5)', fontSize : '14px', marginBottom : '10px'}}>출시일</p>
                    <p>{productInfoData.createAt}</p>
                  </div>
                  <div>
                  <div className={classes.productInfoItem}>

                    <p style={{color : 'rgba(34,34,34,.5)', fontSize : '14px', marginBottom : '10px'}}>컬러</p>

                      {productInfoData.productOptionDto2 != null && productInfoData.productOptionDto2.map((item, idx) => (
                        <span key={idx}>{item.color}<span>&nbsp;</span></span>
                      ))}


                  </div>

                  </div>

                  <div className={classes.productInfoItem}>
                    <p style={{color : 'rgba(34,34,34,.5)', fontSize : '14px', marginBottom : '10px'}}>구매가</p>
                    <p>{productInfoData.price == null ? 0 :productInfoData.price.toLocaleString()}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.qna}>
          <div className={classes.qnaTitle}>
            <h2 style={{fontSize : '20px', color : '#222', fontWeight : '600'}}>상품 Q&A</h2>
            <Button btn={{
              type : '',
              value : '작성',
              width : '80px',
              height: '40px',
              onClick : qnaHandler
            }} />
          </div>

          {isModalOpen && (
            <QnaModal productSeq={productInfoData.productSeq} onClose={closeModal} />
          )}

          {isAnswerModalOpen && (
            <QnaModalView  answer={productInfoData.questionAndAnswerDto[qnAIdx].answer} onClose={closeAnswerModal} />
          )}


          {productInfoData.questionAndAnswerDto != undefined && productInfoData.questionAndAnswerDto.map((item, idx) => (
            <div key={idx} className={classes.question}>
              <div>
                <div style={{display :'flex', gap: '15px', marginBottom : '10px'}}>
                  <span>제목 :</span> <p style={{fontWeight : '600', cursor: 'pointer'}}>{item.title}</p>
                </div>
                <div style={{display :'flex', gap: '15px'}}>
                  <span>내용 :</span> <p style={{fontWeight : '600', cursor: 'pointer'}}>{item.content}</p>
                </div>
              </div>


              <div className={classes.innerQuestion}>
                <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>{item.name}</p>
                <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>2023.08.03</p>
                <p>{item.answer == "" ? <span>미답변</span> : <span onClick={() => {answerHandler(idx)}} style={{color : 'red', cursor : 'pointer'}}>답변보기</span>}</p>
              </div>
            </div>
          ))}
          {productInfoData.questionAndAnswerDto != undefined && productInfoData.questionAndAnswerDto.length == 0 && <p style={{padding : '20px 20px 20px 0'}}>등록된 Q&A 가 없습니다.</p>}
        </div>

        {isReviewModalOpen && (
          <ReviewModal productSeq={productInfoData.productSeq} onClose={closeReviewModal} />
        )}

        <div>
          <div className={classes.qnaTitle}>
            <h2 style={{fontSize : '20px', color : '#222', fontWeight : '600'}}>리뷰</h2>
            <Button btn={{
              type : '',
              value : '작성',
              width : '80px',
              height: '40px',
              onClick : reviewHandler
            }} />
          </div>

          {isReviewPopup && (
            <Review review={review} onClose={closeReviewPopup} />
          )}

          <div className={classes.reviewWrap}>
            {productInfoData.reviewDto != undefined && productInfoData.reviewDto.map((item, idx) => (
              <div key={idx} className={classes.review}>
                <div onClick={() => {reviewPopup(item)}}>
                  <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={item.reviewImg} />
                </div>
                <div className={classes.infoArea}>
                  <div className={classes.reviewTitle}>
                    <p style={{color : 'rgba(34,34,34,.5)'}}>{`user0${idx+1}`}</p>
                    <div className={classes.reviewLike} onClick={() => {likeHandler(item)}}>
                      <p>♡</p>
                      <p>{item.heart == null ? 0 : item.heart}</p>
                    </div>
                  </div>
                </div>
                <div style={{padding : '5px'}}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
            {productInfoData.reviewDto != undefined && productInfoData.reviewDto.length == 0 && <p style={{padding : '20px 20px 20px 0'}}>등록된 리뷰가 없습니다.</p>}
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
      </Layout>
    </>
  );
}

export default Details;