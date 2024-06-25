import React from 'react'
import Main from '../components/main/Main.js';
import Sections from '../components/Section.js';
import Footer from '../components/Footer.js';
import CTA from '../components/CTA.js';
import PageScroll from '../components/Features/PageScroll.js';
import Banner from '../components/Features/Banner.js';
import PaymentMethods from '../components/Features/PaymentMethods.js';


const Home = () => {
  return (
    <>
      <Main />
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