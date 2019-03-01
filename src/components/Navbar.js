import React, {Component} from "react";
import "./nav.css"


class Navbar extends Component {
  render() {
    return (<>
      <div>
  <nav>
    <div className="contain" style={{display: "flex", justifyContent: "space-between", maxWidth: 970, margin: "auto", alignItems: "center", height: "54px"}}>
      <div><strong>Angela</strong></div>
      <div>
        <div style={{display: "inline", marginRight: 10}}><strong>Login</strong></div>
        <div style={{display: "inline", marginLeft: 25}}><strong>Logout</strong></div>
        </div>
    </div>
  </nav>
      </div></>
    );
  }
}

export default Navbar;
