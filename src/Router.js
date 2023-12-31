import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Login from "./components/pages/Login/Login";
import Company from "./components/pages/Infomation/Company";
import HumanResources from "./components/pages/Layout/HumanResources";
import Mbti from "./components/pages/Layout/Mbti";
import Signup from "./components/pages/Login/Signup";
import Resize from "./components/pages/Layout/Resize";
import FindUserInfo from "./components/pages/Login/FindUserInfo";
import Account from "./components/pages/Infomation/Account";
import History from "./components/pages/Infomation/History";
import Follow from "./components/pages/Infomation/Follow";
import Profile from "./components/pages/Infomation/Profile";
import HeaderSection from "./components/pages/Layout/HeaderSection";
import ProfileUpdate from './components/pages/Infomation/ProfileUpdate';
import UserBookmark from "./components/pages/Layout/UserBookmark";
import Order from "./components/pages/Infomation/Order";
import Details from "./components/pages/Infomation/Details";
import Admin from "./components/pages/Layout/Admin";
import ProductAdmin from "./components/pages/Infomation/ProductAdmin";
import QnaAdmin from "./components/pages/Infomation/QnaAdmin";
import ReviewAdmin from "./components/pages/Infomation/ReviewAdmin";
import MemberAdmin from "./components/pages/Infomation/MemberAdmin";
import OrderAdmin from "./components/pages/Infomation/OrderAdmin";
import DeliveryAdmin from "./components/pages/Infomation/DeliveryAdmin";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : '/member',
    element : <HeaderSection />,
    children : [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'find-pwd',
        element: <FindUserInfo />
      },
      {
        path : 'account',
        element: <Account />
      },
      {
        path : 'profile',
        element: <Profile />
      },
      {
        path : 'update',
        element: <ProfileUpdate />
      },
      {
        path : 'history',
        element: <History />
      },
      {
        path : 'bookmark',
        element: <UserBookmark />
      },
      {
        path : 'follow',
        element: <Follow />
      },
      {
        path : 'order',
        element: <Order />
      },
      {
        path : 'admin',
        element: <Admin />
      },
      {
        path : 'productAdmin',
        element: <ProductAdmin />
      },
      {
        path : 'qnaAdmin',
        element: <QnaAdmin />
      },
      {
        path : 'reviewAdmin',
        element: <ReviewAdmin />
      },
      {
        path : 'memberAdmin',
        element: <MemberAdmin />
      },
      {
        path : 'orderAdmin',
        element: <OrderAdmin />
      },
      {
        path : 'DeliveryAdmin',
        element: <DeliveryAdmin />
      },
      {
        path : 'details/:productSeq',
        element: <Details />
      },


    ]
  },
  {
    path : 'employment',
    element : <HeaderSection />,
    children : [
      {
        path: 'company',
        element: <Company />
      },
      {
        path: 'human-resources',
        element: <HumanResources />
      },
      {
        path: 'mbti',
        element: <Mbti />
      },
      {
        path: 'resize',
        element: <Resize />
      },
    ]
  },
]);

export default router;