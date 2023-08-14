import bookmark_img from '../asset/images/bookmark.png';
import follow_img from '../asset/images/follow.png';
import myHistory from '../asset/images/cart.png';
import myHistory2 from '../asset/images/myhistory.png';
import myProfile from '../asset/images/myprofile.png';
import myAccount from '../asset/images/myaccount.png';



export const headerMenu = [
    {
      menuName : 'Shoes',
      menuLink : '/employment/human-resources'
    }
    // {
    //   menuName : '남성',
    //   menuLink : '/employment/announcement'
    // },
    // {
    //   menuName : '여성',
    //   menuLink : '/employment/resize'
    // },
];

export const mypageFavMenu = [
  {
    menuName : '내 관심정보',
    imgPath : bookmark_img,
    clickFlag : 'bookmark',
    path : '/member/bookmark',
  },
  {
    menuName : '주문 내역',
    imgPath : myHistory2,
    clickFlag : 'order',
    path : '/member/order',
  },
]


export const mypageTooltipMenu = [

    {
      menuName : '장바구니',
      imgPath : myHistory,
      clickFlag : 'history',
      path : '/member/history',
    },
    {
      menuName : '프로필 관리',
      imgPath : myProfile,
      clickFlag: 'profile',
      path : '/member/profile',
    },
    {
      menuName : '계정 정보',
      imgPath : myAccount,
      clickFlag: 'account',
      path : '/member/account',
    },
];

export const mypageTooltipAdminMenu = [

    {
      menuName : '상품 관리',
      imgPath : myAccount,
      clickFlag : 'productAdmin',
      path : '/member/productAdmin',
    },
    {
      menuName : 'Q&A 관리',
      imgPath : myAccount,
      clickFlag: 'qnaAdmin',
      path : '/member/productQnA',
    },
    {
      menuName : '리뷰 관리',
      imgPath : myAccount,
      clickFlag: 'reviewAdmin',
      path : '/member/reviewAdmin',
    },
    {
      menuName : '사용자 관리',
      imgPath : myAccount,
      clickFlag: 'memberAdmin',
      path : '/member/memberAdmin',
    },
    {
      menuName : '주문 결제 관리',
      imgPath : myAccount,
      clickFlag: 'orderAdmin',
      path : '/member/orderAdmin',
    },
    {
      menuName : '배송 관리',
      imgPath : myAccount,
      clickFlag: 'deliveryAdmin',
      path : '/member/deliveryAdmin',
    },
];

export const mypageTooltipMenu2 = [

  {
    menuName : '내 관심정보',
    imgPath : bookmark_img,
    clickFlag : 'bookmark',
    path : '/member/bookmark',
  },
  {
    menuName : '주문 내역',
    imgPath : myHistory2,
    clickFlag : 'order',
    path : '/member/order',
  },
];

export const careerFilterCategory = [
  {
    menuName : '240'
  },
  {
    menuName : '245'
  },
  {
    menuName : '250'
  },
  {
    menuName : '255'
  },
  {
    menuName : '260'
  },
  {
    menuName : '265'
  },
  {
    menuName : '270'
  },
  {
    menuName : '275'
  }
];

export const regionFilterCategory = [
  {
    menuName : 'red'
  },
  {
    menuName : 'orange'
  },
  {
    menuName : 'yellow'
  },
  {
    menuName : 'green'
  },
  {
    menuName : 'blue'
  },
  {
    menuName : 'sky'
  },
  {
    menuName : 'pink'
  },
];

export const humanResourcesCategory = [
  {
    menuName : 'Nike'
  },
  {
    menuName : 'Adidas'
  },
  {
    menuName : 'New Balance'
  }
];

export const humanResourcesDevJob = [
  {
    menuName : '최근 30일 발매'
  },
  {
    menuName : '신상품 순'
  },
  {
    menuName : '신상품 순'
  },
  {
    menuName : '신상품 순'
  },
  {
    menuName : '신상품 순'
  },
  {
    menuName : '신상품 순'
  },
];

export const humanResourcesPlannerJob = [
  {
    menuName : 'PM/PO/서비스기획자'
  },
  {
    menuName : '전략기획자'
  },
  {
    menuName : '상품기획자/MD'
  },
  {
    menuName : '데이터 분석가'
  },
  {
    menuName : '게임 기획자'
  },
  {
    menuName : '사업개발/기획자'
  },
  {
    menuName : '기타'
  },
]

export const humanResourcesMarketingJob = [
  {
    menuName : '브랜드 마케터'
  },
  {
    menuName : '퍼포먼스 마케터'
  },
  {
    menuName : '콘텐츠 마케터'
  },
  {
    menuName : '디지털 마케터'
  },
  {
    menuName : '마케팅 기획자'
  },
  {
    menuName : '광고 기획자'
  },
  {
    menuName : 'PR/카피라이터'
  },
  {
    menuName : '기타'
  },

];

export const humanResourcesDesignJob = [
  {
    menuName : 'UI/UX 디자이너'
  },
  {
    menuName : 'BI/BX 디자이너'
  },
  {
    menuName : '그래픽 디자이너'
  },
  {
    menuName : '콘텐츠 디자이너'
  },
  {
    menuName : '영상/모션 디자이너'
  },
  {
    menuName : '기타'
  },
];

export const humanResourcesEtcJob = [
  {
    menuName : '경영지원'
  },
  {
    menuName : '회계/재무'
  },
  {
    menuName : 'HR 매니저'
  },
  {
    menuName : 'CX/CS 매니저'
  },
  {
    menuName : '세일즈 매니저'
  },
  {
    menuName : '영업관리'
  },
  {
    menuName : '기타'
  },

];

export const humanResourcesCareer = [
  {
    menuName : '직무 관련 경험 없음'
  },
  {
    menuName : '1년 차'
  },
  {
    menuName : '2년 차'
  },
  {
    menuName : '3년 차'
  },
  {
    menuName : '4년 차'
  },
  {
    menuName : '5년 차'
  },
  {
    menuName : '6년 차'
  },
  {
    menuName : '7년 차 이상'
  },
];

export const humanResourcesSchoolStatus = [
  {
    menuName : '졸업'
  },
  {
    menuName : '재학'
  },
  {
    menuName : '휴학'
  },
  {
    menuName : '수료'
  },
  {
    menuName : '중퇴'
  },
  {
    menuName : '자퇴'
  },
  {
    menuName : '졸업예정'
  },
]

export const skillSet = [
  {
    menuName : 'HTML5'
  },
  {
    menuName : 'CSS3'
  },
  {
    menuName : 'Javascript'
  },
  {
    menuName : 'TypeScript'
  },{
    menuName : 'C++'
  },
  {
    menuName : 'React'
  },{
    menuName : 'Java'
  },{
    menuName : 'Mysql'
  },
  {
    menuName : 'Vue.js'
  },
  {
    menuName : 'AngularJS'
  },{
    menuName : 'Next.js'
  },{
    menuName : 'Svelte'
  },{
    menuName : 'React native'
  },{
    menuName : 'Flutter'
  },{
    menuName : 'iOS'
  },{
    menuName : 'Android Studio'
  },{
    menuName : 'Kotlin'
  },{
    menuName : 'C#'
  },{
    menuName : 'Unity'
  },{
    menuName : 'Unreal'
  },{
    menuName : 'PHP'
  },{
    menuName : 'Node.js'
  },{
    menuName : 'Spring'
  },{
    menuName : 'SpringBoot'
  },{
    menuName : 'Nest.js'
  },{
    menuName : 'Express.js'
  },{
    menuName : 'Python'
  },{
    menuName : 'Django'
  },{
    menuName : 'Flask'
  }
]

