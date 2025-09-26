import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🚀 Leading Innovation in Technology
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with AI, blockchain, and innovative solutions. 
            We transform businesses through cutting-edge technology and expert guidance.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Cutting-edge artificial intelligence solutions for your business needs. 
              From machine learning to natural language processing.
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-semibold">
              Explore AI Services →
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-6">🔗</div>
            <h3 className="text-2xl font-semibold mb-4">Blockchain</h3>
            <p className="text-gray-600 mb-6">
              Secure, decentralized solutions powered by blockchain technology. 
              Smart contracts, DeFi, and Web3 applications.
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-semibold">
              Explore Blockchain →
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-6">☁️</div>
            <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-gray-600 mb-6">
              Scalable cloud infrastructure and deployment solutions. 
              AWS, Azure, and Google Cloud expertise.
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-semibold">
              Cloud Solutions →
            </button>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Client Success Stories</h2>
            <p className="text-lg text-gray-600">See how we've transformed businesses with cutting-edge technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+300%</span>
                <span className="text-sm text-gray-500">Efficiency Gain</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fortune 500 AI Transformation</h3>
              <p className="text-gray-600 mb-4">Implemented autonomous AI agents that reduced operational costs by 40% and increased productivity by 300%.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Read Case Study →
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">$2M</span>
                <span className="text-sm text-gray-500">Cost Savings</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Blockchain Implementation</h3>
              <p className="text-gray-600 mb-4">Deployed enterprise blockchain solution that streamlined supply chain operations and saved $2M annually.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">99.9%</span>
                <span className="text-sm text-gray-500">Uptime</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Migration Success</h3>
              <p className="text-gray-600 mb-4">Migrated legacy systems to cloud infrastructure achieving 99.9% uptime and 60% faster performance.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                View Results →
              </button>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📰 Latest Technology Insights</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest trends and innovations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">NEW</span>
                <span className="text-sm text-gray-500">January 20, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology Trends 2025</h3>
              <p className="text-gray-600 mb-4">Discover the most significant trends shaping our digital future...</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Read Full Article →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">BREAKTHROUGH</span>
                <span className="text-sm text-gray-500">January 25, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Autonomous AI Systems</h3>
              <p className="text-gray-600 mb-4">Revolutionary AI systems that operate independently and continuously evolve...</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Autonomous AI →
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">BREAKTHROUGH</span>
                <span className="text-sm text-gray-500">January 22, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Neural Interface Technology</h3>
              <p className="text-gray-600 mb-4">Direct brain-computer interfaces enabling thought-controlled devices...</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Neural Tech →
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value. Our team of experts is dedicated 
            to helping you succeed in the digital age.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Journey
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
