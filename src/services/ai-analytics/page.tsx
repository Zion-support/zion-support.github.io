'use client';
import React from 'react';
import { BarChart, TrendingUp, Target, Zap, Brain, CheckCircle, ArrowRight, Phone, Mail, Star, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced machine learning algorithms',
      benefits: [
        '95% accuracy in predictions',
        'Real-time data processing',
        'Automated trend detection',
        'Custom prediction models'
      ]
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that provide instant insights into your business performance',
      benefits: [
        'Live data visualization',
        'Customizable metrics',
        'Mobile-responsive design',
        'Role-based access control'
      ]
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered insights',
      benefits: [
        'Scheduled report generation',
        'Natural language summaries',
        'Executive briefings',
        'Custom report templates'
      ]
    },
    {
      icon: Zap,
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and potential issues before they impact your business',
      benefits: [
        'Real-time anomaly alerts',
        'Pattern recognition',
        'Risk assessment',
        'Automated responses'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Sales Performance Analysis',
      description: 'Track sales metrics, identify top performers, and optimize sales strategies',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Customer Behavior Insights',
      description: 'Understand customer preferences and behavior patterns for better targeting',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Financial Forecasting',
      description: 'Predict revenue, expenses, and cash flow with high accuracy',
      icon: BarChart,
      color: 'text-purple-400'
    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize business processes and identify areas for improvement',
      icon: Zap,
      color: 'text-yellow-400'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI analytics',
      features: [
        'Up to 10 data sources',
        'Basic dashboards',
        'Monthly reports',
        'Email support',
        'Standard integrations'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses with complex analytics needs',
      features: [
        'Up to 50 data sources',
        'Advanced dashboards',
        'Real-time reporting',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with extensive requirements',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'SLA guarantees'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: '95% Accuracy',
      description: 'Industry-leading accuracy in predictions and insights'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant analysis of data as it comes in'
    },
    {
      icon: Target,
      title: 'Actionable Insights',
      description: 'Clear, actionable recommendations for business improvement'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '300% average ROI for our analytics clients'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Analytics Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Make data-driven decisions that drive growth and optimize performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-cyan-400">
                <Brain className="w-5 h-5 mr-2" />
                <span className="font-medium">AI-Powered Insights</span>
              </div>
              <div className="flex items-center text-purple-400">
                <BarChart className="w-5 h-5 mr-2" />
                <span className="font-medium">Real-time Analytics</span>
              </div>
              <div className="flex items-center text-green-400">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-medium">Predictive Intelligence</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${useCase.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <useCase.icon className={`w-8 h-8 ${useCase.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-3xl font-bold ${tier.color}`}>{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      tier.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our AI Analytics?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your journey with AI analytics today. Get a free consultation and discover 
              how our platform can revolutionize your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <BarChart className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIAnalyticsPage;