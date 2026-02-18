import React from "react";
import { Link } from "react-router";
import { Heart, ArrowRight } from "lucide-react";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-full shadow-lg mb-6 animate-float">
          <Heart className="w-16 h-16 text-red-300 fill-red-50" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Save items you love to your wishlist so you can easily find them
          later.
        </p>
        <Link
          to="/shop"
          className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all flex items-center gap-2"
        >
          Browse Products <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-500">{wishlist.length} saved items</p>
          </div>
          <Link
            to="/shop"
            className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-1"
          >
            Continue Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
