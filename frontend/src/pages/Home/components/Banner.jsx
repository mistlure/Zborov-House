// src/pages/Home/components/Banner.jsx
import './Banner.css';
import React, { useState, useRef } from 'react';

function Banner() {
    const [splitPos, setSplitPos] = useState(50);
    const heroRef = useRef(null);

    const handleHeroMouseMove = (e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSplitPos(percentage);
    };

    return (
        <section
            className="hero-split"
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={() => setSplitPos(50)}
        >
            <div className="split-layer present">
                <div className="layer-content right-align">
                    <h2>Současnost</h2>
                    <p>Obnova a naděje</p>
                </div>
            </div>



            <div
                className="split-layer past"
                style={{ clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)` }}
            >
                <div className="layer-content left-align">
                    <h2>Minulost</h2>
                    <p>Odvaha a oběť (1917)</p>
                </div>
            </div>



            <div className="split-handle" style={{ left: `${splitPos}%` }}>
                <div className="handle-line"></div>
            </div>



            <div className="hero-center-title">
                <h1>Pamětní dům<br />Zborov</h1>
            </div>



            <div className="hero-fade-bottom"></div>
        </section>
    );
}

export default Banner;