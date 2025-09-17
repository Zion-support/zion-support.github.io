import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveServices2028Banner: React.FC = () => {
  const services = [
    { name: "AI Business Transformation", icon: "🤖", price: "$50K/month" },
    { name: "Quantum Computing Solutions", icon: "⚡", price: "Custom" },
    { name: "Neural Interface Development", icon: "🧠", price: "$100K/project" },
    { name: "Holographic Reality Systems", icon: "🌟", price: "$75K/system" },
    { name: "Synthetic Biology Solutions", icon: "🧬", price: "$200K/project" },
    { name: "Space Technology Integration", icon: "🚀", price: "Custom" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🚀</span>
          <h3 className="text-4xl font-bold">COMPREHENSIVE SERVICES 2028</h3>
          <span className="text-4xl animate-pulse">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-6xl mx-auto">
          Transform your business with our complete suite of advanced technology services. 
          From AI transformation to space technology, we provide end-to-end solutions for the future.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-8xl mx-auto mb-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h4 className="font-bold mb-1 text-sm">{service.name}</h4>
              <p className="text-xs opacity-90">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/20">
          <h4 className="text-2xl font-bold mb-4">Why Choose Our Services?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h5 className="font-bold mb-1">Proven Results</h5>
                <p className="text-sm opacity-90">300% average efficiency increase across all implementations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h5 className="font-bold mb-1">Fast Implementation</h5>
                <p className="text-sm opacity-90">3-6 months average deployment time</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h5 className="font-bold mb-1">24/7 Support</h5>
                <p className="text-sm opacity-90">Round-the-clock expert support and monitoring</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/ComprehensiveServicesShowcase2028" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30"
          >
            🚀 Explore All Services →
          </a>
          <a 
            href="/pages/UltimateTechShowcase2027" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30"
          >
            🌟 View Technologies →
          </a>
          <a 
            href="/pages/RevolutionaryTechBlog2027" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold border border-white/30"
          >
            📚 Read Insights →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ComprehensiveServices2028Banner;