import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'oguzhan',
    age: 27,
    message: 'hello oguzhan',
  });

  const [name, setName] = useState('oguz');
  const [age, setAge] = useState(28);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    // setPerson({ ...person, message: 'hi bro' }); //mesaj dışındakileri alma (spread operator)
    setMessage('hello world');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change
      </button>
    </>
  );
};
export default UseStateObject;
