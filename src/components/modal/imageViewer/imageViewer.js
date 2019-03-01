import React from 'react'
import classes from './imageViewer.module.css'
import {ArrowLeftIcon, ArrowRightIcon, CloseIcon} from "../../icons/icons";
import ImgH from '../../../img/building-image-1.jpg'


export default ({ children, closeModal, closeProtectModal, render }) => {
    if(!render) {
        return null
    }
    return (
        (
            <div className={classes.Modal} onClick={closeModal}>
                <div className={classes.ModalContainer} onClick={closeProtectModal}>
                    <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        height: 56,
                        alignItems:'center',
                        paddingRight: 16
                    }}>
                        <div onClick={closeModal} style={{cursor:'pointer'}}>
                            <CloseIcon size="32" fill="#fff"/>
                        </div>
                    </div>

                    <div style={{textAlign:'center', color:'white', fontSize: 14, fontWeight:700, height:24}}>1 / 34</div>
                    <div className={classes.ImageViewContainer}>
                        <div className="container" style={{height:'100%', padding: 0}}>
                            <div style={{height:'100%', textAlign:'center'}}>
                                <img src={ImgH} style={{maxWidth:'100%', maxHeight:'100%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BottomContainer}>
                        <div>
                            <div className="container" style={{
                                display:'flex',
                                justifyContent:'space-between',
                                paddingTop: 16,
                                paddingBottom: 16
                            }}>
                                <div style={{color:'white', fontSize:12}}>
                                    DevMcgill NOCA Exterior Rendering
                                </div>
                                <div style={{display:'flex'}}>
                                    <div className={[classes.HomeAreaPicture, classes.Selected].join(' ')} style={{marginRight: 6}}>All 34</div>
                                    <div className={classes.HomeAreaPicture} style={{marginRight: 6}}>Exterior 16</div>
                                    <div className={classes.HomeAreaPicture}>Interior 18</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container"
                                 style={{
                                     display: 'flex',
                                     alignItems:'center',
                                     flexShrink: 0,
                                     justifyContent:'space-between'
                                 }}>
                                <div style={{paddingRight: 16, pointer:'cursor'}}>
                                    <ArrowLeftIcon fill="#fff"/>
                                </div>
                                <div style={{flexGrow: 1, display:'flex', justifyContent:'center', overflow:'hidden'}} >
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                    <ImgThumbnail />
                                </div>
                                <div style={{paddingLeft: 16, pointer:'cursor'}}>
                                    <ArrowRightIcon fill="#fff"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

const ImgThumbnail = () => (
    <div className={classes.ImgThumbnail} style={{backgroundImage: `url(${ImgH})`}}/>
)