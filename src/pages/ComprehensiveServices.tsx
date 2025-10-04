import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Bot, 
  BarChart3, 
  Lock, 
  Cpu, 
  Globe, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI-powered workflows that adapt and learn from your operations.',
      icon: Zap,
      color: 'from-blue-500 to-purple-600',
      pricing: 'Starting at $5,000',
      link: '/services/ai-workflow-automation',
      features: ['Process Optimization', 'Real-time Monitoring', 'Custom Integration', '24/7 Support']
    },
    {
      id: 2,
      title: 'AI Virtual Assistant',
      description: 'Deploy intelligent virtual assistants that handle customer inquiries, schedule management, and routine tasks.',
      icon: Bot,
      color: 'from-green-500 to-teal-600',
      pricing: 'Starting at $3,000',
      link: '/services/ai-virtual-assistant',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard']
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $4,000',
      link: '/services/ai-data-analytics',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization']
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive AI-powered security solutions and threat detection.',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $6,000',
      link: '/services/cybersecurity',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      description: 'Build scalable, secure cloud infrastructure with our expert DevOps and cloud migration services.',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $4,500',
      link: '/services/cloud-infrastructure',
      features: ['Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      id: 6,
      title: 'Micro SaaS Development',
      description: 'Create scalable software-as-a-service applications with rapid deployment and growth capabilities.',
      icon: Globe,
      color: 'from-purple-500 to-indigo-600',
      pricing: 'Starting at $8,000',
      link: '/services/micro-saas',
      features: ['Rapid Development', 'Scalable Architecture', 'API Integration', 'Multi-tenant Support']
    },
    {
      id: 7,
      title: 'Database Solutions',
      description: 'Optimize your data storage and retrieval with advanced database design and management solutions.',
      icon: Database,
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $3,500',
      link: '/services/database-solutions',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      id: 8,
      title: 'Edge Computing',
      description: 'Deploy AI and processing capabilities at the edge for faster response times and reduced latency.',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $7,000',
      link: '/services/edge-computing',
      features: ['Edge AI Deployment', 'Low Latency Processing', 'Distributed Computing', 'Real-time Analytics']
    },
    {
      id: 9,
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications with AI integration and cross-platform compatibility.',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $5,500',
      link: '/services/mobile-development',
      features: ['Cross-platform Apps', 'AI Integration', 'Offline Capabilities', 'Push Notifications']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Services - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive range of AI and IT services designed to transform your business operations and drive growth."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive AI & IT Services
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Transform your business with our cutting-edge AI and technology solutions. 
                From automation to analytics, we provide end-to-end services that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI and IT services, 
                each designed to address specific business challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                      {Icon ? <Icon className="w-12 h-12 mb-4" /> : <span className="w-12 h-12 mb-4">🧩</span>}
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                          {service.pricing}
                        </span>
                        <Link
                          to={service.link}
                          className="text-white hover:text-white/80 transition-colors flex items-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our comprehensive services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServices;