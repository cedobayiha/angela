import React, {Component} from "react";
import { Link } from 'react-router-dom'
import "./nav.css"


class Navbar extends Component {
    render() {
        return (<>
            <div>
                <nav>
                    <div className="container" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "auto",
                        alignItems: "center",
                        height: 56
                    }}>
                        <div><strong>Angela</strong></div>
                        <div>
                            <div style={{display: "inline", marginRight: 16}}><Link to="/result">Result</Link></div>
                            <div style={{display: "inline", marginRight: 16}}>Login</div>
                            <div style={{display: "inline"}}>Logout</div>
                        </div>
                    </div>
                </nav>
            </div>
            </>
        );
    }
}

export default Navbar;
