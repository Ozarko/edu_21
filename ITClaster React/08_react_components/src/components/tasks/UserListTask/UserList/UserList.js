import classes from "./UserList.module.css";
import User from "./User/User";
import Address from "./Address/Address";

function UserList({ user }) {
  return (
    <ul className={classes.UserList}>
      <User name={user.name} />
      <Address address={user.address} />
    </ul>
  );
}

export default UserList;
