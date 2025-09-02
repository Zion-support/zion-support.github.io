import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  Brain,
  Cloud,
  Rocket,
  Award,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 299, annual: 2999 },
      features: [
        'AI-Powered Analytics Dashboard',
        'Basic Cloud Infrastructure',
        'Email Support',
        '5 User Licenses',
        'Standard Security Features',
        'Monthly Reports',
        'Basic Training Materials'
      ],
      popular: false,
      icon: Rocket,
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: { monthly: 799, annual: 7999 },
      features: [
        'Everything in Starter',
        'Advanced AI & Machine Learning',
        'Priority Support (4-hour response)',
        '25 User Licenses',
        'Advanced Security & Compliance',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Weekly Performance Reviews',
        'Advanced Training & Workshops'
      ],
      popular: true,
      icon: Star,
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { monthly: 1999, annual: 19999 },
      features: [
        'Everything in Professional',
        'Custom AI Model Development',
        '24/7 Premium Support',
        'Unlimited User Licenses',
        'Enterprise Security & Compliance',
        'Custom Development',
        'Dedicated Success Team',
        'Daily Performance Monitoring',
        'Executive Strategy Sessions',
        'Custom Training Programs'
      ],
      popular: false,
      icon: Award,
      color: 'from-zion-cyan to-zion-purple'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Model Training',
      description: 'Custom AI model development and training',
      price: { monthly: 500, annual: 5000 },
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Optimization', 'Performance Monitoring']
    },
    {
      name: 'Cloud Migration',
      description: 'Complete cloud infrastructure migration',
      price: { monthly: 1000, annual: 10000 },
      features: ['Infrastructure Assessment', 'Migration Planning', 'Data Transfer', 'Post-Migration Support']
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment',
      price: { monthly: 300, annual: 3000 },
      features: ['Vulnerability Assessment', 'Compliance Review', 'Security Recommendations', 'Remediation Support']
    },
    {
      name: 'Custom Development',
      description: 'Tailored software development',
      price: { monthly: 1500, annual: 15000 },
      features: ['Requirements Analysis', 'Custom Development', 'Testing & QA', 'Deployment Support']
    }
  ];

  const valuePropositions = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Cutting-edge artificial intelligence and machine learning capabilities built into every solution.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 Type II compliance and advanced threat protection.'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across multiple time zones with dedicated account management.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to our world-class team of AI researchers, engineers, and business experts.'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom pricing and enterprise agreements for organizations with specific needs or large deployments.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise customers.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for our standard plans. Custom implementations may have associated costs that we\'ll discuss upfront.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits and can help you upgrade to a plan that better fits your needs.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for new customers. Enterprise customers have custom terms outlined in their agreements.'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (monthly: number, annual: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - annual;
    const savingsPercent = Math.round((savings / monthlyTotal) * 100);
    return { amount: savings, percent: savingsPercent };
  };

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the plan that fits your business needs. All plans include our core AI and technology solutions with enterprise-grade support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-zion-cyan' : 'bg-zion-slate-light'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
                Annual
                {billingCycle === 'annual' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zion-cyan/20 text-zion-cyan">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-zion-cyan bg-zion-slate-darker shadow-lg shadow-zion-cyan/20'
                    : 'border-zion-purple/20 bg-zion-slate-dark hover:border-zion-cyan/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zion-cyan mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-zion-slate-light ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-zion-cyan">
                      Save {getSavings(plan.price.monthly, plan.price.annual).percent}% annually
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan hover:bg-zion-cyan/80 text-white'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enhance your solution with specialized services tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-zion-cyan mb-3">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">
                    {formatPrice(service.price[billingCycle])}
                  </span>
                  <span className="text-zion-slate-light text-sm ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 px-4 border border-zion-cyan text-zion-cyan rounded-lg text-sm font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300">
                  Add Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional value through cutting-edge technology, expert support, and proven results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((proposition, index) => (
              <motion.div
                key={proposition.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <proposition.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3">{proposition.title}</h3>
                <p className="text-zion-slate-light">{proposition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20"
              >
                <h3 className="text-lg font-semibold text-zion-cyan mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our sales team to discuss your needs and get a personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Get a quick response from our sales team.
                </p>
                <a href="mailto:sales@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80">
                  sales@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Speak directly with our sales representatives.
                </p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80">
                  +1 (302) 464-0950
                </a>
              </div>

              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Book a personalized demonstration of our solutions.
                </p>
                <button className="text-zion-cyan hover:text-zion-cyan/80">
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
