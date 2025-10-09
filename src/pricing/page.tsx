import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const _plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      features: [
        'Basic AI Analytics',
        'Email Support',
        '5 AI Models',
        'Monthly Reports',
        'Basic Integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      icon: Brain,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        '20 AI Models',
        'Real-time Reports',
        'API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete AI solution for large organizations',
      icon: Cloud,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      features: [
        'Unlimited AI Models',
        '24/7 Dedicated Support',
        'Custom AI Development',
        'Real-time Analytics',
        'Full API Access',
        'White-label Solutions',
        'Dedicated Account Manager',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Security Suite',
      price: '$199/month',
      description: 'Advanced security monitoring and compliance',
      icon: Shield
    },
    {
      name: 'Custom AI Development',
      price: '$150/hour',
      description: 'Bespoke AI solutions for unique requirements',
      icon: Brain
    },
    {
      name: 'Priority Support',
      price: '$99/month',
      description: '24/7 priority support and faster response times',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced pricing solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default PricingPage;