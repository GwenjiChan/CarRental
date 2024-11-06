import React from 'react';
import hero from '../images/hero.jpg'; // Import your image

const Hero = ({ title }) => {
  return (
    <div 
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        position: 'relative' 
      }}
    >
     
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        zIndex: '0' 
      }}></div>

    
      <h1 
        className=" text-3xl font-bold " 
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)', 
          zIndex: '1' 
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Hero;
