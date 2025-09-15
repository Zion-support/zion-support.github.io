import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveTechInsights2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold mb-6">
              🔍 COMPREHENSIVE TECH INSIGHTS 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Comprehensive Tech Insights
            </h1>
            <p className="text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
              Deep analysis of emerging technologies, market trends, and future predictions 
              that will shape the next decade of innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Revolution 2026",
                description: "Comprehensive analysis of artificial intelligence trends and breakthroughs",
                icon: "🧠",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                title: "Quantum Computing",
                description: "Breakthrough quantum technology solving impossible problems",
                icon: "⚡",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                title: "Neural Interfaces",
                description: "Direct brain-computer interfaces revolutionizing interaction",
                icon: "🧬",
                gradient: "from-emerald-600 to-teal-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-8 hover:scale-105 transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/90 mb-6">{item.description}</p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Ahead of the Technology Curve
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get exclusive access to our comprehensive technology insights and 
            stay informed about the latest trends and predictions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Subscribe to Insights
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-12 py-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 font-semibold text-lg">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2026;