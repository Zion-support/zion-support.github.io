import React from 'react.ts';'
import { motion  } from 'framer-motion.ts';  ];

  return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}"
      <section className="relative pt-32 pb-20 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20"></div>"
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            animate = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >"
            <div className="flex items-center justify-center mb-6">"
              <Truck className="w-12 h-12 text-blue-400 mr-3" />"              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                AI Autonomous Supply Chain
              </h1>
            </div>"
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered automation. Optimize operations, reduce costs, 
              and gain unprecedented visibility across your entire network.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Optimize Supply Chain"
                <ArrowRight className="ml-2 w-5 h-5" />              </a>
              <a"
                href="#demo""
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Intelligent Supply Chain Solutions
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides comprehensive supply chain management with predictive analytics, 
              autonomous optimization, and real-time visibility.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index (
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

  { duration: 0.6,
  delay: index * 0.1 






}}
                viewport={{ once: true }}"
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>"
                  <feature.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>"
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique challenges of various industries.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
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

  { duration: 0.6,
  delay: index * 0.1 






}}
                viewport={{ once: true }}"
                className="text-center"
              >`
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>"
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>"
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Results & Benefits
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform has delivered exceptional results for companies across industries.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
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

  { duration: 0.6,
  delay: index * 0.1 






}}
                viewport={{ once: true }}"
                className="text-center"
              >"
                <div className="text-4xl font-bold text-blue-400 mb-4">{benefit.metric}</div>"
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>"
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Competitive Pricing Plans
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your supply chain needs and budget.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 lg: anygrid-cols-3 gap-8">
            {pricingPlans.map(plan: unknown, index: unknown (
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

  { duration: 0.6,
  delay: index * 0.1 






}}
                viewport={{ once: true }}`
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border-2 ${

                  plan.popular '
                    ? 'border-blue-400 shadow-2xl shadow-blue-500/20' '
                    : 'border-slate-600'`
                }`}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                "
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <div className="flex items-baseline justify-center">"
                    <span className="text-5xl font-bold text-blue-400">{plan.price}</span>"
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>"
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
"
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a"
                  href="/contact"`
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular'
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600''
                      : 'bg-slate-600 text-white hover:bg-slate-500'`
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {

  { opacity: 0,
  y: 20 






}}
            whileInView = {

  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI platform.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial"
                <ArrowRight className="ml-2 w-5 h-5" />              </a>
              <a"
                href="tel:+13024640950""
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >"
                <Phone className="mr-2 w-5 h-5" />                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}"
      <section className="py-16 bg-slate-800">"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h3 className="text-2xl font-bold text-white mb-8">Contact Zion Tech Group</h3>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            <div className="flex flex-col items-center">"
              <Phone className="w-8 h-8 text-blue-400 mb-4" />"
              <p className="text-gray-300">Phone</p>"
              <a href="tel:+13024640950" className="text-white hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>"
            <div className="flex flex-col items-center">"
              <Mail className="w-8 h-8 text-blue-400 mb-4" />"
              <p className="text-gray-300">Email</p>"
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>"
            <div className="flex flex-col items-center">"
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />"
              <p className="text-gray-300">Address</p>;"              <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  )};

export default AIAutonomousSupplyChain;'"`