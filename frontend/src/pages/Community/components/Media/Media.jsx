import React from 'react';
import './Media.css';

export default function Media() {
    const articles = [
        {
            url: "https://www.krajan.sk/projekt.php?id=21812"
        },
        {
            url: "https://www.krajan.sk/projekt.php?id=86339"
        }
    ];

    return (
        <div className="media-tab-content">
            <div className="media-split-layout">

                <div className="media-left-col">
                    <h2>Napsali o nás</h2>
                    <p>
                        Sledujte zmínky o našem projektu v tisku a médiích. Přečtěte si, jak náš příběh a snaha o obnovu památného místa rezonují ve společnosti.
                    </p>
                    <div className="media-photo-wrap">
                        <img
                            src="/images/empty.jpg"
                            alt="Projekt Zborov v médiích"
                        />
                    </div>
                </div>

                <div className="media-right-col">
                    <div className="media-links-list">
                        {articles.map((article, index) => (
                            <a
                                key={index}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="media-simple-link"
                            >
                                <span className="media-link-url">{article.url}</span>
                                <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}