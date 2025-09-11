import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import {
  Check,
  Star,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp,
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 5 team members',
      'Basic AI features',
      'Email support',
      'Standard templates',
      'Basic analytics',
    ],
    popular: false,
    icon: Star,
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 team members',
      'Advanced AI features',
      'Priority support',
      'Custom templates',
      'Advanced analytics',
      'API access',
      'Custom integrations',
    ],
    popular: true,
    icon: Zap,
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Full AI suite',
      '24/7 dedicated support',
      'White-label solutions',
      'Enterprise analytics',
      'Full API access',
      'Custom development',
      'SLA guarantee',
    ],
    popular: false,
    icon: Award,
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security with end-to-end encryption',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy anywhere with our global infrastructure',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Advanced collaboration tools for your entire team',
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Comprehensive analytics to track your success',
  },
];

export default function Pricing() {
  return (
    <Layout
      title='Pricing - Zion Tech Group'
      description='Choose the perfect plan for your business needs'
    >
      <div className='min-h-screen bg-gray-50'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Simple, Transparent Pricing
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Choose the perfect plan for your business. All plans include our
              core features with no hidden fees.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            {pricingPlans.map(plan => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-lg shadow-lg p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <span className='bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium'>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className='text-center mb-8'>
                    <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <IconComponent className='w-8 h-8 text-blue-600' />
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                      {plan.name}
                    </h3>
                    <p className='text-gray-600 mb-4'>{plan.description}</p>
                    <div className='flex items-baseline justify-center'>
                      <span className='text-5xl font-bold text-gray-900'>
                        {plan.price}
                      </span>
                      <span className='text-gray-600 ml-2'>{plan.period}</span>
                    </div>
                  </div>

                  <ul className='space-y-4 mb-8'>
                    {plan.features.map((feature, index) => (
                      <li key={index} className='flex items-start'>
                        <Check className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-600'>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>

          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Why Choose Zion Tech Group?
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {additionalFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className='text-center'>
                    <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <IconComponent className='w-8 h-8 text-blue-600' />
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='bg-blue-600 rounded-lg p-8 text-center text-white'>
            <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
            <p className='text-xl mb-8 opacity-90'>
              Join thousands of businesses already using our platform
            </p>
            <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
