import classes from "./UserStatus.module.css";

function UserStatus({ status }) {
  let userStatusClasses = [classes.UserStatus];

  status
    ? userStatusClasses.push(classes.active)
    : userStatusClasses.push(classes.disabled);

  return <div className={userStatusClasses.join(" ")}></div>;
}

export default UserStatus;
