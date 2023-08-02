// import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import {useSelector} from "react-redux";
import classes from '../../../styles/pages/layout/mypage.module.css';
import InputDivComponent from "../../blocks/InputDivComponent";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Applicant2 from "../../blocks/Applicant2";
import s1 from "../../../asset/images/s1.webp";


const Order = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);

  const navigate = useNavigate();

  useEffect(() => {


  }, []);

  const currPwdHandler = (e) => {
    //
  }

  const changePwdHandler = (e) => {
    //
  }

  const changeCheckPwdHandler = (e) => {
    //
  }

  const modifyMyInfo = (e) => {
    // 1. 일단 navigate (useNavigate) 를 가져오고 잘 이동하는지 확인한다.
    // 2. 컴포넌트를 새로 만든다
    // 3. router의 주소와 해당 컴포넌트를 연결시킨다.
    // 4. 새로 만든다.
    navigate("/member/update")

  }

  const inputComponent_carrerYn = isLogin.userJobCareerYn === "Y"  && <div>
    <InputDivComponent value={{first :isLogin.userLastCompany, second :isLogin.userLastJobGroup, third : isLogin.userLastJobGroupCareer, fourth : ''}} label="최종 경력" inputTitle={{first : '회사명', second : '직무', third : '재직기간', fourth :''}} />
    <div className={classes.line}></div>
  </div>

  return (
    <MypageLayout >
      <Applicant2 />
      <div className={classes.account}>
        <div className={classes.management_box}>
          <div className={classes.dark}>
            <h2 className={classes.h2_option}>주문 내역</h2>
            <p  className={classes.p_option}>내 최근 주문내역과 배송내역을 확인할 수 있습니다.</p>
          </div>
        </div>
        <div className={classes.line}></div>

        <div className={classes.orderMargin}>
          <div className={classes.orderWrap}>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>0</span>
                <span className={classes.orderBotText}>결제완료</span>
              </div>
              <img className={classes.orderArrow} src="https://abcmart.a-rt.com/static/images/mypage/mypage_icon_order_list_arrow.png" />
            </div>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>0</span>
                <span className={classes.orderBotText}>상품준비중</span>
              </div>
              <img className={classes.orderArrow} src="https://abcmart.a-rt.com/static/images/mypage/mypage_icon_order_list_arrow.png" />
            </div>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>0</span>
                <span className={classes.orderBotText}>배송중/픽업준비완료</span>
              </div>
              <img className={classes.orderArrow} src="https://abcmart.a-rt.com/static/images/mypage/mypage_icon_order_list_arrow.png" />
            </div>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>0</span>
                <span className={classes.orderBotText}>배송/수령완료</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.management_box2}>
          <div className={classes.dark}>
            <h2 className={classes.h2_option2}>배송 현황</h2>
          </div>
        </div>
        <div>
          <div className={classes.line3}></div>
          <div className={classes.deliItem}>
            <div className={classes.rightDeli}>
              <p>주문 번호 <span className={classes.spanHighlight}>2023071827746</span></p>
              <p>주문 일시 <span className={classes.spanHighlight}>2023-07-18 11:17:25</span></p>
            </div>
            <div className={classes.leftDeli}>
              <p>총 결제금액 <span className={classes.priceSpan}>8,000,000원</span></p>
            </div>
          </div>
          <div className={classes.line3}></div>
          <div className={classes.deliContent}>
            <div className={classes.deliContentLeft}>
              <div className={classes.leftContents}>
                <div className={classes.imgWrap}>
                  <img src={s1} className={classes.imgSize} />
                </div>
                <div>
                  <p className={classes.firstText}>Nike</p>
                  <p className={classes.secondText}>Nike SB Dunk Low Heineken</p>
                  <p className={classes.thirdText}>나이키 SB 덩크 로우 하이네켄</p>
                  <p className={classes.fourthText}>245 / 1개</p>
                </div>
              </div>
            </div>
            <div className={classes.deliContentRight}>
              <div className={classes.priceBox}>
                <p><span style={{color : '#ee1c25', fontWeight: '600', fontSize: '18px'}}>8,000,000</span> 원</p>
              </div>
              <div className={classes.priceBox2}>
                <p style={{fontSize : '15px', fontWeight : '600', marginBottom : '10px'}}>배송완료</p>
                <div>
                  <p style={{fontSize : '13px', color : '#666', marginBottom : '3px'}}>한진택배</p>
                  <p style={{fontSize : '13px', fontWeight : '700', textDecoration : 'underline'}}>513419024160</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MypageLayout>
  );
}

export default Order;