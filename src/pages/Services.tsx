import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Atom, 
  Network, 
  Eye, 
  PenTool, 
  Lock, 
  BarChart3, 
  Rocket, 
  Heart, 
  ShoppingCart, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Globe, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Settings, 
  Server, 
  Smartphone, 
  FileText, 
  Target,
  Sparkles,
  Flame,
  Infinity,
  Workflow,
  Database,
  Code,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow as WorkflowIcon
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-cyan-400 to-blue-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-400 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-400 to-purple-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-400 to-cyan-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-400 to-orange-500' },
    { id: 'iot', name: 'IoT & Edge', icon: Network, color: 'from-green-400 to-emerald-500' },
    { id: 'microsaas', name: 'Micro SaaS', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, color: 'from-teal-400 to-cyan-500' },
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced AI-powered analytics and business intelligence solutions that transform your data into actionable insights.',
      category: 'ai',
      icon: Brain,
      features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Insights', 'Custom AI Dashboards'],
      path: '/services/ai-business-intelligence',
      featured: true,
      price: 'Starting at $5,000/month'
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      description: 'Automated regulatory compliance monitoring and reporting using advanced AI algorithms.',
      category: 'ai',
      icon: Shield,
      features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Compliance Tracking'],
      path: '/services/ai-compliance-assistant',
      featured: false,
      price: 'Starting at $3,000/month'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'Intelligent sales optimization and lead generation powered by artificial intelligence.',
      category: 'ai',
      icon: Users,
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
      path: '/services/ai-sales-copilot',
      featured: true,
      price: 'Starting at $4,000/month'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Automated content creation for marketing, blogs, and social media using advanced language models.',
      category: 'ai',
      icon: PenTool,
      features: ['Content Creation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Consistency'],
      path: '/services/ai-content-generator',
      featured: false,
      price: 'Starting at $2,500/month'
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Platform',
      description: 'Comprehensive AI solutions for healthcare providers, including diagnostics and patient care optimization.',
      category: 'ai',
      icon: Heart,
      features: ['Medical Imaging AI', 'Patient Risk Assessment', 'Treatment Optimization', 'Healthcare Analytics'],
      path: '/services/ai-healthcare-platform',
      featured: true,
      price: 'Starting at $15,000/month'
    },

    // Quantum Computing Services
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for complex computational challenges and optimization problems.',
      category: 'quantum',
      icon: Atom,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Quantum Simulation'],
      path: '/services/quantum-computing',
      featured: true,
      price: 'Starting at $25,000/month'
    },
    {
      id: 'quantum-machine-learning',
      name: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for superior pattern recognition and data processing.',
      category: 'quantum',
      icon: Brain,
      features: ['Quantum Neural Networks', 'Enhanced ML Models', 'Quantum Feature Selection', 'Hybrid Quantum-Classical'],
      path: '/services/quantum-machine-learning',
      featured: false,
      price: 'Starting at $20,000/month'
    },

    // Cloud & DevOps Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps Services',
      description: 'Comprehensive cloud infrastructure and DevOps automation for scalable, reliable applications.',
      category: 'cloud',
      icon: Cloud,
      features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Cloud Migration', 'Auto-scaling'],
      path: '/services/cloud-devops',
      featured: true,
      price: 'Starting at $8,000/month'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Solutions',
      description: 'Enterprise-grade IT infrastructure design, implementation, and management services.',
      category: 'cloud',
      icon: Server,
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      path: '/services/it-infrastructure',
      featured: false,
      price: 'Starting at $6,000/month'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Strategic technology consulting to modernize and optimize your business operations.',
      category: 'cloud',
      icon: Rocket,
      features: ['Technology Strategy', 'Process Optimization', 'Change Management', 'Digital Innovation'],
      path: '/services/digital-transformation',
      featured: true,
      price: 'Starting at $12,000/month'
    },

    // Cybersecurity Services
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      category: 'security',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Auditing', 'Incident Response'],
      path: '/services/cybersecurity',
      featured: true,
      price: 'Starting at $7,000/month'
    },
    {
      id: 'zero-trust-network',
      name: 'Zero Trust Network Access',
      description: 'Advanced zero trust security architecture for modern enterprise networks.',
      category: 'security',
      icon: Lock,
      features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Access Control'],
      path: '/services/zero-trust-network-access',
      featured: false,
      price: 'Starting at $9,000/month'
    },

    // IoT & Edge Computing Services
    {
      id: 'iot-edge-computing',
      name: 'IoT & Edge Computing',
      description: 'Smart device networks and edge computing solutions for real-time data processing.',
      category: 'iot',
      icon: Network,
      features: ['IoT Platform Development', 'Edge Computing', 'Sensor Networks', 'Real-time Analytics'],
      path: '/services/iot-edge-computing',
      featured: true,
      price: 'Starting at $10,000/month'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'AI-powered predictive maintenance solutions to optimize equipment performance and reduce downtime.',
      category: 'iot',
      icon: TrendingUp,
      features: ['Equipment Monitoring', 'Predictive Analytics', 'Maintenance Scheduling', 'Performance Optimization'],
      path: '/services/ai-predictive-maintenance',
      featured: false,
      price: 'Starting at $8,500/month'
    },

    // Micro SaaS Services
    {
      id: 'micro-saas-solutions',
      name: 'Micro SaaS Platform',
      description: 'Niche software solutions designed for specific business needs and market segments.',
      category: 'microsaas',
      icon: ShoppingCart,
      features: ['Custom Development', 'Scalable Architecture', 'Multi-tenant Support', 'API Integration'],
      path: '/services/micro-saas-solutions',
      featured: true,
      price: 'Starting at $15,000/month'
    },
    {
      id: 'micro-crm',
      name: 'Micro CRM Solutions',
      description: 'Customer relationship management solutions tailored for small to medium businesses.',
      category: 'microsaas',
      icon: Users,
      features: ['Contact Management', 'Sales Tracking', 'Customer Analytics', 'Automation'],
      path: '/services/micro-crm',
      featured: false,
      price: 'Starting at $3,500/month'
    },
    {
      id: 'helpdesk-platform',
      name: 'Helpdesk Platform',
      description: 'Comprehensive customer support and helpdesk management system.',
      category: 'microsaas',
      icon: MessageCircle,
      features: ['Ticket Management', 'Knowledge Base', 'Customer Portal', 'Analytics'],
      path: '/services/helpdesk',
      featured: false,
      price: 'Starting at $2,500/month'
    },

    // Data & Analytics Services
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions for informed decision-making.',
      category: 'data',
      icon: BarChart3,
      features: ['Data Visualization', 'Business Intelligence', 'Performance Metrics', 'Custom Dashboards'],
      path: '/services/data-analytics',
      featured: true,
      price: 'Starting at $6,500/month'
    },
    {
      id: 'website-analytics',
      name: 'Website Analytics',
      description: 'Privacy-first website analytics and performance tracking solutions.',
      category: 'data',
      icon: Globe,
      features: ['Privacy Compliance', 'Performance Tracking', 'User Behavior', 'Conversion Analytics'],
      path: '/services/website-analytics',
      featured: false,
      price: 'Starting at $1,500/month'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const featuredServices = allServices.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI, quantum computing, cybersecurity, and technology services designed to transform your business."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Cutting-Edge</span>
              <br />Technology
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              From AI and quantum computing to cybersecurity and cloud solutions, 
              we provide the technology expertise you need to stay ahead of the competition.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={service.path}
                  className="block p-6 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-200 hover:bg-slate-800/50 hover:scale-105 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-lg flex items-center justify-center group-hover:from-cyan-400/60 group-hover:to-blue-500/60 transition-all duration-200">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                        <span className="ml-2 inline-block w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400'
                    : 'border-slate-700/50 text-slate-300 hover:border-cyan-400/50 hover:bg-slate-800/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={service.path}
                  className="block p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200 hover:bg-slate-800/50 hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-400 text-sm">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-xs text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation First',
                description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our specialists bring years of experience and deep technical knowledge.'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable business value and ROI for our clients.'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality assurance processes ensure reliable solutions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
            >
              Contact Us
            </Link>
            <Link
              to="/request-quote"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

