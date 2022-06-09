import React, { useState, useEffect } from 'react';

const useEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};
export default useEffectBasics;
