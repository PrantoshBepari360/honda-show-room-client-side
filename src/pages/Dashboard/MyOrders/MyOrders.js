import { CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://honda-show-room.onrender.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handelDelete = (id) => {
    const url = `https://honda-show-room.onrender.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("seccesfully deleted");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };

  const { isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <h1 className="text-center mb-4">My Order</h1>
      <div style={{ width: "80%", margin: "auto" }}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={index}>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={order?.img}
                    alt="product"
                  />
                </td>
                <td>{order?.products}</td>
                <td className="text-center">{order?.price}</td>
                <td className="text-center">
                  {order.payment ? (
                    <button className="fw-bold btn btn-success">Paid</button>
                  ) : (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="fw-bold btn btn-primary">Pay</button>
                    </Link>
                  )}
                </td>
                <td className="text-center">
                  {order.payment ? (
                    <h5 className="text-success">Panding...</h5>
                  ) : (
                    <button
                      onClick={() => handelDelete(order?._id)}
                      className="btn text-danger"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
