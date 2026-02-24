import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  Heart,
  X,
  Star,
  TrendingUp,
  Truck,
  Shield,
} from "lucide-react";

import { PRODUCTS } from "../data";

const heroImages = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts([]);
    const timer = setTimeout(() => {
      filteredProducts.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProducts((prev) => [...prev, index]);
        }, index * 100);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slideshow */}
      <div className="relative h-screen  overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Fashion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
              Spring Collection
            </h2>
            <p
              className="text-xl md:text-2xl mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover the latest trends in fashion
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="group px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105">
                <span className="flex items-center space-x-2">
                  <span>Shop Now</span>
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition transform hover:scale-105">
                Explore Collections
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentHeroIndex ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Free Shipping",
                desc: "On orders over $50",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Payment",
                desc: "100% secure transactions",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Best Prices",
                desc: "Guaranteed low prices",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 rounded-lg hover:bg-gray-50 transition transform hover:-translate-y-1"
                style={{
                  animation: "fadeInUp 0.6s ease-out",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {["All", "Men", "Women", "Shoes"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our curated collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleProducts.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transition: "all 0.5s ease-out" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition transform"
                >
                  <Heart
                    className={`w-5 h-5 transition ${
                      favorites.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 animate-slide-in-right">
            <div className="p-6 border-b flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="hover:scale-110 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex space-x-4 bg-gray-50 p-4 rounded-lg hover:shadow-md transition"
                      style={{
                        animation: "fadeInUp 0.3s ease-out",
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-purple-600 font-bold">
                          ${item.price}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                          >
                            -
                          </button>
                          <span className="font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 hover:scale-110 transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-6 space-y-4 bg-gray-50">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
