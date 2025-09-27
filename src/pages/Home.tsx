import React from 'react';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Our Platform</h1>
        <p className="text-xl text-gray-600">Revolutionary technology showcase</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
          <p className="text-gray-600">Cutting-edge technology solutions</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Revolution</h3>
          <p className="text-gray-600">Transformative digital experiences</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Future</h3>
          <p className="text-gray-600">Next-generation technology</p>
        </div>
      </div>
    </main>
  );
};

export default Home;