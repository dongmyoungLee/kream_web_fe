import bookmark_img from '../asset/images/bookmark.png';
import follow_img from '../asset/images/follow.png';
import myHistory from '../asset/images/myhistory.png';
import myProfile from '../asset/images/myprofile.png';
import myAccount from '../asset/images/myaccount.png';


export const headerMenu = [
    {
      menuName : '인채 채용',
      menuLink : '/employment/human-resources'
    },
    {
      menuName : '채용 공고',
      menuLink : '/employment/announcement'
    },
    {
      menuName : '이미지 리사이즈',
      menuLink : '/employment/resize'
    },
];

export const mypageFavMenu = [
  {
    menuName : '북마크 모아보기',
    imgPath : bookmark_img,
    clickFlag : 'bookmark',
    path : '/member/bookmark',
  },
  {
    menuName : '팔로우 모아보기',
    imgPath : follow_img,
    clickFlag : 'follow',
    path : '/member/follow',
  },
]


export const mypageTooltipMenu = [

    {
      menuName : '지원 현황',
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

export const careerFilterCategory = [
  {
    menuName : '신입'
  },
  {
    menuName : '1~3년'
  },
  {
    menuName : '4~6년'
  },
  {
    menuName : '7년 이상'
  },
];

export const regionFilterCategory = [
  {
    menuName : '서울'
  },
  {
    menuName : '판교'
  },
  {
    menuName : '경기'
  },
  {
    menuName : '인천'
  },
  {
    menuName : '강원'
  },
  {
    menuName : '대전'
  },
  {
    menuName : '세종'
  },
  {
    menuName : '충청'
  },
  {
    menuName : '광주'
  },
  {
    menuName : '전라'
  },
  {
    menuName : '부산'
  },
  {
    menuName : '대구'
  },
  {
    menuName : '울산'
  },
  {
    menuName : '경상'
  },
  {
    menuName : '제주'
  },


];

export const humanResourcesCategory = [
  {
    menuName : '개발'
  },
  {
    menuName : '기획'
  },
  {
    menuName : '마케팅'
  },
  {
    menuName : '디자인'
  },
  {
    menuName : '경영, 인사, 운영'
  }
];

export const humanResourcesDevJob = [
  {
    menuName : '프론트엔드 개발자'
  },
  {
    menuName : '서버/백엔드 개발자'
  },
  {
    menuName : '웹 풀스택 개발자'
  },
  {
    menuName : '앱 개발자'
  },
  {
    menuName : '머신러닝/인공지능 개발자'
  },
  {
    menuName : '데이터 엔지니어'
  },
  {
    menuName : '게임 개발자'
  },
  {
    menuName : 'DevOps 엔지니어'
  },
  {
    menuName : 'SW/솔루션 엔지니어'
  },
  {
    menuName : '정보보안 엔지니어'
  },
  {
    menuName : 'QA 엔지니어'
  },
  {
    menuName : '기타'
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

