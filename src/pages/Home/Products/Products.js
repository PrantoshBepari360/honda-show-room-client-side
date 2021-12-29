import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://safe-earth-63565.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Products</h1>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.slice(-6).map((product) => (
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
                  <Typography variant="h5" component="div">
                    Name: {product.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Price: {product.price}
                  </Typography>
                  <Typography variant="h6">
                    {product.description.slice(0, 174)}
                  </Typography>
                  <br />
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/booking/${product._id}`}
                    >
                    <Button variant="contained">By Now</Button>
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
