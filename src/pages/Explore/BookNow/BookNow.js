import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./BookNow.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const BookNow = () => {
  const { Id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://honda-show-room.onrender.com/products/${Id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [Id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const Submit = (data) => {
    fetch("https://honda-show-room.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed successfully");
          reset();
          history.push(redirect_uri);
        }
      });
  };

  return (
    <div>
      <form className="honda-form" onSubmit={handleSubmit(Submit)}>
        <Box className="honda">
          <input defaultValue={user?.displayName} {...register("name")} />
          <input
            defaultValue={user?.email}
            {...register("email", { required: true })}
          />
          {errors?.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="name"
            defaultValue={products?.name}
            {...register("products")}
          />
          <input
            placeholder="price"
            defaultValue={products?.price}
            {...register("price")}
          />
          <input
            placeholder="img"
            defaultValue={products?.img}
            {...register("img")}
          />
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input placeholder="Phone" defaultValue="" {...register("phone")} />
          <Button
            type="submit"
            variant="contained"
            className="submit"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BookNow;
