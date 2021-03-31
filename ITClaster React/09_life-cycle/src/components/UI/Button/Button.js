import classes from "./Button.module.css";

const Button = ({ clickHandler, name }) => (
  <button onClick={clickHandler} className={classes.Button}>
    {name}
  </button>
); 

export default Button