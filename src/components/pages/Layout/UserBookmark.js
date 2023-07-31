import Layout from "../../blocks/Layout";
import WelcomeInfo from "../../blocks/WelcomeInfo";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import FilterButton from "../../blocks/FilterButton";
import {useEffect, useState} from "react";
import {
  careerFilterCategory,
  humanResourcesDesignJob,
  humanResourcesDevJob,
  humanResourcesEtcJob,
  humanResourcesMarketingJob,
  humanResourcesPlannerJob,
  regionFilterCategory
} from "../../../common/Menus";
import FilteredItem from "../../blocks/FilteredItem";
import {userGet} from "../../../common/api/ApiGetService";
import {useSelector} from "react-redux";
import userDefaultImg from "../../../asset/images/defaultuser.jpg";
import bannerImg from "../../../asset/images/ai_compare_banner.webp";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Product from "../../blocks/Product";

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




  useEffect(() => {
    // 필터리스트 변경할용도..
    switch (category) {
      case 'Nike' :
        setFilterJobList(humanResourcesDevJob);

        axios.get('https://cozlin.com/api/v1/user').then((res) => {
          if (res.status === 200) {
            setUserTopListData(res.data.data.slice(0, 8));
            setUserBotListData(res.data.data.slice(8, 20));
          }
        })
        .catch((err) => {
          console.log(err);
        })

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

  const userTopList = userTopListData.length !== 0 ? userTopListData.map((item, idx) => (
                                                    <div key={idx} className={classes.mainCard}>
                                                      <div className={classes.imgArea}>
                                                        <img style={{width : '100%', height : '100%'}} src={userDefaultImg} />
                                                      </div>
                                                      <div className={classes.mainNameArea}>
                                                        <p>{item.userName}</p>
                                                      </div>
                                                      <div className={classes.mainJobArea}>
                                                        <p className={classes.mainJobText}>{item.userJob.userDesiredJob}</p>
                                                      </div>
                                                      <div className={classes.iconInfoArea}>
                                                        {item.userJob.userJobSkill.split(",").map((item, idx2) => (
                                                          <div key={idx2} className={classes.iconWrap}>
                                                            <div className={classes.iconInfo}>
                                                            </div>
                                                            <p className={classes.iconInfoText}>{item}</p>
                                                          </div>
                                                        ))}
                                                      </div>
                                                    </div>
                                                  ))
                                                : <p>조회되는 데이터가 없습니다.</p>;

  const userBotList = userBotListData.length !== 0 ? userBotListData.map((item, idx) => (
      <div key={idx} className={classes.mainCard}>
        <div className={classes.imgArea}>
          <img style={{width : '100%', height : '100%'}} src={userDefaultImg} />
        </div>
        <div className={classes.mainNameArea}>
          <p>{item.userName}</p>
        </div>
        <div className={classes.mainJobArea}>
          <p className={classes.mainJobText}>{item.userJob.userDesiredJob}</p>
        </div>
        <div className={classes.iconInfoArea}>
          {item.userJob.userJobSkill.split(",").map((item, idx2) => (
            <div key={idx2} className={classes.iconWrap}>
              <div className={classes.iconInfo}>
              </div>
              <p className={classes.iconInfoText}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    ))
    : <p>조회되는 데이터가 없습니다.</p>;


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
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </section>
          {/*<section className={classes.bannerArea}>*/}
          {/*  <div className={classes.bannerAreaSection}>*/}
          {/*    <div className={classes.bannerTextArea}>*/}
          {/*      <h3 className={classes.bannerH3Option}>내 이력서는 어느 회사에 합격할 수 있을까 ?</h3>*/}
          {/*      <div className={classes.bannerBtn}>*/}
          {/*        <p>ChatGPT 이력서 코칭 받기 ></p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <img src={bannerImg} className={classes.bannerImg} />*/}
          {/*  </div>*/}
          {/*</section>*/}
          {/*<section className={classes.mainContents}>*/}
          {/*  <div className={classes.mainCardWrap}>*/}
          {/*    {userBotList}*/}
          {/*  </div>*/}
          {/*</section>*/}
        </Layout>
      </>
  );
}

export default UserBookmark;