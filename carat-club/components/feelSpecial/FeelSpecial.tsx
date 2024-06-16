import React from "react";
import "./FeelSpecial.scss";
import "./CommonClass.scss";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
      <video autoPlay muted loop playsInline className="background-video">
      <source src="/videos/lux.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading">
              feel special more often.
            </div>
            <div className="photo-section-subheading">
              exclusive rewards for paying your bills
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
