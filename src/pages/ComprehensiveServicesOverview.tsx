import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
  TrendingUp, 
  Zap, 
  Target, 
  Sparkles,
  Globe,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Microchip,
  Atom,
  Satellite,
  Leaf,
  Battery,
  Eye,
  Heart,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: string[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform business operations',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    services: [
      'AI Business Intelligence Suite',
      'Quantum Machine Learning Platform',
      'Edge AI Platform',
      'AI Marketing Automation',
      'AI HR Management Platform',
      'AI Legal Technology Platform'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security solutions to protect your digital assets',
    icon: Shield,
    color: 'from-purple-500 to-pink-600',
    services: [
      'Cybersecurity Compliance Automation',
      'SOC2 Compliance Automation',
      'Advanced Threat Detection',
      'Security Policy Management',
      'Incident Response Automation'
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and robust IT infrastructure management',
    icon: Cpu,
    color: 'from-green-500 to-emerald-600',
    services: [
      'IoT Management Platform',
      'Edge Computing Solutions',
      'Cloud Migration Services',
      'DevOps Automation',
      'Infrastructure as Code'
    ]
  },
  {
    id: 'blockchain-defi',
    name: 'Blockchain & DeFi',
    description: 'Enterprise blockchain solutions and decentralized finance platforms',
    icon: Network,
    color: 'from-yellow-500 to-orange-600',
    services: [
      'Blockchain & DeFi Platform',
      'Smart Contract Development',
      'Token Management System',
      'DeFi Protocol Integration',
      'Cross-chain Solutions'
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: Atom,
    color: 'from-violet-500 to-purple-600',
    services: [
      'Quantum Computing Platform',
      'Quantum Machine Learning',
      'Quantum Internet Platform',
      'Quantum Algorithm Library',
      'Quantum Simulation Tools'
    ]
  },
  {
    id: 'emerging-technologies',
    name: 'Emerging Technologies',
    description: 'Cutting-edge solutions in neuromorphic computing, 6G, and space tech',
    icon: Rocket,
    color: 'from-pink-500 to-rose-600',
    services: [
      'Neuromorphic Computing Platform',
      '6G Network Infrastructure',
      'Space Technology Platform',
      'Brain-Computer Interface',
      'Fusion Energy Platform'
    ]
  },
  {
    id: 'sustainability',
    name: 'Sustainability & ESG',
    description: 'Environmental impact monitoring and sustainability optimization',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-600',
    services: [
      'Sustainable Technology Platform',
      'Carbon Footprint Tracking',
      'Energy Efficiency Optimization',
      'ESG Compliance Tools',
      'Environmental Impact Analytics'
    ]
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    description: 'Fully autonomous business operations and intelligent automation',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    services: [
      'Autonomous Business Operations',
      'Autonomous Manufacturing Platform',
      'AI Business Agents',
      'Process Orchestration',
      'Predictive Maintenance'
    ]
  }
];

const ComprehensiveServicesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = SERVICE_CATEGORIES.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: ServiceCategory) => {
    const IconComponent = category.icon;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEOHead
        title="Comprehensive Technology Services Overview | Zion Tech Group"
        description="Explore our complete portfolio of AI, cybersecurity, blockchain, quantum computing, and emerging technology solutions. Transform your business with cutting-edge innovation."
        keywords="comprehensive services, AI solutions, cybersecurity, blockchain, quantum computing, emerging technology, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Comprehensive Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge technology solutions designed to accelerate your digital transformation and drive innovation across all aspects of your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/innovative-services-showcase"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-zion-blue-dark/50 border-y border-zion-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-zion-purple-light">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan w-full sm:w-64"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredCategories.length} Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions across all major technology domains
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-sm">{category.services.length} services</p>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-zion-slate-light mb-6 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      Key Services
                    </h4>
                    <div className="space-y-2">
                      {category.services.slice(0, 4).map((service, index) => (
                        <div key={index} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 4 && (
                        <div className="text-zion-purple-light text-sm font-medium">
                          +{category.services.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/innovative-services-showcase?category=${category.id}`}
                    className="w-full text-center px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Explore {category.name}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                      {getCategoryIcon(category)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                          <p className="text-zion-slate-light text-lg mb-3">{category.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-zion-cyan font-semibold text-lg">{category.services.length} Services</div>
                          <div className="text-zion-slate-light text-sm">Available</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-zion-cyan" />
                            Featured Services
                          </h4>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, index) => (
                              <div key={index} className="flex items-start gap-2 text-zion-slate-light text-sm">
                                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-zion-cyan" />
                            Key Benefits
                          </h4>
                          <div className="space-y-2 text-zion-slate-light text-sm">
                            <div>• Accelerate digital transformation</div>
                            <div>• Reduce operational costs</div>
                            <div>• Improve efficiency & productivity</div>
                            <div>• Future-proof your business</div>
                            <div>• Competitive advantage</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          to={`/innovative-services-showcase?category=${category.id}`}
                          className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                        >
                          Explore Services
                        </Link>
                        <Link
                          to="/contact"
                          className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">
                No service categories found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our services leverage the latest technologies and frameworks to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'AI & ML', icon: Brain, color: 'from-cyan-500 to-blue-600' },
              { name: 'Quantum', icon: Atom, color: 'from-violet-500 to-purple-600' },
              { name: 'Blockchain', icon: Network, color: 'from-yellow-500 to-orange-600' },
              { name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-emerald-600' },
              { name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-pink-600' },
              { name: 'Cloud Native', icon: Globe, color: 'from-blue-500 to-indigo-600' },
              { name: 'Autonomous', icon: Zap, color: 'from-orange-500 to-red-600' },
              { name: 'Sustainability', icon: Leaf, color: 'from-emerald-500 to-teal-600' }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center group">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our comprehensive technology solutions are designed to accelerate your digital transformation and give you a competitive edge in today's rapidly evolving market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/innovative-services-showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-12 bg-zion-blue-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-zion-slate-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <div className="text-zion-slate-light">
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Learn More</h3>
              <div className="space-y-2">
                <Link to="/innovative-services-showcase" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  All Services
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  Case Studies
                </Link>
                <Link to="/about" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  About Zion Tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview;