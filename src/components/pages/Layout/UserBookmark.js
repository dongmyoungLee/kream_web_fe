import Layout from "../../blocks/Layout";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import {useEffect, useState} from "react";
import {humanResourcesDevJob, humanResourcesMarketingJob, humanResourcesPlannerJob} from "../../../common/Menus";
import FilteredItem from "../../blocks/FilteredItem";
import {useSelector} from "react-redux";
import userDefaultImg from "../../../asset/images/defaultuser.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Product from "../../blocks/Product";
import ProductFav from "../../blocks/ProductFav";

const UserBookmark = () => {
  const [category, setCategory] = useState('Nike');
  const [filterJobList, setFilterJobList] = useState(humanResourcesDevJob);
  const [isDetailJobMenuShow, setIsDetailJobMenuShow] = useState(false);
  const [isDetailCareerMenuShow, setIsDetailCareerMenuShow] = useState(false);
  const [isDetailRegionMenuShow, setIsDetailRegionMenuShow] = useState(false);
  const [selectJobCategoryCount, setSelectJobCategoryCount] = useState(0);
  const [selectCareerCategoryCount, setSelectCareerCategoryCount] = useState(0);
  const [selectRegionCategoryCount, setSelectRegionCategoryCount] = useState(0);
  const [userJobFilter, setUserJobFilter] = useState([]);
  const [userCareerFilter, setUserCareerFilter] = useState([]);
  const [userRegionFilter, setUserRegionFilter] = useState([]);
  const [userTopListData, setUserTopListData] = useState([]);
  const [userBotListData, setUserBotListData] = useState([]);
  const [filterBlock, setFilterBlock] = useState([]);
  const [devUser, setDevUser] = useState([]);
  const [addMoreDataCount, setAddMoreDataCount] = useState(1);
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const [productList, setProductList] = useState([]);
  const [observer, setObserver] = useState(false);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/members`).then((res) => {
      if (res.status === 200) {
        const newProductList = [...res.data[0].interests];
        setProductList(newProductList);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  useEffect(() => {
    // 필터리스트 변경할용도..
    switch (category) {
      case 'Nike' :
        setFilterJobList(humanResourcesDevJob);
      break;
      case 'Adidas' :
        setFilterJobList(humanResourcesPlannerJob);
      break;
      case 'New Balance' :
        setFilterJobList(humanResourcesMarketingJob);
      break;
    }

    setIsDetailJobMenuShow(false);
    setIsDetailCareerMenuShow(false);
    setIsDetailRegionMenuShow(false);
    setSelectJobCategoryCount(0);
    setSelectCareerCategoryCount(0);
    setSelectRegionCategoryCount(0);
    setUserJobFilter([]);
    setUserCareerFilter([]);
    setUserRegionFilter([]);
    setFilterBlock([]);

  }, [category])

  const detailMenuJobShow = () => {
    setIsDetailJobMenuShow(!isDetailJobMenuShow);
  }
  const detailMenuCareerShow = () => {
    setIsDetailCareerMenuShow(!isDetailCareerMenuShow);
  }

  const detailMenuRegionShow = () => {
    setIsDetailRegionMenuShow(!isDetailRegionMenuShow);
  }

  const checkBoxChangeHandler = (e) => {

    if (e.target.checked) {
      // 직무필터 item tmp 배열..
      const jobArray = [...userJobFilter, e.target.value];

      // 필터 카운트 추가..
      setSelectJobCategoryCount(selectJobCategoryCount + 1);

      // 직무필터 useState 넣기..
      setUserJobFilter(jobArray);

      // 필터내용 기억해서 블록 만들려고 전달..
      const tmp = [...filterBlock, e.target.value];
      setFilterBlock(tmp);
    } else {

      // 체크 해제시 배열에서 뺀다..
      setUserJobFilter((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));

      // 필터 카운트 감소
      setSelectJobCategoryCount(selectJobCategoryCount - 1);
    }

  }

  const checkBoxChangeCareerHandler = (e) => {
    if (e.target.checked) {
      const careerArray = [...userCareerFilter, e.target.value];

      setSelectCareerCategoryCount(selectCareerCategoryCount + 1);

      setUserCareerFilter(careerArray);

      const tmp = [...filterBlock, e.target.value];
      setFilterBlock(tmp);
    } else {

      setUserCareerFilter((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));

      setSelectCareerCategoryCount(selectCareerCategoryCount - 1);
    }
  }

  const checkBoxChangeRegionHandler = (e) => {

    if (e.target.checked) {
      const regionArray = [...userRegionFilter, e.target.value];

      setSelectRegionCategoryCount(selectRegionCategoryCount + 1);

      setUserRegionFilter(regionArray);

      const tmp = [...filterBlock, e.target.value];
      setFilterBlock(tmp);
    } else {
      setUserRegionFilter((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setSelectRegionCategoryCount(selectRegionCategoryCount - 1);
    }
  }

  const filterRemoveBlock = (e) => {

    setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.getAttribute('value')));

    if (userJobFilter.includes(e.target.getAttribute('value'))) {
      // 필터 카운트 감소..
      setSelectJobCategoryCount(selectJobCategoryCount - 1);

      // 체크 제거..
      setUserJobFilter((prevItems) => prevItems.filter((item) => item !== e.target.getAttribute('value')));
    }

    if (userCareerFilter.includes(e.target.getAttribute('value'))) {
      setSelectCareerCategoryCount(selectCareerCategoryCount - 1);

      setUserCareerFilter((prevItems) => prevItems.filter((item) => item !== e.target.getAttribute('value')));
    }

    if (userRegionFilter.includes(e.target.getAttribute('value'))) {
      setSelectRegionCategoryCount(selectRegionCategoryCount - 1);

      setUserRegionFilter((prevItems) => prevItems.filter((item) => item !== e.target.getAttribute('value')));
    }
  }

  const profileUpdate = () => {
    navigate('/member/profile');
  }

  const goToDetails = (productSeq) => {
    navigate(`/member/details/${productSeq}`);
  }

  const handleProductDelete = (deletedProductSeq) => {
    setProductList(prevList => prevList.filter(item => item.productSeq !== deletedProductSeq));
  }

  return (
      <>
        <Layout >
          {/*{(isLogin.isLogin && isLogin.userJobEnterdYn === 'N') && <WelcomeInfo onClick={profileUpdate} />}*/}

          {/*<h2 style={{fontSize : '28px', color : '#141617', fontWeight : '700', marginTop : '20px'}}>내 관심정보</h2>*/}
          <CategorySection setCategory={setCategory} />
          <section className={classes.filterSection}>
            {/*<article className={classes.filterArticle}>*/}
            {/*  <FilterButton userMemoryFilter={userJobFilter} onChange={checkBoxChangeHandler} onClick={detailMenuJobShow} isDetailMenuShow={isDetailJobMenuShow} menuHide={setIsDetailJobMenuShow} menuList={filterJobList} value="직무" count={selectJobCategoryCount}/>*/}

            {/*  <FilterButton userMemoryFilter={userCareerFilter} onChange={checkBoxChangeCareerHandler} onClick={detailMenuCareerShow} left="92px" isDetailMenuShow={isDetailCareerMenuShow} menuHide={setIsDetailCareerMenuShow} menuList={careerFilterCategory} value="경력" count={selectCareerCategoryCount}/>*/}

            {/*  <FilterButton userMemoryFilter={userRegionFilter} onChange={checkBoxChangeRegionHandler} onClick={detailMenuRegionShow} left="182px" isDetailMenuShow={isDetailRegionMenuShow} menuHide={setIsDetailRegionMenuShow} menuList={regionFilterCategory} value="지역" count={selectRegionCategoryCount}/>*/}
            {/*</article>*/}
            <article>
              <FilteredItem item={filterBlock} onClick={filterRemoveBlock} />
            </article>
          </section>
          <section className={classes.mainContents}>
            <div className={classes.mainCardWrap2}>
              {productList.length != 0 && productList.map((item, idx) => (
                <ProductFav  onDelete={handleProductDelete} observer={() => setObserver(!observer)} product={item} idx={idx} key={item.productSeq} onClick={() => goToDetails(item.productSeq)} />
              ))}
              {productList.length == 0 && <p style={{fontWeight : '500', fontSize : '18px'}}>관심 정보가 없습니다.</p>}
            </div>
          </section>
        </Layout>
      </>
  );
}

export default UserBookmark;