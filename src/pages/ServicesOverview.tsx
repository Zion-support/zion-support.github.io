import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Zap, 
  Server, 
  Atom, 
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  DollarSign
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const ServicesOverview: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Intelligent Process Automation' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance', description: 'AI-Powered Data Protection' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', description: 'Proactive Customer Engagement' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Scalable cloud infrastructure and development operations',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' }
      ]
    },
    {
      title: 'Edge & IoT Services',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      description: 'Next-generation edge computing and IoT solutions',
      services: [
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', description: 'Smart Devices & Networks' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Ultra-Low Latency Processing' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security and regulatory compliance solutions',
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Comprehensive security' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      description: 'End-to-end digital transformation services',
      services: [
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business transformation' },
        { name: 'IT Consulting', href: '/services/it-consulting', description: 'Strategic IT guidance' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-yellow-600 to-orange-600',
      description: 'Cutting-edge quantum and space technologies',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Quantum AI solutions' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space tech innovations' }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Autonomous Business Operations',
      href: '/services/ai-autonomous-business-operations',
      description: 'Fully autonomous business operations powered by AI',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Micro SaaS Solutions',
      href: '/services/micro-saas-solutions',
      description: 'Scalable software solutions for niche markets',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'AI Customer Experience Platform',
      href: '/services/ai-customer-experience-platform',
      description: 'AI-powered customer experience optimization',
      icon: Users,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of all AI-powered technology services and solutions offered by Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Complete
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered technology solutions designed to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Services by Category</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive service portfolio organized by technology category.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-slate-400 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Let's discuss how our services can transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/request-quote"
                className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Request Quote</h3>
                <p className="text-slate-300 text-center text-sm">Get custom pricing for your specific needs</p>
              </Link>
              
              <Link
                to="/contact"
                className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-slate-300 text-center text-sm">Speak with our technology experts</p>
              </Link>
              
              <Link
                to="/pricing"
                className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">View Pricing</h3>
                <p className="text-slate-300 text-center text-sm">Explore our transparent pricing structure</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;