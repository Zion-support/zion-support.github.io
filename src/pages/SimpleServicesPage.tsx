import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function SimpleServicesPage() {
  const services = [
    {
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations and drive innovation.',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Business Intelligence & Analytics',
        'Machine Learning Model Development',
        'Predictive Analytics & Forecasting',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'AI-Powered Automation'
      ],
      href: '/services/ai-machine-learning'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined development operations to accelerate your digital transformation.',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Cloud Migration & Strategy',
        'DevOps Implementation',
        'Container Orchestration',
        'Infrastructure as Code',
        'Continuous Integration/Deployment',
        'Cloud Security & Compliance'
      ],
      href: '/services/cloud-devops'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets, infrastructure, and maintain compliance.',
      icon: '🔒',
      color: 'from-red-500 to-pink-500',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Identity & Access Management',
        'Data Protection & Encryption',
        'Compliance & Governance',
        'Security Training & Awareness'
      ],
      href: '/services/cybersecurity'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies to modernize your business and stay competitive.',
      icon: '🚀',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Digital Strategy Development',
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
        'Digital Culture Transformation',
        'Technology Roadmapping'
      ],
      href: '/services/digital-transformation'
    },
    {
      id: 'financial-solutions',
      title: 'Financial Solutions',
      description: 'AI-powered financial technology and trading solutions for modern financial institutions.',
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'AI Trading Algorithms',
        'Risk Management Systems',
        'Financial Analytics Platforms',
        'Regulatory Compliance',
        'Blockchain Solutions',
        'FinTech Innovation'
      ],
      href: '/services/financial-solutions'
    },
    {
      id: 'manufacturing-solutions',
      title: 'Manufacturing Solutions',
      description: 'Smart manufacturing and Industry 4.0 technology solutions for modern production facilities.',
      icon: '🏭',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Quality Control Systems',
        'Supply Chain Optimization',
        'Smart Factory Solutions',
        'Industry 4.0 Implementation'
      ],
      href: '/services/manufacturing-solutions'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, patient care optimization, and healthcare analytics',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Risk management, trading algorithms, and regulatory compliance solutions',
      icon: '💳'
    },
    {
      name: 'Manufacturing',
      description: 'Smart factories, predictive maintenance, and supply chain optimization',
      icon: '⚙️'
    },
    {
      name: 'Retail',
      description: 'E-commerce platforms, customer analytics, and inventory management',
      icon: '🛍️'
    },
    {
      name: 'Technology',
      description: 'Software development, cloud infrastructure, and digital transformation',
      icon: '💻'
    },
    {
      name: 'Education',
      description: 'Learning management systems, educational analytics, and virtual learning',
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth, 
              enhance efficiency, and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-3xl flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                    >
                      Learn More
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions are tailored to meet the unique challenges and opportunities 
              of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business needs and objectives to understand your unique challenges.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive technology strategy tailored to your business goals.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Our expert team executes the solution with precision and attention to detail.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor and optimize your solution for maximum performance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Pricing
              </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}