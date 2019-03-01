import React from 'react'
import classes from './imagesHeader.module.css'
import ImageViewerModal from '../modal/imageViewer/imageViewer'
import Img1 from '../../img/building-image-1.jpg'

const ImagesHeader = ()=> (
    <div style={{backgroundColor:'var(--gray)'}}>
        <div style={{maxWidth:1200, margin:'auto', maxHeight:351, position:'relative', overflow:'hidden'}}>
            <div className={classes.HeaderContainer}>
                <div style={{display:'flex'}}>
                    <div className={classes.BigImage} style={{backgroundImage: `url(${Img1})`}}/>

                    <div className={classes.SmallImgsContainer}>
                        <div style={{minWidth:232, borderLeft: '3px solid white'}}>
                            <ImageItem top={true}/>
                            <ImageItem />
                        </div>
                        <div style={{minWidth:232, borderLeft: '3px solid white'}}>
                            <ImageItem top={true}/>
                            <ImageItem />
                        </div>
                        <div style={{minWidth:232, borderLeft: '3px solid white'}}>
                            <ImageItem top={true}/>
                            <ImageItem />
                        </div>
                        <div style={{minWidth:232, borderLeft: '3px solid white'}}>
                            <ImageItem top={true}/>
                            <ImageItem />

                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.MobileContainer}>
                <div style={{width:'100%', height:'100%', textAlign:'center'}}>
                    <img style={{maxWidth:'100%', maxHeight:'100%', margin:'auto'}} src={Img1}/>
                </div>
            </div>
        </div>
        <ImageViewerModal render={false}/>
    </div>
)

const ImageItem = ({top}) => (
    <div className={classes.ImgItem} style={{
        height:`${top ? '177px' : '174px'}`,
        borderBottom: `${top && "3px solid white"}`,
        backgroundColor:`${top ? 'green' :'yellow'}`
    }}
    />
)

export default ImagesHeader