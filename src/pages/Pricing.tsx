// import React from 'react';
import { Link } from 'react-router-dom';
import {

} from 'lucide-react
const Pricing: React.FC = () => {
  const pricingPlans: [,
    {
      name: 'Starter',';,';,
      description: 'Perfect for small businesses and startups',';,';,
      price: '$99',';,';,
      period: 'month',';,';,
      icon: Zap,,
      color: 'blue',';,';,
      features: [,,
        'Basic AI Automation',';';
        'Email Support',';';
        'Up to 5 Users',';';
        'Standard Analytics',';';
        'Basic Integrations',';';
        'Monthly Reports'],

      limitations: [,,
        'Limited API Calls',';';
        'Basic Customization
      ]
      cta: 'Start Free Trial',';,';,
      popular: false,
    },
    {
      name: 'Professional',';,';,
      description: 'Ideal for growing businesses',';,';,
      price: '$299',';,';,
      period: 'month',';,';,
      icon: Shield,,
      color: 'green',';,';,
      features: [,,
        'Advanced AI Automation',';';
        'Priority Support',';';
        'Up to 25 Users',';';
        'Advanced Analytics',';';
        'Custom Integrations',';';
        'Weekly Reports',';';
        'Training Sessions',';';
        'API Access'],

      limitations: [],,
      cta: 'Start Free Trial',';,';,
      popular: true,
    },
    {
      name: 'Enterprise',';,';,
      description: 'For large organizations with complex needs',';,';,
      price: 'Custom',';,';,
      period: 'contact us',';,';,
      icon: Crown,,
      color: 'purple',';,';,
      features: [,,
        'Unlimited AI Automation',';';
        '24/7 Dedicated Support',';';
        'Unlimited Users',';';
        'Custom Analytics',';';
        'White-label Solutions',';';
        'Real-time Reports',';';
        'Dedicated Account Manager',';';
        'Full API Access',';';
        'Custom Development',';';
        'SLA Guarantee'],

      limitations: [],,
      cta: 'Contact Sales',';,';,
      popular: false,,
// import React from 'react';
import { Link } from 'react-router-dom';

} from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingPlans: [,
    {
      name: 'Starter',',';,
      description: 'Perfect for small businesses and startups',',';,
      price: '$99',',';,
      period: 'month',',';,
      icon: Zap,,
      color: 'blue',',';,
      features: [,,
        'Basic AI Automation',
        'Email Support',
        'Up to 5 Users',
        'Standard Analytics',
        'Basic Integrations',
        'Monthly Reports'],

      limitations: [,,
        'Limited API Calls',
        'Basic Customization
      ]
      cta: 'Start Free Trial',',';,
      popular: false,
    },
    {
      name: 'Professional',',';,
      description: 'Ideal for growing businesses',',';,
      price: '$299',',';,
      period: 'month',',';,
      icon: Shield,,
      color: 'green',',';,
      features: [,,
        'Advanced AI Automation',
        'Priority Support',
        'Up to 25 Users',
        'Advanced Analytics',
        'Custom Integrations',
        'Weekly Reports',
        'Training Sessions',
        'API Access'],

      limitations: [],,
      cta: 'Start Free Trial',',';,
      popular: true,
    },
    {
      name: 'Enterprise',',';,
      description: 'For large organizations with complex needs',',';,
      price: 'Custom',',';,
      period: 'contact us',',';,
      icon: Crown,,
      color: 'purple',',';,
      features: [,,
        'Unlimited AI Automation',
        '24/7 Dedicated Support',
        'Unlimited Users',
        'Custom Analytics',
        'White-label Solutions',
        'Real-time Reports',
        'Dedicated Account Manager',
        'Full API Access',
        'Custom Development',
        'SLA Guarantee'],

      limitations: [],,
      cta: 'Contact Sales',',';,
      popular: false,
    }
  ];

  const addOnServices: [,
    {
      name: 'Custom AI Model Development',',';,';,
      description: 'Bespoke AI models tailored to your specific business needs',',';,';,
      price: 'From $5,000',',';,';,
      features: ['Custom Model Architecture', 'Domain-Specific Training', 'Performance Optimization']',';,
    },
    {
      name: 'Data Migration & Integration',',';,';,
      description: 'Seamless migration of your existing data and systems',',';,';,
      price: 'From $2,500',',';,';,
      features: ['Data Assessment', 'Migration Planning', 'System Integration']',';,
    },
    {
      name: 'Training & Certification',',';,';,
      description: 'Comprehensive training for your team on AI best practices',',';,';,
      price: 'From $1,500',',';,';,
      features: ['Custom Training Programs', 'Certification Courses', 'Ongoing Support']',';,
    },
    {
      name: 'Priority Support',',';,';,
      description: 'Enhanced support with faster response times',',';,';,
      price: 'From $500/month',',';,';,
      features: ['Priority Response', 'Dedicated Support Channel', 'Extended Hours']',';,';,
      name: 'Custom AI Model Development',',';,
      description: 'Bespoke AI models tailored to your specific business needs',',';,
      price: 'From $5,000',',';,
      features: ['Custom Model Architecture', 'Domain-Specific Training', 'Performance Optimization']',';,
    },
    {
      name: 'Data Migration & Integration',',';,
      description: 'Seamless migration of your existing data and systems',',';,
      price: 'From $2,500',',';,
      features: ['Data Assessment', 'Migration Planning', 'System Integration']',';,
    },
    {
      name: 'Training & Certification',',';,
      description: 'Comprehensive training for your team on AI best practices',',';,
      price: 'From $1,500',',';,
      features: ['Custom Training Programs', 'Certification Courses', 'Ongoing Support']',';,
    },
    {
      name: 'Priority Support',',';,
      description: 'Enhanced support with faster response times',',';,
      price: 'From $500/month',',';,
      features: ['Priority Response', 'Dedicated Support Channel', 'Extended Hours']',';,
    }
  ];

  const faqs: [,
    {
      question: 'What is included in the free trial?',',';,';,
      answer: 'The free trial includes access to all Starter plan features for 14 days, with no credit card required.},';';
    {
      question: 'Can I upgrade or downgrade my plan anytime?',',';,';,
      answer: 'Yes, you can change your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.},';';
    {
      question: 'Do you offer custom pricing for large organizations?',',';,';,
      answer: 'Absolutely! We offer custom pricing for Enterprise customers with volume discounts and specialized requirements.},';';
    {
      question: 'What kind of support do you provide?',',';,';,
      answer: 'We provide email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.},';';
    {
      question: 'Are there any setup fees?',',';,';,
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on custom requirements.},';';
      question: 'What is included in the free trial?',',';,
      answer: 'The free trial includes access to all Starter plan features for 14 days, with no credit card required.',';,
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',',';,
      answer: 'Yes, you can change your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',';,
    },
    {
      question: 'Do you offer custom pricing for large organizations?',',';,
      answer: 'Absolutely! We offer custom pricing for Enterprise customers with volume discounts and specialized requirements.',';,
    },
    {
      question: 'What kind of support do you provide?',',';,
      answer: 'We provide email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.',';,
    },
    {
      question: 'Are there any setup fees?',',';,
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on custom requirements.',';,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Simple, Transparent Pricing
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Simple, Transparent Pricing
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Schedule Demo
              </Link>
              <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Choose Your Plan
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Flexible pricing options designed to scale with your business
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
              const IconComponent: plan.icon;,,
  return (
                <div key={plan.name} className={`relative bg-white rounded-lg shadow-lg border-2 p-8 ${`,`;,`;
  plan.popular ? 'border-blue-500' : 'border-gray-200
                }`}>`
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <Star className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            {pricingPlans.map((plan)  => {
              const IconComponent: plan.icon;,,
  return (
                <div key={plan.name} className= {`relative bg-white rounded-lg shadow-lg border-2 p-8 ${`,`;,`;
  plan.popular ? 'border-blue-500' : 'border-gray-200
                }`}>`
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <Star className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">`
                      <IconComponent className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">`
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">/{plan.period}</h3>
                    </div>
                  </div>

                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <li key={feature} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <li key={feature} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <Check className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">/{plan.period}</h3>
                    </div>
                  </div>

                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <Check className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <Check className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">—</span>",
                      <li key={limitation} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">—</span>",
                        {limitation}
                      </li>
                    ))}
                  </ul>

                  <Link to: {plan.name == = 'Enterprise' ? '/contact' : '/demo'};';';
                    className= {,
`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-blue-600 text-white hover: bg-blue-700',';,';,
  to: {plan.name == = 'Enterprise' ? '/contact' : '/demo'}
                    className= {,
`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-blue-600 text-white hover: bg-blue-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200
}`}`
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Additional Services
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Enhance your AI implementation with our professional services
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
              <div key={service.name} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.name}</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</h3>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.price}</h3>
                </div>
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                    <li key={feature} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <li key={feature} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Check className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            {addOnServices.map((service) => (
              <div key={service.name} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.name}</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</h3>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.price}</h3>
                </div>
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Check className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Check className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Frequently Asked Questions
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
              <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{faq.question}</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{faq.answer}</h3>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{faq.question}</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{faq.answer}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Ready to Get Started?
          </h2>
          <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Join thousands of businesses already using our AI solutions to transform their operations.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <Link to="/demo",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Start Free Trial
            </Link>
            <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component;