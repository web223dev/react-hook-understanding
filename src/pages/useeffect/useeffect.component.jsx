import React from "react";
import { Link } from "react-router-dom";

import UseEffectExample from "../../components/use-effect-example/use-effect-example.component";

const UseEffectPage = () => {
  return (
    <>
      <UseEffectExample />
      <br />
      <br />
      <Link to="/">
        &#8592; Go back <strong>Home</strong> Page
      </Link>
    </>
  );
};

export default UseEffectPage;
