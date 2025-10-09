import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const aiServices = [
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
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights with AI',
      features: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Real-time Insights'],
      price: 'Starting at $1,800/month'
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Scalability', 'Security'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database solutions and optimization',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Monitoring'],
      price: 'Starting at $1,000/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment processes',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'Starting at $2,000/month'
    }
  ];

  const microSaasServices = [
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'AI-powered development and productivity tools',
      features: ['Code Generation', 'Bug Detection', 'Performance Analysis', 'Documentation'],
      price: 'Starting at $15/month'
    },
    {
      icon: BarChart3,
      title: 'Analytics Tools',
      description: 'Advanced business intelligence and analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
      price: 'Starting at $25/month'
    },
    {
      icon: MessageSquare,
      title: 'Communication Tools',
      description: 'AI-enhanced communication and collaboration',
      features: ['Smart Chatbots', 'Email Automation', 'Meeting Scheduler', 'Team Collaboration'],
      price: 'Starting at $20/month'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Tools',
      description: 'AI-powered e-commerce solutions',
      features: ['Product Recommendations', 'Inventory Management', 'Customer Support', 'Sales Analytics'],
      price: 'Starting at $30/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth.
          </p>
        </div>

        {/* AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <button className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <button className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micro SaaS Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Micro SaaS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <button className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors">
              Get a Free Consultation
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;