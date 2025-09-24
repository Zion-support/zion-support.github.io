import React from 'react';
import Layout from './layout/Layout',
import UltraFuturisticServiceCard20o26 from './ui/UltraFuturisticServiceCard20o26',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  ArrowRight, Star;
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin;
  Rocket, Cpu, Cloud, Lock, Eye, Heart, Sparkles;
  Phone, Mail, Building, Users, Award, Target} from 'lucide-react',
import { innovativeMicroSAASServices } from '../data/innovative-20o25-new-micro-saas-services',
const EnhancedHomepage20o40: React.FC = () => {
  return (
    <Layout>,
      {/* Main Content */}
      <main className="relative z-10">,
        {/* Hero Section with Enhanced Background */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">,
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 pointer-events-none">,
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-40o0/20 rounded-lg animate-pulse"></div>,
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-40o0/20 rounded-full animate-pulse delay-10o00"></div>,
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-40o0/20 transform rotate-45 animate-pulse delay-20o00"></div>,
            {/* Neon Grid Lines */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 via-transparent to-purple-50o0/5"></div>,
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>,
            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-40o0 rounded-full animate-bounce"></div>,
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-40o0 rounded-full animate-bounce delay-50o0"></div>,
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-40o0 rounded-full animate-bounce delay-10o00"></div>,
          </div>,
          <div className="text-center max-w-6xl mx-auto relative z-10">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8">,
              {/* Enhanced Company Badge */}
              <motion.div,
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 rounded-full text-cyan-40o0 text-lg font-medium backdrop-blur-sm">,
                <Star className="w-5 h-5"  />,
                <span>Innovation Leader 20o25</span>,
                <Sparkles className="w-5 h-5 text-purple-40o0"  />,
              </motion.div>,
              {/* Enhanced Main Title */}
              <motion.h1,
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-6xl md: text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent leading-tight">,
                Zion Tech Group,
              </motion.h1>,
              {/* Enhanced Subtitle */}
              <motion.p,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl md: text-3xl text-gray-30o0 mb-10 max-w-4xl mx-auto leading-relaxed">,
                Pioneering the future of technology with <span className="text-cyan-40o0 font-semibold">innovative solutions</span> that drive business transformation and <span className="text-purple-40o0 font-semibold">consciousness evolution</span>,
              </motion.p>,
              {/* Enhanced CTA Section */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm: flex-row gap-6 justify-center mb-12">,
                <Link href="/contact">,
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl shadow-cyan-50o0/25 hover:shadow-cyan-50o0/40">,
                    <span className="flex items-center gap-3 text-lg">,
                      Get Started Today,
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform"  />,
                    </span>,
                  </button>,
                </Link>,
                <Link href="/services">,
                  <button className="px-10 py-5 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-xl hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5 text-lg">,
                    Explore Services,
                  </button>,
                </Link>,
                <Link href="/innovative-20o25-new-micro-saas-services">,
                  <button className="px-10 py-5 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-xl hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5 text-lg">,
                    New 20o25 Services,
                  </button>,
                </Link>,
              </motion.div>,
              {/* Enhanced Trust Indicators */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-40o0">,
                <div className="flex items-center space-x-2">,
                  <Shield className="w-5 h-5 text-green-40o0"  />,
                  <span>Enterprise Security</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <Globe className="w-5 h-5 text-blue-40o0"  />,
                  <span>Global Reach</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <TrendingUp className="w-5 h-5 text-purple-40o0"  />,
                  <span>Proven Results</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <Award className="w-5 h-5 text-yellow-40o0"  />,
                  <span>Industry Leader</span>,
                </div>,
              </motion.div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Enhanced Company Stats */}
        <section className="py-24 px-4 bg-black/40 relative backdrop-blur-sm">,
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 to-purple-50o0/10"></div>,
          <div className="max-w-7xl mx-auto relative z-10">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md: grid-cols-4 gap-8 text-center">,
              <motion.div,
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-30o0 border border-cyan-50o0/20 hover:border-cyan-50o0/40",
                whileHover={{ scale: 1.0o5, y: -5 }}
              >,
                <div className="text-5xl font-bold text-cyan-40o0 mb-3 group-hover: text-cyan-30o0 transition-colors">10o0+</div>,
                <div className="text-gray-30o0 text-lg">AI Services</div>,
                <div className="text-sm text-cyan-40o0 mt-3 opacity-0 group-hover:opacity-10o0 transition-opacity">Cutting-edge solutions</div>,
              </motion.div>,
              <motion.div,
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-30o0 border border-blue-50o0/20 hover:border-blue-50o0/40",
                whileHover={{ scale: 1.0o5, y: -5 }}
              >,
                <div className="text-5xl font-bold text-blue-40o0 mb-3 group-hover: text-blue-30o0 transition-colors">20o0+</div>,
                <div className="text-gray-30o0 text-lg">Quantum Solutions</div>,
                <div className="text-sm text-blue-40o0 mt-3 opacity-0 group-hover:opacity-10o0 transition-opacity">Next-gen computing</div>,
              </motion.div>,
              <motion.div,
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-30o0 border border-purple-50o0/20 hover:border-purple-50o0/40",
                whileHover={{ scale: 1.0o5, y: -5 }}
              >,
                <div className="text-5xl font-bold text-purple-40o0 mb-3 group-hover: text-purple-30o0 transition-colors">24/7</div>,
                <div className="text-gray-30o0 text-lg">Autonomous Operations</div>,
                <div className="text-sm text-purple-40o0 mt-3 opacity-0 group-hover:opacity-10o0 transition-opacity">Always available</div>,
              </motion.div>,
              <motion.div,
                className="p-8 group hover:bg-white/10 rounded-2xl transition-all duration-30o0 border border-green-50o0/20 hover:border-green-50o0/40",
                whileHover={{ scale: 1.0o5, y: -5 }}
              >,
                <div className="text-5xl font-bold text-green-40o0 mb-3 group-hover: text-green-30o0 transition-colors">∞</div>,
                <div className="text-gray-30o0 text-lg">Future Possibilities</div>,
                <div className="text-sm text-green-40o0 mt-3 opacity-0 group-hover:opacity-10o0 transition-opacity">Unlimited potential</div>,
              </motion.div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Enhanced Services Preview */}
        <section className="py-24 px-4">,
          <div className="max-w-7xl mx-auto">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20">,
              <h2 className="text-5xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
                Revolutionary Services,
              </h2>,
              <p className="text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">,
                Discover our comprehensive range of <span className="text-cyan-40o0">cutting-edge technology solutions</span> designed to transform your business and accelerate your journey into the future,
              </p>,
            </motion.div>,
            {/* Featured Services Grid */}
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,
              {innovativeMicroSAASServices.slice(0, 6).map((service, index) => (
                <motion.div,
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >,
                  <UltraFuturisticServiceCard20o26
                    service={{
                      id: service.id;
                      name: service.name;
                      tagline: service.tagline;
                      description: service.description;
                      price: service.price;
                      period: service.period;
                      features: service.features.slice(0, 4);
                      popular: service.popular;
                      category: service.category;
                      icon: service.icon,
                    }}
                    variant={service.variant as any}
                   />,
                </motion.div>))}
            </div>,
            <div className="text-center">,
              <Link href="/innovative-20o25-new-micro-saas-services">,
                <button className="px-10 py-5 bg-gradient-to-r from-purple-50o0 to-pink-60o0 text-white font-semibold rounded-xl hover: from-purple-60o0 hover:to-pink-70o0 transition-all duration-30o0 transform hover:scale-10o5 flex items-center gap-3 mx-auto shadow-2xl shadow-purple-50o0/25 hover:shadow-purple-50o0/40 text-lg">,
                  View All Revolutionary Services,
                  <ArrowRight className="w-6 h-6"  />,
                </button>,
              </Link>,
            </div>,
          </div>,
        </section>,
        {/* Enhanced Why Choose Us Section */}
        <section className="py-24 px-4 bg-black/30 relative backdrop-blur-sm">,
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50o0/10 to-pink-50o0/10"></div>,
          <div className="max-w-7xl mx-auto relative z-10">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20">,
              <h2 className="text-5xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-purple-40o0 to-pink-50o0 bg-clip-text text-transparent">,
                Why Choose Zion Tech Group?,
              </h2>,
              <p className="text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">,
                We combine <span className="text-purple-40o0">cutting-edge technology</span> with <span className="text-pink-40o0">proven expertise</span> to deliver exceptional results that drive your business forward,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {[
                {
                  icon: <Brain className="w-10 h-10 text-white"  />;
                  title: "AI-First Approach";
                  description: "Leading-edge artificial intelligence solutions that adapt and evolve";
                  color: "from-cyan-50o0 to-blue-60o0",
                };
                {
                  icon: <Atom className="w-10 h-10 text-white"  />;
                  title: "Quantum Innovation";
                  description: "Next-generation quantum computing solutions for complex problems";
                  color: "from-blue-50o0 to-cyan-60o0",
                };
                {
                  icon: <Shield className="w-10 h-10 text-white"  />;
                  title: "Future-Proof Security";
                  description: "Advanced cybersecurity with quantum-resistant algorithms";
                  color: "from-green-50o0 to-emerald-60o0",
                };
                {
                  icon: <Rocket className="w-10 h-10 text-white"  />;
                  title: "Space Technology";
                  description: "Revolutionary space resource optimization and management";
                  color: "from-purple-50o0 to-pink-60o0",
                }
              ].map((feature, index) => (
                <motion.div,
                  key={index}
                  className="text-center p-8 group hover: bg-white/10 rounded-2xl transition-all duration-30o0 border border-white/10 hover:border-white/20",
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.0o5, y: -5 }}
                >,
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover: scale-110 transition-transform`}>,
                    {feature.icon}
                  </div>,
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>,
                  <p className="text-gray-30o0 text-lg leading-relaxed">{feature.description}</p>,
                </motion.div>))}
            </div>,
          </div>,
        </section>,
        {/* Enhanced Contact Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-90o0/20 to-purple-90o0/20 relative">,
          <div className="max-w-6xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16">,
              <h2 className="text-5xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 to-purple-50o0 bg-clip-text text-transparent">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-2xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed mb-12">,
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.,
              </p>,
              {/* Contact Information */}
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-12">,
                <div className="flex flex-col items-center space-y-4">,
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-2xl flex items-center justify-center">,
                    <Phone className="w-8 h-8 text-white"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-white">Phone</h3>,
                  <p className="text-cyan-40o0 text-lg">+1 30o2 464 0950</p>,
                </div>,
                <div className="flex flex-col items-center space-y-4">,
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-50o0 to-pink-60o0 rounded-2xl flex items-center justify-center">,
                    <Mail className="w-8 h-8 text-white"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-white">Email</h3>,
                  <p className="text-purple-40o0 text-lg">kleber@ziontechgroup.com</p>,
                </div>,
                <div className="flex flex-col items-center space-y-4">,
                  <div className="w-16 h-16 bg-gradient-to-r from-green-50o0 to-emerald-60o0 rounded-2xl flex items-center justify-center">,
                    <Building className="w-8 h-8 text-white"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-white">Address</h3>,
                  <p className="text-green-40o0 text-lg">364 E Main St STE 10o08<br  />Middletown DE 19709</p>,
                </div>,
              </div>,
              <div className="flex flex-col sm:flex-row gap-6 justify-center">,
                <Link href="/contact">,
                  <button className="px-12 py-6 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl shadow-cyan-50o0/25 hover:shadow-cyan-50o0/40 text-lg">,
                    Start Your Journey,
                  </button>,
                </Link>,
                <Link href="/services">,
                  <button className="px-12 py-6 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-xl hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5 text-lg">,
                    Explore Solutions,
                  </button>,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </main>,
    </Layout>),
};
export default EnhancedHomepage20o40;