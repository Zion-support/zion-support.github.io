import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 team members',
        'Basic AI services',
        'Email support',
        'Standard security',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI services',
        'Priority support',
        'Enhanced security',
        '10GB storage',
        'Custom integrations'
      ],
      popular: true
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
        'Enterprise security',
        'Unlimited storage',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Choose the perfect plan for your business needs. All plans include our core 
            AI and technology services with flexible scaling options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-slate-800 rounded-lg shadow-lg p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' 
                  : 'border-slate-700 hover:border-blue-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
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
                onClick={() => handleSelectPlan(plan.name)}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss 
            custom pricing and solutions tailored to your specific requirements.
          </p>
          <Button variant="outline" size="large" onClick={() => window.location.href = '/contact'}>
            Contact Sales
          </Button>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                immediately and we'll prorate any billing differences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">
                We offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer discounts?</h3>
              <p className="text-gray-300">
                Yes, we offer annual billing discounts and special pricing for non-profits and educational institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Choose ${selectedPlan} Plan`}
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            You're about to select the {selectedPlan} plan. This will redirect you to our secure checkout process.
          </p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setIsModalOpen(false);
                // In a real app, this would redirect to checkout
                alert('Redirecting to checkout...');
              }}
              className="flex-1"
            >
              Continue to Checkout
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Pricing;