import React from 'react';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import Article from '../article/Article';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog-cont' id='library'>
      <h1>A lot is happening, We are blogging about it.</h1>

      <div className='blog-img-cont'>
        <div className='blog-img-row1'>
          <Article
            img={blog01}
            date='Nov 26, 2021'
            text='GPT-3 and Open AI is the future. Let us exlore how it is?'
          />
        </div>
        <div className='blog-img-row2'>
          <Article
            img={blog02}
            date='Nov 26, 2021'
            text='GPT-3 and Open AI is the future. Let us exlore how it is?'
          />
          <Article
            img={blog03}
            date='Nov 26, 2021'
            text='GPT-3 and Open AI is the future. Let us exlore how it is?'
          />
          <Article
            img={blog04}
            date='Nov 26, 2021'
            text='GPT-3 and Open AI is the future. Let us exlore how it is?'
          />
          <Article
            img={blog05}
            date='Nov 26, 2021'
            text='GPT-3 and Open AI is the future. Let us exlore how it is?'
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
