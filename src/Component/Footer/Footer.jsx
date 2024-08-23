import React from 'react'
import './Footer.css'
import logo_icon from '../Assets/logo.png'
import card_icon from '../Assets/card_img.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div class="footer-top">
                <div class="footer-top-content">
                    <div class="footer-top-header">
                        <div class="logo">
                            <img src={logo_icon} />
                        </div>
                        <div class="nav">
                            <ul>
                                <li><Link to='/' >HOME</Link></li>
                                <li><Link to='/movie' >MOVIE</Link></li>
                                <li><Link to='/pricing'>PRICING</Link></li>
                            </ul>
                            <div class="search-input">
                                <form action="#">
                                    <input type="search" placeholder="Find Favorite Movie" />
                                    <div class="last-line"></div>
                                    <button>
                                        <ion-icon name="search"></ion-icon>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-top-link">
                        <ul>
                            <li><Link >FAQ</Link></li>
                            <li><Link >HELP CENTER</Link></li>
                            <li><Link >TERMS OF USE</Link></li>
                            <li><Link >PRIVACY</Link></li>
                        </ul>
                        <div class="box-link">
                            <Link ><ion-icon name="logo-facebook"></ion-icon></Link>
                            <Link ><ion-icon name="logo-twitter"></ion-icon></Link>
                            <Link ><ion-icon name="logo-pinterest"></ion-icon></Link>
                            <Link ><ion-icon name="logo-linkedin"></ion-icon></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="footer-copyright-container">
                    <div class="footer-copyright-content">
                        <div class="footer-copyright-content-left">
                            <span>
                                <h4>Copyright © 2024. All Rights Reserves</h4>By RitZ
                            </span>
                        </div>
                        <div class="footer-copyright-content-right">
                            <img src={card_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer