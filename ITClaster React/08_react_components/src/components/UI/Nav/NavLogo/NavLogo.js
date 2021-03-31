import { Link } from "react-router-dom"
import classes from "./NavLogo.module.css"

const NavLogo = () => <h2 className={classes.NavLogo}><Link to='/'>Ozarko</Link></h2>

export default NavLogo