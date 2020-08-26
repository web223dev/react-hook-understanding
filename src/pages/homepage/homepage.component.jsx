import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/usestate">
        Go To <strong>UseState</strong> Example Page &#8594;
      </Link>
      <br />
      <br />
      <Link to="/useeffect">
        Go To <strong>UseEffect</strong> Example Page &#8594;
      </Link>
      <br />
      <br />
      <Link to="/customhook">
        Go To <strong>CustomHook</strong> Example Page &#8594;
      </Link>
    </div>
  );
};

export default HomePage;
