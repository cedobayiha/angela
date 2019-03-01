import React from'react'
import Modal from '../modal'
import Email from '../../Email'

import classes from './styles.module.css'

const RequestInfoModal = () => {

    return (
        <div className={classes.Container}>
            <Modal iconColor="#fff" iconSize="32">
                <div style={{textAlign:'center', flexGrow:1, maxWidth: 300, margin:'auto'}}>
                    <Email show={true} style={{margin:'auto'}}/>
                </div>

            </Modal>
        </div>
    )
}

export default RequestInfoModal