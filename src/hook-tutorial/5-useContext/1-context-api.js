import React, { useState, useContext } from 'react';

import { data } from '../../Data';

const personContext = React.createContext(); //Context
//React context componentler arası veri aktarımını çok kolaylaştırıyor.
//two components - Provider, Consumer
//Provider bağlam içerisindeki değerleri sağlar
//Consumer : Bağlam içerisindeki değerleri herhangi bir düğüm içerisinden erişebilir hale getirir.

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  //Provider
  return (
    <personContext.Provider value={{ removePerson, people }}>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </personContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(personContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

//Consumer
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(personContext);
  console.log(data);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default ContextAPI;
