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
    fetch("https://honda-show-room.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <div className="w-50 my-5 text-center section-title mx-auto">
          <h3>Show Products</h3>
          <p>
            This product is from our valuable Customers, those who get it from
            the Honda show-room. We every time provide the best quality Honda to
            our customers.
          </p>
        </div>
      </Container>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products?.slice(-6)?.map((product, index) => (
            <Grid key={index} item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 230, marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    <img
                      style={{ width: "100%", height: "200px" }}
                      src={product?.img}
                      alt=""
                    />
                  </Typography>
                  <Typography variant="h5" className="text-start">
                    {product?.name}
                  </Typography>
                  <Box className="d-flex mt-2">
                    <Typography variant="h5">Cost: {product?.price}</Typography>
                    <NavLink
                      style={{ marginLeft: "auto" }}
                      to={`/booking/${product?._id}`}
                    >
                      <Button variant="contained">Read more</Button>
                    </NavLink>
                  </Box>
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
