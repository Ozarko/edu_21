import classes from "./CompliteRegistration.module.css";

export default function CompliteRegistration({ clearForm }) {
  return (
    <div className={classes.CompliteRegistration}>
      <h2>Welcome! You are registered in the system</h2>
      <button onClick={clearForm}>Back</button>
    </div>
  );
}