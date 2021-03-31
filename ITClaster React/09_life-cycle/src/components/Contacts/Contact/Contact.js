import Loader from "../../UI/Loader/Loader";
import classes from "./Contact.module.css";

function Contact({ currentContact }) {
  if (currentContact === "") {
    return (
      <div className={classes.Contact}>
        <Loader width={"100%"} height={"100%"} background={"#202B33"} />
      </div>
    );
  }
  return (
    <div className={classes.Contact}>
      <h3>
        {currentContact.firstName} {currentContact.lastName}
      </h3>
      <p>Стать {currentContact.sex === "male" ? "Чоловік" : "Жінка"}</p>
      <p>Телефони: </p>
      <ul>
        {currentContact.phones.map((item, index) => (
          <li key={item + index}>
            {item.type}: <a href={`tel:${item.number}`}>{item.number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
