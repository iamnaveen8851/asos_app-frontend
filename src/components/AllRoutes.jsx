// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Dashboard from "./Dashboard";
import Women from "../Pages/Women";
import Men from "../Pages/Men";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import SingleProduct from "../Pages/SingleProduct";
import { useContext } from "react";
import { myContext } from "../AuthContext/AuthContext";

const AllRoutes = () => {
  const { show } = useContext(myContext);
  console.log(show);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/products" element={<Products />} />
      (<Route path="/women" element={<Women />} />) }
      {/* <Route path="/women" element={<Women />} /> */}
      <Route path="/men" element={<Men />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path={`/:_id`} element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
