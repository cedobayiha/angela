import React, {Component} from "react";
import classes from './navv.module.css'

class Navv extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={classes.NavWrap}>
                <div className="container">
                    <ul className="nav" style={{maxWidth: 200, display:'flex', justifyContent:'space-between', flexWrap:'initial'}}>
                        <li style={{height: 50, paddingLeft: 10, paddingRight:10}}>
                            <a className={["nav-link", classes.Active,classes.NavLinkItem].join(' ')} href="#" style={{height:'100%'}}>Overview</a>
                        </li>
                        <li style={{height: 50, paddingLeft: 10, paddingRight:10}}>
                            <a className={["nav-link",classes.NavLinkItem].join(' ')} href="#" style={{height:'100%'}}>Images</a>
                        </li>
                        <li style={{height: 50, paddingLeft: 10, paddingRight:10}}>
                            <a className={["nav-link",classes.NavLinkItem].join(' ')} href="#" style={{height:'100%'}}>Plans</a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default Navv