import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading provider of revolutionary AI, quantum computing, and neural interface technologies
          </p>
          <div className="space-x-4">
            <Link 
              to="/services" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              to="/about" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;