<<<<<<< HEAD
import React, { useState } from 'react',
import { 
  SERVICE_CATEGORIES,
  ALL_SERVICES, 
  AI_SERVICES, 
  IT_SERVICES, 
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,
  CLOUD_SOLUTIONS
} from '@/data/servicesData',
import { ServiceCategory, ServiceSolution } from '@/types/services',

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [searchTerm, setSearchTerm] = useState(''),

  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    return matchesCategory && matchesSearch
  }),

  const getServicesByCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-services': return AI_SERVICES,
      case 'it-services': return IT_SERVICES,
      case 'micro-saas': return MICRO_SAAS_SERVICES,
      case 'cybersecurity': return CYBERSECURITY_SERVICES,
      case 'data-analytics': return DATA_ANALYTICS_SERVICES,
      case 'cloud-solutions': return CLOUD_SOLUTIONS,
      default: return ALL_SERVICES
    }
  },

  const selectedServices = selectedCategory === 'all' ? filteredServices : getServicesByCategory(selectedCategory),

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-50 to-gray-100&quot;>
      {/* Hero Section */}
      <div className=&quot;bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 py-20&quot;>
          <div className=&quot;text-center max-w-4xl mx-auto&quot;>
            <h1 className=&quot;text-5xl font-bold mb-6&quot;>
              Zion Tech Group Services
            </h1>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. 
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              From cutting-edge artificial intelligence to robust infrastructure support.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors&quot;
              >
                📞 Call Now: +1 302 464 0950
              </Link>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors&quot;
              >
                ✉️ Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact Info Banner */}
      <div className=&quot;bg-white border-b&quot;>
        <div className=&quot;container mx-auto px-4 py-4&quot;>
          <div className=&quot;flex flex-wrap justify-center items-center gap-8 text-gray-600&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>📍</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
=======
      {_/* Contact Info Banner */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
              <span>364 E Main St STE 1008, _Middletown DE 19709</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>📱</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-blue-600&quot;>🌐</span>
              <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-blue-600 hover:underline&quot;>
                ziontechgroup.com
              </Link>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Search and Filter Section */}
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;bg-white rounded-xl shadow-lg p-6 mb-8&quot;>
          <div className=&quot;flex flex-col md:flex-row gap-4&quot;>
            <div className=&quot;flex-1&quot;>
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
              />
            </div>
            <div className=&quot;flex gap-2&quot;>
              {SERVICE_CATEGORIES.map((category) => (
                <button
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Services Grid */}
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;>
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {selectedServices.length === 0 && (
          <div className=&quot;text-center py-12&quot;>
            <h3 className=&quot;text-xl text-gray-600 mb-4&quot;>No services found</h3>
            <p className=&quot;text-gray-500&quot;>Try adjusting your search or filter criteria</p>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* Why Choose Zion Tech Group */}
      <div className=&quot;bg-white py-16&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-4xl font-bold text-gray-900 mb-4&quot;>
=======
      {_/* Why Choose Zion Tech Group */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Why Choose Zion Tech Group?
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              We deliver innovative, reliable, and cost-effective solutions that drive real business results
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>🚀</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Innovation First</h3>
              <p className=&quot;text-gray-600&quot;>Cutting-edge AI and technology solutions</p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>🛡️</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Enterprise Security</h3>
              <p className=&quot;text-gray-600&quot;>SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>⚡</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Fast Deployment</h3>
              <p className=&quot;text-gray-600&quot;>Quick setup and implementation</p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                <span className=&quot;text-2xl&quot;>🎯</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-2&quot;>Proven Results</h3>
              <p className=&quot;text-gray-600&quot;>Trusted by businesses nationwide</p>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>
=======
      {_/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Ready to Transform Your Business?
          </h2>
          <p className=&quot;text-xl mb-8 text-blue-100 max-w-2xl mx-auto&quot;>
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            <a 
<<<<<<< HEAD
              href="tel: +13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
=======
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            >
              📞 Call +1 302 464 0950
            </Link>
            <a 
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              className=&quot;bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors&quot;
            >
              ✉️ Get Free Consultation
            </Link>
            <a 
              href=&quot;https://ziontechgroup.com&quot;
              className=&quot;bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors&quot;
            >
              🌐 Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
interface ServiceCardProps {
  service: ServiceSolution
}

function ServiceCard({ service }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false),

  const getPopularPlan = () => {
    if (service.pricing.professional.popular) return service.pricing.professional,
    if (service.pricing.basic.popular) return service.pricing.basic,
    if (service.pricing.enterprise.popular) return service.pricing.enterprise,
    return service.pricing.professional
  },

  const popularPlan = getPopularPlan(),

  return (
    <div className=&quot;bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow&quot;>
      {/* Service Image */}
      <div className=&quot;h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden&quot;>
        <img 
          src={service.images[0]} 
          alt={service.title}
          className=&quot;w-full h-full object-cover&quot;
        />
        <div className=&quot;absolute top-4 right-4&quot;>
          <span className=&quot;bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold&quot;>
            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className=&quot;absolute bottom-4 left-4&quot;>
            <span className=&quot;bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              AI Score: {service.aiScore}
            </span>
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* Service Content */}
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start justify-between mb-3&quot;>
          <h3 className=&quot;text-xl font-bold text-gray-900 mb-2&quot;>{service.title}</h3>
          <div className=&quot;flex items-center gap-1&quot;>
            <span className=&quot;text-yellow-500&quot;>⭐</span>
            <span className=&quot;text-sm font-medium&quot;>{service.provider.rating}</span>
            <span className=&quot;text-gray-500 text-sm&quot;>({service.provider.reviewCount})</span>
          </div>
        </div>

        <p className=&quot;text-gray-600 mb-4 line-clamp-3&quot;>{service.description}</p>

        {/* Provider Info */}
        <div className=&quot;flex items-center gap-3 mb-4&quot;>
          <div className=&quot;w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center&quot;>
            <span className=&quot;text-blue-600 font-semibold text-sm&quot;>
              {service.provider.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className=&quot;font-medium text-gray-900&quot;>{service.provider.name}</p>
            <p className=&quot;text-sm text-gray-500&quot;>{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className=&quot;text-blue-600 text-sm&quot;>✓ Verified</span>
          )}
        </div>

        {/* Pricing */}
        <div className=&quot;bg-gray-50 rounded-lg p-4 mb-4&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;text-2xl font-bold text-gray-900&quot;>
              {popularPlan.currency}{popularPlan.price}
              <span className=&quot;text-sm font-normal text-gray-500&quot;>
                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
              <span className=&quot;bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Most Popular
              </span>
            )}
          </div>
        </div>

<<<<<<< HEAD
        {/* Features Preview */}
        <div className=&quot;mb-4&quot;>
          <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Key Features:</h4>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            {service.features.slice(0, 3).map((feature, index) => (
=======
        {_/* Features Preview */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {_service.features.slice(0, _3).map(_(feature, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <span 
                key={index}
                className=&quot;bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs&quot;
              >
                {_feature}
              </span>
            ))}
<<<<<<< HEAD
            {service.features.length > 3 && (
              <span className=&quot;text-gray-500 text-xs&quot;>
=======
            {_service.features.length > 3 && (
              <span className="text-gray-500 text-xs">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

<<<<<<< HEAD
        {/* Action Buttons */}
        <div className=&quot;flex gap-2&quot;>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className=&quot;flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors&quot;
=======
        {_/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={_() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <a
<<<<<<< HEAD
            href={`tel:+13024640950`}
            className=&quot;bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors&quot;
=======
            href={_`tel:+13024640950`}
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Call Now
          </Link>
        </div>

<<<<<<< HEAD
        {/* Detailed Information */}
        {showDetails && (
          <div className=&quot;mt-6 pt-6 border-t border-gray-200&quot;>
            <div className=&quot;space-y-4&quot;>
              {/* Benefits */}
              <div>
                <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Benefits:</h4>
                <ul className=&quot;list-disc list-inside text-sm text-gray-600 space-y-1&quot;>
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ))}
                </ul>
              </div>

              {_/* Use Cases */}
              <div>
<<<<<<< HEAD
                <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Use Cases:</h4>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {service.useCases.slice(0, 3).map((useCase, index) => (
=======
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {_service.useCases.slice(0, _3).map(_(useCase, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span 
                      key={index}
                      className=&quot;bg-green-100 text-green-800 px-2 py-1 rounded text-xs&quot;
                    >
                      {_useCase}
                    </span>
                  ))}
                </div>
              </div>

              {_/* Technologies */}
              <div>
<<<<<<< HEAD
                <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {service.technologies.slice(0, 4).map((tech, index) => (
=======
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {_service.technologies.slice(0, _4).map(_(tech, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span 
                      key={index}
                      className=&quot;bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs&quot;
                    >
                      {_tech}
                    </span>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Deployment & Support */}
              <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                <div>
                  <span className=&quot;font-medium text-gray-900&quot;>Deployment:</span>
                  <p className=&quot;text-gray-600&quot;>{service.deploymentTime}</p>
                </div>
                <div>
                  <span className=&quot;font-medium text-gray-900&quot;>Support:</span>
                  <p className=&quot;text-gray-600&quot;>{service.support.slice(0, 2).join(', ')}</p>
=======
              {_/* Deployment & Support */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{_service.deploymentTime}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{_service.support.slice(0, _2).join(', _')}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>

              {_/* All Pricing Plans */}
              <div>
<<<<<<< HEAD
                <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Pricing Plans:</h4>
                <div className=&quot;space-y-2&quot;>
                  {Object.entries(service.pricing).map(([plan, details]) => (
                    <div key={plan} className=&quot;flex justify-between items-center text-sm&quot;>
                      <span className=&quot;capitalize font-medium&quot;>{plan}</span>
                      <span className=&quot;text-gray-600&quot;>
                        {details.currency}{details.price}/{details.period}
=======
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {_Object.entries(service.pricing).map(_([plan, _details]) => (
                    <div key={plan} className="flex justify-between items-center text-sm">
                      <span className="capitalize font-medium">{_plan}</span>
                      <span className="text-gray-600">
                        {_details.currency}{_details.price}/{_details.period}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Contact CTA */}
              <div className=&quot;bg-blue-50 rounded-lg p-4 text-center&quot;>
                <p className=&quot;text-sm text-blue-800 mb-2&quot;>
                  Ready to get started with {service.title}?
=======
              {_/* Contact CTA */}
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">
                  Ready to get started with {_service.title}?
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </p>
                <div className=&quot;flex gap-2 justify-center&quot;>
                  <a
<<<<<<< HEAD
                    href={`tel:+13024640950`}
                    className=&quot;bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors&quot;
=======
                    href={_`tel:+13024640950`}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    📞 Call +1 302 464 0950
                  </Link>
                  <a
<<<<<<< HEAD
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className=&quot;bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors&quot;
=======
                    href={_`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    ✉️ Email Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}