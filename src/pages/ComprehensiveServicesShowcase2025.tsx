import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  EXPANDED_MICRO_SAAS_SERVICES_2025 
} from '../data/expandedMicroSaasServices2025';
import { 
  SPECIALIZED_IT_SERVICES_2025 
} from '../data/specializedITServices2025';
import { 
  INNOVATIVE_AI_SERVICES_2025 
} from '../data/innovativeAIServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...EXPANDED_MICRO_SAAS_SERVICES_2025.map(service => ({ ...service, type: 'Micro SAAS' as const })),
    ...SPECIALIZED_IT_SERVICES_2025.map(service => ({ ...service, type: 'IT Services' as const })),
    ...INNOVATIVE_AI_SERVICES_2025.map(service => ({ ...service, type: 'AI Services' as const }))
  ];

  const categories = [
    'all',
    'AI & Autonomous Systems',
    'AI & Financial Services',
    'AI & Customer Service',
    'AI & Industrial IoT',
    'AI & Content Creation',
    'AI & Healthcare',
    'AI & Supply Chain',
    'AI & Energy',
    'AI & Legal Tech',
    'AI & Creative Design',
    'Blockchain & Identity',
    'Cybersecurity & Cloud',
    'Cybersecurity & Networking',
    'Cloud & Development',
    'Infrastructure & Cloud',
    'IoT & Development',
    'Blockchain & Development',
    'Strategy & Consulting',
    'Edge Computing',
    'Quantum Computing & AI',
    'Quantum & Communication'
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number, currency: string, pricingModel: string) => {
    if (pricingModel === 'monthly') {
      return `${currency}${price.toLocaleString()}/month`;
    }
    return `${currency}${price.toLocaleString()}`;
  };

  const formatITPrice = (hourlyRate: number, projectRate: number, currency: string) => {
    return `${currency}${hourlyRate}/hour or ${currency}${projectRate.toLocaleString()}/project`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS services, specialized IT solutions, and innovative AI platforms designed to transform your business in 2025 and beyond.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Zion Tech Group</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+1 302 464 0950</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p>https://ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800 text-white">
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Service Type Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                  {service.type}
                </span>
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  {service.subcategory}
                </span>
              </div>

              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-4">
                <p className="text-lg font-semibold text-white">
                  {service.type === 'IT Services' 
                    ? formatITPrice((service as any).hourlyRate, (service as any).projectRate, (service as any).currency)
                    : formatPrice((service as any).price, (service as any).currency, (service as any).pricingModel)
                  }
                </p>
                <p className="text-sm text-gray-400">{service.marketPrice}</p>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              {('technologyStack' in service && service.technologyStack) && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologyStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ROI Metrics */}
              {('roiMetrics' in service && service.roiMetrics) && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">ROI Metrics:</h4>
                  <div className="text-sm text-gray-300">
                    {service.roiMetrics.slice(0, 2).map((metric, index) => (
                      <p key={index} className="mb-1">• {metric}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Delivery and Support */}
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-gray-400">
                  Delivery: <span className="text-white">{service.estimatedDelivery}</span>
                </span>
                <span className="text-gray-400">
                  Support: <span className="text-white capitalize">{service.supportLevel}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link
                  to={('websiteUrl' in service && service.websiteUrl) ? service.websiteUrl : `/services/${service.id}`}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Learn More
                </Link>
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Service Statistics */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Service Portfolio Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {EXPANDED_MICRO_SAAS_SERVICES_2025.length}
              </div>
              <div className="text-white font-semibold">Micro SAAS Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {SPECIALIZED_IT_SERVICES_2025.length}
              </div>
              <div className="text-white font-semibold">IT Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {INNOVATIVE_AI_SERVICES_2025.length}
              </div>
              <div className="text-white font-semibold">AI Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {allServices.length}
              </div>
              <div className="text-white font-semibold">Total Solutions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Contact our team to discuss how our innovative services can drive your success in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;