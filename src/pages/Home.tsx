import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl mb-8">
            AI, IT & Micro SaaS Solutions
          </p>
          <div className="space-x-4">
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;