import {useEffect, useRef, useState} from "react";
import classes from "../../styles/atoms/selectBox.module.css";
import arrowBot from "../../asset/images/arrowbottom.png";
import arrowTop from "../../asset/images/arrowtop.png";
import {useSelector} from "react-redux";


const SelectBox = (props) => {
   const myMenuRef = useRef(null);
   const myMenuRef2 = useRef(null);
   const [isOpenDropDown, setIsOpenDropDown] = useState(false);
   const [btnCategoryText, setBtnCategoryText] = useState('선택');

   const isLogin = useSelector(state => state.loginCheck.loginInfo);

   useEffect(() => {

      const defaultCategoryText = '선택';

      switch (props.label) {
         case '직군':
            if (isLogin.userDesiredJobGroup) {
               setBtnCategoryText(isLogin.userDesiredJobGroup);
            } else {
               setBtnCategoryText(defaultCategoryText);
            }
            break;
         case '직무':
            if (isLogin.userDesiredJob) {
               setBtnCategoryText(isLogin.userDesiredJob);
            } else {
               setBtnCategoryText(defaultCategoryText);
            }
            break;
         case '직무 경력':
            if (isLogin.userDesiredJobGroupCareer) {
               setBtnCategoryText(isLogin.userDesiredJobGroupCareer);
            } else {
               setBtnCategoryText(defaultCategoryText);
            }
            break;
         case '주요 스킬':
            if (isLogin.userDesiredJobGroup) {
               setBtnCategoryText(isLogin.userDesiredJobGroup);
            } else {
               setBtnCategoryText(defaultCategoryText);
            }
            break;
         case '이수 상태':
            if (isLogin.userLastSchoolStatus) {
               setBtnCategoryText(isLogin.userLastSchoolStatus);
            } else {
               setBtnCategoryText(defaultCategoryText);
            }
            break;
         default:
            setBtnCategoryText(defaultCategoryText);
            break;
      }
      const handleClickOutside = (e) => {

         if (myMenuRef.current && !myMenuRef.current.contains(e.target) && !myMenuRef2.current.contains(e.target)) {
            setIsOpenDropDown(false);
         }

      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside``);
      };
   }, [myMenuRef]);

   const btnClickDropDown = () => {
      setIsOpenDropDown(!isOpenDropDown);
   }

   const btnSelectMenu = (e) => {
      e.preventDefault();
      const liElement = e.currentTarget.querySelector("li");
      if (liElement) {
         setBtnCategoryText(liElement.innerText);

         const sendData = {
            text: liElement.innerText,
            label: props.label
         }

         props.settingCategory(sendData);

         setIsOpenDropDown(false);
      }
   }

   return (
      <div className={classes.sbWrap}>
         <div className={classes.btnWrap} onClick={btnClickDropDown} ref={myMenuRef2}>
            <button className={classes.btnOption}>{btnCategoryText}</button>
            <div>{isOpenDropDown ?  <img className={classes.arrowSize} src={arrowTop} /> : <img className={classes.arrowSize} src={arrowBot} /> }</div>
         </div>
         {isOpenDropDown && <div ref={myMenuRef} className={classes.dropDownMenu}>
            <ul className={classes.dropDownMenu_ul}>

               {props.menuList.map((item, idx) => (
                  <div key={idx} className={classes.dropDownMenuFlex} onClick={btnSelectMenu}>
                        <li key={idx} className={classes.dropDownMenu_li}>{item.menuName}</li>
                  </div> 
               ))}

            </ul>
         </div>}
         
      </div>
   );
}

export default SelectBox;