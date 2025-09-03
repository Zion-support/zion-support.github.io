import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  TrendingUp, 
  Target,
  BarChart3,
  GraduationCap,
  FileText,
  Settings,
  Star,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content generation' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', description: 'Smart project optimization' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', description: 'Advanced threat detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', description: 'AI-powered trading solutions' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', description: 'Healthcare insights platform' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      description: 'Scalable cloud infrastructure and development operations',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Edge computing solutions' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      description: 'Digital transformation and innovative technology solutions',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart devices & networks' },
        { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & Smart Contracts' }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      description: 'Advanced security solutions and regulatory compliance',
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Comprehensive security' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-gen quantum computing' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Sparkles,
      color: 'from-yellow-600 to-orange-600',
      description: 'Next-generation technology solutions',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space tech innovations' },
        { name: 'Green IT Solutions', href: '/services/green-it', description: 'Sustainable technology' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech', description: 'Healthcare innovations' },
        { name: 'Sustainability Solutions', href: '/services/sustainability', description: 'Environmental tech' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-teal-600 to-cyan-600',
      description: 'Scalable software-as-a-service solutions',
      services: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', description: 'Prioritize deals with ML' },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', description: '24/7 on-site assistant' },
        { name: 'RAG Search Platform', href: '/services/rag-search', description: 'AI answers with citations' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', description: 'Train, deploy, monitor' },
        { name: 'E-commerce Personalization', href: '/services/ecommerce-personalization', description: 'Recos & search' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Faster replies, CRM logging' }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Sales Automation Suite',
      href: '/innovative-services-showcase-2025',
      icon: TrendingUp,
      description: 'Complete sales automation platform',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Quantum AI Hybrid Platform',
      href: '/revolutionary-services-2030',
      icon: Star,
      description: 'Next-generation quantum computing',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'AI Healthcare Analytics',
      href: '/services/ai-healthcare-analytics-platform',
      icon: Heart,
      description: 'Advanced healthcare insights',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Digital Twin Solutions',
      href: '/services/digital-twin',
      icon: Rocket,
      description: 'Simulation and monitoring',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const stats = [
    { value: '50+', label: 'Services Available', icon: Zap },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '500+', label: 'Global Clients', icon: Users }
  ];

  return (
    <>
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of all our AI, cloud, cybersecurity, and digital transformation services. Discover innovative solutions for your business needs."
        canonical="/services-overview"
        url="https://ziontechgroup.com/services-overview"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href} className="block">
                  <div className="bg-slate-800 rounded-xl p-6 h-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Complete Service Portfolio</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-900 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                    >
                      <Link to={service.href} className="block">
                        <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300 group">
                          <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-slate-300">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let our experts help you choose the right services and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}