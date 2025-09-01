import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Solutions() {
  const industrySolutions = [
    {
      title: 'Healthcare Solutions',
      description: 'AI-powered diagnostics, patient care optimization, and healthcare analytics solutions.',
      icon: '🏥',
      color: 'from-pink-500 to-red-500',
      features: [
        'AI-Powered Medical Diagnostics',
        'Patient Care Optimization',
        'Healthcare Analytics & Insights',
        'HIPAA Compliant Solutions',
        'Telemedicine Integration',
        'Medical Data Management'
      ],
      href: '/solutions/healthcare'
    },
    {
      title: 'Financial Services',
      description: 'Advanced fintech solutions including AI trading, risk management, and compliance.',
      icon: '💳',
      color: 'from-green-500 to-blue-500',
      features: [
        'AI Trading Algorithms',
        'Risk Management Systems',
        'Regulatory Compliance',
        'Fraud Detection',
        'Financial Analytics',
        'Blockchain Integration'
      ],
      href: '/solutions/financial'
    },
    {
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart factories and predictive maintenance.',
      icon: '🏭',
      color: 'from-blue-500 to-purple-500',
      features: [
        'Smart Factory Solutions',
        'Predictive Maintenance',
        'IoT Integration',
        'Quality Control Systems',
        'Supply Chain Optimization',
        'Production Analytics'
      ],
      href: '/solutions/manufacturing'
    },
    {
      title: 'Retail & E-commerce',
      description: 'Digital transformation solutions for modern retail and online commerce.',
      icon: '🛍️',
      color: 'from-orange-500 to-red-500',
      features: [
        'E-commerce Platforms',
        'Customer Analytics',
        'Inventory Management',
        'Omnichannel Solutions',
        'Personalization Engines',
        'Retail Analytics'
      ],
      href: '/solutions/retail'
    },
    {
      title: 'Education Technology',
      description: 'Innovative learning platforms and educational analytics solutions.',
      icon: '🎓',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Learning Management Systems',
        'Educational Analytics',
        'Virtual Learning Platforms',
        'Student Performance Tracking',
        'Content Management',
        'Assessment Tools'
      ],
      href: '/solutions/education'
    },
    {
      title: 'Government & Public Sector',
      description: 'Secure, compliant solutions for government agencies and public institutions.',
      icon: '🏛️',
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Secure Infrastructure',
        'Compliance Solutions',
        'Digital Services',
        'Data Analytics',
        'Process Automation',
        'Citizen Engagement'
      ],
      href: '/solutions/government'
    }
  ];

  const enterpriseSolutions = [
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies for enterprise organizations.',
      icon: '🚀',
      features: [
        'Technology Assessment',
        'Change Management',
        'Process Automation',
        'Legacy Modernization',
        'Digital Strategy',
        'Implementation Roadmap'
      ]
    },
    {
      title: 'Cloud Migration',
      description: 'Comprehensive cloud migration and infrastructure optimization.',
      icon: '☁️',
      features: [
        'Migration Strategy',
        'Infrastructure Design',
        'Data Migration',
        'Security Implementation',
        'Performance Optimization',
        'Ongoing Management'
      ]
    },
    {
      title: 'AI & Analytics',
      description: 'Enterprise-grade AI solutions and advanced analytics platforms.',
      icon: '🤖',
      features: [
        'AI Strategy Development',
        'Data Platform Design',
        'Machine Learning Models',
        'Business Intelligence',
        'Predictive Analytics',
        'AI Governance'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for enterprise environments.',
      icon: '🔒',
      features: [
        'Security Assessment',
        'Threat Detection',
        'Identity Management',
        'Compliance & Governance',
        'Incident Response',
        'Security Training'
      ]
    }
  ];

  const startupSolutions = [
    {
      title: 'MVP Development',
      description: 'Rapid development of minimum viable products to validate ideas.',
      icon: '⚡',
      features: [
        'Rapid Prototyping',
        'User Experience Design',
        'Scalable Architecture',
        'Cloud Infrastructure',
        'Analytics Integration',
        'Iterative Development'
      ]
    },
    {
      title: 'Growth Technology',
      description: 'Technology solutions designed to scale with your startup growth.',
      icon: '📈',
      features: [
        'Scalable Infrastructure',
        'Performance Optimization',
        'User Analytics',
        'Automation Tools',
        'Integration Services',
        'Growth Monitoring'
      ]
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
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges 
              and opportunities of your industry and business size.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand that each industry has unique challenges. Our solutions are 
              tailored to meet your specific needs and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center text-3xl mb-6`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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
                  to={solution.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed for large organizations 
              with complex infrastructure and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What We Deliver:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Startup Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technology solutions designed to help startups move fast, scale efficiently, 
              and build products that users love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupSolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful solution delivery and maximum value for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your business needs, challenges, and objectives to understand your unique requirements.'
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Our experts design a tailored solution that addresses your specific needs and business goals.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the solution with precision, ensuring minimal disruption to your operations.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor, optimize, and enhance your solution for maximum performance.'
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
            Ready to Find Your Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and find the perfect technology solution for your business.
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
