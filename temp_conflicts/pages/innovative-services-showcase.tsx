import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Dna, Globe, TrendingUp, Shield, 
  Wifi, Package, Bot, Lock, Car, Building2,
  DollarSign, Monitor, Users, FileText, Search, Phone,
  Star, CheckCircle, ArrowRight, ExternalLink
} from 'lucide-react';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';

export default function InnovativeServicesShowcase() {
  const allServices = [...innovativeMicroSaasServices, ...emergingTechServices];

  const categories = [
    { name: 'Quantum AI & Neuroscience', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { name: 'Space Technology', icon: Rocket, color: 'from-blue-600 to-indigo-600' },
    { name: 'Biotech & AI', icon: Dna, color: 'from-green-600 to-emerald-600' },
    { name: 'Metaverse & AI', icon: Globe, color: 'from-violet-600 to-purple-600' },
    { name: 'Quantum Finance', icon: TrendingUp, color: 'from-yellow-600 to-orange-600' },
    { name: 'Quantum Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-600' },
    { name: 'Quantum IoT', icon: Wifi, color: 'from-blue-600 to-cyan-600' },
    { name: 'Quantum Logistics', icon: Package, color: 'from-green-600 to-blue-600' },
    { name: 'Quantum Robotics', icon: Bot, color: 'from-gray-600 to-slate-600' },
    { name: 'Autonomous Vehicles', icon: Car, color: 'from-blue-600 to-green-600' },
    { name: 'Autonomous Manufacturing', icon: Building2, color: 'from-gray-600 to-blue-600' },
    { name: 'AI Sales & Marketing', icon: DollarSign, color: 'from-green-600 to-yellow-600' },
    { name: 'AI Content & Media', icon: Monitor, color: 'from-purple-600 to-pink-600' },
    { name: 'AI HR & Legal', icon: Users, color: 'from-blue-600 to-indigo-600' },
    { name: 'AI Research & Analytics', icon: Search, color: 'from-green-600 to-blue-600' },
    { name: 'AI Communication', icon: Phone, color: 'from-blue-600 to-green-600' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className=&quot;min-h-screen bg-black text-white relative overflow-hidden&quot;>
      {/* Enhanced Background Effects */}
      <div className=&quot;quantum-matrix-grid&quot;></div>
      <div className=&quot;holographic-rings&quot;></div>
      <div className=&quot;neural-network-pattern&quot;></div>
      <div className=&quot;cyberpunk-grid&quot;></div>
      <div className=&quot;quantum-field-effect&quot;></div>
      
      <Head>
        <title>Innovative Services Showcase - Zion Tech Group | Revolutionary AI & Quantum Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Explore our most innovative and revolutionary AI, quantum computing, and emerging technology services. First-to-market solutions with breakthrough capabilities.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;innovative AI, quantum computing, neural interface, space technology, biotech, autonomous systems, revolutionary technology&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Innovative Services Showcase - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our most innovative and revolutionary AI, quantum computing, and emerging technology services.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/innovative-services-showcase&quot; />
        <meta property=&quot;og:image&quot; content=&quot;https://ziontechgroup.com/og-image.jpg&quot; />
      </Head>

      {/* Enhanced Header */}
      <header className=&quot;relative z-10 bg-black/80 backdrop-blur-xl border-b border-purple-500/20&quot;>
        <div className=&quot;container mx-auto px-4 py-8&quot;>
          <div className=&quot;text-center&quot;>
            <h1 className=&quot;holographic-text text-5xl md:text-6xl font-bold mb-6&quot;>
              Innovative Services Showcase
            </h1>
            <p className=&quot;quantum-text text-xl md:text-2xl mb-8 max-w-4xl mx-auto&quot;>
              Discover our most revolutionary and first-to-market AI, quantum computing, and emerging technology solutions
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-6 text-sm&quot;>
              <span className=&quot;px-6 py-3 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 font-semibold&quot;>
                🚀 First-to-Market
              </span>
              <span className=&quot;px-6 py-3 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 font-semibold&quot;>
                🧠 Revolutionary AI
              </span>
              <span className=&quot;px-6 py-3 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 font-semibold&quot;>
                ⚛️ Quantum Computing
              </span>
              <span className=&quot;px-6 py-3 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-400 font-semibold&quot;>
                🌟 Breakthrough Technology
              </span>
            </div>
          </div>
        </div>
      </header>

      <UltraFuturisticMatrixBackground>
        <div className=&quot;min-h-screen relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>
                Revolutionary Micro SAAS Services
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Experience the future of business with our cutting-edge micro SAAS solutions powered by quantum AI, autonomous systems, and breakthrough technology.
              </p>
              
              {/* Stats Grid */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
                <div className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>25+</div>
                  <div className=&quot;text-gray-300&quot;>Innovative Services</div>
                </div>
                <div className=&quot;bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>$50B+</div>
                  <div className=&quot;text-gray-300&quot;>Market Value</div>
                </div>
                <div className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>500%+</div>
                  <div className=&quot;text-gray-300&quot;>Average ROI</div>
                </div>
                <div className=&quot;bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30&quot;>
                  <div className=&quot;text-3xl font-bold text-yellow-400 mb-2&quot;>24/7</div>
                  <div className=&quot;text-gray-300&quot;>AI Support</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className=&quot;bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 max-w-2xl mx-auto&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Contact Zion Tech Group</h3>
                <div className=&quot;space-y-4 text-left&quot;>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span className=&quot;text-gray-300&quot;>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <ExternalLink className=&quot;w-5 h-5 text-purple-400&quot; />
                    <span className=&quot;text-gray-300&quot;>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span className=&quot;text-gray-300&quot;>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Service Categories
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our comprehensive range of innovative services across cutting-edge technology domains
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6&quot;>
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;group cursor-pointer&quot;
                  >
                    <div className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                      <Icon className=&quot;w-8 h-8 mx-auto mb-3 text-white&quot; />
                      <h3 className=&quot;text-sm font-semibold text-white leading-tight&quot;>
                        {category.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Featured Revolutionary Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our most innovative and game-changing micro SAAS solutions
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {allServices.filter(service => service.popular).slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20&quot;>
                    <div className=&quot;flex items-center justify-between mb-6&quot;>
                      <div className=&quot;text-4xl&quot;>{service.icon}</div>
                      {service.popular && (
                        <span className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full&quot;>
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors&quot;>
                      {service.name}
                    </h3>
                    
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>
                      {service.description}
                    </p>

                    <div className=&quot;flex items-center justify-between mb-4&quot;>
                      <div className=&quot;text-2xl font-bold text-purple-400&quot;>
                        {service.price}
                        <span className=&quot;text-sm text-gray-400&quot;>{service.period}</span>
                      </div>
                      <div className=&quot;flex items-center space-x-1&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-sm text-gray-300&quot;>{service.rating}</span>
                        <span className=&quot;text-xs text-gray-500&quot;>({service.reviews})</span>
                      </div>
                    </div>

                    <div className=&quot;space-y-2 mb-6&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center space-x-2&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          <span className=&quot;text-xs text-gray-300&quot;>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className=&quot;space-y-3 mb-6&quot;>
                      <div className=&quot;text-xs&quot;>
                        <span className=&quot;text-gray-400&quot;>Market Size:</span>
                        <span className=&quot;text-green-400 ml-2&quot;>{service.marketSize}</span>
                      </div>
                      <div className=&quot;text-xs&quot;>
                        <span className=&quot;text-gray-400&quot;>Growth Rate:</span>
                        <span className=&quot;text-blue-400 ml-2&quot;>{service.growthRate}</span>
                      </div>
                      <div className=&quot;text-xs&quot;>
                        <span className=&quot;text-gray-400&quot;>ROI:</span>
                        <span className=&quot;text-purple-400 ml-2&quot;>{service.roi}</span>
                      </div>
                    </div>

                    <div className=&quot;flex space-x-3&quot;>
                      <a
                        href={service.link}
                        className=&quot;flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2&quot;
                      >
                        <span>Learn More</span>
                        <ArrowRight className=&quot;w-4 h-4&quot; />
                      </Link>
                      <button className=&quot;bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors duration-300&quot;>
                        <Phone className=&quot;w-4 h-4&quot; />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Market Analysis & Competitive Advantage
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Understand why our services outperform competitors and deliver exceptional ROI
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              <div className=&quot;bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Competitive Advantages</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <div>
                      <h4 className=&quot;font-semibold text-white&quot;>Quantum AI Integration</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>First-to-market quantum AI capabilities in multiple domains</p>
                    </div>
                  </div>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <div>
                      <h4 className=&quot;font-semibold text-white&quot;>Cost Leadership</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>90% cost reduction compared to enterprise competitors</p>
                    </div>
                  </div>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <div>
                      <h4 className=&quot;font-semibold text-white&quot;>Performance Superiority</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>99.9% accuracy and 500%+ ROI across all services</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=&quot;bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Market Opportunities</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <TrendingUp className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <div>
                      <h4 className=&quot;font-semibold text-white&quot;>Quantum Computing</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>$1.5B market with 300% annual growth</p>
                    </div>
                  </div>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <TrendingUp className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <div>
                      <h4 className=&quot;font-semibold text-white&quot;>Space Technology</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>$469B space economy with 150% growth</p>
                    </div>
                  </div>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <TrendingUp className=&quot;w-5 h-5 text-green-400 mt-1 flex-shrink-0&quot; />
                    <div>
                      <h4 className=&quot;font-semibold text-white&quot;>Biotech AI</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>$1.5T market with 200% annual growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join the future of business with our revolutionary micro SAAS services. Get started with a free trial today.
              </p>
              
              <div className=&quot;bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Contact Zion Tech Group</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                  <div className=&quot;text-center&quot;>
                    <Phone className=&quot;w-8 h-8 mx-auto mb-3 text-cyan-400&quot; />
                    <div className=&quot;text-white font-semibold&quot;>Phone</div>
                    <div className=&quot;text-gray-300&quot;>{contactInfo.mobile}</div>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <ExternalLink className=&quot;w-8 h-8 mx-auto mb-3 text-purple-400&quot; />
                    <div className=&quot;text-white font-semibold&quot;>Email</div>
                    <div className=&quot;text-gray-300&quot;>{contactInfo.email}</div>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <CheckCircle className=&quot;w-8 h-8 mx-auto mb-3 text-green-400&quot; />
                    <div className=&quot;text-white font-semibold&quot;>Address</div>
                    <div className=&quot;text-gray-300 text-sm&quot;>{contactInfo.address}</div>
                  </div>
                </div>
                
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <a
                    href=&quot;https://ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2&quot;
                  >
                    <span>Visit Website</span>
                    <ExternalLink className=&quot;w-5 h-5&quot; />
                  </Link>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className=&quot;bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2&quot;
                  >
                    <span>Call Now</span>
                    <Phone className=&quot;w-5 h-5&quot; />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
      </UltraFuturisticMatrixBackground>
    </div>
  );
}