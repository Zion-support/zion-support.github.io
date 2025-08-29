import React from 'react';
import { SEO } from '../components/SEO';
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from '../data/additionalInnovativeServices2025';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/specializedITInfrastructureServices2025';
import { SPECIALIZED_HEALTHCARE_BIOTECH_SERVICES_2025 } from '../data/specializedHealthcareBiotechServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const allServices = [
    ...ADDITIONAL_INNOVATIVE_SERVICES_2025,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2025,
    ...SPECIALIZED_HEALTHCARE_BIOTECH_SERVICES_2025
  ];

  const categories = [...new Set(allServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, IT, and micro SAAS services. Real solutions with proven ROI and market-competitive pricing."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover Zion Tech Group's cutting-edge portfolio of AI-powered solutions, IT infrastructure services, and innovative micro SAAS platforms designed to transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver real, measurable business value through innovative technology solutions with proven ROI and exceptional support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="text-blue-400 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                Cutting-edge AI, quantum computing, and emerging technologies that give you a competitive advantage.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="text-green-400 text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven ROI</h3>
              <p className="text-gray-300">
                Our solutions deliver measurable returns, with most clients seeing 300-1200% ROI within the first year.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="text-purple-400 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                24/7 expert support and strategic guidance to ensure your success with our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Comprehensive Service Portfolio
          </h2>

          {categories.map((category) => (
            <div key={category} className="mb-20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter(service => service.category === category)
                  .map((service) => (
                    <div key={service.id} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition-colors">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold text-white">{service.name}</h4>
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ${service.price.toLocaleString()}/{service.billingCycle}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        <div className="mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-yellow-400 text-sm font-semibold">
                              ⭐ {service.rating}/5 ({service.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            <span className="text-green-400 text-sm font-semibold">
                              🤖 AI Score: {service.aiScore}/100
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            <span className="text-purple-400 text-sm font-semibold">
                              📈 ROI: {service.roi}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <span className="text-blue-400 mr-2">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <a 
                            href={service.contactInfo.website}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center text-sm font-semibold transition-colors"
                          >
                            Learn More
                          </a>
                          <a 
                            href={`tel:${service.contactInfo.phone}`}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-center text-sm font-semibold transition-colors"
                          >
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already leveraging our innovative solutions to achieve breakthrough results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
              <div className="text-gray-300 space-y-2">
                <p>📱 <a href="tel:+13024640950" className="hover:text-blue-400">+1 302 464 0950</a></p>
                <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400">kleber@ziontechgroup.com</a></p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors"
                >
                  Request Free Consultation
                </a>
                <a 
                  href="https://ziontechgroup.com/services" 
                  className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition-colors"
                >
                  Explore All Services
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Special Offer for New Clients
            </h3>
            <p className="text-blue-100 mb-6">
              Get a free AI readiness assessment and 30-day trial of any service. No commitment required.
            </p>
            <a 
              href="https://ziontechgroup.com/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors inline-block"
            >
              Claim Your Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Transforming businesses through innovative technology solutions. Visit us at{' '}
            <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              ziontechgroup.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
