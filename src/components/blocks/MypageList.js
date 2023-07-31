import classes from "../../styles/blocks/MypageToolTipMenu.module.css";
import {useEffect, useState} from "react";



const MypageList = (props) => {
  const pathCondition  = window.location.pathname.split("/")[window.location.pathname.split("/").length-1];
  const [clickStyle, setClickStyle] = useState(false);

  useEffect(() => {

    if (props.clickFlag == pathCondition) {
      setClickStyle(true);
    }

  }, []);


  return (
      <li className={clickStyle ? classes.li_back_option : classes.li_option} onClick={props.onClick} style={{borderRadius : props.borderRaPx, marginBottom : props.marginBot}}>
        <img src={props.imgPath} className={classes.img_option} alt='mypageMenu'/>
        <span>{props.menuTitle}</span>
      </li>
  );
}

export default MypageList;