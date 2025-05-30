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
          <h1>Garments E-Commerce</h1>
        </div>
        <div>
          <a href="/"> Home</a>
          <a href="/about"> About</a>
          <a href="/contact"> Contact</a>
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
