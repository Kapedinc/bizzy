import React, { useState, useEffect } from 'react';
import Button from '../common/button/Button';
import './Rating.scss';

const Data = [
    {
        message: '"have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience."',
        madeBy: 'pushpalatha a'
    },
    {
        message: '"great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."',
        madeBy: 'sanjeev kataria'
    },
    {
        message: '"i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. thats really cool. thanks for all the awesomeness. keep inventing !!"',
        madeBy: 'jagadeeswar reddy singam'
    },
    {
        message: '"this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"',
        madeBy: 'ranesh bhattacharya'
    },
    {
        message: '"in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."',
        madeBy: 'parul mehra'
    }
];

const Rating = () => {

    const [currentData, setcurrentData] = useState(0);
    const [isChanged, setisChanged] = useState<any>(null);

    useEffect(() => {
        setTimeout(() => {
            setisChanged(isChanged === true ? null : true);
            if (currentData === 4) {
                setcurrentData(0);
            } else {
                setcurrentData(currentData + 1);
            }
        }, 2000);
    }, [currentData])

    function handleCurrent(i: number) {
        setcurrentData(i);
    }

    return (
        <div className='ratings-wrapper'>
            <div className='ratings-child-wrapper'>
                <div className='ratings-cta'>
                    <div className='ratings-cta-left'>
                        <div className='ratings-number'>
                            <p>4.8</p>
                            <p>app store</p>
                        </div>
                        <div className='ratings-star'>
                            <img className='ratings-star-img' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" />
                        </div>
                        <div className='ratings-btn'>
                            <Button prefix={<img className='ratings-store-img' src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" />} buttonText='Download the app' />
                        </div>
                    </div>
                    <div className='ratings-cta-right'>
                        <div className='ratings-number'>
                            <p>4.7</p>
                            <p>play store</p>
                        </div>
                        <div className='ratings-star'>
                            <img className='ratings-star-img' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" />
                        </div>
                        <div className='ratings-btn'>
                            <Button prefix={<img className='ratings-store-img' src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" />} buttonText='Download the app' />
                        </div>
                    </div>
                </div>
                <div className='ratings-review'>
                    <div className={`${isChanged ? 'slide-in-right' : ''} ratings-review-wrapper`}>
                        <p>{Data[currentData].message}</p>
                        <p>{Data[currentData].madeBy}</p>
                    </div>
                </div>
                <div className='ratings-change'>
                    {Data.map((val, i) => (
                        <p onClick={() => handleCurrent(i)} className={`${currentData == i ? 'ratings-select' : '' } rating-box`} key={i}></p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rating;