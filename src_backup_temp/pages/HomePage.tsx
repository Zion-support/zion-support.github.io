import React from 'react';
;
const "HomePage": "React.FC = () => {;
  return (;
    <div className="min-h-screen bg-gray-50">;
      <div className="container mx-auto px-4 py-20">;
        <div className="text-center">;
          <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6">;
            Welcome to Zion Tech Group;
          </h1>;
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
            Leading technology solutions in AI", cybersecurity, cloud infrastructure, and digital transformation.;
          </p>;
          <div className="flex flex-col "sm": "flex-row gap-4 justify-center">;
            <button className="bg-blue-500 "hover":bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">;
              Get Started;
            </button>;
            <button className="border-2 border-blue-500 text-blue-500 "hover":bg-blue-500 "hover":text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">;
              Learn More;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
"};
;
export { HomePage };
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
const HomePage: React.FC = () => {
  const featuredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 6);
  const categories = ['AI Development Tools', 'Blockchain & Web3', 'Cybersecurity', 'Financial Technology', 'Healthcare Technology', 'Sustainability & ESG'];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Revolutionary Micro SAAS Services & AI Solutions
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, blockchain, cybersecurity, and innovative technology solutions. 
              We deliver real-world micro SAAS services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/innovative-services"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Contact us today for a free consultation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-blue-200">
                <span>📞</span>
                <span>+1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-blue-200">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </a>
              <a href="https://ziontechgroup.com" className="flex items-center gap-2 hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                <span>🌐</span>
                <span>ziontechgroup.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most innovative and impactful micro SAAS solutions designed to transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                    service.innovationLevel === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                    service.innovationLevel === 'Cutting-edge' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                    'bg-gradient-to-r from-green-600 to-emerald-600'
                  }`}>
                    {service.innovationLevel}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${service.price}
                    <span className="text-sm text-gray-500">/month</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="font-semibold text-green-600">{service.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="font-semibold">{service.estimatedDelivery}</span>
                  </div>
                </div>
                <a
                  href="/innovative-services"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/innovative-services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative micro SAAS services across multiple technology domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const categoryServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category === category);
              return (
                <div key={category} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {categoryServices.length} innovative services available
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    Starting from ${Math.min(...categoryServices.map(s => s.price))}/month
                  </div>
                  <a
                    href="/innovative-services"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Explore Services →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge micro SAAS solutions with proven ROI and exceptional support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI, blockchain, and emerging technologies</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Average 300-800% return on investment</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Most services delivered in 2-8 weeks</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 premium support and consultation</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and discover how our innovative micro SAAS services can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;