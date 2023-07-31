import classes from '../../styles/atoms/button.module.css';

const Button = (props) => {

  return (
    <button className={classes.button} style={{height : props.btn.height, width : props.btn.width}} type={props.btn.type} onClick={props.btn.onClick} ><p>{props.btn.value}</p></button>
  );
}

export default Button;