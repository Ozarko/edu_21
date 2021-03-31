import classes from "./Contacts.module.css";
import React, { useCallback, useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import axios from "../axios/axios";
import PhoneList from "./ContactsList/PhoneList";
import Loader from "../UI/Loader/Loader";

function Contacts() {
  const [loader, setLoader] = useState(false);
  const [phoneList, setPhoneList] = useState([]);
  const [currentContact, setCurrentContact] = useState("");

  const getPhonelist = async (id) => {
    const url = id ? `/phonelist/${id}` : "/phonelist/";
    const responce = await axios.get(url);
    return responce.data;
  };

  useEffect(() => {
    async function getPhonelistData() {
      const phoneListData = await getPhonelist();
      setPhoneList(phoneListData);
      setLoader(true);
    }
    getPhonelistData();
  }, []);

  const showContact = useCallback((id)=> {
      const currentContact = getPhonelist(id);
      currentContact.then((contact) => setCurrentContact(contact));
  }, [currentContact])

  if (!loader) {
    return <Loader width={"100vw"} height={"100vh"} />;
  }
  return (
    <div className={classes.Contacts}>
      <div className={classes.ContactBox}>
        <PhoneList
          showContact={showContact}
          phoneList={phoneList}
          currentContact={currentContact}
        />
        <Contact currentContact={currentContact} />
      </div>
    </div>
  );
}

export default Contacts;
