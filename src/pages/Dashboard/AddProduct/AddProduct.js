import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Col, Form, Row, Button } from "react-bootstrap";

const AddProduct = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://honda-show-room.onrender.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-center">Add Product</h1>
      <div className="add-product">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3 mb-4">
            <Form.Group as={Col} controlId="RoomTitle">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Title</b>
                </Form.Label>
              </div>
              <input
                type="text"
                placeholder="Product Name"
                {...register("title", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Description">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Price</b>
                </Form.Label>
              </div>
              <input
                type="text"
                placeholder="Price"
                {...register("cost", { required: true })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 mb-4">
            <Form.Group as={Col} controlId="RoomSize">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Image URL</b>
                </Form.Label>
              </div>
              <input
                type="text"
                placeholder="Image URL"
                {...register("image", { required: true })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 mb-4">
            <Form.Group as={Col} controlId="Description">
              <div style={{ textAlign: "left" }}>
                <Form.Label>
                  <b>Description</b>
                </Form.Label>
              </div>
              <textarea
                style={{ height: "100px" }}
                type="text"
                placeholder="Description"
                {...register("description", { required: true })}
              />
            </Form.Group>
          </Row>
          {success && (
            <div className="alert alert-success" role="alert">
              Added Tour Place Successfully!
            </div>
          )}
          {errors.exampleRequired && <span>This field is required</span>}
          <div style={{ textAlign: "left" }}>
            <Button className="fw-bold" variant="primary" type="submit">
              Add Place
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
