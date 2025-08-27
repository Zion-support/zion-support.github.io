import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const NotFound = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* 404 Number */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
            404
          </motion.div>
          {/* Error Message */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-4xl md:text-6xl font-bold text-white mb-6">
            Page Not Found
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to exploring our amazing services.
          </motion.p>
          {/* Navigation Options */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="space-y-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/" className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Go Home
                </h3>
                <p className="text-gray-400 text-sm">
                  Return to our homepage and explore our services
                </p>
              </Link>
              <Link to="/services" className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Our Services
                </h3>
                <p className="text-gray-400 text-sm">
                  Discover what we can do for your business
                </p>
              </Link>
              <Link to="/contact" className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-gray-400 text-sm">
                  Get in touch with our team for assistance
                </p>
              </Link>
            </div>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Back to Homepage
            </Link>
            <Link to="/contact" className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Need Help?
            </Link>
          </motion.div>
          {/* Additional Help */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-16 p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Still Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-400 mb-4">
              Our team is here to help. Contact us directly and we'll guide you to the right place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>);
};
export default NotFound;
