import React, { Component } from "react";
import Graph from "./Graph/Graph";
import classes from "./DolarExchangeRate.module.css";
import CurrentExhangeRate from "./CurrentExchangeRate/CurrentExchangeRate";
import Loader from "../UI/Loader/Loader";
import Button from "../UI/Button/Button";
import CurrentTime from "./CurrentTime/CurrentTime";
import { normalizeNum } from "./auxiliary/auxiliary";

class DolarExchangeRate extends Component {
  state = {
    loaderState: false,
  };

  fetchRate = () => {
    fetch("https://api.ifcityevent.com/currency")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loaderState: true,
          rateSell: normalizeNum(data.rateSell),
          rateBuy: normalizeNum(data.rateBuy),
          prevRateSell: this.state.rateSell,
          prevRateBuy: this.state.rateBuy,
          
        });
      });
  };

  componentDidMount() {
    this.fetchRate();
    this.exchangeInterval = setInterval(() => {
      this.fetchRate();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.exchangeInterval);
  }

  render() {
    if (!this.state.loaderState) {
      return <Loader width={'100vw'} height={'100vh'} />;
    }

    return (
      <div className={classes.DolarExchangeRate}>
        <div className={classes.DolarExchangeRateContainer}>
          <h1>
            Найточніший фейковий курс долара !
          </h1>
          <CurrentTime />
          <CurrentExhangeRate
            rateSell={this.state.rateSell}
            prevRateSell={this.state.prevRateSell}
            rateBuy={this.state.rateBuy}
            prevRateBuy={this.state.prevRateBuy}
          />
          <Button clickHandler={() => this.fetchRate()} name={"Oновити !"} />
          <Graph
            data={[
              {
                name: `${new Date().toLocaleTimeString()}`,
                Купівля: `${this.state.rateBuy}`,
                Продаж: `${this.state.rateSell}`,
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default DolarExchangeRate;
