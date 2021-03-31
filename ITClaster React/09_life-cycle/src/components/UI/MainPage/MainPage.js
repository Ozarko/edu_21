import classes from './MainPage.module.css'
import logo from './logo.svg'

function MainPage () {
  return (
    <div className={classes.mainPage}>
      <h1>Welcome</h1>
      <p>To my second React homework</p>
      <img src={logo} className={classes.logo} alt='logo' />
    </div>
  )
}

export default MainPage