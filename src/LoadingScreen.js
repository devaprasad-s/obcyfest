import React from 'react';
import useTextTransition from './useTextTransition';

const LoadingScreen = () => {
  const initialText = '08cyF357 e78f';
  const finalText = 'ObCyFest 2023';
  const duration = 2000; // Transition duration in milliseconds

  const text = useTextTransition(initialText, finalText, duration);

  return (
    
    <div className="loading-screen">
      <h1>{text}</h1>
    </div>
  );
};

export default LoadingScreen;
