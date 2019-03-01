import React, { Component } from "react";

import { connect } from "react-redux";


class Search extends Component {
  constructor(props) {
    super(props);
   
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "SEARCH_TERM",
      category: event.target.value
    })
  }

  render() {

    return (
      <div style={{marginLeft: "300px"}}>
      <form onSubmit={this.handleSubmit} placeholder="search anything...">
        <input type="search"  onChange={this.handleSubmit} placeholder="search anything..."/>
        {/* <input type="submit" /> */}
      </form>
      </div>
    );
  }
}


export default connect()(Search);

