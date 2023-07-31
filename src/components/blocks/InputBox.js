import classes from '../../styles/pages/layout/mypage.module.css';

const InputBox = (props) =>{

   return(
         <div className={classes.profile}>
            <div className={classes.input}>
               <div  className={classes.name}>{props.inputTitle}</div>
               <input value={props.value} style={{backgroundColor: props.isReadOnly ? '#F6F9FA' : '#FFFFFF'}}type={props.type} onChange={props.onChange} placeholder={props.placeholder} readOnly={props.isReadOnly}  className={classes.input_style}></input>
            </div>
         </div>
      );
}
export default InputBox;