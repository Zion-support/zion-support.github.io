import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Animation */}
          <motion.div
            className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved, deleted, or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Search Suggestions */}
          <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Maybe you were looking for:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/services"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                Our Services
              </Link>
              <Link
                to="/about"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-3 rounded-lg hover:bg-gray-700/50"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default NotFound;
