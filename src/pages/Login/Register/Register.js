import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.jpg";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(field, value, newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.Repassword) {
      alert("login password didn't match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                type="password"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype Your Password"
                name="Repassword"
                type="password"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <br />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <br />
              <NavLink
                style={{ textDecoration: "none", fontSize: "20px" }}
                to="/login"
              >
                Already Registered? Please Login
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          <br />
          {user?.email && (
            <Alert severity="success">User Created successfully</Alert>
          )}
          <br />
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "80%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
