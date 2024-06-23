import React from 'react';
import styles from './TiltedButton.module.css'; // Import styles from the CSS module
import classNames from 'classnames';


interface NeoPopTiltedButtonProps {
    text: string;
    backgroundColor: string;
    url: string;
    textColor: string;
  }
  
  const NeoPopTiltedButton: React.FC<NeoPopTiltedButtonProps> = ({
    text,
    url,
    backgroundColor,
    textColor,
  }) => {
    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      (event.target as HTMLButtonElement).classList.add(styles.down);
    };
  
    const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      (event.target as HTMLButtonElement).classList.remove(styles.down);
    };
  
    const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
      (event.target as HTMLButtonElement).classList.add(styles.down);
    };
  
    const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
      (event.target as HTMLButtonElement).classList.remove(styles.down);
    };
  
    return (
      <div className={styles.cardContainer}>
        <div className={styles.btnContainer}>
          <div className={styles.btnMain}>
            <button
              className={classNames(
              styles.btn3d,
              `bg-${backgroundColor}`,
              `text-${textColor}`
              )}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={() => window.location.href = url}
            >
              {text}
            </button>
            <div
            className={classNames(
              styles.btn3dBefore,
              `bg-${backgroundColor}`
            )}
          ></div>
          </div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    );
  };
  
  export default NeoPopTiltedButton;