import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  Network, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  BarChart3, 
  Users, 
  Target,
  Star,
  Building,
  Activity,
  Eye,
  Lock,
  TrendingUp,
  Heart,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Equipment() {
  const equipmentCategories = [
    {
      icon: Server,
      title: 'Server Infrastructure',
      description: 'Enterprise-grade servers and data center equipment for high-performance computing.',
      services: ['Rack servers', 'Blade servers', 'Storage arrays', 'Network switches', 'UPS systems']
    },
    {
      icon: Cpu,
      title: 'Computing Hardware',
      description: 'Advanced computing solutions for AI, machine learning, and data processing.',
      services: ['Workstations', 'GPU clusters', 'Quantum computers', 'Edge devices', 'IoT hardware']
    },
    {
      icon: Network,
      title: 'Network Equipment',
      description: 'High-speed networking infrastructure for seamless connectivity.',
      services: ['Routers', 'Switches', 'Firewalls', 'Load balancers', 'Wireless systems']
    },
    {
      icon: Shield,
      title: 'Security Hardware',
      description: 'Physical and digital security equipment for comprehensive protection.',
      services: ['Hardware security modules', 'Biometric systems', 'Surveillance equipment', 'Access control', 'Encryption devices']
    }
  ];

  const solutions = [
    {
      category: 'Data Center Solutions',
      items: [
        'High-density server racks',
        'Cooling and power management',
        'Storage area networks',
        'Backup and disaster recovery',
        'Monitoring and management'
      ]
    },
    {
      category: 'Edge Computing',
      items: [
        'Edge servers and gateways',
        'IoT device management',
        'Real-time processing',
        'Local data storage',
        'Network optimization'
      ]
    },
    {
      category: 'AI & ML Infrastructure',
      items: [
        'GPU computing clusters',
        'Tensor processing units',
        'High-speed interconnects',
        'Memory optimization',
        'Scalable architectures'
      ]
    },
    {
      category: 'Green Technology',
      items: [
        'Energy-efficient hardware',
        'Renewable power systems',
        'Heat recovery solutions',
        'Sustainable materials',
        'Carbon footprint reduction'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Hardware specifically designed and configured for maximum performance.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security features and compliance certifications.'
    },
    {
      icon: Brain,
      title: 'AI-Ready Infrastructure',
      description: 'Hardware optimized for artificial intelligence and machine learning workloads.'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support and maintenance services worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Equipment & Hardware Services | Zion Tech Group" 
        description="Comprehensive equipment and hardware solutions including server infrastructure, computing hardware, network equipment, and security hardware." 
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-400 rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-6">
              Equipment & Hardware
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              State-of-the-art hardware solutions and equipment for modern enterprises, 
              from server infrastructure to AI-ready computing clusters.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-400/30 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Hardware Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive hardware solutions designed for performance, reliability, and scalability 
              to meet the demands of modern enterprise environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-slate-300 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <Star className="w-4 h-4 text-green-400 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Specialized Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored hardware solutions for specific industry needs and use cases, 
              ensuring optimal performance and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 text-green-400 mr-3" />
                  {solution.category}
                </h3>
                <ul className="space-y-3">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Hardware?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our hardware solutions deliver exceptional performance, reliability, and value 
              to help your organization achieve its technology goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-400/30 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Upgrade Your Hardware?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Partner with Zion Tech Group to access cutting-edge hardware solutions 
                and optimize your technology infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-400/30 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900/50">
        <div className="container-responsive">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Our Hardware Team</h3>
            <p className="text-slate-300 mb-6">
              Ready to explore our hardware solutions? Get in touch with our equipment specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-400 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}