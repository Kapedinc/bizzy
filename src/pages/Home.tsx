import React from 'react'
import Main from '../components/main/Main.js';
import Sections from '../components/Section.js';
import Footer from '../components/Footer.js';
import CTA from '../components/CTA.js';
import PageScroll from '../components/Features/PageScroll.js';
import Banner from '../components/Features/Banner.js';
import PaymentMethods from '../components/Features/PaymentMethods.js';
import TextScroll from '../components/text-scroll/TextScroll.js';



const Home = () => {
  return (
    <>
      <Main />
      <TextScroll />
      <Sections />
      <PaymentMethods />
      <Banner />
      <PageScroll />  
      <CTA />
      <Footer />
    </>
  )
}

export default Home;