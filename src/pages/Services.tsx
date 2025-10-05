import React from 'react';
import { ArrowRight, Brain, CheckCircle, Cloud, Code, Database, Rocket, Shield, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning implementations.',
      features: [
        'Custom ML Model Development',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'AI Automation Workflows',
        'Real-time Decision Making'
      ],
      price: 'Starting at $5000',
      popular: false,
      color: 'blue'
    },
    {
      icon: Rocket,
      title: 'Micro SaaS Development',
      description: 'Scalable software-as-a-service applications designed for rapid deployment and exponential growth.',
      features: [
        'Rapid Prototyping',
        'Scalable Architecture',
        'API-First Design',
        'Cloud-Native Development',
        'User Management Systems',
        'Payment Integration'
      ],
      price: 'Starting at $3000',
      popular: true,
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Seamless cloud migration and infrastructure optimization for maximum performance and cost efficiency.',
      features: [
        'Cloud Strategy & Planning',
        'Multi-Cloud Solutions',
        'DevOps Implementation',
        'Cost Optimization',
        'Security & Compliance',
        '24/7 Monitoring'
      ],
      price: 'Starting at $2000',
      popular: false,
      color: 'green'
    },
    {
      icon: Database,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights that drive business growth and competitive advantage.',
      features: [
        'Data Warehousing',
        'Real-time Analytics',
        'Custom Dashboards',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence'
      ],
      price: 'Starting at $4000',
      popular: false,
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
      features: [
        'Security Audits & Assessments',
        'Threat Detection & Response',
        'Compliance Management',
        'Identity & Access Management',
        'Security Training',
        'Incident Response'
      ],
      price: 'Starting at $3500',
      popular: false,
      color: 'red'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: [
        'Full-Stack Development',
        'Mobile App Development',
        'API Development',
        'Legacy System Modernization',
        'Quality Assurance',
        'Ongoing Support'
      ],
      price: 'Starting at $2500',
      popular: false,
      color: 'indigo'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and objectives to create a tailored solution strategy.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our team develops a comprehensive implementation plan with clear milestones and deliverables.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build and deploy your solution using cutting-edge technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures your solution meets all requirements and performs optimally.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We launch your solution and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services including AI solutions, cloud services, data analytics, and security solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your enterprise and drive sustainable growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive suite of services is designed to address every aspect of your digital transformation journey.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      service.color === 'blue' ? 'bg-blue-100' :
                      service.color === 'purple' ? 'bg-purple-100' :
                      service.color === 'green' ? 'bg-green-100' :
                      service.color === 'orange' ? 'bg-orange-100' :
                      service.color === 'red' ? 'bg-red-100' :
                      'bg-indigo-100'
                    }`}>
                      <service.icon className={`w-8 h-8 ${
                        service.color === 'blue' ? 'text-blue-600' :
                        service.color === 'purple' ? 'text-purple-600' :
                        service.color === 'green' ? 'text-green-600' :
                        service.color === 'orange' ? 'text-orange-600' :
                        service.color === 'red' ? 'text-red-600' :
                        'text-indigo-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-gray-900 mb-6">{service.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our services can help you achieve your business goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;