import React, { Component } from "react";
import classes from "./App.module.css";
import About from "./About/About";
import Cars from "./Cars/Cars";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import './custom.css';
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {

  state = {
    isLoggedIn: false,
  }

  render() {

    return (
      <div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink 
              to="/" 
              activeClassName={'wfm-active'}
              exact
              activeStyle={{
                color: 'blue',
              }}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
              }}
              >Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <div style={{textAlign: "center"}}>
          <h3>Is loged in {this.state.isLoggedIn ? 'True': 'False'}</h3>
        <button onClick={()=> this.setState({isLoggedIn: true})}>LogIn</button>
        </div>
        <hr />

      <Switch>
         <Route
          path={"/"} //Localhoste 300
          exact
          render={() => <h1>Home page</h1>}
        />
        {
          this.state.isLoggedIn 
          ? <Route path="/about" component={About} />
          : null
        }
        <Route path="/cars/:name" component={CarDetail} />
        <Route path="/cars" component={Cars} />
        {/* <Route render={()=> <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/> */}
        <Redirect to={'/'} />
      </Switch>
      </div>
    );
  }
}

export default App;
