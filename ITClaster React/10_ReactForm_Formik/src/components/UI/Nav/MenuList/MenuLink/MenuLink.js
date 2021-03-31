
import classes from "./MenuLink.module.css";
import { NavLink } from "react-router-dom"

const MenuLink = ({ links }) => {
  return links.map((link, index) => {
    return (
      <li key={`${link.to}${index}`} className={classes.NavListItem}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.ActiveLink}
          className={classes.MenuLink}
        >
          {link.label}
        </NavLink>
      </li>
    );
  });
};

export default MenuLink;
