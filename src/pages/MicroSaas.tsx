import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';

const microSaasSolutions = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    description: 'Transform your business data into actionable insights with AI-powered analytics and reporting.',
    icon: Brain,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    href: '/micro-saas/ai-business-intelligence',
    color: 'from-zion-cyan to-zion-blue',
    category: 'AI & Analytics'
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience Platform',
    description: 'Deliver exceptional customer experiences with AI-driven personalization and automation.',
    icon: Users,
    features: ['Customer Journey Mapping', 'Personalization Engine', 'Feedback Analytics', 'Omnichannel Support'],
    href: '/micro-saas/customer-experience',
    color: 'from-zion-purple to-zion-pink',
    category: 'Customer Engagement'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Leverage quantum computing power for complex problem-solving and optimization.',
    icon: Rocket,
    features: ['Quantum Algorithms', 'Optimization Tools', 'Simulation Platform', 'API Integration'],
    href: '/micro-saas/quantum-computing',
    color: 'from-zion-blue to-zion-cyan',
    category: 'Advanced Computing'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Intelligence',
    description: 'Optimize your supply chain with AI-powered forecasting and real-time monitoring.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Risk Assessment', 'Performance Analytics'],
    href: '/micro-saas/supply-chain',
    color: 'from-zion-green to-zion-blue',
    category: 'Operations'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Suite',
    description: 'Protect your digital assets with advanced threat detection and response capabilities.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Monitoring'],
    href: '/micro-saas/cybersecurity',
    color: 'from-zion-red to-zion-orange',
    category: 'Security'
  },
  {
    id: 'iot-edge',
    name: 'IoT Edge Computing',
    description: 'Build and deploy IoT solutions with edge computing capabilities for real-time processing.',
    icon: Cpu,
    features: ['Edge Analytics', 'Device Management', 'Real-time Processing', 'Cloud Integration'],
    href: '/micro-saas/iot-edge',
    color: 'from-zion-purple to-zion-cyan',
    category: 'IoT & Edge'
  },
  {
    id: 'content-creation',
    name: 'AI Content Creation',
    description: 'Generate high-quality content automatically with AI-powered writing and design tools.',
    icon: FileText,
    features: ['Content Generation', 'Design Automation', 'SEO Optimization', 'Multi-format Output'],
    href: '/micro-saas/content-creation',
    color: 'from-zion-pink to-zion-purple',
    category: 'Content & Marketing'
  },
  {
    id: 'hr-platform',
    name: 'HR Management Platform',
    description: 'Streamline HR operations with AI-driven recruitment, performance management, and analytics.',
    icon: Users,
    features: ['Talent Acquisition', 'Performance Tracking', 'Employee Analytics', 'Compliance Management'],
    href: '/micro-saas/hr-platform',
    color: 'from-zion-green to-zion-blue',
    category: 'Human Resources'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in minutes with our pre-built solutions and templates.'
  },
  {
    icon: Target,
    title: 'Scalable Architecture',
    description: 'Start small and scale up as your business grows with flexible pricing models.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and advanced encryption.'
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning and AI to make data-driven decisions.'
  }
];

export default function MicroSaas() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Powerful, focused software solutions that solve specific business challenges. 
              Deploy in minutes, scale as you grow, and transform your operations with AI-powered tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our micro SAAS solutions are designed for modern businesses that need powerful tools without the complexity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI-powered analytics to cybersecurity, we have the tools you need to succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={solution.href}>
                  <div className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 p-6 h-full hover:bg-zion-slate-dark/70">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                        {solution.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {solution.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our micro SAAS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="btn-neon px-8 py-4 text-lg"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}