import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

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
      <h1>Manage Product</h1>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Grid key={product._id} item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 230, marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    <img
                      style={{ width: "100%", height: "200px" }}
                      src={product.img}
                      alt=""
                    />
                  </Typography>
                  <Typography variant="h6" component="div">
                    Name: {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Price: {product.price}
                  </Typography>
                  <Typography variant="h6">
                    Description: {product.description.slice(0, 176)}
                  </Typography>
                  <br />
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handelDelete(product._id)}
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

export default ManageProduct;
