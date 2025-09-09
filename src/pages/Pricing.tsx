import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
  color: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    price: 299,
    period: 'month',
    features: [
      'Basic AI consultation',
      'Monthly strategy session',
      'Email support',
      'Basic analytics dashboard',
      'Up to 5 team members',
      'Standard response time'
    ],
    cta: 'Get Started',
    color: 'blue'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 799,
    period: 'month',
    features: [
      'Advanced AI solutions',
      'Weekly strategy sessions',
      'Priority support',
      'Advanced analytics',
      'Up to 25 team members',
      'Custom integrations',
      'Performance monitoring',
      'Monthly reports'
    ],
    popular: true,
    cta: 'Most Popular',
    color: 'purple'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 1999,
    period: 'month',
    features: [
      'Custom AI development',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom analytics platform',
      'Unlimited team members',
      'Full API access',
      'White-label solutions',
      'Custom training',
      'SLA guarantee',
      'Quarterly business reviews'
    ],
    cta: 'Contact Sales',
    color: 'green'
  }
];

const PricingCard: React.FC<{ plan: PricingPlan }> = memo(({ plan }) => {
  const { addNotification } = useNotification();
  
  const handleSelectPlan = () => {
    addNotification({
      type: 'info',
      title: 'Plan Selected',
      message: `You've selected the ${plan.name} plan. Redirecting to contact form...`,
      duration: 3000
    });
  };

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  };

  const borderClasses = {
    blue: 'border-blue-500/30',
    purple: 'border-purple-500/30',
    green: 'border-green-500/30'
  };

  return (
    <div className={`
      relative bg-white/5 backdrop-blur-sm rounded-2xl border p-8 hover:bg-white/10 transition-all duration-300
      ${plan.popular ? `border-2 ${borderClasses[plan.color as keyof typeof borderClasses]}` : 'border-white/10'}
    `}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-blue-200 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-5xl font-bold text-white">${plan.price}</span>
          <span className="text-blue-300 ml-2">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-blue-200">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSelectPlan}
        className={`
          w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105
          ${plan.popular 
            ? `bg-gradient-to-r ${colorClasses[plan.color as keyof typeof colorClasses]} text-white hover:shadow-lg` 
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
          }
        `}
      >
        {plan.cta}
      </button>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

const Pricing: React.FC = memo(() => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBilling = () => {
    setBillingPeriod(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  const getDiscountedPrice = (price: number) => {
    return billingPeriod === 'yearly' ? Math.round(price * 10) : price;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business. All plans include our core AI and technology solutions.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg font-medium ${billingPeriod === 'monthly' ? 'text-white' : 'text-blue-300'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingPeriod === 'yearly' ? 'text-white' : 'text-blue-300'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard 
                key={plan.id} 
                plan={{
                  ...plan,
                  price: getDiscountedPrice(plan.price)
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Absolutely! Our enterprise plan includes custom AI development and white-label solutions tailored to your specific needs."
              },
              {
                question: "What kind of support do you provide?",
                answer: "Support varies by plan - from email support for Starter to 24/7 priority support for Enterprise customers."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-blue-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of businesses already using our AI-powered solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/20"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;