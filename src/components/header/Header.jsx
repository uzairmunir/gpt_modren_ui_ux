import React from 'react';
import Ai from '../../assets/ai.png';
import People from '../../assets/people.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container' id='home'>
      <div className='header-row-left'>
        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className='header-input'>
          <input type='text' placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className='people-container'>
          <img src={People} alt='people-image' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header-row-right'>
        <img src={Ai} alt='header-image' />
      </div>
    </div>
  );
};

export default Header;
