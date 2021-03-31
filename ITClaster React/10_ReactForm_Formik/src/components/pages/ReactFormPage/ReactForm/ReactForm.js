import React, { Component } from "react";
import CompliteRegistration from "../../CompleteRegistrationPage/CompleteRegistrationPage";
import CheckBoxControl from "./CheckBoxControl/CheckBoxControl";
import InputControl from "./InputControl/InputControl";
import classes from "./ReactForm.module.css";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [
        {
          type: "email",
          name: "email",
          value: "",
          valid: null,
          errorMessage: "email must be in correct format",
        },
        {
          type: "password",
          name: "password",
          value: "",
          valid: null,
          errorMessage: "password must be at least 6 till 13 characters",
        },
      ],
      policeChecked: false,
      isFormValid: false,
    };
  }

  inputHanler = (event) => {
    const currentInput = this.state.input.find(
      (input) => input.name === event.target.name
    );
    currentInput.value = event.target.value.trim();
    currentInput.valid = this.isInputValid(
      event.target.name,
      event.target.value
    );
    this.setState({
      ...this.state.input,
    });
  };

  isInputValid = (name, value) => {
    switch (name) {
      case "email":
        if (value) {
          const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(value);
        }
        break;
      case "password":
        if (value.length >= 6 && value.length <= 12) {
          return true;
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  };

  checkedHandler = (event) => {
    this.setState({
      policeChecked: event.target.checked,
    });
  };

  isFormValid = () => {
    const inputValid = this.state.input.every((input) => input.valid);
    if (inputValid && this.state.policeChecked) {
      return true;
    } else {
      return false;
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({
        isFormValid: true,
      });
    }
  };

  clearForm = () => {
    this.setState({
      input: [
        {
          type: "email",
          name: "email",
          value: "",
          valid: null,
          errorMessage: "incorect form",
        },
        {
          type: "password",
          name: "password",
          value: "",
          valid: null,
          errorMessage: "incorect form",
        },
      ],
      policeChecked: false,
      isFormValid: false,
    });
  };

  render() {
    if (this.state.isFormValid) {
      return <CompliteRegistration clearForm={this.clearForm} />;
    } else {
      return (
        <form onSubmit={this.submitHandler} className={classes.ReactForm}>
          <h2>Registration Form</h2>
          {this.state.input.map((input, index) => (
            <InputControl
              key={index + input.name}
              {...input}
              valueFromInput={this.inputHanler}
              isValid={input.valid}
            />
          ))}
          <CheckBoxControl
            isChecked={this.checkedHandler}
            checkedState={this.state.policeChecked}
          />
          <SubmitBtn
            formSubmit={this.submitHandler}
            isValid={this.isFormValid}
          />
        </form>
      );
    }
  }
}

export default ReactForm;
