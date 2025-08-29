import React from 'react';
import { SEO } from '../components/SEO';

import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  Heart, 
  Globe,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Business Development',
      description: 'Visionary leader with 15+ years in AI and enterprise technology',
      avatar: '/avatars/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      achievements: ['AI Innovation Award 2024', 'Forbes 30 Under 30', 'MIT Technology Review Innovator']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      expertise: 'Machine Learning & Quantum Computing',
      description: 'Former Google AI researcher with PhD in Computer Science from Stanford',
      avatar: '/avatars/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      achievements: ['Google AI Research Excellence', 'Stanford PhD Fellowship', '50+ Research Papers']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      expertise: 'Cloud Architecture & DevOps',
      description: 'Ex-AWS architect specializing in scalable cloud solutions',
      avatar: '/avatars/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      achievements: ['AWS Solutions Architect', 'Microsoft MVP', 'Kubernetes Contributor']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Healthcare AI',
      expertise: 'Medical AI & Bioinformatics',
      description: 'Former FDA advisor with expertise in AI-powered diagnostics',
      avatar: '/avatars/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      achievements: ['FDA Innovation Award', 'Harvard Medical School', 'NIH Research Grant']
    },
    {
      name: 'Alex Kim',
      role: 'VP of Cybersecurity',
      expertise: 'AI Security & Zero Trust',
      description: 'Former NSA cybersecurity expert with focus on AI defense systems',
      avatar: '/avatars/alex-kim.jpg',
      linkedin: 'https://linkedin.com/in/alex-kim',
      achievements: ['NSA Excellence Award', 'Black Hat Speaker', 'SANS Certified Instructor']
    },
    {
      name: 'Priya Patel',
      role: 'Head of Sustainability',
      expertise: 'Green Tech & ESG Solutions',
      description: 'Environmental scientist leading our sustainability initiatives',
      avatar: '/avatars/priya-patel.jpg',
      linkedin: 'https://linkedin.com/in/priya-patel',
      achievements: ['UN Sustainability Award', 'MIT Environmental Science', 'Greenpeace Recognition']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and compliance are built into everything we do'
    },
    {
      icon: Heart,
      title: 'Human-Centric AI',
      description: 'We believe AI should augment human capabilities, not replace them'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions address real-world challenges across industries and borders'
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Experts', icon: Brain },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '25+', label: 'Patents Filed', icon: Award },
    { number: '99.9%', label: 'Uptime SLA', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of AI experts, engineers, and innovators driving the future of technology at Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Exceptional Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group's innovative AI solutions. 
              Our team combines decades of experience in artificial intelligence, 
              enterprise technology, and cutting-edge research.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-slate-300 text-sm mb-3">{member.expertise}</p>
                  <p className="text-slate-400 text-sm">{member.description}</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  {member.achievements.slice(0, 2).map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Innovation Team
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our mission of 
              transforming businesses through AI innovation. Explore opportunities 
              to work with cutting-edge technology and world-class experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
