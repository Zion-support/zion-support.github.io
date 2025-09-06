



import React from 'react';

import { Link } from 'react-router-dom';
import { Check, Star, Phone, Mail, MapPin } from 'lucide-react';

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
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing businesses with complex needs',
      features: [
        'Advanced AI Solutions',
        'Full Cloud Infrastructure',
        'Comprehensive Security Suite',
        'Monthly Support (40 hours)',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
        'Performance Monitoring'

      ],
      popular: true
    },
    {
      name: 'Enterprise',

      price: '$15,000',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Enterprise AI Platform',
        'Multi-Cloud Architecture',
        'Advanced Security & Compliance',
        'Dedicated Support Team (80 hours)',
        '24/7 Phone Support',
        'Custom Development',
        'SLA Guarantees',
        'Training & Documentation',
        'Quarterly Reviews'
      ],
      popular: false

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
    {
      name: 'Professional Support',
      hours: '40 hours',
      price: '$1,500',
      features: [
        'Priority Support',
        'Phone & Email Support',
        'Advanced Troubleshooting',
        'Performance Optimization',
        'Weekly Reports',
        'Proactive Monitoring'
      ]
    },
    {
      name: 'Enterprise Support',
      hours: '80 hours',
      price: '$2,500',
      features: [
        'Dedicated Support Team',
        '24/7 Phone Support',
        'Custom Solutions',
        'SLA Guarantees',
        'Daily Reports',
        'Real-time Monitoring',
        'Training & Documentation'
      ]

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
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Choose the perfect plan for your business needs. All plans include our core services with flexible pricing options.
          </p>
        </div>


        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-white/20'
              } hover:bg-white/20 transition-all duration-300`}
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
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Service Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Individual Service Pricing</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePricing.map((service, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold mb-4">{service.name}</h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400">Starting: {service.starting}</div>
                    <div className="text-sm text-gray-400">Monthly: {service.monthly}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Get Quote
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
                
                <ul className="space-y-3 mb-6">
                  {support.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>

                    </li>
                  ))}
                </ul>


                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-200"
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and custom quote tailored to your needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call Now

            </a>

          </div>

        </section>

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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
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
              Join thousands of businesses already using our platform.
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
      </main>

      <Footer />



    </div>
  );
};




export default Pricing;