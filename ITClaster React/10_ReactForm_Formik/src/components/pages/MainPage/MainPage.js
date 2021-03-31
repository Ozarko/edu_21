import classes from "./MainPage.module.css"
import ReactAnimationLogo from "./ReactAnimationLogo/ReactAnimationLogo"

function MainPage() {
  return (
    <div className={classes.MainPage}>
      <h2>Welcome</h2>
      <p>To my REACT Homework</p>
      <ReactAnimationLogo />
    </div>
  );
}

export default MainPage