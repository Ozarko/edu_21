import MenuLink from "./MenuLink/MenuLink";
import classes from "./MenuList.module.css";

const MenuList = ({links}) => (
  <ul className={classes.MenuList}>
    <MenuLink links={links} />
  </ul>
)

export default MenuList