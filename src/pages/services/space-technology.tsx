import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Zap,
  Brain,
  Cpu,
  Database,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Network,
  Eye,
  Heart,
  DollarSign,
  Building,
  Shield,
  Lock,
  Satellite,
  Planet,
  Telescope,
  Orbit,
  Signal,
  Antenna
} from 'lucide-react';

const SpaceTechnologyPage = () => {
  const spaceServices = [
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Advanced satellite design, development, and deployment for communication and observation.',
      features: ['Satellite Design', 'Launch Coordination', 'Orbital Mechanics', 'Ground Station Integration'],
      href: '/services/satellite-technology'
    },
    {
      icon: Signal,
      title: 'Space Communications',
      description: 'Reliable communication systems for space missions and satellite operations.',
      features: ['Deep Space Communication', 'Satellite Networks', 'Ground Stations', 'Signal Processing'],
      href: '/services/space-communications'
    },
    {
      icon: Telescope,
      title: 'Space Observation',
      description: 'Advanced observation and monitoring systems for space exploration and Earth observation.',
      features: ['Remote Sensing', 'Earth Observation', 'Space Monitoring', 'Data Collection'],
      href: '/services/space-observation'
    },
    {
      icon: Brain,
      title: 'AI in Space',
      description: 'Artificial intelligence solutions for autonomous space operations and data analysis.',
      features: ['Autonomous Navigation', 'AI Data Analysis', 'Predictive Maintenance', 'Mission Planning'],
      href: '/services/ai-in-space'
    },
    {
      icon: Shield,
      title: 'Space Security',
      description: 'Cybersecurity and protection systems for space infrastructure and communications.',
      features: ['Signal Encryption', 'Threat Detection', 'Secure Communications', 'Infrastructure Protection'],
      href: '/services/space-security'
    },
    {
      icon: Database,
      title: 'Space Data Analytics',
      description: 'Advanced analytics and insights from space data for research and commercial applications.',
      features: ['Data Processing', 'Pattern Recognition', 'Predictive Modeling', 'Research Support'],
      href: '/services/space-data-analytics'
    }
  ];

  const spaceCapabilities = [
    {
      icon: Rocket,
      title: 'Launch Services',
      description: 'Coordination and support for satellite launches and space missions.'
    },
    {
      icon: Orbit,
      title: 'Orbital Mechanics',
      description: 'Expertise in orbital dynamics and mission trajectory planning.'
    },
    {
      icon: Antenna,
      title: 'Ground Systems',
      description: 'Design and operation of ground stations and communication infrastructure.'
    },
    {
      icon: Code,
      title: 'Space Software',
      description: 'Development of software systems for space operations and satellite control.'
    },
    {
      icon: Network,
      title: 'Space Networks',
      description: 'Design and implementation of space-based communication networks.'
    },
    {
      icon: Eye,
      title: 'Remote Sensing',
      description: 'Advanced sensing and imaging technologies for space applications.'
    }
  ];

  const benefits = [
    'Access to global communication networks',
    'Advanced Earth observation capabilities',
    'Innovation in space technology',
    'Commercial space opportunities',
    'Research and development advancement',
    'Strategic space infrastructure'
  ];

  const applications = [
    {
      category: 'Communication',
      services: ['Global Internet Coverage', 'Satellite TV & Radio', 'Emergency Communications', 'Military Communications']
    },
    {
      category: 'Navigation',
      services: ['GPS & GNSS Systems', 'Precision Navigation', 'Autonomous Vehicles', 'Maritime Navigation']
    },
    {
      category: 'Earth Observation',
      services: ['Climate Monitoring', 'Agriculture Monitoring', 'Disaster Response', 'Urban Planning']
    },
    {
      category: 'Research',
      services: ['Astronomy Research', 'Space Science', 'Technology Development', 'Educational Programs']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Space Technology
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                {' '}Solutions{' '}
              </span>
              for the Future
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore the final frontier with our cutting-edge space technology solutions. 
              From satellite communications to space exploration, we're pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Space Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From satellite design to space communications, we provide comprehensive space technology solutions 
              that enable exploration and innovation beyond Earth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Capabilities */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans the full spectrum of space technology, from ground systems 
              to satellite operations and space communications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Space technology has countless applications that benefit humanity. 
              Discover how our solutions can serve your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Planet className="w-6 h-6 text-purple-400" />
                  <span>{app.category}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {app.services.map((service) => (
                    <div key={service} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Space Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Space technology solutions offer unique capabilities that are simply impossible 
                with terrestrial technologies alone. We're opening new frontiers of possibility.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Star className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-8 border border-purple-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Space Innovation
                  </h3>
                  <div className="space-y-4 text-center">
                    <div className="text-3xl font-bold text-purple-400">∞</div>
                    <div className="text-gray-300">Unlimited possibilities</div>
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-gray-300">Future-focused technology</div>
                    <div className="text-3xl font-bold text-purple-400">Global</div>
                    <div className="text-gray-300">Worldwide coverage</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Space technology is not just science fiction—it's the future of innovation. 
              Let's discuss how space solutions can transform your business and open new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Space Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechnologyPage;