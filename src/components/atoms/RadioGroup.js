import classes from '../../styles/atoms/radio.module.css';

const RadioGroup = (props) => {
  return (
    <fieldset className={classes.flex}>
      <legend>{props.label}</legend>
      {props.children}
    </fieldset>
  );
}

export default RadioGroup;