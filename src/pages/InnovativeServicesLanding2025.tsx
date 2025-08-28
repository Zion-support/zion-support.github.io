import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Rocket, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Atom, 
  Cpu, 
  Network, 
  Database,
  TrendingUp,
  Users,
  Target,
  Globe,
  Code,
  Lock,
  Eye,
  Heart,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  HelpCircle,
  FileText,
  Truck,
  Mail,
  Smartphone,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  GitFork,
  Server,
  Building,
  Leaf,
  Satellite,
  Gamepad2,
  Coins,
  GraduationCap,
  Activity,
  Briefcase,
  Newspaper,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export default function InnovativeServicesLanding2025() {
  const featuredServices = [
    {
      name: 'AI Workflow Orchestrator',
      description: 'Intelligent process automation and workflow management',
      icon: Brain,
      category: 'AI & Machine Learning',
      features: ['Process Automation', 'Workflow Optimization', 'AI Decision Making', 'Integration Hub'],
      href: '/services/ai-workflow-orchestrator',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Cloud DevOps Platform',
      description: 'Streamlined development and operations',
      icon: Cloud,
      category: 'Cloud & Infrastructure',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      href: '/services/cloud-devops',
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'AI-powered threat detection and response',
      icon: Shield,
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance'],
      href: '/services/ai-cybersecurity-platform',
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing services',
      icon: Atom,
      category: 'Emerging Technologies',
      features: ['Quantum Algorithms', 'Optimization', 'Simulation', 'Research'],
      href: '/services/quantum-computing',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Micro CRM Platform',
      description: 'Customer relationship management for small businesses',
      icon: ShoppingCart,
      category: 'Micro SaaS Solutions',
      features: ['Contact Management', 'Sales Tracking', 'Customer Insights', 'Automation'],
      href: '/services/micro-crm',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'FinOps Advisor',
      description: 'Cloud cost optimization and management',
      icon: DollarSign,
      category: 'Cloud & Infrastructure',
      features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
      href: '/services/finops-advisor',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: ['AI Workflow Orchestrator', 'AI Data Governance', 'AI Customer Analytics', 'AI Project Management'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      services: ['Cloud DevOps', 'FinOps Advisor', 'IT Infrastructure', 'Microservices Architecture'],
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions for modern threats',
      services: ['AI Cybersecurity Platform', 'Zero Trust Network', 'Security Headers & CSP', 'Compliance Assistant'],
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Emerging Technologies',
      icon: Atom,
      description: 'Next-generation technology solutions',
      services: ['Quantum Computing', 'IoT Edge Computing', 'Digital Twin', 'Space Technology'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      description: 'Productized SaaS solutions for specific niches',
      services: ['Micro CRM', 'Website Analytics', 'Helpdesk Platform', 'Email Sequencer'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Digital Transformation',
      icon: Zap,
      description: 'End-to-end digital transformation services',
      services: ['Strategy Consulting', 'Process Optimization', 'Technology Implementation', 'Change Management'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                2025 Innovative
              </span>
              <br />
              <span className="text-white">Services Landing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary AI, cloud, and emerging technology services designed to transform your business in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative services that are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-medium">{service.category}</span>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group-hover:text-blue-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to start your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {contactInfo.email}
              </a>
            </div>
            <div className="text-blue-100">
              <p className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                {contactInfo.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                <a href={contactInfo.website} className="hover:underline">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category to find exactly what you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Category
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Innovation First',
                description: 'Leading-edge solutions that keep you ahead of the competition'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals with deep industry knowledge'
              },
              {
                icon: Shield,
                title: 'Trusted Partner',
                description: 'Reliable, secure, and scalable solutions you can count on'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Track record of successful implementations and ROI'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative services and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesLanding2025;