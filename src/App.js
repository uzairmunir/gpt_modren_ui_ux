import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Header from './components/header/Header';
import Brands from './components/brands/Brands';
import Gpt from './components/gpt/Gpt';
import CaseStudy from './components/casestudy/CaseStudy';
import Possibility from './components/possiblity/Possibility';
import Cta from './components/cta/Cta';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <Gpt />
      <CaseStudy />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
