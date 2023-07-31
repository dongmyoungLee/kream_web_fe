import classes from "../../styles/pages/layout/humanResources.module.css";
import alert from "../../asset/images/alrt.png";
import Button from "../atoms/Button";

const WelcomeInfo = (props) => {
    return (
      <>
        <section className={classes.wellComeInfo}>
          <article className={classes.wrapper}>
            <div className={classes.flexOption}>
              <img src={alert} className={classes.imgOption} />
              <span className={classes.textOption1}>아직 프로필 작성이 완료 되지 않았어요.</span>
              <span className={classes.textOption2}>프로필 작성을 완료 하고 내 정보를 등록 해보세요 !</span>
            </div>
            <div className={classes.btnWrap}>
              <Button btn={{
                type : '',
                value : '프로필 작성',
                height : '40px',
                onClick : props.onClick
              }} />
            </div>
          </article>
        </section>
      </>
    );
}

export default WelcomeInfo;