import React from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI Consultation',
        '5 AI Model Deployments',
        'Email Support',
        'Basic Analytics Dashboard',
        'Standard Security Features',
        'Monthly Reports'
      ],
      popular: false,
      cta: 'Get Started',
      ctaLink: '/contact'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Advanced AI Solutions',
        '25 AI Model Deployments',
        'Priority Support',
        'Advanced Analytics',
        'Enhanced Security',
        'Custom Integrations',
        'Weekly Reports',
        'Dedicated Account Manager'
      ],
      popular: true,
      cta: 'Start Free Trial',
      ctaLink: '/contact'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Development',
        'Unlimited Deployments',
        '24/7 Premium Support',
        'Enterprise Analytics',
        'Advanced Security Suite',
        'Custom Integrations',
        'Real-time Monitoring',
        'Dedicated Support Team',
        'SLA Guarantees',
        'On-site Implementation'
      ],
      popular: false,
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      price: '$500',
      description: 'Custom AI model training for your specific use case',
      features: ['Data Preparation', 'Model Training', 'Validation', 'Deployment Support']
    },
    {
      name: 'Security Audit',
      price: '$1,200',
      description: 'Comprehensive security assessment and recommendations',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Review', 'Remediation Plan']
    },
    {
      name: 'Cloud Migration',
      price: '$2,500',
      description: 'Seamless migration to cloud infrastructure',
      features: ['Infrastructure Planning', 'Data Migration', 'Testing', 'Go-live Support']
    },
    {
      name: '24/7 Support',
      price: '$800',
      description: 'Round-the-clock technical support and monitoring',
      features: ['Phone Support', 'Live Chat', 'Emergency Response', 'Proactive Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pricing - Zion Tech Group Technology Solutions" 
        description="Transparent pricing for our AI-powered technology solutions. Choose the plan that fits your business needs."
        keywords="pricing, technology services, AI solutions, cybersecurity, cloud services"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All plans include our core features 
            with no hidden fees or surprises.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our Starter plan and scale up as your business grows. 
              All plans include our core AI and technology services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with specialized services tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={service.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                immediately, and we'll prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600">
                No setup fees for our monthly plans. Enterprise plans may have one-time 
                implementation costs depending on your specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, bank transfers, and can arrange custom 
                payment terms for enterprise clients.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer discounts for annual payments?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 20% discount for annual payments on all monthly plans. 
                Contact us for custom enterprise pricing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in the free trial?
              </h3>
              <p className="text-gray-600">
                Our 14-day free trial includes full access to all Professional plan features, 
                with no credit card required to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that trust Zion Tech Group with their technology needs. 
            Start your free trial today or contact us for a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}