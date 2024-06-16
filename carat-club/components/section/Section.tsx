// src/components/Section.tsx
import React from 'react';

const Section: React.FC = () => {
  return (
    <div className="section ipl-section wf-section min-h-screen pt-20 pb-20 bg-[#0d0d0d] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/ipl-fold-bg.png')" }}>
      <div className="site-wrapper ipl-wrapper w-full max-w-screen-lg mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center flex-1">
        <div className="ipl-content-container flex flex-col items-start justify-end">
          <h3 className="section-heading ipl-heading text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b8074] via-[#b2aa9c] to-[#9b8074]">BIZ-GIFTS</h3>
          <div className="ipl-subheading text-2xl font-medium mb-12 text-white/60">Pay your vendors using Carat and earn 3 points per dollar.</div>
          <div className="button-container flex items-center">
            <a href="https://form.jotform.com/223585899560170" target="_blank" rel="noopener noreferrer" className="button outlined-btn w-button inline-block px-11 py-5 border-2 border-white text-white text-xl font-bold rounded-full">Join Carat</a>
            <a href="https://form.jotform.com/223585899560170" target="_blank" rel="noopener noreferrer" className="button ghost-button arrow-icon-btn w-button inline-block px-6 py-5 bg-transparent text-white text-xl font-bold ml-4" style={{ backgroundImage: "url('https://8000-kapedinc-bizzy-qgz5j28y0eo.ws-us114.gitpod.io/images/know-more-arrow.svg')", backgroundPosition: "100% 50%", backgroundSize: "auto", backgroundRepeat: "no-repeat" }}>Know more</a>
          </div>
        </div>
        <img src="/images/sailboatDarkFlatShadows-crop.webp" loading="lazy" alt="Sailboat" className="w-full max-w-full h-auto inline-block align-middle" />
        <div className="hidden sm:block" id="w-node-df7fed2d-a109-fcf1-e5dd-58927c9bc7cb-8409754c"></div>
      </div>
    </div>
  );
}

export default Section;
