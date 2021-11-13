import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://safe-earth-63565.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handelDelete = (id) => {
    console.log(id);
    const url = `https://safe-earth-63565.herokuapp.com/allOrders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("seccesfully deleted");
          const remaining = orders.filter((product) => product._id !== id);
          setOrders(remaining);
        }
      });
  };

  const { isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>All Orders</h1>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {orders.map((order) => (
            <Grid key={order._id} item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 230, marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Name: {order.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Email: {order.email}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    City: {order.city}
                  </Typography>
                  <Typography variant="h6">Address: {order.address}</Typography>
                  <Typography variant="h6" color="text.secondary">
                    Phone: {order.phone}
                  </Typography>
                  <Typography variant="h6">Time: {order.createdAt}</Typography>
                  <Typography variant="h6" color="text.secondary">
                    Order Id : {order._id}
                  </Typography>
                  <br />
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handelDelete(order._id)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageAllOrders;
