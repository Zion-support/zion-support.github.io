import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto px-4 py-16">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-blue-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leading provider of AI-powered enterprise solutions
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;