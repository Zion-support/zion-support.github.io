import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const _aiServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive AI solutions for every business need',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      popular: true
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation and workflow optimization',
      features: ['Workflow Automation', 'Smart Scheduling', 'Process Optimization', 'Task Management'],
      price: 'Starting at $2,000/month',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $1,800/month',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', '24/7 Support'],
      price: 'Starting at $1,200/month',
      popular: false
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Custom Dashboards'],
      price: 'Starting at $1,000/month',
      popular: false
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific requirements',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      price: 'Starting at $150/hour',
      popular: false
    }
  ];

  const _itServices = [
    {
      icon: Settings,
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services',
      features: ['24/7 Support', 'System Maintenance', 'Troubleshooting', 'Performance Optimization'],
      price: 'Starting at $500/month',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data-driven insights to fuel your business growth',
      features: ['Data Warehousing', 'Report Generation', 'Dashboard Creation', 'KPI Tracking'],
      price: 'Starting at $800/month',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms and online store development',
      features: ['Online Store Setup', 'Payment Integration', 'Inventory Management', 'Order Processing'],
      price: 'Starting at $2,500/month',
      popular: false
    },
    {
      icon: Car,
      title: 'Fleet Management',
      description: 'Advanced fleet tracking and management solutions',
      features: ['GPS Tracking', 'Route Optimization', 'Driver Management', 'Maintenance Scheduling'],
      price: 'Starting at $300/month',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer />
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
        </div>

        {/* AI Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_aiServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:border-cyan-400 ${service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700'}`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  {service.popular && (
                    <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_itServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:border-cyan-400 ${service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700'}`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  {service.popular && (
                    <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;