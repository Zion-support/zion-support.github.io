import React from 'react';
import { Helmet } from 'react-helmet-async';
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Helmet>
        <title>Space Tech Innovation 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover revolutionary space technology innovations that will enable human colonization of Mars and beyond" />
        <meta name="keywords" content="space technology, Mars colonization, space innovation, space exploration 2026" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH INNOVATION 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Reach for the <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Stars</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary space technology that will make human colonization of Mars and deep space exploration a reality.
        {/* Technology Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Propulsion Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fusion Engine Power</span>
                <span className="text-white font-bold">10 GW</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Mars Transit Time</span>
                <span className="text-white font-bold">30 days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Payload Capacity</span>
                <span className="text-white font-bold">1000 tons</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Fuel Efficiency</span>
                <span className="text-white font-bold">1000x better</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Life Support Systems</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Oxygen Generation</span>
                <span className="text-white font-bold">100% recycled</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Water Recycling</span>
                <span className="text-white font-bold">99.9% efficient</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Food Production</span>
                <span className="text-white font-bold">Hydroponic farms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300">Radiation Protection</span>
                <span className="text-white font-bold">99.9% effective</span>
              </div>
            </div>
          </div>
