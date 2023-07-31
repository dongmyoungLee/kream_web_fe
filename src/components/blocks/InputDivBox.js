import classes from '../../styles/pages/layout/mypage.module.css';
import downloadIcon from '../../asset/images/download.png';

const InputBox = (props) =>{

   return(
         <div className={classes.profile}>
            <div className={classes.input}>
               <div className={classes.name}>{props.inputTitle}</div>
               <div style={{backgroundColor : props.type === 'file' ? '#fff' : '#F6F9FA', cursor : props.type === 'file' ? 'pointer' : ''}} className={classes.div_style}>{props.value}
                 <div style={{display : props.type === 'file' ? 'block' : 'none'}} className={classes.div_inner_left}></div>
                 <div style={{display : props.type === 'file' ? 'block' : 'none'}} className={classes.div_inner_right}>
                   <img className={classes.downloadIcon} src={downloadIcon} />
                 </div>
               </div>
            </div>
         </div>
      );
}
export default InputBox;