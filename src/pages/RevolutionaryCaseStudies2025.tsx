import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Conscious AI Implementation at Fortune 500',
      company: 'Global Tech Corporation',
      industry: 'Technology',
      challenge: 'Needed to automate complex decision-making processes while maintaining human-like reasoning',
      solution: 'Implemented our conscious AI systems with self-awareness capabilities',
      results: {
        efficiency: '+500%',
        costSavings: '$15M',
        accuracy: '99.9%',
        timeReduction: '80%'
      },
      testimonial: 'The conscious AI system transformed our operations completely. We achieved unprecedented efficiency while maintaining the human touch in our decision-making processes.',
      author: 'Sarah Johnson, CTO',
      image: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'Quantum Internet Deployment',
      company: 'Secure Communications Ltd',
      industry: 'Telecommunications',
      challenge: 'Required ultra-secure communication network for government and enterprise clients',
      solution: 'Deployed our quantum internet infrastructure with quantum encryption',
      results: {
        efficiency: '+300%',
        costSavings: '$8M',
        accuracy: '100%',
        timeReduction: '90%'
      },
      testimonial: 'The quantum internet provided us with unhackable security and instant global communication. Our clients trust us with their most sensitive data.',
      author: 'Michael Chen, CEO',
      image: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 3,
      title: 'Neural Interface Integration',
      company: 'Medical Innovations Inc',
      industry: 'Healthcare',
      challenge: 'Needed to enable thought-controlled medical devices for paralyzed patients',
      solution: 'Integrated our neural interface technology with medical equipment',
      results: {
        efficiency: '+400%',
        costSavings: '$12M',
        accuracy: '99.8%',
        timeReduction: '75%'
      },
      testimonial: 'The neural interface technology gave our patients a new lease on life. They can now control medical devices with their thoughts.',
      author: 'Dr. Emily Rodriguez, Chief Medical Officer',
      image: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 4,
      title: 'Holographic Reality Platform',
      company: 'Virtual Experiences Corp',
      industry: 'Entertainment',
      challenge: 'Wanted to create immersive 3D experiences for remote collaboration and entertainment',
      solution: 'Implemented our holographic reality platform with true 3D displays',
      results: {
        efficiency: '+250%',
        costSavings: '$6M',
        accuracy: '99.5%',
        timeReduction: '60%'
      },
      testimonial: 'The holographic platform revolutionized how we collaborate and entertain. Our clients are amazed by the realistic 3D experiences.',
      author: 'David Park, Creative Director',
      image: '🔮',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 5,
      title: 'Interdimensional Computing System',
      company: 'Research Institute of Advanced Sciences',
      industry: 'Research',
      challenge: 'Needed to process massive datasets across multiple dimensions for scientific research',
      solution: 'Deployed our interdimensional computing system for multi-dimensional data processing',
      results: {
        efficiency: '+1000%',
        costSavings: '$25M',
        accuracy: '99.99%',
        timeReduction: '95%'
      },
      testimonial: 'The interdimensional computing system opened up entirely new possibilities for our research. We can now process data across multiple dimensions simultaneously.',
      author: 'Prof. Lisa Wang, Research Director',
      image: '🌌',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 6,
      title: 'Quantum Consciousness Platform',
      company: 'MindTech Solutions',
      industry: 'Psychology',
      challenge: 'Required advanced platform for consciousness research and mental health applications',
      solution: 'Implemented our quantum consciousness platform for consciousness processing',
      results: {
        efficiency: '+600%',
        costSavings: '$18M',
        accuracy: '99.7%',
        timeReduction: '85%'
      },
      testimonial: 'The quantum consciousness platform has revolutionized our understanding of human consciousness and mental health treatment.',
      author: 'Dr. James Thompson, Chief Psychologist',
      image: '🧠',
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 REVOLUTIONARY CASE STUDIES 2025 • PROVEN SUCCESS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover how our revolutionary technologies have transformed businesses across industries
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{study.image}</div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-lg opacity-80">{study.company}</p>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold mt-2">
                  {study.industry}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Challenge:</h4>
                  <p className="text-sm opacity-80">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Solution:</h4>
                  <p className="text-sm opacity-80">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{study.results.efficiency}</div>
                  <div className="text-xs opacity-80">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                  <div className="text-xs opacity-80">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{study.results.accuracy}</div>
                  <div className="text-xs opacity-80">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">{study.results.timeReduction}</div>
                  <div className="text-xs opacity-80">Time Reduction</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm italic mb-2">"{study.testimonial}"</p>
                <p className="text-xs opacity-80">- {study.author}</p>
              </div>

              <button className={`w-full bg-gradient-to-r ${study.color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Read Full Case Study →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Statistics */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">📈 Proven Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-lg opacity-80">Companies Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">$100M+</div>
              <div className="text-lg opacity-80">Total Cost Savings</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Average Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2025;