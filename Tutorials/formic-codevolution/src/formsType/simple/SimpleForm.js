import { useFormik } from 'formik';
import React from 'react'
import './SimpleForm.css';
import { onSubmit, validate, validationSchema } from "../utility";

const SimpleForm = () => {

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };


  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
  })

  console.log('Formik Data', formik.values)

  return (
    <form className="SimpleForm" onSubmit={formik.handleSubmit}>
      
      {formik.errors.name && formik.touched.name ? (
        <span>{formik.errors.name}</span>
      ) : null}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onBlur={formik.handleBlur}
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.email && formik.touched.email ? (
        <span>{formik.errors.email}</span>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onBlur={formik.handleBlur}
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      {formik.errors.phone && formik.touched.phone ? (
        <span>{formik.errors.phone}</span>
      ) : null}
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        onBlur={formik.handleBlur}
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm
