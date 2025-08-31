import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, Heart, Brain, Shield, Cloud, Rocket, 
  Zap, Star, Globe, Code, Building, TrendingUp, 
  MessageCircle, Linkedin, Twitter, Github, Mail
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      department: 'Executive',
      expertise: 'AI Strategy, Quantum Computing, Business Innovation',
      experience: '15+ years in AI and technology leadership',
      image: '/team/sarah-chen.jpg',
      bio: 'Visionary leader driving Zion Tech Group\'s mission to democratize AI and quantum computing. Former research director at leading tech companies.',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      department: 'Technology',
      expertise: 'Cloud Architecture, DevOps, Infrastructure',
      experience: '12+ years in cloud and infrastructure',
      image: '/team/michael-rodriguez.jpg',
      bio: 'Technology innovator specializing in scalable cloud solutions and enterprise architecture. Expert in digital transformation.',
      social: {
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
        twitter: 'https://twitter.com/mrodriguez',
        github: 'https://github.com/mrodriguez'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      department: 'AI Research',
      expertise: 'Machine Learning, Neural Networks, AI Ethics',
      experience: '10+ years in AI research and development',
      image: '/team/emily-watson.jpg',
      bio: 'Leading AI researcher focused on responsible AI development and cutting-edge machine learning algorithms.',
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        twitter: 'https://twitter.com/emilywatson',
        github: 'https://github.com/emilywatson'
      }
    },
    {
      name: 'David Kim',
      role: 'Chief Security Officer',
      department: 'Cybersecurity',
      expertise: 'Cybersecurity, Zero Trust, Compliance',
      experience: '14+ years in cybersecurity and compliance',
      image: '/team/david-kim.jpg',
      bio: 'Cybersecurity expert specializing in zero-trust architectures and regulatory compliance frameworks.',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        twitter: 'https://twitter.com/davidkim',
        github: 'https://github.com/davidkim'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Engineering',
      department: 'Engineering',
      expertise: 'Software Engineering, Team Leadership, Agile',
      experience: '13+ years in software engineering',
      image: '/team/lisa-thompson.jpg',
      bio: 'Engineering leader focused on building high-performing teams and delivering scalable software solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson',
        twitter: 'https://twitter.com/lisathompson',
        github: 'https://github.com/lisathompson'
      }
    },
    {
      name: 'James Wilson',
      role: 'VP of Product',
      department: 'Product',
      expertise: 'Product Strategy, User Experience, Market Analysis',
      experience: '11+ years in product management',
      image: '/team/james-wilson.jpg',
      bio: 'Product strategist passionate about creating user-centric solutions that solve real business problems.',
      social: {
        linkedin: 'https://linkedin.com/in/james-wilson',
        twitter: 'https://twitter.com/jameswilson',
        github: 'https://github.com/jameswilson'
      }
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      icon: Brain,
      description: 'Pioneering the future of artificial intelligence and machine learning',
      memberCount: 25,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Engineering & Development',
      icon: Code,
      description: 'Building robust, scalable software solutions',
      memberCount: 45,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Protecting digital assets with cutting-edge security',
      memberCount: 18,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Designing and managing scalable cloud solutions',
      memberCount: 22,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Product & Design',
      icon: Building,
      description: 'Creating intuitive and powerful user experiences',
      memberCount: 20,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Business Development',
      icon: TrendingUp,
      description: 'Driving growth and strategic partnerships',
      memberCount: 15,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies',
      icon: Rocket,
      color: 'text-blue-500'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives',
      icon: Users,
      color: 'text-green-500'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Customer Focus',
      description: 'We put our customers at the center of every decision',
      icon: MessageCircle,
      color: 'text-purple-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace growth and never stop improving',
      icon: Brain,
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Passionate experts, innovators, and problem-solvers working together to transform the future of technology
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Users className="w-5 h-5" />
              <span>100+ Team Members</span>
              <span>•</span>
              <Globe className="w-5 h-5" />
              <span>Global Presence</span>
              <span>•</span>
              <Award className="w-5 h-5" />
              <span>Industry Leaders</span>
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{member.department}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.expertise}</p>
                  <p className="text-gray-400 text-xs mb-4">{member.experience}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
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
              Specialized teams working together to deliver exceptional results
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mr-4`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
                    <p className="text-blue-400 text-sm">{dept.memberCount} members</p>
                  </div>
                </div>
                <p className="text-gray-300">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to be part of something extraordinary? We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
