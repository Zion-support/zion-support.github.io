import React from 'react';
import Head from 'next/head';
import {_Brain, _Shield, _Rocket, _Cpu, _Database, _Globe, _CheckCircle, _Star, _TrendingUp, _Zap, _Users} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PricingPage() {_const _plans = [
    {
      name: "Starter", _price: "$299", _period: "/month", _description: "Perfect for small businesses getting started with AI", _features: [
        "Basic AI analytics", _"5 customizable dashboards", _"Standard reporting", _"Email support", _"Up to 10 users", _"Basic security features"
      ], _popular: false, _color: "from-blue-500 to-cyan-500"},
    {_name: "Professional", _price: "$799", _period: "/month", _description: "Advanced features for growing businesses", _features: [
        "Everything in Starter", _"Advanced AI capabilities", _"Unlimited dashboards", _"Custom reporting", _"Priority support", _"Up to 50 users", _"API access", _"Advanced security"
      ], _popular: true, _color: "from-purple-500 to-pink-500"},
    {_name: "Enterprise", _price: "Custom", _period: "", _description: "Full-scale solution for large organizations", _features: [
        "Everything in Professional", _"Custom AI models", _"Dedicated support team", _"Unlimited users", _"On-premise deployment", _"Custom training", _"SLA guarantees", _"Advanced compliance"
      ], _popular: false, _color: "from-green-500 to-emerald-500"}
  ];

  const _addOns = [
    {_name: "AI Research Assistant", _price: "$199", _period: "/month", _description: "Autonomous research and knowledge discovery", _features: ["Literature analysis", _"Knowledge synthesis", _"Research automation"], _icon: Brain},
    {_name: "Quantum Cybersecurity", _price: "$399", _period: "/month", _description: "Future-proof security with quantum-resistant encryption", _features: ["Quantum encryption", _"AI threat detection", _"Zero-trust architecture"], _icon: Shield},
    {_name: "Space Technology", _price: "$299", _period: "/month", _description: "Satellite data and space resource intelligence", _features: ["Satellite optimization", _"Earth observation", _"Orbital analytics"], _icon: Rocket},
    {_name: "Edge Computing", _price: "$199", _period: "/month", _description: "Real-time processing at the network edge", _features: ["Edge orchestration", _"IoT management", _"Real-time processing"], _icon: Cpu}
  ];

  const _faqs = [
    {_question: "What's included in the base pricing?", _answer: "Our base pricing includes core AI analytics, _basic dashboards, _standard reporting, _and email support. Each plan builds upon these features with additional capabilities and user limits."},
    {_question: "Can I change plans at any time?", _answer: "Yes, _you can upgrade or downgrade your plan at any time. Changes take effect immediately, _and we'll prorate any billing adjustments."},
    {_question: "Do you offer custom pricing for specific needs?", _answer: "Absolutely! Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored quote."},
    {_question: "What support options are available?", _answer: "Starter plans include email support, _Professional plans get priority support, _and Enterprise plans include dedicated support teams with SLA guarantees."},
    {_question: "Are there any setup or hidden fees?", _answer: "No hidden fees! Setup is included in all plans. The only additional costs are for add-on services and exceeding user limits on lower-tier plans."},
    {_question: "Do you offer discounts for annual billing?", _answer: "Yes! We offer a 20% discount for annual billing on all plans. This is applied automatically when you choose annual billing."}
  ];

  return (_<>
      <Head>
        <title>Pricing 2025 - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI, _cybersecurity, _and technology solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, _AI pricing, _cybersecurity pricing, _technology pricing, _Zion Tech Group" />
        <meta property="og:title" content="Pricing 2025 - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for our AI, _cybersecurity, _and technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing-2025" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, _<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {_" "}Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the plan that fits your business needs and budget. All plans include our core features 
              with transparent pricing and no hidden fees. Start small and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#plans"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Plans
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Pricing Plans */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Choose Your Plan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start with what you need and scale as you grow. All plans include our core AI and technology features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_plans.map((plan, _index) => (
              <motion.div
                key={plan.name}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className={_`relative bg-slate-50 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{_plan.name}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {_plan.price}
                    <span className="text-lg text-slate-600">{_plan.period}</span>
                  </div>
                  <p className="text-slate-600">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{_feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Add-ons */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Add-On Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enhance your solution with specialized services. Add these to any plan for comprehensive coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_addOns.map(_(addon, _index) => (_<motion.div
                key={addon.name}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{_addon.name}</h3>
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {_addon.price}
                  <span className="text-lg text-slate-600">{_addon.period}</span>
                </div>
                <p className="text-slate-600 mb-4">{_addon.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {_addon.features.map((feature) => (
                    <li key={feature} className="text-sm text-slate-600 flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Add Service
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another technology company. Here's what makes us different and worth your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-slate-600">World-class engineers and researchers with decades of combined experience.</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.1}}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600">Track record of successful implementations across diverse industries.</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
              <p className="text-slate-600">Bank-level security with SOC 2 compliance and quantum-resistant encryption.</p>
            </motion.div>

            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.3}}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Support</h3>
              <p className="text-slate-600">24/7 support across multiple time zones with local expertise.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {_/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {_faqs.map(_(faq, _index) => (
              <motion.div
                key={faq.question}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{_faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{_faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.6}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose the plan that fits your needs and start transforming your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </>
  );
}