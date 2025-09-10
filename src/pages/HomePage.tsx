import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading technology solutions in AI, cybersecurity, cloud infrastructure, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">Advanced artificial intelligence and machine learning solutions for your business.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300">Comprehensive security solutions to protect your digital assets.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300">Scalable cloud solutions for modern business needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
export default HomePage;