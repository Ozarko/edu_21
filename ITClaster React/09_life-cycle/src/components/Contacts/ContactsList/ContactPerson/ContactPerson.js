import classes from "./ContactPerson.module.css";

const ContactPerson = ({ contactPerson, currentContact, showContact }) => {
  const style = [classes.ContactPerson];

  if (currentContact.id === contactPerson.id) {
    style.push(classes.currentPerson);
  }

  return (
    <li
      onClick={(e) => showContact(contactPerson.id)}
      className={style.join(" ")}
    >
      {contactPerson.firstName}
    </li>
  );
};
export default ContactPerson;
