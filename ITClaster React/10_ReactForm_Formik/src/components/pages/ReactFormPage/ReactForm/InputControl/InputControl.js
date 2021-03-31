import { useEffect, useRef } from "react";
import classes from "./InputControl.module.css";

function InputControl({
  type,
  name,
  value,
  valueFromInput,
  valid,
  errorMessage,
}) {
  const styles = [classes.InputControl];

  const currentInput = useRef();

  if (value.length >= 1) {
    styles.push(classes.InputNotEmpty);
  }

  if (valid) {
    styles.push(classes.Valid);
  }

  useEffect(() => {
    if (type === "email") {
      currentInput.current.focus();
    }
  }, []);

  return (
    <div className={styles.join(" ")}>
      <input
        ref={currentInput}
        onChange={valueFromInput}
        type={type}
        name={name}
        value={value}
      />
      <label htmlFor={name}>{name}</label>
      <p>{valid === null || valid ? null : errorMessage}</p>
    </div>
  );
}

export default InputControl;
