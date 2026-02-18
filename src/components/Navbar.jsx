import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ShoppingCart, Heart, Search, Menu, X, Sparkles } from "lucide-react";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { cartItems, wishlist } = useShop();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchInput)}`);
      setShowSearch(false);
      setSearchInput("");
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-purple-600 animate-pulse absolute -left-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform block ml-1">
                  Closet
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-purple-600"
                      : "text-gray-600 hover:text-purple-600"
                  } group`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-purple-600 to-pink-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 hover:bg-purple-50 rounded-full transition-all hover:scale-110 text-gray-600"
              >
                {showSearch ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>

              <Link
                to="/wishlist"
                className="relative p-2 hover:bg-purple-50 rounded-full transition-all hover:scale-110 group"
              >
                <Heart
                  className={`w-5 h-5 ${
                    wishlist.length > 0
                      ? "fill-red-500 text-red-500"
                      : "text-gray-600"
                  } group-hover:text-red-500 transition-colors`}
                />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative p-2 hover:bg-purple-50 rounded-full transition-all hover:scale-110 group"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              <button
                className="md:hidden p-2 text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showSearch ? "max-h-20 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                autoFocus={showSearch}
              />
            </form>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 bg-white rounded-xl shadow-inner p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg font-medium ${
                    location.pathname === link.path
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
