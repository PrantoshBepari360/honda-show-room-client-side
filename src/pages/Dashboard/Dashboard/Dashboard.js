import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Payment from "../Payment/Payment";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{ textDecoration: "none" }} to="/">
        <Button color="inherit" style={{ margin: "10px, 0", color: "gray" }}>
          Products
        </Button>
      </Link>
      <br />
      <Link style={{ textDecoration: "none" }} to={`${url}`}>
        <Button color="inherit" style={{ marginBottom: "10px", color: "gray" }}>
          My Orders
        </Button>
      </Link>
      <br />
      <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
        <Button color="inherit" style={{ marginBottom: "10px", color: "gray" }}>
        Review 
        </Button>
      </Link>
      <br />
      {admin && (
        <Box>
          <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
            <Button
              color="inherit"
              style={{ marginBottom: "10px", color: "gray" }}
            >
              Make Admin
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
            <Button
              color="inherit"
              style={{ marginBottom: "10px", color: "gray" }}
            >
              Add Product
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/manageProduct`}>
            <Button
              color="inherit"
              style={{ marginBottom: "10px", color: "gray" }}
            >
              Manage Product
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/manageAllOrder`}>
            <Button
              color="inherit"
              style={{ marginBottom: "10px", color: "gray" }}
            >
              Manage All Order
            </Button>
          </Link>
        </Box>
      )}
      <Button onClick={logOut} variant="contained">
        Logout
      </Button>
      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/payment/:paymentId`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrder`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {

  window: PropTypes.func,
};

export default Dashboard;
