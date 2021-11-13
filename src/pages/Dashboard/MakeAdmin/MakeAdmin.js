import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    const user = { email };
    fetch("https://safe-earth-63565.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          // setEmail('');
          setSuccess(true);
        }
      });
  };

  return (
    <div>
      <h1>Make an Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
