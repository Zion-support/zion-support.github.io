import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  Code, 
  Truck, 
  Building, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Award,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Solutions() {
  const solutions = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      solutions: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Transform data into actionable insights' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'Automated content generation and optimization' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Smart marketing campaign management' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'Intelligent project planning and execution' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      solutions: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Streamlined development and operations' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Robust and scalable infrastructure solutions' },
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual representation of physical systems' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Comprehensive data analysis and visualization' }
      ]
    },
    {
      category: 'Cybersecurity & Privacy',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      solutions: [
        { name: 'Cybersecurity Services', href: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI-powered threat detection and response' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Secure access control systems' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web security and content security policies' }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      solutions: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-generation computing solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device networks and edge processing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain', description: 'Decentralized and secure applications' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Innovative space exploration solutions' }
      ]
    },
    {
      category: 'Business Solutions',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      solutions: [
        { name: 'Micro SaaS Platform', href: '/services/micro-saas', description: 'Scalable software-as-a-service solutions' },
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management tools' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Comprehensive support management system' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'End-to-end business transformation' }
      ]
    },
    {
      category: 'Specialized Services',
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
      solutions: [
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'Intelligent human resources management' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive maintenance solutions' },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', description: 'Green technology solutions' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment', description: 'AI-powered candidate evaluation' }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized solutions that deliver results in record time'
    },
    {
      icon: Target,
      title: 'Precision Focused',
      description: 'Tailored solutions that address your specific needs'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business requirements'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover our comprehensive technology solutions across AI, Cloud, Cybersecurity, and emerging technologies. Transform your business with Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology Solutions That
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI-powered automation to cutting-edge cybersecurity, we provide comprehensive solutions 
              that drive innovation and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Solution Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our wide range of technology solutions designed to address every aspect of modern business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.a
                      key={solutionIndex}
                      href={solution.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: solutionIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="block p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {solution.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{solution.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve your technology goals and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/request-quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Request a Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}