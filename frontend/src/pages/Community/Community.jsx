import React, { useState } from 'react';
import './Community.css';
import Team from './components/Team/Team';

export default function Community() {
    const [activeTab, setActiveTab] = useState('team');

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

                <div className="community-tabs">
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
                    <button
                        className={`tab-btn ${activeTab === 'donors' ? 'active' : ''}`}
                        onClick={() => setActiveTab('donors')}
                    >
                        Seznam dárců
                    </button>
                </div>

                <div className="community-content">
                    {activeTab === 'team' && <Team />}
                    {activeTab === 'partners' && <div className="tab-placeholder">Sekce Partneři...</div>}
                    {activeTab === 'media' && <div className="tab-placeholder">Sekce Média...</div>}
                    {activeTab === 'donors' && <div className="tab-placeholder">Sekce Dárci...</div>}
                </div>

            </div>
        </div>
    );
}