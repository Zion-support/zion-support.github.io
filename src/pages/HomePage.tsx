import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function HomePage() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for business intelligence, automation, and predictive analytics',
      icon: '🤖',
      href: '/services/ai-machine-learning',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined development operations',
      icon: '☁️',
      href: '/services/cloud-devops',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure',
      icon: '🔒',
      href: '/services/cybersecurity',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies for modern businesses',
      icon: '🚀',
      href: '/services/digital-transformation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Financial Solutions',
      description: 'AI-powered financial technology and trading solutions',
      icon: '💰',
      href: '/services/financial-solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Manufacturing Solutions',
      description: 'Smart manufacturing and Industry 4.0 technology solutions',
      icon: '🏭',
      href: '/services/manufacturing-solutions',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Scalable solutions for large organizations',
      href: '/solutions/enterprise'
    },
    {
      title: 'Startup Solutions',
      description: 'Growth-focused technology for emerging companies',
      href: '/solutions/startup'
    },
    {
      title: 'Space Technology',
      description: 'Innovative solutions for space exploration and satellite technology',
      href: '/solutions/space-tech'
    },
    {
      title: 'Supply Chain',
      description: 'Optimized supply chain management and logistics',
      href: '/solutions/supply-chain'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Business Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {' '}Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge technology solutions, AI innovation, 
              and digital transformation expertise to drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            >
              View All Services
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed for specific industries and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.href}
                className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}