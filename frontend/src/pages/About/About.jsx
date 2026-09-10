import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <header className="about-header">
                    <div className="about-title-decorator">
                        <span></span>
                        <h1>O projektu</h1>
                        <span></span>
                    </div>
                </header>

                <div className="about-text-content">
                    <p className="about-lead">
                        Na místě, kde v roce 1917 proběhla bitva československých legionářů u Zborova, vzniká nový projekt, který připomíná odvahu hrdinů bojujících za svobodu národa, vznik vlastního státu a právo rozhodovat o své budoucnosti. Sokolové, zástupci legionářů, krajané z Ukrajiny pod vedením České národní rady Ukrajiny i další podporovatelé se rozhodli tuto historickou lokalitu obnovit jako důstojný prostor paměti, kde si lidé mohou připomenout odvahu a oběť našich předků, kteří bojovali za svobodu, a zároveň ji vnímat jako živou součást společné historie.
                    </p>
                    <p>
                        Pamětní dům bude fungovat jako menší interaktivní muzeum, kde návštěvníci najdou expozici o bitvě u Zborova, legionářích, sokolech a dalších osobnostech spojených s českou a slovenskou historií na Ukrajině. Využití moderních technologií umožní digitální přístup k archivním dokumentům a sbírkám, takže historie bude dostupná v několika jazycích a kdykoli během návštěvy.
                    </p>
                </div>

                <div className="about-gallery">
                    <div className="about-image-wrapper img-left">
                        {/* ZDE */}
                        <img src="/images/empty.jpg" alt="Projekt Zborov 1" />
                    </div>
                    <div className="about-image-wrapper img-right">
                        {/* ZDE */}
                        <img src="/images/empty.jpg" alt="Projekt Zborov 2" />
                    </div>
                </div>

                <div className="about-text-content">
                    <p>
                        Vedle muzea bude dům nabízet možnost ubytování, hosté si zde mohou strávit noc, odpočinout si a prožít chvíle zamyšlení nad minulostí i přítomností. Součástí projektu je také odpočinková zóna na pozemku o rozloze přes 1 000 m² s možností připojení karavanu nebo místa pro batůžkáře. Cílem projektu je propojit pietní význam místa s praktickým využitím, které umožní návštěvníkům poznat historii, uctít památku padlých a zároveň si odpočinout. Pamětní dům bude energeticky a ekonomicky udržitelný, s možností vzdálené správy a rezervace online.
                    </p>
                </div>

                <section className="about-conclusion">
                    <p>
                        Projekt domu v Zborově je symbolem přátelství a spolupráce mezi Čechy, Slováky a Ukrajinci. Dům připomíná odvahu a oběť našich předků a zároveň podporuje přenos historických zkušeností a hodnot mezi generacemi.
                    </p>
                </section>

            </div>
        </div>
    );
}