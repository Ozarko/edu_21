import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react'
import './Form_v2.css';
import { onSubmit, validationSchema } from "../utility";
import TextError from './TextError';

const Form_v2 = () => {

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['',''],
    phNumbers: ['']
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="Form_v2">
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
        <Field as="textarea" id="message" name="message" />

        <label htmlFor="address">Address</label>
        <FastField name="address">
          {(props) => {
            const { field, form, meta } = props;
            console.log("Field render");
            return (
              <div>
                <input type="text" id="address" {...field} />;
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </FastField>

        <label htmlFor="facebook">facebook</label>
        <Field type="text" id="facebook" name="social.facebook" />
        <label htmlFor="twitter">twitter</label>
        <Field type="text" id="twitter" name="social.twitter" />

        <div clasname="form-control">
          <label htmlFor="primaryPh">Primary phone number</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>
        </div>
        <div clasname="form-control">
          <label htmlFor="secondaryPh">Primary phone number</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]"></Field>
        </div>

        <div className="form-control">
          <label>List of phone numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              console.log(form.errors)
              return (
                <div>
                  {phNumbers.map((phoneNumber, index) => (
                    <div key={`phNumber-${index}`}>
                      <Field name={`phNumbers[${index}]`} />
                      <button onClick={() => remove(index)} type="button">
                        {" "}
                        -{" "}
                      </button>
                      <button onClick={() => push("")} type="button">
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Form_v2
