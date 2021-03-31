import classes from "./User.module.css"

function User({name}) {
  return (
    <h5 className={classes.User}>User name : <strong>{name}</strong></h5>
  )
}

export default User