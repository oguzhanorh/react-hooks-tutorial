import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const useEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    //async bir yapı kurduk ve verileri burada aldık.
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    //console.log(users);
  };
  useEffect(() => {
    //useEffect içinde getUsers'dan verileri çektik ve her render edildiğinde verileri gelecek şekilde ayarladık.
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default useEffectSecondArgument;
