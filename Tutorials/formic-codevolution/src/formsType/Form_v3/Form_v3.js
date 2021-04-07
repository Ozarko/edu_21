import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from "formik";
import React, { useState } from "react";
import "./Form_v3.css";
import { onSubmit, validateMessage, validationSchema } from "../utility";
import TextError from "./TextError";

const Form_v3 = () => {
  const [formValues, setFormValues] = useState(null)

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const savedValues = {
    name: "Nazar",
    email: "odsfk@gmail.com",
    phone: "0969748467",
    message: "dsfsdfsdf",
  };

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        console.log("formik props", formik);
        return (
          <Form className="Form_v3">
            <ErrorMessage name="name" component={TextError} />
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />

            <ErrorMessage name="email">
              {(error) => {
                <div className="error">{error}</div>;
              }}
            </ErrorMessage>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />

            <ErrorMessage name="phone" />
            <label htmlFor="phone">Phone</label>
            <Field type="text" id="phone" name="phone" />

            <label htmlFor="message">Message</label>
            <Field
              validate={validateMessage}
              as="textarea"
              id="message"
              name="message"
            />
            <ErrorMessage name="message" component={TextError} />

            {/* <button
                type="button"
                onClick={() => formik.validateField("message")}
              >
                Validate comments
              </button>
              <button type="button" onClick={() => formik.validateForm()}>
                Validate All
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldTouched("message")}
              >
                Viset comments
              </button>
              <button
                type="button"
                onClick={() =>
                  formik.setTouched({
                    name: true,
                    email: true,
                    phone: true,
                    message: true,
                  })
                }
              >
                Viset All
              </button> */}
            {/* <button onClick={() => setFormValues(savedValues)} type="button">
              Load data
            </button> */}
            <button type='reset'>Reset</button>
            <button
              disabled={!formik.isValid || formik.isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form_v3;
