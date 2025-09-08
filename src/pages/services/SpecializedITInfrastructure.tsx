                  ))}
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/70">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-zion-cyan/70">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                  </div>



                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Get Started
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-zion-cyan/70">
                      Contact: {service.contactInfo.phone}
                    </div>
                    <div className="text-xs text-zion-cyan/70">
                      {service.contactInfo.email}
                    </div>
                  </div>
