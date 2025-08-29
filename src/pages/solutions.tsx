import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Building, 
  Zap, 
  Globe,
  Cpu,
  Lock,
  Server,
  Database,
  Network,
  Smartphone,
  Car,
  Factory,
  ShoppingCart,
  CreditCard,
  GraduationCap,
  FlaskConical
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Solutions() {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      solutions: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with our AI-powered analytics platform',
          href: '/services/ai-business-intelligence',
          features: ['Machine Learning Models', 'Real-time Analytics', 'Predictive Insights', 'Custom Dashboards']
        },
        {
          name: 'Digital Transformation',
          description: 'Modernize your business processes with cutting-edge digital solutions',
          href: '/services/digital-transformation',
          features: ['Process Automation', 'Legacy System Migration', 'Cloud Integration', 'Change Management']
        },
        {
          name: 'IT Infrastructure',
          description: 'Build a robust, scalable IT foundation for your enterprise',
          href: '/services/it-infrastructure',
          features: ['Network Design', 'Server Management', 'Security Implementation', 'Performance Optimization']
        }
      ]
    },
    {
      category: 'Industry Solutions',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      solutions: [
        {
          name: 'Healthcare Technology',
          description: 'AI-powered healthcare solutions for improved patient care and operational efficiency',
          href: '/services/healthcare-tech',
          features: ['Patient Analytics', 'Diagnostic AI', 'Workflow Optimization', 'Compliance Management']
        },
        {
          name: 'Financial Services',
          description: 'Secure, compliant financial technology solutions for modern banking',
          href: '/services/finops-advisor',
          features: ['Risk Management', 'Compliance Automation', 'Fraud Detection', 'Performance Analytics']
        },
        {
          name: 'Manufacturing',
          description: 'Smart manufacturing solutions with IoT and AI integration',
          href: '/services/digital-twin',
          features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Real-time Monitoring']
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-purple-600 to-pink-600',
      solutions: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation computational power for complex problem-solving',
          href: '/services/quantum-computing-solutions',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Scientific Computing']
        },
        {
          name: 'Edge Computing',
          description: 'Ultra-low latency processing at the network edge',
          href: '/services/edge-computing-platform',
          features: ['Real-time Processing', 'Local Data Analysis', 'Reduced Latency', 'Bandwidth Optimization']
        },
        {
          name: 'Blockchain Solutions',
          description: 'Secure, transparent blockchain technology for enterprise applications',
          href: '/services/blockchain-enterprise-solutions',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'DeFi Solutions']
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered diagnostics, patient care optimization, and healthcare analytics',
      href: '/solutions/healthcare',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Finance',
      icon: CreditCard,
      description: 'Secure financial technology, compliance automation, and risk management',
      href: '/solutions/finance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing, IoT integration, and predictive maintenance',
      href: '/solutions/manufacturing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'E-commerce optimization, customer analytics, and supply chain management',
      href: '/solutions/retail',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Learning management systems, student analytics, and educational technology',
      href: '/solutions/education',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Transportation',
      icon: Car,
      description: 'Fleet management, route optimization, and autonomous vehicle technology',
      href: '/solutions/transportation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover comprehensive enterprise solutions and industry-specific technology offerings from Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Enterprise Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Transform your business with cutting-edge technology solutions designed for the modern enterprise
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services-overview"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Comprehensive Solution Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.solutions.map((solution) => (
                    <div key={solution.name} className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{solution.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{solution.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {solution.features.map((feature) => (
                          <span key={feature} className="text-xs bg-slate-600 text-gray-300 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={solution.href}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                      >
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Industry-Specific Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} mb-4`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                <Link
                  to={solution.href}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 group-hover:text-blue-300"
                >
                  Explore Solutions →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let our experts help you choose the right solutions for your specific needs
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
