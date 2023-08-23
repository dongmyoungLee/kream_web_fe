import classes from "../../../styles/pages/layout/mypage.module.css";
import MypageLayout from "../../blocks/MypageLayout";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ApplicantAdmin from "../../blocks/ApplicantAdmin";
import {useSelector} from "react-redux";
import Button from "../../atoms/Button";
import QnaModal from "../../blocks/QnaModal";
import ProductAddModal from "../../blocks/ProductAddModal";

const ProductAdmin = () => {
  const [addPopup, setAddPopup] = useState(false);
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin.id != 'pajang1515@gmail.com') {
      navigate(-1);
    }
  }, []);

  const addProduct = () => {
    setAddPopup(true);
  }

  return (
    <MypageLayout remove_height="profile">
      <ApplicantAdmin />
      <div className={classes.account}>
        <div className={classes.management_box}>
          <div className={classes.dark}>
            <h2 className={classes.h2_option}>상품 관리</h2>
            <p  className={classes.p_option}>상품 추가 및 삭제 관리를 할 수 있습니다.</p>
          </div>
          <div>

            <div style={{width : '137px'}}>
              <Button btn={{
                value : '상품추가',
                onClick : addProduct
              }} />
            </div>
          </div>
        </div>

        <div className={classes.grid}>

        </div>
        {addPopup && (
          <ProductAddModal />
        )}
      </div>

    </MypageLayout>
  );
}

export default ProductAdmin;