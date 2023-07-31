import Layout from "../../blocks/Layout";
import classes from "../../../styles/pages/infomation/details.module.css";
import d1 from "../../../asset/images/d1.webp";
import bookmark from "../../../asset/images/bookmark2.png";

const Details = () => {
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
                <p style={{fontWeight : '600'}}>9,483</p>
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
      </Layout>
    </>
  );
}

export default Details;