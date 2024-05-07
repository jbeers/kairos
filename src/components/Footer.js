import { Link } from 'gatsby';
import React from 'react';
import { FaFacebookF, FaInstagram, FaVimeoV } from 'react-icons/fa';
import horz_white from '../images/horz_white.png';
import './Footer.css';

export const Footer = () => {
    return <div className="footer">
        <div className='footer-content'>
            <div className="footer__salutations">
                <Link to="/"><img className="header__logo" src={horz_white} alt="Kairos Church Logo" /></Link>
            </div>
            <div className="footer__content">
                <div className="footer__link-group">
                    <h3 className="footer__link-list-label">Information</h3>
                    <ul className="footer__link-list">
                        <Link className="footer__link" to='/'>Home</Link>
                        <Link className="footer__link" to='/about'>About</Link>
                        <a className="footer__link" href="https://kairos-kc.churchcenter.com/calendar?view=list">Upcoming Events</a>
                        <Link className="footer__link" to='/privacy-policy'>Privacy Policy</Link>
                    </ul>
                </div>
                <div className="footer__link-group">
                    <h3 className="footer__link-list-label">Ministries</h3>
                    <ul className="footer__link-list">
                        <Link className="footer__link" to='/ministries/Spark'>Spark</Link>
                        <Link className="footer__link" to='/ministries/Beacon'>Beacon</Link>
                        <Link className="footer__link" to='/ministries/Prophetic'>Prophetic</Link>
                        <Link className="footer__link" to='/ministries/HopeRocks'>Hope Rocks</Link>
                    </ul>
                </div>
                <div className="footer__link-group">
                    <h3 className="footer__link-list-label">Connect</h3>
                    <ul className="footer__link-list">
                        <Link className="footer__link" to='/contact'>Contact</Link>
                        <Link className="footer__link" to='/prayer'>Prayer</Link>
                        <Link className="footer__link" to='/media'>Media</Link>
                        <Link className="footer__link" to='/give'>Give</Link>
                    </ul>
                </div>
                <div style={{ flex: 1 }} />
                <div className="footer__link-group footer__link-group--side">
                    <h3 className="footer__link-list-label">Social Media</h3>
                    <ul className="footer__link-list footer__link-list--icons">
                        <a href="https://www.facebook.com/kairoskansascity/"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/kairoskansascity/?hl=en"><FaInstagram /></a>
                        <a href="https://vimeo.com/kairoskc"><FaVimeoV /></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
};