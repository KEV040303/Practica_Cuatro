import React, { useEffect, useState } from "react";
import UserCard from "../userCard";

const UsersCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />
      ))}
    </>
  );
};

export default UsersCards;
