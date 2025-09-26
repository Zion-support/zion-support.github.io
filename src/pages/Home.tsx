import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Zion</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted partner in AI and technology solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technology Services</h2>
            <p className="text-gray-600">
              Comprehensive technology services to drive your digital transformation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h2>
            <p className="text-gray-600">
              Leading innovation in the tech industry with forward-thinking solutions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;