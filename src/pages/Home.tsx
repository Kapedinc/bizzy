import React from 'react'
import Main from '../components/main/Main.js';
import Sections from '../components/Section.js';
import Footer from '../components/Footer.js';
import CTA from '../components/CTA.js';
import Timeline from '../components/Timeline.js';
import PageScroll from '../components/Features/PageScroll.js';
import Banner from '../components/Features/Banner.js';


const Home = () => {
  return (
    <>
      <Main />
      <Sections />
      <Banner />
      <PageScroll />  
      <CTA />
      <Footer />
    </>
  )
}

export default Home;