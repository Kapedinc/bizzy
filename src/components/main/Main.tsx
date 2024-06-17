// src/components/Main.tsx
import React from 'react';
import Button from '../common/button/Button.js';
import SplineScene from '../spline/SplineScene.js';
import PepperdineBadge from '../trustBadges/PepperdineBadge.js';

const Main = () => {
  const sceneUrl = 'https://prod.spline.design/Ibxvmkm4KiUhkEdX/scene.splinecode';

  return (
    <div className='main-section-wrapper flex justify-center items-center h-screen relative'>
      <div className='spline-scene-wrapper absolute top-0 left-0 w-full h-full z-[-2]'>
        <SplineScene sceneUrl={sceneUrl} />
      </div>
      <div className='main-content relative z-10 text-center'>
        <div className='flex flex-col items-center'>
          <PepperdineBadge />
        <div className='main-heading text-8xl font-bold leading-tight mb-8 md:text-8xl lg:text-8xl'>
          rewards for paying your business expenses.
        </div>
          <div className='main-subheading text-4xl font-bold leading-7 text-gray-600 mb-12 md:text-4xl lg:text-4xl'>
            treat your business to the finer side of being responsible
          </div>
          <Button buttonText='Download CRED' />
        </div>
      </div>
    </div>
  );
};

export default Main;
