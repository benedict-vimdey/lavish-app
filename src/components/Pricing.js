import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Pricing.css'

function Pricing() {
    return (
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading"> Pricing </h1> 
                    <div className="pricing__container">
                        <Link to='/sign-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <i className='fas fa-fire'/>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>Per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% cash back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <i className='fas fa-diamond'/>
                                    <h3>Diamond</h3>
                                    <h4>$29.99</h4>
                                    <p>Per month</p>
                                    <ul className="pricing__container-features">
                                        <li>1000 Transactions</li>
                                        <li>5% cash back</li>
                                        <li>$100,000 Limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plan</Button>
                                </div>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <i className='fas fa-cart'/>
                                    <h3>Premium</h3>
                                    <h4>$99.99</h4>
                                    <p>Per month</p>
                                    <ul className="pricing__container-features">
                                        <li>1000 Transactions</li>
                                        <li>8% cash back</li>
                                        <li>$1,000,000 Limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pricing
