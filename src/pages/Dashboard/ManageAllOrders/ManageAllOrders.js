import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
      <h1>Manage all Orders</h1>
      <TableContainer>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Products Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="right">Delate</TableCell>
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
                <TableCell align="right">
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handelDelete(order._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageAllOrders;
