import React from 'react';

const PricingPage: React.FC = () => {

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