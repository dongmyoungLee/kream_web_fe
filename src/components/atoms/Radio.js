import classes from '../../styles/atoms/radio.module.css';
import {Mobile, PC, Tablet} from "../config/Responsive";

const Radio = (props) => {
  return (
      <>
        <PC>
          <label className={classes.radioOption}>
            <input
                type='radio'
                value={props.value}
                name={props.name}
                defaultChecked={props.defaultChecked}
                disabled={props.disabled}
                className={classes.radioSize}
                onChange={props.onChange}
            />
            {props.children}
          </label>
        </PC>
        <Mobile>
          <label className={classes.mobileRadioOption}>
            <input
                type='radio'
                value={props.value}
                name={props.name}
                defaultChecked={props.defaultChecked}
                disabled={props.disabled}
                className={classes.mobileRadioSize}
                onChange={props.onChange}
            />
            {props.children}
          </label>
        </Mobile>
      </>


  );
}

export default Radio;