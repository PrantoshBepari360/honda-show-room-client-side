import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ReviewDetails = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`https://safe-earth-63565.herokuapp.com/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);

  return (
    <Box sx={{ flexGrow: 1 , marginTop: "5%"}}>
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              <img
                style={{ width: "100%", height: "280px" }}
                src={reviews.img}
                alt=""
              />
            </Typography>
            <Typography variant="h5" component="div">
              Name: {reviews.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Price: {reviews.price}
            </Typography>
            <Typography variant="h6">{reviews.description}</Typography>
            <br />
            <Link style={{ textDecoration: "none" }} to="/">
              <Button variant="contained">Back</Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ReviewDetails;
