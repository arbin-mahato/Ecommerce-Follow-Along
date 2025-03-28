import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  Home,
  SignupPage,
  ActivationPage,
  CreateProduct,
  MyProducts,
  Cart,
  ProductDetails,
  Profile,
  CreateAddress,
  SelectAddress,
  OrderConfirmation,
} from "./Routess.js"; // Import fixed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-address" element={<CreateAddress />} />
        <Route path="/select-address" element={<SelectAddress />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
