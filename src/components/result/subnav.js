import React from 'react'
import {BackIcon, ChevronIconRight, FavoriteIconEmpty, FavoriteIconFull} from "../icons/icons";
import classes from './subnav.module.css'
const Subnav = () => {

    return (
        <div>
            <div className="container"
                 style={{
                    display:'flex',
                     justifyContent:'space-between',
                     height:52,
                     alignItems:'center',
                 }}>
                <div style={{display:'flex'}}>
                    <div style={{position:'relative', cursor:'pointer'}}>
                        <span style={{position:'absolute', top:-2}}><BackIcon/></span>
                        <span style={{paddingLeft: 30}}>Back to Search</span>
                    </div>
                    <div className={classes.Breadcrumbs}>
                        <span>QC</span>
                        <span><ChevronIconRight size="18"/></span>
                        <span>Montreal</span>
                        <span><ChevronIconRight size="18" /></span>
                        <span>New condos sales</span>
                    </div>
                </div>
                <div style={{position:'relative', cursor:'pointer'}}>
                    <span style={{position:'absolute', top:-1}}><FavoriteIconEmpty size="20"/></span>
                    <span style={{paddingLeft: 24}}>Save</span>
                </div>
            </div>
        </div>
    )
}

export default Subnav