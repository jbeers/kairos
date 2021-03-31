import React from 'react';
import horz_white from '../images/horz_white.png';
import { Link } from 'gatsby';
import './Footer.css';

export const Footer = () => {
    return <div className="footer">
        <div className = 'footer-content'>
            <div className="footer__salutations">
                <Link to="/"><img className="header__logo" src={horz_white} alt="Kairos Church Logo"/></Link>
            </div>
            <div className="footer__content">
                <div className="footer__link-group">
                    <h3 className="footer__link-list-label">Information</h3>
                    <ul className="footer__link-list">
                        <Link className="footer__link" to='/'>Home</Link>
                        <Link className="footer__link" to='/about'>About</Link>
                        <Link className="footer__link" to='/events'>Upcoming Events</Link>
                        <Link className="footer__link" to='/planningcenter'>Planning Center</Link>
                        <Link className="footer__link" to='/privacy-policy'>Privacy Policy</Link>
                    </ul>
                </div>
                <div className="footer__link-group">
                    <h3 className="footer__link-list-label">Ministries</h3>
                    <ul className="footer__link-list">
                        <Link className="footer__link" to='/ministries/spark'>Spark</Link>
                        <Link className="footer__link" to='/ministries/beacon'>Beacon</Link>
                        <Link className="footer__link" to='/ministries/prophetic'>Prophetic</Link>
                        <Link className="footer__link" to='/ministries/hoperocks'>Hope Rocks</Link>
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
            </div>
        </div>
    </div>
};