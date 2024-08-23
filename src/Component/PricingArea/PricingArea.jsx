import React from 'react'
import './PricingArea.css'
import { Link } from 'react-router-dom'

const PricingArea = () => {
    return (
        <>
            <div className="pricingarea">
                <div className="pricingarea-container">
                    <div className="container-box">
                        <div className="box-top">
                            <p>OUR PRICING PLANS</p>
                            <h2>Our Pricing Strategy</h2>
                            <hr />
                        </div>
                        <div className="box-bottom">
                            <div className="grid-box">
                                <div className="item">
                                    <p className='item-hd'>PREMIUM</p>
                                    <div className="item-box-price">
                                        <p className='price-hd'>$9.99</p>
                                        <p className='price-lm'>Monthly</p>
                                    </div>
                                    <div className="item-box-detail">
                                        <ul>
                                            <li >Video quality<span className='quality'>Good</span></li>
                                            <li >Resolution<span>480p</span></li>
                                            <li >Screens you can watch<span>1</span></li>
                                            <li >Cancel anytime</li>
                                        </ul>
                                    </div>
                                    <div className="item-box-buy">
                                        <Link>Buy Now</Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className='item-hd'>STANDARD</p>
                                    <div className="item-box-price">
                                        <p className='price-hd'>$12.99</p>
                                        <p className='price-lm'>Monthly</p>
                                    </div>
                                    <div className="item-box-detail">
                                        <ul>
                                            <li >Video quality<span className='quality'>Better</span></li>
                                            <li >Resolution<span>1080p</span></li>
                                            <li >Screens you can watch<span>2</span></li>
                                            <li >Cancel anytime</li>
                                        </ul>
                                    </div>
                                    <div className="item-box-buy">
                                        <Link>Buy Now</Link>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className='item-hd'>PREMIUM</p>
                                    <div className="item-box-price">
                                        <p className='price-hd'>$15.99</p>
                                        <p className='price-lm'>Monthly</p>
                                    </div>
                                    <div className="item-box-detail">
                                        <ul>
                                            <li >Video quality<span className='quality'>Best</span></li>
                                            <li >Resolution<span>4K+HDR</span></li>
                                            <li >Screens you can watch<span>4</span></li>
                                            <li >Cancel anytime</li>
                                        </ul>
                                    </div>
                                    <div className="item-box-buy">
                                        <Link>Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingArea