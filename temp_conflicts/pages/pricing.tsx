import React, {_useState} from 'react';
import Head from 'next/head';
import {_Check, _Star, _Zap, _Shield, _Rocket, _Brain, _Atom, _Users, _Globe, _Code, _Server, _Cpu, _ArrowRight, _TrendingUp, _Award, _Clock, _DollarSign} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PricingPage() {_const [billingCycle, _setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, _setSelectedPlan] = useState<string | null>(null);

  const _pricingPlans = [
    {
      id: 'starter', _name: 'Starter', _description: 'Perfect for small businesses getting started with AI', _monthlyPrice: 997, _annualPrice: 9970, _icon: Rocket, _color: 'from-blue-500 to-cyan-500', _textColor: 'text-blue-400', _popular: false, _features: [
        'AI Business Intelligence Basic', _'Up to 5 team members', _'Basic analytics dashboard', _'Email support', _'14-day free trial', _'Standard integrations'
      ], _cta: 'Start Free Trial', _ctaColor: 'from-blue-500 to-cyan-600'},
    {_id: 'professional', _name: 'Professional', _description: 'Advanced features for growing businesses', _monthlyPrice: 2497, _annualPrice: 24970, _icon: Brain, _color: 'from-purple-500 to-pink-500', _textColor: 'text-purple-400', _popular: true, _features: [
        'AI Business Intelligence Pro', _'AI Customer Experience', _'Up to 25 team members', _'Advanced analytics & reporting', _'Priority support', _'30-day free trial', _'Custom integrations', _'Advanced AI models'
      ], _cta: 'Start Free Trial', _ctaColor: 'from-purple-500 to-pink-600'},
    {_id: 'enterprise', _name: 'Enterprise', _description: 'Full-scale solutions for large organizations', _monthlyPrice: 4997, _annualPrice: 49970, _icon: Shield, _color: 'from-green-500 to-emerald-500', _textColor: 'text-green-400', _popular: false, _features: [
        'All Professional features', _'Quantum Cybersecurity', _'Edge Computing Orchestration', _'Unlimited team members', _'Custom AI development', _'Dedicated support manager', _'60-day free trial', _'White-label solutions', _'SLA guarantees', _'On-premise deployment'
      ], _cta: 'Contact Sales', _ctaColor: 'from-green-500 to-emerald-600'},
    {_id: 'custom', _name: 'Custom', _description: 'Tailored solutions for unique requirements', _monthlyPrice: 'Custom', _annualPrice: 'Custom', _icon: Code, _color: 'from-orange-500 to-red-500', _textColor: 'text-orange-400', _popular: false, _features: [
        'Fully customized solutions', _'Space technology integration', _'Quantum computing access', _'Dedicated development team', _'24/7 premium support', _'Custom trial period', _'Exclusive features', _'Strategic partnership', _'ROI optimization', _'Future technology access'
      ], _cta: 'Get Custom Quote', _ctaColor: 'from-orange-500 to-red-600'}
  ];

  const _addOns = [
    {_name: 'AI Consulting', _description: 'Strategic AI implementation guidance', _monthlyPrice: 997, _annualPrice: 9970, _icon: Brain, _color: 'from-purple-500 to-pink-500'},
    {_name: 'Quantum Computing', _description: 'Access to quantum computing resources', _monthlyPrice: 2997, _annualPrice: 29970, _icon: Atom, _color: 'from-cyan-500 to-blue-500'},
    {_name: 'Space Technology', _description: 'Space mining and satellite AI systems', _monthlyPrice: 7997, _annualPrice: 79970, _icon: Rocket, _color: 'from-indigo-500 to-purple-500'},
    {_name: 'Custom Development', _description: 'Tailored AI solution development', _monthlyPrice: 4997, _annualPrice: 49970, _icon: Code, _color: 'from-green-500 to-emerald-500'}
  ];

  const _savings = {_monthly: 0, _annual: 20};

  const _handlePlanSelect = (_planId: string) => {_setSelectedPlan(planId);
    if (planId === 'custom') {
      window.location.href = '/contact';} else {_window.location.href = '/contact';}
  };

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group | Transparent Pricing for Revolutionary Technology</title>
        <meta name="description" content="Explore Zion Tech Group's transparent pricing for AI, quantum computing, and space technology solutions. Start with a free trial today!" />
        <meta name="keywords" content="pricing, AI services pricing, quantum computing cost, space technology pricing, Zion Tech Group pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for revolutionary technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-black text-white">
        {_/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Choose the perfect plan for your business needs. All plans include 
                free trials and our revolutionary technology solutions.
              </p>
              
              {_/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={_`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className={_`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-gray-600'}`}
                >
                  <div
                    className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'}`}
                  />
                </button>
                <span className={_`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                  {_billingCycle === 'annual' && (
                    <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                      Save {savings.annual}%
                    </span>
                  )}
                </span>
              </div>

              {_/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-2">Free Trials</div>
                  <div className="text-gray-400 text-sm">Start with no commitment</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-2">No Hidden Fees</div>
                  <div className="text-gray-400 text-sm">Transparent pricing</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-2">24/7 Support</div>
                  <div className="text-gray-400 text-sm">Always here to help</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {_/* Pricing Plans */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_pricingPlans.map(_(plan, _index) => (
                <motion.div
                  key={plan.id}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className={_`relative ${
                    plan.popular ? 'lg:scale-105' : ''}`}
                >
                  {_/* Popular Badge */}
                  {_plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  <div className={_`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 h-full flex flex-col ${
                    plan.popular
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                      : 'border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-gray-600'}`}>
                    {_/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={_`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{_plan.description}</p>
                    </div>

                    {_/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-white">
                          {_typeof plan.monthlyPrice === 'number' ? '$' : ''}
                          {_billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        {_typeof plan.monthlyPrice === 'number' && (
                          <span className="text-gray-400 text-lg">/month</span>
                        )}
                      </div>
                      {_billingCycle === 'annual' && typeof plan.monthlyPrice === 'number' && (
                        <div className="text-sm text-green-400">
                          Save ${Math.round((plan.monthlyPrice * 12 - plan.annualPrice) / 12)}/month
                        </div>
                      )}
                    </div>

                    {_/* Features */}
                    <div className="flex-grow mb-8">
                      <ul className="space-y-3">
                        {_plan.features.map(_(feature, _idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{_feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {_/* CTA Button */}
                    <button
                      onClick={_() => handlePlanSelect(plan.id)}
                      className={_`w-full bg-gradient-to-r ${plan.ctaColor} text-white py-4 px-6 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40`}
                    >
                      {_plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Add-ons Section */}
        <section className="py-20 relative bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your experience with our specialized add-on services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {_addOns.map(_(addon, _index) => (
                <motion.div
                  key={addon.name}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={_`w-12 h-12 bg-gradient-to-br ${addon.color} rounded-xl flex items-center justify-center mb-4`}>
                    <addon.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{_addon.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{_addon.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      ${_billingCycle === 'monthly' ? addon.monthlyPrice : addon.annualPrice}
                      <span className="text-gray-400 text-lg">/month</span>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* FAQ Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services
              </p>
            </motion.div>

            <div className="space-y-6">
              {_[
                {
                  question: "What's included in the free trial?", _answer: "All plans include a free trial with full access to features. Starter plans get 14 days, _Professional gets 30 days, _and Enterprise gets 60 days. No credit card required."},
                {_question: "Can I change plans later?", _answer: "Yes! You can upgrade, _downgrade, _or cancel your plan at any time. Changes take effect immediately, _and we'll prorate any billing adjustments."},
                {_question: "Is there a setup fee?", _answer: "No setup fees for standard plans. Custom Enterprise solutions may have one-time implementation costs, _which we'll discuss during consultation."},
                {_question: "What payment methods do you accept?", _answer: "We accept all major credit cards, _bank transfers, _and can accommodate custom payment terms for Enterprise customers."},
                {_question: "Do you offer volume discounts?", _answer: "Yes! We offer significant discounts for annual billing and volume deployments. Contact our sales team for custom pricing."}
              ].map(_(faq, _index) => (
                <motion.div
                  key={_index}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{_faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{_faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Start your free trial today and experience the power of revolutionary 
                  AI, quantum computing, and space technology solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    📞 Talk to Sales
                  </a>
                </div>
                
                <div className="mt-10 text-sm text-gray-400">
                  <p>Questions? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our team</a> for personalized guidance.</p>
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
