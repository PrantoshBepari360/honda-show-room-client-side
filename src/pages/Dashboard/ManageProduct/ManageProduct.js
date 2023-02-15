import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://honda-show-room.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelDelete = (id) => {
    const url = `https://honda-show-room.onrender.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("seccesfully deleted");
          const remaining = products?.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mb-4">Manage Products</h1>

      <div style={{ width: "80%", margin: "auto" }}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th>Short Description</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={product?.img}
                    alt="product"
                  />
                </td>
                <td>{product?.name}</td>
                <td>{product?.description?.substring(0, 70)}...</td>
                <td>{product?.price}</td>

                <td className="text-center">
                  <button
                    onClick={() => handelDelete(product?._id)}
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

export default ManageProduct;
