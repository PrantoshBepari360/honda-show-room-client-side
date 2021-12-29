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

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://safe-earth-63565.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Review</h1>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((review) => (
            <Grid key={review._id} item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 230, marginTop: "20px" }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    <img
                      style={{ width: "100%", height: "200px" }}
                      src={review.img}
                      alt=""
                    />
                  </Typography>
                  <Typography variant="h5" component="div">
                    Name: {review.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Price: {review.price}
                  </Typography>
                  <Typography variant="h6">
                    {review.description.slice(0, 174)}
                  </Typography>
                  <br />
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/details/${review._id}`}
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

export default Reviews;
