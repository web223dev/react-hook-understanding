import React from "react";

import Card from "../card/card.component";

import useFetch from "../../effects/use-fetch.effect";

const User = ({ userId }) => {
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>No User Found</p>
      )}
    </Card>
  );
};

export default User;
