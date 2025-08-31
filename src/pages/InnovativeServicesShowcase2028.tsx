import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Satellite,
  FileText
} from 'lucide-react';

const InnovativeServicesShowcase2028 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-purple-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud-infra', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Code, color: 'from-green-500 to-emerald-500' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
    { id: 'it-services', name: 'IT Services', icon: Server, color: 'from-gray-500 to-slate-500' }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-manager',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations management with AI-driven decision making, process optimization, and strategic planning.',
      category: 'ai-ml',
      price: '$2,500 - $15,000/month',
      features: ['24/7 autonomous operations', 'AI-powered decision making', 'Process optimization', 'Strategic planning', 'Performance analytics'],
      benefits: ['Reduce operational costs by 40%', 'Improve efficiency by 60%', '24/7 business monitoring', 'Data-driven insights'],
      useCases: ['Small to medium businesses', 'Startups', 'Growing companies', 'Remote teams'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-autonomous-business-manager'
      }
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with artificial intelligence for unprecedented computational power.',
      category: 'quantum',
      price: '$5,000 - $25,000/month',
      features: ['Quantum-AI hybrid algorithms', 'Superior computational power', 'Advanced optimization', 'Real-time processing', 'Scalable architecture'],
      benefits: ['100x faster computation', 'Solve complex problems', 'Future-proof technology', 'Competitive advantage'],
      useCases: ['Research institutions', 'Financial services', 'Pharmaceutical companies', 'Government agencies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/quantum-ai-hybrid-platform'
      }
    },
    {
      id: 'ai-smart-city-infrastructure',
      title: 'AI Smart City Infrastructure Management',
      description: 'Intelligent urban infrastructure management using AI, IoT, and data analytics for sustainable city development.',
      category: 'emerging-tech',
      price: '$10,000 - $50,000/month',
      features: ['Smart traffic management', 'Energy optimization', 'Waste management', 'Public safety', 'Environmental monitoring'],
      benefits: ['Reduce energy consumption by 30%', 'Improve traffic flow by 25%', 'Enhanced public safety', 'Sustainable development'],
      useCases: ['Municipalities', 'City planners', 'Urban developers', 'Government agencies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-smart-city-infrastructure-management'
      }
    },
    {
      id: 'ai-autonomous-vehicle-platform',
      title: 'AI Autonomous Vehicle Management Platform',
      description: 'Comprehensive platform for managing autonomous vehicle fleets with advanced safety, routing, and monitoring capabilities.',
      category: 'emerging-tech',
      price: '$8,000 - $35,000/month',
      features: ['Fleet management', 'Safety monitoring', 'Route optimization', 'Predictive maintenance', 'Real-time tracking'],
      benefits: ['Reduce accidents by 90%', 'Optimize fuel consumption', '24/7 fleet monitoring', 'Regulatory compliance'],
      useCases: ['Transportation companies', 'Logistics providers', 'Ride-sharing services', 'Delivery companies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-autonomous-vehicle-management-platform'
      }
    },
    {
      id: 'ai-quantum-financial-trading',
      title: 'AI Quantum Financial Trading Platform',
      description: 'Advanced financial trading platform leveraging quantum computing and AI for superior market analysis and trading strategies.',
      category: 'quantum',
      price: '$15,000 - $75,000/month',
      features: ['Quantum market analysis', 'AI trading algorithms', 'Risk management', 'Portfolio optimization', 'Real-time data processing'],
      benefits: ['Superior market insights', 'Faster trade execution', 'Risk reduction', 'Portfolio optimization'],
      useCases: ['Investment banks', 'Hedge funds', 'Trading firms', 'Financial institutions'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-quantum-financial-trading-platform'
      }
    },
    // Cloud & Infrastructure Services
    {
      id: 'cloud-devops-automation',
      title: 'Cloud DevOps Automation Platform',
      description: 'End-to-end DevOps automation platform for cloud infrastructure management, deployment, and monitoring.',
      category: 'cloud-infra',
      price: '$3,000 - $20,000/month',
      features: ['CI/CD automation', 'Infrastructure as code', 'Monitoring & alerting', 'Auto-scaling', 'Security compliance'],
      benefits: ['Reduce deployment time by 80%', 'Improve reliability', 'Cost optimization', 'Security enhancement'],
      useCases: ['Software companies', 'IT departments', 'Startups', 'Enterprises'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/cloud-devops'
      }
    },
    {
      id: 'finops-optimizer',
      title: 'Cloud FinOps Optimizer',
      description: 'Intelligent cloud cost optimization platform using AI to reduce cloud spending and improve resource utilization.',
      category: 'cloud-infra',
      price: '$2,000 - $15,000/month',
      features: ['Cost analysis', 'Resource optimization', 'Budget management', 'Usage monitoring', 'Automated recommendations'],
      benefits: ['Reduce cloud costs by 30-50%', 'Improve resource utilization', 'Budget control', 'ROI optimization'],
      useCases: ['Enterprises', 'Startups', 'IT departments', 'Cloud-heavy companies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/cloud-finops-optimizer'
      }
    },
    // Cybersecurity Services
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Threat Intelligence Platform',
      description: 'Advanced cybersecurity platform using AI and machine learning for real-time threat detection and response.',
      category: 'cybersecurity',
      price: '$5,000 - $30,000/month',
      features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Vulnerability assessment', 'Compliance monitoring'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives', '24/7 protection', 'Regulatory compliance'],
      useCases: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Enterprises'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence'
      }
    },
    {
      id: 'zero-trust-network',
      title: 'Zero Trust Network Access Platform',
      description: 'Modern zero-trust security architecture providing secure access to applications and resources.',
      category: 'cybersecurity',
      price: '$3,000 - $25,000/month',
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Threat prevention', 'Audit logging'],
      benefits: ['Enhanced security posture', 'Simplified access management', 'Compliance readiness', 'Risk reduction'],
      useCases: ['Remote workforces', 'Enterprises', 'Healthcare', 'Financial services'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/zero-trust-network-access'
      }
    },
    // Micro SaaS Solutions
    {
      id: 'micro-crm',
      title: 'Micro CRM Platform',
      description: 'Lightweight, affordable customer relationship management solution designed for small businesses and startups.',
      category: 'micro-saas',
      price: '$99 - $499/month',
      features: ['Contact management', 'Sales tracking', 'Email integration', 'Reporting', 'Mobile app'],
      benefits: ['Affordable pricing', 'Easy to use', 'Quick setup', 'Scalable growth'],
      useCases: ['Small businesses', 'Startups', 'Freelancers', 'Sales teams'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/micro-crm'
      }
    },
    {
      id: 'helpdesk-platform',
      title: 'Intelligent Helpdesk Platform',
      description: 'AI-powered customer support platform with automated responses, ticket management, and knowledge base.',
      category: 'micro-saas',
      price: '$149 - $999/month',
      features: ['AI chatbot', 'Ticket management', 'Knowledge base', 'Analytics', 'Multi-channel support'],
      benefits: ['Reduce support costs', 'Improve customer satisfaction', '24/7 availability', 'Quick resolution'],
      useCases: ['E-commerce', 'SaaS companies', 'Service businesses', 'Support teams'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/helpdesk'
      }
    },
    {
      id: 'website-analytics',
      title: 'Advanced Website Analytics Platform',
      description: 'Comprehensive website analytics with AI-powered insights, conversion tracking, and performance optimization.',
      category: 'micro-saas',
      price: '$79 - $399/month',
      features: ['Visitor tracking', 'Conversion analytics', 'Performance monitoring', 'AI insights', 'A/B testing'],
      benefits: ['Data-driven decisions', 'Improve conversions', 'Performance optimization', 'User experience enhancement'],
      useCases: ['E-commerce', 'Marketing agencies', 'Business websites', 'Content creators'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/website-analytics'
      }
    },
    // IT Services
    {
      id: 'it-infrastructure',
      title: 'Enterprise IT Infrastructure Solutions',
      description: 'Comprehensive IT infrastructure services including network design, security, and cloud migration.',
      category: 'it-services',
      price: '$10,000 - $100,000+',
      features: ['Network design', 'Security implementation', 'Cloud migration', '24/7 support', 'Compliance'],
      benefits: ['Reliable infrastructure', 'Enhanced security', 'Scalable solutions', 'Expert support'],
      useCases: ['Enterprises', 'Healthcare', 'Financial services', 'Government'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/it-infrastructure'
      }
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize business processes and technology infrastructure.',
      category: 'it-services',
      price: '$25,000 - $200,000+',
      features: ['Strategy development', 'Process optimization', 'Technology implementation', 'Change management', 'Training'],
      benefits: ['Improved efficiency', 'Cost reduction', 'Competitive advantage', 'Future readiness'],
      useCases: ['Traditional businesses', 'Enterprises', 'Manufacturing', 'Retail'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/digital-transformation'
      }
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Services Showcase 2028
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover cutting-edge AI services, quantum computing solutions, and innovative micro SaaS platforms 
            designed to transform your business and drive success in the digital age.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {categories.find(c => c.id === service.category)?.name}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 3).map((useCase, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>Contact Information:</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-gray-300">{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-gray-300">{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-blue-400" />
                      <a 
                        href={service.contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or category filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact our team of experts to discuss how our innovative services can drive your success
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;
