import classes from '../../styles/blocks/MsgPopup.module.css';

const ConfirmPopup = (props) => {
  return (
      <>
        <div className={classes.wrap}>
          <div className={classes.contents}>
            <div className={classes.areaTop}>
              <p className={classes.paramOption}>{props.msg}</p>
            </div>
            <div style={{gap : '10px'}} className={classes.areaBot}>
              <button className={classes.btnOption} onClick={props.onConfirm}>확인</button>
              <button className={classes.btnOption} onClick={props.onClick}>취소</button>
            </div>

          </div>
        </div>
      </>
  );
}

export default ConfirmPopup;