import { ArrowRight, Brain, CheckCircle, Cloud, Code, Database, Rocket, Shield, Star, TrendingUp, Users, Zap } from 'lucide-react';
import React from 'react';


import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';











;

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
      price: 'Starting at $5,000',
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
      price: 'Starting at $3,000',
      popular: true,
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Risk Assessment'
      ],
      price: 'Starting at $4,000',
      popular: false,
      color: 'green'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & DevOps',
      description: 'Seamless cloud migration and DevOps implementation for improved scalability and efficiency.',
      features: [
        'Cloud Strategy Planning',
        'Infrastructure as Code',
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Monitoring & Logging',
        'Cost Optimization'
      ],
      price: 'Starting at $6,000',
      popular: false,
      color: 'indigo'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and goals.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'Third-party Integrations',
        'Legacy System Modernization'
      ],
      price: 'Starting at $8,000',
      popular: false,
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Data Analytics & Business Intelligence',
      description: 'Unlock insights from your data with advanced analytics and business intelligence solutions.',
      features: [
        'Data Warehousing',
        'ETL Pipeline Development',
        'Dashboard Creation',
        'Predictive Modeling',
        'Data Visualization',
        'Real-time Analytics'
      ],
      price: 'Starting at $5,500',
      popular: false,
      color: 'teal'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business goals, challenges, and requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our team develops a comprehensive strategy and project plan tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build and implement your solution using cutting-edge technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest quality standards and performance requirements.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We handle the complete deployment process and ensure a smooth launch of your solution.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure your solution continues to perform optimally.'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Star, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '150%', label: 'Average ROI' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT solutions including machine learning, micro SaaS development, cybersecurity, cloud migration, and custom software development." />
        <meta name="keywords" content="AI solutions, micro SaaS, cybersecurity, cloud migration, DevOps, custom software development, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Technology Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                From AI and machine learning to cloud migration and custom software development, 
                we provide end-to-end technology solutions that drive business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${
                    service.popular 
                      ? 'border-blue-300 ring-2 ring-blue-100 relative' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Get Started
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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