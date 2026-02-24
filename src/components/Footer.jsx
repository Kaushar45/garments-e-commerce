import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-xl font-bold">Closet</h3>
              </div>
              <p className="text-gray-400">
                Premium products for a premium lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
                />
                <button className="px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg hover:shadow-lg transition">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 Closet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
