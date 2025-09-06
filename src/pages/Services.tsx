import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Smartphone, 
  Database, 
  Lock, 
  Server, 
  Code,
  Zap,
  BarChart3,
  Globe,
  Cpu
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'AI Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Strategy Consulting',
        'Custom AI Solutions'
      ],
      price: '$5,000 - $50,000',
      href: '/services/ai'
    },
    {
      name: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
        'Incident Response'
      ],
      price: '$3,000 - $30,000',
      href: '/services/cybersecurity'
    },
    {
      name: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with expert guidance and support.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Cloud Strategy Planning',
        'Infrastructure Migration',
        'Data Migration',
        'Security Implementation',
        'Performance Optimization',
        'Ongoing Support'
      ],
      price: '$10,000 - $100,000',
      href: '/services/cloud-migration'
    },
    {
      name: 'DevOps & SRE',
      description: 'Streamline development with modern DevOps practices and site reliability engineering.',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Automated Testing',
        'Performance Optimization',
        'Disaster Recovery'
      ],
      price: '$8,000 - $80,000',
      href: '/services/devops'
    },
    {
      name: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Native iOS Development',
        'Native Android Development',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Updates'
      ],
      price: '$15,000 - $150,000',
      href: '/services/mobile-development'
    },
    {
      name: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and business intelligence.',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Predictive Modeling',
        'Real-time Analytics',
        'Data Visualization',
        'Custom Dashboards'
      ],
      price: '$7,000 - $70,000',
      href: '/services/data-analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive technology solutions designed to transform your business and drive growth. 
              From AI and cybersecurity to cloud migration and mobile development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 hover:bg-slate-700/50 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-6 flex-shrink-0`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              to="/pricing"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;