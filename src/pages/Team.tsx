import React from 'react';
import { motion   } from 'framer-motion';
import { SEO   } from '../components/SEO';
import { Users, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Globe, 
  Award,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Zap,
  Crown,
  Star
  } from 'lucide-react';

export default function Team(...args: any[]): any {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      expertise: ['AI & Machine Learning', 'Cloud Architecture', 'Digital Transformation'],
      bio: 'Visionary leader with over 15 years of experience in cutting-edge technology solutions. Passionate about leveraging AI to solve complex business challenges.',
      avatar: '/avatars/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist',
      expertise: ['Machine Learning', 'Neural Networks', 'Quantum Computing'],
      bio: 'PhD in Computer Science from MIT, specializing in advanced AI algorithms and quantum machine learning applications.',
      avatar: '/avatars/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      github: 'https://github.com/sarah-chen',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: ['Zero Trust Architecture', 'Threat Intelligence', 'Compliance'],
      bio: 'Former cybersecurity consultant with expertise in building enterprise-grade security solutions for Fortune 500 companies.',
      avatar: '/avatars/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      github: 'https://github.com/marcus-rodriguez',
      email: 'marcus@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Healthcare Technology',
      expertise: ['Healthcare AI', 'Medical Informatics', 'Regulatory Compliance'],
      bio: 'Medical doctor turned technologist, leading our healthcare AI initiatives with deep understanding of clinical workflows.',
      avatar: '/avatars/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      github: 'https://github.com/emily-watson',
      email: 'emily@ziontechgroup.com'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      bio: 'Experienced engineering leader with expertise in building high-performance teams and delivering complex technical solutions.',
      expertise: ['Team Leadership', 'Software Architecture', 'Agile Development', 'DevOps'],
      image: '/team/alex-thompson.jpg',
      email: 'alex@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/alex-thompson'
    },
    {
      name: 'Maria Garcia',
      role: 'VP of Client Success',
      bio: 'Dedicated to ensuring client satisfaction and successful project delivery through strategic relationship management.',
      expertise: ['Client Relations', 'Project Management', 'Strategic Planning', 'Team Coordination'],
      image: '/team/maria-garcia.jpg',
      email: 'maria@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/maria-garcia'
    },
    {
      name: 'David Kim',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with deep knowledge of threat intelligence, compliance, and security architecture.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance', 'Security Architecture'],
      image: '/team/david-kim.jpg',
      email: 'david@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/david-kim'
    },
    {
      name: 'Lisa Park',
      role: 'Head of Digital Marketing',
      bio: 'Digital marketing strategist specializing in growth hacking, content strategy, and brand development.',
      expertise: ['Digital Marketing', 'Growth Hacking', 'Content Strategy', 'Brand Development'],
      image: '/team/lisa-park.jpg',
      email: 'lisa@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/lisa-park'
    }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas that push boundaries.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to change the world.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The brilliant minds behind Zion Tech Group's innovative solutions and exceptional client experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300">Visionary leaders driving innovation and growth</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index)   => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Senior Leadership</h2>
            <p className="text-xl text-gray-300">Experienced professionals driving operational excellence</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            Areas of Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index)   => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-slate-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index)   => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get to Know Us Better</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to work with our team? Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start a Conversation
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;