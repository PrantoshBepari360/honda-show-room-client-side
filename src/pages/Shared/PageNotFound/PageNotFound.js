import { Button } from "@mui/material";
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
      <Link style={{ textDecoration: "none"}} to="/">
      <Button style={{py: 3}} variant="contained">Go Back</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
