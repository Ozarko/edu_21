import React, { useState } from "react";
import classes from "./UserListTask.module.css";
import UserList from "./UserList/UserList";
import UserStatus from "./UserList/UserStatus/UserStatus";

function UserListTask() {
  const usersArray = [
    { name: "Nazar", address: "Ivano-Frankivsk", active: true },
    { name: "Vasya", address: "Kropyvnytskyi", active: false },
    { name: "Alexandra", address: "Ternopil", active: false },
    { name: "Vovan", address: "Kryvyi Rih", active: true },
  ];

  const [users] = useState(usersArray);
  
  return (
    <div className={classes.UserListTask}>
      {users.map((user, index) => {
        return (
          <div className={classes.UserCard} key={`${user.name}${index}`}>
            <UserStatus status={user.active} />
            <UserList user={user} />
          </div>
        );
      })}
    </div>
  );
}

export default UserListTask;
