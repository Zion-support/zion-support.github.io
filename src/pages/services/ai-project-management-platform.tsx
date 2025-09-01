import React from 'react.ts';'
import { motion  } from 'framer-motion.ts';'
import { SEO  } from '@/components/SEO';      description: 'Streamline event coordination with AI-driven task management and vendor coordination',;
      icon: Calendar};
  ];

  return()
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO "
        title="AI Project Management Platform - Zion Tech Group""        description="Revolutionize your project management with AI-powered task prioritization, predictive analytics, and intelligent team collaboration. Start from $299/month."
       />

      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto text-center">
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
"
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">"
              <Brain className="w-4 h-4 mr-2" />              AI-Powered Project Management
            </div>
"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of"
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Project Management</span>
            </h1>
"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your project delivery with intelligent automation, predictive analytics, and AI-driven insights.
              Manage teams smarter, deliver faster, and achieve more with our cutting-edge platform.
            </p>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>"
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>;

      {/* Features Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto">
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
"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Advanced AI
            </h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to revolutionize how you manage projects
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
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

  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}"
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
"
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">"
                  <feature.icon className="w-6 h-6 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>"
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;"
        <div className="max-w-7xl mx-auto">
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
"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of teams already experiencing the benefits of AI-powered project management
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
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

  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}"
                className="text-center"
"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>"
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-7xl mx-auto">
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
"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform adapts to your specific needs, regardless of your industry or project type
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
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

  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}"
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">"
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>"
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;"
        <div className="max-w-7xl mx-auto">
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
"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
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

  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${

                  plan.popular'
                    ? 'border-purple-500 ring-2 ring-purple-500/20''
                    : 'border-gray-700'`
                }`}

                {plan.popular && (;"
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <p className="text-gray-300 mb-4">{plan.description}</p>"
                  <div className="flex items-baseline justify-center">"
                    <span className="text-4xl font-bold text-white">{plan.price}</span>"
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
"
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-start">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />"                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
`
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                  plan.popular'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700''
                    : 'bg-gray-700 text-white hover:bg-gray-600'`
                }`}>
                  Get Started
                </button>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-4xl mx-auto text-center">
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
"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already experiencing the future of project management
            </p>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>"
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Contact Sales
              </button>
            </div>
"
            <p className="text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime;
            </p>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}}}}}}'"`