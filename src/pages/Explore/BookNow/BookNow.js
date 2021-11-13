import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./BookNow.css";

const BookNow = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://safe-earth-63565.herokuapp.com/orders", {
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
      <form className="honda-form" onSubmit={handleSubmit(onSubmit)}>
        <Box className="honda">
          <input defaultValue={user.displayName} {...register("name")} />
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input placeholder="City" defaultValue="" {...register("city")} />
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
