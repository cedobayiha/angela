import React, {Component} from "react";
import { Link } from 'react-router-dom'
import classes from './nav.module.css'
import { MenuIcon } from '../icons/icons'

class Navbar extends Component {
    render() {
        return (
            <div style={{borderBottom:" 1px solid #dfe2e5"}}>
                <nav>
                    <div className="container" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "auto",
                        alignItems: "center",
                        height: 56
                    }}>
                        <div><strong>Angela</strong></div>
                        <div className={classes.NavLinks}>
                            <div style={{display: "inline", marginRight: 16}}><Link to="/search">Search</Link></div>
                            <div style={{display: "inline", marginRight: 16}}><Link to="/result">Result</Link></div>
                            <div style={{display: "inline", marginRight: 16}}>Login</div>
                            <div style={{display: "inline"}}>Logout</div>
                        </div>
                        <div className={classes.MobileIconToggle}>
                            <MenuIcon/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
