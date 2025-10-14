import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI and IT solutions for modern businesses
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
                <p className="text-gray-300">Advanced artificial intelligence solutions for your business needs.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
                <p className="text-gray-300">Scalable cloud infrastructure and migration services.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-300">Comprehensive security solutions to protect your data.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;