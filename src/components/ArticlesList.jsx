import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 
import PageHeader from './PageHeader';

const ArticlesList = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div>
      <PageHeader title="Статьи" subtitle="International IT Leaders Award" customBreadcrumb="Статьи" />
      <div className="articles-container">
        {articlesData.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3 className="article-category">{article.category}</h3>
              <h2 className="article-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              <p className="article-author">{article.author}</p>
              <p className="article-date">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
