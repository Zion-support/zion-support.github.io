import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Heart, 
  Shield, 
  TrendingUp, 
  Cloud, 
  Cpu, 
  Globe,
  Atom,
  PenTool,
  Truck,
  Package,
  Factory,
  Warehouse,
  Building,
  Users,
  Search,
  BookOpen,
  MessageCircle,
  BarChart3,
  BarChart3,
  PieChart,
  Eye,
  Zap,
  Palette,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Target
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesShowcase2030() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai-intelligence', name: 'AI & Intelligence', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-business', name: 'AI & Business', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'ai-industry', name: 'AI & Industry', icon: Factory, color: 'from-orange-500 to-red-500' },
    { id: 'ai-finance', name: 'AI & Finance', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
    { id: 'ai-customer', name: 'AI & Customer', icon: Heart, color: 'from-blue-500 to-indigo-500' },
    { id: 'ai-research', name: 'AI & Research', icon: Search, color: 'from-purple-500 to-violet-500' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud, color: 'from-blue-500 to-cyan-500' }
  ];

  const allServices = [
    // AI & Intelligence Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Machine Learning & Data Science solutions for business transformation',
      category: 'ai-intelligence',
      icon: Brain,
      href: '/services/ai-business-intelligence',
      featured: true,
      price: '$1,299/month',
      color: 'from-purple-500 to-cyan-500',
      benefits: ['Predictive Analytics', 'Data Mining', 'Business Insights', 'ROI: 400%']
    },
    {
      id: 'ai-autonomous-research',
      name: 'AI Autonomous Research Assistant',
      description: '24/7 AI-powered research automation across multiple domains',
      category: 'ai-research',
      icon: Search,
      href: '/services/ai-autonomous-research-assistant',
      featured: true,
      price: '$799/month',
      color: 'from-purple-500 to-pink-500',
      benefits: ['24/7 Research', 'Multi-source Intelligence', 'Predictive Analytics', 'ROI: 500%']
    },
    
    // AI & Business Services
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation',
      description: 'Automated content generation and optimization for marketing',
      category: 'ai-business',
      icon: PenTool,
      href: '/services/ai-content-creation',
      featured: false,
      price: '$499/month',
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Content Automation', 'SEO Optimization', 'Multi-language', 'ROI: 300%']
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management',
      description: 'Intelligent project planning and resource optimization',
      category: 'ai-business',
      icon: Target,
      href: '/services/ai-project-management',
      featured: false,
      price: '$599/month',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'ROI: 350%']
    },
    
    // AI & Industry Services
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent forecasting and logistics optimization',
      category: 'ai-industry',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization',
      featured: true,
      price: '$1,299/month',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Demand Forecasting', 'Route Optimization', 'Cost Reduction', 'ROI: 450%']
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics',
      description: 'Advanced healthcare data analysis and predictive diagnostics',
      category: 'ai-industry',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      featured: true,
      price: '$1,499/month',
      color: 'from-red-500 to-pink-500',
      benefits: ['Predictive Diagnostics', 'Patient Analytics', 'Clinical Insights', 'ROI: 600%']
    },
    
    // AI & Finance Services
    {
      id: 'ai-financial-trading',
      name: 'AI Financial Trading Platform',
      description: 'AI-powered trading algorithms and portfolio optimization',
      category: 'ai-finance',
      icon: BarChart3,
      href: '/services/ai-financial-trading',
      featured: true,
      price: '$1,999/month',
      color: 'from-emerald-500 to-teal-500',
      benefits: ['Trading Algorithms', 'Portfolio Optimization', 'Risk Management', 'ROI: 800%']
    },
    
    // AI & Customer Services
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience Platform',
      description: 'Personalized customer interactions and omnichannel communication',
      category: 'ai-customer',
      icon: Heart,
      href: '/services/ai-customer-experience-platform',
      featured: true,
      price: '$899/month',
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Personalization', 'Omnichannel Support', 'Customer Analytics', 'ROI: 400%']
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service',
      category: 'ai-customer',
      icon: MessageCircle,
      href: '/services/ai-customer-support-automation',
      featured: false,
      price: '$399/month',
      color: 'from-blue-500 to-purple-500',
      benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'ROI: 300%']
    },
    
    // Emerging Technology Services
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Quantum AI and optimization for complex problem solving',
      category: 'emerging-tech',
      icon: Atom,
      href: '/services/quantum-computing',
      featured: true,
      price: '$2,999/month',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Quantum AI', 'Complex Optimization', 'Future Technology', 'ROI: 1000%']
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Platform',
      description: 'Virtual replicas and simulation for business optimization',
      category: 'emerging-tech',
      icon: Globe,
      href: '/services/digital-twin',
      featured: true,
      price: '$1,799/month',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Virtual Simulation', 'Predictive Modeling', 'Process Optimization', 'ROI: 500%']
    },
    
    // Infrastructure Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps Solutions',
      description: 'DevOps automation and cloud infrastructure management',
      category: 'infrastructure',
      icon: Cloud,
      href: '/services/cloud-devops',
      featured: true,
      price: '$999/month',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['DevOps Automation', 'Cloud Management', 'CI/CD Pipeline', 'ROI: 350%']
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure and network management',
      category: 'infrastructure',
      icon: Cpu,
      href: '/services/it-infrastructure',
      featured: false,
      price: '$799/month',
      color: 'from-slate-500 to-gray-500',
      benefits: ['Network Management', 'Security Monitoring', 'Performance Optimization', 'ROI: 250%']
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Rocket;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2030 | Zion Tech Group"
        description="Explore our complete portfolio of AI-powered services, micro SAAS solutions, and innovative technology services. Transform your business with cutting-edge solutions."
        keywords="AI services, micro SAAS, technology services, business transformation, AI solutions, innovation services"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive Services Portfolio 2030
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Portfolio of
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of innovative AI services, micro SAAS solutions, 
              and cutting-edge technology services designed to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group rounded-xl overflow-hidden ${
                  service.featured 
                    ? 'ring-2 ring-purple-500/50' 
                    : ''
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm p-6 h-full border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.featured && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200 group-hover:border-purple-500/50"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive portfolio of AI-powered services and start your 
              transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/schedule-demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}