// src/pages/Home/components/LatestPosts.jsx
import './LatestPosts.css';
import React from 'react';

function LatestPosts() {
    return (
        <section className="latest-posts-section">

            <div className="posts-container">

                <div className="posts-header">

                    <div className="title-decorator">
                        <span></span>
                        <h2>Aktuality z projektu</h2>
                        <span></span>
                    </div>

                    <p className="posts-subtitle">Sledujte nejnovější dění, kroky obnovy a příběhy z místa</p>
                </div>

                <div className="posts-grid">
                    {[
                        {
                            id: 1,
                            date: "12. června 2026",
                            title: "Pokračování prací na střeše pamětního domu",
                            image: "/images/past.jpg",
                            excerpt: "Díky podpoře našich dárců se podařilo zajistit další materiál..."
                        },
                        {
                            id: 2,
                            date: "28. května 2026",
                            title: "Setkání s partnery a představení vizí",
                            image: "/images/present.jpg",
                            excerpt: "Proběhlo důležité jednání o budoucím využití vzdělávacího centra..."
                        },
                        {
                            id: 3,
                            date: "15. dubna 2026",
                            title: "Historická stopa: Co se v roce 1917 událo",
                            image: "/images/cemetary.jpg",
                            excerpt: "Připomínáme si klíčové momenty bitvy československých legionářů..."
                        },
                        {
                            id: 4,
                            date: "02. dubna 2026",
                            title: "Studentské pobyty a plánované workshopy",
                            image: "/images/past.jpg",
                            excerpt: "Připravujeme zázemí pro první badatelské skupiny z Česka i Ukrajiny..."
                        },
                        {
                            id: 5,
                            date: "19. března 2026",
                            title: "Převzetí klíčů a první kroky k záchraně",
                            image: "/images/present.jpg",
                            excerpt: "Ohlédnutí za tím, jak to všechno začalo a v jakém stavu..."
                        }
                    ].map((post) => (
                        <a href="#" key={post.id} className="post-card">

                            <div className="post-image-wrap">
                                <img src={post.image} alt={post.title} />
                            </div>

                            <div className="post-content">
                                <span className="post-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </div>

                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default LatestPosts;