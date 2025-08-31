import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CreditCard,
  Clock,
  Headphones,
  Rocket,
  Award,
  Lock,
  Brain,
  Heart,
  DollarSign,
  Truck,
  Atom
} from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups getting started with AI",
      features: [
        "AI Content Generation (500 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (10 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access",
        "Standard Security",
        "5 Team Members"
      ],
      popular: false,
      cta: "Get Started",
      link: "/contact",
      savings: null
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (2000 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (50 hours/month)",
        "AI Translation (25 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (5000 calls/month)",
        "Team Collaboration Tools",
        "Enhanced Security",
        "15 Team Members",
        "Custom Branding"
      ],
      popular: true,
      cta: "Get Started",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Business",
      price: "$599",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (10000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (50000 calls/month)",
        "Advanced Security Features",
        "Unlimited Team Members",
        "White-label Solutions"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 25% annually"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications",
        "Custom Training & Support"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact",
      savings: null
    }
  ];

  const addOns = [
    {
      name: "Additional AI Credits",
      price: "$0.10",
      description: "Per credit for AI content generation beyond your plan limit",
      icon: Zap
    },
    {
      name: "Premium Support",
      price: "$99",
      description: "Per month for dedicated support and faster response times",
      icon: Headphones
    },
    {
      name: "Custom Integrations",
      price: "$299",
      description: "Per integration for custom API connections and workflows",
      icon: Rocket
    },
    {
      name: "Advanced Security",
      price: "$199",
      description: "Per month for enhanced security features and compliance",
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "No Setup Fees",
      description: "Get started immediately with zero upfront costs"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Free Trial",
      description: "Try any plan free for 14 days, no credit card required"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Flexible Billing",
      description: "Monthly or annual billing with discounts for longer commitments"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI 
              features with no hidden fees or surprises.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Start with a free 14-day trial and upgrade or downgrade at any time. 
              Annual plans include significant savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-xl p-6 ${
                  tier.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {tier.savings && (
                  <div className="absolute -top-4 right-4">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/50">
                      {tier.savings}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{addon.price}</div>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Pricing?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We believe in fair, transparent pricing that grows with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about our pricing and billing
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
              },
              {
                question: "What happens after my free trial ends?",
                answer: "After your 14-day free trial, your account will automatically convert to the paid plan you selected. You can cancel anytime before the trial ends."
              },
              {
                question: "Do you offer discounts for nonprofits?",
                answer: "Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for more information about nonprofit discounts."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice."
              },
              {
                question: "Is there a setup fee or hidden costs?",
                answer: "No setup fees or hidden costs. What you see is what you pay. The only additional charges are for add-on services you choose to purchase."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your needs and get a custom quote for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Email Sales
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Get personalized pricing • Custom solutions • Expert consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Revolutionary Services 2030
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover our cutting-edge micro SAAS solutions that combine advanced AI, 
            quantum computing, and innovative technology to transform your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Brain,
                title: "AI Business Intelligence",
                description: "Advanced analytics and predictive insights",
                price: "From $2,999"
              },
              {
                icon: Shield,
                title: "AI Cybersecurity",
                description: "Zero-trust security with AI threat detection",
                price: "From $3,999"
              },
              {
                icon: Heart,
                title: "AI Healthcare Analytics",
                description: "Patient care and diagnostic support",
                price: "From $4,999"
              },
              {
                icon: DollarSign,
                title: "AI Financial Trading",
                description: "Algorithmic trading and risk management",
                price: "From $5,999"
              },
              {
                icon: Truck,
                title: "AI Supply Chain",
                description: "Optimization and demand forecasting",
                price: "From $3,499"
              },
              {
                icon: Atom,
                title: "Quantum AI Platform",
                description: "Next-generation quantum computing",
                price: "From $7,999"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/innovative-services-showcase-2030"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center gap-2">
                Explore All Revolutionary Services
                <Rocket className="w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;