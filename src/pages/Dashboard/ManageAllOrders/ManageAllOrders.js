import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://honda-show-room.onrender.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handelDelete = (id) => {
    console.log(id);
    const url = `https://honda-show-room.onrender.com/allOrders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          alert("seccesfully deleted");
          const remaining = orders?.filter((product) => product?._id !== id);
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
      <h1 className="text-center mb-4">Manage All Orders</h1>

      <div style={{ width: "80%", margin: "auto" }}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={index}>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.products}</td>
                <td>{order?.price}</td>
                <td className="text-center">
                  <button
                    onClick={() => handelDelete(order?._id)}
                    className="btn text-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
