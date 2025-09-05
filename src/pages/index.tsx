import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { COMPREHENSIVE_MICRO_SAAS_SERVICES_2025, INNOVATIVE_IT_SERVICES_2025, ADVANCED_AI_SERVICES_2025 } from '../data/comprehensiveMicroSaasServices2025';

export default function Home() {
  const allServices = [
    ...COMPREHENSIVE_MICRO_SAAS_SERVICES_2025,
    ...INNOVATIVE_IT_SERVICES_2025,
    ...ADVANCED_AI_SERVICES_2025
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SAAS, IT & AI Services</title>
        <meta name="description" content="Leading provider of innovative micro SAAS solutions, comprehensive IT services, and cutting-edge AI solutions. Transform your business with our expert technology services." />
        <meta name="keywords" content="micro saas, it services, ai solutions, cloud migration, cybersecurity, automation, business technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-gray-900">Zion Tech Group</h1>
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
            <h2 className="text-5xl font-bold mb-6">
              Transform Your Business with
              <span className="block text-yellow-300">Innovative Technology Solutions</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Leading provider of micro SAAS solutions, comprehensive IT services, and cutting-edge AI technology. 
              We help businesses scale, automate, and innovate with proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Explore Our Services
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Get Started Today
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Service Portfolio</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SAAS solutions to enterprise AI implementations, we provide end-to-end technology services 
                that drive business growth and operational excellence.
              </p>
            </div>

            {/* Service Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Micro SAAS Solutions</h4>
                <p className="text-gray-600 mb-6">
                  Innovative, ready-to-deploy micro SAAS applications that solve specific business challenges 
                  with AI-powered automation and intelligent features.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• AI Content Generation</p>
                  <p>• Smart Invoice Management</p>
                  <p>• Customer Support Automation</p>
                  <p>• Project Management Tools</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h4>
                <p className="text-gray-600 mb-6">
                  Comprehensive IT solutions including cloud migration, cybersecurity, DevOps automation, 
                  and infrastructure optimization for modern businesses.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• Cloud Migration & DevOps</p>
                  <p>• Cybersecurity Assessment</p>
                  <p>• Infrastructure Management</p>
                  <p>• Performance Optimization</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h4>
                <p className="text-gray-600 mb-6">
                  Cutting-edge AI solutions including custom model development, business process automation, 
                  and intelligent system integration.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• Custom AI Model Development</p>
                  <p>• Business Process Automation</p>
                  <p>• Machine Learning Solutions</p>
                  <p>• AI Strategy Consulting</p>
                </div>
              </div>
            </div>

            {/* Featured Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-900">{service.title}</h5>
                    <span className="text-sm font-medium text-blue-600">{service.marketPrice}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Delivery: {service.estimatedDelivery}</span>
                    <a 
                      href={service.websiteUrl} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                <p className="text-gray-600">Most solutions delivered in 1-3 weeks with rapid prototyping and agile development.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600">Track record of improving efficiency by 40-80% and reducing costs by 25-60%.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                <p className="text-gray-600">SOC2, GDPR, and industry-standard compliance with robust security measures.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h4>
                <p className="text-gray-600">Built to grow with your business from startup to enterprise scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your business goals. 
              Get in touch for a free consultation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-2xl mb-2">📞</div>
                <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                <p className="text-blue-200">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                <p className="text-blue-200">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📍</div>
                <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
                <p className="text-blue-200">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Send Email
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