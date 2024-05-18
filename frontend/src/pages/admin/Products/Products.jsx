import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/context";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../../../config/config";

const Products = () => {
  const {data, setData}= useContext(MainContext);
 
  const deleteItem = (id) => {
    axios
      .delete(`${BASE_URL}${id}`)
      .then((res) => {
        setData([...data.filter((i) => i._id !== id)]);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div className="container mt-5">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <table className="table table-hover table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  width="100px"
                  height="100px"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.price}$</td>
              <td>
                <button
                  onClick={() => deleteItem(item._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
