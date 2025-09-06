<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, X, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

=======
import React from 'react';
import Card from '../components/Card';

const Pricing: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
<<<<<<< HEAD
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard security',
        '1GB storage'
      ],
      limitations: [
        'Limited integrations',
        'Basic analytics'
=======
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI features",
        "Email support",
        "5GB storage",
        "Up to 5 users",
        "Basic analytics"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
import React from 'react';
import { Link } from 'react-router-dom';

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ],
      popular: false
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'Professional',
      price: { monthly: 299, annual: 239 },
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'Enhanced security',
        '10GB storage',
        'Advanced analytics',
        'API access'
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ],
      limitations: [],
      popular: true
    },
    {
<<<<<<< HEAD
      name: 'Enterprise',
      price: { monthly: 599, annual: 479 },
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Full AI suite',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited storage',
        'Custom analytics',
        'Full API access',
        'Custom integrations',
        'SLA guarantee'
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ],
      limitations: [],
=======
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI features",
        "Priority support",
        "50GB storage",
        "Up to 25 users",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "For large organizations",
      features: [
        "All AI features",
        "24/7 dedicated support",
        "Unlimited storage",
        "Unlimited users",
        "Custom analytics",
        "White-label options",
        "SLA guarantee"
      ],
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
      popular: false
    }
  ];

<<<<<<< HEAD
  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all plans with no credit card required.',
    },
    {
      question: 'What happens if I exceed my limits?',
      answer: 'We\'ll notify you before you reach your limits and offer options to upgrade or purchase additional capacity.',
    },
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
    }
  ];

  const servicePricing = [
    { name: 'AI Services', starting: '$5,000', monthly: '$2,000' },
    { name: 'Cybersecurity', starting: '$3,000', monthly: '$1,500' },
    { name: 'Cloud Migration', starting: '$10,000', monthly: '$3,000' },
    { name: 'DevOps & SRE', starting: '$8,000', monthly: '$2,500' },
    { name: 'Mobile Development', starting: '$15,000', monthly: '$5,000' },
    { name: 'Data Analytics', starting: '$7,000', monthly: '$2,000' },
    { name: 'Blockchain', starting: '$20,000', monthly: '$8,000' },
    { name: 'IT Support', starting: '$2,000', monthly: '$1,000' }
  ];

  const monthlySupport = [
    {
      name: 'Basic Support',
      hours: '10 hours',
      price: '$500',
      features: [
        'Email Support',
        'Basic Troubleshooting',
        'System Monitoring',
        'Monthly Reports'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-blue-200'}`}>
                Annual <span className="text-sm text-green-300">(Save 20%)</span>
              </span>
            </div>
          </div>
        </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
<<<<<<< HEAD
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
=======
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border-2 p-8 relative ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-white/20'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-600">/month</span>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-semibold mt-2">
                        Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center">
                      <X className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
=======
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
=======
        "Basic AI consultation",
        "Email support",
        "Monthly reports",
        "Basic security features"
      ]
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI solutions",
        "Priority support",
        "Weekly reports",
        "Advanced security",
        "Cloud infrastructure"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs",
      features: [
        "Custom AI solutions",
        "24/7 dedicated support",
        "Real-time monitoring",
        "Enterprise security",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

=======
import React from "react";

// PricingCard component
const PricingCard = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  isPopular 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  isPopular: boolean; 
}) => (
  <div className={`relative bg-white p-8 rounded-lg shadow-lg ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}
        <span className="text-lg font-normal text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
      isPopular 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    }`}>
      Get Started
    </button>
  </div>
);
=======
import React from 'react';
<<<<<<< HEAD
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

const Pricing: React.FC = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white py-20">
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="container mx-auto px-4">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center">
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your specific needs and get a custom quote.
          </p>
<<<<<<< HEAD
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Sales
          </a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us for a custom quote or to discuss your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-2xl">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
        </div>
=======
    <>
      <SEO title="Pricing" description="Pricing page" url="/pricing" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Pricing</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
          </div>
        </main>
        <Footer />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      </div>
    </>
=======
    </div>

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h2>
          <p className="text-gray-300 mb-6">
            Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
        to="/contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        Get Started
      </Link>
    </div>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default Pricing;
=======
export default Pricing;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
export default Pricing;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default function PricingPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core features and 24/7 support.
        </p>
      </section>

      {/* AI Services Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI solutions with transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="AI Starter"
            price="$2,500"
            period="per project"
            description="Perfect for small businesses getting started with AI"
            features={[
              "Basic AI implementation",
              "Custom model training",
              "API integration",
              "Email support",
              "30-day warranty"
            ]}
            popular={false}
          />
          <PricingCard
            name="AI Professional"
            price="$7,500"
            period="per project"
            description="Ideal for growing businesses with complex AI needs"
            features={[
              "Advanced AI models",
              "Custom development",
              "Integration support",
              "Priority support",
              "90-day warranty",
              "Performance optimization"
            ]}
            popular={true}
          />
          <PricingCard
            name="AI Enterprise"
            price="$25,000"
            period="per project"
            description="Complete AI solution for large organizations"
            features={[
              "Custom AI development",
              "Dedicated team",
              "White-label options",
              "24/7 support",
              "1-year warranty",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Development</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete micro SaaS solutions with transparent pricing and fast delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Solo SaaS"
            price="$15,000"
            period="one-time"
            description="Perfect for individual entrepreneurs"
            features={[
              "Basic SaaS platform",
              "User authentication",
              "Payment integration",
              "Basic analytics",
              "Mobile responsive",
              "3-month support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Business SaaS"
            price="$35,000"
            period="one-time"
            description="Ideal for small to medium businesses"
            features={[
              "Advanced SaaS platform",
              "Multi-tenant architecture",
              "Advanced analytics",
              "API development",
              "Admin dashboard",
              "6-month support"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise SaaS"
            price="$75,000"
            period="one-time"
            description="Complete solution for large organizations"
            features={[
              "Custom SaaS platform",
              "White-label options",
              "Advanced security",
              "Custom integrations",
              "Dedicated support",
              "12-month support"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions with flexible pricing options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="IT Support"
            price="$2,500"
            period="per month"
            description="Basic IT support and maintenance"
            features={[
              "24/7 monitoring",
              "Basic maintenance",
              "Email support",
              "Security updates",
              "Backup management"
            ]}
            popular={false}
          />
          <PricingCard
            name="IT Management"
            price="$5,000"
            period="per month"
            description="Complete IT management solution"
            features={[
              "Full IT management",
              "Priority support",
              "Advanced security",
              "Cloud migration",
              "Performance optimization"
            ]}
            popular={true}
          />
          <PricingCard
            name="IT Enterprise"
            price="$15,000"
            period="per month"
            description="Enterprise-grade IT solutions"
            features={[
              "Dedicated IT team",
              "Custom solutions",
              "Advanced security",
              "Disaster recovery",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see what you're looking for? We offer custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
export default Pricing;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
