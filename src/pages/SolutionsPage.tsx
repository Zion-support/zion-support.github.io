import React from 'react';
import { Helmet } from 'react-helmet-async';

const SolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Enterprise Solutions',
      description: 'Transform your business with cutting-edge AI technology that delivers 300% ROI and 70% cost reduction.',
      features: ['Machine Learning Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      icon: '🤖'
    },
    {
      title: 'Quantum Computing Services',
      description: 'Leverage quantum computing power for complex problem-solving and optimization challenges.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
      icon: '⚛️'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes with our comprehensive digital transformation strategies.',
      features: ['Process Automation', 'Cloud Migration', 'Data Analytics', 'System Integration'],
      icon: '🔄'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with advanced cybersecurity measures and threat detection systems.',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      icon: '🔒'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scale your infrastructure with secure, reliable, and efficient cloud solutions.',
      features: ['Cloud Architecture', 'Migration Services', 'Monitoring', 'Optimization'],
      icon: '☁️'
    },
    {
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with our advanced business intelligence and analytics solutions.',
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Reporting'],
      icon: '📊'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI & IT Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI and IT solutions including enterprise AI, quantum computing, digital transformation, and cybersecurity services."
        />
        <meta
          name="keywords"
          content="AI solutions, quantum computing, digital transformation, cybersecurity, cloud services, business intelligence"
        />
        <meta property="og:title" content="AI & IT Solutions | Zion Tech Group" />
        <meta
          property="og:description"
          content="Comprehensive AI and IT solutions including enterprise AI, quantum computing, digital transformation, and cybersecurity services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive unprecedented growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss how our solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SolutionsPage;