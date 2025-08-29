import React from 'react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { INNOVATIVE_IT_SERVICES_2025 } from '../data/innovativeITServices2025';
import { INNOVATIVE_AI_SERVICES_2025 } from '../data/innovativeAIServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...INNOVATIVE_IT_SERVICES_2025,
    ...INNOVATIVE_AI_SERVICES_2025
  ];

  const categories = [
    'Micro SaaS',
    'IT Services', 
    'AI Solutions',
    'Cybersecurity',
    'Data & Analytics',
    'Cloud & DevOps',
    'IoT & Edge',
    'Blockchain & Web3',
    'Healthcare',
    'FinTech'
  ];

  const getServicesByCategory = (category: string) => {
    return allServices.filter(service => 
      service.category.toLowerCase().includes(category.toLowerCase()) ||
      service.subcategory.toLowerCase().includes(category.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms. Transform your business with innovative technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Services Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of cutting-edge micro SAAS services, enterprise IT solutions, and AI-powered platforms designed to transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+13024640950" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-blue-900 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
              <p className="text-blue-200">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-blue-200">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-blue-200">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Comprehensive Service Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const services = getServicesByCategory(category);
              if (services.length === 0) return null;
              
              return (
                <div key={category} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                  <p className="text-gray-300 mb-4">
                    {services.length} innovative {services.length === 1 ? 'service' : 'services'} available
                  </p>
                  <div className="space-y-2">
                    {services.slice(0, 3).map((service) => (
                      <div key={service.id} className="text-sm text-gray-400">
                        • {service.title}
                      </div>
                    ))}
                    {services.length > 3 && (
                      <div className="text-sm text-blue-400">
                        +{services.length - 3} more services
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Innovative Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allServices.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.innovationLevel}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-gray-400 text-sm">Starting Price:</span>
                    <div className="text-white font-semibold">
                      {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <div className="text-white font-semibold">{service.marketPrice}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">Expected ROI:</span>
                  <div className="text-green-400 font-semibold">{service.roi}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="https://ziontechgroup.com/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Detail */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Explore by Category
          </h2>
          
          {categories.map((category) => {
            const services = getServicesByCategory(category);
            if (services.length === 0) return null;
            
            return (
              <div key={category} className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-600 pb-4">
                  {category} Services
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div key={service.id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                      <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Price:</span>
                          <span className="text-white font-semibold">
                            {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Delivery:</span>
                          <span className="text-white text-sm">{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Support:</span>
                          <span className="text-white text-sm capitalize">{service.supportLevel}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-gray-400 text-sm">Key Benefits:</span>
                        <ul className="text-white text-sm mt-1 space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-400 mr-2">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href="https://ziontechgroup.com/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors w-full text-center"
                      >
                        Get Quote
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Our team of experts is ready to help you implement the right innovative solutions for your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-blue-200">Get expert advice on choosing the right solutions</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Custom Implementation</h3>
              <p className="text-blue-200">Tailored solutions for your specific requirements</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Ongoing Support</h3>
              <p className="text-blue-200">24/7 support and maintenance services</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="tel:+13024640950" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
              <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;