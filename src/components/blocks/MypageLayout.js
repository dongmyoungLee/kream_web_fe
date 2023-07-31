import classes from "../../styles/pages/layout/mypage.module.css";

const MypageLayout = (props) => {
  // 클래스 갈아끼우려고 온거 css 바꾸려고
  // 리액트는 == 위에서 다 선언해주고 아래에는 깔끔하게
  
  const remove_height = props.remove_height === "profile" ? classes.profileWrap : classes.wrap;

  return <div className={remove_height}>
          <div className={classes.layout}>{props.children} </div>
         </div>
}

export default MypageLayout;
