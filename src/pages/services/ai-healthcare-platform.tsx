export default function AIHealthcarePlatform(function AIHealthcarePlatform(function AIHealthcarePlatform() {): any {): any {}
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}"""
      <section className="relative overflow-hidden py-20 lg:py-32">"""
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20"></div>"""
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"""
            className="text-center max-w-4xl mx-auto"""
          >"""
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-red-400 text-sm font-medium mb-6">"""
              <Heart className="w-4 h-4"  />
              Healthcare AI Platform;
            </div>"""
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare"""
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Platform;
              </span>
            </h1>"""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with our comprehensive AI platform. From diagnostics to patient care, 
              our intelligent solutions enhance medical outcomes while ensuring security and compliance.
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"""
                to="/request-quote""""
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"""
              >
                Get Started"""
                <ArrowRight className="w-5 h-5"  />
              </Link>
              <Link"""
                to="/schedule-demo""""
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"""
              >
                Schedule Demo;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}"""
      <section className="py-20 bg-slate-800/50">"""
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"""
            className="text-center mb-16"""
          >"""
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Features;
            </h2>"""
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with healthcare expertise to deliver;
              intelligent solutions that improve patient care and operational efficiency.
            </p>
          </motion.div>
"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}"""
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-red-500/50 transition-all duration-300 group"""
              >"""
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">"""
                  <feature.icon className="w-6 h-6 text-white" />
                </div>"""
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"""
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"""
      <section className="py-20">"""
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">"""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div;
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >"""
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Healthcare Operations;
              </h2>"""
              <p className="text-lg text-gray-400 mb-8">
                Our AI healthcare platform delivers measurable improvements in patient care, 
                operational efficiency, and clinical outcomes while maintaining the highest;
                standards of security and compliance.
              </p>"""
              <ul className="space-y-4">
                {benefits.map((benefit, index) => ("""
                  <li key={index} className="flex items-start gap-3">"""
                    <CheckCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0"  />"""
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div;
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}"""
              className="relative"""
            >"""
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl p-8 border border-red-500/30">"""
                <div className="grid grid-cols-2 gap-6">"""
                  <div className="text-center">"""
                    <div className="text-3xl font-bold text-red-400 mb-2">40%</div>"""
                    <div className="text-sm text-gray-400">Reduction in diagnostic errors</div>
                  </div>"""
                  <div className="text-center">"""
                    <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>"""
                    <div className="text-sm text-gray-400">Faster patient processing</div>
                  </div>"""
                  <div className="text-center">"""
                    <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>"""
                    <div className="text-sm text-gray-400">Improvement in care coordination</div>
                  </div>"""
                  <div className="text-center">"""
                    <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>"""
                    <div className="text-sm text-gray-400">Uptime guarantee</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"""
      <section className="py-20 bg-slate-800/50">"""
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"""
            className="text-center mb-16"""
          >"""
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Healthcare Use Cases;
            </h2>"""
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform addresses the most critical challenges in modern healthcare, 
              providing comprehensive solutions for various medical environments.
            </p>
          </motion.div>
"""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}"""
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-red-500/50 transition-all duration-300"""
              >"""
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>"""
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <Link"""
                  to="/request-quote""""
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"""
                >
                  Learn More"""
                  <ArrowRight className="w-4 h-4"  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"""
      <section className="py-20">"""
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"""
            className="bg-gradient-to-r from-red-900/50 to-pink-900/50 rounded-3xl p-12 text-center border border-red-500/30"""
          >"""
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>"""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading healthcare organizations that are already using our AI platform;
              to improve patient outcomes and operational efficiency.
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"""
                to="/request-quote""""
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"""
              >
                Get Your Quote"""
                <ArrowRight className="w-5 h-5"  />
              </Link>
              <Link"""
                to="/schedule-demo""""
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"""
              >
                Schedule Demo;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}'"""