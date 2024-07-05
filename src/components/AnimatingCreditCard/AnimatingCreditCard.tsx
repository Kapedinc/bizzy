import React from 'react';
import creditCardBackImg from '../../assets/invoices.svg';
import './AnimatingCreditCard.css';

class AnimatingCreditCard extends React.Component{
    
    render(){
        return(
            <div className="scene">
                <div className="container">
                    <div className="side front">
                        <div className="chip"></div>
                        <p>Manish Das</p>
                        <div className="comp-logo">
                            <div className="circle-one"></div>
                            <div className="circle-two"></div>
                        </div>
                    </div>
                    <div className="side back">
                        <img className="card-back-img" src={creditCardBackImg} alt="cardbackimg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimatingCreditCard;