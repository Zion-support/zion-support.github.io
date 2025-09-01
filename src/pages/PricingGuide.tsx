      ],;
      notIncluded[;""
        "Advanced Analytics",""
        "Custom AI Models",""
        "Priority Support",""
        "API Access""
      ],;""
      cta: "Get Started",
      popular: false
    },
    {
"
""
      name: "Professional","
      icon: Brain,""
      description: "Ideal for growing companies with advanced needs",
      price: { monthly: 799, yearly: 7990 },"
      features[;""
        "Everything in Starter",""
        "Advanced AI Analytics",""
        "Custom AI Model Training",""
        "Cloud Infrastructure (100GB)",""
        "Priority Support (Phone + Email)",""
        "API Access",""
        "10 User Licenses",""
        "Quarterly Strategy Sessions"
      ],;"
      notIncluded[;""
        "Enterprise Security",""
        "Custom Development",""
        "Dedicated Account Manager""
      ],;""
      cta: "Start Free Trial",
      popular: true
    },
    {
"
""
      name: "Enterprise","
      icon: Rocket,""
      description: "Full-scale solutions for large organizations",
      price: { monthly: 2499, yearly: 24990 },"
      features[;""
        "Everything in Professional",""
        "Enterprise Security Suite",""
        "Custom Development",""
        "Dedicated Account Manager",""
        "24/7 Premium Support",""
        "Unlimited Cloud Storage",""
        "Unlimited User Licenses",""
        "Monthly Strategy Sessions",""
        "Custom Integration",""
        "SLA Guarantees"
    };
      ],;"
      notIncluded: [],;""
      cta: "Contact Sales",;
      popular: false;
    };
  ];

  const servicePricing = [
    {
"
""
      category: "AI & Machine Learning",
      icon: Brain,"
      services[;""
        { name: "AI Business Intelligence", price: "From $299/month", description: "Advanced analytics and insights" },""
        { name: "AI Sales Copilot", price: "From $199/month", description: "Intelligent sales automation" },""
        { name: "AI Compliance Assistant", price: "From $399/month", description: "Automated compliance management" },"        { name: "LLM Content Studio", price: "From $149/month", description: "AI-powered content creation" }
      ]
    },;
    {
"
""
      category: "Cloud & DevOps",
      icon: Cloud,"
      services[;""
        { name: "Cloud DevOps", price: "From $599/month", description: "End-to-end cloud solutions" },""
        { name: "Cloud FinOps Optimizer", price: "From $299/month", description: "Cost optimization strategies" },""
        { name: "FinOps Advisor", price: "From $499/month", description: "Financial operations consulting" }
      ]
    },;
    {
"
""
      category: "Cybersecurity",
      icon: Shield,"
      services[;""
        { name: "AI Compliance Copilot", price: "From $399/month", description: "AI-powered security compliance" },""
        { name: "Zero Trust Architecture", price: "From $799/month", description: "Modern security framework" },""
        { name: "Incident Response Platform", price: "From $599/month", description: "Rapid threat response" }
      ]
    },;
    {
"
""
      category: "IT Infrastructure",
      icon: Cpu,"
      services[;""
        { name: "IT Infrastructure Management", price: "From $699/month", description: "Enterprise infrastructure management" },;""
        { name: "Digital Twin", price: "From $899/month", description: "Virtual infrastructure modeling" },;""
        { name: "IT Consulting", price: "From $299/hour", description: "Strategic IT guidance" },;""
        { name: "Onsite Support", price: "From $199/hour", description: "Local technical assistance" };
      ]};
  ];"
""
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <SEO ""
        title="Pricing Guide - Zion Tech Group""        description="Comprehensive pricing information for AI, cloud, cybersecurity, and emerging technology services. Transparent pricing with flexible plans for all business sizes."
       />
"
      {/* Hero Section */}""
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center">""
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">""
              <Calculator className="h-10 w-10 text-white"  />"
            </div>"            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pricing Guide"
            </h1>""
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for cutting-edge technology solutions.
              Choose the plan that fits your business needs and scale as you grow.
            </p>
"
            {/* Currency and Billing Toggle */}""
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">""
              <div className="flex items-center space-x-4">""
                <span className="text-slate-300">Currency:</span>
                <select
                  value={selectedCurrency}"
                  onChange={(e) => setSelectedCurrency(e.target.value)}""
                  className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400""
""
                  <option value="USD">USD ($)</option>""
                  <option value="EUR">EUR (€)</option>""
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>"
""
              <div className="flex items-center space-x-4">""
                <span className="text-slate-300">Billing:</span>""
                <div className="flex bg-slate-700 rounded-lg p-1">
                  <button''
                    onClick={() => setSelectedPeriod('monthly')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
'
                      selectedPeriod === 'monthly'''
                        ? 'bg-cyan-500 text-white'''`
                        : 'text-slate-300 hover:text-white'``
                    }`}

                    Monthly
                  </button>'
                  <button''`
                    onClick={() => setSelectedPeriod('yearly')}``
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
'
                      selectedPeriod === 'yearly'''
                        ? 'bg-cyan-500 text-white'''`
                        : 'text-slate-300 hover:text-white'``
                    }`}

                    Yearly"
                    {savings > 0 && (;""
                      <span className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                        Save {savings}%
                      </span>) }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
"
        {/* Background Elements */}""
        <div className="absolute inset-0 -z-10">;""
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />""
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />""
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>
"
      {/* Pricing Plans */}""
      <section className="py-16 px-4 sm:px-6 lg:px-8">;""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center mb-16">""
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>""
            <p className="text-xl text-slate-300">Flexible pricing options designed to scale with your business</p>
          </div>"
          ""
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">`
            {pricingPlans.map((plan, index)  => (``
              <div key={index} className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
'
                plan.popular''
                  ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20'''`
                  : 'border-slate-700/50'``
              }`}>"
                {plan.popular && (""
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}"
""
                <div className="text-center mb-8">""
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">""
                    <plan.icon className="h-8 w-8 text-white" />"
                  </div>""
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                  <p className="text-slate-400 mb-6">{plan.description}</p>"
""
                  <div className="mb-6">""
                    <div className="text-4xl font-bold text-white">"
                      {calculatePrice(plan.price[selectedPeriod as keyof typeof plan.price])}""
                      <span className="text-lg text-slate-400 font-normal">'
                        /{selectedPeriod === 'monthly' ? 'month' : 'year'}
                      </span>"
                      <span className="text-slate-400">{tier.period}</span>
                    </div>
                  </div>
"
                  <Link""`
                    to={plan.cta === "Contact Sales" ? "/contact" : "/request-quote"}``
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
'
                      plan.popular''
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'''`
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'``
                    }`}
                  >
                    {tier.cta}"
                    <ArrowRight className="w-4 h-4"  />
                  </Link>
                </div>"
"'"
                <div className="space-y-4">'"'"
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included: any</h4>"
                  {plan.features.map((feature, featureIndex)  => (""
                    <div key={featureIndex} className="flex items-center text-slate-300">""
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />"                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.length > 0 && ("
                    <>""
                      <h4 className="text-lg font-semibold text-white mb-4 mt-6">Not Included: any</h4>"
                      {plan.notIncluded.map((feature, featureIndex)  => (""
                        <div key={featureIndex} className="flex items-center text-slate-500">""
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0"  />"                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>;) ) }
          </div>
        </div>
      </section>
"
      {/* Service-Specific Pricing */}""
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center mb-16">""
            <h2 className="text-3xl font-bold text-white mb-4">Service-Specific Pricing</h2>""
            <p className="text-xl text-slate-300">Detailed pricing for individual services and solutions</p>
          </div>"
          ""
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">"
            {servicePricing.map((category, index)  => (""
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">""
                <div className="flex items-center mb-6">""
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">""
                    <category.icon className="h-8 w-8 text-white" />"
                  </div>""
                  <h3 className="text-2xl font-bold text-white ml-4">{category.category}</h3>
                </div>"
""
                <div className="space-y-4">"
                  {category.services.map((service, serviceIndex) => (""
                    <div key={serviceIndex} className="p-4 bg-slate-700/30 rounded-lg">""
                      <div className="flex items-center justify-between mb-2">""
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>""
                        <span className="text-cyan-400 font-semibold">{service.price}</span>"
                      </div>""
                      <p className="text-slate-400 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>"
                <div className="text-cyan-400 font-semibold mb-3">{service.price}</div>"
                <p className="text-sm text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}"
      <section className="py-16 px-4">"
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="text-center mb-12"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>"
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>
          "
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">"
            <div className="space-y-6">"
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">"
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h3>"
                <p className="text-slate-300">Yes, we provide custom pricing for enterprise clients and specialized requirements. Contact our sales team for a personalized quote.</p>
              </div>
              "
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">"
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan later?</h3>"
                <p className="text-slate-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              "
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">'"
                <h3 className="text-lg font-semibold text-white mb-3">What's included in support?</h3>"
                <p className="text-slate-300">All plans include 24/7 technical support, regular updates, and maintenance. Enterprise plans include dedicated support teams.</p>
              </div>
            </div>
            "
            <div className="space-y-6">"
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">"
                <h3 className="text-lg font-semibold text-white mb-3">Are there setup fees?</h3>"
                <p className="text-slate-300">Setup fees vary by service complexity. Simple implementations may have no setup fee, while complex solutions may include one-time setup costs.</p>
              </div>
              "
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">"
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts?</h3>"
                <p className="text-slate-300">We offer volume discounts for enterprise clients and annual payment discounts. Contact us to learn about available discounts.</p>
              </div>
              "
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">"
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>"
                <p className="text-slate-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
"
      {/* CTA Section */}""
      <section className="py-16 px-4 sm:px-6 lg:px-8">;""
        <div className="max-w-4xl mx-auto text-center">""
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">""
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?"
            </h2>""
            <p className="text-xl text-slate-300 mb-8">
              Our team can create a tailored package that perfectly fits your business requirements and budget."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200""
""
                <MessageCircle className="w-5 h-5 mr-2"  />
                Get Custom Quote
              </Link>"
              <Link""
                to="/services-overview""
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200""
""
                <BarChart3 className="w-5 h-5 mr-2" />                View All Services
              </Link>
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;) }'"`
'"`'"`
