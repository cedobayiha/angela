import React from 'react'
import classes from './modal.module.css'
import {CloseIcon} from "../icons/icons";


export default ({ children, closeModal, closeProtectModal }) => (
    <div className={classes.Modal} onClick={closeModal}>
        <div className={classes.ModalContainer} onClick={closeProtectModal}>
            <div className={classes.ModalContent}>
                <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
                    <div style={{display:'flex', justifyContent:"flex-end", alignItems:'center', padding:8, height: 48}}>
                    <span onClick={closeModal} style={{cursor:'pointer'}}>
                        <CloseIcon width="32" height="32" fill="var(--primary-text-color)"/>
                    </span>
                    </div>
                    <div style={{flexGrow: 1}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
)