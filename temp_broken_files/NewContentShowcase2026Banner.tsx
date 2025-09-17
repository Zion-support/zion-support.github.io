// @ts-nocheck
import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function NewContentShowcase2026Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 NEW CONTENT SHOWCASE 2026
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover our latest AI-powered solutionsautomation toolsand cybersecurity services. 
            Transform your business with cutting-edge technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="/ai-powered-content-hub-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-xl font-semibold mb-2">AI Content Hub</h3>
                <p className="text-sm opacity-80">Revolutionary content creation and management</p>
              </div>
            </a>
            
            <a href="/ai-automation-solutions-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2">AI Automation</h3>
                <p className="text-sm opacity-80">Intelligent business process automation</p>
              </div>
            </a>
            
            <a href="/cybersecurity-solutions-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-sm opacity-80">Advanced threat protection and security</p>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ai-powered-content-hub-2026" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Explore All Solutions
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}