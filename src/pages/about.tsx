import React from 'react';
import { motion   } from 'framer-motion';
import { Link   } from 'react-router-dom';
import { SEO   } from '@/components/SEO';
import { Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Rocket, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Database
  } from 'lucide-react';

export default function About(...args: any[]): any {
  const stats = [
    { number: '500+', label: 'Projects Completed', description: 'Successfully delivered across industries' },
    { number: '50+', label: 'Team Members', description: 'Expert professionals and specialists' },
    { number: '25+', label: 'Countries Served', description: 'Global presence and reach' },
    { number: '99%', label: 'Client Satisfaction', description: 'Consistent high-quality delivery' }
  ];

  const values = [
    {
      icon: Innovation,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Excellence,
      title: 'Excellence in Execution',
      description: 'Every project is delivered with meticulous attention to detail and unwavering commitment to quality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Partnership,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, building long-term relationships based on trust and mutual success.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Security,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Innovation'],
      image: '/images/team/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence.',
      expertise: ['Machine Learning', 'AI Research', 'Technical Architecture'],
      image: '/images/team/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cloud & DevOps',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure'],
      image: '/images/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Director',
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      image: '/images/team/emily-watson.jpg'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology.'
    },
    {
      year: '2020',
      title: 'First AI Product Launch',
      description: 'Successfully launched our flagship AI compliance assistant.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries with 100+ enterprise clients.'
    },
    {
      year: '2024',
      title: 'Quantum Computing Initiative',
      description: 'Launched quantum computing research and development program.'
    },
    {
      year: '2025',
      title: 'AI Ethics Leadership',
      description: 'Recognized as industry leader in responsible AI development.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Zion Tech Group
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          We are a forward-thinking technology comp dedicated to transforming businesses through innovative AI, cloud, and cybersecurity solutions.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-8">
            To democratize cutting-edge technology and make AI, cloud, and cybersecurity solutions accessible to businesses of all sizes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="text-gray-300 space-y-2">
                <p>📞 +1 (302) 464-0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  {[
                    '15+ years of technology innovation experience',
                    'Expert team with advanced degrees and certifications',
                    'Proven track record of successful AI implementations',
                    'Enterprise-grade security and compliance standards',
                    '24/7 support and dedicated account management',
                    'Continuous innovation and R&D investment'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Delivering measurable results and driving innovation across industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-8">
            {stats.map((stat, index)   => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index)   => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving innovation and delivering exceptional results
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index)   => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                  <p className="text-slate-300 text-center mb-4 text-sm">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones that have shaped our company and driven our growth
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;