import React, {Component} from "react";
import "./nav.css"


class Navbar extends Component {
    render() {
        return (<>
            <div>
                <nav>
                    <div className="contain" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: 970,
                        margin: "auto",
                        alignItems: "center",
                        height: 56
                    }}>
                        <div><strong>Angela</strong></div>
                        <div>
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
