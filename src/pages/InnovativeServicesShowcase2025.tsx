import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Globe,
  Building,
  Car,
  GraduationCap,
  Home,
  Truck,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(service => service.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: '2000-3000', label: '$2,000 - $3,000' },
    { value: '3000+', label: '$3,000+' }
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (selectedPriceRange === '3000+') {
        matchesPrice = service.price >= 3000;
      } else {
        matchesPrice = service.price >= min && service.price <= max;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'FinTech & AI': <TrendingUp className="w-5 h-5" />,
      'Healthcare & AI': <Building className="w-5 h-5" />,
      'Legal Tech & AI': <Shield className="w-5 h-5" />,
      'Marketing & AI': <Globe className="w-5 h-5" />,
      'Supply Chain & AI': <Truck className="w-5 h-5" />,
      'Energy & Sustainability': <Zap className="w-5 h-5" />,
      'Cybersecurity & AI': <Shield className="w-5 h-5" />,
      'Education & AI': <GraduationCap className="w-5 h-5" />,
      'Real Estate & AI': <Home className="w-5 h-5" />,
      'Transportation & AI': <Car className="w-5 h-5" />
    };
    return icons[category] || <Brain className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'FinTech & AI': 'from-green-500 to-emerald-500',
      'Healthcare & AI': 'from-blue-500 to-cyan-500',
      'Legal Tech & AI': 'from-purple-500 to-indigo-500',
      'Marketing & AI': 'from-pink-500 to-rose-500',
      'Supply Chain & AI': 'from-orange-500 to-red-500',
      'Energy & Sustainability': 'from-yellow-500 to-orange-500',
      'Cybersecurity & AI': 'from-red-500 to-pink-500',
      'Education & AI': 'from-teal-500 to-cyan-500',
      'Real Estate & AI': 'from-indigo-500 to-blue-500',
      'Transportation & AI': 'from-gray-500 to-slate-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative Micro SAAS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions powered by artificial intelligence. 
            Each service is designed to transform your business with innovative technology and proven ROI.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-gray-300">
              Each service is designed with cutting-edge AI technology and proven business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <span className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Pricing and ROI */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl font-bold text-green-400">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">Market Price</div>
                      <div className="text-sm text-blue-400">{service.marketPrice}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>ROI: {service.roi}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact and CTA */}
                <div className="space-y-3">
                  <div className="text-center">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Quote Request for ${service.title}`}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Quote
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <a href={`tel:${service.contactInfo.phone}`} className="hover:text-white transition-colors">
                        {service.contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or contact us directly for custom solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white/5 border-t border-white/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative AI-powered services can help you achieve your goals.
            Our team of experts is ready to provide personalized solutions and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-3">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-3">Get a detailed quote</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-3">Learn more about our services</p>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold">
                ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Cutting-edge AI technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Proven ROI and business value</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Expert support and implementation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Custom solutions for your needs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;