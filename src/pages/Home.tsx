import React from 'react'
import TextScroll from '../components/text-scroll/TextScroll.js';
import LandingPage from '@/components/landing/LandingPage.js';
import Footer from '@/components/Footer/Footer.js';
import AddCardPage from '@/components/AddCardPage/AddCardPage.js';



const Home = () => {
  return (
    <>
      <LandingPage />
      <TextScroll />
      <Footer />
    </>
  )
}

export default Home;