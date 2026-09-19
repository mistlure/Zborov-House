import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Community.css';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Media from './components/Media/Media';

export default function Community() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('team');

    useEffect(() => {
        if (location.state && location.state.tab) {
            setActiveTab(location.state.tab);
        }
    }, [location]);

    return (
        <div className="community-page">
            <div className="community-container">

                <header className="community-header">
                    <div className="community-title-decorator">
                        <span></span>
                        <h1>Společenství</h1>
                        <span></span>
                    </div>
                    <p className="community-subtitle">Lidé, partneři a instituce, kteří tvoří příběh Zborova</p>
                </header>

                <div className="community-tabs-wrapper">
                    <div className={`community-tabs active-${activeTab}`}>
                        <div className="tab-slider"></div>
                        <button
                            className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
                            onClick={() => setActiveTab('team')}
                        >
                            Projektový tým
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'partners' ? 'active' : ''}`}
                            onClick={() => setActiveTab('partners')}
                        >
                            Partneři projektu
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
                            onClick={() => setActiveTab('media')}
                        >
                            Napsali o nás
                        </button>
                    </div>
                </div>

                <div className="community-content" key={activeTab}>
                    {activeTab === 'team' && <Team />}
                    {activeTab === 'partners' && <Partners />}
                    {activeTab === 'media' && <Media />}
                </div>

            </div>
        </div>
    );
}