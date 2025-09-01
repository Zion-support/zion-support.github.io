import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Rocket,
  Brain,
  Cloud
} from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started with AI tools',
      features: [
        'AI Content Generation (100 credits/month)',
        'Basic AI Image Editing',
        'AI Meeting Assistant (5 hours/month)',
        'Email Support',
        'Basic Analytics Dashboard',
        'Mobile App Access'
      ],
      popular: false,
      cta: 'Start Free Trial',
      link: '/signup?plan=starter',
      icon: Users
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses and professional teams',
      features: [
        'Everything in Starter',
        'AI Content Generation (500 credits/month)',
        'Advanced AI Image & Video Editing',
        'AI Code Assistant (Basic)',
        'AI Meeting Assistant (20 hours/month)',
        'AI Translation (10 languages)',
        'Priority Support',
        'Advanced Analytics',
        'API Access (1000 calls/month)',
        'Team Collaboration Tools'
      ],
      popular: true,
      cta: 'Start Free Trial',
      link: '/signup?plan=professional',
      icon: Zap
    },
    {
      name: 'Business',
      price: '$99',
      period: '/month',
      description: 'Comprehensive solution for established businesses',
      features: [
        'Everything in Professional',
        'AI Content Generation (2000 credits/month)',
        'AI Code Assistant (Advanced)',
        'AI Data Analytics Platform',
        'AI Threat Detection',
        'Multi-Cloud Management',
        'AI-Powered CRM',
        'Business Process Automation',
        'AI Meeting Assistant (Unlimited)',
        'AI Translation (100+ languages)',
        '24/7 Support',
        'Custom Integrations',
        'API Access (10000 calls/month)',
        'Advanced Security Features'
      ],
      popular: false,
      cta: 'Start Free Trial',
      link: '/signup?plan=business',
      icon: Shield
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with specific requirements',
      features: [
        'Everything in Business',
        'Unlimited AI Content Generation',
        'Custom AI Model Training',
        'Zero Trust Security Suite',
        'Edge Computing Solutions',
        'AI Market Research Platform',
        'AI Legal Document Review',
        'AI Financial Advisor',
        'AI Healthcare Assistant',
        'Dedicated Account Manager',
        'Custom Development',
        'On-Premise Deployment',
        'SLA Guarantees',
        'Compliance Certifications'
      ],
      popular: false,
      cta: 'Contact Sales',
      link: '/contact',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Star className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your AI and technology needs. Start with a free trial and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                    tier.popular
                      ? 'border-blue-500 scale-105'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-gray-600">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={tier.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our different plans stack up against each other to find the perfect fit for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Business</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">AI Content Generation</td>
                  <td className="text-center py-4 px-6 text-gray-600">100 credits/month</td>
                  <td className="text-center py-4 px-6 text-gray-600">500 credits/month</td>
                  <td className="text-center py-4 px-6 text-gray-600">2000 credits/month</td>
                  <td className="text-center py-4 px-6 text-gray-600">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Support</td>
                  <td className="text-center py-4 px-6 text-gray-600">Email</td>
                  <td className="text-center py-4 px-6 text-gray-600">Priority</td>
                  <td className="text-center py-4 px-6 text-gray-600">24/7</td>
                  <td className="text-center py-4 px-6 text-gray-600">Dedicated</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">API Access</td>
                  <td className="text-center py-4 px-6 text-gray-600">-</td>
                  <td className="text-center py-4 px-6 text-gray-600">1000 calls/month</td>
                  <td className="text-center py-4 px-6 text-gray-600">10000 calls/month</td>
                  <td className="text-center py-4 px-6 text-gray-600">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Custom Integrations</td>
                  <td className="text-center py-4 px-6 text-gray-600">-</td>
                  <td className="text-center py-4 px-6 text-gray-600">-</td>
                  <td className="text-center py-4 px-6 text-gray-600">✓</td>
                  <td className="text-center py-4 px-6 text-gray-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, all plans come with a 14-day free trial. No credit card required to start your trial.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-powered technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;