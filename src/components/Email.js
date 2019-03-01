import React, {Component} from "react";
import classes from './email.module.css'

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
        this.setState({[e.target.name]: e.target.value});
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
            fetch("http://localhost:3000/signup", {method: "POST", body: c});
        }
    }

    render() {
        return (
            <div className={[classes.Wrapper, classes.Mobile].join(' ')}
                 style={{display:`${this.props.show && 'block'}`, ...this.props.style}}>
                <div className="container" style={{paddingTop: 16, paddingBottom: 16}}>
                    <h5 style={{
                        borderBottom: '1px solid #dfe2e5',
                        paddingBottom: 16,
                        marginBottom: 16,
                        textAlign: 'center'}}>
                        Request more information
                    </h5>
                    <div style={{fontWeight:700}}>LIV Condos</div>
                    <div style={{color:'var(--gray)', fontSize: 14,marginBottom: 8}}>Sales center</div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-section">
                                <div>
                                    <input
                                        className="form-control"
                                        type="type"
                                        placeholder="Name"
                                        onChange={this.handleChange}
                                        style={{marginBottom: 10}}
                                    />
                                </div>
                                <div>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                        style={{marginBottom: 10}}
                                    />
                                </div>
                                <div>
                                    {" "}
                                    <input
                                        className="form-control"
                                        type="textarea"
                                        placeholder="ask us anything"
                                        onChange={this.handleChange}
                                        style={{height: 100, marginBottom: 10}}
                                    />
                                </div>
                                <button
                                    className=" btn btn-primary"
                                    type="submit"
                                    style={{width: "100%", fontWeight: 700}}>
                                    Request Info
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Email;
