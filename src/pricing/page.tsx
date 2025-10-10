'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Clock, TrendingUp } from 'lucide-react';

const PricingPage: React.FC = () => {
  const microSaasPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '5 AI tools included',
        'Basic analytics',
        'Email support',
        'Up to 1,000 requests/month',
        'Standard templates',
        'Basic integrations'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        '15 AI tools included',
        'Advanced analytics',
        'Priority support',
        'Up to 10,000 requests/month',
        'Custom templates',
        'API access',
        'Team collaboration',
        'Advanced integrations'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited AI tools',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'Unlimited requests',
        'Custom development',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const aiServicesPlans = [
    {
      name: 'AI Consulting',
      price: '$200',
      period: '/hour',
      description: 'Expert AI strategy and implementation consulting',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'ROI analysis',
        'Training and support'
      ],
      popular: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'AI Development',
      price: '$5,000',
      period: '/project',
      description: 'Custom AI solution development',
      features: [
        'Custom AI model development',
        'Data preprocessing',
        'Model training and optimization',
        'Integration and deployment',
        'Testing and validation',
        'Documentation and training'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Maintenance',
      price: '$1,500',
      period: '/month',
      description: 'Ongoing AI system maintenance and optimization',
      features: [
        'Model monitoring',
        'Performance optimization',
        'Regular updates',
        'Bug fixes',
        '24/7 support',
        'Scalability management'
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const itServicesPlans = [
    {
      name: 'Basic IT Support',
      price: '$800',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Remote support',
        'Basic maintenance',
        'Security updates',
        'Email support',
        'Monthly reports'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Managed IT Services',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive IT management and support',
      features: [
        '24/7 monitoring',
        'Proactive maintenance',
        'Security management',
        'Backup and recovery',
        'Cloud management',
        'Priority support',
        'Monthly reviews'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise IT',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored IT solutions for large organizations',
      features: [
        'Dedicated team',
        'Custom solutions',
        'Advanced security',
        'Compliance management',
        'Disaster recovery',
        'Training programs',
        'Strategic planning'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% return on investment'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: '99.9% uptime guarantee with enterprise security'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from certified professionals'
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description: 'Quick setup with minimal downtime'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - AI & IT Solutions | Zion Tech Group"
        description="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the perfect plan for your business needs."
        keywords={['pricing', 'AI services pricing', 'IT solutions cost', 'micro SAAS pricing', 'business automation cost']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Simple, <span className="text-cyan-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              Scale up or down as your needs change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
              <a href="/demo"
                className="cyber-button-secondary inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro <span className="text-green-400">SAAS</span> Plans
              </h2>
              <p className="text-gray-300 text-lg">
                Ready-to-use AI-powered tools and applications
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {microSaasPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? 'border-cyan-400/60 shadow-2xl shadow-cyan-500/20' : 'border-slate-600/50'
                } hover:border-cyan-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center block`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI <span className="text-purple-400">Services</span> Pricing
              </h2>
              <p className="text-gray-300 text-lg">
                Custom AI solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {aiServicesPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? 'border-purple-400/60 shadow-2xl shadow-purple-500/20' : 'border-slate-600/50'
                } hover:border-purple-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center block`}
                  >
                    Contact Us
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT <span className="text-blue-400">Services</span> Pricing
              </h2>
              <p className="text-gray-300 text-lg">
                Comprehensive IT support and infrastructure management
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {itServicesPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? 'border-blue-400/60 shadow-2xl shadow-blue-500/20' : 'border-slate-600/50'
                } hover:border-blue-400/40 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center block`}
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-cyan-400">Our Plans</span>
              </h2>
              <p className="text-gray-300 text-lg">
                We deliver exceptional value with every plan
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked <span className="text-cyan-400">Questions</span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Absolutely! For enterprise clients with specific needs, we offer custom pricing and tailored solutions. Contact us to discuss your requirements.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">What's included in support?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support.</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Is there a free trial?</h3>
                <p className="text-gray-300">Yes! We offer a 14-day free trial for all Micro SAAS plans. No credit card required to get started.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Choose your plan and start transforming your business today. 
                Need help deciding? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </a>
                <a href="/demo"
                  className="cyber-button-secondary inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PricingPage;