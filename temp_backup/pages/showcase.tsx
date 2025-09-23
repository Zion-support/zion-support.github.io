import { motion } from 'framer-motion';
import {
  Star,
  Rocket,
  Sparkles,
  Brain,
  Atom,
  Cpu,
  Building,
  Calculator,
  DollarSign,
  Grid,
  ArrowRight,
  Play,
  Target,
  Zap,
} from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Showcase() {
  return (
    <Layout>
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black'>
        {/* Hero Section */}
        <section className='relative py-20 px-4'>
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6'>
                Services Showcase
              </h1>
              <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>
                Explore our revolutionary technology solutions through
                interactive demonstrations, detailed showcases, and
                comprehensive pricing information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Showcases */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Featured Showcases
              </h2>
              <p className='text-xl text-gray-30o0'>
                Our most innovative and cutting-edge service demonstrations
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Star className='w-12 h-12 text-yellow-40o0' />,
                  title: '20o25 Services Showcase',
                  description:
                    'Current service portfolio with the latest innovations',
                  href: '/services',
                  featured: true,
                  badge: 'Current',
                },
                {
                  icon: <Sparkles className='w-12 h-12 text-purple-40o0' />,
                  title: '20o37 Innovative Services',
                  description:
                    'Future technology preview and upcoming solutions',
                  href: '/20o37-innovative-services-showcase',
                  featured: true,
                  badge: 'Future',
                },
                {
                  icon: <DollarSign className='w-12 h-12 text-green-40o0' />,
                  title: 'Pricing Plans',
                  description: 'Service pricing and comprehensive packages',
                  href: '/pricing',
                  featured: true,
                  badge: 'Pricing',
                },
              ].map((showcase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className='group relative p-8 bg-black/40 border border-gray-80o0 rounded-2xl hover:border-cyan-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5'
                >
                  {showcase.badge && (
                    <div className='absolute top-4 right-4'>
                      <span className='px-3 py-1 text-xs font-semibold bg-cyan-50o0 text-black rounded-full'>
                        {showcase.badge}
                      </span>
                    </div>
                  )}
                  <div className='flex justify-center mb-6'>
                    {showcase.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>
                    {showcase.title}
                  </h3>
                  <p className='text-gray-30o0 mb-6 text-center leading-relaxed'>
                    {showcase.description}
                  </p>
                  <div className='text-center'>
                    <a
                      href={showcase.href}
                      className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 group-hover:scale-10o5'
                    >
                      <span>Explore</span>
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className='py-20 px-4 bg-black/30'>
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Service Categories
              </h2>
              <p className='text-xl text-gray-30o0'>
                Browse our comprehensive range of technology solutions
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Brain className='w-12 h-12 text-cyan-40o0' />,
                  title: 'AI & Consciousness',
                  description:
                    'Advanced AI consciousness solutions and emotional intelligence platforms',
                  href: '/ai-services',
                  services: [
                    'AI Consciousness Evolution',
                    'Emotional Intelligence',
                    'Autonomous Systems',
                  ],
                },
                {
                  icon: <Atom className='w-12 h-12 text-blue-40o0' />,
                  title: 'Quantum Technology',
                  description:
                    'Breakthrough quantum computing and quantum-secure solutions',
                  href: '/quantum-services',
                  services: [
                    'Quantum Computing',
                    'Quantum Security',
                    'Quantum Networks',
                  ],
                },
                {
                  icon: <Cpu className='w-12 h-12 text-purple-40o0' />,
                  title: 'Autonomous Systems',
                  description:
                    'Self-operating intelligent systems and automation platforms',
                  href: '/autonomous-systems',
                  services: [
                    'Business Automation',
                    'DevOps Automation',
                    'Content Generation',
                  ],
                },
                {
                  icon: <Rocket className='w-12 h-12 text-green-40o0' />,
                  title: 'Micro SAAS',
                  description:
                    'Specialized business solutions and innovative applications',
                  href: '/micro-saas',
                  services: [
                    'Business Intelligence',
                    'HR Analytics',
                    'Supply Chain',
                  ],
                },
                {
                  icon: <Building className='w-12 h-12 text-yellow-40o0' />,
                  title: 'Enterprise IT',
                  description:
                    'Corporate infrastructure and enterprise-grade solutions',
                  href: '/enterprise-it',
                  services: [
                    'Cloud Infrastructure',
                    'Security Platforms',
                    'Data Management',
                  ],
                },
                {
                  icon: <Target className='w-12 h-12 text-pink-40o0' />,
                  title: 'Industry Solutions',
                  description:
                    'Specialized solutions for healthcare, finance, and manufacturing',
                  href: '/solutions',
                  services: [
                    'Healthcare AI',
                    'Financial Technology',
                    'Manufacturing AI',
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className='group p-6 bg-black/40 border border-gray-80o0 rounded-2xl hover:border-cyan-50o0/50 transition-all duration-30o0'
                >
                  <div className='flex justify-center mb-4'>
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>
                    {category.title}
                  </h3>
                  <p className='text-gray-30o0 mb-4 text-center leading-relaxed'>
                    {category.description}
                  </p>

                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-cyan-40o0 mb-2'>
                      Key Services:
                    </h4>
                    <ul className='space-y-1'>
                      {category.services.map((service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className='text-gray-30o0 text-sm'
                        >
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='text-center'>
                    <a
                      href={category.href}
                      className='inline-flex items-center space-x-2 px-4 py-2 border border-cyan-50o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-50o0 hover:text-black transition-all duration-30o0'
                    >
                      <span>View Services</span>
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demos */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Interactive Demonstrations
              </h2>
              <p className='text-xl text-gray-30o0'>
                Experience our technology firsthand through live demos and
                simulations
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  icon: <Play className='w-12 h-12 text-cyan-40o0' />,
                  title: 'AI Consciousness Simulator',
                  description:
                    'Experience our AI consciousness evolution platform in action',
                  status: 'Live Demo Available',
                  href: '/ai-consciousness-evolution-platform',
                },
                {
                  icon: <Zap className='w-12 h-12 text-blue-40o0' />,
                  title: 'Quantum Security Demo',
                  description:
                    'See quantum encryption and security in real-time',
                  status: 'Coming Soon',
                  href: '/quantum-cybersecurity-sentinel',
                },
              ].map((demo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  className='p-8 bg-black/40 border border-gray-80o0 rounded-2xl hover:border-cyan-50o0/50 transition-all duration-30o0'
                >
                  <div className='flex justify-center mb-6'>{demo.icon}</div>
                  <h3 className='text-xl font-bold text-white mb-3 text-center'>
                    {demo.title}
                  </h3>
                  <p className='text-gray-30o0 mb-4 text-center leading-relaxed'>
                    {demo.description}
                  </p>

                  <div className='text-center mb-6'>
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        demo.status === 'Live Demo Available'
                          ? 'bg-green-50o0 text-black'
                          : 'bg-yellow-50o0 text-black'
                      }`}
                    >
                      {demo.status}
                    </span>
                  </div>

                  <div className='text-center'>
                    <a
                      href={demo.href}
                      className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0'
                    >
                      <span>Launch Demo</span>
                      <ArrowRight className='w-4 h-4' />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='py-20 px-4 bg-black/30'>
          <div className='container mx-auto max-w-4xl text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Ready to Experience the Future?
              </h2>
              <p className='text-xl text-gray-30o0 mb-8'>
                Explore our revolutionary services, view detailed
                demonstrations, and discover how our technology can transform
                your business.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/services'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'
                >
                  View All Services
                </a>
                <a
                  href='/contact'
                  className='px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 font-semibold rounded-full hover:bg-cyan-50o0 hover:text-black transition-all duration-30o0'
                >
                  Schedule a Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
