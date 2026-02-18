import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router";
import { Check, Info, X } from "lucide-react";
import { ShopProvider, useShop } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Collection";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Footer from "./components/Footer";

// Notification Toast Component
const Toast = () => {
  const { notification, closeNotification } = useShop();

  if (!notification.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl text-white ${
          notification.type === "success" ? "bg-gray-900" : "bg-blue-600"
        }`}
      >
        {notification.type === "success" ? (
          <div className="bg-green-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" />
          </div>
        ) : (
          <Info className="w-5 h-5" />
        )}
        <p className="font-medium pr-4">{notification.message}</p>
        <button
          onClick={closeNotification}
          className="hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const AboutPlaceholder = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
    <div className="text-center p-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">About ShopHub</h1>
      <p className="text-gray-600 text-lg">
        We are dedicated to providing the best quality products at the most
        affordable prices. Our mission is to revolutionize the online shopping
        experience.
      </p>
    </div>
  </div>
);

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
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<AboutPlaceholder />} />
          </Routes>
        </main>

        <Footer />

        <Toast />
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
};

export default App;
