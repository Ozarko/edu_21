import classes from "./ExchangeRate.module.css";

const ExchangeRate = ({ name, rate, prevRate }) => {
  const classesArr = ["fas", classes.ExchangeRateIcon];
  if (rate > prevRate) {
    classesArr.push("fa-arrow-up", classes.up);
  } else {
    classesArr.push("fa-arrow-down", classes.down);
  }

  return (
    <div className={classes.ExchangeRate}>
      <i className={classesArr.join(" ")}>
        <small>
          {isNaN((rate - prevRate).toFixed(2))
            ? ""
            : (rate - prevRate).toFixed(2)}
        </small>
      </i>
      <h2>{rate}</h2>
      <h3>{name}</h3>
    </div>
  );
};
export default ExchangeRate;
