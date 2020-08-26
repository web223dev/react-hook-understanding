import React, { useState, useEffect } from "react";

import Card from "../card/card.component";

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // We are building componentDidMount here.
  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json();
        setUser(resJson[0]);
      };

      fetchFunc();
    }
  }, [searchQuery]); // If We put empty array([]) in here, It doesn't depends on any state. So If I mimic a componentDidMount, we use empty array ([])

  return (
    <Card>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;
