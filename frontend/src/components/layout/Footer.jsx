// src/components/layout/Footer.jsx
import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="site-footer">

            <div className="footer-container">

                <div className="footer-flex">

                    {/* Left Part */}
                    <div className="footer-col brand-col">
                        <h3>Zborov</h3>
                        <div className="brand-divider"></div>

                        <p>Obnova historického místa a budování centra paměti pro budoucí generace.</p>
                    </div>

                    {/* Right Part */}
                    <div className="footer-col contact-col">

                        <div className="contact-inline-row">
                            <a href="mailto:pszenasy@sokol.eu" className="contact-link-foot">pszenasy@sokol.eu</a>
                            <a href="tel:+420602274312" className="contact-link-foot">+420 602 274 312</a>

                            <div className="footer-socials">

                                <a href="#" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>

                                <a href="#" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Part */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Pamětní dům Zborov. Všechna práva vyhrazena.</p>

                    <div className="footer-bottom-links">
                        <Link to="/privacy">Ochrana osobních údajů</Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;