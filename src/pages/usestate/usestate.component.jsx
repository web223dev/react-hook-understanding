import React from "react";
import { Link } from "react-router-dom";

import UseStateExample from "../../components/use-state-example/use-state-example.component";

const UseStatePage = () => {
  return (
    <>
      <UseStateExample />
      <br />
      <br />
      <Link to="/">
        &#8592; Go back <strong>Home</strong> Page
      </Link>
    </>
  );
};

export default UseStatePage;
