import classes from '../../styles/blocks/CommonMsgPopup.module.css';

const CommonMsgPopup = (props) => {
  return (
    <>
      <div className={classes.wrap}>
        <div className={classes.popupOption}>
          <div className={classes.areaTop}>
            <p className={classes.paramOption}>{props.msg}</p>
          </div>
          <div className={classes.areaBot}>
            <button className={classes.btnOption} onClick={props.onClick}>닫기</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default CommonMsgPopup;