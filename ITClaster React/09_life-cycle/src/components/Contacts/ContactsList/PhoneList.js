import React, { useEffect } from "react";
import classes from "./PhoneList.module.css";
import ContactPerson from "./ContactPerson/ContactPerson";

function PhoneList({ phoneList, currentContact, showContact }) {
  return (
    <div className={classes.PhoneList}>
      <ul>
        {phoneList.map((contactPerson) => (
          <ContactPerson
            showContact={showContact}
            currentContact={currentContact}
            key={contactPerson.id}
            contactPerson={contactPerson}
          />
        ))}
      </ul>
    </div>
  );
}

export default PhoneList;
