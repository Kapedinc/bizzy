import React, { useState, useRef, useEffect } from "react";

interface Props {
    i: number;
    screen: any;
    setcurrentImage: React.Dispatch<React.SetStateAction<number>>;
}

const ScreenText: React.FC<Props> = ({
    i,
    screen,
    setcurrentImage
}) => {


    const [showAnimation, setshowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAnimation = (e: any) => {
        if (e[0].isIntersecting) {
            setshowAnimation(!showAnimation);
            setcurrentImage(i);
        }
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };
    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);

    return (
        <div className={`screen-text ${showAnimation ? "text-visible" : ""}`} ref={ref}>
            <div className="screen-heading">{screen.heading}</div>
            <div className="mobile-mockup-wrapper only-mobile">
                <div className="mobile-mockup ">
                    <div className="mobile-mockup-screen flex absolute-center">
                        <img
                            src={screen.mobileImage}
                            className="mobile-screen-img slide-in-right "
                            key={screen.mobileImage}
                        />
                    </div>
                </div>
            </div>
            <div className="screen-description">{screen.desrcription}</div>
        </div>
    )
};

export default ScreenText;
