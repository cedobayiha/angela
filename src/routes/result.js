import React from 'react'
import Subnav from '../components/result/subnav'

import ImagesHeader from '../components/result/imagesHeader'

import Email from '../components/Email'
import Navv from '../components/navv'



const Result = () => (
    <div>
        <Subnav/>
        <ImagesHeader/>
        <Navv />
        <Email />

        <div className="space20"/>
    </div>
)



export default Result