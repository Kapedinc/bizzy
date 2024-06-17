import React from 'react';
import "./Button.scss";

interface Props {
  buttonText?: string;
  onClick?: any;
  customClass?: any;
  prefix?: any;
}

const Button: React.FC<Props> = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div 
    className={`flex absolute-center button-wrapper  ${customClass}`} 
    onClick={onClick}>{prefix} {buttonText}</div>
  )
}

export default Button;