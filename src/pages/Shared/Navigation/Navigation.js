import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { makeStyles } from "@mui/styles";
import { Drawer, useTheme } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Navigation = () => {
  const { user, logOut } = useAuth();

  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      textDecoration: "none",
      color: "#fff",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
    mobileNavItem: {
      textDecoration: "none",
      color: "#000",
    },
  });

  const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();

  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to="/">
              PRODUCTS
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <Link className={mobileNavItem} to="/explore">
            EXPLORE
          </Link>
        </ListItem>
        <ListItem button>
          <Link className={mobileNavItem} to="/dashboard">
            DASHBOARD
          </Link>
        </ListItem>
        <ListItem button>
          {user?.email ? (
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          ) : (
            <NavLink className={mobileNavItem} to="/login">
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img
                src="https://global.yamaha-motor.com/shared/img/rwd_identity.png"
                alt=""
              />
            </Typography>
            <Box className={navItemContainer}>
              <NavLink className={navItem} to="/">
                <Button color="inherit">Products</Button>
              </NavLink>
              <NavLink className={navItem} to="/explore">
                <Button color="inherit">Explore</Button>
              </NavLink>
              <NavLink className={navItem} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              {user?.email ? (
                <Button onClick={logOut} color="inherit">
                  Logout
                </Button>
              ) : (
                <NavLink className={navItem} to="/login">
                  <Button color="inherit">Login</Button>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
