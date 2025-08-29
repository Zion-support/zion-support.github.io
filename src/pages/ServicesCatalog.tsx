import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Brain, 
  Shield, 
  Truck, 
  Cpu, 
  Zap, 
  Cloud, 
  Rocket, 
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Lock,
  Package,
  Warehouse,
  Route,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  DollarSign,
  Link,
  Atom
} from 'lucide-react';

export default function ServicesCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-600' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-blue-500 to-cyan-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck, color: 'from-green-500 to-emerald-600' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Cpu, color: 'from-indigo-500 to-purple-600' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, color: 'from-yellow-500 to-orange-600' }
  ];

  const allServices = [
    // AI Services
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      description: 'Revolutionary AI-powered project management that automates workflows, predicts outcomes, and optimizes team performance.',
      category: 'ai',
      price: 'From $29/month',
      features: ['AI task prioritization', 'Smart team collaboration', 'Predictive analytics', 'Automated workflows'],
      href: '/services/ai-project-management-platform',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      name: 'AI Cybersecurity Threat Intelligence',
      description: 'Advanced AI-powered cybersecurity platform that detects, predicts, and responds to cyber threats in real-time.',
      category: 'cybersecurity',
      price: 'From $99/month',
      features: ['AI threat detection', '24/7 monitoring', 'Predictive intelligence', 'Automated response'],
      href: '/services/ai-cybersecurity-threat-intelligence',
      popular: true,
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'ai-supply-chain-optimization-platform',
      name: 'AI Supply Chain Optimization Platform',
      description: 'Transform your supply chain with AI that optimizes inventory, routes, and operations in real-time.',
      category: 'supply-chain',
      price: 'From $149/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Risk assessment'],
      href: '/services/ai-supply-chain-optimization-platform',
      popular: true,
      icon: Truck,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence for data-driven decision making.',
      category: 'ai',
      price: 'From $199/month',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization'],
      href: '/services/ai-business-intelligence',
      popular: false,
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'AI-powered sales automation and optimization to boost revenue and improve customer relationships.',
      category: 'ai',
      price: 'From $79/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automated follow-ups'],
      href: '/services/ai-sales-copilot',
      popular: false,
      icon: Target,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      description: 'Automated regulatory compliance with AI-powered monitoring and reporting.',
      category: 'ai',
      price: 'From $149/month',
      features: ['Regulatory monitoring', 'Automated reporting', 'Risk assessment', 'Compliance tracking'],
      href: '/services/ai-compliance-assistant',
      popular: false,
      icon: Lock,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio',
      description: 'AI-powered content creation platform using advanced language models.',
      category: 'ai',
      price: 'From $49/month',
      features: ['Content generation', 'SEO optimization', 'Brand voice consistency', 'Multi-language support'],
      href: '/services/llm-content-studio',
      popular: false,
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'ai-compliance-copilot',
      name: 'AI Compliance Copilot',
      description: 'AI-powered security and compliance automation for enterprise environments.',
      category: 'cybersecurity',
      price: 'From $199/month',
      features: ['Security automation', 'Compliance monitoring', 'Risk management', 'Incident response'],
      href: '/services/ai-compliance-copilot',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'zero-trust-network-architecture',
      name: 'Zero Trust Network Architecture',
      description: 'Modern security framework implementing zero-trust principles for maximum protection.',
      category: 'cybersecurity',
      price: 'From $299/month',
      features: ['Identity verification', 'Continuous monitoring', 'Micro-segmentation', 'Threat prevention'],
      href: '/services/zero-trust-network-architecture',
      popular: false,
      icon: Lock,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'incident-response-platform',
      name: 'Incident Response Platform',
      description: 'Comprehensive security incident management and response automation.',
      category: 'cybersecurity',
      price: 'From $249/month',
      features: ['Incident detection', 'Automated response', 'Forensic analysis', 'Recovery planning'],
      href: '/services/incident-response-platform',
      popular: false,
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin',
      description: 'Virtual simulation and monitoring for physical systems and processes.',
      category: 'emerging-tech',
      price: 'From $399/month',
      features: ['Real-time simulation', 'Predictive maintenance', 'Performance optimization', 'Remote monitoring'],
      href: '/services/digital-twin',
      popular: false,
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'iot-edge',
      name: 'IoT Edge Computing',
      description: 'Smart device networks with edge computing capabilities for real-time processing.',
      category: 'emerging-tech',
      price: 'From $199/month',
      features: ['Edge processing', 'Device management', 'Data analytics', 'Real-time insights'],
      href: '/services/iot-edge',
      popular: false,
      icon: Globe,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      description: 'Distributed ledger technology for enterprise applications and secure transactions.',
      category: 'emerging-tech',
      price: 'From $299/month',
      features: ['Smart contracts', 'Secure transactions', 'Supply chain tracking', 'Identity management'],
      href: '/services/blockchain-enterprise-solutions',
      popular: false,
      icon: Link,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation computing solutions leveraging quantum mechanics.',
      category: 'emerging-tech',
      price: 'From $499/month',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research support'],
      href: '/services/quantum-computing',
      popular: false,
      icon: Atom,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      description: 'Space-based solutions and satellite technology for global applications.',
      category: 'emerging-tech',
      price: 'From $599/month',
      features: ['Satellite communications', 'Earth observation', 'Navigation systems', 'Space analytics'],
      href: '/services/space-tech',
      popular: false,
      icon: Rocket,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      description: 'Infrastructure automation and modern development practices for cloud environments.',
      category: 'cloud-devops',
      price: 'From $199/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation'],
      href: '/services/cloud-devops',
      popular: false,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'cloud-finops-optimizer',
      name: 'Cloud FinOps Optimizer',
      description: 'Cost optimization and financial operations management for cloud infrastructure.',
      category: 'cloud-devops',
      price: 'From $149/month',
      features: ['Cost monitoring', 'Resource optimization', 'Budget management', 'ROI analysis'],
      href: '/services/cloud-finops-optimizer',
      popular: false,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'finops-advisor',
      name: 'FinOps Advisor',
      description: 'Financial operations guidance and best practices for cloud environments.',
      category: 'cloud-devops',
      price: 'From $99/month',
      features: ['Financial planning', 'Cost analysis', 'Optimization strategies', 'Best practices'],
      href: '/services/finops-advisor',
      popular: false,
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Catalog - Zion Tech Group"
        description="Explore our comprehensive catalog of AI-powered services, cybersecurity solutions, supply chain optimization, and emerging technology services. Find the perfect solution for your business needs."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Complete Service Catalog
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services Catalog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of AI-powered services, cybersecurity solutions, 
              and cutting-edge technology services designed to transform your business.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/30'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find exactly what you're looking for? Our team can create custom solutions 
              tailored to your specific business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-cyan-500/30 text-cyan-300 font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-600/30">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

