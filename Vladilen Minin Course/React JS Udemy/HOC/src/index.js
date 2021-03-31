import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const starWarsChars = [
  { name: "Дарт Вейдеп", side: "dark" },
  { name: "Люк Скайвокер", side: "light" },
  { name: "Палпатін", side: "dark" },
  { name: "Обі Ван Кенобі", side: "light" },
];

const App = ({ list }) => (
  <ul>
    {list.map((char, ind) => {
      return (
        <li key={char.name + ind}>
          <strong>{char.name}</strong> - &nbsp;
          {char.side}
        </li>
      );
    })}
  </ul>
);

const withFilteredProps = (Component) => ({ list, side }) => {
  const filteresList = list.filter((char) => char.side === side);
  return <Component list={filteresList} />;
};


const FilteredList = (withFilteredProps(App))


ReactDOM.render(
  <FilteredList list={starWarsChars} side={"dark"} />,
  document.getElementById("root")
);
