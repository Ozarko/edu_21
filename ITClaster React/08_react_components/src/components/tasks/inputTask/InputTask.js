import { Component } from "react"
import Input from "./Input/Input"
import classes from "./InputTask.module.css"
import TextFromInput from "./TextFromInput/TextFromInput"

class InputTask extends Component {
  state = {
    inputValue: 'Тут ми будемо виводити текст з інпута'
  }

  inputHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }


  render() {
    return (
      <div className={classes.InputTask}>
        <div className={classes.container}>
            <TextFromInput inputText={this.state.inputValue}/>
            <Input valueFromInput={this.inputHandler}/>
        </div>
      </div>
    )
  }
}

export default InputTask