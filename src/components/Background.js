// Background.js
import React from 'react';
import './Background.css'; 
const Background = ({ children, imageUrl }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="background-container" style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Background;