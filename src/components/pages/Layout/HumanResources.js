import Layout from "../../blocks/Layout";
import CategorySection from "../../blocks/CategorySection";
import classes from "../../../styles/pages/layout/humanResources.module.css";
import FilterButton from "../../blocks/FilterButton";
import {useEffect, useState} from "react";
import {
  careerFilterCategory,
  humanResourcesDevJob,
  humanResourcesMarketingJob,
  humanResourcesPlannerJob,
  regionFilterCategory
} from "../../../common/Menus";
import FilteredItem from "../../blocks/FilteredItem";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Product from "../../blocks/Product";
import Swiper from "swiper";


const HumanResources = () => {
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
  const [productList, setProductList] = useState([]);
  const [addMoreDataCount, setAddMoreDataCount] = useState(1);
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.loginCheck.loginInfo);
  const [requestSize, setRequestSize] = useState('');
  const [saveData, setSaveData] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState(productList);


  useEffect(() => {
    // productList 상태 업데이트 후에 화면 다시 렌더링
    // productList 상태가 변경될 때마다 실행됩니다.
   }, [productList]);

  useEffect(() => {
    const swiperOptions = {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: true
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true // 페이지네이션을 클릭 가능하도록 설정합니다.
      },
      slidesPerView: 1,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      loopedSlides: 0,
    }

    const swiper = new Swiper(".swiper", swiperOptions);

    // 필터리스트 변경할용도..
    switch (category) {
      case 'Nike' :
        setFilterJobList(humanResourcesDevJob);

        axios.get('http://localhost:8080/api/v1/products').then((res) => {
          if (res.status === 200) {
            setProductList(res.data);
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

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    return () => {
      // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 스크롤 위치 계산
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 스크롤이 페이지 하단에 도달하면 추가 데이터 로드
    if (scrollTop + windowHeight >= documentHeight) {
      scrollLoadData(addMoreDataCount);
    }
  };

  const scrollLoadData = (num) => {
    // 새로운 데이터를 가져오는 비동기 요청 수행
    // 예를 들어, API 호출 등
    // 가져온 데이터를 기존 데이터와 결합하여 업데이트
    // axios.get('http://localhost:8080/api/v1/products').then((res) => {
    //   if (res.status === 200) {
    //     setProductList(res.data);
    //     console.log(res.data);
    //   }
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   })


  };

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

      // careerArray의 각 요소별로 size 파라미터를 생성합니다.
      const sizeParams = careerArray.map(career => `size=${career}`).join('&');
      setRequestSize(sizeParams);

      axios.post(`http://localhost:8080/api/v1/products/searchBySizeColor?${sizeParams}&color=default`, {})
        .then((res) => {
          if (res.status === 200) {
            // 데이터 업데이트 후 렌더링을 강제로 다시 실행
            const newData = res.data.data;

            setProductList(newData);
          }
        })
        .catch((err) => {
          // 오류 처리
        });
    } else {
      setUserCareerFilter((prevItems) => prevItems.filter((item) => item !== e.target.value));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== e.target.value));

      setSelectCareerCategoryCount(selectCareerCategoryCount - 1);
    }
  }

  const checkBoxChangeRegionHandler = (e) => {
    if (e.target.checked) {
      const region = e.target.value;
      const updatedRegionArray = [...userRegionFilter, region];

      setSelectRegionCategoryCount(selectRegionCategoryCount + 1);
      setUserRegionFilter(updatedRegionArray);
      setFilterBlock((prevItems) => [...prevItems, region]);

      const regionParams = updatedRegionArray.map(region => `color=${region}`).join('&');

      const sizeAndRegionParams = `${requestSize}&${regionParams}`;

      axios.post(`http://localhost:8080/api/v1/products/searchBySizeColor?${sizeAndRegionParams}`, {})
        .then((res) => {
          if (res.status === 200) {
            // 데이터 업데이트 후 렌더링을 강제로 다시 실행
            setProductList(res.data.data);
          }
        })
        .catch((err) => {
          // 오류 처리
        });
    } else {
      const regionToRemove = e.target.value;

      setUserRegionFilter((prevItems) => prevItems.filter((item) => item !== regionToRemove));
      setFilterBlock((prevItems) => prevItems.filter((item) => item !== regionToRemove));
      setSelectRegionCategoryCount(selectRegionCategoryCount - 1);

      // 체크 해제 시 빈 데이터로 업데이트
      setProductList([]);
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

  const searchProductList = (e) => {
    console.log(e.target.value)
  }



  return (
      <>
        <Layout >
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide--one">
                <div style={{marginTop : '30px'}} className={classes.bannerArea}>
                  <div className={classes.bannerAreaSection}>
                  </div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--one">
                <div style={{marginTop : '30px'}} className={classes.bannerArea2}>
                  <div className={classes.bannerAreaSection}>
                  </div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--one">
                <div style={{marginTop : '30px'}} className={classes.bannerArea3}>
                  <div className={classes.bannerAreaSection}>
                  </div>
                </div>
              </div>
            </div></div>

          <CategorySection productList={searchProductList} setCategory={setCategory} />
          <section className={classes.filterSection}>
            <article className={classes.filterArticle}>
              {/*<FilterButton userMemoryFilter={userJobFilter} onChange={checkBoxChangeHandler} onClick={detailMenuJobShow} isDetailMenuShow={isDetailJobMenuShow} menuHide={setIsDetailJobMenuShow} menuList={filterJobList} value="카테고리" count={selectJobCategoryCount}/>*/}

              <FilterButton userMemoryFilter={userCareerFilter} onChange={checkBoxChangeCareerHandler} onClick={detailMenuCareerShow} left="0px" isDetailMenuShow={isDetailCareerMenuShow} menuHide={setIsDetailCareerMenuShow} menuList={careerFilterCategory} value="사이즈" count={selectCareerCategoryCount}/>

              <FilterButton userMemoryFilter={userRegionFilter} onChange={checkBoxChangeRegionHandler} onClick={detailMenuRegionShow} left="104px" isDetailMenuShow={isDetailRegionMenuShow} menuHide={setIsDetailRegionMenuShow} menuList={regionFilterCategory} value="색깔" count={selectRegionCategoryCount}/>
            </article>
            <article>
              <FilteredItem item={filterBlock} onClick={filterRemoveBlock} />
            </article>
          </section>
          <section className={classes.mainContents}>
            <div className={classes.mainCardWrap2}>
              {productList.map((item, idx) => (
                <Product product={item} idx={idx} key={idx} onClick={() => goToDetails(item.productSeq)} />
              ))}
            </div>
          </section>
          <section className={classes.mainContents}>
            <div className={classes.mainCardWrap}>

            </div>
          </section>
        </Layout>
      </>
  );
}

export default HumanResources;