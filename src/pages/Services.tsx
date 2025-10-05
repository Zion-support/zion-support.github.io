import React from 'react';
import { ArrowRight, Brain, CheckCircle, Cloud, Database, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI implementations including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'NLP Solutions', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern enterprise needs.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization']
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security services to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Compliance Management', 'Threat Detection', 'Incident Response']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services including AI solutions, cloud services, data analytics, and security solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive AI and IT solutions designed to transform your enterprise
                and drive sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-gray-600">We analyze your business needs and challenges.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                  <p className="text-gray-600">We develop a customized solution strategy.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-gray-600">We execute the solution with precision.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-gray-600">We continuously improve and optimize.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how our services can transform your enterprise.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;