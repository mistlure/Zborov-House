import React from 'react';
import './Milestones.css';

export default function Milestones() {
    const milestonesData = [
        { date: "Listopad 2022", text: "Vznik první vize projektu Pamětní dům Zborov v rámci humanitární výpravy Sokolské župy Budečské", subtext: "(účast na výpravě: Peter Szenasy, Robert a Jiří Hoffman, Bart van der Hoeven, Milan Pilmajer)" },
        { date: "Léto 2023", text: "Jednání s vlastníkem nemovitosti o možnosti odkupu domu", subtext: "(komunikace vlastníka nemovitosti se vzdělavatelkou Sokola Malyn Natálií Parfinenko)" },
        { date: "Podzim 2023", text: "Příprava projektu a zahájení sbírky Sokolskou župou Budečskou na pořízení domu; sbírka byla úspěšně uzavřena v roce 2024" },
        { date: "Zima 2023", text: "Zahájení příprav na založení neziskové organizace, která bude aktivně vyhledávat a spravovat významné nemovité památky českého dědictví na Ukrajině" },
        { date: "Jaro 2024", text: "Vznik neziskové organizace Asociace pro zachování a obnovu českého dědictví na Ukrajině, kterou založila Česká národní rada Ukrajiny společně s obnovenou sokolskou jednotou Sokol Malyn; předsedkyní nové Asociace se stává Ludmila Čiževská" },
        { date: "Září 2024", text: "Převod prostředků ze sbírky na Ukrajinu a pořízení domu prostřednictvím ukrajinské neziskové společnosti" },
        { date: "Říjen 2024", text: "Převzetí klíčů, první návštěva domu a pracovní brigáda s krajany ze Slovenska" },
        { date: "Duben 2025", text: "Druhá návštěva domu s účastí sokolů a legionářů; dobrovolnická brigáda zaměřená na úklid a základní opravy, video a fotodokumentace projektu Jakubem Motejzíkem" },
        { date: "Léto 2025", text: "Podpis Memoranda o spolupráci s Československou obcí legionářskou" },
        { date: "Září 2025", text: "Zahájení přípravné etapy rekonstrukce ve spolupráci se studenty Gymnázia Jana Nerudy" },
        { date: "Říjen 2025", text: "Sestavení a zveřejnění projektového týmu a spuštění webových stránek projektu" },
        { date: "Listopad 2025", text: "Rozpracování koncepce projektu (mise, cíle, rozpočet, partneři)" },
        { date: "Listopad–prosinec 2025", text: "Místní geodetické zaměření pozemku" },
        { date: "Prosinec 2025", text: "Zadání pro architektonickou studii a návrh budoucího využití objektu" },
        { date: "Leden 2026", text: "Oslovení architektonických studií" },
        { date: "Duben–květen 2026", text: "VII. sokolská humanitární cesta na Ukrajinu, návštěva Zborova, pamětního domu a setkání se starostou města Zborov" },
        { date: "Červenec 2026", text: "Výběr architekta a zadání architektonické koncepce" },
        { date: "Srpen 2026", text: "Prezentace projektu v Senátu Parlamentu ČR" }
    ];

    const parsedData = milestonesData.map((item, index, arr) => {
        const year = item.date.match(/\d{4}/)?.[0] || '';
        const prevYear = index > 0 ? arr[index - 1].date.match(/\d{4}/)?.[0] : null;
        const isNewYear = year !== prevYear;
        return { ...item, year, isNewYear };
    });

    return (
        <div className="milestones-page">
            <div className="milestones-container">
                <header className="milestones-header">
                    <div className="milestones-title-decorator">
                        <span></span>
                        <h1>Hlavní milníky projektu</h1>
                        <span></span>
                    </div>
                    <p className="milestones-subtitle">Vývoj a vize projektu v časové ose</p>
                </header>
            </div>

            <div className="timeline-horizontal-wrapper">
                <div className="timeline-track">
                    <div className="timeline-line"></div>

                    {parsedData.map((item, index) => (
                        <div key={index} className="timeline-point">

                            <div className="point-dot-wrap">
                                <div className="point-dot"></div>

                                <div className="point-tooltip">
                                    <span className="tooltip-date">{item.date}</span>
                                    <h3 className="tooltip-text">{item.text}</h3>
                                    {item.subtext && (
                                        <p className="tooltip-subtext">{item.subtext}</p>
                                    )}
                                </div>
                            </div>

                            {item.isNewYear && (
                                <div className="year-marker">
                                    <span>{item.year}</span>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}