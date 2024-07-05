import React from 'react';
import './LoadingDots.css';

class LoadingDots extends React.Component<{}> {
    render() {
        return (
            <div className="loading-dots-wrapper">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
            </div>
        );
    }
}

export default LoadingDots;
