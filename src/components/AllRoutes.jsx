// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Dashboard from "./Dashboard";
import Women from "../Pages/Women";
import Men from "../Pages/Men";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
