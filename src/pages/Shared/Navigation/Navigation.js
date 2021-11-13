import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  const styles = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src="https://global.yamaha-motor.com/shared/img/rwd_identity.png"
              alt=""
            />
          </Typography>
          <NavLink style={styles} to="/">
            <Button color="inherit">Products</Button>
          </NavLink>
          <NavLink style={styles} to="/explore">
            <Button color="inherit">Explore</Button>
          </NavLink>
          <NavLink style={styles} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </NavLink>
          {user?.email ? (
            <Box>
              <Button onClick={logOut} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink style={styles} to="/login">
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
