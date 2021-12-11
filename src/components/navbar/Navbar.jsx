import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
      <img src={logo} alt='nav-logo' />
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#gpt'>What Is GTP3</a>
        </li>
        <li>
          <a href='#openai'>Open AI</a>
        </li>
        <li>
          <a href='#casestudy'>Case Studies</a>
        </li>
        <li>
          <a href='#library'>Library</a>
        </li>
      </ul>
      <div className='btn-div'>
        <h3>SignIn</h3>
        <button>SignUp</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu ? (
          <i className='fas fa-times fa-2x' onClick={handleToggle}></i>
        ) : (
          <i className='fas fa-bars fa-2x' onClick={handleToggle}></i>
        )}

        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container-links'>
              <p>
                <a href='#home'>Home</a>
              </p>
              <p>
                <a href='#wgpt3'>What is GPT3?</a>
              </p>
              <p>
                <a href='#possibility'>Open AI</a>
              </p>
              <p>
                <a href='#features'>Case Studies</a>
              </p>
              <p>
                <a href='#blog'>Library</a>
              </p>
            </div>
            <div className='menu-btn'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
