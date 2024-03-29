import React, { useState, useEffect } from 'react';
import logo from '../images/horz_logo.png';
import './Header.css';
import { Link } from 'gatsby';
import { FaBars, FaTimes, FaFacebookF, FaVimeoV, FaInstagram } from 'react-icons/fa';

export const Header = () => {
    const [ showMenu, setShowMenu ] = useState( false );

    const handleMenuClick = () => setShowMenu( true );
    const handleCloseClick = () => setShowMenu( false );

    const lockScrolling = () => {
        const html = document.querySelector('html');

        html.style.setProperty('overflow', 'hidden');
    }

    const unlockScrolling = () => {
        const html = document.querySelector('html');

        html.style.removeProperty('overflow');
    }

    useEffect(() => {

        if (!showMenu) {
            unlockScrolling();
            return;
        }

        lockScrolling();

    }, [showMenu])

    return <header className="header">
        <Link to ='/'>
            <img className="header__logo" src={logo} alt="logo"/>
        </Link>
        <span style={{flex: 1}}></span>
        <ul className="header__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <span className="header__social-icons">
            <a href="https://www.facebook.com/kairoskansascity/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/kairoskansascity/?hl=en"><FaInstagram /></a>
            <a href="https://vimeo.com/kairoskc"><FaVimeoV /></a>
        </span>
        <span className="header__menu-icon">
            <FaBars onClick = { handleMenuClick }/>
        </span>
        {
            !showMenu
                ? null
                : <div className="header-mobile-menu">
                    <FaTimes className="header-mobile-menu__close" onClick={handleCloseClick }/>
                    <ul className="header-mobile-menu__links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <span className="header__social-icons--mobile">
                        <a href="https://www.facebook.com/kairoskansascity/"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/kairoskansascity/?hl=en"><FaInstagram /></a>
                        <a href="https://vimeo.com/kairoskc"><FaVimeoV /></a>
                    </span>
                </div>
        }
    </header>
};