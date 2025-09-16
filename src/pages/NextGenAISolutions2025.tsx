import React from 'react';
import { motion } from 'framer-motion';

const NextGenAISolutions2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN AI SOLUTIONS • 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Next-Generation AI Solutions
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI technologies that are transforming industries and creating unprecedented opportunities for business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Solutions
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary AI Capabilities</h2>
            <p className="text-xl text-gray-300">Cutting-edge AI technologies that deliver measurable business results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧠",
                title: "Autonomous AI Agents",
                description: "Self-managing AI systems that operate independently, making decisions and executing tasks without human intervention.",
                features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization"]
              },
              {
                icon: "⚡",
                title: "Real-time Processing",
                description: "Ultra-fast AI processing that delivers instant insights and responses for time-critical applications.",
                features: ["Sub-millisecond response", "Stream processing", "Edge computing"]
              },
              {
                icon: "🔮",
                title: "Predictive Analytics",
                description: "Advanced predictive models that forecast trends, behaviors, and outcomes with unprecedented accuracy.",
                features: ["95%+ accuracy", "Multi-variate analysis", "Scenario modeling"]
              },
              {
                icon: "🌐",
                title: "Natural Language Understanding",
                description: "Human-like comprehension of context, sentiment, and intent across multiple languages and dialects.",
                features: ["Multi-language support", "Context awareness", "Emotion detection"]
              },
              {
                icon: "🛡️",
                title: "Ethical AI Framework",
                description: "Built-in ethical guidelines ensuring fair, transparent, and responsible AI decision-making processes.",
                features: ["Bias detection", "Transparency reports", "Fairness metrics"]
              },
              {
                icon: "🔧",
                title: "Custom AI Models",
                description: "Tailored AI solutions designed specifically for your industry, use case, and business requirements.",
                features: ["Industry-specific training", "Custom algorithms", "Domain expertise"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-purple-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300">Real-world success stories from our AI implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300%",
                label: "Productivity Increase",
                company: "Fortune 500 Manufacturing",
                description: "Implemented autonomous AI agents that reduced operational costs by 40% and increased productivity by 300%."
              },
              {
                metric: "$2.5M",
                label: "Annual Savings",
                company: "Global Retail Chain",
                description: "AI-powered inventory optimization and demand forecasting saved $2.5M annually while reducing stockouts by 85%."
              },
              {
                metric: "99.9%",
                label: "Accuracy Rate",
                company: "Healthcare Provider",
                description: "AI diagnostic system achieved 99.9% accuracy in medical image analysis, reducing diagnostic time by 70%."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-2">{story.metric}</div>
                <div className="text-xl font-semibold text-white mb-2">{story.label}</div>
                <div className="text-purple-300 mb-4">{story.company}</div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our next-generation AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NextGenAISolutions2025;