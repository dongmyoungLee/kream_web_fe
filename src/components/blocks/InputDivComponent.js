import { useState, useEffect } from 'react';
import classes from '../../styles/pages/layout/mypage.module.css';
import InputDivBox from './InputDivBox';

const InputComponent = (props) => {
   const use = props.use === 'isReadOnly' ? true : false;
   const lastInput = props.label === '희망 직무' ? true : false;

   
   return(
      <div>
         {/* <div className={classes.line}></div> */}
         <div className={classes.input_layout}>
            <div>{props.label}</div>
            <div> 
               <InputDivBox value={props.value.first} inputTitle={props.inputTitle.first}/>
               <InputDivBox value={props.value.second} inputTitle={props.inputTitle.second}/>
               <InputDivBox value={props.value.third} inputTitle={props.inputTitle.third} />
               {lastInput && <InputDivBox value={props.value.fourth} inputTitle={props.inputTitle.fourth} />}
            </div>
         </div>
      </div>
      
   )
}

export default InputComponent;