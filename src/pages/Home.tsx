import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Welcome to Zion Tech Group</h1>
          <p className="text-xl text-gray-300">Leading the future of technology with AI, blockchain, and innovative solutions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
            <a href="/blog" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-2xl font-bold mb-4">Blockchain</h3>
            <p className="text-gray-300 mb-4">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
            <a href="/blog" className="text-blue-400 hover:text-blue-300 font-semibold">
              Explore →
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
            <p className="text-gray-300 mb-4">
              Scalable cloud infrastructure and deployment solutions.
            </p>
            <a href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
              Get Started →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
