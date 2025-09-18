import React from 'react';
import { Link } from 'react-router-dom';
const TransformationServices = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Transformation Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transform your business with modern digital solutions and processes.
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're developing comprehensive digital transformation services. Check back soon!
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>);
};
export default TransformationServices;
