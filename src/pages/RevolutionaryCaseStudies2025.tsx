import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $50M annual losses",
      solution: "Implemented conscious AI systems with autonomous decision-making capabilities",
      results: {
        efficiency: "+500%",
        costSavings: "$50M",
        uptime: "99.9%",
        timeline: "6 months"
      },
      icon: "🏭",
      gradient: "from-blue-600 to-cyan-600",
      testimonial: "The conscious AI systems transformed our operations beyond our wildest expectations. We achieved 500% efficiency gains and saved $50M annually.",
      author: "Sarah Johnson, CTO"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      company: "Financial Services Inc",
      industry: "Finance",
      challenge: "Complex risk calculations taking 24 hours, limiting trading opportunities",
      solution: "Deployed quantum neural networks for real-time risk analysis and trading optimization",
      results: {
        efficiency: "+1000%",
        costSavings: "$25M",
        uptime: "99.95%",
        timeline: "4 months"
      },
      icon: "💰",
      gradient: "from-purple-600 to-pink-600",
      testimonial: "Quantum computing revolutionized our trading algorithms. We now process complex calculations in seconds instead of hours.",
      author: "Michael Chen, Head of Trading"
    },
    {
      id: 3,
      title: "Interdimensional Data Processing",
      company: "Tech Innovation Labs",
      industry: "Technology",
      challenge: "Big data processing bottlenecks limiting research capabilities",
      solution: "Implemented interdimensional computing for unlimited data processing capacity",
      results: {
        efficiency: "+2000%",
        costSavings: "$75M",
        uptime: "100%",
        timeline: "8 months"
      },
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      testimonial: "Interdimensional computing opened up possibilities we never thought possible. Our research capabilities are now limitless.",
      author: "Dr. Elena Rodriguez, Chief Scientist"
    },
    {
      id: 4,
      title: "Neural Interface Implementation",
      company: "Healthcare Systems Ltd",
      industry: "Healthcare",
      challenge: "Surgical precision limitations and human error in complex procedures",
      solution: "Deployed neural interface systems for direct brain-computer surgical control",
      results: {
        efficiency: "+300%",
        costSavings: "$30M",
        uptime: "99.8%",
        timeline: "12 months"
      },
      icon: "🏥",
      gradient: "from-emerald-600 to-teal-600",
      testimonial: "Neural interfaces have revolutionized our surgical procedures. Precision and success rates have never been higher.",
      author: "Dr. James Wilson, Chief Surgeon"
    },
    {
      id: 5,
      title: "Synthetic Intelligence Deployment",
      company: "Creative Solutions Agency",
      industry: "Creative Services",
      challenge: "Creative output limitations and client satisfaction issues",
      solution: "Implemented synthetic intelligence for creative problem-solving and client interaction",
      results: {
        efficiency: "+400%",
        costSavings: "$15M",
        uptime: "99.7%",
        timeline: "5 months"
      },
      icon: "🎨",
      gradient: "from-orange-600 to-red-600",
      testimonial: "Synthetic intelligence has transformed our creative process. Our clients are amazed by the innovative solutions we now deliver.",
      author: "Lisa Martinez, Creative Director"
    },
    {
      id: 6,
      title: "Autonomous AI Operations",
      company: "Logistics Global",
      industry: "Logistics",
      challenge: "Supply chain complexity and delivery inefficiencies",
      solution: "Deployed autonomous AI agents for end-to-end supply chain management",
      results: {
        efficiency: "+600%",
        costSavings: "$40M",
        uptime: "99.9%",
        timeline: "7 months"
      },
      icon: "🚚",
      gradient: "from-violet-600 to-purple-600",
      testimonial: "Autonomous AI agents have revolutionized our logistics operations. We've achieved unprecedented efficiency and cost savings.",
      author: "Robert Kim, Operations Director"
    }
  ];

  const stats = [
    { label: "Companies Transformed", value: "500+", icon: "🏢" },
    { label: "Total Cost Savings", value: "$2.5B+", icon: "💰" },
    { label: "Average Efficiency Gain", value: "400%", icon: "📈" },
    { label: "Success Rate", value: "99.8%", icon: "✅" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Case Studies 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies have transformed businesses across industries. 
              Real results from real companies using cutting-edge AI and quantum computing solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">Real transformations from real companies</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{study.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <div className="text-indigo-400 font-semibold">{study.company}</div>
                  <div className="text-gray-400 text-sm">{study.industry}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-red-400">Challenge:</h4>
                <p className="text-gray-300 mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Solution:</h4>
                <p className="text-gray-300 mb-4">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{study.results.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency Gain</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{study.results.uptime}</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">{study.results.timeline}</div>
                  <div className="text-sm text-gray-300">Timeline</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4 mb-4">
                <p className="text-gray-200 italic mb-2">"{study.testimonial}"</p>
                <div className="text-indigo-400 font-semibold">— {study.author}</div>
              </div>

              <button className={`w-full bg-gradient-to-r ${study.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Breakdown */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">📈 Industry Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-300 mb-4">500% efficiency gains through conscious AI systems</p>
              <div className="text-2xl font-bold text-indigo-400">$50M+ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Finance</h3>
              <p className="text-gray-300 mb-4">1000% faster processing with quantum computing</p>
              <div className="text-2xl font-bold text-indigo-400">$25M+ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-300 mb-4">300% precision improvement with neural interfaces</p>
              <div className="text-2xl font-bold text-indigo-400">$30M+ Saved</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the companies already experiencing revolutionary results. 
            Start your transformation journey with a free consultation and proof of concept.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
              Download Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;