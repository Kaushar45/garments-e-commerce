import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

import Home from "../pages/Home";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import About from "../pages/About";
import Shop from "../pages/Collection";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import NotFound from "../NotFound";
import Profile from "../pages/Profile";
const AppContent = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        <Toast />
      </div>
    </Router>
  );
};

export default AppContent;
