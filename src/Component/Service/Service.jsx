import React from 'react'
import './Service.css'
import service_icon from '../Assets/services_img.png'

const Service = () => {
  return (
    <main>
        <section class="our-service">
            <div class="our-service-container">
                <div class="our-service-content">
                    <div class="our-service-item-left">
                        <div class="our-service-item-left-post">
                            <img src={service_icon} alt=""/>
                            <a href="/images/services_img.png" class="download-btn" download="">
                                <p>DOWNLOAD</p>
                                <ion-icon name="download-outline"></ion-icon>
                            </a>

                        </div>
                    </div>
                    <div class="our-service-item-right">
                        <div class="our-service-item-right-box1">
                            <span class="--sub-title">
                                <div class="last-line"></div>OUR SERVICES
                            </span>
                            <h1>Download Your Shows Watch Offline.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus numquam fugit
                                voluptatibus pariatur mollitia in nemo vel velit, voluptatum porro nulla nesciunt
                                molestiae cupiditate facere! Accusantium deleniti labore blanditiis nam, quas omnis.</p>
                        </div>
                        <div class="our-service-item-right-box2">
                            <div class="item-box">
                                <div class="outline">
                                    <a href="">
                                        <ion-icon name="film-outline"></ion-icon>
                                    </a>
                                </div>
                                <div class="title">
                                    <h4>Enjoy on Your TV.</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic veritatis iste
                                        accusantium laborum repellat.</p>
                                </div>
                            </div>
                            <div class="item-box">
                                <div class="outline">
                                    <a href="">
                                        <ion-icon name="videocam-outline"></ion-icon>
                                    </a>
                                </div>
                                <div class="title">
                                    <h4>Watch Everywhere.</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic veritatis iste
                                        accusantium laborum repellat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Service