import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Brain,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  RefreshCw,
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  Satellite,
  Telescope,
  Planet,
  Moon,
  Sun,
  Orbit
} from 'lucide-react';

export default function SpaceTechnologyPage() {
  const spaceServices = [
    {
      title: 'Satellite Technology',
      description: 'Advanced satellite systems for communication and observation',
      icon: Satellite,
      href: '/services/satellite-technology',
      features: ['Communication Satellites', 'Earth Observation', 'Navigation Systems', 'Space Weather'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Space Data Analytics',
      description: 'Analyze space data for scientific and commercial applications',
      icon: BarChart3,
      href: '/services/space-data-analytics',
      features: ['Remote Sensing', 'Climate Monitoring', 'Agricultural Insights', 'Urban Planning'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Space Communications',
      description: 'Secure and reliable space communication systems',
      icon: Network,
      href: '/services/space-communications',
      features: ['Deep Space Networks', 'Satellite Communications', 'Interplanetary Links', 'Ground Stations'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Space Robotics',
      description: 'Autonomous robots for space exploration and operations',
      icon: Cpu,
      href: '/services/space-robotics',
      features: ['Rover Systems', 'Space Station Robots', 'Autonomous Navigation', 'Remote Operations'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Space AI & ML',
      description: 'Artificial intelligence for space exploration and analysis',
      icon: Brain,
      href: '/services/space-ai-ml',
      features: ['Autonomous Navigation', 'Data Analysis', 'Mission Planning', 'Anomaly Detection'],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Space Security',
      description: 'Protect space assets and communications',
      icon: Shield,
      href: '/services/space-security',
      features: ['Cybersecurity', 'Jamming Protection', 'Signal Encryption', 'Threat Detection'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const spaceCapabilities = [
    {
      title: 'Space Exploration',
      description: 'Advanced technologies for exploring the cosmos',
      icon: Telescope,
      features: ['Planetary Missions', 'Deep Space Probes', 'Astronomical Observations', 'Space Telescopes']
    },
    {
      title: 'Earth Observation',
      description: 'Monitor and analyze Earth from space',
      icon: Globe,
      features: ['Climate Monitoring', 'Disaster Response', 'Resource Management', 'Environmental Protection']
    },
    {
      title: 'Space Infrastructure',
      description: 'Build and maintain space-based systems',
      icon: Satellite,
      features: ['Space Stations', 'Satellite Constellations', 'Orbital Debris Management', 'Space Manufacturing']
    },
    {
      title: 'Space Transportation',
      description: 'Innovative propulsion and launch systems',
      icon: Rocket,
      features: ['Reusable Rockets', 'Electric Propulsion', 'Space Tugs', 'Interplanetary Travel']
    }
  ];

  const applications = [
    { name: 'Telecommunications', icon: Network, description: 'Global communication networks' },
    { name: 'Navigation', icon: Target, description: 'GPS and positioning systems' },
    { name: 'Weather Forecasting', icon: Cloud, description: 'Climate and weather monitoring' },
    { name: 'Agriculture', icon: Globe, description: 'Precision farming and crop monitoring' },
    { name: 'Defense', icon: Shield, description: 'National security and surveillance' },
    { name: 'Scientific Research', icon: Telescope, description: 'Astronomy and space science' }
  ];

  const technologies = [
    { name: 'Quantum Computing', icon: Brain, description: 'Advanced computational power' },
    { name: 'AI & Machine Learning', icon: TrendingUp, description: 'Intelligent space systems' },
    { name: 'Advanced Materials', icon: Layers, description: 'Lightweight and durable materials' },
    { name: 'Nuclear Power', icon: Zap, description: 'Long-duration power sources' },
    { name: '3D Printing', icon: RefreshCw, description: 'In-space manufacturing' },
    { name: 'Quantum Communications', icon: Lock, description: 'Secure space communications' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneer the future of space exploration with cutting-edge technologies that push the boundaries 
              of what's possible beyond Earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Space Technology Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive space technology solutions designed to advance humanity's presence in space.
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Space Technology Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive capabilities across all aspects of space technology and exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaceCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Space Technology Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world applications of space technology that benefit humanity on Earth and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{application.name}</h3>
                <p className="text-gray-400 text-sm">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enabling Technologies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies that power our space technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Missions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Space Mission Types</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diverse mission types that advance our understanding of space and benefit humanity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { name: 'Earth Orbit', icon: Globe, description: 'Low Earth orbit missions' },
              { name: 'Lunar', icon: Moon, description: 'Moon exploration and research' },
              { name: 'Planetary', icon: Planet, description: 'Solar system exploration' },
              { name: 'Deep Space', icon: Star, description: 'Interstellar missions' }
            ].map((mission, index) => (
              <motion.div
                key={mission.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <mission.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{mission.name}</h3>
                <p className="text-gray-400 text-sm">{mission.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-indigo-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits of Space Technology</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform our world with space technology innovations and discoveries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  'Advance scientific knowledge and discovery',
                  'Improve life on Earth through space applications',
                  'Enable new commercial opportunities and industries',
                  'Enhance national security and defense capabilities',
                  'Inspire future generations of scientists and engineers',
                  'Drive technological innovation and advancement'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Space Technology Impact</h3>
              <div className="space-y-4">
                {[
                  { metric: '1000+', label: 'Satellites', description: 'Active satellites in orbit' },
                  { metric: '50+', label: 'Countries', description: 'Participating in space programs' },
                  { metric: '$400B+', label: 'Industry Value', description: 'Global space economy' },
                  { metric: '100M+', label: 'Jobs', description: 'Created by space technology' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-400 mb-1">{item.metric}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how space technology can advance your mission and push the boundaries of exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}