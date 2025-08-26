import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { advancedInnovativeServices2025V3, advancedITServices2025, advancedAIServices2025 } from '../../data/2025-advanced-innovative-services-expansion-v3';

const ComprehensivePricingShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const allServices = [
    ...advancedInnovativeServices2025V3.map(service => ({ ...service, type: 'Micro SAAS' })),
    ...advancedITServices2025.map(service => ({ ...service, type: 'IT Service' })),
    ...advancedAIServices2025.map(service => ({ ...service, type: 'AI Service' }))
  ];

  const categories = [
    'all',
    'Legal Tech & Compliance',
    'Quantum Computing & Security',
    'Healthcare & Biotech',
    'Energy & Sustainability',
    'Cybersecurity',
    'Fintech & Trading',
    'Quantum Computing & AI',
    'Supply Chain & Logistics',
    'Edge Computing & IoT',
    'Marketing & Automation',
    'Quantum Technology',
    'AI & Machine Learning',
    'AI & Analytics',
    'AI & Customer Experience'
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $500/month', max: 500 },
    { value: 'medium', label: '$500 - $2,000/month', min: 500, max: 2000 },
    { value: 'high', label: 'Over $2,000/month', min: 2000 }
  ];

  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service => {
      if (priceRange === 'all') return true;
      const range = priceRanges.find(r => r.value === priceRange);
      if (!range) return true;
      
      if ((service as any).price) {
        const price = parseFloat((service as any).price.replace(/[^0-9.]/g, ''));
        if (range.min && range.max) {
          return price >= range.min && price <= range.max;
        } else if (range.max) {
          return price <= range.max;
        } else if (range.min) {
          return price >= range.min;
        }
      }
      return true;
    });

  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'Micro SAAS':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IT Service':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'AI Service':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Legal Tech & Compliance': '⚖️',
      'Quantum Computing & Security': '🔐',
      'Healthcare & Biotech': '🏥',
      'Energy & Sustainability': '🌱',
      'Cybersecurity': '🛡️',
      'Fintech & Trading': '📈',
      'Quantum Computing & AI': '🔮',
      'Supply Chain & Logistics': '🚚',
      'Edge Computing & IoT': '🌐',
      'Marketing & Automation': '📢',
      'Quantum Technology': '🔮',
      'AI & Machine Learning': '🧠',
      'AI & Analytics': '📊',
      'AI & Customer Experience': '💬'
    };
    return icons[category] || '🚀';
  };

  const getPriceDisplay = (service: any) => {
    if (service.price) {
      return (
        <div className="text-3xl font-bold text-blue-400">
          {service.price}
          {service.period && (
            <span className="text-sm text-gray-400 font-normal"> {service.period}</span>
          )}
        </div>
      );
    } else if (service.hourlyRate) {
      return (
        <div className="text-3xl font-bold text-green-400">
          ${service.hourlyRate}
          <span className="text-sm text-gray-400 font-normal">/hour</span>
        </div>
      );
    } else if (service.pricing) {
      return (
        <div className="text-3xl font-bold text-purple-400">
          {service.pricing}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing Showcase 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transparent pricing for our revolutionary collection of 25+ cutting-edge micro SAAS services, 
            IT solutions, and AI platforms. Find the perfect solution for your business needs and budget.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Zion Tech Group</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-300">📱 Mobile</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-gray-300">✉️ Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-gray-300">📍 Address</p>
                <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Visit our website: ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="/advanced-innovative-services-showcase-2025"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Advanced Services
            </Link>
            <Link
              to="/comprehensive-services-marketing-2025"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              💡 Service Marketing
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              📞 Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-slate-800 text-white">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-white font-semibold">{allServices.length}</span> services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Transparent Pricing for All Services
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
              >
                {/* Service Type Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getServiceTypeColor((service as any).type)}`}>
                    {(service as any).type}
                  </span>
                  <span className="text-3xl">{service.icon || '🚀'}</span>
                </div>

                {/* Service Name and Category */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3 flex items-center">
                  {getCategoryIcon(service.category)} {service.category}
                </p>

                {/* Tagline */}
                {(service as any).tagline && (
                  <p className="text-gray-300 mb-4 italic">{(service as any).tagline}</p>
                )}

                {/* Pricing - Prominent Display */}
                <div className="mb-6 text-center p-4 bg-white/5 rounded-lg">
                  {getPriceDisplay(service)}
                  {(service as any).projectRate && (
                    <p className="text-sm text-gray-400 mt-2">{(service as any).projectRate}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                {(service as any).features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {(service as any).features.slice(0, 3).map((feature: string, index: number) => (
                        <li key={index} className="text-xs text-gray-400 flex items-center">
                          <span className="text-blue-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                      {(service as any).features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{(service as any).features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Market Position */}
                {(service as any).marketPosition && (
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Position:</h4>
                    <p className="text-xs text-gray-400">{(service as any).marketPosition}</p>
                  </div>
                )}

                {/* ROI and Benefits */}
                <div className="mb-4">
                  {(service as any).roi && (
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-green-400">ROI: </span>
                      <span className="text-xs text-gray-300">{(service as any).roi}</span>
                    </div>
                  )}
                  {(service as any).benefits && (
                    <div>
                      <span className="text-xs font-semibold text-blue-400">Benefits: </span>
                      <span className="text-xs text-gray-300">
                        {(service as any).benefits.slice(0, 2).join(', ')}
                        {(service as any).benefits.length > 2 && '...'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Trial and Setup Info */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    {(service as any).trialDays && (
                      <div>
                        <span className="text-gray-400">Trial:</span>
                        <p className="text-gray-300">{(service as any).trialDays} days</p>
                      </div>
                    )}
                    {(service as any).setupTime && (
                      <div>
                        <span className="text-gray-400">Setup:</span>
                        <p className="text-gray-300">{(service as any).setupTime}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact and Action */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-400">
                      <p>📧 {(service as any).contactInfo?.email || 'kleber@ziontechgroup.com'}</p>
                      <p>📱 {(service as any).contactInfo?.mobile || '+1 302 464 0950'}</p>
                    </div>
                    <a
                      href={(service as any).link || 'https://ziontechgroup.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Pricing Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Micro SAAS Services</h3>
                <p className="text-gray-300">Starting from $199/month</p>
                <p className="text-sm text-gray-400">Subscription-based pricing with free trials</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-400 mb-2">IT Services</h3>
                <p className="text-gray-300">Starting from $125/hour</p>
                <p className="text-sm text-gray-400">Project-based and hourly consulting rates</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">AI Services</h3>
                <p className="text-gray-300">Starting from $0.15/interaction</p>
                <p className="text-sm text-gray-400">Usage-based and subscription pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our transparent pricing ensures you know exactly what you're getting. 
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
            <div className="mt-6 text-blue-100">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingShowcase2025;