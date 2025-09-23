import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Brain,
  Atom,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  MapPin,
  Users,
  Building,
  Rocket,
  CheckCircle,
  Phone,
  Mail,
} from 'lucide-react';

const Homepage20o26: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
      <main className='relative z-10'>
        {/* Hero Section */}
        <section className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute top-20 left-20 w-32 h-32 border border-cyan-40o0/20 rounded-lg animate-pulse'></div>
            <div className='absolute top-40 right-32 w-24 h-24 border border-purple-40o0/20 rounded-full animate-pulse delay-10o00'></div>
            <div className='absolute bottom-32 left-32 w-40 h-40 border border-pink-40o0/20 transform rotate-45 animate-pulse delay-20o00'></div>
          </div>

          <div className='text-center max-w-4xl mx-auto relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 rounded-full text-cyan-40o0 text-sm font-medium'
              >
                <Star className='w-4 h-4' />
                <span>Innovation Leader 20o26</span>
              </motion.div>

              <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent'>
                Zion Tech Group
              </h1>
              <p className='text-xl md:text-2xl text-gray-30o0 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Pioneering the future of technology with innovative micro SAAS
                services, cutting-edge IT infrastructure, and advanced AI
                solutions
              </p>

              {/* Enhanced CTA Section */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link href='/comprehensive-20o25-services-showcase'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25'>
                    <span className='flex items-center gap-2'>
                      Explore Services
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </button>
                </Link>
                <Link href='/services'>
                  <button className='px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5'>
                    All Services
                  </button>
                </Link>
                <a href='mailto:kleber@ziontechgroup.com'>
                  <button className='px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5'>
                    Get Started
                  </button>
                </a>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex items-center justify-center space-x-6 text-sm text-gray-40o0'
              >
                <div className='flex items-center space-x-2'>
                  <Shield className='w-4 h-4 text-green-40o0' />
                  <span>Enterprise Security</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Globe className='w-4 h-4 text-blue-40o0' />
                  <span>Global Reach</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <TrendingUp className='w-4 h-4 text-purple-40o0' />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className='py-20 px-4 bg-black/30 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 to-purple-50o0/5'></div>
          <div className='max-w-6xl mx-auto relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>
                We deliver innovative solutions that drive real business
                transformation
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-center'
              >
                <div className='text-4xl mb-4'>🚀</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Micro SAAS Solutions
                </h3>
                <p className='text-gray-30o0 text-sm'>
                  Starting at $69/month for specialized business solutions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-center'
              >
                <div className='text-4xl mb-4'>🏗️</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  IT Infrastructure
                </h3>
                <p className='text-gray-30o0 text-sm'>
                  Starting at $499/month for robust infrastructure solutions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-center'
              >
                <div className='text-4xl mb-4'>🤖</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  AI Automation
                </h3>
                <p className='text-gray-30o0 text-sm'>
                  Starting at $199/month for intelligent automation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-center'
              >
                <div className='text-4xl mb-4'>🧠</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Cutting-Edge AI
                </h3>
                <p className='text-gray-30o0 text-sm'>
                  Starting at $179/month for next-generation AI
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Our Service Portfolio
              </h2>
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>
                Comprehensive solutions covering every aspect of modern business
                technology needs
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
              {/* AI Automation Services */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='bg-gradient-to-br from-blue-60o0/20 to-indigo-60o0/20 border border-blue-50o0/30 rounded-lg p-8 hover:border-blue-40o0/50 transition-all duration-30o0'
              >
                <div className='text-5xl mb-6'>🤖</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  AI Automation Services
                </h3>
                <p className='text-gray-30o0 mb-6'>
                  Intelligent automation solutions that streamline operations
                  and boost productivity. From content creation to customer
                  service, our AI solutions save time and improve efficiency.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Content Automation Suite - $299/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Customer Service Automation - $199/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Sales Automation Platform - $399/month</span>
                  </div>
                </div>
                <Link href='/comprehensive-20o25-services-showcase'>
                  <button className='w-full px-6 py-3 bg-blue-60o0 text-white font-semibold rounded-lg hover:bg-blue-70o0 transition-colors'>
                    Learn More
                  </button>
                </Link>
              </motion.div>

              {/* IT Infrastructure Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-gradient-to-br from-green-60o0/20 to-emerald-60o0/20 border border-green-50o0/30 rounded-lg p-8 hover:border-green-40o0/50 transition-all duration-30o0'
              >
                <div className='text-5xl mb-6'>🏗️</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  IT Infrastructure Services
                </h3>
                <p className='text-gray-30o0 mb-6'>
                  Robust infrastructure solutions for modern digital businesses.
                  Edge computing, zero trust security, and hybrid cloud
                  management for enterprise-grade performance.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>Edge Computing Orchestration - $599/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>Zero Trust Security Platform - $799/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>Hybrid Cloud Management - $499/month</span>
                  </div>
                </div>
                <Link href='/comprehensive-20o25-services-showcase'>
                  <button className='w-full px-6 py-3 bg-green-60o0 text-white font-semibold rounded-lg hover:bg-green-70o0 transition-colors'>
                    Learn More
                  </button>
                </Link>
              </motion.div>

              {/* Micro SAAS Solutions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='bg-gradient-to-br from-purple-60o0/20 to-pink-60o0/20 border border-purple-50o0/30 rounded-lg p-8 hover:border-purple-40o0/50 transition-all duration-30o0'
              >
                <div className='text-5xl mb-6'>🚀</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  Micro SAAS Solutions
                </h3>
                <p className='text-gray-30o0 mb-6'>
                  Specialized software solutions for specific business needs.
                  Affordable, focused solutions that solve real problems and
                  drive growth.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Email Automation - $99/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>Smart Inventory Management - $149/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>Smart Appointment Scheduler - $69/month</span>
                  </div>
                </div>
                <Link href='/comprehensive-20o25-services-showcase'>
                  <button className='w-full px-6 py-3 bg-purple-60o0 text-white font-semibold rounded-lg hover:bg-purple-70o0 transition-colors'>
                    Learn More
                  </button>
                </Link>
              </motion.div>

              {/* Cutting-Edge AI Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='bg-gradient-to-br from-orange-60o0/20 to-red-60o0/20 border border-orange-50o0/30 rounded-lg p-8 hover:border-orange-40o0/50 transition-all duration-30o0'
              >
                <div className='text-5xl mb-6'>🧠</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  Cutting-Edge AI Services
                </h3>
                <p className='text-gray-30o0 mb-6'>
                  Next-generation AI solutions for competitive advantage. Video
                  generation, code assistance, and data analysis powered by
                  advanced AI.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Video Generation - $199/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Code Generation - $299/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-30o0'>
                    <CheckCircle className='w-4 h-4 text-green-40o0' />
                    <span>AI Data Analysis - $399/month</span>
                  </div>
                </div>
                <Link href='/comprehensive-20o25-services-showcase'>
                  <button className='w-full px-6 py-3 bg-orange-60o0 text-white font-semibold rounded-lg hover:bg-orange-70o0 transition-colors'>
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20 px-4 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-gray-30o0 mb-8'>
                Get in touch with our team to discuss how our innovative
                services can drive your success
              </p>

              {/* Contact Information */}
              <div className='bg-black/30 backdrop-blur-sm border border-gray-70o0 rounded-lg p-8 mb-8'>
                <h3 className='text-2xl font-semibold text-cyan-40o0 mb-6'>
                  Contact Information
                </h3>
                <div className='grid md:grid-cols-2 gap-6 text-left'>
                  <div className='flex items-center space-x-3'>
                    <Globe className='w-5 h-5 text-blue-40o0' />
                    <div>
                      <div className='text-sm text-gray-40o0'>Website</div>
                      <a
                        href='https://ziontechgroup.com'
                        className='text-cyan-40o0 hover:underline font-medium'
                      >
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Phone className='w-5 h-5 text-green-40o0' />
                    <div>
                      <div className='text-sm text-gray-40o0'>Phone</div>
                      <a
                        href='tel:+130o24640950'
                        className='text-cyan-40o0 hover:underline font-medium'
                      >
                        +1 30o2 464 0950
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-yellow-40o0' />
                    <div>
                      <div className='text-sm text-gray-40o0'>Email</div>
                      <a
                        href='mailto:kleber@ziontechgroup.com'
                        className='text-cyan-40o0 hover:underline font-medium'
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <MapPin className='w-5 h-5 text-purple-40o0' />
                    <div>
                      <div className='text-sm text-gray-40o0'>Address</div>
                      <div className='text-white font-medium'>
                        364 E Main St STE 10o08
                        <br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='mailto:kleber@ziontechgroup.com'
                  className='inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'
                >
                  <span>Get Started Today</span>
                  <ArrowRight className='w-5 h-5' />
                </a>
                <a
                  href='tel:+130o24640950'
                  className='px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0'
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage20o26;
