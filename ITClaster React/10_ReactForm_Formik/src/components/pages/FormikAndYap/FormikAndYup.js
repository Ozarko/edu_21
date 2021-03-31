import React, { useState } from "react";
import classes from "./FormikAndYup.module.css";
import CompliteRegistration from "../CompleteRegistrationPage/CompleteRegistrationPage";
import FormikBox from "./Form/FormikBox";

function FormikAndYup() {
  const [FormikAndYupState, setFormikAndYupState] = useState(false);

  const backToForm = () => {
    setFormikAndYupState(false);
  };

  return (
    <div className={classes.FormikAndYup}>
      {!FormikAndYupState ? (
        <FormikBox setFormikAndYupState={setFormikAndYupState} />
      ) : (
        <CompliteRegistration clearForm={backToForm} />
      )}
    </div>
  );
}

export default FormikAndYup;
