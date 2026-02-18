import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data";
import ProductCard from "../components/ProductCard";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [location.search]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Area */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shop Collection
          </h1>
          <p className="text-gray-500">Find the best products for your needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-64 shrink-0 space-y-8">
            {/* Search (Mobile visible only, usually) */}
            <div className="relative lg:hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-gray-900">Categories</h3>
              </div>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === cat
                        ? "bg-purple-50 text-purple-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Static Promo Box */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center">
              <p className="text-sm opacity-80 mb-2">Summer Sale</p>
              <h3 className="text-2xl font-bold mb-4">50% OFF</h3>
              <p className="text-sm mb-4 opacity-90">
                On selected electronic items this week.
              </p>
              <button className="w-full py-2 bg-white text-purple-600 rounded-lg font-bold text-sm hover:bg-opacity-90">
                View Offers
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Search & Sort */}
            <div className="hidden lg:flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-gray-50 focus:bg-white transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <span className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                results
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-96 bg-white rounded-3xl border border-dashed border-gray-200">
                <div className="p-4 bg-gray-50 rounded-full mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-6 text-purple-600 font-medium hover:text-purple-700"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
