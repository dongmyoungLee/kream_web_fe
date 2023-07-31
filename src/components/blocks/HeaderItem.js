import {Link} from "react-router-dom";
import classes from "../../styles/pages/layout/header.module.css";

const HeaderItem = (props) => {
  return  <li className={classes.header_li}><Link style={{color : window.location.pathname === props.menuLink ? '#0062df' : ''}} to={props.menuLink}>{props.menuName}</Link></li>
}

export default HeaderItem;