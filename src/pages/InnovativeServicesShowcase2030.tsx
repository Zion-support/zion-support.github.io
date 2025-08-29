import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Zap, Rocket, Cpu, TrendingUp, 
  Target, Users, CheckCircle, ArrowRight, Star, Globe,
  Lock, Leaf, Heart, Database, Network, Eye, Search,
  Filter, Grid, List, Play, ExternalLink, Award, Calendar
} from 'lucide-react';

const InnovativeServicesShowcase2030: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud & Infrastructure', 'Digital Transformation', 'Healthcare Tech', 'Sustainability', 'Space Tech'];

  const innovativeServices2030 = [
    {
      id: 'quantum-ai-orchestrator',
      name: 'Quantum AI Orchestrator',
      category: 'AI & Machine Learning',
      description: 'Next-generation quantum AI platform for enterprise orchestration and decision making',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: ['Quantum AI algorithms', 'Multi-dimensional processing', 'Real-time optimization'],
      benefits: ['Quantum advantage', 'Exponential performance', 'Future-proof technology'],
      demo: 'https://demo.ziontechgroup.com/quantum-ai-orchestrator',
      caseStudy: '/case-studies/quantum-ai-orchestrator',
      pricing: 'Starting at $50,000/month',
      roi: '800-1200%',
      delivery: '16-24 weeks',
      innovation: 'Revolutionary'
    },
    {
      id: 'ai-cybersecurity-suite-2030',
      name: 'AI Cybersecurity Suite 2030',
      category: 'Cybersecurity',
      description: 'Quantum-resistant AI cybersecurity with predictive threat intelligence',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['Quantum-resistant encryption', 'AI threat prediction', 'Zero-trust architecture'],
      benefits: ['Quantum-safe security', 'Predictive protection', 'Unbreakable encryption'],
      demo: 'https://demo.ziontechgroup.com/ai-cybersecurity-2030',
      caseStudy: '/case-studies/ai-cybersecurity-suite-2030',
      pricing: 'Starting at $25,000/month',
      roi: '600-900%',
      delivery: '12-18 weeks',
      innovation: 'Revolutionary'
    },
    {
      id: 'quantum-cloud-platform',
      name: 'Quantum Cloud Platform',
      category: 'Cloud & Infrastructure',
      description: 'Hybrid quantum-classical cloud infrastructure for next-generation computing',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      features: ['Quantum computing access', 'Hybrid algorithms', 'Quantum networking'],
      benefits: ['Quantum computing power', 'Hybrid optimization', 'Future scalability'],
      demo: 'https://demo.ziontechgroup.com/quantum-cloud',
      caseStudy: '/case-studies/quantum-cloud-platform',
      pricing: 'Starting at $35,000/month',
      roi: '500-800%',
      delivery: '20-28 weeks',
      innovation: 'Revolutionary'
    },
    {
      id: 'digital-transformation-2030',
      name: 'Digital Transformation 2030',
      category: 'Digital Transformation',
      description: 'Complete digital transformation with quantum and AI technologies',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      features: ['Quantum strategy', 'AI transformation', 'Future roadmap'],
      benefits: ['Complete transformation', 'Competitive advantage', 'Future readiness'],
      demo: 'https://demo.ziontechgroup.com/digital-transformation-2030',
      caseStudy: '/case-studies/digital-transformation-2030',
      pricing: 'Starting at $100,000/month',
      roi: '1000-1500%',
      delivery: '24-36 weeks',
      innovation: 'Revolutionary'
    },
    {
      id: 'healthcare-tech-2030',
      name: 'Healthcare Tech 2030',
      category: 'Healthcare Tech',
      description: 'AI-powered healthcare with quantum computing and advanced diagnostics',
      icon: Heart,
      color: 'from-pink-500 to-red-600',
      features: ['Quantum diagnostics', 'AI treatment planning', 'Personalized medicine'],
      benefits: ['Revolutionary diagnostics', 'Personalized care', 'Improved outcomes'],
      demo: 'https://demo.ziontechgroup.com/healthcare-tech-2030',
      caseStudy: '/case-studies/healthcare-tech-2030',
      pricing: 'Starting at $40,000/month',
      roi: '700-1000%',
      delivery: '18-24 weeks',
      innovation: 'Revolutionary'
    },
    {
      id: 'sustainability-2030',
      name: 'Sustainability 2030',
      category: 'Sustainability',
      description: 'Advanced sustainability solutions with quantum optimization and AI',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
      features: ['Quantum optimization', 'AI climate modeling', 'Sustainable AI'],
      benefits: ['Climate optimization', 'Resource efficiency', 'Environmental impact'],
      demo: 'https://demo.ziontechgroup.com/sustainability-2030',
      caseStudy: '/case-studies/sustainability-2030',
      pricing: 'Starting at $15,000/month',
      roi: '400-600%',
      delivery: '12-16 weeks',
      innovation: 'Advanced'
    },
    {
      id: 'space-tech-platform',
      name: 'Space Tech Platform',
      category: 'Space Tech',
      description: 'AI and quantum computing solutions for space exploration and satellite operations',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      features: ['Satellite AI', 'Quantum communications', 'Space optimization'],
      benefits: ['Space efficiency', 'Advanced communications', 'Exploration capabilities'],
      demo: 'https://demo.ziontechgroup.com/space-tech',
      caseStudy: '/case-studies/space-tech-platform',
      pricing: 'Starting at $75,000/month',
      roi: '900-1200%',
      delivery: '24-32 weeks',
      innovation: 'Revolutionary'
    },
    {
      id: 'quantum-finance-platform',
      name: 'Quantum Finance Platform',
      category: 'AI & Machine Learning',
      description: 'Quantum computing platform for financial modeling and trading optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      features: ['Quantum trading', 'Risk optimization', 'Portfolio management'],
      benefits: ['Quantum advantage', 'Risk reduction', 'Performance optimization'],
      demo: 'https://demo.ziontechgroup.com/quantum-finance',
      caseStudy: '/case-studies/quantum-finance-platform',
      pricing: 'Starting at $60,000/month',
      roi: '800-1100%',
      delivery: '20-28 weeks',
      innovation: 'Revolutionary'
    }
  ];

  const filteredServices = innovativeServices2030.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const innovationLevels = [
    {
      level: 'Revolutionary',
      description: 'Breakthrough quantum and AI technology that transforms industries',
      color: 'from-purple-500 to-pink-600',
      count: innovativeServices2030.filter(s => s.innovation === 'Revolutionary').length
    },
    {
      level: 'Advanced',
      description: 'Cutting-edge solutions with proven results and future potential',
      color: 'from-cyan-500 to-blue-600',
      count: innovativeServices2030.filter(s => s.innovation === 'Advanced').length
    }
  ];

  const futureTechnologies = [
    {
      title: 'Quantum Computing',
      description: 'Access to quantum computing power for complex problem solving',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI Evolution',
      description: 'Next-generation AI with quantum-enhanced capabilities',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Space Technology',
      description: 'Advanced solutions for space exploration and satellite operations',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Sustainable AI',
      description: 'AI solutions designed for environmental sustainability',
      icon: Leaf,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2030 - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovative technology services showcase for 2030. Quantum computing, AI evolution, space technology, and sustainable solutions." />
        <meta name="keywords" content="innovative services showcase 2030, quantum computing, AI evolution, space technology, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Showcase 2030
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the future of technology with our revolutionary quantum computing, AI evolution, 
              and space technology solutions designed for 2030 and beyond.
            </p>
          </div>
          
          {/* Innovation Level Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {innovationLevels.map((level, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-xl">{level.count}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{level.level}</div>
                <div className="text-slate-300 text-sm">{level.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technologies of the Future
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureTechnologies.map((tech, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-slate-300 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Innovation at Every Level
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Technology</h3>
              <p className="text-slate-300 mb-6">
                Breakthrough solutions that combine quantum computing, AI evolution, and space technology 
                to transform industries and create new possibilities. Our revolutionary services represent 
                the cutting edge of what's possible in 2030.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">Quantum computing power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">AI evolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">Space technology</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Solutions</h3>
              <p className="text-slate-300 mb-6">
                Cutting-edge solutions that deliver proven results and competitive advantages. 
                Our advanced services leverage the latest technologies to optimize operations, 
                enhance sustainability, and drive business growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Proven performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Competitive advantage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">Future scalability</span>
                </div>
              </div>
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
                placeholder="Search innovative services 2030..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-purple-400/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-purple-400/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none text-white"
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
                      ? 'bg-purple-500 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-purple-500 text-white' 
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
                      <span className={`inline-block px-2 py-1 text-xs rounded border ${
                        service.innovation === 'Revolutionary' 
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                          : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                      }`}>
                        {service.innovation}
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
                      <span className="text-slate-400">Innovation:</span>
                      <div className={`font-semibold ${
                        service.innovation === 'Revolutionary' ? 'text-purple-400' : 'text-cyan-400'
                      }`}>
                        {service.innovation}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={service.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
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
                      className="inline-flex items-center px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200"
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
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for 2030?
            </h2>
            <p className="text-slate-300 mb-6">
              Experience our revolutionary quantum computing, AI evolution, and space technology solutions. 
              Schedule a demo and discover how we can transform your business for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
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

export default InnovativeServicesShowcase2030;