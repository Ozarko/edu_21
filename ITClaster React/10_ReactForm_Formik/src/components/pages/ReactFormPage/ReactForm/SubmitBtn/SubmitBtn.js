import classes from "./SubmitBtn.module.css";

function SubmitBtn({ formSubmit, isValid }) {
  const isFormValid = isValid();
  
  const styles = [classes.SubmitBtn];

  if (isFormValid) {
    styles.push(classes.SubmitBtnActive);
  }

  return (
    <button
      disabled={!isFormValid}
      className={styles.join(" ")}
      type="submit"
      onClick={formSubmit}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  );
}

export default SubmitBtn;
