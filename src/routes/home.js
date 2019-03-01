import React from 'react'

import Slider from '../components/slider/slider'
import Featured from '../components/featured/featured'
import RecentlyAdded from '../components/recent/recent'

const HomePage = () => (
    <div>
        <Slider/>
        <div className="space30"/>
        <Featured/>
        <div className="space20"/>
        <RecentlyAdded/>
        <div className="space20"/>
    </div>
)



export default HomePage