import classes from '../../styles/blocks/MsgPopup.module.css';

const MsgPopup = (props) => {
  return (
      <>
        <div className={classes.wrap}>
          <div className={classes.contents}>
            <div className={classes.areaTop}>
              <p className={classes.paramOption}>{props.msg}</p>
            </div>
            <div className={classes.areaBot}>
              <button className={classes.btnOption} onClick={props.onClick}>확인</button>
            </div>

          </div>
        </div>
      </>
  );
}

export default MsgPopup;