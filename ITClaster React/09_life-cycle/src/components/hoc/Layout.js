import { Component } from "react";
import Drawer from "../UI/Nav/Drawer/Drawer";

class Layout extends Component {
  render() {
    return(
      <div>
        <Drawer />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout