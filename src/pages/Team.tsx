import React from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  LightBulbIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  HeartIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon
} from '@heroicons/react/24/outline';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation. Passionate about leveraging AI and emerging technologies to solve complex business challenges.',
      expertise: ['Strategic Leadership', 'AI Innovation', 'Business Transformation', 'Technology Strategy'],
      image: '/team/kleber-santos.jpg',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      location: 'Delaware, USA'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology expert specializing in AI, cloud architecture, and scalable solutions. Leads our technical strategy and innovation initiatives.',
      expertise: ['Cloud Architecture', 'AI/ML Systems', 'Scalable Solutions', 'Technical Strategy'],
      image: '/team/sarah-chen.jpg',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      location: 'California, USA'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of AI Solutions',
      bio: 'AI specialist with deep expertise in machine learning and autonomous systems. Pioneering next-generation AI solutions for enterprise clients.',
      expertise: ['Machine Learning', 'Autonomous Systems', 'AI Ethics', 'Neural Networks'],
      image: '/team/marcus-rodriguez.jpg',
      email: 'marcus@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      location: 'Texas, USA'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      bio: 'Leading our quantum computing and emerging technology research initiatives. PhD in Quantum Physics with 10+ years in research.',
      expertise: ['Quantum Computing', 'Research & Development', 'Emerging Technologies', 'Academic Collaboration'],
      image: '/team/emily-watson.jpg',
      email: 'emily@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emily-watson',
      location: 'Massachusetts, USA'
    }
  ];

  const seniorTeam = [
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
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
      </div>

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
            <h2 className="text-4xl font-bold text-white mb-4">Our Team Values</h2>
            <p className="text-xl text-gray-300">The principles that unite us and drive our success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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