// src/pages/Home/components/Quote.jsx
import './Quote.css';
import React from 'react';

function Quote({ onOpenModal }) {
    return (
        <section className="history-section">
            <div className="history-container">
                <div className="history-text-col">

                    <div className="history-accent-line"></div>

                    <h3 className="history-subtitle">Zborov 1917 — Současnost</h3>

                    <p className="history-lead">
                        Zakládat neziskovou organizaci a kupovat dům na Ukrajině uprostřed
                        válečného konfliktu během všeobecné mobilizace – jak bláznivý nápad!
                    </p>

                    <p className="history-body">
                        Přesto se nám podařilo uskutečnit něco, co na první pohled vypadalo jako nedosažitelný cíl.
                        Dnes držíme klíče od nemovitosti vedle zborovské bratrské mohyly pevně v rukou.
                        Tento dům se stane symbolem naší úcty k československým hrdinům i odhodlání všech,
                        kteří věřili v naši společnou vizi.
                    </p>



                    {/* Button */}
                    <button className="history-action-btn" onClick={onOpenModal}>
                        Cíl projektu
                    </button>
                </div>



                <div className="history-image-col">
                    <img src="/images/cemetary.jpg" alt="Zborovská bratrská mohyla" className="history-image" />
                </div>

            </div>
        </section>
    );
}

export default Quote;