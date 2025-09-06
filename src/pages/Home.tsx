import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">Zion Tech Group</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Projects Completed", icon: "🚀" },
              { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
              { number: "50+", label: "Expert Team Members", icon: "👥" },
              { number: "24/7", label: "Support Available", icon: "🛠️" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive business growth and innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.",
                icon: "🤖",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Cybersecurity",
                description: "Protect your digital assets with advanced security solutions, threat detection, and compliance management.",
                icon: "🔒",
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "Cloud Infrastructure",
                description: "Scale your operations with robust cloud solutions, migration services, and infrastructure optimization.",
                icon: "☁️",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust Zion Tech Group for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;