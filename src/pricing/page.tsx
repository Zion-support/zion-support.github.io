import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const _plans = [
    {
      name: "$299",
      period: description, icon,
    $4: Zap,
      color: "bg-green-500/10",
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
      name: "$799",
      period: description, icon,
    $4: Brain,
      color: "bg-cyan-500/10",
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
      name: "$1,999",
      period: description, icon,
    $4: Cloud,
      color: "bg-purple-500/10",
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
      name: "$199/month",
      description: icon,
    $4: Shield
    },
    {
      name: "$150/hour",
      description: icon,
    $4: Brain
    },
    {
      name: "$99/month",
      description: icon,
    $4: Phone
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