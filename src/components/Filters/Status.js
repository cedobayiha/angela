import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {connect} from "react-redux"

class Status extends Component {
  constructor(props) {
    super(props);
    this.handleSubCat = this.handleSubCat.bind(this);
    // this.handleChange = this.handleChange.bind(this)
  }
  // handleChange(event){
  //   this.setState({category: event.target.value})
  // }

  handleSubCat(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "FILTER_BY_STATUS",
      category: event.target.value
    })
  }

  render() {
    return (
      <div
        className="dropdown"
        style={{
          display: "flex",
          width: "160px",
          borderRadius: "5px",
          float: "left",
        }}
      >
        <select className= "blue-grey darken-2"
          onChange={this.handleSubCat}
          style={{ display: "block", width: "150px"}}
        >
          <option value="Construction Status" selected disabled>
          Construction Status
          </option>
          <option value="Preconstruction" >Preconstruction</option>
          <option value="Construction">Construction</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    );
  }
}

export default connect()(withRouter(Status));