import React, { useState, useEffect } from 'react';
import './MediaPage.css';
import axios from 'axios';

const MediaPage = () => {
  const [articles, setArticles] = useState([]);
  const [expandedArticle, setExpandedArticle] = useState(null); // To track which article is expanded

  useEffect(() => {
    // Fetch media articles from the API (corrected API endpoint)
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://yhai-web.vercel.app/api/media'); // Corrected endpoint
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  const handleReadMore = (article) => {
    setExpandedArticle(article);
  };

  const handleCollapse = () => {
    setExpandedArticle(null); // Collapse the expanded article
  };

  return (
    <div className="media-page">
      <h2>Latest News</h2>
      <div className="news-list">
        {articles.map((article) => (
          <div key={article._id} className="news-item">
            <img 
              src={article.image} 
              alt={article.title} 
              className={`news-image ${expandedArticle?._id === article._id ? 'expanded' : ''}`} 
            />
            <div className="news-details">
              <h3>{article.title}</h3>
              <p>{expandedArticle?._id === article._id ? article.content : article.summary}</p>
              {expandedArticle?._id === article._id ? (
                <button onClick={handleCollapse} className="collapse-btn">
                  Collapse
                </button>
              ) : (
                <button onClick={() => handleReadMore(article)} className="read-more-btn">
                  Read More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
