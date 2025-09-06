import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions, AI services, 
            and cutting-edge IT infrastructure.
          </p>
          <div className="space-x-4">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;