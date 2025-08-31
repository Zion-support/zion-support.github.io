import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Globe, Brain, Shield, Cloud, Rocket, 
  Star, Linkedin, Twitter, Mail, MapPin, Phone,
  Zap, Heart, Code, Building, BarChart3, PenTool
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      department: 'Executive Leadership',
      expertise: 'AI Strategy & Business Transformation',
      experience: '15+ years in AI and technology leadership',
      education: 'PhD in Computer Science, Stanford University',
      bio: 'Dr. Chen leads Zion Tech Group with a vision to democratize AI technology and drive sustainable innovation across industries.',
      avatar: '/avatars/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        twitter: 'https://twitter.com/sarahchen',
        email: 'sarah.chen@ziontechgroup.com'
      },
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', '100+ AI implementations']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      department: 'Technology & Innovation',
      expertise: 'Quantum Computing & AI Architecture',
      experience: '12+ years in advanced computing systems',
      education: 'MS in Computer Engineering, MIT',
      bio: 'Marcus spearheads our cutting-edge technology initiatives, focusing on quantum-AI hybrid solutions and next-generation computing platforms.',
      avatar: '/avatars/marcus-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez',
        twitter: 'https://twitter.com/marcusrodriguez',
        email: 'marcus.rodriguez@ziontechgroup.com'
      },
      achievements: ['Quantum Computing Pioneer', 'Patent Holder (15 patents)', 'IEEE Fellow']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      department: 'Artificial Intelligence',
      expertise: 'Machine Learning & Neural Networks',
      experience: '10+ years in AI research and development',
      education: 'PhD in Machine Learning, Carnegie Mellon',
      bio: 'Dr. Watson leads our AI research initiatives, developing breakthrough algorithms that power our autonomous business solutions.',
      avatar: '/avatars/emily-watson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        twitter: 'https://twitter.com/emilywatson',
        email: 'emily.watson@ziontechgroup.com'
      },
      achievements: ['NeurIPS Best Paper Award', 'AI Ethics Committee Member', '50+ Research Publications']
    },
    {
      name: 'David Kim',
      role: 'Chief Security Officer',
      department: 'Cybersecurity & Compliance',
      expertise: 'AI-Powered Security & Zero Trust',
      experience: '14+ years in cybersecurity and risk management',
      education: 'MS in Information Security, Georgia Tech',
      bio: 'David ensures our AI solutions meet the highest security standards while protecting our clients from emerging cyber threats.',
      avatar: '/avatars/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        twitter: 'https://twitter.com/davidkim',
        email: 'david.kim@ziontechgroup.com'
      },
      achievements: ['CISSP Certified', 'Security Innovation Award', 'Former NSA Security Expert']
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Financial Officer',
      department: 'Finance & Operations',
      expertise: 'AI Financial Analytics & FinOps',
      experience: '16+ years in financial technology and operations',
      education: 'MBA in Finance, Harvard Business School',
      bio: 'Lisa optimizes our financial operations using AI-driven insights and ensures sustainable growth for our innovative technology solutions.',
      avatar: '/avatars/lisa-thompson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson',
        twitter: 'https://twitter.com/lisathompson',
        email: 'lisa.thompson@ziontechgroup.com'
      },
      achievements: ['CFA Charterholder', 'FinTech Innovation Award', 'Forbes CFO of the Year Finalist']
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Research & Development',
      department: 'R&D & Innovation',
      expertise: 'Emerging Technologies & AI Research',
      experience: '11+ years in technology research and development',
      education: 'PhD in Applied Physics, Caltech',
      bio: 'Alex leads our R&D initiatives, exploring the frontiers of AI, quantum computing, and sustainable technology solutions.',
      avatar: '/avatars/alex-johnson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alex-johnson',
        twitter: 'https://twitter.com/alexjohnson',
        email: 'alex.johnson@ziontechgroup.com'
      },
      achievements: ['DARPA Research Grant Recipient', 'Nature Publication', 'Innovation Patent Award']
    }
  ];

  const departments = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      description: 'Developing cutting-edge AI algorithms and autonomous systems'
    },
    {
      name: 'Quantum Computing',
      icon: PenTool, // Changed from Atom to PenTool as Atom is not imported
      color: 'from-indigo-500 to-purple-500',
      description: 'Pioneering quantum-AI hybrid solutions for next-generation computing'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'AI-powered security solutions and zero-trust architectures'
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      description: 'Scalable cloud solutions and DevOps automation'
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Exploring the frontiers of technology innovation'
    },
    {
      name: 'Business Solutions',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'AI-driven business transformation and optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Our Team - Zion Tech Group"
        description="Meet the expert professionals behind Zion Tech Group's innovative AI solutions and cutting-edge technology services."
        keywords="team, leadership, AI experts, technology professionals, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The brilliant minds behind Zion Tech Group's innovative AI solutions, quantum computing breakthroughs, and cutting-edge technology services.
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>50+ Experts</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>100+ Awards</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in AI, technology, and business innovation.
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.department}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">
                      <span className="font-semibold">Expertise:</span> {member.expertise}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">
                      <span className="font-semibold">Experience:</span> {member.experience}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">
                      <span className="font-semibold">Education:</span> {member.education}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-xs font-semibold">Key Achievements:</p>
                  <ul className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="text-gray-500 text-xs flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized teams working together to deliver innovative solutions across all technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${dept.color} flex items-center justify-center mr-4`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Innovation Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to work with cutting-edge AI technology and shape the future of business? We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
