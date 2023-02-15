import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Rating from "react-rating";
import { Col, Form, Row, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import startEmpty from "../../../images/star-empty.png";
import startFull from "../../../images/star-full.png";

const Review = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [myRating, setMyRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.rating = myRating;
    data.name = user?.displayName;
    data.email = user?.email;
    data.photo = user?.photoURL;

    axios
      .post("https://honda-show-room.onrender.com/reviews", data)
      .then((res) => {
        if (res?.data?.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };

  const handleReviewCange = (fullSymbol) => {
    setMyRating(fullSymbol);
  };

  return (
    <div>
      <h1 className="text-center">Review</h1>
      <div className="add-review">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="RoomSize">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Your Name</b>
                </Form.Label>
              </div>
              {
                <input
                  style={{ cursor: "not-allowed" }}
                  disabled
                  type="text"
                  defaultValue={user?.displayName}
                  {...register("name")}
                />
              }
            </Form.Group>
            <Form.Group as={Col} controlId="RoomSize">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Your E-mail</b>
                </Form.Label>
              </div>
              {
                <input
                  style={{ cursor: "not-allowed" }}
                  disabled
                  type="text"
                  defaultValue={user?.email}
                  {...register("email")}
                />
              }
            </Form.Group>
          </Row>
          <Row className="mb-3" style={{ textAlign: "left" }}>
            <div className="my-rating">
              <Rating
                fullSymbol={
                  <img src={startFull} alt="starfull" className="icon" />
                }
                emptySymbol={
                  <img src={startEmpty} alt="startEmpty" className="icon" />
                }
                onClick={handleReviewCange}
              />
            </div>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Review">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Review</b>
                </Form.Label>
              </div>
              <textarea
                style={{ height: "100px" }}
                type="text"
                placeholder="Your Review"
                {...register("review", { required: true })}
              />
            </Form.Group>
          </Row>
          {success && (
            <div className="alert alert-success" role="alert">
              Your Review and rating has been submitted
            </div>
          )}
          {errors.exampleRequired && <span>This field is required</span>}
          <div style={{ textAlign: "left" }}>
            <Button className="fw-bold" variant="primary" type="submit">
              Add Review
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Review;
