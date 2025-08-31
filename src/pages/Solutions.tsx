import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  DollarSign, 
  Factory, 
  GraduationCap, 
  Shield,
  Brain,
  HardDrive,
  Leaf,
  Rocket,
  Zap,
  Users
} from 'lucide-react';

const Solutions = () => {
  const industrySolutions = [
    {
      title: 'Healthcare Solutions',
      description: 'AI-powered healthcare diagnostics, patient care optimization, and medical research acceleration.',
      icon: Heart,
      href: '/solutions/healthcare',
      features: ['AI Diagnostics', 'Patient Care Optimization', 'Medical Research', 'Healthcare Analytics']
    },
    {
      title: 'Financial Services',
      description: 'Advanced financial analytics, risk management, and trading optimization platforms.',
      icon: DollarSign,
      href: '/solutions/financial',
      features: ['Risk Management', 'Trading Analytics', 'Fraud Detection', 'Portfolio Optimization']
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing, predictive maintenance, and supply chain optimization.',
      icon: Factory,
      href: '/solutions/manufacturing',
      features: ['Predictive Maintenance', 'Supply Chain AI', 'Quality Control', 'Process Optimization']
    },
    {
      title: 'Education Technology',
      description: 'AI-powered learning platforms, student analytics, and educational content optimization.',
      icon: GraduationCap,
      href: '/solutions/education',
      features: ['Learning Analytics', 'Content Optimization', 'Student Success', 'Adaptive Learning']
    },
    {
      title: 'Government Solutions',
      description: 'Secure government systems, citizen services, and public sector digital transformation.',
      icon: Shield,
      href: '/solutions/government',
      features: ['Secure Systems', 'Citizen Services', 'Digital Transformation', 'Compliance']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Customer experience optimization, inventory management, and personalized marketing.',
      href: '/solutions/retail',
      features: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Omnichannel']
    }
  ];

  const technologySolutions = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      icon: Brain,
      href: '/solutions/quantum-computing',
      features: ['Quantum Algorithms', 'Hybrid Systems', 'Optimization', 'Simulation']
    },
    {
      title: 'Blockchain & DLT',
      description: 'Secure, transparent blockchain solutions for enterprise applications.',
      icon: Shield,
      href: '/solutions/blockchain',
      features: ['Smart Contracts', 'Supply Chain', 'Identity Management', 'DeFi Solutions']
    },
    {
      title: 'Space Technology',
      description: 'Innovative space technology solutions for exploration and commercial applications.',
      icon: Rocket,
      href: '/solutions/space-technology',
      features: ['Satellite Systems', 'Space Analytics', 'Exploration Tech', 'Commercial Space']
    },
    {
      title: 'Green Technology',
      description: 'Sustainable technology solutions for environmental impact reduction.',
      icon: Leaf,
      href: '/solutions/green-technology',
      features: ['Energy Efficiency', 'Carbon Reduction', 'Sustainable AI', 'Clean Tech']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry & Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions 
              tailored to your industry's unique challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized solutions designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {solution.icon && <solution.icon className="w-8 h-8 text-cyan-400 mr-3" />}
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technology Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology platforms that drive innovation and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  {solution.icon && <solution.icon className="w-10 h-10 text-purple-400 mr-4" />}
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{solution.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={solution.href}
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore Platform
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts help you identify the right solutions for your industry and technology needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
