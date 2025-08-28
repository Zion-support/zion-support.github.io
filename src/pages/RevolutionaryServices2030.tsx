import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Rocket,
  Zap,
  Cpu,
  Shield,
  Lock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Award,
  Database,
  Network,
  Bot,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe,
  Leaf,
  Satellite,
  Microscope,
  BarChart3,
  Workflow,
  Globe2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function RevolutionaryServices2030() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'blockchain' | 'cybersecurity'>('all');

  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'from-cyan-500 to-purple-500',
      services: [
        {
          name: 'AI-Powered Business Intelligence',
          description: 'Advanced analytics and insights powered by artificial intelligence',
          price: '$15,000',
          features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards']
        },
        {
          name: 'Machine Learning Platform',
          description: 'Enterprise-grade ML platform for custom model development',
          price: '$25,000',
          features: ['Model Training', 'AutoML', 'Deployment Tools']
        }
      ]
    },
    {
      category: 'Blockchain Solutions',
      icon: Shield,
      color: 'from-purple-500 to-blue-500',
      services: [
        {
          name: 'Smart Contract Development',
          description: 'Custom smart contracts for blockchain applications',
          price: '$20,000',
          features: ['Solidity Development', 'Security Audits', 'Testing Framework']
        },
        {
          name: 'DeFi Platform',
          description: 'Decentralized finance platform with advanced features',
          price: '$35,000',
          features: ['Liquidity Pools', 'Yield Farming', 'Governance']
        }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Lock,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Zero-Trust Security',
          description: 'Comprehensive zero-trust security framework implementation',
          price: '$30,000',
          features: ['Identity Management', 'Access Control', 'Threat Detection']
        },
        {
          name: 'Incident Response Platform',
          description: 'AI-powered security incident detection and response',
          price: '$22,000',
          features: ['Real-time Monitoring', 'Automated Response', 'Forensics']
        }
      ]
    }
  ];

  const getFilteredServices = () => {
    if (activeTab === 'all') {
      return services.flatMap(category => category.services);
    }
    const categoryMap = { ai: 'AI Services', blockchain: 'Blockchain Solutions', cybersecurity: 'Cybersecurity' };
    return services.find(cat => cat.category === categoryMap[activeTab])?.services || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Revolutionary Services 2030 - Zion Tech Group"
        description="Discover our revolutionary AI, blockchain, cybersecurity, and emerging technology services that will transform your business in 2030 and beyond."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Revolutionary Services 2030</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Future of Technology
              </span>
              <br />
              <span className="text-white">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our groundbreaking AI, blockchain, cybersecurity, and emerging technology services.
              Transform your business with solutions that were once science fiction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { label: 'Total Services', value: '6', icon: Zap },
                { label: 'Innovation Level', value: 'Revolutionary', icon: Star },
                { label: 'Market Size', value: '$100B+', icon: TrendingUp },
                { label: 'Success Rate', value: '99.9%', icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Services', count: services.flatMap(cat => cat.services).length },
              { id: 'ai', label: 'AI Services', count: services.find(cat => cat.category === 'AI Services')?.services.length || 0 },
              { id: 'blockchain', label: 'Blockchain', count: services.find(cat => cat.category === 'Blockchain Solutions')?.services.length || 0 },
              { id: 'cybersecurity', label: 'Cybersecurity', count: services.find(cat => cat.category === 'Cybersecurity')?.services.length || 0 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredServices().map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-200"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the revolution and be among the first to experience the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}