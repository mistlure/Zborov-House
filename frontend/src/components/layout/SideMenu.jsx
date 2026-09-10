// src/components/layout/SideMenu.jsx
import './SideMenu.css'
import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu({ isOpen, onClose }) {
    return (
        <>
            <div className={`side-menu-overlay ${isOpen ? 'visible' : ''}`} onClick={onClose}></div>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>

                <button className="close-btn" onClick={onClose}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <nav className="side-nav-links">
                    <Link to="/" className="active" onClick={onClose}>Úvod</Link>
                    <Link to="/blog" onClick={onClose}>Blog</Link>
                    <Link to="/about" onClick={onClose}>O projektu</Link>

                    <Link to="/team" onClick={onClose}>Projektový team</Link>
                    <Link to="/partners" onClick={onClose}>Partneři projektu</Link>
                    <Link to="/milestones" onClick={onClose}>Milníky projektu</Link>
                    <Link to="/history" onClick={onClose}>Historie místa</Link>
                    <Link to="/media" onClick={onClose}>Napsali o nás</Link>
                    <Link to="/gallery" onClick={onClose}>Fotogalerie</Link>

                    <div className="nav-divider"></div>

                    <Link to="/donors" className="sub-link" onClick={onClose}>Seznam dárců</Link>
                    <Link to="/contact" className="sub-link" onClick={onClose}>Kontakt</Link>
                </nav>

            </div>
        </>
    );
}

export default SideMenu;