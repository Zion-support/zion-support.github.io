import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp, Shield, Globe, Rocket } from 'lucide-react';

export default function MicroSAASSolutions() {
  const solutions = [
    {

      name: 'AI Content Marketing Automation',
      description:'
        'Automate content creation, optimization, and distribution with AI-powered insights',
      features: ['
        'Content Generation',SEO Optimization',Social Media Automation',Performance Analytics',
      ],
      icon: Zap,
      category: 'Marketing'},
    {

      name: 'AI Supply Chain Optimization',
      description:'
        'Optimize supply chain operations with predictive analytics and real-time monitoring',
      features: ['
        'Demand Forecasting',Inventory Management',Route Optimization',Risk Assessment',
      ],
      icon: TrendingUp,
      category: 'Operations'},
    {

      name: 'AI HR Platform',
      description:'
        'Streamline HR processes with intelligent automation and data-driven insights',
      features: ['
        'Recruitment Automation',Performance Management',Employee Engagement',Compliance Tracking',
      ],
      icon: Users,
      category: 'Human Resources'},
    {

      name: 'AI Legal Research Platform',
      description:'
        'Accelerate legal research with AI-powered document analysis and case law insights',
      features: ['
        'Document Analysis',Case Law Research',Legal Precedents',Compliance Checking',
      ],
      icon: Shield,
      category: 'Legal'},
    {

      name: 'AI Education Platform',
      description:'
        'Personalize learning experiences with adaptive AI and intelligent tutoring',
      features: ['
        'Adaptive Learning',Progress Tracking',Content Personalization',Assessment Automation',
      ],
      icon: Globe,
      category: 'Education'},
    {

      name: 'AI Project Management Platform',
      description:'
        'Enhance project delivery with intelligent planning, monitoring, and optimization',
      features: ['
        'Smart Planning',Resource Optimization',Risk Management',Performance Analytics',
      ],
      icon: Rocket,
      category: 'Project Management'},
  ];

  return()
    <div className="min-h-screen bg-slate-900 text-white pt-20">"
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          className="text-center mb-16"
        >"
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Micro SaaS Solutions
          </h1>"
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Scalable, focused software solutions designed to solve specific
            business challenges with transparent pricing and rapid deployment.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {solutions.map((solution, index 
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}"
              className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors group"
            >"
              <div className="flex items-center space-x-4 mb-4">"
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">"
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>"
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {solution.category}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link
                    to={service.link}
                    className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for rapid deployment and immediate impact on your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Get up and running in hours, not months. Our solutions are designed for immediate implementation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise costs. Clear, predictable pricing that scales with your business.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
"
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {solution.name}
              </h3>
"
              <p className="text-slate-300 mb-4 text-sm">
                {solution.description}
              </p>
"
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}"
                    className="flex items-center space-x-2 text-sm"
                  >"
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>"
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
"
              <button className="w-full mt-6 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}"
          className="text-center"
        >"
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">"
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our micro SaaS solutions are designed for rapid deployment and
              immediate impact. Get started with a free consultation and see how
              we can help.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                Get Free Consultation
              </button>"
              <button className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'"