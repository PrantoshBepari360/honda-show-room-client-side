import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../Home/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Explores = () => {
  const [explores, setExplores] = useState([]);

  useEffect(() => {
    fetch("https://safe-earth-63565.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation></Navigation>
      <Banner></Banner>
      <h1>Explore</h1>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {explores.map((explore) => (
            <Grid key={explore._id} item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 230, marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    <img
                      style={{ width: "100%", height: "200px" }}
                      src={explore.img}
                      alt=""
                    />
                  </Typography>
                  <Typography variant="h5" component="div">
                    Name: {explore.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Price: {explore.price}
                  </Typography>
                  <Typography variant="h6">
                    {explore.description.slice(0, 174)}
                  </Typography>
                  <br />
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/booking/${explore._id}`}
                  >
                    <Button variant="contained">By Now</Button>
                  </NavLink>
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
