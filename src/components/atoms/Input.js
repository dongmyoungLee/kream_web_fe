import classes from '../../styles/atoms/input.module.css';
import {Mobile, PC, Tablet} from "../config/Responsive";

const Input = (props) => {

  return (
      <>
        <PC>
          <div className={classes.inputWrap} style={{width : props.input.width, transition : '0.25s'}}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className={classes.input} {...props.input} maxLength={props.input.maxLength} name={props.input.name} onBlur={props.onBlur} onChange={props.onChange} readOnly={props.input.readOnly} onClick={props.onClick} />
          </div>
        </PC>
        <Mobile>
          <div className={classes.inputWrap} style={{width : props.input.width, transition : '0.25s'}}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className={classes.input} {...props.input} maxLength={props.input.maxLength} name={props.input.name} onBlur={props.onBlur} onChange={props.onChange} readOnly={props.input.readOnly} onClick={props.onClick} />
          </div>
        </Mobile>
      </>

  );
}

export default Input;