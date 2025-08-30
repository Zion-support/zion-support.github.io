import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  BarChart3, 
  Users, 
  Target,
  Star,
  Atom,
  Network,
  Eye,
  Cpu,
  Lock,
  TrendingUp,
  Heart,
  Building,
  Activity,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function SpaceTechnology() {
  const features = [
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Advanced satellite systems for communication, navigation, and Earth observation.',
      benefits: ['Global connectivity', 'Real-time data collection', 'Navigation systems', 'Environmental monitoring']
    },
    {
      icon: Rocket,
      title: 'Launch Systems',
      description: 'Innovative launch vehicle technology and space transportation solutions.',
      benefits: ['Cost-effective launches', 'Reusable systems', 'Payload optimization', 'Mission planning']
    },
    {
      icon: Brain,
      title: 'AI Space Operations',
      description: 'Artificial intelligence for autonomous space missions and operations.',
      benefits: ['Autonomous navigation', 'Predictive maintenance', 'Mission optimization', 'Risk assessment']
    },
    {
      icon: Network,
      title: 'Space Communications',
      description: 'Advanced communication networks for space missions and ground control.',
      benefits: ['High-bandwidth links', 'Low-latency communication', 'Global coverage', 'Secure transmission']
    }
  ];

  const applications = [
    {
      category: 'Commercial Space',
      services: [
        'Satellite internet and communications',
        'Earth observation and imaging',
        'Space tourism infrastructure',
        'Commercial launch services'
      ]
    },
    {
      category: 'Scientific Research',
      services: [
        'Space exploration missions',
        'Astronomical observations',
        'Climate and environmental research',
        'Planetary science missions'
      ]
    },
    {
      category: 'Defense & Security',
      services: [
        'Space situational awareness',
        'Satellite defense systems',
        'Intelligence gathering',
        'Strategic communications'
      ]
    },
    {
      category: 'Infrastructure',
      services: [
        'Space station development',
        'Lunar and Mars bases',
        'Space manufacturing',
        'Resource utilization'
      ]
    }
  ];

  const technologies = [
    {
      name: 'Quantum Computing in Space',
      description: 'Leveraging quantum computing for complex space calculations and simulations.',
      icon: Atom
    },
    {
      name: 'AI-Powered Mission Control',
      description: 'Intelligent systems for autonomous space mission management.',
      icon: Brain
    },
    {
      name: 'Advanced Propulsion',
      description: 'Next-generation propulsion systems for efficient space travel.',
      icon: Rocket
    },
    {
      name: 'Space Cybersecurity',
      description: 'Protecting space assets from cyber threats and attacks.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Space Technology Services | Zion Tech Group" 
        description="Revolutionary space technology solutions including satellite systems, launch vehicles, AI-powered operations, and advanced space communications." 
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Space Technology
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of space exploration with cutting-edge technology, AI-powered operations, 
              and revolutionary space infrastructure solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Space Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive space technology portfolio combines cutting-edge innovation with proven expertise 
              to deliver next-generation space capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <Star className="w-4 h-4 text-blue-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Space Applications</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From commercial space ventures to scientific research and defense applications, 
              our space technology solutions serve diverse mission requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 text-blue-400 mr-3" />
                  {app.category}
                </h3>
                <ul className="space-y-3">
                  {app.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technologies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our space technology solutions leverage the latest advancements in AI, quantum computing, 
              and cybersecurity to deliver unprecedented capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <tech.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-slate-300">{tech.description}</p>
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
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-400/30 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Space Mission?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Partner with Zion Tech Group to access cutting-edge space technology solutions 
                and turn your space ambitions into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-400/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 transition-all duration-300"
                >
                  Learn More
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
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Our Space Technology Team</h3>
            <p className="text-slate-300 mb-6">
              Ready to explore the final frontier? Get in touch with our space technology experts.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}