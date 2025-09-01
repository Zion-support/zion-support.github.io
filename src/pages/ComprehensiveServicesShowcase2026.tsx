import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Rocket, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Users, 
  Target, 
  TrendingUp, 
  Heart, 
  Building, 
  Car, 
  Factory, 
  City, 
  Leaf, 
  Atom, 
  Satellite, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  ShoppingCart
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const services = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics and ML solutions' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', description: 'Medical AI and predictive diagnostics' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', description: 'Algorithmic trading and risk management' },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-automation', description: 'Automated content creation and optimization' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform', description: 'Intelligent project planning and execution' },
        { name: 'AI Legal Research', href: '/services/ai-legal-research-platform', description: 'Legal document analysis and research' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation and management' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Distributed computing solutions' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', description: 'Scalable software-as-a-service platforms' },
        { name: 'Cloud FinOps', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization and management' }
      ]
    },
    {
      category: 'IoT & Digital Solutions',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'IoT Edge Computing', href: '/services/iot-services', description: 'Internet of Things and edge processing' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual replicas and simulation' },
        { name: 'Smart Contract Risk Scanner', href: '/services/smart-contract-risk-scanner', description: 'Blockchain security and validation' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Big data processing and insights' }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum algorithms and optimization' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Satellite and space systems' },
        { name: 'Sustainability Solutions', href: '/services/sustainability', description: 'Green technology and ESG compliance' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced cybersecurity framework' }
      ]
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Digital health transformation and AI diagnostics' },
    { name: 'Financial Services', icon: DollarSign, description: 'Fintech innovation and compliance solutions' },
    { name: 'Manufacturing', icon: Factory, description: 'Industry 4.0 and smart manufacturing' },
    { name: 'Retail & E-commerce', icon: ShoppingCart, description: 'Digital commerce and customer experience' },
    { name: 'Government', icon: Building, description: 'Public sector innovation and digital transformation' },
    { name: 'Energy', icon: Leaf, description: 'Sustainable energy and smart grid solutions' }
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Proven ROI', description: 'Average 300% return on investment within 18 months' },
    { icon: Clock, title: 'Rapid Deployment', description: 'Solutions deployed in weeks, not months' },
    { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant with zero-trust architecture' },
    { icon: Users, title: 'Expert Support', description: '24/7 technical support and dedicated success managers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Services Showcase 2026
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's complete portfolio of cutting-edge AI, cloud, IoT, and emerging technology solutions designed to transform your business in 2026 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum computing solutions, we offer the most comprehensive technology services in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-400/30 transition-all duration-300 text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4 inline-block">
                  <industry.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver measurable business value with every solution, backed by proven expertise and unwavering support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4 inline-block">
                  <benefit.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive technology solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;