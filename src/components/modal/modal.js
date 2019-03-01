import React from 'react'
import classes from './modal.module.css'
import {CloseIcon} from "../icons/icons";


export default ({children, closeModal, closeProtectModal, iconColor, iconSize}) => (
    <div className={classes.Modal} onClick={closeModal}>
        <div className={classes.ModalContainer} onClick={closeProtectModal}>
            <div className={classes.ModalContent}>
                <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>

                    <div style={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            right: 0,
                            top: 0
                        }}>
                            <span onClick={closeModal} style={{cursor: 'pointer'}}>
                                <CloseIcon size={iconSize && iconSize} fill={iconColor && iconColor}/>
                            </span>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
)