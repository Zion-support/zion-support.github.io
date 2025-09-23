import { motion } from 'framer-motion';
import {
  Atom,
  Cpu,
  Brain,
  Zap,
  Shield,
  Globe,
  Rocket,
  Target,
} from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumComputing() {
  const services = [
    {
      icon: <Atom className='w-12 h-12 text-cyan-40o0' />,
      title: 'Quantum AI Hybrid Computing',
      description: 'Revolutionary hybrid quantum-classical computing platform',
      href: '/ai-quantum-hybrid-computing',
    },
    {
      icon: <Brain className='w-12 h-12 text-blue-40o0' />,
      title: 'Quantum Brain-Computer Interface',
      description: 'Next-generation quantum-enhanced neural interfaces',
      href: '/quantum-ai-brain-computer-interface',
    },
    {
      icon: <Zap className='w-12 h-12 text-purple-40o0' />,
      title: 'Quantum Energy Platform',
      description: 'Quantum computing solutions for energy optimization',
      href: '/quantum-energy-platform',
    },
    {
      icon: <Shield className='w-12 h-12 text-green-40o0' />,
      title: 'Quantum Cybersecurity',
      description: 'Unbreakable quantum encryption and security protocols',
      href: '/quantum-cybersecurity-platform',
    },
    {
      icon: <Globe className='w-12 h-12 text-yellow-40o0' />,
      title: 'Quantum IoT Platform',
      description: 'Quantum-enhanced Internet of Things infrastructure',
      href: '/quantum-iot-platform',
    },
    {
      icon: <Rocket className='w-12 h-12 text-pink-40o0' />,
      title: 'Quantum Financial Trading',
      description: 'Quantum algorithms for financial market optimization',
      href: '/quantum-financial-trading-platform',
    },
  ];

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
                Quantum Computing Solutions
              </h1>
              <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>
                Pioneering the quantum revolution with cutting-edge quantum
                computing platforms, quantum AI hybrids, and quantum-enhanced
                solutions that solve previously impossible problems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-6xl'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className='p-8 bg-black/40 border border-gray-80o0 rounded-2xl hover:border-cyan-50o0/50 transition-all duration-30o0 group cursor-pointer'
                  onClick={() => (window.location.href = service.href)}
                >
                  <div className='flex justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0'>
                    {service.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4 text-center'>
                    {service.title}
                  </h3>
                  <p className='text-gray-30o0 leading-relaxed text-center'>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-4xl text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Ready for the Quantum Future?
              </h2>
              <p className='text-xl text-gray-30o0 mb-8'>
                Experience the power of quantum computing and transform your
                business with our cutting-edge solutions.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'
                >
                  Get Started Today
                </a>
                <a
                  href='/services'
                  className='px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 font-semibold rounded-full hover:bg-cyan-50o0 hover:text-black transition-all duration-30o0'
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
