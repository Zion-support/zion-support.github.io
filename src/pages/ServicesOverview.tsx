import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Building2, 
  Rocket, 
  Cpu, 
  Database, 
  Lock, 
  Code, 
  Server, 
  Chip, 
  Wifi, 
  Bot, 
  Workflow, 
  Eye, 
  Sparkles, 
  Atom, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Satellite, 
  Activity, 
  MessageCircle, 
  BarChart, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Handshake,
  Lightbulb,
  Settings,
  ShoppingCart,
  Heart,
  GraduationCap
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', description: 'Optimize supply chains with AI' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', description: 'Advanced AI-powered security' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', description: 'Healthcare technology solutions' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Next-generation quantum AI' },
        { name: 'AI Business Intelligence', href: '/ai-services', description: 'Data-driven business insights' },
        { name: 'AI Sales Copilot', href: '/ai-services', description: 'Sales automation and optimization' }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Settings,
      description: 'Comprehensive information technology solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud & DevOps', href: '/it-services', description: 'Cloud infrastructure and automation' },
        { name: 'Cybersecurity Suite', href: '/it-services', description: 'Complete security solutions' },
        { name: 'IT Infrastructure', href: '/it-services', description: 'Infrastructure management' },
        { name: 'Onsite Support', href: '/it-services', description: 'Professional IT support' },
        { name: 'Digital Transformation', href: '/it-services', description: 'Business modernization' },
        { name: 'Data Analytics', href: '/it-services', description: 'Advanced data processing' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS',
      icon: ShoppingCart,
      description: 'Specialized software-as-a-service solutions',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'AI Lead Scoring', href: '/micro-saas', description: 'Intelligent lead qualification' },
        { name: 'Website AI Chatbot', href: '/micro-saas', description: 'Customer support automation' },
        { name: 'AI SEO Optimizer', href: '/micro-saas', description: 'Search engine optimization' },
        { name: 'SaaS Churn Predictor', href: '/micro-saas', description: 'Customer retention analytics' },
        { name: 'API Monitoring', href: '/micro-saas', description: 'API health tracking' },
        { name: 'Returns Management', href: '/micro-saas', description: 'E-commerce returns handling' }
      ]
    },
    {
      id: 'specialized-solutions',
      title: 'Specialized Solutions',
      icon: Rocket,
      description: 'Industry-specific and cutting-edge solutions',
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Healthcare Tech', href: '/healthcare', description: 'Medical technology solutions' },
        { name: 'Blockchain Solutions', href: '/blockchain', description: 'Distributed ledger technology' },
        { name: 'Quantum Computing', href: '/quantum-computing', description: 'Quantum computational solutions' },
        { name: 'Space Technology', href: '/space-tech', description: 'Aerospace and space solutions' },
        { name: 'Sustainability Tech', href: '/sustainability', description: 'Green technology solutions' },
        { name: 'IoT Edge Computing', href: '/iot-edge', description: 'Internet of Things solutions' }
      ]
    }
  ];

  const industrySolutions = [
    { name: 'Enterprise', href: '/enterprise', icon: Building2, description: 'Large-scale business solutions' },
    { name: 'Healthcare', href: '/healthcare', icon: Heart, description: 'Medical and healthcare technology' },
    { name: 'Financial', href: '/financial', icon: Coins, description: 'Financial services and fintech' },
    { name: 'Manufacturing', href: '/manufacturing', icon: Cpu, description: 'Industrial and manufacturing tech' },
    { name: 'Retail', href: '/retail', icon: ShoppingCart, description: 'Retail and e-commerce solutions' },
    { name: 'Government', href: '/government', icon: Building2, description: 'Public sector technology' },
    { name: 'Education', href: '/education', icon: GraduationCap, description: 'Educational technology' },
    { name: 'Startup', href: '/startup-solutions', icon: Rocket, description: 'Startup and growth solutions' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Service Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our organized service categories designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-zion-slate-light">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block p-4 bg-zion-blue-darker rounded-lg hover:bg-zion-purple/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-sm text-zion-slate-light">{service.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions for specific industries and business verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={solution.href}
                    className="block p-6 bg-zion-blue-dark border border-zion-purple/30 rounded-xl hover:border-zion-cyan/50 transition-all duration-300 h-full"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-sm text-zion-slate-light">{solution.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the right solutions and implement them successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-purple font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-purple transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}