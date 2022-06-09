import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  // const firstValue=text || 'hello oguz';
  // const secondValue=text && 'hello world';
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'oguzhan orh'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {isError && <h1>Error.....</h1>}
      {isError ? <p>there is an error ....</p> : <p>there is no error ....</p>}
    </>
  );
};
export default ShortCircuit;
