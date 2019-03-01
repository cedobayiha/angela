import React from 'react'
import Img1 from '../../img/2018_09_06_12_05_12_20180830_aerial_v6_hd_horizontale.jpg'
const RecentlyAdded = () => {
    return (
        <div>
            <div className="container">
                <h3>Recently added</h3>
                <div className="space10"/>
                <div className="row">
                    <FeaturedItem />
                    <FeaturedItem />
                    <FeaturedItem />
                    <FeaturedItem />
                </div>
            </div>
        </div>
    )
}

const FeaturedItem = () => (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <div style={{marginBottom: 8}}>
            <div style={{
                minHeight: 160,
                backgroundImage:`url(${Img1}`,
                backgroundSize:'cover',
                backgroundPosition:'center'}}
            />
            <div style={{padding: '8px 8px 16px'}}>
                <div style={{fontSize:12, color:'var(--gray)', textTransform:'uppercase'}}>View Montreal</div>
                <div style={{color:'var(--primary)', fontWeight: 700}}>Le Best Condo</div>
                <div>from $157,000</div>
            </div>
        </div>
    </div>
)

export default RecentlyAdded