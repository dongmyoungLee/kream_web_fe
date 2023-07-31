import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Login from "./components/pages/Login/Login";
import Company from "./components/pages/Infomation/Company";
import HumanResources from "./components/pages/Layout/HumanResources";
import Announcement from "./components/pages/Layout/Announcement";
import Signup from "./components/pages/Login/Signup";
import Resize from "./components/pages/Layout/Resize";
import FindUserInfo from "./components/pages/Login/FindUserInfo";
import Account from "./components/pages/Infomation/Account";
import History from "./components/pages/Infomation/History";
import Bookmark from "./components/pages/Infomation/Bookmark";
import Follow from "./components/pages/Infomation/Follow";
import Profile from "./components/pages/Infomation/Profile";
import HeaderSection from "./components/pages/Layout/HeaderSection";
import ProfileUpdate from './components/pages/Infomation/ProfileUpdate';

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
        element: <Bookmark />
      },
      {
        path : 'follow',
        element: <Follow />
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
        path: 'announcement',
        element: <Announcement />
      },
      {
        path: 'resize',
        element: <Resize />
      },
    ]
  },
]);

export default router;