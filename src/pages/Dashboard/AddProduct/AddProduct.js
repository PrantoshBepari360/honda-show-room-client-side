import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://safe-earth-63565.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image Url" />
        <Button
          className="submit-btn"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
