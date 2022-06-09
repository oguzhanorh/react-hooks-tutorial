import React, { useState } from 'react';

import { data } from '../../../Data';

const useStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); //bak ve istemediklerimi sil burada önemli nokta istemediğim şeyleri kaldırmak için filter kullanıyorum.
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </>
  );
};

export default useStateArray;
