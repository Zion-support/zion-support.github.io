'use client';
import {BarChart, TrendingUp, Target, Zap, Brain, CheckCircle, Phone, Mail, Star, Users, Award} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const AIAnalyticsPage: any,
    n: any,
      title: any,
      description: any,
      benefits: any,
        'Real-time data processing',
        'Automated trend detection',
  ]
        'Custom prediction models']
      ]
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any,
        'Customizable metrics',
        'Mobile-responsive design',
  ]
        'Role-based access control']
      ]
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any,
        'Natural language summaries',
        'Executive briefings',
  ]
        'Custom report templates']
      ]
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any,
        'Pattern recognition',
        'Risk assessment',
  ]
        'Automated responses']
      ]
    }
  ];

  const useCases = [
    {
      title: any,
      description: any, identify top performers, and optimize sales strategies',
      icon: any,
      color: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any},
    {
      title: any,
      description: any, expenses, and cash flow with high accuracy',
      icon: any,
      color: any},
    {
      title: any,
      description: any,
      icon: any,
      color: any}
  ];

  const pricingTiers = [
    {
      name: any,
      price: any,500',
      period: any,
      description: any,
      features: any,
        'Basic dashboards',
        'Monthly reports',
        'Email support',
  ]
        'Standard integrations']
      ],
      color: any,
      bgColor: any},
    {
      name: any,
      price: any,500',
      period: any,
      description: any,
      features: any,
        'Advanced dashboards',
        'Real-time reporting',
        'Priority support',
        'Custom integrations',
  ]
        'API access']
      ],
      color: any,
      bgColor: any,
      popular: any},
    {
      name: any,
      price: any,
      period: any,
      description: any,
      features: any,
        'Custom dashboards',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
  ]
        'SLA guarantees']
      ],
      color: any,
      bgColor: any}
  ];

  const benefits = [
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any, actionable recommendations for business improvement
    },
    {
      icon: any,
      title: any,
      description: any}
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md: any,>
    e="font-medium">Predictive Intelligence</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">;
              Key Features;
            </h2>";
            <div className="grid grid-cols-1 md: any;>
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>
    e="text-xl font-semibold text-white mb-2">{feature.title}</h3>
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
            <div className="grid grid-cols-1 md: any,>";
    g: any{useCases.map((useCase, index) => ("'";
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: any,>
    e={`w-16 h-16 ${useCase.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>`";
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
              Pricing Plans";
            </h2>"'"';
            <div className="grid grid-cols-1 md: any{pricingTiers.map((tier, index) => ('`"';
                <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>";
                    <div className="flex items-baseline justify-center">"`";
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
                  <a ";
                    href="/contact"`';
                    className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${'>
                      tier.popular'>';
                        ? 'bg-cyan-400 text-slate-900 hover: any,>
    r: any}`}>
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
            <div className="grid grid-cols-1 md: any,>
    g: any{benefits.map((benefit, index) => (
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
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default AIAnalyticsPage;'";
import React from 'react';"'"';
"'"'`"';