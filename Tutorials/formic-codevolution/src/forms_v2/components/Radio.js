import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import TextError from "../../formsType/Form_v2/TextError";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
};

export default Radio;
