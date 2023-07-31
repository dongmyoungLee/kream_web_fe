import {Mobile, PC} from "../../config/Responsive";
import HeightSpace from "../../atoms/HeightSpace";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import {Outlet} from "react-router-dom";

function HeaderSection() {
  return (
    <div id='wrap'>
      <main>
        <PC>
          <HeightSpace />
          <Header />
        </PC>
        <Mobile>
          <HeightSpace />
          <MobileHeader />
        </Mobile>
        <Outlet />
      </main>
    </div>
  );
}

export default HeaderSection;
