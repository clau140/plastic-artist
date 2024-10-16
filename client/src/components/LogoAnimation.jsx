import React, { useEffect } from 'react';
import Vivus from 'vivus';
import { ReactComponent as SrSVG } from '../assets/sr.svg'; 

const LogoAnimation = () => {
  useEffect(() => {
    new Vivus('sr-svg', {
      type: 'delayed',  
      duration: 200,    
      animTimingFunction: Vivus.EASE,  
    });
  }, []);

  return (
    <div>
      <SrSVG id="sr-svg" />
    </div>
  );
};

export default LogoAnimation;
