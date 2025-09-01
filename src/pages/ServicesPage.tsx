import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Rocket, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Workflow, 
  MessageCircle, 
  BarChart3, 
  Heart, 
  DollarSign, 
  Atom, 
  Satellite, 
  Truck, 
  Home, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Factory, 
  ShoppingCart, 
  Network, 
  Wifi, 
  Server, 
  Code, 
  Monitor, 
  Smartphone, 
  Activity, 
  Eye, 
  Search, 
  Settings, 
  Palette, 
  Video, 
  GraduationCap, 
  Handshake, 
  ShoppingBag, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Star as StarIcon,
  Users2, 
  Cog,
  ChevronRight,
  Play,
  ExternalLink,
  Filter,
  Grid,
  List,
  Search as SearchIcon
} from 'lucide-react';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Zap,
      description: 'Scalable software-as-a-service solutions for modern businesses',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      icon: Brain,
      description: 'Intelligent automation and artificial intelligence solutions',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: Shield,
      description: 'Robust IT infrastructure and cybersecurity solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge technology solutions for the future',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const allServices = [
    // Micro SAAS Solutions
    {
      name: 'AI Sales Copilot',
      category: 'micro-saas',
      description: 'Intelligent sales automation with AI-powered lead scoring and customer insights',
      href: '/services/ai-sales-copilot',
      price: '$299/month',
      features: ['AI Lead Scoring', 'Customer Insights', 'Sales Analytics', 'CRM Integration'],
      icon: Users,
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      name: 'Cloud FinOps Optimizer',
      category: 'micro-saas',
      description: 'Automated cloud cost optimization and financial operations management',
      href: '/services/cloud-finops-optimizer',
      price: '$199/month',
      features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'Automated Scaling'],
      icon: DollarSign,
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      name: 'AI Compliance Assistant',
      category: 'micro-saas',
      description: 'Automated compliance monitoring and regulatory reporting for businesses',
      href: '/services/ai-compliance-assistant',
      price: '$399/month',
      features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trails'],
      icon: Shield,
      rating: 4.7,
      reviews: 156,
      popular: true
    },
    {
      name: 'AI Project Management Platform',
      category: 'micro-saas',
      description: 'AI-powered project management with intelligent resource allocation',
      href: '/services/ai-project-management-platform',
      price: '$299/month',
      features: ['Smart Scheduling', 'Resource Optimization', 'Risk Prediction', 'Progress Tracking'],
      icon: Workflow,
      rating: 4.6,
      reviews: 203,
      popular: false
    },
    {
      name: 'AI Marketing Automation Platform',
      category: 'micro-saas',
      description: 'Intelligent marketing automation with personalized customer experiences',
      href: '/services/ai-marketing-automation-platform',
      price: '$249/month',
      features: ['Personalization', 'Campaign Automation', 'Analytics', 'A/B Testing'],
      icon: TrendingUp,
      rating: 4.8,
      reviews: 167,
      popular: true
    },
    {
      name: 'AI HR Platform',
      category: 'micro-saas',
      description: 'Comprehensive HR management with AI-powered insights and automation',
      href: '/services/ai-hr-platform',
      price: '$349/month',
      features: ['Recruitment AI', 'Employee Analytics', 'Performance Management', 'Compliance'],
      icon: Users2,
      rating: 4.7,
      reviews: 134,
      popular: false
    },

    // AI & Automation
    {
      name: 'AI Business Intelligence',
      category: 'ai-automation',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence',
      href: '/services/ai-business-intelligence',
      price: '$499/month',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards'],
      icon: BarChart3,
      rating: 4.9,
      reviews: 245,
      popular: true
    },
    {
      name: 'AI Customer Support Automation',
      category: 'ai-automation',
      description: 'Intelligent customer support automation with natural language processing',
      href: '/services/ai-customer-support-automation',
      price: '$199/month',
      features: ['24/7 Support', 'Natural Language Processing', 'Ticket Automation', 'Customer Analytics'],
      icon: MessageCircle,
      rating: 4.8,
      reviews: 189,
      popular: true
    },
    {
      name: 'AI Enterprise Automation Platform',
      category: 'ai-automation',
      description: 'End-to-end enterprise automation with AI-powered workflows',
      href: '/services/ai-enterprise-automation-platform',
      price: 'Custom Pricing',
      features: ['Process Automation', 'Workflow Orchestration', 'Integration Hub', 'Analytics'],
      icon: Cog,
      rating: 4.9,
      reviews: 78,
      popular: true
    },
    {
      name: 'AI Workflow Orchestrator',
      category: 'ai-automation',
      description: 'Intelligent workflow orchestration and process optimization',
      href: '/services/ai-workflow-orchestrator',
      price: '$399/month',
      features: ['Workflow Design', 'Process Optimization', 'Integration Management', 'Performance Analytics'],
      icon: Workflow,
      rating: 4.7,
      reviews: 112,
      popular: false
    },
    {
      name: 'AI Financial Trading Platform',
      category: 'ai-automation',
      description: 'AI-powered financial trading with advanced algorithms and risk management',
      href: '/services/ai-financial-trading-platform',
      price: 'Custom Pricing',
      features: ['Algorithmic Trading', 'Risk Management', 'Portfolio Optimization', 'Market Analysis'],
      icon: TrendingUp,
      rating: 4.8,
      reviews: 67,
      popular: true
    },
    {
      name: 'AI Healthcare Analytics Platform',
      category: 'ai-automation',
      description: 'Advanced healthcare analytics with AI-powered insights and predictions',
      href: '/services/ai-healthcare-analytics-platform',
      price: 'Custom Pricing',
      features: ['Patient Analytics', 'Clinical Insights', 'Predictive Modeling', 'Compliance'],
      icon: Heart,
      rating: 4.9,
      reviews: 156,
      popular: true
    },

    // IT Infrastructure
    {
      name: 'Cloud & DevOps',
      category: 'it-infrastructure',
      description: 'Comprehensive cloud infrastructure and DevOps automation services',
      href: '/services/cloud-devops',
      price: 'Custom Pricing',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting'],
      icon: Cloud,
      rating: 4.8,
      reviews: 234,
      popular: true
    },
    {
      name: 'Cybersecurity Solutions',
      category: 'it-infrastructure',
      description: 'Advanced cybersecurity protection and threat intelligence services',
      href: '/services/cybersecurity',
      price: 'Custom Pricing',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      icon: Lock,
      rating: 4.9,
      reviews: 189,
      popular: true
    },
    {
      name: 'Digital Transformation',
      category: 'it-infrastructure',
      description: 'End-to-end digital transformation consulting and implementation',
      href: '/services/digital-transformation',
      price: 'Custom Pricing',
      features: ['Strategy Development', 'Technology Selection', 'Change Management', 'Implementation Support'],
      icon: Rocket,
      rating: 4.7,
      reviews: 145,
      popular: false
    },
    {
      name: 'Healthcare Technology',
      category: 'it-infrastructure',
      description: 'Specialized healthcare technology solutions and consulting',
      href: '/services/healthcare-tech',
      price: 'Custom Pricing',
      features: ['HIPAA Compliance', 'Patient Data Security', 'Clinical Systems', 'Interoperability'],
      icon: Heart,
      rating: 4.8,
      reviews: 167,
      popular: true
    },
    {
      name: 'IoT & Edge Computing',
      category: 'it-infrastructure',
      description: 'Internet of Things and edge computing solutions for real-time data processing',
      href: '/services/iot-edge-computing',
      price: 'Custom Pricing',
      features: ['Sensor Networks', 'Edge Analytics', 'Real-time Processing', 'Device Management'],
      icon: Wifi,
      rating: 4.6,
      reviews: 98,
      popular: false
    },
    {
      name: 'IT Infrastructure Management',
      category: 'it-infrastructure',
      description: 'Comprehensive IT infrastructure management and optimization services',
      href: '/services/it-infrastructure-management',
      price: 'Custom Pricing',
      features: ['Infrastructure Planning', 'Performance Optimization', 'Capacity Planning', 'Disaster Recovery'],
      icon: Server,
      rating: 4.7,
      reviews: 123,
      popular: false
    },

    // Quantum Computing
    {
      name: 'Quantum Computing as a Service',
      category: 'quantum-computing',
      description: 'Access to quantum computing resources and specialized algorithms',
      href: '/services/quantum-computing-as-a-service',
      price: 'Custom Pricing',
      features: ['Quantum Access', 'Algorithm Development', 'Problem Solving', 'Research Support'],
      icon: Atom,
      rating: 4.9,
      reviews: 45,
      popular: true
    },
    {
      name: 'Quantum AI Platform',
      category: 'quantum-computing',
      description: 'Hybrid quantum-classical AI platform for advanced problem solving',
      href: '/services/quantum-ai-hybrid-platform',
      price: 'Custom Pricing',
      features: ['Quantum Algorithms', 'AI Integration', 'Hybrid Computing', 'Performance Optimization'],
      icon: Brain,
      rating: 4.8,
      reviews: 67,
      popular: true
    },
    {
      name: 'Quantum Machine Learning',
      category: 'quantum-computing',
      description: 'Quantum-enhanced machine learning algorithms and applications',
      href: '/services/quantum-machine-learning',
      price: 'Custom Pricing',
      features: ['Quantum ML', 'Algorithm Optimization', 'Model Training', 'Performance Analysis'],
      icon: Cpu,
      rating: 4.7,
      reviews: 34,
      popular: false
    },

    // Emerging Technologies
    {
      name: 'Blockchain Solutions',
      category: 'emerging-tech',
      description: 'Enterprise blockchain solutions and decentralized applications',
      href: '/services/blockchain-enterprise-solutions',
      price: 'Custom Pricing',
      features: ['Smart Contracts', 'DApp Development', 'Supply Chain', 'Identity Management'],
      icon: Network,
      rating: 4.6,
      reviews: 89,
      popular: false
    },
    {
      name: 'Space Technology',
      category: 'emerging-tech',
      description: 'Innovative space technology solutions for satellite and space exploration',
      href: '/services/space-tech',
      price: 'Custom Pricing',
      features: ['Satellite Operations', 'Space Analytics', 'Mission Planning', 'Ground Station Management'],
      icon: Satellite,
      rating: 4.8,
      reviews: 56,
      popular: true
    },
    {
      name: 'Sustainable Technology',
      category: 'emerging-tech',
      description: 'Green technology solutions for environmental sustainability',
      href: '/services/sustainable-technology',
      price: 'Custom Pricing',
      features: ['Energy Optimization', 'Carbon Tracking', 'Green Infrastructure', 'Sustainability Analytics'],
      icon: Leaf,
      rating: 4.7,
      reviews: 78,
      popular: false
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Zap;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Comprehensive
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                {' '}Service Portfolio
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              From micro SAAS solutions to enterprise AI platforms, discover the tools and expertise 
              your business needs to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-gradient-to-br ${category.color} p-8 rounded-xl text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-12 h-12 mr-4" />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="flex items-center text-sm">
                  <span className="mr-2">
                    {allServices.filter(service => service.category === category.id).length} Services
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-darker border-b border-zion-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-zion-slate-dark border border-zion-purple/30 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedCategory === 'all' ? 'All Services' : serviceCategories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-zion-slate-light">
              {filteredServices.length} services found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-zion-slate-light ml-1">{service.rating}</span>
                          </div>
                          <span className="text-sm text-zion-slate-light">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className="text-zion-slate-light mb-4 text-sm">{service.description}</p>

                  {/* Service Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Service Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium text-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service) => (
                <div key={service.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                          <p className="text-zion-slate-light mb-3">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                          <div className="flex items-center justify-end space-x-2 mb-2">
                            <div className="flex items-center">
                              <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-zion-slate-light ml-1">{service.rating}</span>
                            </div>
                            <span className="text-sm text-zion-slate-light">({service.reviews})</span>
                          </div>
                          {service.popular && (
                            <span className="px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-zion-slate-light">
                            Category: {serviceCategories.find(cat => cat.id === service.category)?.name}
                          </span>
                        </div>
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zion-slate-darker rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact our team to discuss your specific needs and discover how our services 
            can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              View Pricing
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}