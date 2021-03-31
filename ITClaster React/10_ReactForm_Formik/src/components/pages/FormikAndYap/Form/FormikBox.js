import React from "react";
import { Field, Formik, Form } from "formik";
import { SignupSchema } from "../validation/SignupSchema";
import classes from "./FormikBox.module.css";

export default function FormikBox({ setFormikAndYupState }) {
  return (
    <div className={classes.FormikContainer}>
      <h2>Registration form</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          terms: false,
        }}
        validationSchema={SignupSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(data) => {
          setFormikAndYupState(true);
          console.log(data);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          isValid,
          isSubmitting,
        }) => {
          const subBtnStyle = [classes.SubmitBtn];

          if (isValid) {
            subBtnStyle.push(classes.SubmitBtnActive);
          }

          return (
            <Form>
              <div className={classes.InputControl}>
                <Field
                  autoFocus
                  onChange={handleChange}
                  name="email"
                  type="input"
                  value={values.email}
                />
                <label
                  className={values.email ? classes.InputNotEmpty : null}
                  htmlFor="email"
                >
                  email
                </label>
                <p>{errors.email}</p>
              </div>
              <div className={classes.InputControl}>
                <Field
                  onChange={handleChange}
                  name="password"
                  type="input"
                  value={values.password}
                />
                <label
                  className={values.password ? classes.InputNotEmpty : null}
                  htmlFor="password"
                >
                  password
                </label>
                <p>{!touched.email ? errors.password : null}</p>
              </div>
              <div className={classes.CheckBoxControl}>
                <Field id="terms" name="terms" type="checkbox" />
                <label htmlFor="terms">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                  <p>I agree to the terms of service</p>
                </label>
              </div>
              <button
                className={subBtnStyle.join(" ")}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
