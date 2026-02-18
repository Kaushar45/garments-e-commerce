import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404,Not Found Page</h1>
      <Link to="/" className="text-blue-500 hover:underline cursor-pointer">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
