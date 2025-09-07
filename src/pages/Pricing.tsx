import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Zion Tech Group',
  description: 'Transparent pricing for AI services, IT solutions, and technology consulting. Choose the plan that fits your business needs.',
  keywords: 'pricing, AI services pricing, IT consulting rates, technology solutions cost',
  openGraph: {
    title: 'Pricing | Zion Tech Group',
    description: 'Transparent pricing for AI services, IT solutions, and technology consulting. Choose the plan that fits your business needs.',
    type: 'website',
  },
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Micro SaaS MVP',
      price: '$8k - $20k',
      period: '2-4 weeks',
      description: 'Perfect for validating your micro SaaS idea',
      features: [
        'Core features only',
        'Basic Stripe integration',
        'Simple analytics',
        'Email support',
        '2 weeks maintenance'
      ],
      popular: false
    },
    {
      name: 'AI Discovery',
      price: '$5k - $12k',
      period: '2-3 weeks',
      description: 'Explore AI possibilities for your business',
      features: [
        'Use case design',
        'Technology selection',
        'Implementation roadmap',
        'Proof of concept',
        'Consultation included'
      ],
      popular: true
    },
    {
      name: 'IT Infrastructure',
      price: '$10k - $30k',
      period: '4-8 weeks',
      description: 'Complete IT infrastructure setup',
      features: [
        'Cloud migration',
        'DevOps setup',
        'Security hardening',
        'Monitoring & alerting',
        '3 months support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing Plans</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-lg text-gray-300">
              <strong className="text-white">Need a custom quote?</strong> Contact us at +1 302 464 0950 or kleber@ziontechgroup.com for personalized pricing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Maintenance</h3>
              <p className="text-gray-300 text-sm mb-4">Ongoing support and updates</p>
              <div className="text-blue-400 font-bold">$500-2k/month</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Consulting</h3>
              <p className="text-gray-300 text-sm mb-4">Strategic technology advice</p>
              <div className="text-blue-400 font-bold">$200-500/hour</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Security Audit</h3>
              <p className="text-gray-300 text-sm mb-4">Comprehensive security review</p>
              <div className="text-blue-400 font-bold">$3k-10k</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics Setup</h3>
              <p className="text-gray-300 text-sm mb-4">Data tracking and insights</p>
              <div className="text-blue-400 font-bold">$2k-8k</div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Pricing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
              <p className="text-gray-300">No hidden fees or surprise costs. What you see is what you pay.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Most projects completed within the estimated timeframe.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Payment</h3>
              <p className="text-gray-300">Pay in milestones or choose our payment plan options.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:bg-white/20 ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-white/20'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="text-3xl font-bold text-white mb-2">{price}</div>
      <div className="text-gray-300 mb-4">{period}</div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default Pricing;