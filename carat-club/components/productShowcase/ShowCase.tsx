"use client"
import React, { useState, useRef, useEffect } from 'react';
import './ShowCase.scss';
import './Animation.scss'

const ShowCase = () => {

  const [showAnimation, setshowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e: any) => {
    if (e[0].isIntersecting) {
      setshowAnimation(true);
    }
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, []);


  return (
    <div ref={ref} className={`product-showcase ${showAnimation ? 'scale-in-bottom' : ''}`}>
      {showAnimation && <div className='showcase-wrapper'>
        <img className='showcase-ui showcase-mockup-1' src="https://vashong.github.io/widgets/images/mockups/rewards.svg" />
        <img className='showcase-ui showcase-mockup-2' src="https://vashong.github.io/widgets/images/mockups/home.svg" />
        <img className='showcase-ui showcase-mockup-3' src="https://vashong.github.io/widgets/images/mockups/Pay.svg" />
        <img className='showcase-ui showcase-mockup-4' src="https://vashong.github.io/widgets/images/mockups/invoices.svg" />
        <img className='showcase-ui showcase-mockup-5' src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png" />
      </div>}
    </div>
  )
}

export default ShowCase;