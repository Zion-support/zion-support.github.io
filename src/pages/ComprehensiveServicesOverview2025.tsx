import React, { useState } from 'react';
import { innovativeMicroSaasServices2025 } from '../../data/2025-innovative-micro-saas-expansion-v3';
import { emergingTechInnovations2025 } from '../../data/2025-emerging-tech-innovations';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  category: string;
  marketSize: string;
  targetAudience: string[];
  competitiveAdvantage: string;
  useCases: string[];
  integrations: string[];
  compliance: string[];
  website: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  trialDays: number;
  setupTime: string;
  competitors: string[];
  roi: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  aiCapabilities?: string[];
  securityFeatures?: string[];
  scalability?: string;
  supportLevel?: string;
  technologyStack?: string[];
  innovationLevel?: string;
  futureProofing?: string;
  researchPartnerships?: string[];
}

const ComprehensiveServicesOverview2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [...innovativeMicroSaasServices2025, ...emergingTechInnovations2025];

  const categories = [
    'all',
    'AI & Business Intelligence',
    'Cybersecurity & Network Security',
    'Sustainability & Green Technology',
    'Healthcare Technology & AI',
    'Financial Technology & Risk Management',
    'Supply Chain & Logistics',
    'Educational Technology',
    'Real Estate Technology',
    'Quantum Computing & Advanced Computing',
    'Space Technology & Satellite Analytics',
    'IoT & Edge Computing',
    'Blockchain & Web3 Technology',
    'Robotics & Automation'
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'AI & Business Intelligence': '🧠',
      'Cybersecurity & Network Security': '🔒',
      'Sustainability & Green Technology': '🌱',
      'Healthcare Technology & AI': '🏥',
      'Financial Technology & Risk Management': '💰',
      'Supply Chain & Logistics': '📦',
      'Educational Technology': '🎓',
      'Real Estate Technology': '🏠',
      'Quantum Computing & Advanced Computing': '🔮',
      'Space Technology & Satellite Analytics': '🛰️',
      'IoT & Edge Computing': '🌐',
      'Blockchain & Web3 Technology': '⛓️',
      'Robotics & Automation': '🤖'
    };
    return icons[category] || '🚀';
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from-blue-500 to-cyan-500',
      'Cybersecurity & Network Security': 'from-red-500 to-pink-500',
      'Sustainability & Green Technology': 'from-green-500 to-emerald-500',
      'Healthcare Technology & AI': 'from-purple-500 to-indigo-500',
      'Financial Technology & Risk Management': 'from-yellow-500 to-orange-500',
      'Supply Chain & Logistics': 'from-indigo-500 to-blue-500',
      'Educational Technology': 'from-teal-500 to-cyan-500',
      'Real Estate Technology': 'from-amber-500 to-yellow-500',
      'Quantum Computing & Advanced Computing': 'from-violet-500 to-purple-500',
      'Space Technology & Satellite Analytics': 'from-slate-500 to-gray-500',
      'IoT & Edge Computing': 'from-cyan-500 to-blue-500',
      'Blockchain & Web3 Technology': 'from-orange-500 to-red-500',
      'Robotics & Automation': 'from-gray-500 to-slate-500'
    };
    return colors[category] || 'from-blue-500 to-purple-500';
  };

  // Calculate statistics
  const totalServices = allServices.length;
  const totalMarketSize = allServices.reduce((sum, service) => {
    const size = parseFloat(service.marketSize.replace('$', '').replace('B', ''));
    return sum + size;
  }, 0);
  const averageRating = allServices.reduce((sum, service) => sum + service.rating, 0) / totalServices;
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of {totalServices} revolutionary micro SAAS solutions 
            spanning {categories.length - 1} cutting-edge technology categories. 
            From AI-powered business intelligence to quantum computing services.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{totalServices}</div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">${totalMarketSize.toFixed(1)}B</div>
              <div className="text-gray-300">Total Market Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{averageRating.toFixed(1)}</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">{totalCustomers.toLocaleString()}+</div>
              <div className="text-gray-300">Total Customers</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter and View Toggle */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-300">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-300">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            // Grid View
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{getCategoryIcon(service.category)}</span>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded-full text-white">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">{service.price}</p>
                        <p className="text-xs text-gray-400">{service.period}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-400">{service.rating}</p>
                        <p className="text-xs text-gray-400">Rating ({service.reviews} reviews)</p>
                      </div>
                    </div>

                    {/* Market Size */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-400">Market Size: <span className="text-yellow-400 font-semibold">{service.marketSize}</span></p>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <p key={index} className="text-xs text-gray-300 flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                          </p>
                        ))}
                        {service.features.length > 3 && (
                          <p className="text-xs text-gray-400">+{service.features.length - 3} more features</p>
                        )}
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-400">ROI: <span className="text-green-400 font-semibold">{service.roi}</span></p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => window.open(service.website, '_blank')}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Learn More
                      </button>
                      <button
                        onClick={() => window.location.href = `mailto:${service.contact.email}?subject=Inquiry about ${service.name}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Icon and Category */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center`}>
                          <span className="text-4xl">{getCategoryIcon(service.category)}</span>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-blue-400 text-lg mb-2">{service.tagline}</p>
                            <p className="text-gray-300">{service.description}</p>
                          </div>
                          <div className="mt-4 lg:mt-0 text-right">
                            <div className="text-3xl font-bold text-blue-400 mb-1">{service.price}</div>
                            <div className="text-sm text-gray-400">{service.period}</div>
                            <div className="text-sm text-gray-400">Market: {service.marketSize}</div>
                          </div>
                        </div>

                        {/* Key Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-semibold text-green-400">{service.rating}/5</div>
                            <div className="text-xs text-gray-400">Rating ({service.reviews} reviews)</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-yellow-400">{service.trialDays} days</div>
                            <div className="text-xs text-gray-400">Free Trial</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-purple-400">{service.customers.toLocaleString()}</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-cyan-400">{service.setupTime}</div>
                            <div className="text-xs text-gray-400">Setup Time</div>
                          </div>
                        </div>

                        {/* Features and Use Cases */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                            <div className="space-y-1">
                              {service.features.slice(0, 4).map((feature, index) => (
                                <p key={index} className="text-xs text-gray-300 flex items-center">
                                  <span className="text-green-400 mr-2">✓</span>
                                  {feature}
                                </p>
                              ))}
                              {service.features.length > 4 && (
                                <p className="text-xs text-gray-400">+{service.features.length - 4} more features</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-blue-400 mb-2">Use Cases:</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.useCases.slice(0, 3).map((useCase, index) => (
                                <span key={index} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                  {useCase}
                                </span>
                              ))}
                              {service.useCases.length > 3 && (
                                <span className="text-xs text-gray-400">+{service.useCases.length - 3} more</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* ROI and Action Buttons */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-sm text-gray-400">ROI: <span className="text-green-400 font-semibold">{service.roi}</span></p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => window.open(service.website, '_blank')}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                              Learn More
                            </button>
                            <button
                              onClick={() => window.location.href = `mailto:${service.contact.email}?subject=Inquiry about ${service.name}`}
                              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                              Contact Sales
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found in the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Market Analysis & Industry Insights</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Market Size by Category */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Market Size by Category</h3>
              <div className="space-y-3">
                {categories.slice(1).map(category => {
                  const categoryServices = allServices.filter(service => service.category === category);
                  const totalMarketSize = categoryServices.reduce((sum, service) => {
                    const size = parseFloat(service.marketSize.replace('$', '').replace('B', ''));
                    return sum + size;
                  }, 0);
                  
                  return (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-gray-300">{category}</span>
                      <span className="text-white font-semibold">${totalMarketSize.toFixed(1)}B</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Distribution */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Service Distribution</h3>
              <div className="space-y-3">
                {categories.slice(1).map(category => {
                  const categoryServices = allServices.filter(service => service.category === category);
                  const percentage = ((categoryServices.length / totalServices) * 100).toFixed(1);
                  
                  return (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-gray-300">{category}</span>
                      <span className="text-white font-semibold">{categoryServices.length} services ({percentage}%)</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how our innovative services can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview2025;