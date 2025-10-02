import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CheckCircle,
  X,
  ArrowRight,
  Star,
  Zap,
  Building2,
  Rocket,
  Phone,
  MessageCircle
} from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses and startups getting started with AI.',
      icon: Rocket,
      features: [
        'AI Workflow Automation (5 workflows)',
        'Basic AI Virtual Assistant',
        'Standard Support (Business Hours)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Monthly Performance Reports'
      ],
      limitations: [
        'Limited to 10,000 API calls/month',
        'Basic customization options',
        'Standard SLA (99.5%)'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses that need advanced AI capabilities.',
      icon: Zap,
      features: [
        'AI Workflow Automation (20 workflows)',
        'Advanced AI Virtual Assistant',
        'Priority Support (24/7)',
        'Advanced Analytics & Insights',
        'Phone & Email Support',
        'Weekly Performance Reports',
        'Custom Integrations (up to 5)',
        'Advanced Security Features'
      ],
      limitations: [
        'Up to 100,000 API calls/month',
        'Standard customization',
        'Enhanced SLA (99.9%)'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Comprehensive solution for large organizations with complex needs.',
      icon: Building2,
      features: [
        'Unlimited AI Workflow Automation',
        'Enterprise AI Virtual Assistant',
        'Dedicated Support Team',
        'Custom Analytics & Reporting',
        'Dedicated Account Manager',
        'Real-time Performance Monitoring',
        'Unlimited Custom Integrations',
        'Enterprise Security & Compliance',
        'Custom SLA (99.99%)',
        'On-premise Deployment Options'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'AI Data Analytics',
      price: '$1,999',
      period: 'per month',
      description: 'Advanced analytics and insights for your data'
    },
    {
      name: 'Intelligent Document Processing',
      price: '$1,499',
      period: 'per month',
      description: 'Automated document processing and analysis'
    },
    {
      name: 'Advanced Cybersecurity AI',
      price: '$2,499',
      period: 'per month',
      description: 'AI-powered security monitoring and threat detection'
    },
    {
      name: 'Quantum Computing Consultation',
      price: '$5,000',
      period: 'per project',
      description: 'Expert consultation on quantum computing readiness'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades and at the next billing cycle for downgrades.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all Starter and Professional plans. No credit card required to start.'
    },
    {
      question: 'What support options are available?',
      answer: 'Support options vary by plan. Starter includes email support, Professional includes 24/7 phone and email support, and Enterprise includes a dedicated support team.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for Enterprise plans and large organizations with specific requirements. Contact our sales team to discuss your needs.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on complexity and requirements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI Solutions Pricing Plans</title>
        <meta
          name="description"
          content="Choose the perfect AI solutions plan for your business. Flexible pricing options from Starter to Enterprise with transparent pricing and no hidden fees."
        />
        <meta
          name="keywords"
          content="AI solutions pricing, enterprise AI pricing, AI automation pricing, AI consulting rates, AI services cost"
        />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our core AI solutions 
                with no hidden fees or long-term contracts.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-blue-500 scale-105' 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`p-3 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center ${
                      plan.popular ? 'bg-blue-500/20' : 'bg-slate-700/50'
                    }`}>
                      <plan.icon className={`h-8 w-8 ${
                        plan.popular ? 'text-blue-400' : 'text-slate-400'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-start">
                        <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/demo'}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 ml-2 inline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Additional Services & Add-ons
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Enhance your AI solutions with our specialized add-on services and consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-blue-400">{addon.price}</span>
                    <span className="text-slate-400 ml-2">{addon.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{addon.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-300">
                Get answers to common questions about our pricing and plans.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Sales CTA */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Choosing the Right Plan?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our sales team is here to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Sales
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;