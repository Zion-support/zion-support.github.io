import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SpaceTechRevolution2026 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Space Tech Revolution2026</h1>
          <p className="text-xl text-gray-300">Revolutionary technology showcase</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Revolution</h3>
            <p className="text-gray-300">Transformative digital experiences</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Future</h3>
            <p className="text-gray-300">Next-generation technology</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpaceTechRevolution2026;
