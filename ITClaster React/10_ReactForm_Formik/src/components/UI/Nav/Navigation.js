import MenuList from './MenuList/MenuList';
import classes from './Navigation.module.css';
import NavLogo from './NavLogo/NavLogo';

function Navigation () {

  const links = [
    { to: "/", label: "Main", exact: true },
    { to: "/react_form", label: "React Form", exact: false },
    { to: "/formik", label: "Formik", exact: false },
  ];

  return (
    <nav className={classes.Navigation}>
      <div className={classes.NavigationContainer}>
        <NavLogo />
        <MenuList links={links} />
      </div>
    </nav>
  );
}

export default Navigation
