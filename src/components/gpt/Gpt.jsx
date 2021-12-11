import React from 'react';
import Feature from '../feature/Feature';
import './gpt.css';

const Gpt = () => {
  return (
    <div className='gpt-cont' id='gpt'>
      <div className='gpt-row-1'>
        <Feature
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </div>
      <div className='gpt-row-2'>
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt-row-3'>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
        />

        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />

        <Feature
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </div>
    </div>
  );
};

export default Gpt;
