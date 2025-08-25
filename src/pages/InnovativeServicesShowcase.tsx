import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  Cloud,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Users,
  TrendingUp,
  Award,
  Globe,
  Cpu,
  Lock,
  Microchip,
  Globe2,
  BarChart,
  ShieldCheck,
  Zap as ZapIcon,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../data/specializedITInfrastructureServices';

const SEOConfig = {
  title: "Innovative Services Showcase - Zion Tech Group",
  description: "Discover our cutting-edge AI, micro-SaaS, and IT infrastructure services. Transform your business with innovative solutions designed for the future.",
  keywords: "AI services, micro-SaaS, IT infrastructure, innovative solutions, Zion Tech Group",
  ogImage: "/images/innovative-services-showcase.jpg"
};

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [
    ...ADVANCED_AI_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid, count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: Brain, count: ADVANCED_AI_SERVICES.length },
    { id: 'Project Management', name: 'Project Mgmt', icon: Target, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'Project Management').length },
    { id: 'Blockchain & Supply Chain', name: 'Blockchain', icon: Shield, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'Blockchain & Supply Chain').length },
    { id: 'IoT & Energy', name: 'IoT & Energy', icon: Zap, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'IoT & Energy').length },
    { id: 'Human Resources', name: 'HR Analytics', icon: Users, count: INNOVATIVE_MICRO_SAAS_SERVICES.filter(s => s.category === 'Human Resources').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Lock, count: SPECIALIZED_IT_INFRASTRUCTURE_SERVICES.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Cloud Computing', name: 'Cloud', icon: Cloud, count: SPECIALIZED_IT_INFRASTRUCTURE_SERVICES.filter(s => s.category === 'Cloud Computing').length },
    { id: 'Networking', name: 'Networking', icon: Network, count: SPECIALIZED_IT_INFRASTRUCTURE_SERVICES.filter(s => s.category === 'Networking').length },
    { id: 'DevOps & Containers', name: 'DevOps', icon: Code, count: SPECIALIZED_IT_INFRASTRUCTURE_SERVICES.filter(s => s.category === 'DevOps & Containers').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : Grid;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-600',
      'Project Management': 'from-blue-500 to-cyan-600',
      'Blockchain & Supply Chain': 'from-green-500 to-emerald-600',
      'IoT & Energy': 'from-orange-500 to-red-600',
      'Human Resources': 'from-indigo-500 to-purple-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Cloud Computing': 'from-blue-500 to-indigo-600',
      'Networking': 'from-teal-500 to-cyan-600',
      'DevOps & Containers': 'from-gray-500 to-blue-600',
      'IT Infrastructure': 'from-slate-500 to-gray-600'
    };
    return colors[category] || 'from-gray-500 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...SEOConfig} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Innovative Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge AI, micro-SaaS, and IT infrastructure services designed to transform your business and drive innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 w-full sm:w-80"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filters</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="p-8">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-400 capitalize">{service.pricingModel}</div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 mt-2">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Benefits</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-cyan-400 font-semibold">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technology</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded">
                            {tech}
                          </span>
                        ))}
                        {service.technology.length > 4 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-500 rounded">
                            +{service.technology.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Link>

                    {/* Contact Info */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                        <a href={`tel:${service.contactInfo.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                          <Phone className="w-4 h-4" />
                          {service.contactInfo.phone}
                        </a>
                        <a href={`mailto:${service.contactInfo.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                          <Mail className="w-4 h-4" />
                          {service.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Solutions</h3>
              <p className="text-gray-300">Leverage the latest AI and machine learning technologies for competitive advantage</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="text-gray-300">Stay ahead with cutting-edge technologies and forward-thinking solutions</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-grade security and compliance for your most critical business applications</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-300">Dedicated support team with deep expertise in modern technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of businesses that have already revolutionized their operations with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your project? Our team of experts is here to help you find the perfect solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">Available 24/7 for urgent matters</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase;