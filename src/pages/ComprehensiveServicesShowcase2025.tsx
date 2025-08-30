import React from 'react';
import { SEO } from '../components/SEO';
import { servicesCatalog } from '../data/servicesCatalog';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServices';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, IT, and micro SaaS services designed to transform your business operations and drive digital innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of AI-powered solutions, IT services, and innovative micro SaaS platforms designed to revolutionize your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-blue-900/20 border-t border-b border-blue-500/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Mobile</h3>
              <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-blue-300 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Address</h3>
              <p className="text-white">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum cybersecurity, we offer cutting-edge solutions that drive innovation and growth
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {servicesCatalog.map((category) => (
              <div key={category.slug} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.items.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400 font-bold">{service.price}/{service.billing}</span>
                        <a 
                          href={service.href}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          {service.ctaLabel}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href={`/services/${category.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    View All {category.name} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative, scalable software solutions designed to solve specific business challenges and drive operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6).map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white ml-1">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white font-semibold">{service.currency}{service.price}/{service.pricingModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-blue-400">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Score:</span>
                    <span className="text-green-400 font-semibold">{service.aiScore}/100</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={service.website}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center transition-colors"
                  >
                    Learn More
                  </a>
                  <a 
                    href={`mailto:${service.contactEmail}`}
                    className="bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded text-center transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Competitive Pricing & Market Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are priced competitively within the market, offering exceptional value for enterprise-grade solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Solutions</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">$29</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-300 text-sm">Starting price</p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI-powered automation</li>
                  <li>• Scalable infrastructure</li>
                  <li>• 24/7 support</li>
                  <li>• Regular updates</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/50">
              <h3 className="text-2xl font-bold text-white mb-4">AI & IT Services</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">$1,299</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-300 text-sm">Average price</p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Enterprise-grade solutions</li>
                  <li>• Custom development</li>
                  <li>• Dedicated support</li>
                  <li>• SLA guarantees</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Quantum & Advanced</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">$4,999</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-300 text-sm">Premium tier</p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cutting-edge technology</li>
                  <li>• Research collaboration</li>
                  <li>• Expert consultation</li>
                  <li>• Priority access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">Leading-edge AI, quantum computing, and emerging technologies</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and time-to-value for your business</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-grade security and compliance for all solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative solutions can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Schedule a Consultation</h3>
              <p className="text-gray-300 mb-4">Book a free consultation to discuss your needs</p>
              <a 
                href={`mailto:${contactInfo.email}?subject=Consultation Request`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Book Consultation
              </a>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Get a Custom Quote</h3>
              <p className="text-gray-300 mb-4">Receive a personalized quote for your project</p>
              <a 
                href={`mailto:${contactInfo.email}?subject=Custom Quote Request`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Request Quote
              </a>
            </div>
          </div>

          <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Mobile</h4>
                <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Website</h4>
                <a href={contactInfo.website} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
