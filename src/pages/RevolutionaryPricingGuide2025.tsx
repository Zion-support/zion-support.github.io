import React, { useState } from 'react';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, Check, X } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  category: string;
  pricing: string;
  description: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
  freeTier: boolean;
  trialPeriod: string;
  innovationLevel: string;
  marketSize: string;
  growthRate: string;
  useCases: string[];
  technologies: string[];
}

const RevolutionaryPricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'microSaas' | 'itServices' | 'aiServices'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getFilteredServices = () => {
    switch (selectedCategory) {
      case 'microSaas':
        return revolutionaryMicroSaasServices2025;
      case 'itServices':
        return revolutionaryITServices2025;
      case 'aiServices':
        return revolutionaryAIServices2025;
      default:
        return [...revolutionaryMicroSaasServices2025, ...revolutionaryITServices2025, ...revolutionaryAIServices2025];
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Analytics')) return <Brain className="w-5 h-5" />;
    if (category.includes('Security') || category.includes('Cybersecurity')) return <Shield className="w-5 h-5" />;
    if (category.includes('Cloud') || category.includes('Infrastructure')) return <Cloud className="w-5 h-5" />;
    return <Zap className="w-5 h-5" />;
  };

  const getPriceRange = (services: Service[]) => {
    if (services.length === 0) return { min: 0, max: 0, avg: 0 };
    const prices = services.map(s => s.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
      avg: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
    };
  };

  const priceRange = getPriceRange(getFilteredServices());

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Revolutionary Services Pricing Guide 2025
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transparent pricing for our cutting-edge AI-powered services. Compare plans, 
            understand costs, and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>16 Revolutionary Services</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Competitive Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>AI-Powered Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Need Custom Pricing?
              </h3>
              <p className="text-gray-600">
                Contact our experts for personalized quotes and enterprise solutions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Pricing Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ${priceRange.min}
              </div>
              <div className="text-gray-600 mb-4">Starting Price</div>
              <div className="text-sm text-gray-500">
                Most affordable entry point
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                ${priceRange.avg}
              </div>
              <div className="text-gray-600 mb-4">Average Price</div>
              <div className="text-sm text-gray-500">
                Balanced value proposition
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${priceRange.max}
              </div>
              <div className="text-gray-600 mb-4">Premium Price</div>
              <div className="text-sm text-gray-500">
                Enterprise-grade solutions
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services', count: getFilteredServices().length },
            { id: 'microSaas', label: 'Micro SAAS', count: revolutionaryMicroSaasServices2025.length },
            { id: 'itServices', label: 'IT Services', count: revolutionaryITServices2025.length },
            { id: 'aiServices', label: 'AI Services', count: revolutionaryAIServices2025.length }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Service</th>
                  <th className="px-6 py-4 text-center font-semibold">Starting Price</th>
                  <th className="px-6 py-4 text-center font-semibold">Market Price</th>
                  <th className="px-6 py-4 text-center font-semibold">ROI</th>
                  <th className="px-6 py-4 text-center font-semibold">Free Tier</th>
                  <th className="px-6 py-4 text-center font-semibold">Trial</th>
                  <th className="px-6 py-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getFilteredServices().map((service, index) => (
                  <tr key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        ${service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        per {service.pricingModel}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-gray-900 font-medium">
                        {service.marketPrice}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-green-600 font-medium">
                        {service.roi}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {service.freeTier ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm text-gray-600">
                        {service.trialPeriod}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Details
                        </button>
                        <a
                          href={`tel:${service.contactInfo.phone}`}
                          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                        >
                          Call
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Service Category Comparison
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Micro SAAS */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Micro SAAS</h3>
                <p className="text-gray-600">AI-powered business applications</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Services:</span>
                  <span className="font-medium">{revolutionaryMicroSaasServices2025.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-medium">${Math.min(...revolutionaryMicroSaasServices2025.map(s => s.price))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Price:</span>
                  <span className="font-medium">${Math.round(revolutionaryMicroSaasServices2025.reduce((sum, s) => sum + s.price, 0) / revolutionaryMicroSaasServices2025.length)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Free Tiers:</span>
                  <span className="font-medium">{revolutionaryMicroSaasServices2025.filter(s => s.freeTier).length}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCategory('microSaas')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View All Micro SAAS
              </button>
            </div>

            {/* IT Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">IT Services</h3>
                <p className="text-gray-600">Infrastructure & security solutions</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Services:</span>
                  <span className="font-medium">{revolutionaryITServices2025.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-medium">${Math.min(...revolutionaryITServices2025.map(s => s.price))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Price:</span>
                  <span className="font-medium">${Math.round(revolutionaryITServices2025.reduce((sum, s) => sum + s.price, 0) / revolutionaryITServices2025.length)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Free Tiers:</span>
                  <span className="font-medium">{revolutionaryITServices2025.filter(s => s.freeTier).length}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCategory('itServices')}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                View All IT Services
              </button>
            </div>

            {/* AI Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Services</h3>
                <p className="text-gray-600">Advanced AI & machine learning</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Services:</span>
                  <span className="font-medium">{revolutionaryAIServices2025.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-medium">${Math.min(...revolutionaryAIServices2025.map(s => s.price))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Price:</span>
                  <span className="font-medium">${Math.round(revolutionaryAIServices2025.reduce((sum, s) => sum + s.price, 0) / revolutionaryAIServices2025.length)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Free Tiers:</span>
                  <span className="font-medium">{revolutionaryAIServices2025.filter(s => s.freeTier).length}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCategory('aiServices')}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                View All AI Services
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. Our team is ready to help 
              you implement the right solution and maximize your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedService.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {selectedService.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Service Information Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Pricing */}
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing & Plans</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Starting Price:</span>
                        <span className="font-semibold text-2xl text-blue-600">
                          ${selectedService.price}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pricing Model:</span>
                        <span className="font-medium">{selectedService.pricingModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Market Price:</span>
                        <span className="font-medium">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI:</span>
                        <span className="font-medium text-green-600">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Setup Time:</span>
                        <span className="font-medium">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Benefits</h3>
                    <div className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Target Audience */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Audience</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h3>
                    <div className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Integrations */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.map((integration, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Market Information */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Market Size:</span>
                        <span className="font-medium">{selectedService.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Growth Rate:</span>
                        <span className="font-medium">{selectedService.growthRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Innovation Level:</span>
                        <span className="font-medium">{selectedService.innovationLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Free Tier:</span>
                        <span className="font-medium">
                          {selectedService.freeTier ? 'Available' : 'Not Available'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trial Period:</span>
                        <span className="font-medium">{selectedService.trialPeriod}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>{selectedService.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>{selectedService.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <span>{selectedService.contactInfo.website}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>{selectedService.contactInfo.address}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`tel:${selectedService.contactInfo.phone}`}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${selectedService.contactInfo.email}`}
                      className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevolutionaryPricingGuide2025;