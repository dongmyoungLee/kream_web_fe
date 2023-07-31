import './styles/common/reset.css'
import Header from "./components/pages/Layout/Header";
import {Outlet} from "react-router-dom";
import {Mobile, PC} from "./components/config/Responsive";
import MobileHeader from "./components/pages/Layout/MobileHeader";
import HeightSpace from "./components/atoms/HeightSpace";
import Company from "./components/pages/Infomation/Company";


function App() {
  return (
      <div id='wrap'>
        <main>
          <PC>
            <HeightSpace />
            <Header />
            <Company />
          </PC>
          <Mobile>
            <HeightSpace />
            <MobileHeader />
            <Company />
          </Mobile>
          <Outlet />
        </main>
      </div>
  );
}

export default App;
