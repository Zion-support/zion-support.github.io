import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  Users,
  Target,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

export default function AboutStoryPage() {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology solutions',
      icon: Rocket
    },
    {
      year: '2019',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business intelligence platform',
      icon: Brain
    },
    {
      year: '2020',
      title: 'Quantum Computing',
      description: 'Pioneered quantum computing solutions for enterprise clients',
      icon: Zap
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries',
      icon: Globe
    },
    {
      year: '2022',
      title: 'Space Technology',
      description: 'Entered the space technology sector with innovative solutions',
      icon: Star
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as a leader in AI, quantum computing, and space technology',
      icon: Award
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible in technology',
      icon: Rocket
    },
    {
      title: 'Excellence',
      description: 'Delivering the highest quality solutions and service',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical practices',
      icon: Shield
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From humble beginnings to global innovation leader - discover the journey that shaped Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about/team"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Meet Our Team
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/careers"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                Join Us
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                To empower organizations with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in an increasingly digital world.
              </p>
              <div className="space-y-4">
                {[
                  'Transform businesses through AI and quantum computing',
                  'Advance space technology for humanity\'s benefit',
                  'Deliver secure, scalable, and innovative solutions',
                  'Foster a culture of continuous learning and improvement'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
            >
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 mb-6">
                To be the global leader in next-generation technology solutions, 
                pioneering breakthroughs that shape the future of business and society.
              </p>
              <div className="space-y-4">
                {[
                  'Lead the AI and quantum computing revolution',
                  'Pioneer space technology innovations',
                  'Create sustainable technology solutions',
                  'Build a better future through technology'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones that mark our path from startup to industry leader.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-indigo-400 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-gray-400 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The core principles that guide everything we do at Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in shaping the future of technology and making a difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Join Our Team
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                Get in Touch
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}