import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import ProductHeader from "./ProductHeader";
import NewProduct from "./NewProduct";
import EditProduct from './EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route index element={<ProductHeader />} />
          <Route path="add" element={<NewProduct />} />
          <Route path="edit/:productId" element={<EditProduct />} />
          <Route path=":productId" element={<ProductDetails />} />
          <Route path="sort" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;