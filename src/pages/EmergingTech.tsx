import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  Network,
  Eye,
  Satellite,
  Lock,
  Brain,
  Zap,
  TrendingUp,
  ArrowRight,
  Globe,
  Cpu,
  Shield,
  Rocket,
  Sparkles,
} from 'lucide-react';

const emergingTechnologies = [
  {
    title: 'Quantum Computing',
    description:
      'Revolutionary quantum computing solutions for complex problem-solving and optimization',
    icon: Atom,
    path: '/services/quantum-computing',
    features: [
      'Quantum algorithms',
      'Quantum machine learning',
      'Cryptography',
      'Optimization',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'IoT Edge Computing',
    description:
      'Intelligent edge computing solutions for real-time data processing and analytics',
    icon: Network,
    path: '/services/iot-edge-computing',
    features: [
      'Real-time analytics',
      'Edge AI',
      'Device management',
      'Data processing',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Digital Twin',
    description:
      'Virtual replicas of physical systems for simulation, monitoring, and optimization',
    icon: Eye,
    path: '/services/digital-twin',
    features: [
      '3D modeling',
      'Real-time monitoring',
      'Predictive analytics',
      'Simulation',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Space Technology',
    description:
      'Cutting-edge space technology solutions for satellite operations and space exploration',
    icon: Satellite,
    path: '/space-tech',
    features: [
      'Satellite systems',
      'Space analytics',
      'Orbital mechanics',
      'Space data',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Blockchain Solutions',
    description:
      'Secure blockchain technology for decentralized applications and smart contracts',
    icon: Lock,
    path: '/services/blockchain',
    features: [
      'Smart contracts',
      'DeFi solutions',
      'Supply chain',
      'Identity management',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

const benefits = [
  {
    title: 'Future-Proof Technology',
    description:
      'Stay ahead with cutting-edge technologies that define the future of business',
    icon: Rocket,
  },
  {
    title: 'Competitive Advantage',
    description:
      'Gain market leadership through innovative technology adoption',
    icon: TrendingUp,
  },
  {
    title: 'Scalable Solutions',
    description: 'Build solutions that grow with your business needs',
    icon: Zap,
  },
  {
    title: 'Expert Guidance',
    description: 'Access to world-class expertise in emerging technologies',
    icon: Brain,
  },
];

export default function EmergingTech() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      {/* Header */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Emerging Technologies
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Discover the future of technology with our cutting-edge solutions
              in quantum computing, IoT edge computing, digital twins, space
              technology, and blockchain.
            </p>
            <div className='flex items-center justify-center space-x-4'>
              <Link
                to='/contact'
                className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2'
              >
                <span>Get Started</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                to='/services'
                className='px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200'
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {emergingTechnologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className='group relative'
            >
              <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <tech.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>
                  {tech.title}
                </h3>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {tech.description}
                </p>

                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-cyan-400 mb-3'>
                    Key Features:
                  </h4>
                  <div className='grid grid-cols-2 gap-2'>
                    {tech.features.map(feature => (
                      <div
                        key={feature}
                        className='flex items-center space-x-2 text-sm text-gray-300'
                      >
                        <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={tech.path}
                  className='inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium'
                >
                  <span>Learn More</span>
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className='bg-slate-800/30 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Why Choose Emerging Technologies?
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Stay ahead of the curve with our innovative solutions that drive
              business transformation
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <benefit.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {benefit.title}
                </h3>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center'
        >
          <h2 className='text-3xl font-bold text-white mb-4'>
            Ready to Explore the Future?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Let's discuss how emerging technologies can transform your business
            and give you a competitive edge.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Link
              to='/contact'
              className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2'
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className='w-5 h-5' />
            </Link>
            <Link
              to='/sitemap'
              className='px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200'
            >
              Explore All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
