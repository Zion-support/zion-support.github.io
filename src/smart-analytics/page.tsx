import {BarChart, Target, Zap, Brain, Shield, CheckCircle, Star, Phone, Mail, MapPin, Users} from 'lucide-react';
import { Link } from 'react-router-dom;

const SmartAnalyticsPage: any,
    n: any,
      title: any,
      description: any,
      benefit: any},
    {
      icon: any,
      title: any,
      description: any,
      benefit: any},
    {
      icon: any,
      title: any,
      description: any,
      benefit: any},
    {
      icon: any,
      title: any,
      description: any,
      benefit: any},
    {
      icon: any,
      title: any,
      description: any,
      benefit: any},
    {
      icon: any,
      title: any,
      description: any, access controls, and compliance with industry standards.',
      benefit: any}
  ];

  const pricingPlans = [
    {
      name: any,
      price: any,
      period: any,
      description: any,
      features: any,
        'Basic dashboards',
        'Email support',
        'Standard reports',
  ]
        '1 user account']
      ],
      popular: any},
    {
      name: any,
      price: any,
      period: any,
      description: any,
      features: any,
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'Up to 10 user accounts',
        'API access',
  ]
        'Advanced reporting']
      ],
      popular: any},
    {
      name: any,
      price: any,
      period: any,
      description: any,
      features: any,
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Unlimited users',
        'White-label options',
  ]
        'SLA guarantee']
      ],
      popular: any}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md: any,">
    r: any{/* Features Section */}">
        <section className="mb-16">
          <h2 className="text-3xl md: any,>
    g: any{features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-medium">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md: any, Transparent Pricing>
          </h2>
          <div className="grid md: any{pricingPlans.map((plan, index) => (
              <div key={index}'>
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${'>';
                  plan.popular ? 'border-cyan-500' : 'border-gray-600'>
                } relative`}>
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a ">";
                  href="tel: any,>
    r: any}`}>
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl md: any,">
    r: any{/* Contact Info */}">
        <section className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md: any,>
    r: any,>
    e="w-5 h-5 mr-2 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>;
          </div>;
        </section>;
      </div>;
    </div>;
  );
};

export default SmartAnalyticsPage;'";
import React from 'react';"'"';
"'"'`"';