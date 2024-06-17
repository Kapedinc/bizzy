import React from 'react'
import Brands from '../components/brands/Brands';
import Header from '../components/common/header/Header';
import Experience from '../components/experience/Experience';
import FeelSpecial from '../components/feelSpecial/FeelSpecial';
import Main from '../components/main/Main';
import Mobile from '../components/mobileScroll/Mobile';
import ShowCase from '../components/productShowcase/ShowCase';
import Rating from '../components/ratings/Rating';
import Security from '../components/Security/Security';
import Trust from '../components/trust/Trust';
import WindowPeak from '../components/windowPeak/WindowPeak';


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