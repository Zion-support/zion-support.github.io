import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots', 'Process Automation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🔒',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response', 'Security Training', 'Risk Assessment'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '☁️',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and DevOps services to modernize your infrastructure and improve operational efficiency.',
      features: ['Cloud Migration', 'DevOps Implementation', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging', 'Disaster Recovery'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🚀',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      features: ['Process Automation', 'Legacy System Modernization', 'Data Analytics', 'API Development', 'Microservices Architecture', 'Change Management'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🌐',
      name: 'Web Development',
      description: 'Modern web applications and platforms built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React/Next.js Development', 'Progressive Web Apps', 'E-commerce Solutions', 'API Integration', 'Performance Optimization', 'SEO Implementation'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '📱',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Optimization', 'Push Notifications'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify opportunities, and define clear objectives for your project.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed project plan tailored to your specific needs and goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution using best practices and cutting-edge technologies.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'We thoroughly test the solution and optimize performance to ensure maximum efficiency and reliability.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support to ensure continued success and growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward and accelerate digital transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}