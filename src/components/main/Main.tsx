// src/components/Main.tsx
import React from 'react';
import PepperdineBadge from '../trustBadges/PepperdineBadge.js';
import './Main.scss'; // Ensure this file contains your CSS styles
import NeoPopTiltedButton from '../shimmerButton/TiltedButton.js';
import InfiniteMovingCardsDemo from '../InfiniteMovingCardsDemo.js';

const Main = () => { 
  return (
    <><div className='main-section-wrapper'>
      <div className='spline-scene-wrapper'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/card_video_loop.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className='main-content'>
        <div className='flex flex-col items-center'>
          <div className='main-heading'>
            rewards for paying your business expenses.
          </div>
          <div className='main-subheading'>
            treat your business to the finer side of being responsible
          </div>
          <NeoPopTiltedButton
            text={'download parliamint'}
            url={'https://share.hsforms.com/1bqS_DBRkS_KFskxocStoYgoyz25'}
            backgroundColor={'black'}
            textColor={'white'} />
        </div>
      </div>
    </div><InfiniteMovingCardsDemo /></>
  );
};

export default Main;
