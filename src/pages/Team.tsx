import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Zap, 
  Heart,
  Star,
  Globe,
  Cpu,
  Lock
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Former Google engineer and serial entrepreneur.',
      expertise: ['AI/ML', 'Enterprise Architecture', 'Strategic Planning'],
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'PhD in Computer Science from MIT. Expert in quantum computing and AI systems architecture.',
      expertise: ['Quantum Computing', 'AI Systems', 'Research & Development'],
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Security Officer',
      image: '/images/team/marcus-rodriguez.jpg',
      bio: 'Former NSA cybersecurity specialist with deep expertise in zero-trust architecture and AI-powered security.',
      expertise: ['Cybersecurity', 'Zero Trust', 'AI Security'],
      icon: Shield,
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.jpg',
      bio: 'Leading researcher in large language models and AI ethics. Published author in top AI journals.',
      expertise: ['LLM Research', 'AI Ethics', 'Natural Language Processing'],
      icon: Brain,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      image: '/images/team/alex-thompson.jpg',
      bio: 'Scaled engineering teams at Facebook and Amazon. Expert in cloud-native architecture and DevOps.',
      expertise: ['Cloud Architecture', 'DevOps', 'Team Leadership'],
      icon: Cloud,
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Healthcare AI',
      image: '/images/team/priya-patel.jpg',
      bio: 'Medical doctor turned AI researcher. Specializes in healthcare analytics and diagnostic AI systems.',
      expertise: ['Healthcare AI', 'Medical Analytics', 'Diagnostic Systems'],
      icon: Heart,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies.',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are fair, transparent, and beneficial to humanity.',
      icon: Shield,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve transformative results.',
      icon: Star,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Global Impact',
      description: 'We work with organizations worldwide to solve complex challenges.',
      icon: Globe,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Experts', icon: Brain },
    { number: '200+', label: 'Projects Delivered', icon: Rocket },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of AI experts, engineers, and innovators driving the future of technology at Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The brilliant minds behind Zion Tech Group's innovative AI solutions. 
              Our team combines decades of experience in artificial intelligence, 
              enterprise technology, and cutting-edge research.
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <Users className="w-5 h-5" />
              <span>50+ AI Experts</span>
              <span>•</span>
              <span>Global Talent</span>
              <span>•</span>
              <span>Industry Leaders</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience from top tech companies, 
              research institutions, and innovative startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                    <member.icon className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-cyan-400 font-medium mb-3">{member.role}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're always looking for exceptional talent to join our mission of 
              transforming businesses through innovative AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
