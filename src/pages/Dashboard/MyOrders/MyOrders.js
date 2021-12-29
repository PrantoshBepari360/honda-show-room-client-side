import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Products Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell >Pay</TableCell>
              <TableCell>Cancel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.name}
                </TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.products}</TableCell>
                <TableCell>$ {order.price}</TableCell>
                
                <TableCell >
                  {order.payment ? (
                    "paid"
                  ) : (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button>Pay</button>
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                {order.payment ? (
                  ""
                   ) : (<Button
                    onClick={() => handelDelete(order._id)}
                  >
                    Cancel
                  </Button>)}
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyOrders;
