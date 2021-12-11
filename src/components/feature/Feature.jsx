import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='feature-container'>
      <div className='feature-title'>
        <p></p>
        <h1>{title}</h1>
      </div>
      <div className='feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
