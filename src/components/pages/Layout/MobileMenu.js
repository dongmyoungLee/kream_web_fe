import classes from "../../../styles/pages/layout/mobileHeader.module.css";
import {headerMenu, mypageFavMenu, mypageTooltipMenu} from "../../../common/Menus";
import MobileMenuList from "../../blocks/MobileMenuList";
import {useDispatch, useSelector} from "react-redux";
import {loginCheckAction} from "../../../ducks/loginCheck";
import {useEffect, useState} from "react";
import {pageNavigatorAction} from "../../../ducks/pageNavigator";

const MobileMenu = (props) => {
    const [isMobileMenuPage, setIsMobileMenuPage] = useState(false);
    const isLogin = useSelector(state => state.loginCheck.loginInfo.isLogin);
    const isMobileMenu = useSelector(state => state.pageNavigator.isMobileMenu);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(pageNavigatorAction.isMobileMenu(!isMobileMenu));
        };
    }, []);

    const mobileLogOutHandler = () => {

        const res = {
            isLogin : false,
            token : null,
            loginEnteredTime : Date.now(),
            userId : null,
            userName : null,
            userPhone : null,
            userBirth : null,
            userAddr : null,
            userJobEnterdYn : null,
            userDesiredJobGroupCareer : null,
            userDesiredJobGroup : null,
            userDesiredJob : null,
            userJobSkill : null,
            userLastCompany : null,
            userLastJobGroup : null,
            userLastJobGroupCareer : null,
            userLastSchoolName : null,
            userLastSchoolStatus : null,
            userLastSchoolDept : null,
            userJobCareerYn : null
        }

        dispatch(loginCheckAction.logout(res));

        setIsMobileMenuPage(false);
    }

    const loginMenu = <>
        <section className={classes.section}>
            {mypageFavMenu.map((item, idx) => (
                <MobileMenuList key={item.menuName} endPoint={item.path} onClick={props.onClick} menuName={item.menuName} />
            ))}
            {mypageTooltipMenu.map((item, idx) => (
                <MobileMenuList key={item.menuName} endPoint={item.path} onClick={props.onClick} menuName={item.menuName} />
            ))}
        </section>
        <section className={classes.section}>
            <MobileMenuList endPoint='/employment/human-resources' onClick={mobileLogOutHandler} menuName='로그아웃' />
        </section>
    </>;

    const notLoginMenu = <section className={classes.section}>
        <MobileMenuList endPoint='/member/login' onClick={props.onClick} menuName='로그인 / 회원가입' />
    </section>;

    return (
        <main className={classes.mobileMenuWrap}>
            <section className={classes.section}>
                {headerMenu.map((item, idx) => (
                    <MobileMenuList key={item.menuName} endPoint={item.menuLink} onClick={props.onClick} menuName={item.menuName} />
                ))}
            </section>
            <section className={classes.section}>
                <MobileMenuList endPoint='/' menuName='기업 서비스' onClick={props.onClick} />
            </section>
            {!isLogin && notLoginMenu}
            {isLogin && loginMenu}
        </main>
    );
}

export default  MobileMenu;