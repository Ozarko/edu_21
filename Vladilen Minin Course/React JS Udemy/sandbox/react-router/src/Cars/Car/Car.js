import React from 'react'
import classes from './Car.module.css';
import {withRouter} from 'react-router-dom'


const Car = props => {
  return (
    <div 
      className={classes.Car}
      onClick={()=> props.history.push('/cars/' + props.name.toLowerCase())}
    >
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car)