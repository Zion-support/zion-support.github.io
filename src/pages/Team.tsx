import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Users, Brain, Shield, Zap, Globe, Award, Star, CheckCircle } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      expertise: 'AI, Quantum Computing, Blockchain',
      description: 'Leading visionary with 15+ years in cutting-edge technology and innovation.',
      achievements: ['PhD in Computer Science', '50+ Patents', 'Industry Leader']
    },
    {
      name: 'Sarah Chen',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning, Neural Networks, AI Ethics',
      description: 'Expert in developing responsible AI solutions for enterprise applications.',
      achievements: ['Stanford PhD', 'AI Ethics Pioneer', 'Research Leader']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Zero Trust, Threat Intelligence, Incident Response',
      description: 'Former government cybersecurity expert with deep knowledge of threat landscapes.',
      achievements: ['CISSP Certified', 'Government Experience', 'Security Expert']
    },
    {
      name: 'Dr. Elena Petrova',
      role: 'Quantum Computing Lead',
      expertise: 'Quantum Algorithms, Quantum Security, Quantum Machine Learning',
      description: 'Leading researcher in quantum computing applications and quantum-safe cryptography.',
      achievements: ['MIT PhD', 'Quantum Research', 'Patent Holder']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in technology.'
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Every solution we build prioritizes security and privacy.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you every step of the way.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We create solutions that make a difference worldwide.'
    }
  ];

  const expertise = [
    'Artificial Intelligence & Machine Learning',
    'Quantum Computing & Cryptography',
    'Blockchain & DeFi Solutions',
    'Cybersecurity & Zero Trust',
    'IoT & Edge Computing',
    'Cloud & DevOps Engineering',
    'Healthcare Technology',
    'Sustainability Solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet our team of technology experts and innovators. Leading the future of AI, quantum computing, blockchain, and cybersecurity solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our team of technology experts and innovators is leading the future 
              of AI, quantum computing, blockchain, and cybersecurity solutions.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Shield className="w-16 h-16 text-blue-500 animate-bounce" />
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and transformation 
              at Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.expertise}</p>
                </div>
                <p className="text-slate-300 mb-6 text-center">{member.description}</p>
                <div className="space-y-2">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our work and define our culture of innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team brings deep expertise across cutting-edge technologies 
              and emerging fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-3">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-white font-medium text-sm">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Ready to work with cutting-edge technology and shape the future? 
              Explore career opportunities at Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
