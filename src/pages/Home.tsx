import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { usePerformance } from '../hooks/usePerformance';

const Home: React.FC = () => {
  usePerformance();

  return (
    <>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability."
        keywords="AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation"
        url="/"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading AI-powered technology solutions for modern businesses. 
                Transform your digital future with cutting-edge innovation and enterprise-grade reliability.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-2xl inline-block hover:scale-105"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl inline-block hover:scale-105"
                >
                  Start Your Journey Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;