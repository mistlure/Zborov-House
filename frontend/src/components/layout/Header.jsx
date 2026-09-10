import './Header.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ onOpenMenu }) {
    const [isTopBarVisible, setIsTopBarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTopBarVisible(window.scrollY < 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Up */}
            <div className={`top-bar ${isTopBarVisible ? 'visible' : 'hidden'}`}>
                <div className="top-bar-content">
                    <div className="top-bar-left">
                        <a href="#" className="social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="top-bar-right">
                        <a href="mailto:pszenasy@sokol.eu" className="contact-link">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            pszenasy@sokol.eu
                        </a>

                        <a href="tel:+420602274312" className="contact-link">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            +420602274312
                        </a>
                    </div>
                </div>
            </div>

            {/* Main */}
            <header className={`main-nav ${!isTopBarVisible ? 'shifted' : ''}`}>
                <div className="nav-content">

                    <div className="logo-box">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Zborov
                        </Link>
                    </div>

                    <div className="nav-right">
                        <nav className="nav-links">
                                <Link to="/" className="active">Úvod</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/about">O projektu</Link>
                        </nav>

                        <button className="menu-btn" onClick={onOpenMenu}>
                            <span className="burger-lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;