      {/* Hero Section */}""
      <section className="py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
          >""
            <h1 className="text-4xl md:text-6xl font-bold mb-6">"
              Case""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}
                Studies
              </span>"
            </h1>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-world examples of how our technology solutions have
              transformed businesses across different industries
            </p>
          </motion.div>
        </div>
      </section>
"
      {/* Industry Filter */}""
      <section className="py-12 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
'
                  selectedIndustry === industry''
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'''`
                    : 'bg-white/10 text-gray-300 border border-white/20 hover:border-blue-400/40'``
                }`}
              >
                {industry}
              </button>) ) }
          </div>
        </div>
      </section>
"
      {/* Case Studies Grid */}""
      <section className="py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.6, delay: index * 0.1 }}""
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCaseStudy(study)}"
              >""
                <div className="flex items-center gap-4 mb-6">""
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">""
                    <Award className="w-8 h-8"  />                  </div>"
                  <div>""
                    <h3 className="text-2xl font-bold text-white">
                      {study.title}"
                    </h3>""
                    <p className="text-blue-400 font-semibold">{study.comp}</p>""
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>
                </div>"
""
                <div className="space-y-4 mb-6">"
                  <div>""
                    <h4 className="text-blue-400 font-semibold mb-2">
                      Challenge"
                    </h4>""
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>"
                  <div>""
                    <h4 className="text-blue-400 font-semibold mb-2">
                      Solution"
                    </h4>""
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>"
""
                <div className="grid grid-cols-2 gap-4 mb-6">""
                  <div className="text-center">""
                    <div className="text-2xl font-bold text-blue-400">
                      {study.metrics.costReduction ||
                        study.metrics.uptime ||
                        study.metrics.dataProcessing ||
                        study.metrics.breaches}"
                    </div>""
                    <div className="text-sm text-gray-400">Key Metric</div>"
                  </div>""
                  <div className="text-center">""
                    <div className="text-2xl font-bold text-cyan-400">
                      {study.roi}"
                    </div>""
                    <div className="text-sm text-gray-400">ROI</div>
                  </div>
                </div>"
""
                <div className="flex items-center justify-between">""
                  <span className="text-sm text-gray-400">
                    {study.duration}"
                  </span>""
                  <button className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-300">""
                    <span className="text-sm font-medium">View Details</span>""
                    <ArrowRight className="w-4 h-4"  />                  </button>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>
"
      {/* CTA Section */}""
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center max-w-4xl mx-auto""
          >""
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?"
            </h2>""
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">'
              Let's discuss how our technology solutions can transform your
              business and create measurable results like these case studies.
            </p>"
""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>"
              <Link""
                to="/contact""
                className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) };
export default CaseStudies;'"`
'"`'"`