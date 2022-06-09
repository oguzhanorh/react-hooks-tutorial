import React, { useState } from 'react';

//use
//component name must be uppercase
//must be in the function/component body
//cannot call conditionally

const useStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default useStateBasics;
