import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading AI, Quantum Computing & Cybersecurity Solutions
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
            Interactive AI calculator, enterprise case studies, and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;