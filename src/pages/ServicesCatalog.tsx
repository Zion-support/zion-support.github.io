import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Globe,
  Lock,
  Heart,
  Leaf,
  Rocket,
  Cpu,
  Database,
  Network,
  Building,
  TrendingUp,
  Award,
  BookOpen,
  Play,
  FileText,
  Settings,
  Key,
  Leaf as LeafIcon,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle as CheckCircleIcon
} from 'lucide-react';

const ServicesCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Blockchain',
    'Healthcare Technology',
    'Financial Technology',
    'Sustainability',
    'Micro SaaS Solutions'
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 1,
      name: 'AI Enterprise Orchestrator',
      category: 'AI & Machine Learning',
      description: 'Multi-agent AI coordination and workflow automation platform that orchestrates complex business processes.',
      features: ['Multi-agent coordination', 'Workflow automation', 'Process optimization', 'Real-time monitoring'],
      pricing: 'Enterprise',
      rating: 4.9,
      reviews: 127,
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      href: '/services/ai-enterprise-orchestrator'
    },
    {
      id: 2,
      name: 'AI Business Intelligence',
      category: 'AI & Machine Learning',
      description: 'Advanced analytics and machine learning solutions for data-driven business insights and decision making.',
      features: ['Predictive analytics', 'Data visualization', 'Machine learning models', 'Real-time insights'],
      pricing: 'Professional',
      rating: 4.8,
      reviews: 89,
      featured: true,
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      href: '/services/ai-business-intelligence'
    },
    {
      id: 3,
      name: 'AI Healthcare Predictive Analytics',
      category: 'AI & Machine Learning',
      description: 'AI-powered healthcare analytics platform for predictive diagnostics and patient care optimization.',
      features: ['Predictive diagnostics', 'Patient monitoring', 'Treatment optimization', 'Clinical insights'],
      pricing: 'Enterprise',
      rating: 4.9,
      reviews: 156,
      featured: true,
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      href: '/services/ai-healthcare-predictive-analytics'
    },
    {
      id: 4,
      name: 'AI Financial Compliance Assistant',
      category: 'AI & Machine Learning',
      description: 'Automated regulatory compliance monitoring and reporting for financial institutions.',
      features: ['Regulatory monitoring', 'Automated reporting', 'Risk assessment', 'Compliance tracking'],
      pricing: 'Enterprise',
      rating: 4.7,
      reviews: 73,
      featured: false,
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      href: '/services/ai-financial-compliance-assistant'
    },
    {
      id: 5,
      name: 'AI Supply Chain Optimization',
      category: 'AI & Machine Learning',
      description: 'Intelligent supply chain management with predictive analytics and optimization algorithms.',
      features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Supplier analytics'],
      pricing: 'Professional',
      rating: 4.6,
      reviews: 94,
      featured: false,
      icon: Truck,
      color: 'from-orange-500 to-red-600',
      href: '/services/ai-supply-chain-optimization'
    },

    // Cybersecurity Services
    {
      id: 6,
      name: 'AI Cybersecurity Suite',
      category: 'Cybersecurity',
      description: 'Comprehensive AI-powered cybersecurity platform for threat detection and response.',
      features: ['Threat detection', 'Incident response', 'Vulnerability scanning', 'Security monitoring'],
      pricing: 'Enterprise',
      rating: 4.9,
      reviews: 203,
      featured: true,
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      href: '/services/ai-cybersecurity-suite'
    },
    {
      id: 7,
      name: 'Zero Trust Network Architecture',
      category: 'Cybersecurity',
      description: 'Modern security framework implementing zero-trust principles for comprehensive network protection.',
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Continuous monitoring'],
      pricing: 'Enterprise',
      rating: 4.8,
      reviews: 67,
      featured: false,
      icon: Lock,
      color: 'from-purple-500 to-indigo-600',
      href: '/services/zero-trust-network-architecture'
    },
    {
      id: 8,
      name: 'Incident Response Platform',
      category: 'Cybersecurity',
      description: 'Rapid response and recovery platform for cybersecurity incidents and breaches.',
      features: ['24/7 monitoring', 'Rapid response', 'Forensic analysis', 'Recovery support'],
      pricing: 'Professional',
      rating: 4.7,
      reviews: 45,
      featured: false,
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-600',
      href: '/services/incident-response-platform'
    },

    // Cloud & Infrastructure Services
    {
      id: 9,
      name: 'Cloud DevOps',
      category: 'Cloud & Infrastructure',
      description: 'End-to-end cloud infrastructure and DevOps automation services for scalable applications.',
      features: ['Cloud migration', 'DevOps automation', 'Infrastructure as code', 'Monitoring & alerting'],
      pricing: 'Professional',
      rating: 4.8,
      reviews: 178,
      featured: true,
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      href: '/services/cloud-devops'
    },
    {
      id: 10,
      name: 'Digital Twin Solutions',
      category: 'Cloud & Infrastructure',
      description: 'Digital twin technology for real-time monitoring and predictive maintenance of physical assets.',
      features: ['Real-time monitoring', 'Predictive maintenance', 'Asset optimization', 'Simulation modeling'],
      pricing: 'Enterprise',
      rating: 4.7,
      reviews: 82,
      featured: false,
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/digital-twin'
    },
    {
      id: 11,
      name: 'IoT Edge Computing',
      category: 'Cloud & Infrastructure',
      description: 'Edge computing solutions for IoT devices enabling real-time processing and analytics.',
      features: ['Edge processing', 'IoT connectivity', 'Real-time analytics', 'Device management'],
      pricing: 'Professional',
      rating: 4.6,
      reviews: 56,
      featured: false,
      icon: Cpu,
      color: 'from-green-500 to-teal-600',
      href: '/services/iot-edge'
    },

    // Digital Transformation Services
    {
      id: 12,
      name: 'Digital Transformation Consulting',
      category: 'Digital Transformation',
      description: 'Strategic consulting services to guide organizations through digital transformation initiatives.',
      features: ['Strategy development', 'Process optimization', 'Change management', 'Technology roadmap'],
      pricing: 'Enterprise',
      rating: 4.8,
      reviews: 134,
      featured: true,
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      href: '/services/digital-transformation'
    },
    {
      id: 13,
      name: 'IT Infrastructure Modernization',
      category: 'Digital Transformation',
      description: 'Modernization of legacy IT infrastructure for improved performance and efficiency.',
      features: ['Legacy modernization', 'Performance optimization', 'Cost reduction', 'Scalability improvement'],
      pricing: 'Professional',
      rating: 4.7,
      reviews: 91,
      featured: false,
      icon: Settings,
      color: 'from-gray-500 to-slate-600',
      href: '/services/it-infrastructure'
    },

    // Blockchain Services
    {
      id: 14,
      name: 'Blockchain Enterprise Solutions',
      category: 'Blockchain',
      description: 'Enterprise-grade blockchain solutions for supply chain, identity management, and smart contracts.',
      features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Decentralized applications'],
      pricing: 'Enterprise',
      rating: 4.6,
      reviews: 48,
      featured: false,
      icon: Lock,
      color: 'from-yellow-500 to-orange-600',
      href: '/services/blockchain-enterprise-solutions'
    },

    // Healthcare Technology
    {
      id: 15,
      name: 'Healthcare Technology Solutions',
      category: 'Healthcare Technology',
      description: 'Comprehensive healthcare technology solutions for hospitals, clinics, and healthcare providers.',
      features: ['Patient management', 'Clinical workflows', 'Telemedicine', 'Health analytics'],
      pricing: 'Enterprise',
      rating: 4.8,
      reviews: 167,
      featured: true,
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      href: '/services/healthcare-tech'
    },

    // Financial Technology
    {
      id: 16,
      name: 'FinOps Advisor',
      category: 'Financial Technology',
      description: 'Cloud financial operations optimization platform for cost management and resource optimization.',
      features: ['Cost optimization', 'Resource management', 'Budget tracking', 'ROI analysis'],
      pricing: 'Professional',
      rating: 4.7,
      reviews: 73,
      featured: false,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      href: '/services/finops-advisor'
    },

    // Sustainability Services
    {
      id: 17,
      name: 'Sustainability Solutions',
      category: 'Sustainability',
      description: 'Green technology solutions for reducing environmental impact and achieving sustainability goals.',
      features: ['Energy optimization', 'Carbon tracking', 'Green infrastructure', 'Sustainability reporting'],
      pricing: 'Professional',
      rating: 4.8,
      reviews: 89,
      featured: false,
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      href: '/services/sustainability'
    },

    // Micro SaaS Solutions
    {
      id: 18,
      name: 'AI Lead Scoring',
      category: 'Micro SaaS Solutions',
      description: 'AI-powered lead scoring and qualification platform for sales teams.',
      features: ['Lead scoring', 'Qualification automation', 'Sales analytics', 'CRM integration'],
      pricing: 'Starter',
      rating: 4.6,
      reviews: 156,
      featured: false,
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-600',
      href: '/services/ai-lead-scoring'
    },
    {
      id: 19,
      name: 'Website AI Chatbot',
      category: 'Micro SaaS Solutions',
      description: 'Intelligent chatbot solution for website customer support and lead generation.',
      features: ['24/7 support', 'Lead generation', 'Customer service', 'Multi-language support'],
      pricing: 'Starter',
      rating: 4.7,
      reviews: 234,
      featured: false,
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-600',
      href: '/services/website-ai-chatbot'
    },
    {
      id: 20,
      name: 'AI Content Optimizer Pro',
      category: 'Micro SaaS Solutions',
      description: 'AI-powered content optimization platform for SEO and content marketing.',
      features: ['SEO optimization', 'Content analysis', 'Keyword research', 'Performance tracking'],
      pricing: 'Professional',
      rating: 4.8,
      reviews: 189,
      featured: false,
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-600',
      href: '/services/ai-content-optimizer-pro'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Starter':
        return 'bg-green-100 text-green-800';
      case 'Professional':
        return 'bg-blue-100 text-blue-800';
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services Catalog - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive catalog of AI, cybersecurity, cloud infrastructure, and digital transformation services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="services catalog, AI services, cybersecurity, cloud computing, digital transformation, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Catalog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology services designed to 
              transform your business and drive innovation across all industries.
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services by name, description, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <span className="text-slate-300 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="reviews">Reviews</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sortedServices.filter(service => service.featured).map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPricingColor(service.pricing)}`}>
                      {service.pricing}
                    </span>
                    <span className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-white text-sm">{service.rating}</span>
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-slate-400 text-sm">
                    {service.reviews} reviews
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            All Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPricingColor(service.pricing)}`}>
                      {service.pricing}
                    </span>
                    <span className="flex items-center text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1 text-white text-xs">{service.rating}</span>
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      <span className="text-slate-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span>{service.reviews} reviews</span>
                  <span>{service.category}</span>
                </div>
                
                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
                >
                  View Details
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
          
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-slate-300">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-slate-300 mb-6">
              Can't find exactly what you need? Our expert team can create custom solutions 
              tailored to your specific business requirements and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCatalog;

