import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./NotFoundPage";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "4px",
        }}
      >
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
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
