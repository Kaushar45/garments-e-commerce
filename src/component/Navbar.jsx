import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFoundPage from "../NotFoundPage";
import Collection from "../pages/Collection";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2  border-b-[1px] border-neutral-100">
        <div>
          <h1> Kaushar's Garments</h1>
        </div>
        <div style={{ margin: "20px" }}>
          <a
            style={{ textDecoration: "none", color: "white", margin: "6px" }}
            href="/"
          >
            {" "}
            Home
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: "6px" }}
            href="/collection"
          >
            {" "}
            Collecton
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: "6px" }}
            href="/about"
          >
            {" "}
            About
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: "6px" }}
            href="/contact"
          >
            {" "}
            Contact
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: "6px" }}
            href="/auth/login"
          >
            {" "}
            Login
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: "6px" }}
            href="/auth/signup"
          >
            {" "}
            Signup
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
