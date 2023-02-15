import React from "react";
import Rating from "react-rating";
import startEmpty from "../../../../images/star-empty.png";
import startFull from "../../../../images/star-full.png";
import userPhoto from "../../../../images/user.png";

const Review = (props) => {
  const { name, email, rating, review, photo } = props?.review;
  return (
    <div className="testimonial" style={{ textAlign: "left" }}>
      <div className="pic">
        {photo == null ? (
          <img src={userPhoto} alt="user" />
        ) : (
          <img src={photo} alt="user" />
        )}
      </div>

      <p className="description">{review}</p>
      <div className="rating">
        <Rating
          fullSymbol={<img src={startFull} alt="starfull" className="icon" />}
          emptySymbol={
            <img src={startEmpty} alt="startEmpty" className="icon" />
          }
          initialRating={rating}
          readonly
        />
      </div>
      <h3 className="title">{name}</h3>
      <small className="post">{email}</small>
    </div>
  );
};

export default Review;
