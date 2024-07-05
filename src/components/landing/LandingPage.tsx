import React from 'react';
import './LandingPage.css';
import logo from '../../assets/logo.svg';
import sliderImage1 from '../../assets/Simplification.png';
import sliderImage2 from '../../assets/finer.png';
import sliderImage3 from '../../assets/security.png';
import AnimatingCreditCard from '../AnimatingCreditCard/AnimatingCreditCard';


class LandingPage extends React.Component<{}, {}> {
    render() {
        return (
            <div id="landing-page">
                <div id="container-one">
                    <div id="nav">
                        <img src={logo} alt="logo" />
                        <div id="auth-btn-grp">
                            <a href="https://share.hsforms.com/1bqS_DBRkS_KFskxocStoYgoyz25" className="auth-btn">Log In</a>
                            <a href="https://share.hsforms.com/1bqS_DBRkS_KFskxocStoYgoyz25" className="auth-btn">Sign Up</a>
                        </div>
                    </div>
                    <div id="c-o-left" data-aos="fade-right">
                        <p id="main-msg">Manage your invoice payments <span id="gradient-text">more</span> effectively</p>
                        <p id="tag-line">The membership that rewards responsible business owners</p>
                        <a href="https://share.hsforms.com/1bqS_DBRkS_KFskxocStoYgoyz25" id="download-btn">Download Parliamint</a>
                    </div>
                    <div id="c-o-right" data-aos="fade-left">
                        <AnimatingCreditCard />
                    </div>
                </div>

                <div id="container-two">
                    <div id="left-bar"><div></div></div>
                    <div id="feature-container">
                        <div id="feature-container-left">
                            <img id="slider-image1" src={sliderImage1} alt="sliderimage-1" />
                            <img id="slider-image2" src={sliderImage2} alt="sliderimage-2" />
                            <img id="slider-image3" src={sliderImage3} alt="sliderimage-3" />
                        </div>
                        <div id="feature-container-right">
                            <div id="desc-slider1">
                                <p className="desc-header desc-header-1">we take your money matters seriously.</p>
                                <p className="desc-text desc-text-1"><span>so that you don’t have to.</span>
                                    never miss a due date with reminders to help you pay your invoices on time,
                                    instant settlements mean you never wait for your payments to go through
                                    and statement analysis lets you know where your money goes.</p>
                            </div>
                            <div id="desc-slider2">
                                <p className="desc-header desc-header-2">feel special more often.</p>
                                <p className="desc-text desc-text-2"><span>exclusive rewards for paying your invoices.</span>
                                    every time you pay your invoice on Parliamint, you receive Parliamint points. you
                                    can use these to win exclusive rewards or get special access to curated products
                                    and experiences. on Parliamint, good begets good.</p>
                            </div>
                            <div id="desc-slider3">
                                <p className="desc-header desc-header-3">security first.and second.</p>
                                <p className="desc-text desc-text-3"><span>what’s yours remains only yours.</span>
                                    Parliamint ensures that all your personal data and transactions are encrypted, and
                                    secured so what’s yours remains only yours. there’s no room for mistakes because
                                    we didn’t leave any.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
