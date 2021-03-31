import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import NavLogo from '../NavLogo/NavLogo';
import classes from './Drawer.module.css'

class Drawer extends Component {

  renderLinks = (links) => {
    return links.map((link, index)=> {
      return (
        <li key={`${link.to}${index}`}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.linkActive}
          >
            {link.label}
          </NavLink>
        </li>
      );
    })
  }

  render() {

    const links = [
      { to: "/", label: "ГОЛОВНА", exact: true },
      { to: "/dolar_exchange_rate", label: "КУРС ДОЛАРА", exact: false },
      { to: "/contacts", label: "КОНТАКТИ", exact: false },
    ];

    return (
      <>
      <nav className={classes.Drawer}>
        <NavLogo />
        <ul>
          {this.renderLinks(links)}
        </ul>
      </nav>
      </>
    )
  }
}

export default Drawer