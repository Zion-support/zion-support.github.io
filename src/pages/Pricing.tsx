import {}
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  ArrowRight,
  Users,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  Calendar''''
} from 'lucide-react';
'
      popular: false,''
      icon: Rocket,;'''
      color: 'from-orange-500 to-red-500'}
  ];

  '
''
  const savings: any = billingCycle === 'annual' ? 20 : 0;interface PricingTier {}
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: string;
  icon: unknown;
  cta: string;
  ctaLink: string}
;
const pricingTiers: PricingTier[] = []
  {}
'
''
'''
    name: 'Starter','''
    description: 'Perfect for small businesses and startups','''
    price: '$299','''
    period: '/month','''
    features: [''''
      'AI-powered business intelligence dashboard',Basic cloud infrastructure setup',Security monitoring & alerts',Email support',Monthly performance reports',Up to 5 team members',Basic API access',Standard compliance features',AI Workflow Orchestrator (Basic),AI Data Governance (Foundation)''
    ],'''
    color: 'from-blue-500 to-cyan-500',''
    icon: Zap,'''
    cta: 'Get Started','''
    ctaLink: '/contact'
  },
  {}
'
''
'''
    name: 'Professional','''
    description: 'Ideal for growing businesses and teams','''
    price: '$799','''
    period: '/month',''
    popular: true,'''
    features: [''''
      'Everything in Starter, plus:',Advanced AI workflow automation',Custom cloud architecture design',Advanced cybersecurity features',Priority support (4-hour response),Up to 25 team members',Custom integrations',Advanced analytics & reporting',Compliance automation tools',Monthly strategy sessions',AI Workflow Orchestrator (Professional),AI Data Governance (Enterprise),AI Customer Experience Analytics (Professional)''
    ],'''
    color: 'from-zion-cyan to-zion-purple',''
    icon: Brain,'''
    cta: 'Start Free Trial','''
    ctaLink: '/contact'
  },
  {}
'
''
'''
    name: 'Enterprise','''
    description: 'For large organizations with complex needs','''
    price: 'Custom','''
    period: '','''
    features: [''''
      'Everything in Professional, plus:',Custom AI model development',Multi-cloud architecture',Advanced threat intelligence',24/7 dedicated support',Unlimited team members',Custom software development',Advanced data governance',Compliance certification support',Quarterly business reviews',Dedicated success manager'''
    ],'''
    color: 'from-purple-500 to-pink-500',''
    icon: Building,'''
    cta: 'Contact Sales','''
    ctaLink: '/contact'
  }
];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"""
      <SEO "'"""
        title="Pricing - Zion Tech Group"'"        description="Transparent pricing for Zion Tech Group's AI, cloud, and technology services. Choose the plan that fits your business needs."""
        />
      """
      {/* Hero Section */}""""
      <section className="relative py-20 overflow-hidden">""""
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>""""
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center""""
          >""""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">""""
              Simple, <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing"""
            </h1>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features;
              with flexible options to scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>
"""
      {/* Billing Toggle */}""""
      <section className="py-8">""""
        <div className="container mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="flex justify-center""""
          >""""
            <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-600/50">'
              <button''
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${}
'
                  billingCycle === 'monthly'''
                    ? 'bg-cyan-400 text-white'''`
                    : 'text-gray-300 hover:text-white'``
                }`}
              >
                Monthly;
              </button>'
              <button''`
                onClick={() => setBillingCycle('annual')}``
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${}
'
                  billingCycle === 'annual'''
                    ? 'bg-cyan-400 text-white'''`
                    : 'text-white'``
                }`}
              >'
                Annual''"""
                {billingCycle === 'annual' && (""""
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save {savings}%
                  </span>
                )}"""
              </button>""""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"""
      {/* Header */}""""
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.6 }}""""
            className="text-center""""
          >""""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Pricing & Plans"""
            </h1>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core features with flexible scaling options."""
            </p>""""
            <div className="flex flex-wrap justify-center gap-4">"""
              <Link""""
                to="/contact""""
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"""
              >
                Get Custom Quote;
              </Link>"""
              <Link""""
                to="/services""""
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"""
              >
                View All Services;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
"""
      {/* Pricing Tiers */}""""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.6, delay: 0.2 }}""""
          className="text-center mb-16""""
        >""""
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>""""
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with what you need and scale as you grow. All plans include our core features.
          </p>
        </motion.div>"""
""""
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div;
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}'`
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}'`'`
              className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >"""
              {tier.popular && (""""
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""""
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular;
                  </div>"""
""""
                  <ul className="space-y-3 mb-8">"""
                    {plan.features.map((feature, featureIndex) => (""""
                      <li key={featureIndex} className="flex items-center text-gray-300">""""
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0"  />                        {feature}
                      </li>) ) }
                  </ul>

                  <button`
                    onClick={() => setSelectedPlan(plan.name)}``
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${}
'
''
'''`
                      plan.popular'''`'`
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'''`'`'`
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'````
                    } hover:scale-105`}
                  >
                    Get Started;
                  </button>
                </div>"""
      {/* Service Packages */}""""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">""""
        <div className="container mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-16""""
          >""""
            <h2 className="text-4xl font-bold text-white mb-4">Custom Service Packages</h2>""""
            <p className="text-xl text-gray-300">
              Need something specific? We offer custom solutions tailored to your business requirements.
            </p>
          </motion.div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div;
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.8, delay: index * 0.1 }}""""
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105""""
              >""""
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4">""""
                  <pkg.icon className="w-6 h-6 text-cyan-400" />
                </div>"""
""""
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>""""
                <p className="text-gray-300 mb-4">{pkg.description}</p>"""
""""
                <div className="flex items-center justify-between mb-4">""""
                  <span className="text-2xl font-bold text-cyan-400">{pkg.price}</span>""""
                  <span className="text-gray-400 text-sm">{pkg.duration}</span>
                </div>"""
""""
                <ul className="space-y-2 mb-6">"""
                  {pkg.features.map((feature, featureIndex) => (""""
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">""""
                      <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"  />                      {feature}
                    </li>) ) }
                </ul>
"""
                <Link""""
                  to="/contact""""
                  className="inline-flex items-center w-full justify-center py-2 px-4 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"""
                >"""
                  Get Quote""""
                  <ArrowRight className="w-4 h-4 ml-2"  />                </Link>
              </motion.div>) ) }
          </div>
        </div>
      </section>
"""
      {/* Add-ons */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-16""""
          >""""
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>""""
            <p className="text-xl text-gray-300">
              Enhance your experience with these optional add-ons;
            </p>
          </motion.div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div;
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.8, delay: index * 0.1 }}""""
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105""""
              >""""
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg mb-4">""""
                  <addon.icon className="w-6 h-6 text-cyan-400" />
                </div>"""
""""
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>""""
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>""""
                <div className="text-2xl font-bold text-cyan-400">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
"""
      {/* FAQ Section */}""""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">""""
        <div className="container mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-16""""
          >""""
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>""""
            <p className="text-xl text-gray-300">Get answers to common pricing questions</p>
          </motion.div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[]
              {}
"""
""""
                question: "Can I change my plan at any time?","'"""
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."""
              },
              {}
"""
""""
                question: "What payment methods do you accept?",""""
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe."""
              },
              {}
"""
""""
                question: "Is there a setup fee?",""""
                answer: "No setup fees for our subscription plans. Custom service packages may have one-time setup costs depending on complexity."""
              },
              {}
"""
""""
                question: "Do you offer discounts for nonprofits?",""""
                answer: "Yes, we offer special pricing for qualified nonprofit organizations. Contact us for more details about our nonprofit discount program."""
              }
            ].map((faq, index) => (<motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.8, delay: index * 0.1 }}""""
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50""""
              >""""
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>""""
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
              )}`
              ``
              <div className={`p-8 bg-white/5 backdrop-blur-sm rounded-2xl border ${}
'
                tier.popular ''
                  ? 'border-zion-cyan/40 ring-2 ring-zion-cyan/20' ''`
                  : 'border-zion-cyan/20'``
              } hover:border-zion-cyan/40 transition-all duration-300 h-full`}>`"`
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>""""
                  <tier.icon className="w-8 h-8 text-white" />
                </div>"""
                """"
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>""""
                <p className="text-gray-400 mb-6">{tier.description}</p>"""
                """"
                <div className="mb-8">""""
                  <div className="flex items-baseline justify-center">""""
                    <span className="text-4xl font-bold text-white">{tier.price}</span>""""
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>"""
                """"
                <ul className="space-y-4 mb-8">"""
                  {tier.features.map((feature, featureIndex) => (""""
                    <li key={featureIndex} className="flex items-start gap-3">""""
                      <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0"  />"                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link`
                  to={tier.ctaLink}``
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${}
'
                    tier.popular''
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/80 hover:to-zion-purple/80'''`
                      : 'bg-white/10 text-white hover:bg-white/20 border border-zion-cyan/20'``
                  }`}
                >"""
                  {tier.cta}""""
                  <ArrowRight className="w-4 h-4"  />                </Link>
              </div>
            </motion.div>) ) }
        </div>

        {/* Service Pricing */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.6, delay: 0.6 }}""""
          className="text-center mb-16""""
        >""""
          <h2 className="text-3xl font-bold text-white mb-4">Individual Service Pricing</h2>""""
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need just one specific service? Check out our individual service pricing below.
          </p>
        </motion.div>"""
""""
        <div className="space-y-12">
          {servicePricing.map((category, categoryIndex) => (
            <motion.div;
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}"""
            >""""
              <div className="flex items-center mb-8">""""
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">""""
                  <category.icon className="w-6 h-6 text-white" />"""
                </div>""""
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>"""
              """"
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.div;
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 + serviceIndex * 0.05 }}"""
                  >""""
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">""""
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>""""
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>""""
                      <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>'`
                      <Link'`'"`
                        to={`/services/${service.name.toLowerCase().replace(/\s+/g,-')}`}""""
                        className="w-full py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium text-center block"""
                      >
                        Learn More;
                      </Link>
                    </div>
                  </motion.div>) ) }
              </div>
            </motion.div>) ) }
        </div>
      </section>

        {/* Additional Information */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.6, delay: 1.0 }}""""
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3""""
        >""""
          <div className="text-center p-6">""""
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">""""
              <Clock className="w-8 h-8 text-white"  />"""
            </div>""""
            <h3 className="text-xl font-bold text-white mb-2">30-Day Free Trial</h3>""""
            <p className="text-gray-400">Try our Professional plan free for 30 days with no commitment.</p>
          </div>"""
          """"
          <div className="text-center p-6">""""
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">""""
              <Globe className="w-8 h-8 text-white"  />"""
            </div>""""
            <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>""""
            <p className="text-gray-400">24/7 support available across all time zones for Enterprise customers.</p>
          </div>"""
          """"
          <div className="text-center p-6">""""
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">""""
              <Lock className="w-8 h-8 text-white"  />"""
            </div>""""
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>"            <p className="text-gray-400">Bank-level security with SOC 2, ISO 27001, and GDPR compliance.</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.6, delay: 1.2 }}""""
          className="mt-20 text-center""""
        >""""
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">""""
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>""""
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can create a custom plan tailored to your specific business needs and budget."""
            </p>""""
            <div className="flex flex-wrap justify-center gap-4">"""
              <Link""""
                to="/contact""""
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold"""
              >
                Get Custom Quote;
              </Link>"""
              <Link""""
                to="/case-studies""""
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold"""
              >
                View Case Studies;
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Individual Service Pricing Section */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}"""
          transition={{ duration: 0.6, delay: 1.4 }}""""
          className="mt-20""""
        >""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Individual Service Pricing"""
            </h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose specific AI services that fit your business needs. All services include our core AI optimization features.
            </p>
          </div>"""
""""
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI Workflow Orchestrator */}
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"""
              transition={{ duration: 0.8, delay: 0.1 }}""""
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300""""
            >""""
              <div className="text-center mb-6">""""
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit mx-auto mb-4">""""
                  <Workflow className="w-8 h-8 text-white"  />"""
                </div>""""
                <h3 className="text-2xl font-bold text-white mb-2">AI Workflow Orchestrator</h3>""""
                <p className="text-gray-400 mb-4">Intelligent workflow automation platform</p>""""
                <div className="flex items-baseline justify-center">""""
                  <span className="text-3xl font-bold text-white">$299</span>""""
                  <span className="text-gray-400 ml-1">/month</span>
                </div>"""
              </div>""""
              <ul className="space-y-3 mb-6">""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Up to 10 workflows"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Basic AI optimization"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Standard integrations"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />                  Email support;
                </li>
              </ul>"""
              <Link""""
                to="/services/ai-workflow-orchestrator""""
                className="w-full text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"""
              >
                Learn More;
              </Link>
            </motion.div>

            {/* AI Data Governance Platform */}
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"""
              transition={{ duration: 0.8, delay: 0.2 }}""""
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all duration-300""""
            >""""
              <div className="text-center mb-6">""""
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-fit mx-auto mb-4">""""
                  <Shield className="w-8 h-8 text-white"  />"""
                </div>""""
                <h3 className="text-2xl font-bold text-white mb-2">AI Data Governance Platform</h3>""""
                <p className="text-gray-400 mb-4">Intelligent data protection & compliance</p>""""
                <div className="flex items-baseline justify-center">""""
                  <span className="text-3xl font-bold text-white">$399</span>""""
                  <span className="text-gray-400 ml-1">/month</span>
                </div>"""
              </div>""""
              <ul className="space-y-3 mb-6">""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Up to 10 data sources"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Basic AI discovery"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  GDPR & CCPA compliance"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />                  Standard access control;
                </li>
              </ul>"""
              <Link""""
                to="/services/ai-data-governance-platform""""
                className="w-full text-center py-3 px-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"""
              >
                Learn More;
              </Link>
            </motion.div>

            {/* AI Customer Experience Analytics */}
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"""
              transition={{ duration: 0.8, delay: 0.3 }}""""
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300""""
            >""""
              <div className="text-center mb-6">""""
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">""""
                  <Users className="w-8 h-8 text-white"  />"""
                </div>""""
                <h3 className="text-2xl font-bold text-white mb-2">AI Customer Experience Analytics</h3>""""
                <p className="text-gray-400 mb-4">Customer insights & analytics platform</p>""""
                <div className="flex items-baseline justify-center">""""
                  <span className="text-3xl font-bold text-white">$199</span>""""
                  <span className="text-gray-400 ml-1">/month</span>
                </div>"""
              </div>""""
              <ul className="space-y-3 mb-6">""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Up to 10K interactions/month"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Basic sentiment analysis"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                  Standard reporting"""
                </li>""""
                <li className="flex items-center text-gray-300">""""
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />                  Email support;
                </li>
              </ul>"""
              <Link""""
                to="/services/ai-customer-experience-analytics""""
                className="w-full text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"""
              >
                Learn More;
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>'"`
    </div>) }'"`'"`
export default Pricing;'"`'"`'"`
'"`'"`'"`
'"`'"`
