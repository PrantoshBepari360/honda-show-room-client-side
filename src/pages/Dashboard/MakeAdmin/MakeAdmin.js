import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
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
    fetch("https://honda-show-room.onrender.com/users/admin", {
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
      <form className="section-title mx-auto my-4" onSubmit={handleAdminSubmit}>
        <InputGroup style={{ width: "80%", margin: "auto" }}>
          <FormControl
            placeholder="Email Address"
            type="email"
            onBlur={handleOnBlur}
            name="email"
          />
          <Button className="btn btn-primary" type="submit" id="button-addon2">
            Make Admin
          </Button>
        </InputGroup>

        {success && (
          <div className="alert alert-success" role="alert">
            Made Admin Successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;
