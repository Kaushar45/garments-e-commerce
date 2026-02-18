import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {product.badge}
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            } transition-colors`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-50 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 shadow-xl"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 truncate group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="p-2 rounded-full bg-gray-50 hover:bg-purple-100 text-purple-600 transition-colors md:hidden"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
