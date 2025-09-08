import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Zap, Rocket, Cpu, TrendingUp, 
  Target, Users, CheckCircle, ArrowRight, Star, Globe,
  Lock, Leaf, Heart, Database, Network, Eye, Search,
  Filter, Grid, List, Play, ExternalLink, Award, Calendar
} from 'lucide-react';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud & Infrastructure', 'Digital Transformation', 'Healthcare Tech', 'Sustainability', 'Micro SaaS'];

  const comprehensiveServices = [
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      category: 'AI & Machine Learning',
      description: 'Multi-agent AI coordination platform for enterprise workflow automation',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Process optimization'],
      benefits: ['40% efficiency increase', 'Real-time decision making', 'Scalable AI operations'],
      demo: 'https://demo.ziontechgroup.com/ai-orchestrator',
      caseStudy: '/case-studies/ai-enterprise-orchestrator',
      pricing: 'Starting at $15,000/month',
      roi: '300-500%',
      delivery: '8-12 weeks',
      availability: 'Q1 2026'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'Cybersecurity',
      description: 'Next-generation AI-powered threat detection and response',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['Advanced threat detection', 'Automated response', 'Predictive security'],
      benefits: ['99.9% threat detection rate', 'Zero false positives', '24/7 protection'],
      demo: 'https://demo.ziontechgroup.com/ai-cybersecurity',
      caseStudy: '/case-studies/ai-cybersecurity-suite',
      pricing: 'Starting at $12,000/month',
      roi: '400-600%',
      delivery: '6-10 weeks',
      availability: 'Q1 2026'
    },
    {
      id: 'cloud-devops-revolution',
      name: 'Cloud DevOps Revolution',
      category: 'Cloud & Infrastructure',
      description: 'Next-generation cloud infrastructure and DevOps automation',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      features: ['Infrastructure as code', 'Automated deployment', 'Multi-cloud support'],
      benefits: ['90% faster deployments', '99.99% uptime', 'Cost optimization'],
      demo: 'https://demo.ziontechgroup.com/cloud-devops',
      caseStudy: '/case-studies/cloud-devops-revolution',
      pricing: 'Starting at $10,000/month',
      roi: '200-350%',
      delivery: '6-10 weeks',
      availability: 'Q2 2026'
    },
    {
      id: 'digital-transformation-2026',
      name: 'Digital Transformation 2026',
      category: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      features: ['Strategy development', 'Process optimization', 'Technology roadmap'],
      benefits: ['Complete digital overhaul', 'Competitive advantage', 'Future readiness'],
      demo: 'https://demo.ziontechgroup.com/digital-transformation',
      caseStudy: '/case-studies/digital-transformation-2026',
      pricing: 'Starting at $50,000/month',
      roi: '600-1000%',
      delivery: '16-24 weeks',
      availability: 'Q2 2026'
    },
    {
      id: 'healthcare-tech-platform',
      name: 'Healthcare Tech Platform',
      category: 'Healthcare Tech',
      description: 'AI-powered healthcare technology platform for modern medical facilities',
      icon: Heart,
      color: 'from-pink-500 to-red-600',
      features: ['Patient data management', 'AI diagnostics', 'Telemedicine integration'],
      benefits: ['Improved patient outcomes', 'Reduced medical errors', 'Operational efficiency'],
      demo: 'https://demo.ziontechgroup.com/healthcare-tech',
      caseStudy: '/case-studies/healthcare-tech-platform',
      pricing: 'Starting at $20,000/month',
      roi: '350-500%',
      delivery: '12-16 weeks',
      availability: 'Q3 2026'
    },
    {
      id: 'sustainability-solutions',
      name: 'Sustainability Solutions',
      category: 'Sustainability',
      description: 'Green technology solutions for environmental sustainability',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      features: ['Carbon footprint tracking', 'Energy optimization', 'Sustainable reporting'],
      benefits: ['Environmental compliance', 'Cost savings', 'Brand reputation'],
      demo: 'https://demo.ziontechgroup.com/sustainability',
      caseStudy: '/case-studies/sustainability-solutions',
      pricing: 'Starting at $8,000/month',
      roi: '250-400%',
      delivery: '8-12 weeks',
      availability: 'Q3 2026'
    },
    {
      id: 'micro-saas-suite',
      name: 'Micro SaaS Suite',
      category: 'Micro SaaS',
      description: 'Collection of focused, AI-powered micro SaaS solutions',
      icon: Zap,
      color: 'from-indigo-500 to-purple-600',
      features: ['AI Lead Scoring', 'Website Chatbot', 'Content Optimizer'],
      benefits: ['Quick implementation', 'Affordable pricing', 'Immediate ROI'],
      demo: 'https://demo.ziontechgroup.com/micro-saas',
      caseStudy: '/case-studies/micro-saas-suite',
      pricing: 'Starting at $500/month',
      roi: '150-300%',
      delivery: '2-4 weeks',
      availability: 'Q4 2026'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'AI & Machine Learning',
      description: 'Predictive analytics and intelligent business insights',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      features: ['Predictive analytics', 'Real-time insights', 'Automated reporting'],
      benefits: ['Data-driven decisions', 'Market trend prediction', 'ROI optimization'],
      demo: 'https://demo.ziontechgroup.com/ai-bi',
      caseStudy: '/case-studies/ai-business-intelligence',
      pricing: 'Starting at $8,000/month',
      roi: '250-400%',
      delivery: '4-8 weeks',
      availability: 'Q1 2026'
    }
  ];

  const filteredServices = comprehensiveServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const roadmap2026 = [
    {
      quarter: 'Q1 2026',
      services: ['AI Enterprise Orchestrator', 'AI Cybersecurity Suite', 'AI Business Intelligence'],
      focus: 'AI & Machine Learning Foundation'
    },
    {
      quarter: 'Q2 2026',
      services: ['Cloud DevOps Revolution', 'Digital Transformation 2026'],
      focus: 'Infrastructure & Transformation'
    },
    {
      quarter: 'Q3 2026',
      services: ['Healthcare Tech Platform', 'Sustainability Solutions'],
      focus: 'Specialized Industry Solutions'
    },
    {
      quarter: 'Q4 2026',
      services: ['Micro SaaS Suite', 'Advanced AI Tools'],
      focus: 'Micro Solutions & AI Enhancement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive technology services showcase for 2026. AI, cybersecurity, cloud, healthcare, and sustainability solutions." />
        <meta name="keywords" content="comprehensive services showcase 2026, technology solutions, AI services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Showcase 2026
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive technology solutions launching throughout 2026. 
              From AI and cybersecurity to healthcare and sustainability, we're building the future.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">8</div>
              <div className="text-slate-300 text-sm">New Services</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">4</div>
              <div className="text-slate-300 text-sm">Quarters</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">400%+</div>
              <div className="text-slate-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            2026 Launch Roadmap
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap2026.map((quarter, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{quarter.quarter}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-3">{quarter.focus}</h3>
                
                <ul className="space-y-2">
                  {quarter.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search comprehensive services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-800/70 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                viewMode === 'list' ? 'flex items-start space-x-6' : ''
              }`}>
                <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {service.category}
                      </span>
                      <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded border border-cyan-500/30">
                        {service.availability}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-slate-300 mb-3">{service.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-slate-400">Pricing:</span>
                      <div className="text-white font-semibold">{service.pricing}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">ROI:</span>
                      <div className="text-white font-semibold">{service.roi}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Delivery:</span>
                      <div className="text-white font-semibold">{service.delivery}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Launch:</span>
                      <div className="text-cyan-400 font-semibold">{service.availability}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    
                    <Link
                      to={service.caseStudy}
                      className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
                    >
                      Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for 2026?
            </h2>
            <p className="text-slate-300 mb-6">
              Be among the first to experience our comprehensive technology solutions. 
              Schedule a demo and secure early access to our 2026 services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;