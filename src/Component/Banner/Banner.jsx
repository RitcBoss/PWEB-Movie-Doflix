import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <main>
        <section class="banner-bg">
            <div class="banner">
                <div class="container">
                    <div class="container-banner">
                        <h6>Doflix</h6>
                        <h2>Unlimited <span>Movie</span>, TVs Show, & More.</h2>
                        <ul>
                            <li class="quality">
                                <span>PG 18</span>
                                <span>HD</span>
                            </li>
                            <li class="category">
                                <a href="">Romance</a>,
                                <a href="">Drama</a>
                            </li>
                            <li class="release-time">
                                <span>
                                    <ion-icon name="calendar-outline"></ion-icon>
                                    <p>2021</p>
                                </span>
                                <span>
                                    <ion-icon name="time-outline"></ion-icon>
                                    <p>128 min</p>
                                </span>
                            </li>
                        </ul>
                        <a class="btn" href="#">
                            <ion-icon name="play"></ion-icon>
                            <p>WATCH NOW</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Banner