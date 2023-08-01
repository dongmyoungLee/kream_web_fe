import Layout from "../../blocks/Layout";
import classes from "../../../styles/pages/infomation/details.module.css";
import d1 from "../../../asset/images/d1.webp";
import bookmark from "../../../asset/images/bookmark2.png";
import cart from "../../../asset/images/cart.png";
import reviewImg from "../../../asset/images/review.jpeg";
import Button from "../../atoms/Button";
import {useState} from "react";
import QnaModal from "../../blocks/QnaModal";
import ReviewModal from "../../blocks/ReviewModal";
import Review from "../../blocks/Review";

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewPopup, setIsReviewPopup] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const qnaHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  const closeReviewPopup = () => {
    setIsReviewPopup(false);
  };

  const reviewHandler = () => {
    setIsReviewModalOpen(true);
  }

  const reviewPopup = () => {
    setIsReviewPopup(true);
  }

  return (
    <>
      <Layout>
        <div className={classes.box}>
          <div className={classes.leftSection}>
            <div className={classes.imgWrap}>
              <img src={d1} className={classes.imgOption} />
            </div>
          </div>
          <div className={classes.rightSection}>
            <div className={classes.spaceArea}>
              <div>
                <h2 className={classes.title}>Nike</h2>
                <p className={classes.title2}>Nike SB Dunk Low Heineken</p>
                <p className={classes.title3}>나이키 SB 덩크 로우 하이네켄</p>
              </div>

              <div className={classes.sizeArea}>
                <p>사이즈</p>
                <p>245</p>
              </div>

              <div className={classes.sizeArea2} >
                <p>구매가</p>
                <p style={{fontSize : '18px', fontWeight : '600', color : '#222'}}>8,000,000원</p>
              </div>

              <div className={classes.buyBtn}>
                <p>구매</p>
              </div>

              <div className={classes.bookmarkArea}>
                <img style={{height : '25px'}} src={bookmark} />
                <p>관심상품</p>
                <p style={{fontWeight : '600'}}>9,483 <span style={{color: 'rgba(34,34,34,.5)', fontSize : '14px'}}>명이 관심을 보이고 있어요.</span></p>
              </div>

              <div className={classes.bookmarkArea}>
                <img style={{height : '25px'}} src={cart} />
                <p>장바구니</p>
                <p style={{fontWeight : '600'}}>1,202 <span style={{color: 'rgba(34,34,34,.5)', fontSize : '14px'}}>명이 장바구니에 추가 했어요.</span></p>
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
                    <p>23/07/28</p>
                  </div>
                  <div className={classes.productInfoItem}>
                    <p style={{color : 'rgba(34,34,34,.5)', fontSize : '14px', marginBottom : '10px'}}>컬러</p>
                    <p>WHITE, GREEN</p>
                  </div>
                  <div className={classes.productInfoItem}>
                    <p style={{color : 'rgba(34,34,34,.5)', fontSize : '14px', marginBottom : '10px'}}>구매가</p>
                    <p>8,000,000</p>
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
            <QnaModal onClose={closeModal} />
          )}

          <div className={classes.question}>
            <p style={{fontWeight : '600', cursor: 'pointer'}}>정사이즈 인가요 ?</p>

            <div className={classes.innerQuestion}>
              <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>pajang1515@daum.net</p>
              <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>2023.08.01</p>
              <p>미답변</p>
              <p style={{fontWeight : '600', textDecoration : 'underline', cursor :'pointer'}}>답변하기</p>
            </div>
          </div>
          <div className={classes.question}>
            <p style={{fontWeight : '600', cursor: 'pointer'}}>정사이즈 인가요 ?</p>

            <div className={classes.innerQuestion}>
              <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>pajang1515@daum.net</p>
              <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>2023.08.01</p>
              <p>미답변</p>
              <p style={{fontWeight : '600', textDecoration : 'underline', cursor :'pointer'}}>답변하기</p>
            </div>
          </div>
          <div className={classes.question}>
            <p style={{fontWeight : '600', cursor: 'pointer'}}>정사이즈 인가요 ?</p>

            <div className={classes.innerQuestion}>
              <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>pajang1515@daum.net</p>
              <p style={{color : 'rgba(34, 34, 34, 0.5)'}}>2023.08.01</p>
              <p>미답변</p>
              <p style={{fontWeight : '600', textDecoration : 'underline', cursor :'pointer'}}>답변하기</p>
            </div>
          </div>
        </div>

        {isReviewModalOpen && (
          <ReviewModal onClose={closeReviewModal} />
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
            <Review onClose={closeReviewPopup} />
          )}

          <div className={classes.reviewWrap}>
            <div onClick={reviewPopup} className={classes.review}>
              <div>
                <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={reviewImg} />
              </div>
              <div className={classes.infoArea}>
                <div className={classes.reviewTitle}>
                  <p style={{color : 'rgba(34,34,34,.5)'}}>DM</p>
                  <div className={classes.reviewLike}>
                    <p>♡</p>
                    <p>12</p>
                  </div>
                </div>
              </div>
              <div style={{padding : '5px'}}>
                <p>좋긴한데 너무 비싸다</p>
              </div>
            </div>

            <div onClick={reviewPopup} className={classes.review}>
              <div>
                <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={reviewImg} />
              </div>
              <div className={classes.infoArea}>
                <div className={classes.reviewTitle}>
                  <p style={{color : 'rgba(34,34,34,.5)'}}>DM</p>
                  <div className={classes.reviewLike}>
                    <p>♡</p>
                    <p>12</p>
                  </div>
                </div>
              </div>
              <div style={{padding : '5px'}}>
                <p>좋긴한데 너무 비싸다</p>
              </div>
            </div>

            <div onClick={reviewPopup} className={classes.review}>
              <div>
                <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={reviewImg} />
              </div>
              <div className={classes.infoArea}>
                <div className={classes.reviewTitle}>
                  <p style={{color : 'rgba(34,34,34,.5)'}}>DM</p>
                  <div className={classes.reviewLike}>
                    <p>♡</p>
                    <p>12</p>
                  </div>
                </div>
              </div>
              <div style={{padding : '5px'}}>
                <p>좋긴한데 너무 비싸다</p>
              </div>
            </div>

            <div onClick={reviewPopup} className={classes.review}>
              <div>
                <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={reviewImg} />
              </div>
              <div className={classes.infoArea}>
                <div className={classes.reviewTitle}>
                  <p style={{color : 'rgba(34,34,34,.5)'}}>DM</p>
                  <div className={classes.reviewLike}>
                    <p>♡</p>
                    <p>12</p>
                  </div>
                </div>
              </div>
              <div style={{padding : '5px'}}>
                <p>좋긴한데 너무 비싸다</p>
              </div>
            </div>

            <div onClick={reviewPopup} className={classes.review}>
              <div>
                <img style={{width : '100%', height : '250px', borderRadius : '10px'}} src={reviewImg} />
              </div>
              <div className={classes.infoArea}>
                <div className={classes.reviewTitle}>
                  <p style={{color : 'rgba(34,34,34,.5)'}}>DM</p>
                  <div className={classes.reviewLike}>
                    <p>♡</p>
                    <p>12</p>
                  </div>
                </div>
              </div>
              <div style={{padding : '5px'}}>
                <p>좋긴한데 너무 비싸다</p>
              </div>
            </div>

          </div>

        </div>
      </Layout>
    </>
  );
}

export default Details;