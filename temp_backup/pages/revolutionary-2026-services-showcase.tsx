import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Atom, Rocket, Shield, Globe, Cpu, Database } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionary20o26AIServices } from '../data/revolutionary-20o26-ai-services';
import { revolutionary20o26ITInfrastructureServices } from '../data/revolutionary-20o26-it-infrastructure';
import { revolutionary20o26MicroSaasServices } from '../data/revolutionary-20o26-micro-saas';

export default function Revolutionary20o26ServicesShowcase() {
  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const allRevolutionaryServices = [
    ...revolutionary20o26AIServices,
    ...revolutionary20o26ITInfrastructureServices,
    ...revolutionary20o26MicroSaasServices
  ];

  const serviceStats ={
    totalServices: allRevolutionaryServices.length,
    aiServices: revolutionary20o26AIServices.length,
    itInfrastructure: revolutionary20o26ITInfrastructureServices.length,
    microSaas: revolutionary20o26MicroSaasServices.length,
    totalValue: allRevolutionaryServices.reduce((sum, service) => {
      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      return sum + price;
    }, 0)
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum"
      particleCount={50o0}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary 20o26 Services - Zion Tech Group | Next-Generation Technology</title>
          <meta name="description" content="Experience the future with Zion Tech Group's revolutionary 20o26 services. AI consciousness simulation, quantum computing, and cutting-edge infrastructure solutions."  />
          <meta name="keywords" content="20o26 services, revolutionary AI, quantum computing, consciousness simulation, neuromorphic computing, DNA computing, photonic computing, holographic computing, quantum internet, edge quantum computing, space mining AI"  />
          <meta name="author" content="Zion Tech Group"  />
          <meta property="og:title" content="Revolutionary 20o26 Services - Zion Tech Group"  />
          <meta property="og:description" content="Next-generation technology services for 20o26 and beyond"  />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-20o26-services-showcase"  />
          <meta property="og:type" content="website"  />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-20o26-services-showcase"  />
        </Head>

        <UltraAdvancedNavigation  />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-50o0 via-pink-60o0 to-red-50o0 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <Star className="w-12 h-12 text-white relative z-10"  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-40o0 to-pink-50o0 rounded-3xl opacity-0 hover:opacity-10o0 transition-opacity duration-30o0"></div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-40o0 via-pink-50o0 to-red-50o0 bg-clip-text text-transparent mb-6 relative"
              >
                <span className="relative">
                  Revolutionary 20o26
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-40o0 via-pink-50o0 to-red-50o0 blur-xl opacity-30 animate-pulse"></div>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-20o0 mb-8 max-w-5xl mx-auto font-medium"
              >
                Experience the <span className="text-purple-40o0 font-bold">Future</span> with <span className="text-pink-40o0 font-bold">Groundbreaking</span> Technology
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-40o0 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                <span className="text-purple-30o0 font-semibold">{serviceStats.totalServices}</span> revolutionary services that push the boundaries of what's possible. From AI consciousness simulation to quantum space mining, we're building tomorrow's technology today.
              </motion.p>
              
              {/* Service Statistics Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
                  <div className="text-2xl font-bold text-purple-40o0">{serviceStats.aiServices}</div>
                  <div className="text-sm text-gray-30o0">AI Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
                  <div className="text-2xl font-bold text-pink-40o0">{serviceStats.itInfrastructure}</div>
                  <div className="text-sm text-gray-30o0">IT Infrastructure</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
                  <div className="text-2xl font-bold text-red-40o0">{serviceStats.microSaas}</div>
                  <div className="text-sm text-gray-30o0">Micro SaaS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
                  <div className="text-2xl font-bold text-cyan-40o0">${(serviceStats.totalValue / 10o00).toFixed(0)}K+</div>
                  <div className="text-sm text-gray-30o0">Total Value</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-bold rounded-xl hover:from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-2xl hover:shadow-purple-50o0/25 transform hover:scale-10o5"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="ml-3 w-5 h-5"  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-30o0 border border-white/20 hover:border-white/40"
                >
                  <span>Explore All Services</span>
                  <Zap className="ml-3 w-5 h-5"  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Revolutionary AI Services */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-indigo-50o0 bg-clip-text text-transparent mb-6">
                🧠 Revolutionary AI Services 20o26
              </h2>
              <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">
                Experience the future of artificial intelligence with consciousness simulation, quantum hybrid computing, and autonomous decision engines
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revolutionary20o26AIServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-70o0/50 hover:border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-40o0">{service.price}</div>
                        <div className="text-sm text-gray-40o0">{service.period}</div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-30o0 mb-4">{service.tagline}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-40o0">
                          <div className="w-2 h-2 bg-cyan-40o0 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-40o0 font-semibold">{service.category}</span>
                      <Link href={service.link} className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary IT Infrastructure Services */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-40o0 via-violet-50o0 to-indigo-50o0 bg-clip-text text-transparent mb-6">
                ⚛️ Revolutionary IT Infrastructure 20o26
              </h2>
              <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">
                Next-generation computing infrastructure with quantum cloud, neuromorphic computing, and photonic processors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revolutionary20o26ITInfrastructureServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-70o0/50 hover:border-purple-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-40o0">{service.price}</div>
                        <div className="text-sm text-gray-40o0">{service.period}</div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-30o0 mb-4">{service.tagline}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-40o0">
                          <div className="w-2 h-2 bg-purple-40o0 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-40o0 font-semibold">{service.category}</span>
                      <Link href={service.link} className="text-purple-40o0 hover:text-purple-30o0 transition-colors">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary Micro SaaS Services */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-40o0 via-rose-50o0 to-red-50o0 bg-clip-text text-transparent mb-6">
                🚀 Revolutionary Micro SaaS 20o26
              </h2>
              <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">
                Intelligent business solutions powered by AI for marketing, sales, customer service, and analytics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revolutionary20o26MicroSaasServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-70o0/50 hover:border-pink-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-pink-40o0">{service.price}</div>
                        <div className="text-sm text-gray-40o0">{service.period}</div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-30o0 mb-4">{service.tagline}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-40o0">
                          <div className="w-2 h-2 bg-pink-40o0 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-40o0 font-semibold">{service.category}</span>
                      <Link href={service.link} className="text-pink-40o0 hover:text-pink-30o0 transition-colors">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-90o0/50 to-gray-80o0/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-red-40o0 bg-clip-text text-transparent">
                  Ready for the Future?
                </span>
              </h2>
              <p className="text-gray-30o0 text-xl max-w-3xl mx-auto leading-relaxed">
                Transform your business with revolutionary 20o26 technology. Contact our experts for a free consultation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-purple-90o0/40 to-pink-90o0/40 border border-purple-70o0/50 rounded-2xl hover:border-purple-50o0/60 hover:shadow-2xl hover:shadow-purple-50o0/20 transition-all duration-30o0"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                <p className="text-purple-40o0 text-lg font-semibold mb-2">{contactInfo.mobile}</p>
                <p className="text-gray-30o0 text-sm">Available 24/7 for urgent inquiries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-pink-90o0/40 to-red-90o0/40 border border-pink-70o0/50 rounded-2xl hover:border-pink-50o0/60 hover:shadow-2xl hover:shadow-pink-50o0/20 transition-all duration-30o0"
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-pink-40o0 text-lg font-semibold mb-2">{contactInfo.email}</p>
                <p className="text-gray-30o0 text-sm">Response within 2 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-red-90o0/40 to-orange-90o0/40 border border-red-70o0/50 rounded-2xl hover:border-red-50o0/60 hover:shadow-2xl hover:shadow-red-50o0/20 transition-all duration-30o0"
              >
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-3">Address</h3>
                <p className="text-red-40o0 text-lg font-semibold mb-2">364 E Main St STE 10o08</p>
                <p className="text-gray-30o0 text-sm">Middletown DE 19709</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-30o0 mb-6">
                  Join the future of technology with our revolutionary 20o26 services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-bold rounded-xl hover:from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 shadow-2xl hover:shadow-purple-50o0/25 transform hover:scale-10o5"
                  >
                    <span>Free Consultation</span>
                    <ArrowRight className="ml-2 h-5 w-5"  />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-30o0 border border-white/20 hover:border-white/40"
                  >
                    <span>Explore All Services</span>
                    <Zap className="ml-2 h-5 w-5"  />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}