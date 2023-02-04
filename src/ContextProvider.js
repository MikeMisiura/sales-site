import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3001/products")
      setData(response.data)
    }
    getData()
  }, []);

  function refreshProducts() {
    return axios.get("http://localhost:3001/products")
      .then(response => {
        setData(response.data)
      })
  }

  function getProduct(id) {
    console.log("getting product: " + id)
    console.log(data.find(p => p.id === id))

    return (data.find(p => p.id === id));
  }

  function addProduct(product) {
    return axios.post("http://localhost:3001/products", product)
      .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
      })
  }

  function editProduct(product, id) {
    return axios.put("http://localhost:3001/products/" + id, product)
      .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
      })
  }

  function deleteProduct(id) {
    return axios.delete("http://localhost:3001/products/" + id)
      .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
      })
  }

  async function sortAscending() {
    const response = await axios.get("http://localhost:3001/products?_sort=price&_order=asc")
    setData(response.data)
  }

  async function sortDescending() {
    const response = await axios.get("http://localhost:3001/products?_sort=price&_order=desc")
    setData(response.data)
  }

  return (
    <ProductContext.Provider value={{
      data,
      setData,
      getProduct,
      addProduct,
      editProduct,
      deleteProduct,
      sortAscending,
      sortDescending
    }}>
      {props.children}
    </ProductContext.Provider>
  );
};
