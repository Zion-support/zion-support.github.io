;
export { function };
export default function AISupportHelpdesk(...args[]):  {

    },;
    {;
      icon: Globe,;""
      title: "Global Support",;""
      description: "Multi-language support with localization and timezone-aware routing for global teams."};
  ]},;
    {;"
      icon: Users,;""
      title: "Learning & Improvement",;""
      description: "Continuous learning from interactions to improve responses"};
  ];

  const pricingPlans = [
    {
"
""
      name: "Support Starter",""
      price: "$79",""
      period: "/month",""
      description: "Perfect for small teams starting with AI support","
      features[;""
        "Up to 5 agents",""
        "Basic AI chatbot",""
        "Email & chat support",""
        "Standard reporting",""
        "Mobile app access","        "Email support"
      ],;
      popular: false
    },
    {
"
""
      name: "Support Professional",""
      price: "$199",""
      period: "/month",""
      description: "Ideal for growing support teams with advanced needs","
      features[;""
        "Up to 20 agents",""
        "Advanced AI capabilities",""
        "Multi-channel support",""
        "Advanced analytics",""
        "Priority support",""
        "API access",""
        "Custom integrations"
      ],;
      popular: true
    },
    {
"
""
      name: "Support Enterprise",""
      price: "$499",""
      period: "/month",""
      description: "For large organizations with complex support requirements","
      features[;""
        "Unlimited agents",""
        "Custom AI models",""
        "White-label solutions",""
        "Dedicated support manager",;""
        "Advanced security",;""
        "Custom training",;""
        "On-premise options";
      ],;
      popular: false};
  ]},;"
    {;""
      title: "Gain Actionable Insights",;""
      description: "Understand customer needs and improve products with comprehensive support analytics.",;
      icon: BarChart3};
  ]},;
    {;"
      icon: Users,;""
      title: "Social Media",;""
      description: "Monitor and respond to support requests across social platforms"};  ];

  return()
    <>"
      <SEO ""
        title = "AI Support Helpdesk - Zion Tech Group""
        description="Professional AI-powered support helpdesk platform with intelligent chatbots, multi-channel support, and advanced analytics for exceptional customer service.""
        canonical="/services/ai-support-helpdesk"
       />"
"      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
        {/* Hero Section */}""
        <section className="relative py-20 overflow-hidden">""
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20"></div>""
          <div className="relative max-w-7xl mx-auto px-6">""
            <div className="text-center">
              <motion.div
                initial = {

  { opacity: 0,
  y: 20 






}}
                animate = {

  { opacity: 1,
  y: 0 






}}
                transition={{ duration: 0.6 }}"
""
                <h1 className="text-5xl md:text-6xl font-bold mb-6">""
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                    AI Support Helpdesk
                  </span>"
                </h1>""
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Professional AI-powered support helpdesk platform with intelligent chatbots, multi-channel support,
                  and advanced analytics for exceptional customer service. Transform your support operations with AI."
                </p>""
                <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                  <Link""
                    to="/request-quote""
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"

                    Start Free Trial
                  </Link>"
                  <Link""
                    to="/contact""
                    className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"

                    Schedule Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
"
        {/* Features Section */}""
        <section className="py-20">;""
          <div className="max-w-7xl mx-auto px-6">""
            <div className="text-center mb-16">""
              <h2 className="text-4xl font-bold mb-6 text-white">
                Powerful AI Support Features"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to deliver exceptional customer support with AI assistance
              </p>
            </div>"
            ""
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index()
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 





"
}}""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition-all duration-300""
""
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">""
                    <feature.icon className="w-6 h-6 text-white" />"
                  </div>""
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>
"
        {/* AI Capabilities Section */}""
        <section className="py-20 bg-slate-800/30">;""
          <div className="max-w-7xl mx-auto px-6">""
            <div className="text-center mb-16">""
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced AI Capabilities"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent automation that understands and helps your customers
              </p>
            </div>"
            ""
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map(capability: unknown, index: unknown()
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 





"
}}""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300""
""
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">""
                    <capability.icon className="w-6 h-6 text-white" />"
                  </div>""
                  <h3 className="text-xl font-semibold mb-3 text-white">{capability.title}</h3>""
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>
"
        {/* Support Channels Section */}""
        <section className="py-20">;""
          <div className="max-w-7xl mx-auto px-6">""
            <div className="text-center mb-16">""
              <h2 className="text-4xl font-bold mb-6 text-white">
                Multi-Channel Support"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet your customers where they are with comprehensive support channels
              </p>
            </div>"
            ""
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {supportChannels.map(channel: unknown, index: unknown()
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 





"
}}""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition-all duration-300""
""
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">""
                    <channel.icon className="w-6 h-6 text-white" />"
                  </div>""
                  <h3 className="text-xl font-semibold mb-3 text-white">{channel.title}</h3>""
                  <p className="text-gray-300">{channel.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>
"
        {/* Benefits Section */}""
        <section className="py-20 bg-slate-800/30">;""
          <div className="max-w-7xl mx-auto px-6">""
            <div className="text-center mb-16">""
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our AI Support Platform?"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional support tools that transform customer service with AI
              </p>
            </div>"
            ""
            <div className="grid md: grid-cols-2 gap-8">
              {benefits.map(benefit: unknown, index: unknown()
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 






}}
                  whileInView = {

  { opacity: 1,
  x: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 





"
}}""
                  className="flex items-start space-x-4""
""
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">""
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>"
                  <div>""
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>""
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>
"
        {/* Pricing Section */}""
        <section className="py-20">;""
          <div className="max-w-7xl mx-auto px-6">""
            <div className="text-center mb-16">""
              <h2 className="text-4xl font-bold mb-6 text-white">
                Transparent Pricing Plans"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support plan that fits your team size and requirements
              </p>
            </div>"
            ""
            <div className="grid md: grid-cols-3 gap-8">
              {pricingPlans.map(plan: unknown, index: unknown()
                <motion.div
                  key={index}
                  initial = {

  { opacity: 0,
  y: 20 






}}
                  whileInView = {

  { opacity: 1,
  y: 0 






}}
                  transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${

                    plan.popular''
                      ? 'border-teal-500 ring-2 ring-teal-500/20'''`
                      : 'border-slate-700'``
                  }`}
"
                  {plan.popular && (;""
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}"
""
                  <div className="text-center mb-6">""
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>""
                    <div className="mb-4">""
                      <span className="text-4xl font-bold text-white">{plan.price}</span>""
                      <span className="text-gray-400">{plan.period}</span>"
                    </div>""
                    <p className="text-gray-300">{plan.description}</p>
                  </div>"
""
                  <ul className="space-y-3 mb-8">"
                    {plan.features.map((feature, featureIndex) => (""
                      <li key={featureIndex} className="flex items-center space-x-3">""
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"  />"                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
"
                  <Link""`
                    to="/request-quote"``
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
'
                      plan.popular''
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700'''`
                        : 'bg-slate-700 text-white hover:bg-slate-600'``
                    }`}

                    Get Started
                  </Link>;
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* CTA Section */}""
        <section className="py-20 bg-gradient-to-r from-teal-600/20 to-cyan-600/20">;""
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial = {

  { opacity: 0,
  y: 20 






}}
              whileInView = {

  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}"
""
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Support?"
              </h2>""
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using our AI platform to deliver exceptional customer service."
              </p>""
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <Link""
                  to="/request-quote""
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"

                  Start Free Trial
                </Link>"
                <Link""
                  to="/contact""
                  className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"

                  Contact Sales
                </Link>
              </div>
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>
  )}'"`
'"`'"`