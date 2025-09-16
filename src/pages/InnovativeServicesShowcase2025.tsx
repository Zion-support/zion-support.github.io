import React from 'react';

const InnovativeServicesShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-8">Innovative Services Showcase 2025</h1>
        <p className="text-2xl text-center opacity-90 mb-12">Revolutionary services that transform businesses</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
            <p className="text-purple-100">Advanced AI services for business transformation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
            <p className="text-purple-100">Scalable cloud infrastructure solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
            <p className="text-purple-100">Advanced security solutions for modern businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;