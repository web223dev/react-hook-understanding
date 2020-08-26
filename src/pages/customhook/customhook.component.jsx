import React from "react";
import { Link } from "react-router-dom";

import Post from "../../components/post/post.component";
import User from "../../components/user/user.component";

const CustomHookPage = () => (
  <>
    <User userId={5} />
    <Post postId={15} />
    <br />
    <br />
    <Link to="/">
      &#8592; Go back <strong>Home</strong> Page
    </Link>
  </>
);

export default CustomHookPage;
