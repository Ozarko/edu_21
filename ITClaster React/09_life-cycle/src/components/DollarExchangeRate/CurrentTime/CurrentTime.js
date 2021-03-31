import React, { Component } from "react";
import classes from "./CurrentTime.module.css";

class CurrentTime extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.timer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timer() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div className={classes.CurrentTime}>
        <h5>
          Станом на {this.state.time.toLocaleDateString()}{" "}
          {this.state.time.toLocaleTimeString()} .
        </h5>
      </div>
    );
  }
}

export default CurrentTime;
