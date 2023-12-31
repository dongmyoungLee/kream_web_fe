// import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import {useSelector} from "react-redux";
import classes from '../../../styles/pages/layout/mypage.module.css';
import InputDivComponent from "../../blocks/InputDivComponent";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Applicant2 from "../../blocks/Applicant2";
import s1 from "../../../asset/images/s1.webp";
import axios from "axios";
import s2 from "../../../asset/images/s2.webp";
import s3 from "../../../asset/images/s3.webp";
import s4 from "../../../asset/images/s4.webp";
import s5 from "../../../asset/images/s5.webp";
import s6 from "../../../asset/images/s6.webp";
import s7 from "../../../asset/images/s7.webp";
import s8 from "../../../asset/images/s8.webp";


const Order = () => {
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const [userPayInfo, setUserPayInfo] = useState('');
  const [userDeliInfo, setUserDeliInfo] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [del1, setDel1] = useState(0);
  const [del2, setDel2] = useState(0);
  const [del3, setDel3] = useState(0);
  const [del4, setDel4] = useState(0);


  const navigate = useNavigate();

  const imgMatch = (imgSrc) => {
    let tag = '';

    switch (imgSrc) {
      case 's1' :
        tag = s1;
      break;

      case 's2' :
        tag = s2;
      break;

      case 's3' :
        tag = s3;
      break;

      case 's4' :
        tag = s4;
      break;

      case 's5' :
        tag = s5;
      break;

      case 's6' :
        tag = s6;
      break;

      case 's7' :
        tag = s7;
      break;

      case 's8' :
        tag = s8;
      break;
    }

    return <img style={{height : '100%'}} src={tag} />
  }



  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/orders/${isLogin.memberSeq}`)
      .then((res) => {
        if (res.status === 200) {
          setUserPayInfo(res.data);

          res.data.forEach((item, idx) => {
            switch (item.delivery[0].deliveryStatus) {
              case 1:
                setDel1(prevDel1 => prevDel1 + 1);
                break;

              case 2:
                setDel2(prevDel2 => prevDel2 + 1);
                break;

              case 3:
                setDel3(prevDel3 => prevDel3 + 1);
                break;

              case 4:
                setDel4(prevDel4 => prevDel4 + 1);
                break;

              default:
                break;
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });


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

  const formatOrderDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const inputComponent_carrerYn = isLogin.userJobCareerYn === "Y"  && <div>
    <InputDivComponent value={{first :isLogin.userLastCompany, second :isLogin.userLastJobGroup, third : isLogin.userLastJobGroupCareer, fourth : ''}} label="최종 경력" inputTitle={{first : '회사명', second : '직무', third : '재직기간', fourth :''}} />
    <div className={classes.line}></div>
  </div>

  return (
    <MypageLayout  remove_height={userPayInfo.length > 1 ? '' : 'profile'}>
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
                <span className={classes.orderStatusCount}>{del1}</span>
                <span className={classes.orderBotText}>결제완료</span>
              </div>
              <img className={classes.orderArrow} src="https://abcmart.a-rt.com/static/images/mypage/mypage_icon_order_list_arrow.png" />
            </div>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>{del2}</span>
                <span className={classes.orderBotText}>상품준비중</span>
              </div>
              <img className={classes.orderArrow} src="https://abcmart.a-rt.com/static/images/mypage/mypage_icon_order_list_arrow.png" />
            </div>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>{del3}</span>
                <span className={classes.orderBotText}>배송중/픽업준비완료</span>
              </div>
              <img className={classes.orderArrow} src="https://abcmart.a-rt.com/static/images/mypage/mypage_icon_order_list_arrow.png" />
            </div>
            <div className={classes.orderBox}>
              <div className={classes.orderStatusWrap}>
                <span className={classes.orderStatusCount}>{del4}</span>
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
        {userPayInfo != '' && userPayInfo.map((item, idx) => (
          <div key={idx}>
            <div className={classes.line3}></div>
            <div className={classes.deliItem}>
              <div className={classes.rightDeli}>
                <p>주문 번호 <span className={classes.spanHighlight}>{item.orderNum}</span></p>
                <p>주문 일시 <span className={classes.spanHighlight}>{formatOrderDate(item.orderDate)}</span></p>
              </div>
            </div>
            <div className={classes.line3}></div>
            <div className={classes.deliContent}>
              <div className={classes.deliContentLeft}>
                <div className={classes.leftContents}>
                  <div className={classes.imgWrap}>
                    {/*<img src="https://png.pngtree.com/png-vector/20210414/ourlarge/pngtree-shoes-icon-design-template-illustration-png-image_3177407.jpg" className={classes.imgSize} />*/}
                    {imgMatch(item.product.imgUrl)}
                  </div>
                  <div>
                    <p className={classes.firstText}>{item.product.brand}</p>
                    <p className={classes.secondText}>{item.product.ename}</p>
                    <p className={classes.thirdText}>{item.product.hname}</p>
                    <p className={classes.fourthText}>{item.product.options} / 1개</p>
                  </div>
                </div>
              </div>
              <div className={classes.deliContentRight}>
                <div className={classes.priceBox}>
                  <p><span style={{color : '#ee1c25', fontWeight: '600', fontSize: '18px'}}>{item.product.price == undefined ? 0 : item.product.price.toLocaleString()} </span> 원</p>
                </div>

                <div className={classes.priceBox2}>
                  {item.delivery[0] != undefined && item.delivery[0].deliveryStatus == 1 && <p style={{fontSize : '15px', fontWeight : '600', marginBottom : '10px'}}>결제완료</p>}
                  {item.delivery[0] != undefined && item.delivery[0].deliveryStatus == 2 && <p style={{fontSize : '15px', fontWeight : '600', marginBottom : '10px'}}>상품준비중</p>}
                  {item.delivery[0] != undefined && item.delivery[0].deliveryStatus == 3 && <p style={{fontSize : '15px', fontWeight : '600', marginBottom : '10px'}}>배송중/픽업준비완료</p>}
                  {item.delivery[0] != undefined && item.delivery[0].deliveryStatus == 4 && <p style={{fontSize : '15px', fontWeight : '600', marginBottom : '10px'}}>배송/수령완료</p>}

                  {item.delivery[0] != undefined && item.delivery[0].deliveryStatus != 1 && item.delivery[0].deliveryStatus != 2 && <div>
                    <p style={{fontSize : '13px', color : '#666', marginBottom : '3px'}}>한진택배</p>
                    <p style={{fontSize : '13px', fontWeight : '700', textDecoration : 'underline'}}>513419024160</p>
                  </div>}

                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </MypageLayout>
  );
}

export default Order;