import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI & Technology Solutions for the modern world
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">AI Services</h3>
                <p className="text-gray-600 text-sm">Cutting-edge AI solutions</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">IT Services</h3>
                <p className="text-gray-600 text-sm">Comprehensive IT support</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Cloud Solutions</h3>
                <p className="text-gray-600 text-sm">Scalable cloud infrastructure</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Cybersecurity</h3>
                <p className="text-gray-600 text-sm">Protect your digital assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
