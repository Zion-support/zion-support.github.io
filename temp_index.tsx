import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Cloud,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Award,
} from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' },
];

const services = [
  {
    title: 'AI Services',
    description:
      '120+ cutting-edge AI solutions including quantum AI, drug discovery, space mission planning, and autonomous systems',
    icon: Brain,
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    count: '120+',
    popular: true,
  },
  {
    title: 'IT Services',
    description:
      '85+ comprehensive IT solutions from quantum security to autonomous infrastructure monitoring',
    icon: Network,
    link: '/it-services',
    color: 'from-green-500 to-blue-600',
    count: '85+',
    popular: true,
  },
  {
    title: 'Micro SAAS',
    description:
      '100+ innovative micro software solutions for modern businesses across all industries',
    icon: Cloud,
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600',
    count: '100+',
    popular: true,
  },
  {
    title: 'Quantum Computing',
    description:
      'Revolutionary quantum solutions for optimization, encryption, and complex problem solving',
    icon: Cpu,
    link: '/quantum-computing',
    color: 'from-indigo-500 to-cyan-600',
    count: '25+',
    popular: false,
  },
  {
    title: 'Blockchain Solutions',
    description:
      'Decentralized solutions with smart contracts, DeFi, and identity management',
    icon: Shield,
    link: '/blockchain',
    color: 'from-orange-500 to-red-600',
    count: '30+',
    popular: false,
  },
  {
    title: 'IoT & Edge Computing',
    description:
      'Connected devices, edge AI, and real-time analytics for smart operations',
    icon: Globe,
    link: '/iot',
    color: 'from-teal-500 to-green-600',
    count: '40+',
    popular: false,
  },
];

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times',
    icon: Zap,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee',
    icon: Shield,
  },
  {
    title: 'Global Reach',
    description: 'Serving clients worldwide with local support',
    icon: Globe,
  },
  {
    title: 'Award Winning',
    description: 'Recognized for excellence in technology innovation',
    icon: Award,
  },
];

export default function HomePage() {
  return (
    <Layout
      title='Zion Tech Group - Leading Technology Solutions'
      description='Transform your business with our comprehensive AI services, IT solutions, and micro SAAS platforms. Expert technology solutions for modern businesses.'
      keywords='AI services, IT solutions, micro SAAS, technology, innovation, business transformation'
    >
      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <section className='relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
            <div className='absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
            <div className='absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
          </div>

          <div className='container mx-auto px-4 relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Transform Your Business with{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                  AI & Technology
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
                Leading provider of innovative AI services, IT solutions, and
                micro SAAS platforms. Empowering businesses to thrive in the
                digital age.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center'
                >
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
                <Link
                  href='/services'
                  className='px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold'
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 font-medium'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Our Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive technology solutions designed to accelerate your
                business growth and innovation.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group relative'
                >
                  {service.popular && (
                    <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                      Popular
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {service.title}
                    </h3>
                    <span className='text-2xl font-bold text-blue-600'>
                      {service.count}
                    </span>
                  </div>
                  <p className='text-gray-600 mb-6'>{service.description}</p>
                  <Link
                    href={service.link}
                    className='inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300'
                  >
                    Explore Services
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                We deliver exceptional results through innovation, expertise,
                and unwavering commitment to your success.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <feature.icon className='w-8 h-8 text-blue-600' />
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Featured Innovation Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover our most cutting-edge solutions that are transforming
                industries worldwide.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'AI Drug Discovery Platform',
                  description:
                    'Revolutionary AI accelerating pharmaceutical research with 70% faster drug discovery',
                  price: 'Starting at $15,000/month',
                  category: 'Healthcare AI',
                  icon: '🧬',
                  link: '/ai-services',
                },
                {
                  title: 'Quantum AI Optimization',
                  description:
                    'Solve complex problems 1000x faster with quantum-enhanced machine learning',
                  price: 'Starting at $12,000/month',
                  category: 'Quantum AI',
                  icon: '⚛️',
                  link: '/ai-services',
                },
                {
                  title: 'Autonomous Trading System',
                  description:
                    'Fully automated AI trading with 25-40% annual returns and 24/7 operation',
                  price: 'Starting at $20,000/month',
                  category: 'FinTech AI',
                  icon: '📈',
                  link: '/ai-services',
                },
                {
                  title: 'Space Mission Planning AI',
                  description:
                    'Advanced AI for space exploration with 50% cost reduction and 35% success improvement',
                  price: 'Starting at $25,000/month',
                  category: 'Space AI',
                  icon: '🚀',
                  link: '/ai-services',
                },
                {
                  title: 'Smart City Management',
                  description:
                    'Comprehensive AI platform reducing traffic by 40% and energy consumption by 25%',
                  price: 'Starting at $10,000/month',
                  category: 'Smart City AI',
                  icon: '🏙️',
                  link: '/ai-services',
                },
                {
                  title: 'AI Content Creation Studio',
                  description:
                    'Automated content production with 90% time savings and 500% output increase',
                  price: 'Starting at $4,500/month',
                  category: 'Content AI',
                  icon: '🎬',
                  link: '/ai-services',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group'
                >
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <div className='text-sm text-blue-600 font-semibold mb-2'>
                    {service.category}
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{service.description}</p>
                  <div className='text-lg font-bold text-green-600 mb-4'>
                    {service.price}
                  </div>
                  <Link
                    href={service.link}
                    className='inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300'
                  >
                    Learn More
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl mb-8 max-w-2xl mx-auto'>
                Join 500+ companies already using our innovative solutions.
                Let's discuss how we can help you achieve your goals and drive
                growth.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center'
                >
                  <ArrowRight className='w-5 h-5 mr-2' />
                  Get Started Today
                </Link>
                <a
                  href='tel:+13024640950'
                  className='px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold'
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className='mt-8 text-blue-200'>
                <p>
                  📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008,
                  Middletown DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
