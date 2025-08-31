import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Search,
  Filter,
  Target,
  Palette,
  Truck,
  Play
} from 'lucide-react';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    // AI & Analytics Services
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      category: 'AI & Analytics',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time monitoring'],
      pricing: 'Custom pricing',
      featured: true
    },
    {
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and business intelligence powered by machine learning',
      category: 'AI & Analytics',
      icon: BarChart3,
      href: '/services/ai-business-intelligence',
      color: 'from-blue-600 to-cyan-600',
      features: ['Predictive analytics', 'Data visualization', 'Business insights', 'Performance tracking'],
      pricing: 'From $2,500/month',
      featured: true
    },
    {
      name: 'AI Content Generation Platform',
      description: 'AI-powered content creation and optimization for marketing and communications',
      category: 'AI & Analytics',
      icon: BookOpen,
      href: '/services/ai-content-generation-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['Content creation', 'SEO optimization', 'Brand consistency', 'Multi-format support'],
      pricing: 'From $199/month',
      featured: false
    },
    {
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaign optimization and customer engagement',
      category: 'AI & Analytics',
      icon: Target,
      href: '/services/ai-marketing-automation',
      color: 'from-orange-600 to-red-600',
      features: ['Campaign optimization', 'Customer segmentation', 'A/B testing', 'ROI tracking'],
      pricing: 'From $399/month',
      featured: false
    },
    {
      name: 'AI Project Management Platform',
      description: 'AI-powered project optimization and team collaboration',
      category: 'AI & Analytics',
      icon: Briefcase,
      href: '/services/ai-project-management-platform',
      color: 'from-indigo-600 to-purple-600',
      features: ['Task optimization', 'Resource allocation', 'Risk assessment', 'Progress tracking'],
      pricing: 'From $299/month',
      featured: false
    },

    // Cybersecurity Services
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      category: 'Cybersecurity',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Incident management'],
      pricing: 'From $1,500/month',
      featured: true
    },
    {
      name: 'Zero Trust Network Architecture',
      description: 'Advanced security framework with continuous verification and access control',
      category: 'Cybersecurity',
      icon: Lock,
      href: '/services/zero-trust-network-architecture',
      color: 'from-yellow-600 to-orange-600',
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Continuous monitoring'],
      pricing: 'Custom pricing',
      featured: false
    },
    {
      name: 'AI Cybersecurity Threat Detection',
      description: 'Advanced AI-powered threat intelligence and detection systems',
      category: 'Cybersecurity',
      icon: ShieldCheck,
      href: '/services/ai-cybersecurity-threat-detection',
      color: 'from-red-600 to-pink-600',
      features: ['Threat intelligence', 'Behavioral analysis', 'Anomaly detection', 'Real-time alerts'],
      pricing: 'From $999/month',
      featured: false
    },

    // Emerging Technologies
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      category: 'Emerging Tech',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support', 'Simulation'],
      pricing: 'Custom pricing',
      featured: true
    },
    {
      name: 'Edge Computing Platform',
      description: 'Distributed computing at the edge for real-time processing and low latency',
      category: 'Emerging Tech',
      icon: Cpu,
      href: '/services/edge-computing-platform',
      color: 'from-green-600 to-teal-600',
      features: ['Edge processing', 'Low latency', 'Real-time analytics', 'IoT integration'],
      pricing: 'From $799/month',
      featured: false
    },
    {
      name: 'Digital Twin',
      description: 'Virtual replicas and simulation for predictive maintenance and optimization',
      category: 'Emerging Tech',
      icon: Globe2,
      href: '/services/digital-twin',
      color: 'from-emerald-600 to-green-600',
      features: ['Virtual modeling', 'Predictive maintenance', 'Performance optimization', 'Real-time monitoring'],
      pricing: 'From $1,200/month',
      featured: false
    },
    {
      name: 'Space Technology',
      description: 'Innovative space technology solutions for research and commercial applications',
      category: 'Emerging Tech',
      icon: Satellite,
      href: '/services/space-tech',
      color: 'from-indigo-600 to-purple-600',
      features: ['Satellite systems', 'Space research', 'Commercial applications', 'Innovation support'],
      pricing: 'Custom pricing',
      featured: false
    },

    // Enterprise Solutions
    {
      name: 'Cloud & DevOps',
      description: 'Infrastructure automation and cloud management solutions',
      category: 'Enterprise Solutions',
      icon: Cloud,
      href: '/services/cloud-devops',
      color: 'from-blue-600 to-indigo-600',
      features: ['Infrastructure automation', 'CI/CD pipelines', 'Cloud migration', 'Monitoring'],
      pricing: 'From $1,000/month',
      featured: false
    },
    {
      name: 'IoT & Edge',
      description: 'Smart devices and networks for connected enterprise solutions',
      category: 'Enterprise Solutions',
      icon: Network,
      href: '/services/iot-edge',
      color: 'from-teal-600 to-green-600',
      features: ['IoT integration', 'Edge computing', 'Device management', 'Data collection'],
      pricing: 'From $699/month',
      featured: false
    },
    {
      name: 'Blockchain Enterprise Solutions',
      description: 'DeFi and smart contract solutions for enterprise applications',
      category: 'Enterprise Solutions',
      icon: Lock,
      href: '/services/blockchain-enterprise-solutions',
      color: 'from-yellow-600 to-orange-600',
      features: ['Smart contracts', 'DeFi solutions', 'Enterprise blockchain', 'Security'],
      pricing: 'From $899/month',
      featured: false
    },
    {
      name: 'IT Infrastructure',
      description: 'Enterprise IT infrastructure and management solutions',
      category: 'Enterprise Solutions',
      icon: Server,
      href: '/services/it-infrastructure',
      color: 'from-gray-600 to-slate-600',
      features: ['Infrastructure design', 'System administration', 'Network management', 'Support'],
      pricing: 'From $1,500/month',
      featured: false
    },

    // Healthcare Technology
    {
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      category: 'Healthcare Tech',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      color: 'from-red-600 to-pink-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization', 'Patient monitoring'],
      pricing: 'From $2,000/month',
      featured: true
    },
    {
      name: 'AI Healthcare Predictive Analytics',
      description: 'Advanced healthcare insights and predictive modeling platform',
      category: 'Healthcare Tech',
      icon: Heart,
      href: '/services/ai-healthcare-predictive-analytics',
      color: 'from-pink-600 to-rose-600',
      features: ['Predictive modeling', 'Risk assessment', 'Treatment optimization', 'Outcome prediction'],
      pricing: 'From $2,500/month',
      featured: false
    },

    // Financial Technology
    {
      name: 'AI Financial Trading Platform',
      description: 'AI-powered trading systems and financial analytics',
      category: 'FinTech',
      icon: TrendingUp,
      href: '/services/ai-financial-trading-platform',
      color: 'from-emerald-600 to-green-600',
      features: ['Trading algorithms', 'Risk management', 'Market analysis', 'Portfolio optimization'],
      pricing: 'From $3,000/month',
      featured: false
    },
    {
      name: 'AI Financial Fraud Detection',
      description: 'Advanced fraud detection and prevention using AI and machine learning',
      category: 'FinTech',
      icon: Shield,
      href: '/services/ai-financial-fraud-detection',
      color: 'from-red-600 to-orange-600',
      features: ['Fraud detection', 'Real-time monitoring', 'Risk assessment', 'Compliance'],
      pricing: 'From $1,800/month',
      featured: false
    },

    // Micro SaaS Products
    {
      name: 'AI Sales Copilot',
      description: 'Complete sales automation suite with AI-powered insights',
      category: 'Micro SaaS',
      icon: TrendingUp,
      href: '/services/ai-sales-copilot',
      color: 'from-blue-600 to-cyan-600',
      features: ['Lead scoring', 'Sales automation', 'Pipeline management', 'Analytics'],
      pricing: '$299/month',
      featured: true
    },
    {
      name: 'AI Support Helpdesk',
      description: 'Intelligent customer support platform with 24/7 availability',
      category: 'Micro SaaS',
      icon: MessageCircle,
      href: '/services/ai-support-helpdesk',
      color: 'from-green-600 to-emerald-600',
      features: ['24/7 support', 'AI chatbots', 'Ticket management', 'Knowledge base'],
      pricing: '$199/month',
      featured: true
    },
    {
      name: 'AI Content Generator',
      description: 'AI-powered content creation and optimization platform',
      category: 'Micro SaaS',
      icon: BookOpen,
      href: '/services/ai-content-generator',
      color: 'from-purple-600 to-pink-600',
      features: ['Content creation', 'SEO optimization', 'Multi-format support', 'Brand consistency'],
      pricing: '$149/month',
      featured: true
    },
    {
      name: 'AI Lead Scoring',
      description: 'Machine learning-based lead prioritization and scoring',
      category: 'Micro SaaS',
      icon: Target,
      href: '/services/ai-lead-scoring',
      color: 'from-orange-600 to-red-600',
      features: ['Lead scoring', 'Priority ranking', 'Conversion prediction', 'ROI tracking'],
      pricing: '$99/month',
      featured: true
    },
    {
      name: 'Website AI Chatbot',
      description: 'AI-powered website chatbot for 24/7 customer engagement',
      category: 'Micro SaaS',
      icon: MessageCircle,
      href: '/services/website-ai-chatbot',
      color: 'from-blue-600 to-indigo-600',
      features: ['24/7 availability', 'Natural language processing', 'Integration', 'Analytics'],
      pricing: '$79/month',
      featured: false
    },
    {
      name: 'AI Content Marketing Automation',
      description: 'Automated content marketing and distribution platform',
      category: 'Micro SaaS',
      icon: Palette,
      href: '/services/ai-content-marketing-automation',
      color: 'from-pink-600 to-purple-600',
      features: ['Content automation', 'Distribution', 'Analytics', 'A/B testing'],
      pricing: '$179/month',
      featured: false
    },

    // New Innovative Services 2025
    {
      name: 'AI Data Privacy Compliance Platform',
      description: 'AI-powered data privacy compliance automation for GDPR, CCPA, and more',
      category: 'AI & Analytics',
      icon: Shield,
      href: '/services/ai-data-privacy-compliance-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['GDPR automation', 'Data discovery', 'Consent management', 'Compliance reporting'],
      pricing: 'From $299/month',
      featured: true
    },
    {
      name: 'AI Carbon Footprint Management',
      description: 'AI-powered sustainability tracking and carbon footprint optimization',
      category: 'AI & Analytics',
      icon: Leaf,
      href: '/services/ai-carbon-footprint-management-platform',
      color: 'from-green-600 to-blue-600',
      features: ['Real-time tracking', 'AI analytics', 'Supply chain monitoring', 'ESG compliance'],
      pricing: 'From $199/month',
      featured: true
    },
    {
      name: 'AI Talent Acquisition Platform',
      description: 'AI-powered recruitment and candidate matching platform',
      category: 'AI & Analytics',
      icon: Users,
      href: '/services/ai-talent-acquisition-platform',
      color: 'from-blue-600 to-purple-600',
      features: ['AI matching', 'Automated screening', 'Predictive analytics', 'Multi-channel sourcing'],
      pricing: 'From $199/month',
      featured: true
    },
    {
      name: 'AI Customer Experience Analytics',
      description: 'AI-powered customer experience optimization and sentiment analysis',
      category: 'AI & Analytics',
      icon: Heart,
      href: '/services/ai-customer-experience-analytics-platform',
      color: 'from-purple-600 to-pink-600',
      features: ['Sentiment analysis', 'Journey mapping', 'Predictive behavior', 'Personalization'],
      pricing: 'From $249/month',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings, count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Emerging Tech', name: 'Emerging Tech', icon: Zap, count: allServices.filter(s => s.category === 'Emerging Tech').length },
    { id: 'Enterprise Solutions', name: 'Enterprise Solutions', icon: Building, count: allServices.filter(s => s.category === 'Enterprise Solutions').length },
    { id: 'Healthcare Tech', name: 'Healthcare Tech', icon: Heart, count: allServices.filter(s => s.category === 'Healthcare Tech').length },
    { id: 'FinTech', name: 'FinTech', icon: DollarSign, count: allServices.filter(s => s.category === 'FinTech').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart, count: allServices.filter(s => s.category === 'Micro SaaS').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredServices = allServices.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Complete
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              From AI-powered solutions to enterprise infrastructure, discover how we can transform your business 
              with cutting-edge technology and strategic expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-600 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-blue-400 mb-4">{service.pricing}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across all technology domains, tailored to your business needs.
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    {service.featured && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-400 rounded-full">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  
                  <div className="text-sm font-medium text-blue-400 mb-4">{service.pricing}</div>
                  
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find exactly what you need? Our team can create custom solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Request Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}