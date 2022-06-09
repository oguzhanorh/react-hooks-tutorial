import React, { useState, useEffect } from 'react';

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, []);

  return (
    <>
      <h1>Window</h1>
      <h2>{size}</h2>
    </>
  );
};
export default useEffectCleanup;
