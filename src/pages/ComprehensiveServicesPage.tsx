import React from 'react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesPage(props: any) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Comprehensive Services Page
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our comprehensiveservicespage page
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover: b g-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
