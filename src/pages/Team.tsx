import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Award, Users, Target, Lightbulb } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation. Expert in AI strategy, digital transformation, and scaling technology companies.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Innovation', 'Leadership'],
      image: '/images/team/kleber-santos.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        twitter: 'https://twitter.com/kleber_santos',
        github: 'https://github.com/kleber-santos',
        email: 'kleber@ziontechgroup.com'
      }
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence. Former lead researcher at major tech companies with 20+ publications.',
      expertise: ['Machine Learning', 'AI Research', 'Technical Architecture', 'Research & Development'],
      image: '/images/team/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen-ai',
        github: 'https://github.com/sarah-chen',
        email: 'sarah@ziontechgroup.com'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cloud & DevOps',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud. Specializes in scalable architecture and DevOps automation.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure', 'Scalability'],
      image: '/images/team/marcus-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez',
        github: 'https://github.com/marcus-rodriguez',
        email: 'marcus@ziontechgroup.com'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Director',
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence and security architecture. Leading expert in zero-trust security.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management', 'Zero Trust'],
      image: '/images/team/emily-watson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson-security',
        email: 'emily@ziontechgroup.com'
      }
    },
    {
      name: 'David Kim',
      role: 'VP of Product Innovation',
      bio: 'Product strategist with experience launching successful SaaS products. Expert in user experience design and product-market fit.',
      expertise: ['Product Strategy', 'UX Design', 'Innovation', 'Market Research'],
      image: '/images/team/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim-product',
        twitter: 'https://twitter.com/david_kim_ux',
        email: 'david@ziontechgroup.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Business Development',
      bio: 'Strategic partnerships expert with a track record of building successful alliances in the technology sector. MBA from Stanford.',
      expertise: ['Business Development', 'Strategic Partnerships', 'Sales Strategy', 'Market Expansion'],
      image: '/images/team/lisa-thompson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson-bd',
        email: 'lisa@ziontechgroup.com'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', description: 'Expert professionals' },
    { number: '15+', label: 'Years Experience', description: 'Average team experience' },
    { number: '25+', label: 'Countries', description: 'Global team distribution' },
    { number: '98%', label: 'Client Satisfaction', description: 'Team delivery excellence' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and explore cutting-edge technologies to deliver revolutionary solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaborative Excellence',
      description: 'Our diverse team brings together expertise from multiple disciplines and backgrounds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on measurable outcomes and deliver value that makes a real difference.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'We maintain the highest standards in everything we do, from code to client relationships.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the expert team behind Zion Tech Group's innovative AI and technology solutions. Learn about our leadership, expertise, and company values."
        keywords="team, leadership, AI experts, technology professionals, company culture"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              The brilliant minds behind Zion Tech Group's innovative solutions. Our diverse team of experts combines deep technical knowledge with creative problem-solving.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan-400 text-center font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-2">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-gray-200 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`}
                       className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center group"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. 
              Explore career opportunities with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/careers"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
