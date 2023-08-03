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
import reviewImg from "../../../asset/images/review.jpeg";
import Button from "../../atoms/Button";
import {useEffect, useState} from "react";
import QnaModal from "../../blocks/QnaModal";
import ReviewModal from "../../blocks/ReviewModal";
import Review from "../../blocks/Review";
import axios from "axios";
import {useParams} from "react-router-dom";
import QnaModalView from "../../blocks/QnaModalView";


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

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`http://localhost:8080/api/v1/products/${productSeq}`).then((res) => {
      if (res.status === 200) {
        setProductInfoData(res.data);
        console.log(res.data)
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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setObserver(!observer);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    setObserver(!observer);
  };

  const closeReviewPopup = () => {
    setIsReviewPopup(false);
  };

  const reviewHandler = () => {
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

              <div className={classes.buyBtn}>
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
              <div key={idx} onClick={() => {reviewPopup(item)}} className={classes.review}>
                <div>
                  <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={item.reviewImg} />
                </div>
                <div className={classes.infoArea}>
                  <div className={classes.reviewTitle}>
                    <p style={{color : 'rgba(34,34,34,.5)'}}>{`user0${idx+1}`}</p>
                    <div className={classes.reviewLike}>
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

        </div>
      </Layout>
    </>
  );
}

export default Details;