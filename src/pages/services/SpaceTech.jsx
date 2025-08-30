import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from "../../components/SEO";
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  Shield, 
  Brain,
  CheckCircle,
  Users,
  Database,
  Network,
  Cpu,
  Orbit
} from 'lucide-react';

export default function SpaceTech() {
  const services = [
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Advanced satellite systems for communication, navigation, and Earth observation',
      features: ['Communication satellites', 'GPS and navigation systems', 'Earth observation platforms', 'Weather monitoring']
    },
    {
      icon: Rocket,
      title: 'Launch Systems',
      description: 'Innovative launch vehicle technology and space transportation solutions',
      features: ['Reusable launch vehicles', 'Small satellite launchers', 'Space tourism platforms', 'Cargo delivery systems']
    },
    {
      icon: Globe,
      title: 'Earth Observation',
      description: 'Comprehensive Earth monitoring and environmental analysis systems',
      features: ['Climate change monitoring', 'Natural disaster detection', 'Agricultural monitoring', 'Urban planning data']
    },
    {
      icon: Network,
      title: 'Space Communications',
      description: 'Next-generation space-based communication networks and infrastructure',
      features: ['Global internet coverage', 'Low-latency communications', 'Emergency communications', 'IoT connectivity']
    },
    {
      icon: Database,
      title: 'Space Data Analytics',
      description: 'Advanced analytics and AI for space data processing and insights',
      features: ['Satellite imagery analysis', 'Predictive modeling', 'Real-time monitoring', 'Data visualization']
    },
    {
      icon: Shield,
      title: 'Space Security',
      description: 'Cybersecurity and protection systems for space infrastructure',
      features: ['Satellite cybersecurity', 'Signal protection', 'Anti-jamming systems', 'Threat detection']
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence for autonomous space operations and data analysis'
    },
    {
      icon: Orbit,
      title: 'Orbital Mechanics',
      description: 'Advanced orbital calculations and trajectory optimization'
    },
    {
      icon: Zap,
      title: 'Propulsion Systems',
      description: 'Next-generation propulsion technologies for space exploration'
    },
    {
      icon: Brain,
      title: 'Autonomous Systems',
      description: 'Self-operating space systems with minimal human intervention'
    }
  ];

  const applications = [
    {
      icon: Users,
      title: 'Commercial Space',
      description: 'Space tourism, mining, and commercial satellite services'
    },
    {
      icon: Globe,
      title: 'Scientific Research',
      description: 'Space exploration, astronomy, and scientific missions'
    },
    {
      icon: Shield,
      title: 'Defense & Security',
      description: 'National security, surveillance, and defense applications'
    },
    {
      icon: Database,
      title: 'Environmental Monitoring',
      description: 'Climate research, pollution tracking, and ecosystem monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Space Technology Services - Zion Tech Group"
        description="Advanced space technology solutions including satellite systems, launch vehicles, Earth observation, and space communications. Cutting-edge space innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Space Technology
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Pioneering the future of space exploration and technology. From satellite systems 
              to launch vehicles, we're advancing humanity's presence in space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Space Solutions
              </a>
              <a
                href="/services-overview"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive space technology solutions covering all aspects of space operations, 
              from launch to data analysis and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Leveraging the latest advancements in AI, propulsion, and autonomous systems 
              to push the boundaries of space technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-slate-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our space technology solutions serve diverse industries and applications, 
              from commercial ventures to scientific research and national security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-slate-300">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore Space Technology?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Join us in advancing humanity's presence in space with cutting-edge 
              technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Space Journey
              </a>
              <a
                href="/services-overview"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Discover More Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
