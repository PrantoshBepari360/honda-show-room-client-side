import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://safe-earth-63565.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handelDelete = (id) => {
    const url = `https://safe-earth-63565.herokuapp.com/orders/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("seccesfully deleted");
          const remaining = orders.filter((order) => order._id !== id);
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
      <h2>My Orders</h2>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {orders.map((order) => (
            <Grid item xs={4} sm={4} md={4}>
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
                    Order Id :{order._id}
                  </Typography>
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => handelDelete(order._id)}
                  >
                    Delate
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

export default MyOrders;
