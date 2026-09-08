//import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
//import './PostPage.css';

//export default function PostPage() {
//    const { id } = useParams();
//    const [post, setPost] = useState(null);

//    useEffect(() => {
//        fetch(`https://localhost:7014/api/Posts/${id}`)
//            .then(response => response.json())
//            .then(data => setPost(data))
//            .catch(error => console.error('Post loading error:', error));
//    }, [id]);

//    if (!post) {
//        return (
//            <div className="post-loading">
//                <h2>Načítání...</h2>
//            </div>
//        );
//    }

//    return (
//        <article className="single-post-page">
//            {post.bannerImageUrl && (
//                <div className="post-header-image">
//                    <img src={post.bannerImageUrl} alt={post.title} />
//                </div>
//            )}

//            <div className="post-content-container">
//                <span className="post-publish-date">
//                    {new Date(post.publishDate).toLocaleDateString('cs-CZ')}
//                </span>
//                <h1>{post.title}</h1>
//                <div className="post-full-text">
//                    <p>{post.content}</p>
//                </div>
//            </div>

//            {post.galleryImages && post.galleryImages.length > 0 && (
//                <div className="post-gallery-section">
//                    <div className="gallery-grid">
//                        {post.galleryImages.map((imgUrl, index) => (
//                            <div key={index} className="gallery-item">
//                                <img src={imgUrl} alt={`Fotografie k článku ${index + 1}`} />
//                            </div>
//                        ))}
//                    </div>
//                </div>
//            )}
//        </article>
//    );
//}


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostPage.css';

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        fetch(`https://localhost:7014/api/Posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            })
            .catch(error => console.error('Post loading error:', error));
    }, [id]);

    if (!post) {
        return (
            <div className="post-loading">
                <h2>Načítání...</h2>
            </div>
        );
    }

    const allImages = [];
    if (post.bannerImageUrl && post.bannerImageUrl.trim() !== '') {
        allImages.push(post.bannerImageUrl);
    }

    if (post.galleryImages && post.galleryImages.length > 0) {
        const validGallery = post.galleryImages.filter(img => img && img.trim() !== '');
        allImages.push(...validGallery);
    }



    const currentMainImage = allImages.length > 0 ? allImages[activeImageIndex] : null;

    const handleNext = () => {
        setActiveImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const handlePrev = () => {
        setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <article className="single-post-page">
            <div className="post-content-container">
                <span className="post-publish-date">
                    {new Date(post.publishDate).toLocaleDateString('cs-CZ')}
                </span>
                <h1>{post.title}</h1>
                <div className="post-full-text">
                    <p>{post.content}</p>
                </div>
            </div>

            {allImages.length > 0 && (
                <div className="steam-gallery-container">

                    <div className="steam-main-screen">
                        <img src={currentMainImage} alt={post.title} />
                        {allImages.length > 1 && (
                            <>
                                <button className="steam-arrow steam-prev" onClick={handlePrev}>❮</button>
                                <button className="steam-arrow steam-next" onClick={handleNext}>❯</button>
                            </>
                        )}
                    </div>

                    {allImages.length > 1 && (
                        <div className="steam-strip">
                            {allImages.map((imgUrl, index) => (
                                <div
                                    key={index}
                                    className={`steam-thumb ${index === activeImageIndex ? 'active' : ''}`}
                                    onClick={() => setActiveImageIndex(index)}
                                >
                                    <img src={imgUrl} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </article>
    );
}