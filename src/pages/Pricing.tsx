import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic AI Integration',
        'Cloud Setup & Migration',
        'Security Assessment',
        'Monthly Support (10 hours)',
        'Email Support',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI Solutions',
        'Custom Cloud Architecture',
        'Comprehensive Security',
        'Monthly Support (25 hours)',
        'Priority Support',
        'Advanced Analytics',
        'Performance Monitoring',
        'Monthly Reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI Suite',
        'Multi-Cloud Strategy',
        'Enterprise Security',
        'Dedicated Support (50 hours)',
        '24/7 Support',
        'Custom Analytics',
        'Real-time Monitoring',
        'Weekly Reports',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  const servicePricing = [
    { service: 'AI Development', description: 'Custom AI solutions', starting: '$5,000', monthly: '$1,500' },
    { service: 'Cloud Migration', description: 'Move to the cloud', starting: '$3,000', monthly: '$800' },
    { service: 'Security Audit', description: 'Comprehensive security review', starting: '$2,000', monthly: '$500' },
    { service: 'Data Analytics', description: 'Business intelligence setup', starting: '$4,000', monthly: '$1,200' }
  ];

  const monthlySupport = [
    { name: 'Basic', price: '$999', hours: '10' },
    { name: 'Professional', price: '$2,499', hours: '25' },
    { name: 'Enterprise', price: '$4,999', hours: '50' }
  ];

  const faqs = [
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients and complex projects. Contact us for a personalized quote."
    },
    {
      question: "What's included in support?",
      answer: "Support includes bug fixes, minor updates, and technical assistance. Major feature additions may require additional charges."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time. We'll prorate the difference and adjust your billing accordingly."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all our services. If you're not satisfied, we'll refund your payment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with varying levels of support and features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.popular ? 'border-blue-400 ring-2 ring-blue-400/20' : 'border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Individual Service Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Individual Service Pricing</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePricing.map((service, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold mb-4">{service.service}</h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400">Starting: {service.starting}</div>
                    <div className="text-sm text-gray-400">Monthly: {service.monthly}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Support Packages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Monthly Support Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {monthlySupport.map((support, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{support.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-1">{support.price}</div>
                  <div className="text-gray-400">{support.hours} per month</div>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>✓ Email Support</li>
                  <li>✓ Phone Support</li>
                  <li>✓ Bug Fixes</li>
                  <li>✓ Minor Updates</li>
                  <li>✓ Performance Monitoring</li>
                </ul>

                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and custom quote.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;