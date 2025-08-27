import React from 'react';
import { motion } from 'framer-motion';
import { Users, Linkedin, Github, Mail, Globe, Star, Award, Zap, Brain, Shield, Cloud, Database } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in technology innovation and business strategy. Former CTO at Fortune 500 companies.',
      image: 'https://via.placeholder.com/300x300/6366f1/ffffff?text=SC',
      expertise: ['AI & Machine Learning', 'Strategic Planning', 'Digital Transformation'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        github: 'https://github.com/sarahchen',
        email: 'sarah@ziontechgroup.com'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Technology expert specializing in cloud architecture, cybersecurity, and emerging technologies. Led teams at Google and Microsoft.',
      image: 'https://via.placeholder.com/300x300/059669/ffffff?text=MR',
      expertise: ['Cloud Architecture', 'Cybersecurity', 'Emerging Tech'],
      social: {
        linkedin: 'https://linkedin.com/in/marcusrodriguez',
        github: 'https://github.com/marcusrodriguez',
        email: 'marcus@ziontechgroup.com'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Research Officer',
      bio: 'Leading researcher in quantum computing and AI. PhD from MIT with 50+ published papers and 20+ patents.',
      image: 'https://via.placeholder.com/300x300/dc2626/ffffff?text=EW',
      expertise: ['Quantum Computing', 'AI Research', 'Machine Learning'],
      social: {
        linkedin: 'https://linkedin.com/in/emilywatson',
        github: 'https://github.com/emilywatson',
        email: 'emily@ziontechgroup.com'
      }
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      bio: 'Full-stack engineering leader with expertise in scalable systems and team management. Built products used by millions.',
      image: 'https://via.placeholder.com/300x300/ea580c/ffffff?text=AT',
      expertise: ['Full-Stack Development', 'System Architecture', 'Team Leadership'],
      social: {
        linkedin: 'https://linkedin.com/in/alexthompson',
        github: 'https://github.com/alexthompson',
        email: 'alex@ziontechgroup.com'
      }
    },
    {
      name: 'Priya Patel',
      role: 'VP of Product',
      bio: 'Product strategist with deep understanding of user experience and market dynamics. Successfully launched 10+ products.',
      image: 'https://via.placeholder.com/300x300/7c3aed/ffffff?text=PP',
      expertise: ['Product Strategy', 'User Experience', 'Market Analysis'],
      social: {
        linkedin: 'https://linkedin.com/in/priyapatel',
        github: 'https://github.com/priyapatel',
        email: 'priya@ziontechgroup.com'
      }
    },
    {
      name: 'David Kim',
      role: 'VP of Sales & Partnerships',
      bio: 'Sales leader with proven track record in enterprise sales and strategic partnerships. Generated $100M+ in revenue.',
      image: 'https://via.placeholder.com/300x300/0891b2/ffffff?text=DK',
      expertise: ['Enterprise Sales', 'Strategic Partnerships', 'Business Development'],
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        github: 'https://github.com/davidkim',
        email: 'david@ziontechgroup.com'
      }
    }
  ];

  const stats = [
    { icon: Users, value: '150+', label: 'Team Members' },
    { icon: Star, value: '25+', label: 'Years Combined Experience' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Zap, value: '100+', label: 'Successful Projects' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security and privacy are at the core of everything we build and deliver.'
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: 'We design systems that grow with your business and adapt to changing needs.'
    },
    {
      icon: Database,
      title: 'Data-Driven',
      description: 'Every decision is backed by data and analytics for optimal results.'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet the Minds Behind
              <span className="text-gradient"> Innovation</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              business, and innovation to deliver exceptional solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Meet the executives driving our mission and vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-zion-cyan font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/10 rounded-lg text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Ready to work with brilliant minds and build the future of technology?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
                  Contact HR Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
