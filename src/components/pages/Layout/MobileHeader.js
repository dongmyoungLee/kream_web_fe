import classes from '../../../styles/pages/layout/mobileHeader.module.css';
import logo from '../../../asset/images/logo.png';
import menu from '../../../asset/images/mobilemenu.png';
import {useState} from "react";
import {Link} from "react-router-dom";
import MobileMenu from "./MobileMenu";
import {useDispatch, useSelector} from "react-redux";
import {pageNavigatorAction} from "../../../ducks/pageNavigator";

const MobileHeader = () => {
  const [isMobileMenuPage, setIsMobileMenuPage] = useState(false);
  const dispatch = useDispatch();
  const isMobileMenu = useSelector(state => state.pageNavigator.isMobileMenu);
  const mobileMenuPageHandler = () => {
    dispatch(pageNavigatorAction.isMobileMenu(!isMobileMenu));
    setIsMobileMenuPage(!isMobileMenuPage);
  }

  const mobileMenuPageHideHandler = () => {
    setIsMobileMenuPage(false);
  }

  return (
      <>
        <header className={classes.header}>
          <div className={classes.mobileHeaderWrapper}>
            <Link className={classes.blockOption} to='/employment/human-resources'>
                <img src={logo} className={classes.img} alt='cozlin_logo' />
            </Link>
            <img src={menu} className={classes.menuImg} onClick={mobileMenuPageHandler} alt='menu_logo' />
          </div>
        </header>
        {isMobileMenuPage && <MobileMenu onClick={mobileMenuPageHideHandler} />}
      </>
  );
}

export default MobileHeader;