import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket,
  Users,
  Award,
  Star,
  Zap,
  Heart,
  ArrowRight
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation. Passionate about democratizing access to advanced AI and quantum technologies.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Innovation', 'Team Leadership'],
      image: '/team/kleber-santos.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/klebersantos',
        twitter: 'https://twitter.com/klebersantos',
        website: 'https://klebersantos.com'
      },
      featured: true
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with expertise in machine learning, neural networks, and autonomous systems. PhD in Computer Science from MIT.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Research', 'Data Science'],
      image: '/team/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        website: 'https://sarahchen.ai'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      bio: 'Technology architect with deep expertise in cloud infrastructure, DevOps, and scalable systems. Former senior engineer at major tech companies.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design', 'Infrastructure'],
      image: '/team/marcus-johnson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/marcusjohnson',
        twitter: 'https://twitter.com/marcusjohnson'
      }
    },
    {
      name: 'Alex Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in threat detection, compliance, and security architecture.',
      expertise: ['Cybersecurity', 'Threat Detection', 'Compliance', 'Security Architecture'],
      image: '/team/alex-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexrodriguez',
        website: 'https://alexrodriguez.security'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Quantum Computing Lead',
      bio: 'Quantum physicist and researcher specializing in quantum algorithms and quantum machine learning. PhD from Stanford University.',
      expertise: ['Quantum Computing', 'Quantum Algorithms', 'Quantum ML', 'Physics Research'],
      image: '/team/emily-watson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emilywatson',
        website: 'https://emilywatson.quantum'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      bio: 'Product strategist with experience building user-centric AI solutions. Focuses on creating intuitive interfaces for complex technologies.',
      expertise: ['Product Strategy', 'User Experience', 'AI Products', 'Product Management'],
      image: '/team/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim'
      }
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with technology.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by yours.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We build secure, reliable solutions you can trust with your business.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We prepare you for tomorrow\'s challenges with today\'s solutions.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: Star },
    { number: '99%', label: 'Client Satisfaction', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the brilliant minds behind Zion Tech Group's innovative AI, cloud, and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind our innovative solutions. Our diverse team of experts 
              brings together decades of experience in AI, cloud computing, and technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Team Member */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {teamMembers.filter(member => member.featured).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-400/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-cyan-400 text-xl mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center lg:justify-start space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Leadership Vision</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      As the founder of Zion Tech Group, I believe that technology should be accessible, 
                      understandable, and transformative. Our mission is to democratize access to advanced 
                      AI and quantum technologies, enabling businesses of all sizes to leverage cutting-edge 
                      solutions for growth, efficiency, and competitive advantage.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We're building a future where innovation serves humanity, where complex technologies 
                      become simple tools, and where every business can harness the power of AI to transform 
                      their operations and achieve their goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-300">
              Meet the talented professionals who make our innovative solutions possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => !member.featured).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed text-sm">{member.bio}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 text-center">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.website && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              technology and innovation. Join us in shaping the future of AI and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Contact HR Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
