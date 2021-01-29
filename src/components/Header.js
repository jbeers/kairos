import React from 'react';
import logo from '../images/horz_logo.png';
import './Header.css';
import { Link } from 'gatsby';

export const Header = () => {
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
    </header>
};