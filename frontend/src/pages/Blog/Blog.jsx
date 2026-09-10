import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    useEffect(() => {
        fetch('https://localhost:7014/api/Posts')
            .then(response => response.json())
            .then(data => {
                const sorted = data.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
                setPosts(sorted);
            })
            .catch(error => console.error('Error fetching posts:', error))
            .finally(() => setLoading(false));
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleLimitChange = (num) => {
        setPostsPerPage(num);
        setCurrentPage(1);
    };

    if (loading) {
        return <div className="blog-loading">Načítání blogu...</div>;
    }

    return (
        <div className="blog-page">
            <div className="blog-container">

                <header className="blog-header">
                    <div className="blog-title-decorator">
                        <span></span>
                        <h1>Blog</h1>
                        <span></span>
                    </div>
                    <p className="blog-subtitle">Náš blog</p>
                </header>

                <div className="blog-controls">
                    <span className="posts-count-info">Celkem článků: {posts.length}</span>
                    <div className="limit-selector">
                        <span className="limit-label">Zobrazit:</span>
                        {[5, 10, 15].map(num => (
                            <button
                                key={num}
                                className={`limit-btn ${postsPerPage === num ? 'active' : ''}`}
                                onClick={() => handleLimitChange(num)}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="blog-list">
                    {currentPosts.map(post => (
                        <article key={post.id} className="blog-list-item">
                            <Link to={`/post/${post.id}`} className="blog-item-image">
                                <img
                                    src={post.bannerImageUrl || '/images/empty.jpg'}
                                    alt={post.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/images/empty.jpg';
                                    }}
                                />
                            </Link>
                            <div className="blog-item-content">
                                <span className="blog-item-date">
                                    {new Date(post.publishDate).toLocaleDateString('cs-CZ')}
                                </span>
                                <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                                <p className="blog-item-excerpt">
                                    {post.content.length > 150
                                        ? post.content.substring(0, 150) + '...'
                                        : post.content}
                                </p>
                                <Link to={`/post/${post.id}`} className="blog-read-more">Číst dále</Link>
                            </div>
                        </article>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="blog-pagination">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="blog-action-btn"
                        >
                            Předchozí
                        </button>

                        <span className="page-indicator">
                            Strana {currentPage} z {totalPages}
                        </span>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="blog-action-btn"
                        >
                            Další
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}