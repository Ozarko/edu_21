import React from 'react';
import classes from './Select.module.css';

const Select = props => {

  const htmlFor= `${props.label}-${Math.random()}`
  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((options, index)=>{
          return (
            <option
              value={options.value}
              key={options.value + index}
            >
              {options.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select