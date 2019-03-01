import React, { Component } from "react";


class Navv extends Component{
  constructor(){
    super()
  }

  render(){
    return(
    <div className="container"><ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Overview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">images</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Plans</a>
    </li>
    
  </ul></div>)
  }
}

export default Navv