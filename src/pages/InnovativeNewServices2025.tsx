import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Lock, 
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { INNOVATIVE_NEW_SERVICES_2025 } from '../data/innovativeNewServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';

const InnovativeNewServices2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const allServices = [...INNOVATIVE_NEW_SERVICES_2025, ...SPECIALIZED_IT_SERVICES_2025];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000/month' },
    { value: '2000-5000', label: '$2,000 - $5,000/month' },
    { value: '5000+', label: '$5,000+/month' }
  ];

  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    
    // Handle different price properties for different service types
    let servicePrice = 0;
    if ('price' in service && typeof service.price === 'number') {
      servicePrice = service.price;
    } else if ('hourlyRate' in service && typeof service.hourlyRate === 'number') {
      servicePrice = service.hourlyRate * 160; // Convert hourly rate to monthly (160 hours/month)
    }
    
    const priceMatch = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-2000' && servicePrice < 2000) ||
      (selectedPriceRange === '2000-5000' && servicePrice >= 2000 && servicePrice < 5000) ||
      (selectedPriceRange === '5000+' && servicePrice >= 5000);
    
    return categoryMatch && priceMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
        return Brain;
      case 'AI & Development':
        return Cpu;
      case 'Network Infrastructure':
        return Globe;
      case 'Edge Computing':
        return Cloud;
      default:
        return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
        return 'from-purple-500 to-pink-600';
      case 'AI & Development':
        return 'from-blue-500 to-cyan-600';
      case 'Network Infrastructure':
        return 'from-green-500 to-emerald-600';
      case 'Edge Computing':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead 
        config={{
          title: "Innovative New Services 2025 - Zion Tech Group",
          description: "Discover our cutting-edge AI solutions, 5G infrastructure, edge computing, and autonomous systems. Transform your business with next-generation technology.",
          keywords: "AI solutions 2025, 5G enterprise, edge computing, autonomous systems, quantum technology, Zion Tech Group",
          type: "website",
          url: "https://ziontechgroup.com/innovative-new-services-2025"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Innovative New Services 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Pioneering the future with cutting-edge AI solutions, quantum technology, 5G infrastructure, and autonomous systems that transform businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-black/50 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <Link 
              to="https://ziontechgroup.com" 
              target="_blank"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Visit Our Website</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="flex items-center gap-4">
              <label className="text-gray-300 font-medium">Category:</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-gray-300 font-medium">Price Range:</label>
              <select 
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${categoryColor} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                                                     {service.currency}{('price' in service && typeof service.price === 'number') ? service.price : (('hourlyRate' in service && typeof service.hourlyRate === 'number') ? service.hourlyRate * 160 : 0)}/mo
                        </div>
                        <div className="text-sm text-gray-400">{('pricingModel' in service ? service.pricingModel : 'hourly')}</div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-green-400">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Price */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Market Price Range</div>
                      <div className="text-lg font-semibold text-yellow-400">{service.marketPrice}</div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-3">
                      <Link 
                        to={`/contact?service=${service.id}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                      <Link 
                        to={`/contact?service=${service.id}&type=consultation`}
                        className="w-full border border-cyan-500 text-cyan-400 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Schedule Consultation
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="text-center text-sm text-gray-400">
                        <div className="mb-2">Ready to get started?</div>
                        <div className="flex items-center justify-center gap-4">
                          <a 
                            href={`tel:${service.contactInfo.phone}`}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{service.contactInfo.phone}</span>
                          </a>
                          <a 
                            href={`mailto:${service.contactInfo.email}`}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            <span>{service.contactInfo.email}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to see more services</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join forward-thinking businesses that are already leveraging our innovative 2025 technology solutions
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
    </div>
  );
};

export default InnovativeNewServices2025;