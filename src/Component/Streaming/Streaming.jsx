import React from 'react'
import './Streaming.css'
import live_icon from '../Assets/live_img.png'

const Streaming = () => {
    return (
        <main>
            <section class="live-area">
                <div class="live-area-container">
                    <div class="live-area-content">
                        <div class="live-area-content-left">
                            <span class="--sub-title">
                                <div class="last-line"></div>OUR STREAMIMG
                            </span>
                            <h1>Live Movie & TV Shows For Friends & Family</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis vero odio
                                eligendi consectetur at voluptatem quia tempore a veniam, blanditiis mollitia.</p>
                            <div class="live-box-hd">
                                <div class="left">
                                    <h1>HD 4K</h1>
                                </div>
                                <div class="right">
                                    <h1>20K+</h1>
                                    <h2>Active Customer</h2>
                                </div>
                            </div>
                            <a class="live-button" href="https://www.youtube.com/watch?v=R2gbPxeNk2E">
                                <ion-icon name="play"></ion-icon>
                                <p>WATCH NOW</p>
                            </a>
                        </div>
                        <div class="live-area-content-right">
                            <img src={live_icon} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Streaming