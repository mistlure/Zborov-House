import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // SPA
import './LatestPosts.css';

export default function LatestPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7014/api/Posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <section className="latest-posts-section">
            <div className="posts-container">
                <div className="posts-header">
                    <div className="title-decorator">
                        <span></span>
                        <h2>Aktuality z projektu</h2>
                        <span></span>
                    </div>
                    <p className="posts-subtitle">
                        Sledujte nejnovější dění, kroky obnovy a příběhy z místa
                    </p>
                </div>

                <div className="posts-grid">
                    {posts.map((post) => (
                        <Link key = { post.id } to = {`/post/${post.id}`} className="post-card">

                            <div className="post-image-wrap">
                                <img
                                    src={post.bannerImageUrl || '/images/empty.jpg'}
                                    alt={post.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/images/empty.jpg';
                                    }}
                                />
                            </div>

                    <div className="post-content">
                        <span className="post-date">
                            {new Date(post.publishDate).toLocaleDateString('cs-CZ')}
                        </span>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>

                </Link>
                    ))}

                    <div className="latest-posts-action">
                        <Link to="/blog" className="strict-btn">
                            Všechny články
                        </Link>
                    </div>
            </div>
            </div>
        </section>
    );
}