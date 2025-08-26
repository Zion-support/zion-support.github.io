import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { revolutionaryMicroSaasServices2029 } from '../../data/revolutionary-2029-advanced-micro-saas-services';
import { revolutionarySpecializedIndustrySolutions2029 } from '../../data/revolutionary-2029-specialized-industry-solutions';
import { revolutionaryAIInnovationServices2029 } from '../../data/revolutionary-2029-ai-innovation-services';
import { revolutionaryITInfrastructureCybersecurityServices2029 } from '../../data/revolutionary-2029-it-infrastructure-cybersecurity';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const ComprehensiveServicesShowcase2029: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices: Service[] = [
    ...revolutionaryMicroSaasServices2029,
    ...revolutionarySpecializedIndustrySolutions2029,
    ...revolutionaryAIInnovationServices2029,
    ...revolutionaryITInfrastructureCybersecurityServices2029
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Revolutionary 2029 Services Showcase - Zion Tech Group"
        description="Discover our comprehensive suite of revolutionary micro SAAS services, AI innovations, specialized industry solutions, and cutting-edge IT infrastructure services for 2029."
        keywords="AI services, micro SAAS, cybersecurity, IT infrastructure, blockchain, quantum computing, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Revolutionary 2029</span>
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-300">
              Discover our comprehensive suite of cutting-edge micro SAAS services, AI innovations, 
              specialized industry solutions, and next-generation IT infrastructure services.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="rounded-full bg-zinc-800 p-1">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-zion-cyan text-white'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    All Services
                  </button>
                  {categories.slice(1, 6).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-zion-cyan text-white'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-zinc-800/50 border-b border-zinc-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-zinc-300 text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="customers">Customers</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative group bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                service.popular ? 'ring-2 ring-zion-cyan' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zion-cyan text-white">
                    Popular
                  </span>
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                <span className="text-4xl">{service.icon}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-zinc-400 text-sm mb-3">{service.tagline}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                    <div className="text-zinc-400 text-sm">{service.period}</div>
                  </div>
                </div>
                
                <p className="text-zinc-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  {service.realService && (
                    <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full ml-2">
                      Production Ready
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-zinc-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-zinc-400 text-sm ml-1">({service.reviews})</span>
                  </div>
                  <div className="text-zinc-400 text-sm">
                    {service.customers.toLocaleString()} customers
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-zinc-400 flex items-start">
                          <span className="text-zion-cyan mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-zinc-300 mb-2">ROI:</h4>
                    <p className="text-xs text-zinc-400">{service.roi}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Learn More
                  </a>
                  <button className="px-4 py-2 border border-zinc-600 text-zinc-300 hover:border-zion-cyan hover:text-zion-cyan rounded-lg transition-colors duration-200">
                    Demo
                  </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>Trial: {service.trialDays} days</span>
                    <span>Setup: {service.setupTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-zinc-400 text-lg">No services found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-zion-cyan hover:text-zion-cyan-dark"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-zinc-800/50 border-t border-zinc-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
              Our revolutionary services are designed to give you a competitive edge in 2029 and beyond. 
              Contact us to learn how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-zinc-300">
                <svg className="h-5 w-5 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                <svg className="h-5 w-5 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                <svg className="h-5 w-5 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zion-cyan hover:bg-zion-cyan-dark transition-colors duration-200"
              >
                Visit Our Website
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;