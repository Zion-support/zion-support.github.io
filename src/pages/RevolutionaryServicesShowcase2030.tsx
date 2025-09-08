import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Zap, Rocket, Cpu, TrendingUp, 
  Target, Users, CheckCircle, ArrowRight, Star, Globe,
  Lock, Leaf, Heart, Database, Network, Eye, Search,
  Filter, Grid, List, Play, ExternalLink, Award
} from 'lucide-react';

const RevolutionaryServicesShowcase2030: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud & Infrastructure', 'Digital Transformation'];

  const revolutionaryServices = [
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
      delivery: '8-12 weeks'
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
      delivery: '6-10 weeks'
    },
    {
      id: 'quantum-ready-platform',
      name: 'Quantum-Ready Platform',
      category: 'Quantum Computing',
      description: 'Future-proof infrastructure for quantum computing integration',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      features: ['Quantum algorithm support', 'Hybrid classical-quantum', 'Future scalability'],
      benefits: ['Quantum advantage preparation', 'Investment protection', 'Competitive edge'],
      demo: 'https://demo.ziontechgroup.com/quantum-platform',
      caseStudy: '/case-studies/quantum-ready-platform',
      pricing: 'Starting at $25,000/month',
      roi: '500-800%',
      delivery: '12-16 weeks'
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
      delivery: '4-8 weeks'
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
      delivery: '6-10 weeks'
    },
    {
      id: 'digital-transformation-2030',
      name: 'Digital Transformation 2030',
      category: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      features: ['Strategy development', 'Process optimization', 'Technology roadmap'],
      benefits: ['Complete digital overhaul', 'Competitive advantage', 'Future readiness'],
      demo: 'https://demo.ziontechgroup.com/digital-transformation',
      caseStudy: '/case-studies/digital-transformation-2030',
      pricing: 'Starting at $50,000/month',
      roi: '600-1000%',
      delivery: '16-24 weeks'
    }
  ];

  const filteredServices = revolutionaryServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Revolutionary Services Showcase 2030 - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary technology services showcase for 2030. Interactive demos, case studies, and comprehensive solutions." />
        <meta name="keywords" content="revolutionary services showcase 2030, technology demos, case studies, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Services
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2030
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the future of technology through interactive demos, detailed case studies, 
              and comprehensive solutions designed for 2030 and beyond.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-slate-300 text-sm">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Live</div>
              <div className="text-slate-300 text-sm">Demos Available</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500%+</div>
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

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
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
                    <span className="inline-block px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded mb-2">
                      {service.category}
                    </span>
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
                      <span className="text-slate-400">Category:</span>
                      <div className="text-white font-semibold">{service.category}</div>
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
              Ready to Experience the Future?
            </h2>
            <p className="text-slate-300 mb-6">
              Schedule a personalized demo of our revolutionary services and see how they can 
              transform your business for 2030 and beyond.
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

export default RevolutionaryServicesShowcase2030;