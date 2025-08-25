import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  PieChart, 
  Target, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Globe,
  Rocket,
  Star
} from 'lucide-react';

export default function BusinessIntelligence() {
  const services = [
    {
      title: 'Advanced Analytics Platform',
      description: 'Comprehensive business intelligence and analytics solution with real-time dashboards and predictive insights.',
      icon: BarChart3,
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Advanced reporting tools',
        'Mobile-responsive design'
      ],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that automatically identify patterns and provide actionable business recommendations.',
      icon: Brain,
      features: [
        'Automated pattern recognition',
        'Predictive modeling',
        'Natural language queries',
        'Anomaly detection',
        'Trend forecasting',
        'Intelligent recommendations'
      ],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'Performance Monitoring',
      description: 'Comprehensive monitoring and alerting system for business metrics and KPIs.',
      icon: TrendingUp,
      features: [
        'KPI tracking and monitoring',
        'Automated alerting',
        'Performance benchmarking',
        'Goal tracking',
        'Real-time notifications',
        'Historical analysis'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Data Warehouse Solutions',
      description: 'Scalable data storage and management solutions for enterprise-level business intelligence.',
      icon: Database,
      features: [
        'Scalable data storage',
        'ETL/ELT processes',
        'Data governance',
        'Security and compliance',
        'High availability',
        'Backup and recovery'
      ],
      price: 'Starting at $4,999/month'
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time data and insights',
      icon: Target
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamline operations and identify optimization opportunities',
      icon: Zap
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with predictive insights',
      icon: Rocket
    },
    {
      title: 'Cost Optimization',
      description: 'Identify cost-saving opportunities and optimize resource allocation',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Business Intelligence Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with AI-powered analytics, real-time insights, and predictive intelligence. 
              Make data-driven decisions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Business Intelligence Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your data into actionable insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our BI Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent data analysis and business insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already transformed their operations with our business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}