import classes from "./TextFromInput.module.css"

function TextFromInput({inputText}) {
  return (
    <h2 className={classes.TextFromInput}>{inputText}</h2>
  )
}

export default TextFromInput