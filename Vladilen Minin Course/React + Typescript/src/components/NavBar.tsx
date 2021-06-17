import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav >
      <div className="nav-wrapper indigo darken-3 px1">
        <a href="/" className="brand-logo">
          React + Typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Список справ</a>
          </li>
          <li>
            <a href="/">Інформація</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
