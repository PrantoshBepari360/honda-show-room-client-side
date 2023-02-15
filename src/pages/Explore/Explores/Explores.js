import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../Home/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Explores = () => {
  const [explores, setExplores] = useState([]);

  useEffect(() => {
    fetch("https://honda-show-room.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation></Navigation>
      <Banner></Banner>
      <Container>
        <div className="w-50 my-5 text-center section-title mx-auto">
          <h3>Explore Products</h3>
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
          {explores?.map((explore, index) => (
            <Grid key={index} item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 230, marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    <img
                      style={{ width: "100%", height: "200px" }}
                      src={explore.img}
                      alt=""
                    />
                  </Typography>
                  <Typography variant="h5" className="text-start">
                    {explore?.name}
                  </Typography>
                  <Box className="d-flex mt-2">
                    <Typography variant="h5">Cost: {explore?.price}</Typography>
                    <NavLink
                      style={{ marginLeft: "auto" }}
                      to={`/booking/${explore?._id}`}
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
      <Footer></Footer>
    </Box>
  );
};

export default Explores;
