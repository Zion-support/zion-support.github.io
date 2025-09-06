import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              To transform businesses through cutting-edge AI and technology solutions that drive innovation, efficiency, and growth.
            </p>
            <p className="text-lg text-gray-600">
              We believe in the power of technology to solve complex problems and create opportunities for our clients to thrive in the digital age.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Innovation and Excellence
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Client Success
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Ethical Technology
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-3">✓</span>
                Continuous Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}