import React, { Component } from "react";

class Email extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit(e) {
    console.log("hey: ", this.props.authItems.sid);
    e.preventDefault();
    if (this.props.authItems.sid) {
      let c = JSON.stringify({
        email: this.state.email,
        password: this.state.message,
        username: this.state.name
      });
      fetch("http://localhost:3000/signup", { method: "POST", body: c });
    }
  }
  render() {
    return (
      <div className="rfi-box" id="rfi">
        <div className="rfi-box rfi-Header">
          <div className="rfi-box rfibody contact contact-info" />

          <div className="container" style={{ maxWidth: 350 }}>
            <div />
            <div>Sales center</div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-section">
                  <div>
                    <input
                      className="form-control"
                      type="type"
                      placeholder="Name"
                      onChange={this.handleChange}
                      style={{marginBottom: 10 }}
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      style={{marginBottom: 10 }}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="form-control"
                      type="textarea"
                      placeholder="ask us anything"
                      onChange={this.handleChange}
                      style={{ height: 100, marginBottom: 10 }}
                    />
                  </div>
                  <button className=" btn btn-primary" type="submit" style={{ width: "100%" }}>
                    Request Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Email;
