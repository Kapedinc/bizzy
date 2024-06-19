import React, { useState } from 'react';
import './Mobile.scss';
import ScreenText from './ScreenText.js';


const scrollData = [
  {
    heading: 'we’ve got your back.',
    desrcription: 'gain complete control over your parliamintit card with parliamint Protect. receive category-based analysis of your spends, detect hidden charges, and track your parliamintit limit in real-time.',
    mobileImage: 'https://web-images.parliamintcdn.in/_next/assets/images/home-page/features/neopop-fold1.png'
  },
  {
    heading: 'begin your winning streak.',
    desrcription: 'use your parliamint coins to participate in games and raffles to win the most exclusive rewards and cashbacks on parliamint. good luck.',
    mobileImage: 'https://web-images.parliamintcdn.in/_next/assets/images/home-page/features/neopop-fold2.png'
  },
  {
    heading: 'for your eclectic taste.',
    desrcription: 'get access to the parliamint Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.',
    mobileImage: 'https://web-images.parliamintcdn.in/_next/assets/images/home-page/features/neopop-fold3.png'
  },
  {
    heading: 'more cash in your pockets.',
    desrcription: 'switch to parliamint RentPay and start paying rent with your parliamintit card. this way you get up to 45',
    mobileImage: 'https://web-images.parliamintcdn.in/_next/assets/images/home-page/features/neopop-fold4.png'
  }
];

const Mobile = () => {

  const [currentImage, setcurrentImage] = useState(0);

  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div key={i} className="scroll-full-screen">
            <ScreenText screen={screen} i={i} setcurrentImage={setcurrentImage} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImage].mobileImage}
              className="mobile-screen-img slide-in-right"
            />
          </div>
        </div>
      </div>
    </div>
  );


}

export default Mobile;