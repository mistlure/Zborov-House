import React from 'react';
import './Team.css';

export default function Team() {
    const teamMembers = [
        {
            role: "projektový manažer projektu Zborov",
            name: "Peter Szenasy",
            org: "Česká obec sokolská",
            image: ""
        },
        {
            role: "historička",
            name: "Kateřina Pohlová",
            org: "Česká obec sokolská",
            image: ""
        },
        {
            role: "student",
            name: "Cyril Fialka",
            org: "Gymnázium Jana Nerudy",
            image: ""
        },
        {
            role: "student",
            name: "Tomáš Lukeš",
            org: "Gymnázium Jana Nerudy",
            image: ""
        },
        {
            role: "členka týmu a hlavní kontaktní osoba na Ukrajině",
            name: "Ludmila Čiževská",
            org: "předsedkyně Česká národní rada Ukrajiny",
            image: ""
        },
        {
            role: "student",
            name: "Ondřej Dospiva",
            org: "Gymnázium Jana Nerudy",
            image: ""
        },
        {
            role: "člen týmu a účastník výprav na Ukrajinu",
            name: "Jakub Motejzík",
            org: "režisér ČT",
            image: ""
        },
        {
            role: "člen týmu",
            name: "Jiří Charfreitag",
            org: "Československá obec legionářská",
            image: ""
        },
        {
            role: "člen týmu",
            name: "Tobiáš Smolík",
            org: "Skautský institut",
            image: ""
        }
    ];

    const userIconSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
            <path d="M4 20c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6"></path>
        </svg>
    );

    return (
        <div className="team-page">
            <div className="team-container">
                <div className="team-split-layout">

                    <div className="team-left-col">
                        <div className="team-title-decorator">
                            <span></span>
                            <h1>Projektový tým</h1>
                            <span></span>
                        </div>
                        <h2>Společné dílo bez hranic a funkcí</h2>
                        <p>
                            Za vznikem a obnovou památného místa v Zborově nestojí jednotlivci s formálními funkcemi. Jde o rovnocenné společenství lidí, spolků a institucí, kteří spojili své síly napříč generacemi.
                        </p>
                    </div>

                    <div className="team-right-col">
                        <div className="team-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-card">
                                    <div className="team-avatar-wrap">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div
                                            className="fallback-avatar-icon"
                                            style={{ display: !member.image ? 'flex' : 'none' }}
                                        >
                                            {userIconSvg}
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <span className="team-role">{member.role}</span>
                                        <h2>{member.name}</h2>
                                        <span className="team-org">{member.org}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}