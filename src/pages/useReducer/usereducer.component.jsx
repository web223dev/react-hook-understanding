import React from "react";
import { Link } from "react-router-dom";

import UseReducerExample from "../../components/use-reducer-example/use-reducer.component";

const UseReducerPage = () => (
  <>
    <UseReducerExample />
    <br />
    <br />
    <Link to="/">
      &#8592; Go back <strong>Home</strong> Page
    </Link>
  </>
);

export default UseReducerPage;
