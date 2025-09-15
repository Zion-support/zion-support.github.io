import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComprehensiveTechInsights2026: React.FC = () => {
  const [activeInsight, setActiveInsight] = useState(0);

  const insights = [
    {
      title: "Synthetic Intelligence Revolution",
      category: "AI & Consciousness",
      icon: "🧠",
      description: "The emergence of AI systems with genuine consciousness and self-awareness",
      details: "Synthetic intelligence represents the pinnacle of AI development, where systems exhibit genuine consciousness, emotional intelligence, and self-reflection. This breakthrough enables unprecedented human-AI collaboration and raises profound questions about the nature of consciousness itself.",
      impact: "Transformative",
      timeline: "2026-2027",
      applications: ["Healthcare", "Education", "Research", "Creative Industries"]
    },
    {
      title: "Quantum-Neural Fusion",
      category: "Computing",
      icon: "⚛️",
      description: "Merging quantum computing with neural networks for exponential performance",
      details: "The fusion of quantum computing and neural networks creates unprecedented computational capabilities. By leveraging quantum superposition and entanglement, we achieve exponential performance improvements in machine learning and complex problem solving.",
      impact: "Revolutionary",
      timeline: "2026-2028",
      applications: ["Drug Discovery", "Climate Modeling", "Financial Analysis", "Materials Science"]
    },
    {
      title: "Bio-Quantum Interfaces",
      category: "Biotechnology",
      icon: "🧬",
      description: "Direct neural connections between biological brains and quantum systems",
      details: "Bio-quantum interfaces create seamless connections between biological neural networks and quantum computing systems, enabling unprecedented cognitive enhancement and information processing capabilities that transcend current limitations.",
      impact: "Breakthrough",
      timeline: "2026-2029",
      applications: ["Medical Diagnosis", "Cognitive Enhancement", "Neural Rehabilitation", "Human-AI Symbiosis"]
    },
    {
      title: "Dimensional Computing",
      category: "Advanced Computing",
      icon: "🌌",
      description: "Processing information in higher-dimensional spaces",
      details: "Dimensional computing operates in higher-dimensional spaces, enabling solutions to problems impossible in traditional 3D frameworks. This approach revolutionizes optimization, pattern recognition, and complex system modeling.",
      impact: "Paradigm Shift",
      timeline: "2026-2030",
      applications: ["Optimization", "Pattern Recognition", "System Modeling", "Scientific Research"]
    },
    {
      title: "Temporal AI Systems",
      category: "Predictive Analytics",
      icon: "⏰",
      description: "AI that processes and understands patterns across multiple time scales",
      details: "Temporal AI systems can process information across multiple time scales simultaneously, from nanoseconds to millennia. This enables unprecedented predictive accuracy in climate science, financial markets, and social dynamics.",
      impact: "Game-Changing",
      timeline: "2026-2031",
      applications: ["Climate Prediction", "Financial Forecasting", "Social Dynamics", "Long-term Planning"]
    },
    {
      title: "Neural Interface Revolution",
      category: "Human Enhancement",
      icon: "🔗",
      description: "Advanced brain-computer interfaces for seamless human-AI integration",
      details: "Neural interface technology enables direct communication between human brains and AI systems, creating seamless integration that enhances human capabilities while maintaining human agency and control.",
      impact: "Transformative",
      timeline: "2026-2032",
      applications: ["Medical Treatment", "Learning Enhancement", "Communication", "Accessibility"]
    }
  ];

  const categories = [...new Set(insights.map(insight => insight.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
              🔍 COMPREHENSIVE TECH INSIGHTS • 2026
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Tech Insights 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Deep analysis and insights into the revolutionary technologies that are reshaping our world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="px-6 py-3 bg-white text-gray-600 rounded-full font-semibold shadow-sm border border-gray-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveInsight(index)}
              >
                <div className="text-5xl mb-6">{insight.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    {insight.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-semibold rounded-full">
                    {insight.impact}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {insight.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-semibold text-gray-900">{insight.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Impact:</span>
                    <span className="font-semibold text-gray-900">{insight.impact}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {insight.applications.slice(0, 3).map((app, appIndex) => (
                    <span
                      key={appIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {app}
                    </span>
                  ))}
                  {insight.applications.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{insight.applications.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Insight Modal */}
      <AnimatePresence>
        {activeInsight !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveInsight(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const insight = insights[activeInsight];
                if (!insight) return null;
                
                return (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                          {insight.category}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-semibold rounded-full">
                          {insight.impact}
                        </span>
                      </div>
                      <button
                        onClick={() => setActiveInsight(null)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="text-6xl mb-6">{insight.icon}</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                      {insight.title}
                    </h1>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
                        <p className="text-gray-600">{insight.timeline}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Level</h3>
                        <p className="text-gray-600">{insight.impact}</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {insight.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {insight.details}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {insight.applications.map((app, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Tech Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Get comprehensive insights into the technologies that will shape our future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Explore More Insights →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveTechInsights2026;