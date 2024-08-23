import React from 'react'
import './DetailArea.css'
import { Link } from 'react-router-dom';

const DetailArea = (props) => {

    const { movie } = props;

    return (
        <main>
            <section class="banner-bg">
                <div class="banner">
                    <div class="container">
                        <div class="detail-area">
                            <div className="detail-area-img">
                                <img src={movie.image} alt="" />
                            </div>
                            <div className="detail-area-content">
                                <h2>New Episodes</h2>
                                <h1>{movie.name}</h1>
                                <div class="detail-area-ucm-footer">
                                    <div class="detail-area-ucm-footer-left">
                                        <span>HD</span>
                                    </div>
                                    <div class="detail-area-ucm-footer-right">
                                        <span>{movie.type_movie}</span>
                                        <span><ion-icon name="time-outline"></ion-icon>{movie.year}</span>
                                        <span><ion-icon name="time-outline"></ion-icon>{movie.time_movie}</span>
                                    </div>
                                </div>
                                <p> 
                                    perspiciatis? Rem perferendis eos maxime aliquid fuga expedita
                                    voluptatibus distinctio inventore assumenda amet ullam deserunt,
                                    eius laborum delectus molestiae corrupti recusandae?
                                </p>
                                <div className="detail-area-content-watch">
                                    <Link >
                                        WACTH NOW
                                    </Link>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="content-container">
                    <div className="content-main">
                        <div className="main-left">
                            <div className="main-left-top">
                                <p>ONLINE STREAMING</p>
                                <h2>Watch Full Episode</h2>
                            </div>
                            <div className="main-left-center">
                                <div className="top-bar">
                                    <div className="center-left">SEASON 1</div>
                                    <div className="center-right">6 Full Episodes</div>
                                </div>
                                <div className="ep">
                                    <div> <ion-icon size="small" name="caret-forward-outline"></ion-icon> <Link> Episode 1 - The World Is Purple</Link></div>
                                    <div> <ion-icon size="small" name="caret-forward-outline"></ion-icon> <Link>Episode 2 - The World Is Purple</Link></div>
                                    <div> <ion-icon size="small" name="caret-forward-outline"></ion-icon> <Link>Episode 3 - The World Is Purple</Link></div>
                                    <div> <ion-icon size="small" name="caret-forward-outline"></ion-icon> <Link>Episode 4 - The World Is Purple</Link></div>
                                    <div> <ion-icon size="small" name="caret-forward-outline"></ion-icon> <Link>Episode 5 - The World Is Purple</Link></div>
                                    <div> <ion-icon size="small" name="caret-forward-outline"></ion-icon> <Link>Episode 6 - The World Is Purple</Link></div>

                                </div>
                            </div>
                        </div>
                        <div className="main-right">
                            <div className="main-right-img">
                                <img src={movie.image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailArea