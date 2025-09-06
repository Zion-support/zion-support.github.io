<<<<<<< HEAD:src/pages/Home.tsx
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
=======
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { usePerformance } from '../hooks/usePerformance';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Home.tsx
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
=======
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, web development, and cybersecurity solutions."
        keywords="technology solutions, AI, cloud computing, web development, cybersecurity"
      />
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl"
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading technology solutions for modern businesses. Transform your digital presence with our cutting-edge services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border border-gray-300 hover:border-gray-400 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Services Preview */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive technology solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & ML</h3>
              <p className="text-blue-100">Advanced artificial intelligence solutions</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Cloud</h3>
              <p className="text-green-100">Scalable cloud infrastructure</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-white mb-2">Web Dev</h3>
              <p className="text-purple-100">Modern web applications</p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-600 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
              <p className="text-red-100">Comprehensive cybersecurity</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </div>
  );
};
<<<<<<< HEAD:src/pages/Home.tsx

=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Home.tsx
export default Home;