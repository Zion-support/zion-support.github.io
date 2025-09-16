import React from "react";

const ComprehensiveServices2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Services 2025
          </h1>
          <p className="text-xl text-gray-600">
            Revolutionary AI and technology solutions for the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
            <p className="text-gray-600">
              Intelligent automation solutions that streamline operations and boost productivity.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Scalable, secure cloud solutions designed to support business growth.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Micro SaaS</h3>
            <p className="text-gray-600">
              Custom micro SaaS applications that solve specific business challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2025;