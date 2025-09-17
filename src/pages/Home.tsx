import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Leading AI, Quantum Computing & Cybersecurity Solutions
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Get Started
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-2 px-6 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;