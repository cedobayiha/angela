import React from 'react'
import Subnav from '../components/result/subnav'

import ImagesHeader from '../components/result/imagesHeader'

import Email from '../components/Email'
import Navv from '../components/result/navv'
import MobileActions from '../components/result/mobileActions'
import PostDescription from '../components/result/postDescription'

const Result = () => (
    <div>
        <Subnav/>
        <ImagesHeader/>
        <Navv />
        <div className="space20"/>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <PostDescription/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Email />
                    </div>
                </div>
            </div>
        </div>

        <MobileActions/>

        <div className="space20"/>
    </div>
)



export default Result