import React, { useState } from 'react';
import './Header.scss';

const Header = () => {

    const [showMobileMenu, setshowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setshowMobileMenu(!showMobileMenu);
    }

    return (
        <div className='mobile-menu-wrapper'>
            <div className={`mobile-menu only-mobile ${showMobileMenu ? 'overlay' : ''}`}>
                <div className='mobile-navbar'>
                    <div className='mobile-nav-item'>credit score check</div>
                    <div className='mobile-nav-item'>CRED pay</div>
                </div>
            </div>
            <div className='flex max-width header'>
                <img className='header-logo' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" />
                <div className='only-mobile mobile-menu-button-wrapper'>
                    <button onClick={toggleMobileMenu} className={`hamburger hamburger--elastic ${showMobileMenu ? 'is-active' : ''}`} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className='flex non-mobile'>
                    <div className='header-nav-item'>credit score check</div>
                    <div className='header-nav-item'>CRED pay</div>
                </div>
            </div>
        </div>
    )
}

export default Header