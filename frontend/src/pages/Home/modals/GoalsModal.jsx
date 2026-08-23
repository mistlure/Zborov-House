// src/pages/Home/modals/GoalsModal.jsx
import './GoalsModal.css';
import React from 'react';

function GoalsModal({ isOpen, onClose }) {
    return (
        <div className={`modal-overlay ${isOpen ? 'visible' : ''}`} onClick={onClose}>

            <div className="modal-container" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close-btn" onClick={onClose} aria-label="Zavřít">
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-content-area editorial-layout">

                    <div className="modal-header-elegant">
                        <h2>Cíl projektu</h2>
                        <div className="header-divider"></div>
                        <p>Šest klíčových pilířů, na kterých stavíme budoucnost pamětního domu.</p>
                    </div>

                    <div className="goals-grid">
                        {[
                            { id: 'n1', title: 'Paměť a hrdinství', desc: 'Uchovává paměť na odvahu a oběť československých legionářů.' },
                            { id: 'n2', title: 'Živá historie', desc: 'Přibližuje historii současným generacím srozumitelnou a živou formou.' },
                            { id: 'n3', title: 'Mezinárodní vztahy', desc: 'Posiluje česko-slovensko-ukrajinské vztahy skrze společnou historii.' },
                            { id: 'n4', title: 'Kulturní centrum', desc: 'Slouží místní komunitě i návštěvníkům jako otevřené vzdělávací místo.' },
                            { id: 'n5', title: 'Aktivní život', desc: 'Propojuje pietu s aktivním životem – muzeum, besedy, workshopy.' },
                            { id: 'n6', title: 'Zázemí a ubytování', desc: 'Poskytuje prostor pro badatelské pobyty, studenty a ukrajinsko-české týmy.' },
                        ].map((goal) => (

                            <div key={goal.id} className="goal-card">
                                <h3>{goal.title}</h3>
                                <div className="goal-line-clean"></div>
                                <p>{goal.desc}</p>
                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoalsModal;