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
        'Custom Analytics Dashboard',
        'White-label Solutions',
        'SLA Guarantee',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  const servicePricing = [
    {
      service: 'AI Services',
      description: 'Machine Learning, NLP, Computer Vision',
      startingPrice: '$5,000',
      range: '$5,000 - $50,000',
      features: ['Custom AI Models', 'Data Processing', 'Model Training', 'API Integration']
    },
    {
      service: 'Cybersecurity',
      description: 'Security audits, threat detection, compliance',
      startingPrice: '$3,000',
      range: '$3,000 - $30,000',
      features: ['Security Assessment', 'Penetration Testing', 'Compliance Audit', 'Incident Response']
    },
    {
      service: 'Cloud Migration',
      description: 'AWS, Azure, GCP migration services',
      startingPrice: '$10,000',
      range: '$10,000 - $100,000',
      features: ['Migration Planning', 'Data Transfer', 'Security Setup', 'Performance Optimization']
    },
    {
      service: 'DevOps & SRE',
      description: 'CI/CD, monitoring, infrastructure automation',
      startingPrice: '$8,000',
      range: '$8,000 - $80,000',
      features: ['Pipeline Setup', 'Infrastructure as Code', 'Monitoring', 'Disaster Recovery']
    },
    {
      service: 'Mobile Development',
      description: 'iOS, Android, cross-platform apps',
      startingPrice: '$15,000',
      range: '$15,000 - $150,000',
      features: ['Native Development', 'UI/UX Design', 'App Store Optimization', 'Maintenance']
    },
    {
      service: 'Data Analytics',
      description: 'Business intelligence, predictive analytics',
      startingPrice: '$7,000',
      range: '$7,000 - $70,000',
      features: ['Data Warehousing', 'Custom Dashboards', 'Predictive Modeling', 'Real-time Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your business needs. All plans include our core services 
              with flexible options to scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Pricing</h2>
            <p className="text-xl text-gray-300">Individual service pricing for specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePricing.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-2">{service.service}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-400">{service.startingPrice}</div>
                  <div className="text-sm text-gray-400">Starting from</div>
                  <div className="text-sm text-gray-300">Range: {service.range}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full block text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Common questions about our pricing and services</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                at the beginning of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">
                Absolutely! We work with clients to create custom solutions that meet their 
                specific needs and budget requirements.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">What's included in support?</h3>
              <p className="text-gray-300">
                Support includes technical assistance, troubleshooting, maintenance, and 
                optimization. Response times vary by plan level.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">
                Setup fees are included in our monthly plans. For one-time projects, 
                setup costs are included in the project quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;