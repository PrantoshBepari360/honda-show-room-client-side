import {
  Button,
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

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    fetch("https://safe-earth-63565.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelDelete = (id) => {
    const url = `https://safe-earth-63565.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("seccesfully deleted");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Manage all Product</h1>
      <TableContainer>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Products Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell align="right">Delate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>$ {product.price}</TableCell>
                <TableCell style={{ width: "15%"}}><img
                      style={{ width: "100%"}}
                      src={product.img}
                      alt=""
                    /></TableCell>
                <TableCell align="right">
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handelDelete(product._id)}
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

export default ManageProduct;
