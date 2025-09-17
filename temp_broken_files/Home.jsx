import React from 'react';
import SEOHead from '../components/SEOHead';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Leading AI, Quantum Computing & Cybersecurity Solutions"
        description="Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. Interactive AI calculator, enterprise case studies, and personalized recommendations."
        keywords="AI solutions, artificial intelligence, quantum computing, cybersecurity, cloud services, business automation, machine learning, enterprise AI"
        canonical="https://ziontechgroup.com"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary technology solutions and insights for the future
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-200">
                Leading provider of AI, quantum computing, and cybersecurity solutions
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
                <button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
