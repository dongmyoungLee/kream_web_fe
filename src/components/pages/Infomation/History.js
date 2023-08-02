import Applicant from "../../blocks/Applicant";
import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import Product from "../../blocks/Product";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {humanResourcesDevJob, humanResourcesMarketingJob, humanResourcesPlannerJob} from "../../../common/Menus";
import axios from "axios";

const History = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const goToDetails = () => {
    navigate('/member/details');
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/products').then((res) => {
      if (res.status === 200) {
        setProductList(res.data);
        console.log(res.data);
      }
    })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  return (
    <MypageLayout>
      <Applicant />
      <div className={classes.account}>
        <div className={classes.management_box}>
          <div className={classes.dark}>
            <h2 className={classes.h2_option}>장바구니</h2>
            <p  className={classes.p_option}>내 장바구니 내역을 확인할 수 있습니다.</p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.cartWrap}>
          {productList.map((item, idx) => (
            <Product product={item} idx={idx} key={idx} onClick={goToDetails} />
          ))}
        </div>
      </div>
    </MypageLayout>
  );
}

export default History;