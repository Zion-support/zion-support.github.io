import React from 'react';
import { Link } from 'react-router-dom'';
import {

} from 'lucide-react'
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
        'Basic Customization'
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
import React from 'react';'
import { Link } from 'react-router-dom';'

} from 'lucide-react';'

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
        'Basic AI Automation','
        'Email Support','
        'Up to 5 Users','
        'Standard Analytics','
        'Basic Integrations','
        'Monthly Reports'],

      limitations: [,,
        'Limited API Calls','
        'Basic Customization'
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
        'Advanced AI Automation','
        'Priority Support','
        'Up to 25 Users','
        'Advanced Analytics','
        'Custom Integrations','
        'Weekly Reports','
        'Training Sessions','
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
        'Unlimited AI Automation','
        '24/7 Dedicated Support','
        'Unlimited Users','
        'Custom Analytics','
        'White-label Solutions','
        'Real-time Reports','
        'Dedicated Account Manager','
        'Full API Access','
        'Custom Development','
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
    <div className="min-h-screen bg-gray-50">","
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center"
            <h1 className="text-4xl md: text-6xl font-bold mb-6">","
  Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">,"
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">","
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center">","
            <h1 className="text-4xl md: text-6xl font-bold mb-6">","
  Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">","
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <Link to: "/demo","
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors","
    <div className= "min-h-screen bg-gray-50">","
      {/* Hero Section */}
      <section className= "bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center">
            <h1 className= "text-4xl md: text-6xl font-bold mb-6">"
  Simple, Transparent Pricing
            </h1>
            <p className= "text-xl text-blue-100 mb-8 max-w-3xl mx-auto">,"
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
      <section className= "bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">","
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center">","
            <h1 className= "text-4xl md: text-6xl font-bold mb-6">"
  Simple, Transparent Pricing
            </h1>
            <p className= "text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
  Choose the perfect plan for your business. Start with a free trial
              no credit card required. Scale as you grow.
            </p>
            <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
              <Link to: "/demo","
  className= "bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors","
              >
                Schedule Demo
              </Link>
              <Link to: "/contact","
  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors","
  className= "border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors","
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center mb-16"
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
      <section className="py-20 bg-white">","
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center mb-16">","
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
  Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">","
      <section className= "py-20 bg-white">
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center mb-16">
            <h2 className= "text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
      <section className= "py-20 bg-white">","
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center mb-16">","
            <h2 className= "text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
  Choose Your Plan
            </h2>
            <p className= "text-xl text-gray-600 max-w-2xl mx-auto">"
  Flexible pricing options designed to scale with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">","
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">","
            {pricingPlans.map((plan)  => {
              const IconComponent: plan.icon;,,
  return (
                <div key={plan.name} className={`relative bg-white rounded-lg shadow-lg border-2 p-8 ${`,`;,`;
  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center"
                        <Star className="w-4 h-4 mr-1/>"
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1/>"
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">","
                        <Star className="w-4 h-4 mr-1" />","
          <div className= "grid grid-cols-1 md: grid-cols-3 gap-8">","
          <div className= "grid grid-cols-1 md: grid-cols-3 gap-8">","
            {pricingPlans.map((plan)  => {
              const IconComponent: plan.icon;,,
  return (
                <div key={plan.name} className= {`relative bg-white rounded-lg shadow-lg border-2 p-8 ${`,`;,`;
  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}>`
                  {plan.popular && (
                    <div className= "absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className= "bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className= "w-4 h-4 mr-1/>"
                    <div className= "absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className= "bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">","
                        <Star className= "w-4 h-4 mr-1" />","
  Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8"
                  <div className="text-center mb-8">","
                    <div className={`w-16 h-16 rounded-lg bg-${plan.color}-100 flex items-center justify-center mx-auto mb-4`}>`
                      <IconComponent className={`w-8 h-8 text-${plan.color}-600`} />`
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <p className="text-gray-600 mb-4">{plan.description}</p>"
                    <div className="mb-6">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-2">/{plan.period}</span>"
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700"
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>"
                      <li key={feature} className="flex items-center text-gray-700">","
                      <li key: {feature} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>"
                      <li key: {feature} className="flex items-center text-gray-700">","
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />","
                  <div className= "text-center mb-8">
                  <div className= "text-center mb-8">","
                    <div className= {`w-16 h-16 rounded-lg bg-${plan.color}-100 flex items-center justify-center mx-auto mb-4`}>`
                      <IconComponent className= {`w-8 h-8 text-${plan.color}-600`} />`
                    </div>
                    <h3 className= "text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <p className= "text-gray-600 mb-4">{plan.description}</p>"
                    <div className= "mb-6">","
                      <span className= "text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className= "text-gray-600 ml-2">/{plan.period}</span>"
                    </div>
                  </div>

                  <ul className= "space-y-4 mb-8">","
                    {plan.features.map((feature) => (
                      <li key={feature} className= "flex items-center text-gray-700">
                        <Check className= "w-5 h-5 text-green-500 mr-3 flex-shrink-0/>"
                      <li key={feature} className= "flex items-center text-gray-700">","
                        <Check className= "w-5 h-5 text-green-500 mr-3 flex-shrink-0" />","
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-center text-gray-500">","
                        <span className="w-5 h-5 mr-3 flex-shrink-0 text-center">—</span>","
                      <li key={limitation} className= "flex items-center text-gray-500">","
                        <span className= "w-5 h-5 mr-3 flex-shrink-0 text-center">—</span>","
                        {limitation}
                      </li>
                    ))}
                  </ul>

                  <Link to: {plan.name == = 'Enterprise' ? '/contact' : '/demo'};';';
                    className= {,
`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-blue-600 text-white hover: bg-blue-700',';,';,
  to: {plan.name == = 'Enterprise' ? '/contact' : '/demo'}'
                    className= {,
`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-blue-600 text-white hover: bg-blue-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
      <section className="py-20 bg-gray-50"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center mb-16"
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
      <section className="py-20 bg-gray-50">","
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center mb-16">","
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
  Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">","
      <section className= "py-20 bg-gray-50">
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center mb-16">
            <h2 className= "text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
      <section className= "py-20 bg-gray-50">","
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center mb-16">","
            <h2 className= "text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
  Additional Services
            </h2>
            <p className= "text-xl text-gray-600 max-w-2xl mx-auto">"
  Enhance your AI implementation with our professional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">","
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">","
            {addOnServices.map((service) => (
              <div key={service.name} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">","
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>"
                <p className="text-gray-600 mb-4">{service.description}</p>"
                <div className="mb-6">","
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>"
                </div>
                <ul className="space-y-2 mb-6">","
                  {service.features.map((feature)  => (
                    <li key={feature} className="flex items-center text-gray-700"
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>"
                    <li key={feature} className="flex items-center text-gray-700">","
                    <li key: {feature} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0/>"
                    <li key: {feature} className="flex items-center text-gray-700">","
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />","
          <div className= "grid grid-cols-1 md: grid-cols-2 gap-8">","
          <div className= "grid grid-cols-1 md: grid-cols-2 gap-8">","
            {addOnServices.map((service) => (
              <div key={service.name} className= "bg-white rounded-lg shadow-lg border border-gray-200 p-8">","
                <h3 className= "text-xl font-bold text-gray-900 mb-3">{service.name}</h3>"
                <p className= "text-gray-600 mb-4">{service.description}</p>"
                <div className= "mb-6">","
                  <span className= "text-2xl font-bold text-blue-600">{service.price}</span>"
                </div>
                <ul className= "space-y-2 mb-6">","
                  {service.features.map((feature)  => (
                    <li key={feature} className= "flex items-center text-gray-700">
                      <Check className= "w-4 h-4 text-green-500 mr-2 flex-shrink-0/>"
                    <li key={feature} className= "flex items-center text-gray-700">","
                      <Check className= "w-4 h-4 text-green-500 mr-2 flex-shrink-0" />","
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to: "/contact","
  className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold transition-colors","
  className= "inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold transition-colors","
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white"
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center mb-16"
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
      <section className="py-20 bg-white">","
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className="text-center mb-16">","
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
  Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">","
      <section className= "py-20 bg-white">
        <div className= "max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center mb-16">
            <h2 className= "text-3xl md: text-4xl font-bold text-gray-900 mb-4">","
      <section className= "py-20 bg-white">","
        <div className= "max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">","
          <div className= "text-center mb-16">","
            <h2 className= "text-3xl md: text-4xl font-bold text-gray-900 mb-4">"
  Frequently Asked Questions
            </h2>
            <p className= "text-xl text-gray-600">"
  Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">","
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">","
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>"
                <p className="text-gray-600">{faq.answer}</p>"
          <div className= "space-y-8">","
            {faqs.map((faq, index) => (
              <div key={index} className= "bg-gray-50 rounded-lg p-8">","
                <h3 className= "text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>"
                <p className= "text-gray-600">{faq.answer}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">","
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">","
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">","
  Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">","
  Join thousands of businesses already using our AI solutions to transform their operations.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">","
          <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <Link to: "/demo","
  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors","
      <section className= "py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
          <h2 className= "text-3xl md: text-4xl font-bold text-white mb-4">","
      <section className= "py-20 bg-gradient-to-r from-blue-600 to-purple-600">","
        <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
          <h2 className= "text-3xl md: text-4xl font-bold text-white mb-4">"
  Ready to Get Started?
          </h2>
          <p className= "text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
  Join thousands of businesses already using our AI solutions to transform their operations.
          </p>
          <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
          <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
            <Link to: "/demo","
  className= "bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors","
            >
              Start Free Trial
            </Link>
            <Link to: "/contact","
  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors","
  className= "border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors","
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;