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
      role: 'Director of Cloud Operations',
      expertise: ['DevOps', 'FinOps', 'Multi-Cloud Strategy'],
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and GCP. Specializes in cost optimization and automation.',
      avatar: '/avatars/alex-thompson.jpg',
      linkedin: 'https://linkedin.com/in/alex-thompson',
      github: 'https://github.com/alex-thompson',
      email: 'alex@ziontechgroup.com'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Data Science',
      expertise: ['Big Data Analytics', 'Predictive Modeling', 'Data Governance'],
      bio: 'Data science leader with experience in building scalable analytics platforms for enterprise clients.',
      avatar: '/avatars/priya-patel.jpg',
      linkedin: 'https://linkedin.com/in/priya-patel',
      github: 'https://github.com/priya-patel',
      email: 'priya@ziontechgroup.com'
    }
  ];

  const expertiseAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI-powered solutions',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Zero trust architecture and advanced threat protection',
      color: 'from-red-600 to-orange-600'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Multi-cloud strategies and automation',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end digital modernization',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Healthcare Tech',
      description: 'AI-powered medical solutions',
      color: 'from-pink-600 to-rose-600'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Green IT and environmental solutions',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with technology'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security and privacy are at the core of everything we build'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success - we\'re partners in growth'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We deliver world-class solutions with attention to detail'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the expert team behind Zion Tech Group's innovative AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            We're a team of passionate technologists, innovators, and problem-solvers 
            dedicated to transforming businesses through cutting-edge AI and technology solutions.
          </motion.p>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-slate-300"
          >
            <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Middletown, DE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md: anyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index)   => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 text-center">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Areas of Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md: anyanygrid-cols-2 lg:grid-cols-3 gap-8">
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
          
          <div className="grid grid-cols-1 md: anyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index)   => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-slate-300 mb-8">
              We're always looking for talented individuals who are passionate about technology 
              and innovation. Join us in shaping the future of AI-powered business solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/careers"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a 
                href="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
