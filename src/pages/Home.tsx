import React from 'react';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Zion Tech Group</h1>
        <p className="text-xl text-gray-600">Leading the future of technology with AI, blockchain, and innovative solutions</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
          <p className="text-gray-600 mb-4">
            Cutting-edge artificial intelligence solutions for your business needs.
          </p>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
          <p className="text-gray-600 mb-4">
            Secure, decentralized solutions powered by blockchain technology.
          </p>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            Explore →
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">☁️</div>
          <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
          <p className="text-gray-600 mb-4">
            Scalable cloud infrastructure and deployment solutions.
          </p>
          <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
            Get Started →
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;