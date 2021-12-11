import React from 'react';
import Google from '../../assets/google.png';
import Dropbox from '../../assets/dropbox.png';
import Slack from '../../assets/slack.png';
import Shopify from '../../assets/shopify.png';
import Atlassian from '../../assets/atlassian.png';
import './Brand.css';

const Brands = () => {
  return (
    <div className='brands-container'>
      <img src={Google} alt='brand-img' />
      <img src={Dropbox} alt='brand-img' />
      <img src={Shopify} alt='brand-img' />
      <img src={Google} alt='brand-img' />
      <img src={Atlassian} alt='brand-img' />
    </div>
  );
};

export default Brands;
