import React from "react";

const InnovativeServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Innovative Services Showcase 2025</h1>
          <p className="text-xl opacity-90">Explore our cutting-edge services and solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">AI Solutions</h3>
            <p className="text-white/90">Advanced artificial intelligence services</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">Cloud Services</h3>
            <p className="text-white/90">Scalable cloud infrastructure solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">Cybersecurity</h3>
            <p className="text-white/90">Comprehensive security solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
