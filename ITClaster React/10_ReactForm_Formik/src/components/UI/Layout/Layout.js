import { Component } from "react";
import Navigation from "../Nav/Navigation";

class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout