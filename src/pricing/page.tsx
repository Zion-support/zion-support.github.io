'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 AI services',
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 15 AI services',
        'Priority IT support',
        'Phone & email support',
        'Advanced security',
        'Weekly reports',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI services',
        '24/7 IT support',
        'Dedicated support team',
        'Enterprise security',
        'Real-time reports',
        'Custom analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$199/month',
      description: 'Custom AI model training for your specific needs'
    },
    {
      name: 'Additional Storage',
      price: '$99/month',
      description: 'Extra 1TB of cloud storage'
    },
    {
      name: 'Priority Support',
      price: '$149/month',
      description: '24/7 priority support with 1-hour response time'
    },
    {
      name: 'Custom Development',
      price: '$299/hour',
      description: 'Custom feature development and integrations'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing Plans - Zion Tech Group"
        description="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at $299/month."
        keywords={['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprise pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      /><>
</SEOOptimizer
        title="Pricing Plans - Zion Tech Group"
        description="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs. Starting at $299/month."
        keywords={['pricing', 'AI services pricing', 'IT services pricing', 'business plans', 'enterprise pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Navigation /><>
</Navigation />
<main className="pt-16"></main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center"><>
</section className="container mx-auto px-4 py-16 text-center">
<div className="max-w-4xl mx-auto"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text"></h1><//h1>
                Simple, Transparent Pricing</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl md:text-2xl text-cyan-400 mb-8"></p><//p>
                Choose the perfect plan for your business needs</p><>
<//p>
</p><>
<//p>
<p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"></p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                All plans include our core AI and IT services with no hidden fees. </p><//p>
                Scale up or down as your business grows.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</section><//section>
          {/* Pricing Plans */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"></div><//div>
              {pricingPlans.map((plan, index) => (</div><>
<//div>
<div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                ></div><//div>
                  {plan.popular && (</div><>
<//div>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div><>
<//div>
<span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold"></span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        {plan.cta}
                      </span><>
<//span>
</div><//div>
                  )}
                  <div className="text-center mb-8"></div><>
<//div>
<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{plan.description}</p><>
<//p>
<div className="flex items-baseline justify-center"></div><>
<//div>
<span className="text-5xl font-bold text-cyan-400">{plan.price}</span><>
<//span>
<span className="text-gray-400 ml-2">{plan.period}</span><>
<//span>
</div><>
<//div>
</div><>
<//div>
<ul className="space-y-4 mb-8"></ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"><>
</li key={featureIndex} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li><//li>
                    ))}
                  </ul><>
<//ul>
<a
                    href={plan.popular ? "mailto:kleber@ziontechgroup.com" : "tel:+13024640950"}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  ></a
                    href={plan.popular ? "mailto:kleber@ziontechgroup.com" : "tel:+13024640950"}
                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'cyber-button'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.popular ? 'Contact Sales' : plan.cta}
                  </a><>
<//a>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              Additional Services</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"></div><//div>
              {addOns.map((addon, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6 text-center"></div><>
<//div>
<h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3><>
<//h3>
<div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div><>
<//div>
<p className="text-gray-300 text-sm">{addon.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              Frequently Asked Questions</h1><>
<//h1>
</h2><>
<//h2>
<div className="max-w-4xl mx-auto space-y-6"></div><//div>
              {faqs.map((faq, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6"></div><>
<//div>
<h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><>
<//h3>
<p className="text-gray-300">{faq.answer}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center"><>
</section className="container mx-auto px-4 py-16 text-center">
<div className="cyber-card p-12 max-w-4xl mx-auto"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text"></h1><//h1>
                Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
                Contact us today to discuss your needs and find the perfect plan</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                ><>
</a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
<Phone className="w-5 h-5" /><>
</Phone className="w-5 h-5" />
<span>Call (302) 464-0950</span><>
<//span>
</a><>
<//a>
<a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                ><>
</a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
<Mail className="w-5 h-5" /><>
</Mail className="w-5 h-5" />
<span>Get Free Quote</span><>
<//span>
</a><>
<//a>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</div><>
<//div>
</><//>
  );
};

export default PricingPage;