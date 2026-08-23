// src/components/layout/SideMenu.jsx
import './SideMenu.css'
import React from 'react';

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
                    <a href="#" className="active">Úvod</a>
                    <a href="#">Blog</a>
                    <a href="#">O projektu</a>
                    <a href="#">Projektový team</a>
                    <a href="#">Partneři projektu</a>
                    <a href="#">Milníky projektu</a>
                    <a href="#">Historie místa</a>
                    <a href="#">Napsali o nás</a>
                    <a href="#">Fotogalerie</a>
                    <div className="nav-divider"></div>
                    <a href="#" className="sub-link">Seznam dárců</a>
                    <a href="#" className="sub-link">Kontakt</a>
                </nav>

            </div>
        </>
    );
}

export default SideMenu;