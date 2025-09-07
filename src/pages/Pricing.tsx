import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started with AI tools',
      features: [
        'AI Content Generation (100 credits/month)',
        'Basic AI Image Editing',
        'AI Meeting Assistant (5 hours/month)',
        'Email Support',
        'Basic Analytics Dashboard',
        'Mobile App Access'
      ],
      popular: false,
      cta: 'Start Free Trial',
      link: '/signup?plan=starter'
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and professional teams',
      features: [
        'Everything in Starter',
        'AI Content Generation (500 credits/month)',
        'Advanced AI Image & Video Editing',
        'AI Code Assistant (Basic)',
        'AI Meeting Assistant (20 hours/month)',
        'AI Translation (10 languages)',
        'Priority Support',
        'Advanced Analytics',
        'API Access (1000 calls/month)',
        'Team Collaboration Tools'
      ],
      popular: true,
      cta: 'Start Free Trial',
      link: '/signup?plan=professional'
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      description: 'Comprehensive solution for established businesses',
      features: [
        'Everything in Professional',
        'AI Content Generation (2000 credits/month)',
        'AI Code Assistant (Advanced)',
        'AI Data Analytics Platform',
        'AI Threat Detection',
        'Multi-Cloud Management',
        'AI-Powered CRM',
        'Business Process Automation',
        'AI Meeting Assistant (Unlimited)',
        'AI Translation (100+ languages)',
        '24/7 Support',
        'Custom Integrations',
        'API Access (10000 calls/month)',
        'Advanced Security Features'
      ],
      popular: false,
      cta: 'Start Free Trial',
      link: '/signup?plan=business'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with specific requirements',
      features: [
        'Everything in Business',
        'Unlimited AI Content Generation',
        'Custom AI Model Training',
        'Zero Trust Security Suite',
        'Edge Computing Solutions',
        'AI Market Research Platform',
        'AI Legal Document Review',
        'AI Financial Advisor',
        'AI Healthcare Assistant',
        'Dedicated Account Manager',
        'Custom Development',
        'On-Premise Deployment',
        'SLA Guarantees',
        'Compliance Certifications'
      ],
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & Technology Solutions</title>
        <meta name="description" content="Choose the perfect plan for your AI and technology needs. Flexible pricing options for individuals, teams, and enterprises." />
        <meta name="keywords" content="pricing, AI services, technology solutions, subscription plans, enterprise pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Pricing Plans
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Flexible pricing options designed to scale with your business needs. Start free and upgrade as you grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  tier.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105'
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={tier.link}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.</p>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">Yes, all plans come with a 14-day free trial. No credit card required to get started.</p>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI solutions to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;