import React from 'react'
import classes from './slider.module.css'

const Slider = () => {

    return (

        <div>

            <div className={classes.Slider}>
                <div style={{flexGrow: 1}}>
                    <div className="container">
                        <div style={{maxWidth: 670, padding: 16, margin: 'auto'}}>
                            <h1 style={{
                                textAlign: 'center',
                                color: 'white',
                                maxWidth: 420,
                                margin: 'auto',
                                marginBottom: 20
                            }}>Find your new construction home</h1>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                backgroundColor: 'rgba(0,0,0,.6)',
                                marginBottom: 16
                            }}>
                                <div className={[classes.BuyRent, classes.Active].join(' ')}>Buy</div>
                                <div className={classes.BuyRent}>Rent</div>
                            </div>
                            <div style={{
                                padding: 8,
                                backgroundColor: 'white',
                                borderRadius: 5,
                                display: 'flex',
                                width: '100%'
                            }}>
                                <input
                                    className={[classes.Input, "form-control"].join(' ')}
                                    placeholder="City, neighborhood, development, etc..."
                                />
                                <button
                                    className="btn btn-primary"
                                    style={{width: 90, height: 44, fontWeight: 700}}>Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Slider