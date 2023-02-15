import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Review from "./Review/Review";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://honda-show-room.onrender.com/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Box>
      <Container>
        <div className="w-50 my-5 text-center section-title mx-auto">
          <h3>Customer Reviews</h3>
          <p>
            This Our Services from our valuable Customer, those who get from
            Honda show-room. We every time provide best quality services to our
            cusotmer.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            {reviews?.length === 0 ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <OwlCarousel
                items={2}
                loop={true}
                autoplay={true}
                dots={false}
                margin={10}
                nav={false}
                className="owl-carousel"
              >
                {reviews?.map((review, index) => (
                  <Review review={review} key={index}></Review>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Reviews;
