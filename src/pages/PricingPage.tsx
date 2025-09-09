import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Basic SEO optimization',
        'Mobile responsive design',
        'Contact form integration',
        'Basic analytics',
        '3 months support',
        'Source code included'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per project',
      description: 'Ideal for growing businesses with complex needs',
      features: [
        'Up to 20 pages',
        'Advanced SEO optimization',
        'Custom design system',
        'E-commerce integration',
        'Advanced analytics',
        '6 months support',
        'Performance optimization',
        'Security implementation',
        'Source code included'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: 'per project',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited pages',
        'Enterprise SEO strategy',
        'Custom design & branding',
        'Advanced e-commerce',
        'Enterprise analytics',
        '12 months support',
        'Performance monitoring',
        'Security audit',
        'Custom integrations',
        'Dedicated project manager',
        'Source code included'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'AI Integration',
      price: '$1,999',
      description: 'Add AI-powered features to your website'
    },
    {
      name: 'Mobile App',
      price: '$4,999',
      description: 'Native mobile app for iOS and Android'
    },
    {
      name: 'API Development',
      price: '$2,999',
      description: 'Custom API development and integration'
    },
    {
      name: 'Cloud Migration',
      price: '$1,499',
      description: 'Migrate your existing website to the cloud'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for professional web development and IT services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Simple <span className="text-zion-cyan">Pricing</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our commitment to quality and support.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                  plan.popular
                    ? 'border-zion-cyan ring-2 ring-zion-cyan/50'
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.cta}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <span className="text-zion-cyan mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Add-ons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-zion-cyan text-2xl font-bold mb-3">{addon.price}</p>
                  <p className="text-zion-slate-light text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">What's included in the price?</h3>
                <p className="text-zion-slate-light">
                  All plans include design, development, testing, deployment, and support. 
                  You also get the complete source code and documentation.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">How long does development take?</h3>
                <p className="text-zion-slate-light">
                  Typical timelines: Starter (2-4 weeks), Professional (6-8 weeks), 
                  Enterprise (10-16 weeks). We provide detailed project timelines.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer maintenance?</h3>
                <p className="text-zion-slate-light">
                  Yes! All plans include support periods. We also offer ongoing 
                  maintenance packages for long-term website care.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade my plan?</h3>
                <p className="text-zion-slate-light">
                  Absolutely! You can upgrade at any time. We'll work with you to 
                  seamlessly transition to a higher plan.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Have questions about our pricing? Contact us for a personalized quote tailored to your specific needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80">
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;