import * as Yup from 'yup'

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function vlidatePhone(phone) {
  const re = /^\+?3?8?(0\d{9})$/;
  return re.test(String(phone).toLowerCase());
}

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  console.log(onSubmitProps)
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Inavlide email format";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!vlidatePhone(values.phone)) {
    errors.phone = "Inavlide phone format";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Reqired"),
  email: Yup.string().email("Inavlide email"),
  phone: Yup.string()
    .required("Reqired")
    .matches(/^\+?3?8?(0\d{9})$/, "Inavlide phone"), 
});

const validateMessage = value => {
  let error = null
  if(!value) {
    error = 'Required'
  }
  return error
}

export { onSubmit, validate, validationSchema, validateMessage };
