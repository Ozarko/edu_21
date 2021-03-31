import classes from "./CurrentExhangeRate.module.css";
import ExchangeRate from "./ExchangeRate/ExchangeRate";

const CurrentExhangeRate = (props) => (
  <div className={classes.CurrentExhangeRate}>
    <ExchangeRate
      name={"Купівля!"}
      rate={props.rateBuy}
      prevRate={props.prevRateBuy}
    />
    <ExchangeRate
      name={"Продаж!"}
      rate={props.rateSell}
      prevRate={props.prevRateSell}
    />
  </div>
);

export default CurrentExhangeRate