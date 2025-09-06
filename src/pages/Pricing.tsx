import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI Solutions',
        'Email Support',
        'Standard Security',
        'Monthly Reports',
        '5 Team Members'
      ]
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Enhanced Security',
        'Weekly Reports',
        '25 Team Members',
        'Custom Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Real-time Analytics',
        'Unlimited Team Members',
        'Custom Development',
        'SLA Guarantee'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-extrabold mb-6 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the perfect plan for your business needs. All plans include our core technology solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-slate-800 p-8 rounded-lg border ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-slate-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                size="large"
                className="w-full"
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            className="bg-slate-800 p-8 rounded-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6">
              We understand that every business is unique. Let's work together to create a solution that perfectly fits your needs.
            </p>
            <Button variant="primary" size="large">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;