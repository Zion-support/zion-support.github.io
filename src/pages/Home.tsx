import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-slide-up">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <Link 
            to="/services" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Our Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2">AI Services</h3>
            <p className="text-gray-300">Transform your business with cutting-edge AI solutions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
            <p className="text-gray-300">Protect your digital assets with advanced security solutions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-300">Scale your operations with robust cloud solutions.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-300">Pioneering the next generation of technology.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <p className="text-gray-300">Team of industry-leading professionals.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Reliability</h3>
              <p className="text-gray-300">Trusted solutions for critical operations.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Scalability</h3>
              <p className="text-gray-300">Solutions designed to grow with you.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-300">Robust protection for all your data.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-300">24/7 dedicated customer assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}