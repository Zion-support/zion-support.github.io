    ...newOperationalServices2025,
    ...realServicesQ12025,
    ...realEnterpriseServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTech2025Services,
    ...realMarketAugmentations2025,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...ultimate2026Services,
    ...revolutionary2026Innovations,
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV4,
    ...innovative2026AIServicesV4
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: <Monitor className="w-5 h-5" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: <Star className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: <Building2 className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('DevOps')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length },
    { id: 'finance', name: 'Financial Technology', icon: <DollarSign className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Wifi className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge')).length }
  ];
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-gray-300">
              Showing {filteredServices.length} of {allServices.length} services
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </motion.div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="p-6">
                      {/* Service Header */}
                      <div className="mb-4">
                        <div className="text-3xl mb-2">{service.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-400 mb-3">{service.tagline}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-400">
                              <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service Stats */}
                      <div className="mb-4 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Category:</span>
                          <span className="text-gray-300">{service.category}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Rating:</span>
                          <span className="text-yellow-400">{service.rating || 'N/A'}/5</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Trial:</span>
                          <span className="text-green-400">{service.trialDays} days</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="flex-1"
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          href="/contact"
                          variant="secondary"
                          size="sm"
                          className="flex-1"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="bg-gradient-to-r from-gray-900 to-black border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400 mb-3">{service.tagline}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-300">
                              <span className="flex items-center gap-1">
                                <Cpu className="h-4 w-4" />
                                {service.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400" />
                                {service.rating || 'N/A'}/5
                              </span>
                              <span className="flex items-center gap-1">
                                <TrendingUp className="h-4 w-4 text-green-400" />
                                {service.trialDays} day trial
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Popular Badge */}
                        <div className="flex flex-col items-end gap-3">
                          <div className="text-right">
                            <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 min-w-[120px]">
                          <Button
                            href={service.link}
                            variant="primary"
                            size="sm"
                          >
                            Learn More
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            href="/contact"
                            variant="secondary"
                            size="sm"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>

                      {/* Service Description and Features */}
                      <div className="mt-6 pt-6 border-t border-cyan-500/20">
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 5).map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-400">
                                  <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technology?.slice(0, 4).map((tech, idx) => (
                                <span key={idx} className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="primary"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to discover how our revolutionary services can drive unprecedented growth and ROI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
  );
};

export default Services;