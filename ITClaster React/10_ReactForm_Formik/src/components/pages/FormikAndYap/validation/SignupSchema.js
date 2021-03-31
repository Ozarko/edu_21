import React from 'react'
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(''),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(13, 'Too Long!')
    .required(''),
  terms: Yup.boolean()
    .oneOf([true]).required('')
});