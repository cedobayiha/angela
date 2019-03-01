import React from 'react'
import classes from './mobileActions.module.css'
import {OpenNewTabIcon} from "../icons/icons";

const MobileActions = () => (
    <div className={classes.Container}>
        <div style={{
            display: 'flex',
            flexShrink: 0,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16
        }}>
            <button className="btn btn-outline-primary">
                <OpenNewTabIcon fill="var(--primary)"/>

                <span>Website</span>
            </button>
            <button className="btn btn-primary">
                Request info
            </button>
        </div>
    </div>
)

export default MobileActions