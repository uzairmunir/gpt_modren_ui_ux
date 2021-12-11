import React from 'react';
import './Article.css';

const Article = ({ img, date, text }) => {
  return (
    <div className='article-cont'>
      <div className='article-img-cont'>
        <img src={img} alt='article-img' />
      </div>
      <div className='article-info-cont'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
