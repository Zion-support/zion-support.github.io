import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Flask, Brain, Rocket, Globe, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
export default function ResearchDevelopment() {
  const researchAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Cutting-edge AI research in machine learning, neural networks, and cognitive computing',
      focus: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning'],
      href: '/services/ai-business-intelligence'
    },
    {
      icon: Rocket,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing research and development',
      focus: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Simulation'],
      href: '/services/quantum-computing-solutions'
    },
    {
      icon: Globe,
      title: 'Edge Computing',
      description: 'Research in distributed computing and edge intelligence',
      focus: ['Edge AI', 'IoT Integration', '5G Networks', 'Distributed Systems'],
      href: '/services/edge-computing-platform'
    },
    {
      icon: Flask,
      title: 'Biotechnology',
      description: 'AI-powered biotechnology research and development',
      focus: ['Drug Discovery', 'Genomics', 'Bioinformatics', 'Precision Medicine'],
      href: '/services/ai-healthcare-analytics'
    },
    {
      icon: Users,
      title: 'Human-Computer Interaction',
      description: 'Research in user experience and human-centered AI',
      focus: ['UX Design', 'Accessibility', 'Virtual Reality', 'Augmented Reality'],
      href: '/services/ai-customer-experience-platform'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Technology',
      description: 'Green technology research and environmental solutions',
      focus: ['Renewable Energy', 'Carbon Capture', 'Smart Cities', 'Environmental Monitoring'],
      href: '/services/sustainability'
    }
  ];
  const capabilities = [
    'Advanced AI/ML Research',
    'Quantum Computing Development',
    'Biotechnology Innovation',
    'Edge Computing Solutions',
    'Human-Computer Interaction',
    'Sustainable Technology'
  ];
  const partnerships = [
    'Academic Institutions',
    'Research Organizations',
    'Government Agencies',
    'Industry Partners',
    'Startup Incubators',
    'Technology Companies'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Leading-edge research and development in AI, quantum computing, and emerging technologies. Discover our innovative R&D initiatives and partnerships."
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research & Development for
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Tomorrow
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pushing the boundaries of technology through cutting-edge research in AI, 
              quantum computing, and emerging technologies that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Collaborate with Us
              </a>
              <a
                href="/services-overview"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300"
              >
                Explore Research Areas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Research Areas Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our R&D initiatives span cutting-edge technologies and emerging fields, 
              driving innovation and discovery across multiple domains.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {area.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Research Focus:</h4>
                  <ul className="space-y-1">
                    {area.focus.map((focus, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={area.href}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              R&D Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our research and development capabilities enable us to tackle complex 
              challenges and drive innovation across multiple technology domains.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{capability}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnerships Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Partnerships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading institutions, organizations, and companies 
              to advance technology research and drive innovation.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Advance Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in pushing the boundaries of technology through innovative 
              research and development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Collaborate with Us
              </a>
              <a
                href="/services-overview"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Explore Research Areas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
