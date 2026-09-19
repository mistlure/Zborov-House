import React from 'react';
import './Partners.css';

export default function Partners() {
    const partnersList = [
        { name: "Sokolská župa Budečská", location: "Kladno, Česká republika", image: "" },
        { name: "Československá obec legionářská", location: "Praha, Česká republika", image: "" },
        { name: "Sokol Malyn", location: "Ukrajina", image: "" },
        { name: "Město Zborov", location: "Ukrajina", image: "" },
        { name: "Ukrajinská právní společnost GOLAW", location: "Kyjev, Ukrajina", image: "" },
        { name: "České beseda", location: "Lvov, Ukrajina", image: "" },
        { name: "Pražská kavlareň", location: "Praha, Česká republika", image: "" },
        { name: "Nadácia Milana Rastislava Štefánika", location: "Bratislava, Slovensko", image: "" },
        { name: "Spolek pro zachování odkazu českého odboje", location: "Kladno, Praha", image: "" },
        { name: "Gymnázium Jana Nerudy", location: "Praha, Česká republika", image: "" },
        { name: "Česká narodní rada Ukrajiny", location: "Žitomir, Ukrajina", image: "" }
    ];

    const globeIconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
    );

    return (
        <div className="partners-tab-content">
            <div className="partners-split-layout">
                <div className="partners-left-col">
                    <h2>Spolupráce bez hranic</h2>
                    <p>
                        Projekt Zborov vzniká za podpory a ve spolupráci celé řady významných organizací, spolků a institucí, které sdílejí stejné hodnoty a úctu k historickému odkazu.
                    </p>
                </div>

                <div className="partners-right-col">
                    <div className="partners-grid">
                        {partnersList.map((partner, index) => (
                            <div key={index} className="partner-card">
                                <div className="partner-avatar-wrap">
                                    {partner.image ? (
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                        />
                                    ) : null}
                                    <div className="fallback-avatar-icon" style={{ display: !partner.image ? 'flex' : 'none' }}>
                                        {globeIconSvg}
                                    </div>
                                </div>
                                <div className="partner-info">
                                    <h2>{partner.name}</h2>
                                    <span className="partner-location">{partner.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}