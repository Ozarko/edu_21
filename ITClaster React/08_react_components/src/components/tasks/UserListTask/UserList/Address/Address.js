import classes from "./Address.module.css"

function Address ({address}) {
  return (
    <h5 className={classes.Address}>User address: {address}</h5>
  )
}

export default Address