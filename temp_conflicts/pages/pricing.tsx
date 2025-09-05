import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Check, Star, Zap, Shield, Rocket, Brain, Atom, 
  Users, Globe, Code, Server, Cpu, ArrowRight,
  TrendingUp, Award, Clock, DollarSign
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 997,
      annualPrice: 9970,
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-400',
      popular: false,
      features: [
        'AI Business Intelligence Basic',
        'Up to 5 team members',
        'Basic analytics dashboard',
        'Email support',
        '14-day free trial',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      ctaColor: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      monthlyPrice: 2497,
      annualPrice: 24970,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
      popular: true,
      features: [
        'AI Business Intelligence Pro',
        'AI Customer Experience',
        'Up to 25 team members',
        'Advanced analytics & reporting',
        'Priority support',
        '30-day free trial',
        'Custom integrations',
        'Advanced AI models'
      ],
      cta: 'Start Free Trial',
      ctaColor: 'from-purple-500 to-pink-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Full-scale solutions for large organizations',
      monthlyPrice: 4997,
      annualPrice: 49970,
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-400',
      popular: false,
      features: [
        'All Professional features',
        'Quantum Cybersecurity',
        'Edge Computing Orchestration',
        'Unlimited team members',
        'Custom AI development',
        'Dedicated support manager',
        '60-day free trial',
        'White-label solutions',
        'SLA guarantees',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      ctaColor: 'from-green-500 to-emerald-600'
    },
    {
      id: 'custom',
      name: 'Custom',
      description: 'Tailored solutions for unique requirements',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      textColor: 'text-orange-400',
      popular: false,
      features: [
        'Fully customized solutions',
        'Space technology integration',
        'Quantum computing access',
        'Dedicated development team',
        '24/7 premium support',
        'Custom trial period',
        'Exclusive features',
        'Strategic partnership',
        'ROI optimization',
        'Future technology access'
      ],
      cta: 'Get Custom Quote',
      ctaColor: 'from-orange-500 to-red-600'
    }
  ];

  const addOns = [
    {
      name: 'AI Consulting',
      description: 'Strategic AI implementation guidance',
      monthlyPrice: 997,
      annualPrice: 9970,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Access to quantum computing resources',
      monthlyPrice: 2997,
      annualPrice: 29970,
      icon: Atom,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Space Technology',
      description: 'Space mining and satellite AI systems',
      monthlyPrice: 7997,
      annualPrice: 79970,
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Custom Development',
      description: 'Tailored AI solution development',
      monthlyPrice: 4997,
      annualPrice: 49970,
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const savings = {
    monthly: 0,
    annual: 20
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    if (planId === 'custom') {
      window.location.href = '/contact';
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group | Transparent Pricing for Revolutionary Technology</title>
        <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's transparent pricing for AI, quantum computing, and space technology solutions. Start with a free trial today!&quot; />
        <meta name=&quot;keywords&quot; content=&quot;pricing, AI services pricing, quantum computing cost, space technology pricing, Zion Tech Group pricing&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Pricing - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Transparent pricing for revolutionary technology solutions.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/pricing&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/pricing&quot; />
      </Head>

      <EnhancedNavigation />

      <main className=&quot;min-h-screen bg-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]&quot; />
          
          <div className=&quot;max-w-7xl mx-auto px-6 relative z-10&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-8&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Transparent Pricing
                </span>
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12&quot;>
                Choose the perfect plan for your business needs. All plans include 
                free trials and our revolutionary technology solutions.
              </p>
              
              {/* Billing Toggle */}
              <div className=&quot;flex items-center justify-center space-x-4 mb-8&quot;>
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                  {billingCycle === 'annual' && (
                    <span className=&quot;ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full&quot;>
                      Save {savings.annual}%
                    </span>
                  )}
                </span>
              </div>

              {/* Key Benefits */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                    <Check className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold mb-2&quot;>Free Trials</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Start with no commitment</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                    <Shield className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold mb-2&quot;>No Hidden Fees</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Transparent pricing</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                    <Users className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div className=&quot;text-white font-semibold mb-2&quot;>24/7 Support</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>Always here to help</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-7xl mx-auto px-6&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${
                    plan.popular ? 'lg:scale-105' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <div className=&quot;bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg&quot;>
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 h-full flex flex-col ${
                    plan.popular
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                      : 'border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-gray-600'
                  }`}>
                    {/* Plan Header */}
                    <div className=&quot;text-center mb-8&quot;>
                      <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <plan.icon className=&quot;w-8 h-8 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                      <p className=&quot;text-gray-400 text-sm leading-relaxed&quot;>{plan.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className=&quot;text-center mb-8&quot;>
                      <div className=&quot;mb-2&quot;>
                        <span className=&quot;text-4xl font-bold text-white&quot;>
                          {typeof plan.monthlyPrice === 'number' ? '$' : ''}
                          {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        {typeof plan.monthlyPrice === 'number' && (
                          <span className=&quot;text-gray-400 text-lg&quot;>/month</span>
                        )}
                      </div>
                      {billingCycle === 'annual' && typeof plan.monthlyPrice === 'number' && (
                        <div className=&quot;text-sm text-green-400&quot;>
                          Save ${Math.round((plan.monthlyPrice * 12 - plan.annualPrice) / 12)}/month
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className=&quot;flex-grow mb-8&quot;>
                      <ul className=&quot;space-y-3&quot;>
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className=&quot;flex items-start space-x-3&quot;>
                            <Check className=&quot;w-5 h-5 text-green-400 flex-shrink-0 mt-0.5&quot; />
                            <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`w-full bg-gradient-to-r ${plan.ctaColor} text-white py-4 px-6 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className=&quot;py-20 relative bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-6&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Additional Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Enhance your experience with our specialized add-on services
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300&quot;
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${addon.color} rounded-xl flex items-center justify-center mb-4`}>
                    <addon.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{addon.name}</h3>
                  <p className=&quot;text-gray-400 text-sm mb-4&quot;>{addon.description}</p>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;text-2xl font-bold text-white mb-2&quot;>
                      ${billingCycle === 'monthly' ? addon.monthlyPrice : addon.annualPrice}
                      <span className=&quot;text-gray-400 text-lg&quot;>/month</span>
                    </div>
                    <button className=&quot;text-cyan-400 hover:text-cyan-300 text-sm font-medium&quot;>
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-4xl mx-auto px-6&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Frequently Asked Questions
              </h2>
              <p className=&quot;text-xl text-gray-300&quot;>
                Get answers to common questions about our pricing and services
              </p>
            </motion.div>

            <div className=&quot;space-y-6&quot;>
              {[
                {
                  question: &quot;What's included in the free trial?&quot;,
                  answer: &quot;All plans include a free trial with full access to features. Starter plans get 14 days, Professional gets 30 days, and Enterprise gets 60 days. No credit card required.&quot;
                },
                {
                  question: &quot;Can I change plans later?&quot;,
                  answer: &quot;Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.&quot;
                },
                {
                  question: &quot;Is there a setup fee?&quot;,
                  answer: &quot;No setup fees for standard plans. Custom Enterprise solutions may have one-time implementation costs, which we'll discuss during consultation.&quot;
                },
                {
                  question: &quot;What payment methods do you accept?&quot;,
                  answer: &quot;We accept all major credit cards, bank transfers, and can accommodate custom payment terms for Enterprise customers.&quot;
                },
                {
                  question: &quot;Do you offer volume discounts?&quot;,
                  answer: &quot;Yes! We offer significant discounts for annual billing and volume deployments. Contact our sales team for custom pricing.&quot;
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6&quot;
                >
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>{faq.question}</h3>
                  <p className=&quot;text-gray-300 leading-relaxed&quot;>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-7xl mx-auto px-6&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center&quot;
            >
              <div className=&quot;bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16&quot;>
                <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-8&quot;>
                  Ready to Get Started?
                </h2>
                <p className=&quot;text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed&quot;>
                  Start your free trial today and experience the power of revolutionary 
                  AI, quantum computing, and space technology solutions.
                </p>
                
                <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
                  <a
                    href=&quot;/contact&quot;
                    className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40&quot;
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm&quot;
                  >
                    📞 Talk to Sales
                  </Link>
                </div>
                
                <div className=&quot;mt-10 text-sm text-gray-400&quot;>
                  <p>Questions? <a href=&quot;/contact&quot; className=&quot;text-cyan-400 hover:text-cyan-300 underline&quot;>Contact our team</Link> for personalized guidance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
