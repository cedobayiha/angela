import React from 'react'
import Bed from './icons/bed.svg'
import Building from './icons/building.svg'
import Calendar from './icons/calendar.svg'
import Crane from './icons/crane.svg'
import Ppsf from './icons/ppsf.svg'
import Size from './icons/size.svg'

const PostInfoSummary = () => (
    <div style={{padding:'16px 16px 0', borderRadius: 3, border: '1px solid var(--main-gray-border)'}}>
        <div className="row">

            <Item img={Building} description="Condo"/>
            <Item img={Bed} description="0 - 3 Bedrooms"/>
            <Item img={Calendar} description="Est. Compl. 2020"/>
            <Item img={Crane} description="300 Units | 8 Stories"/>
            <Item img={Size} description="381 - 2208 SqFt"/>
            <Item img={Ppsf} description="$482 per SqFt"/>
        </div>
    </div>
);

const Item = (props) => (
    <div className="col-12 col-md-6 col-lg-4" style={{position:'relative', marginBottom: 16}}>
        <div style={{position:'absolute', top: -4}}><img src={props.img}/></div>
        <div style={{paddingLeft: 32}}>{props.description}</div>
    </div>
);

export default PostInfoSummary