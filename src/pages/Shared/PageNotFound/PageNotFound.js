import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pb-5">
      <img
        className="w-75 py-5"
        src="https://i.ibb.co/KyNHYRy/404-page-not-found.png"
        alt=""
      />
      <br />
      <Link to="/">
        <button class="btn btn-primary">Go Back</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
