<<<<<<< HEAD
'use client';
import React from 'react';
import { BarChart, TrendingUp, Target, Zap, Brain, Shield, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Users, Database } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b



import { Link } from 'react-router-dom';
const SmartAnalyticsPage: React.FC = () => {
  const features = [];
  return (
    {// TODO: Add content;}

};
  ico,
  n: BarChart,
      titl,
  e: 'Real-time Dashboards',
      descriptio,
  n: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.',
      benefi,
  t: 'Make decisions 10x faster'
    },

      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.',
      benefit: 'Discover hidden opportunities',


import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
        </section>
      </main>
      <Footer />
    </div>

      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.',
      benefit: '100% data protection'

    }
  ];
  const pricingPlans = [
<<<<<<< HEAD
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account',
        '30-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 20 data sources',
        'Advanced dashboards',
        'AI-powered insights',
        'Priority support',
        'Up to 10 users',
        '1-year data retention',
        'Custom metrics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Website traffic and behavior' },
    { name: 'Salesforce', icon: '💼', description: 'CRM and sales data' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' },
    { name: 'Facebook Ads', icon: '📱', description: 'Social media advertising' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'GrowthCo',
      role: 'CEO',
      content: 'Smart Analytics helped us identify a 30% revenue opportunity we never knew existed. The AI insights are game-changing.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'We can now track ROI across all channels in real-time. Our marketing efficiency improved by 50% in just 2 months.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'E-commerce Solutions',
      role: 'Operations Manager',
      content: 'The automated alerts saved us from a potential crisis. We caught a 40% drop in conversions within minutes.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <BarChart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Analytics
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            AI-Powered Business Intelligence
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your data into actionable insights with our AI-powered analytics platform. 
            Get real-time dashboards, predictive analytics, and intelligent recommendations that 
            drive growth and optimize performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-white font-semibold mb-2">Faster Decisions</div>
            <div className="text-gray-300 text-sm">Real-time insights for instant action</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
            <div className="text-white font-semibold mb-2">Better Performance</div>
            <div className="text-gray-300 text-sm">AI recommendations improve results</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
            <div className="text-white font-semibold mb-2">Revenue Growth</div>
            <div className="text-gray-300 text-sm">Identify hidden opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-2">Data Security</div>
            <div className="text-gray-300 text-sm">Enterprise-grade protection</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful Analytics Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Connect All Your Data Sources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
=======
      nam,
  e: 'Professional',
      pric,
  e: '$799',
      descriptio,
  n: 'Advanced analytics for growing businesses',
                {plan.popular && ()}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>"
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium"></span>
// Most Popular;
          </span>
                )}"
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                <p className="text-gray-300 mb-4">{plan.description}</p>"
                <div className="mb-6"></div>"
                  <span className="text-4xl font-bold text-white">{plan.price}</span>"
                  <span className="text-gray-400">{plan.period}</span>"
                <ul className="space-y-3 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
                      {feature}
                    </li>
                </ul>
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${}
  // TOD,
  O: Add content;
}
//                     plan.popular;
                      ? 'bg-cyan-600 text-white,
  hover:bg-cyan-700'
                      : 'bg-gray-600 text-white,
  hover:bg-gray-700'`
                  }`}
                  Get Started;
        {/* CTA Section */}
        
          
          
          
          
          
          
          

          
          <section className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Smart Analytics to make data-driven decisions 
            and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
    </div>
=======
            Ready to Transform Your Data?
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have revolutionized their decision-making with our smart analytics platform.
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors" Get Free Demo;
        {/* Contact Info */}
        <section className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
+1 (302) 464-0950;
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com;
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />

                <span>364 E Main St STE 1008, Middletown DE 19709</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e44b
  );
};


export default SmartAnalyticsPage;


