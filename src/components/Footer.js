import React from 'react';
import horz_white from '../images/horz_white.png';
import { Link } from 'gatsby';
import './Footer.css';

export const Footer = () => {
    return <div className="footer">
        <div className="footer__salutations">
            <Link to="/"><img className="header__logo" src={horz_white} /></Link>
        </div>
        <div className="footer__content">
            the content of the footer
        </div>
    </div>
};