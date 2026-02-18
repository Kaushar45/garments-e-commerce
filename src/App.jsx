import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router";
import { Check, Info, X } from "lucide-react";
import { ShopProvider, useShop } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Collection";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

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
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<AboutPlaceholder />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  ShopHub
                </h3>
                <p className="text-gray-400">
                  Premium products for a premium lifestyle.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to get special offers, free giveaways, and
                  once-in-a-lifetime deals.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-purple-500 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              &copy; 2024 ShopHub Premium. All rights reserved.
            </div>
          </div>
        </footer>

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
