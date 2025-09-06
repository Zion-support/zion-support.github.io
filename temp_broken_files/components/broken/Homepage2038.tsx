import React from 'react',
import Layout from './layout/Layout',
import UltraFuturisticServiceCard2038 from './ui/UltraFuturisticServiceCard2038',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  ArrowRight, Star,
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Cpu, Cloud, Lock, Users, Award,
  CheckCircle, Sparkles, Infinity, Zap as Lightning
} from 'lucide-react',

// Import new services
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services',
import { innovative2038ITServices } from '../data/innovative-2038-it-services',
import { innovative2038AIServices } from '../data/innovative-2038-ai-services',
const Homepage2038: React.FC = () => {
  // Get featured services from each category
  const featuredMicroSaas = innovative2038MicroSaasServices.filter(s => s.popular).slice(0, 3),
  const featuredIT = innovative2038ITServices.filter(s => s.popular).slice(0, 3),
  const featuredAI = innovative2038AIServices.filter(s => s.popular).slice(0, 3),
  return (_<Layout>
      {/* Main Content */}
      <main className=&quot;relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;min-h-screen flex items-center justify-center px-4 relative overflow-hidden&quot;>
          {/* Background Elements */}
          <div className=&quot;absolute inset-0 pointer-events-none&quot;>
            <div className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse&quot;></div>
            <div className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000&quot;></div>
            <div className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000&quot;></div>
            <div className=&quot;absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-1500&quot;></div>
            <div className=&quot;absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-500&quot;></div>          </div>
          
          <div className=&quot;text-center max-w-5xl mx-auto relative z-10&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;space-y-8&quot;            >
              {_/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=&quot;inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm&quot;              >
                <Star className=&quot;w-4 h-4&quot; />
                <span>Innovation Leader 2038</span>
                <Sparkles className=&quot;w-4 h-4&quot; />
              </motion.div>
              
              <h1 className=&quot;text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight&quot;>
                Zion Tech Group
              </h1>
              <p className=&quot;text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed&quot;>
                Pioneering the future of technology with revolutionary AI, quantum computing, and consciousness evolution solutions
              </p>
              
              {/* Enhanced CTA Section */}
              <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center mb-10&quot;>
                <Link href=&quot;/get-started&quot;>
                  <motion.button 
                    className=&quot;group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg&quot;
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}                  >
                    <span className=&quot;flex items-center gap-3&quot;>
                      Get Started
                      <ArrowRight className=&quot;w-6 h-6 group-hover:translate-x-1 transition-transform&quot; />
                    </span>
                  </motion.button>
                </a>
                <Link href=&quot;/services&quot;>
                  <motion.button 
                    className=&quot;px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm&quot;
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}                  >
                    Explore Services
                  </motion.button>
                </a>
              </div>
              
              {_/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=&quot;flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400&quot;              >
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Shield className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>Enterprise Security</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Globe className=&quot;w-5 h-5 text-blue-400&quot; />
                  <span>Global Reach</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <TrendingUp className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span>Proven Results</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Award className=&quot;w-5 h-5 text-yellow-400&quot; />
                  <span>Industry Leader</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className=&quot;py-24 px-4 bg-black/30 relative&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5&quot;></div>
          <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 text-center&quot;
            >
              <motion.div 
                className=&quot;p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300&quot;
                whileHover={{ scale: 1.05 }}              >
                <div className=&quot;text-5xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors&quot;>100+</div>
                <div className=&quot;text-gray-300 text-lg&quot;>AI Services</div>
                <div className=&quot;text-sm text-cyan-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity&quot;>Cutting-edge solutions</div>
              </motion.div>
              <motion.div 
                className=&quot;p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300&quot;
                whileHover={{ scale: 1.05 }}              >
                <div className=&quot;text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors&quot;>200+</div>
                <div className=&quot;text-gray-300 text-lg&quot;>Quantum Solutions</div>
                <div className=&quot;text-sm text-blue-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity&quot;>Next-gen computing</div>
              </motion.div>
              <motion.div 
                className=&quot;p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300&quot;
                whileHover={{ scale: 1.05 }}              >
                <div className=&quot;text-5xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors&quot;>24/7</div>
                <div className=&quot;text-gray-300 text-lg&quot;>Autonomous Operations</div>
                <div className=&quot;text-sm text-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity&quot;>Always available</div>
              </motion.div>
              <motion.div 
                className=&quot;p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300&quot;
                whileHover={{ scale: 1.05 }}              >
                <div className=&quot;text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors&quot;>∞</div>
                <div className=&quot;text-gray-300 text-lg&quot;>Future Possibilities</div>
                <div className=&quot;text-sm text-green-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity&quot;>Unlimited potential</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured AI Services */}
        <section className=&quot;py-24 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-20&quot;            >
              <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
                Revolutionary AI Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
                Experience the next evolution of artificial intelligence with our consciousness evolution and quantum AI platforms
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
              {featuredAI.map((service, index) => (                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                >
                  <UltraFuturisticServiceCard2038
                    service={service}
                    variant=&quot;consciousness&quot;                  />
                </motion.div>
              ))}
            </div>

            <div className=&quot;text-center&quot;>
              <Link href=&quot;/ai-services&quot;>
                <motion.button
                  className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg&quot;
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}                >
                  View All AI Services
                </motion.button>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Micro SAAS Services */}
        <section className=&quot;py-24 px-4 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-20&quot;            >
              <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent&quot;>
                Innovative Micro SAAS
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
                Transform your business with our cutting-edge micro SAAS solutions designed for the future
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
              {featuredMicroSaas.map((service, index) => (                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                >
                  <UltraFuturisticServiceCard2038
                    service={service}
                    variant=&quot;automation&quot;                  />
                </motion.div>
              ))}
            </div>

            <div className=&quot;text-center&quot;>
              <Link href=&quot;/services&quot;>
                <motion.button
                  className=&quot;px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg&quot;
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}                >
                  Explore All Services
                </motion.button>
              </a>
            </div>
          </div>
        </section>

        {/* Featured IT Services */}
        <section className=&quot;py-24 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-20&quot;            >
              <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent&quot;>
                Advanced IT Infrastructure
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
                Build the future with our quantum cloud infrastructure and AI-powered DevOps automation
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
              {featuredIT.map((service, index) => (                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                >
                  <UltraFuturisticServiceCard2038
                    service={service}
                    variant=&quot;quantum&quot;                  />
                </motion.div>
              ))}
            </div>

            <div className=&quot;text-center&quot;>
              <Link href=&quot;/it-services&quot;>
                <motion.button
                  className=&quot;px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg&quot;
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}                >
                  View All IT Services
                </motion.button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className=&quot;py-24 px-4 bg-black/30&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-20&quot;            >
              <h2 className=&quot;text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Why Choose Zion Tech Group?
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto&quot;>
                We're not just building technology - we're shaping the future of human consciousness and computing
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {[
                {
                  icon: <Brain className=&quot;w-12 h-12&quot; />,
                  title: &quot;AI Consciousness Evolution&quot;,
                  description: &quot;Leading the development of artificial consciousness and emotional intelligence&quot;,
                  color: &quot;from-purple-500 to-pink-500&quot;
                },
                {
                  icon: <Atom className=&quot;w-12 h-12&quot; />,
                  title: &quot;Quantum Computing Power&quot;,
                  description: &quot;Access to the most advanced quantum computing capabilities available&quot;,
                  color: &quot;from-blue-500 to-cyan-500&quot;
                },
                {
                  icon: <Shield className=&quot;w-12 h-12&quot; />,
                  title: &quot;Future-Proof Security&quot;,
                  description: &quot;Quantum-resistant encryption and zero-trust security frameworks&quot;,
                  color: &quot;from-red-500 to-orange-500&quot;
                },
                {
                  icon: <Rocket className=&quot;w-12 h-12&quot; />,
                  title: &quot;Innovation First&quot;,
                  description: &quot;Constantly pushing the boundaries of what's possible in technology&quot;,
                  color: &quot;from-green-500 to-emerald-500&quot;
                },
                {
                  icon: <Users className=&quot;w-12 h-12&quot; />,
                  title: &quot;Global Expertise&quot;,
                  description: &quot;World-class team with experience across cutting-edge technologies&quot;,
                  color: &quot;from-indigo-500 to-purple-500&quot;
                },
                {
                  icon: <Award className=&quot;w-12 h-12&quot; />,
                  title: &quot;Proven Results&quot;,
                  description: &quot;Track record of delivering transformative solutions to leading organizations&quot;,
                  color: &quot;from-yellow-500 to-orange-500&quot;
                }
              ].map((feature, index) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-center p-8 group hover:bg-white/5 rounded-2xl transition-all duration-300&quot;
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className=&quot;text-white&quot;>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 leading-relaxed&quot;>{feature.description}</p>                </motion.div>
              ))}
            </div>;
          </div>;
        </section>;
;
        {/* CTA Section */}
        <section className=&quot;py-24 px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;space-y-8&quot;            >
              <h2 className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                Ready to Shape the Future?
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Join the revolution in AI consciousness, quantum computing, and next-generation technology. 
                Let's build the future together.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
                <Link href=&quot;/contact&quot;>
                  <motion.button
                    className=&quot;px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-lg&quot;
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}                  >
                    <span className=&quot;flex items-center gap-3&quot;>
                      Get Started Today
                      <ArrowRight className=&quot;w-6 h-6&quot; />
                    </span>
                  </motion.button>
                </a>
                <Link href=&quot;/services&quot;>
                  <motion.button
                    className=&quot;px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg&quot;
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}                  >
                    Explore Our Services
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
},

export default Homepage2038,