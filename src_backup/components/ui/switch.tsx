import React, {_useState} from 'react';
import {_SERVICE_CATEGORIES, _ALL_SERVICES, _AI_SERVICES, _IT_SERVICES, _MICRO_SAAS_SERVICES, _CYBERSECURITY_SERVICES, _DATA_ANALYTICS_SERVICES, _CLOUD_SOLUTIONS} from '@/data/servicesData';

export function ServicesPage() {_const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [searchTerm, _setSearchTerm] = useState('');

  const _filteredServices = ALL_SERVICES.filter(service => {
    const _matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const _matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;});

  const _getServicesByCategory = (_categoryId: string) => {_switch (categoryId) {
      case 'ai-services': return AI_SERVICES;
      case 'it-services': return IT_SERVICES;
      case 'micro-saas': return MICRO_SAAS_SERVICES;
      case 'cybersecurity': return CYBERSECURITY_SERVICES;
      case 'data-analytics': return DATA_ANALYTICS_SERVICES;
      case 'cloud-solutions': return CLOUD_SOLUTIONS;
      default: return ALL_SERVICES;}
  };

  const _selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory);

  return (_<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {_/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Zion Tech Group Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive IT, _AI, _and Micro SAAS solutions to transform your business. 
              From cutting-edge artificial intelligence to robust infrastructure support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Contact Info Banner */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
              <span>364 E Main St STE 1008, _Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={_searchTerm}
                onChange={_(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {_SERVICE_CATEGORIES.map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {_category.icon} {_category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {_/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {_selectedServices.map(_(service) => (
            <ServiceCard key={service.id} service={_service} />
          ))}
        </div>

        {_selectedServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {_/* Why Choose Zion Tech Group */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by businesses nationwide</p>
            </div>
          </div>
        </div>
      </div>

      {_/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </a>
            <a 
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {_service: ServiceSolution;}

function ServiceCard(_{_service}: ServiceCardProps) {_const [showDetails, _setShowDetails] = useState(false);

  const _getPopularPlan = () => {
    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;
    return service.pricing.professional;};

  const _popularPlan = getPopularPlan();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {_/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={_service.images[0]} 
          alt={_service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {_service.category}
          </span>
        </div>
        {_service.aiScore && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>
          </div>
        )}
      </div>

      {_/* Service Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{_service.title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{_service.provider.rating}</span>
            <span className="text-gray-500 text-sm">({_service.provider.reviewCount})</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{_service.description}</p>

        {_/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {_service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{_service.provider.name}</p>
            <p className="text-sm text-gray-500">{_service.provider.location}</p>
          </div>
          {_service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
          )}
        </div>

        {_/* Pricing */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {_popularPlan.currency}{_popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
                /{_popularPlan.period}
              </span>
            </div>
            {_popularPlan.popular && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Most Popular
              </span>
            )}
          </div>
        </div>

        {_/* Features Preview */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {_service.features.slice(0, _3).map(_(feature, _index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
              >
                {_feature}
              </span>
            ))}
            {_service.features.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {_/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={_() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {_showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <a
            href={_`tel:+13024640950`}
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Call Now
          </a>
        </div>

        {_/* Detailed Information */}
        {_showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {_service.benefits.slice(0, _3).map(_(benefit, _index) => (
                    <li key={index}>{_benefit}</li>
                  ))}
                </ul>
              </div>

              {_/* Use Cases */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {_service.useCases.slice(0, _3).map(_(useCase, _index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {_useCase}
                    </span>
                  ))}
                </div>
              </div>

              {_/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {_service.technologies.slice(0, _4).map(_(tech, _index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {_tech}
                    </span>
                  ))}
                </div>
              </div>

              {_/* Deployment & Support */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{_service.deploymentTime}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{_service.support.slice(0, _2).join(', _')}</p>
                </div>
              </div>

              {_/* All Pricing Plans */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {_Object.entries(service.pricing).map(_([plan, _details]) => (
                    <div key={plan} className="flex justify-between items-center text-sm">
                      <span className="capitalize font-medium">{_plan}</span>
                      <span className="text-gray-600">
                        {_details.currency}{_details.price}/{_details.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {_/* Contact CTA */}
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">
                  Ready to get started with {_service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={_`tel:+13024640950`}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    📞 Call +1 302 464 0950
                  </a>
                  <a
                    href={_`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    ✉️ Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}