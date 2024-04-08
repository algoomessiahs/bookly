import './Header.css';
import React from "react";
import { FaHome } from 'react-icons/fa'

function Header() {
    return (

        <div>
            <header className="header">

                <div className="header-1">

                    <a href="#" className="logo"> <i className="fas fa-book"></i> bookly </a>

                    <form action="" className="search-form">
                        <input type="search" name="" placeholder="search here..." id="search-box" />
                        <label className="fas fa-search"></label>
                    </form>

                    <div className="icons">
                        <div id="search-btn" className="fas fa-search"></div>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <div id="login-btn" className="fas fa-user"></div>
                    </div>

                </div>

                <div className="header-2">
                    <nav className="navbar">
                        <a href="#home">home</a>
                        <a href="#featured">featured</a>
                        <a href="#arrivals">arrivals</a>
                        <a href="#reviews">reviews</a>
                        <a href="#blogs">blogs</a>
                    </nav>
                </div>

            </header>

        <nav className="bottom-navbar">
            <FaHome />
            <FaHome />
            <FaHome />
            <FaHome />
            <FaHome />
            {/* <a href="#home" className="fas fa-home"></a>
            <a href="#featured" className="fas fa-list"></a>
            <a href="#arrivals" className="fas fa-tags"></a>
            <a href="#reviews" className="fas fa-comments"></a>
            <a href="#blogs" className="fas fa-blog"></a> */}
        </nav>
        </div>


    );
}

export default Header;

