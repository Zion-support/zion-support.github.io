import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  Award,
  MessageCircle,
  TrendingUp,
  Globe,
  Lock
} from 'lucide-react';
import Header from '../components/Header';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 99,
      yearlyPrice: 990,
      icon: Zap,
      color: 'zion-cyan',
      popular: false,
      features: [
        'AI Workflow Automation (Basic)',
        'Email Support',
        'Standard Templates',
        'Up to 5 Users',
        'Basic Analytics',
        'Cloud Storage (10GB)',
        'API Access (Limited)',
        'Monthly Reports'
      ],
      limitations: [
        'Limited AI Models',
        'Standard Processing Speed',
        'Basic Customization'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies scaling their AI operations',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      icon: Shield,
      color: 'zion-blue',
      popular: true,
      features: [
        'AI Workflow Automation (Advanced)',
        'Priority Support',
        'Custom Templates',
        'Up to 25 Users',
        'Advanced Analytics',
        'Cloud Storage (100GB)',
        'Full API Access',
        'Real-time Monitoring',
        'Custom Integrations',
        'Advanced Security',
        'Weekly Reports',
        'Training Sessions'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      ctaLink: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      icon: Users,
      color: 'zion-purple',
      popular: false,
      features: [
        'AI Workflow Automation (Enterprise)',
        'Dedicated Support Manager',
        'Unlimited Custom Templates',
        'Unlimited Users',
        'Enterprise Analytics',
        'Unlimited Cloud Storage',
        'Full API Access + SLA',
        'Real-time Monitoring & Alerts',
        'Custom Integrations & Development',
        'Enterprise Security & Compliance',
        'Daily Reports & Dashboards',
        'Unlimited Training Sessions',
        '24/7 Phone Support',
        'Custom Deployment',
        'SLA Guarantee (99.9%)',
        'White-label Options'
      ],
      limitations: [],
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const addOns = [
    {
      name: 'AI Virtual Assistant',
      price: 79,
      description: '24/7 intelligent customer support and business operations',
      features: ['Natural Language Processing', 'Multi-channel Support', '24/7 Availability']
    },
    {
      name: 'AI Data Analytics',
      price: 149,
      description: 'Transform data into actionable insights with machine learning',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Integration']
    },
    {
      name: 'Advanced Security',
      price: 199,
      description: 'Enhanced cybersecurity and compliance features',
      features: ['Threat Detection', 'Compliance Automation', 'Security Audits']
    },
    {
      name: 'Custom Development',
      price: 'Custom',
      description: 'Tailored solutions built specifically for your needs',
      features: ['Custom AI Models', 'Integration Development', 'Dedicated Resources']
    }
  ];

  const testimonials = [
    {
      quote: "The Professional plan transformed our operations. ROI was achieved within 3 months.",
      author: "Sarah Johnson",
      company: "TechCorp",
      rating: 5,
      plan: "Professional"
    },
    {
      quote: "Enterprise support is exceptional. Our dedicated manager ensures everything runs smoothly.",
      author: "Michael Chen",
      company: "InnovateLab",
      rating: 5,
      plan: "Enterprise"
    },
    {
      quote: "Great starting point for small businesses. Easy to upgrade as we grow.",
      author: "Emily Rodriguez",
      company: "StartupXYZ",
      rating: 5,
      plan: "Starter"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data is securely backed up and available for download for 30 days after cancellation. We never delete customer data without proper notice."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Absolutely! Contact our sales team for custom enterprise pricing, dedicated support, and tailored solutions for your organization."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Flexible AI & IT Solutions</title>
        <meta name="description" content="Choose the perfect plan for your business. Flexible pricing for AI solutions, IT services, and enterprise-grade support. Start with a free trial." />
        <meta name="keywords" content="pricing, plans, AI solutions, IT services, enterprise, business, subscription" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial with no credit card required.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              
              return (
                <div
                  key={plan.name}
                  className={`card p-8 relative hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                    plan.popular ? 'ring-2 ring-zion-cyan shadow-2xl' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`bg-${plan.color}/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 text-${plan.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-zion-slate-light mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">${price}</span>
                      <span className="text-zion-slate-light ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={plan.ctaLink}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-zion-cyan hover:bg-zion-blue-light'
                        : 'bg-zion-slate-dark hover:bg-zion-slate-light'
                    } text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-zion-slate-light">Enhance your plan with additional services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-zion-cyan mb-3">
                  {typeof addon.price === 'number' ? `$${addon.price}/mo` : addon.price}
                </div>
                <p className="text-zion-slate-light mb-4 text-sm">{addon.description}</p>
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-zion-slate-dark hover:bg-zion-slate-light text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-zion-slate-light">Real feedback from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-zion-slate-light mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-zion-slate">{testimonial.company}</div>
                  <div className="text-xs text-zion-cyan mt-1">{testimonial.plan} Plan</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zion-slate-light">Everything you need to know about our pricing</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;