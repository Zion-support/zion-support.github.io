import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'category':
          return a.category.localeCompare(b.category);
        case 'rating':
          return b.rating - a.rating;
        case 'marketSize':
          return parseFloat(b.marketSize.replace('$', '').replace('B', '')) - parseFloat(a.marketSize.replace('$', '').replace('B', ''));
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge collection of 20+ revolutionary micro SAAS solutions, 
            from AI-powered business intelligence to quantum computing services. 
            Each service is designed to transform industries and drive innovation.
          </p>
          
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

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                <input
                  type="text"
                  placeholder="Search by name, description, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
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

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name" className="bg-slate-800 text-white">Name</option>
                  <option value="price" className="bg-slate-800 text-white">Price</option>
                  <option value="category" className="bg-slate-800 text-white">Category</option>
                  <option value="rating" className="bg-slate-800 text-white">Rating</option>
                  <option value="marketSize" className="bg-slate-800 text-white">Market Size</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedService(service)}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(service.website, '_blank');
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `mailto:${service.contact.email}?subject=Inquiry about ${service.name}`;
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{getCategoryIcon(selectedService.category)}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-gray-400">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                {/* Tagline and Description */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Overview</h3>
                  <p className="text-gray-300 mb-2">{selectedService.tagline}</p>
                  <p className="text-gray-300">{selectedService.description}</p>
                </div>

                {/* Key Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Pricing & Trial</h3>
                    <div className="space-y-2">
                      <p><span className="text-gray-400">Price:</span> <span className="text-white font-semibold">{selectedService.price}{selectedService.period}</span></p>
                      <p><span className="text-gray-400">Trial:</span> <span className="text-white">{selectedService.trialDays} days</span></p>
                      <p><span className="text-gray-400">Setup Time:</span> <span className="text-white">{selectedService.setupTime}</span></p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Market & Performance</h3>
                    <div className="space-y-2">
                      <p><span className="text-gray-400">Market Size:</span> <span className="text-white font-semibold">{selectedService.marketSize}</span></p>
                      <p><span className="text-gray-400">Customers:</span> <span className="text-white">{selectedService.customers.toLocaleString()}</span></p>
                      <p><span className="text-gray-400">Rating:</span> <span className="text-white">{selectedService.rating}/5 ({selectedService.reviews} reviews)</span></p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <p key={index} className="text-gray-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Target Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.targetAudience.map((audience, index) => (
                      <span key={index} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.integrations.map((integration, index) => (
                      <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ROI and Competitive Advantage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">ROI</h3>
                    <p className="text-gray-300">{selectedService.roi}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Competitive Advantage</h3>
                    <p className="text-gray-300">{selectedService.competitiveAdvantage}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p><span className="text-gray-400">Phone:</span> <span className="text-white">{selectedService.contact.phone}</span></p>
                      <p><span className="text-gray-400">Email:</span> <span className="text-white">{selectedService.contact.email}</span></p>
                    </div>
                    <div>
                      <p><span className="text-gray-400">Website:</span> <a href={selectedService.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{selectedService.website}</a></p>
                      <p><span className="text-gray-400">Address:</span> <span className="text-white">{selectedService.contact.address}</span></p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={() => window.open(selectedService.website, '_blank')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Visit Website
                  </button>
                  <button
                    onClick={() => window.location.href = `mailto:${selectedService.contact.email}?subject=Inquiry about ${selectedService.name}`}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Contact Sales
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default InnovativeServicesShowcase2025;