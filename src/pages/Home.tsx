import React from 'react'
import Brands from '../components/brands/Brands.js';
import Header from '../components/common/header/Header.js';
import Experience from '../components/experience/Experience.js';
import FeelSpecial from '../components/feelSpecial/FeelSpecial.js';
import Main from '../components/main/Main.js';
import Mobile from '../components/mobileScroll/Mobile.js';
import ShowCase from '../components/productShowcase/ShowCase.js';
import Rating from '../components/ratings/Rating.js';
import Security from '../components/Security/Security.js';
import Trust from '../components/trust/Trust.js';
import WindowPeak from '../components/windowPeak/WindowPeak.js';


const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <ShowCase />
      <FeelSpecial />
      <Brands />
      <Experience />
      <Mobile />
      <WindowPeak />
      <Security />
      <Trust />
      <Rating />
    </>
  )
}

export default Home;