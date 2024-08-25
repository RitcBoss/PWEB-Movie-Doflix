import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo_icon from '../Assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <header>
                <nav>
                    <div class="container">
                        <div class="logo">
                            <Link to='/'><img src={logo_icon} /></Link>
                        </div>
                        <div class="nav-bar">
                            <ul>
                                <li class="menu-dropdown-list">
                                    <Link class="nav-title" to='/'>HOME</Link>
                                </li>
                                <li class="menu-dropdown-list">
                                    <Link class="nav-title" to='/movie'>MOVIE</Link>
                                </li>
                                <li><Link class="nav-title" to='/pricing'>PRICING</Link></li>
                                <li><Link class="nav-title" defaultChecked to='/' style={{cursor:'default'}} >CONTACTS</Link></li>
                            </ul>
                        </div>
                        <div class="action">
                            <ul>
                                <li class="header-lang">
                                    <form action="">
                                        <div class="icon">
                                            <ion-icon name="globe-outline"></ion-icon>
                                        </div>
                                        <select name="" id="">
                                            <option value="">EN</option>
                                            <option value="">TH</option>
                                        </select>
                                    </form>
                                </li>
                                <li class="header-btn">
                                    <a href="#">SIGN IN</a>
                                </li>
                                <li class="header-btn-menu">
                                    <button onClick={() => setMenuOpen(!menuOpen)}><ion-icon size="large" name="menu-outline"></ion-icon></button>
                                </li>

                            </ul>
                        </div>
                        <div className={menuOpen ? "show-hide" : "header-nav-menu-container"}>
                            <div className="header-nav-menu">
                                <ul className='header-nav-menu-list'>
                                    <li><img src={logo_icon} /><button onClick={() => serMenuOpen(!menuOpen)}>X</button></li>
                                    <li onClick={() => { window.location.reload() }} className='list'><Link class="nav-title" to='/'>HOME</Link> </li>
                                    <li onClick={() => { window.location.reload() }} className='list'><Link class="nav-title" to='/movie'>MOVIE</Link> </li>
                                    <li onClick={() => { window.location.reload() }} className='list'><Link class="nav-title" to='/pricing'>PRICING</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar