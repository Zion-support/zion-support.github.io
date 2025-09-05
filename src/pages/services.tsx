import React, { useState } from 'react';
import Head from 'next/head';
import { COMPREHENSIVE_MICRO_SAAS_SERVICES_2025, INNOVATIVE_IT_SERVICES_2025, ADVANCED_AI_SERVICES_2025 } from '../data/comprehensiveMicroSaasServices2025';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...COMPREHENSIVE_MICRO_SAAS_SERVICES_2025,
    ...INNOVATIVE_IT_SERVICES_2025,
    ...ADVANCED_AI_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'Content Marketing', name: 'Micro SAAS', count: COMPREHENSIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'IT Services', name: 'IT Services', count: INNOVATIVE_IT_SERVICES_2025.length },
    { id: 'AI Services', name: 'AI Services', count: ADVANCED_AI_SERVICES_2025.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including micro SAAS solutions, IT services, and AI solutions. Explore our full service portfolio." />
        <meta name="keywords" content="micro saas, it services, ai solutions, cloud migration, cybersecurity, automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <a href="/" className="text-3xl font-bold text-gray-900">Zion Tech Group</a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 font-medium">
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Technology Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive solutions spanning micro SAAS applications, enterprise IT services, 
              and cutting-edge AI implementations. Choose from our proven service portfolio.
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              <div className="w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {service.marketPrice}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-gray-500 text-xs">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-blue-500 mr-2">→</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Delivery: {service.estimatedDelivery}</span>
                      <span>Support: {service.supportLevel}</span>
                    </div>

                    <div className="space-y-3">
                      <a 
                        href={service.websiteUrl} 
                        className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Get Started
                      </a>
                      <div className="flex space-x-2">
                        <a 
                          href={`tel:+13024640950`}
                          className="flex-1 text-center py-2 px-4 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                        >
                          Call Now
                        </a>
                        <a 
                          href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                          className="flex-1 text-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't see exactly what you need? We offer custom solutions tailored to your specific requirements. 
              Let's discuss your project and create the perfect solution together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Zion Tech Group</h4>
                <p className="text-gray-400 text-sm">
                  Leading provider of innovative technology solutions that transform businesses and drive growth.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/micro-saas" className="hover:text-white">Micro SAAS Solutions</a></li>
                  <li><a href="/it-services" className="hover:text-white">IT Services</a></li>
                  <li><a href="/ai-services" className="hover:text-white">AI Services</a></li>
                  <li><a href="/consulting" className="hover:text-white">Technology Consulting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/team" className="hover:text-white">Our Team</a></li>
                  <li><a href="/careers" className="hover:text-white">Careers</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>📞 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>🌐 ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}