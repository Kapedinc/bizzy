import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './Trust.scss';

const Trust: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="text-2xl font-bold mb-4">NOT EVERYONE MAKES IT IN.</div>
        <div className={classNames("text-lg relative overflow-hidden", { 'animate-light': isVisible })}>
          <span>the </span>
          <span>story </span>
          <span>of </span>
          <span>parliamint </span>
          <span>begins </span>
          <span>with </span>
          <span>trust. </span>
          <span>we </span>
          <span>believe </span>
          <span>individuals </span>
          <span>who've </span>
          <span>proven </span>
          <span>their </span>
          <span>trustworthiness </span>
          <span>deserve </span>
          <span>better: </span>
          <span>better </span>
          <span>experiences, </span>
          <span>better </span>
          <span>rewards, </span>
          <span>better </span>
          <span>rules. </span>
          <span>this </span>
          <span>is </span>
          <span className="text-gray-800">the </span>
          <span className="text-gray-800">status </span>
          <span className="text-gray-800">quo </span>
          <span className="text-gray-800">we're </span>
          <span className="text-gray-800">building. </span>
          <span className="text-gray-800">make </span>
          <span className="text-gray-800">it </span>
          <span className="text-gray-800">to </span>
          <span className="text-gray-800">the </span>
          <span className="text-gray-800">club, </span>
          <span className="text-gray-800">and </span>
          <span className="text-gray-800">experience </span>
          <span className="text-gray-800">the </span>
          <span className="text-gray-800">ascension </span>
          <span className="text-gray-800">yourself. </span>
        </div>
      </div>
    </div>
  );
};

export default Trust;
