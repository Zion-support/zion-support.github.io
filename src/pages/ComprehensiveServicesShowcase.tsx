import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Database,
  Network,
  Zap,
  Target,
  Users,
  Globe,
  Lock,
  BarChart3,
  Rocket,
  Microchip,
  Code,
  Server,
  ShieldCheck,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES,
    ...SPECIALIZED_IT_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $500/month' },
    { value: 'mid', label: '$500 - $1,500/month' },
    { value: 'premium', label: '$1,500 - $3,000/month' },
    { value: 'enterprise', label: 'Over $3,000/month' }
  ];

  // Filter services based on search, category, and price
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'budget') matchesPrice = service.price < 500;
    else if (selectedPriceRange === 'mid') matchesPrice = service.price >= 500 && service.price < 1500;
    else if (selectedPriceRange === 'premium') matchesPrice = service.price >= 1500 && service.price < 3000;
    else if (selectedPriceRange === 'enterprise') matchesPrice = service.price >= 3000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Get service count by category
  const getServiceCountByCategory = (category: string) => {
    if (category === 'all') return allServices.length;
    return allServices.filter(service => service.category === category).length;
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'AI & Financial Technology': Brain,
      'AI & Healthcare': Brain,
      'AI & Legal Technology': Brain,
      'AI & Manufacturing': Brain,
      'AI & Retail Technology': Brain,
      'AI & Real Estate': Brain,
      'AI & Education Technology': Brain,
      'AI & Logistics': Brain,
      'AI & Energy Technology': Brain,
      'AI & Marketing Technology': Brain,
      'Quantum Computing': Microchip,
      'Edge Computing': Server,
      'Neuromorphic Computing': Brain,
      '6G Networks': Network,
      'Space Technology': Rocket,
      'Brain-Computer Interface': Brain,
      'Synthetic Biology': Code,
      'Quantum Internet': Lock,
      'Fusion Energy': Zap,
      'Metaverse': Globe,
      'Cybersecurity': Shield,
      'Cloud Computing': Cloud,
      'IT Operations': Cpu,
      'Data Management': Database,
      'Network Management': Network,
      'DevOps': Code,
      'Application Management': Server,
      'IT Service Management': ShieldCheck,
      'Cloud Services': Cloud,
      'Business Continuity': ShieldCheck
    };
    return iconMap[category] || Target;
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'AI & Financial Technology': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal Technology': 'from-blue-500 to-indigo-500',
      'AI & Manufacturing': 'from-orange-500 to-yellow-500',
      'AI & Retail Technology': 'from-purple-500 to-pink-500',
      'AI & Real Estate': 'from-teal-500 to-cyan-500',
      'AI & Education Technology': 'from-indigo-500 to-purple-500',
      'AI & Logistics': 'from-blue-500 to-cyan-500',
      'AI & Energy Technology': 'from-yellow-500 to-orange-500',
      'AI & Marketing Technology': 'from-pink-500 to-red-500',
      'Quantum Computing': 'from-blue-500 to-cyan-500',
      'Edge Computing': 'from-green-500 to-teal-500',
      'Neuromorphic Computing': 'from-purple-500 to-indigo-500',
      '6G Networks': 'from-cyan-500 to-blue-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Brain-Computer Interface': 'from-pink-500 to-red-500',
      'Synthetic Biology': 'from-green-500 to-emerald-500',
      'Quantum Internet': 'from-blue-500 to-indigo-500',
      'Fusion Energy': 'from-yellow-500 to-orange-500',
      'Metaverse': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud Computing': 'from-blue-500 to-indigo-500',
      'IT Operations': 'from-gray-500 to-slate-500',
      'Data Management': 'from-teal-500 to-cyan-500',
      'Network Management': 'from-indigo-500 to-purple-500',
      'DevOps': 'from-orange-500 to-yellow-500',
      'Application Management': 'from-green-500 to-emerald-500',
      'IT Service Management': 'from-blue-500 to-cyan-500',
      'Cloud Services': 'from-cyan-500 to-blue-500',
      'Business Continuity': 'from-emerald-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <SEOHead 
        title="Comprehensive Services Showcase - Zion Tech Group"
        description="Explore our complete portfolio of AI-powered solutions, emerging technologies, and specialized IT services designed to transform your business."
        keywords="AI services, emerging technology, IT solutions, micro SAAS, quantum computing, cybersecurity, cloud services"
        type="website"
        url="https://ziontechgroup.com/comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span> Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge AI solutions, emerging technologies, and specialized IT services. 
            From micro SAAS applications to quantum computing platforms, we provide the tools you need to stay ahead of the competition.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-400">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category} ({getServiceCountByCategory(category)})
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setSelectedPriceRange(range.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.value
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, idx) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${categoryColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Category and Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">
                      ${service.price.toLocaleString()}/mo
                    </div>
                    <div className="text-xs text-gray-400">
                      {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 3).map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Market Price */}
                <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Market Price: {service.marketPrice}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Contact Information */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the right technology solutions. 
              Get in touch to discuss your needs and discover how we can accelerate your digital transformation.
            </p>
            
            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}