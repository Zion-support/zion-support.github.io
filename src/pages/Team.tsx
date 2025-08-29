import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Heart, 
  Globe,
  Star,
  TrendingUp,
  Crown,
  Sparkles
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Business Development',
      bio: 'Visionary leader with 15+ years in technology innovation and AI solutions.',
      avatar: '/api/placeholder/150/150',
      skills: ['AI Strategy', 'Business Development', 'Technology Innovation'],
      icon: Crown,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      expertise: 'Machine Learning & AI Architecture',
      bio: 'PhD in Computer Science with expertise in large language models and AI systems.',
      avatar: '/api/placeholder/150/150',
      skills: ['Machine Learning', 'AI Architecture', 'Research & Development'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      expertise: 'Cloud Infrastructure & DevOps',
      bio: 'Expert in scalable cloud solutions and enterprise architecture.',
      avatar: '/api/placeholder/150/150',
      skills: ['Cloud Architecture', 'DevOps', 'Enterprise Solutions'],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      expertise: 'Data Analytics & Business Intelligence',
      bio: 'Data scientist specializing in predictive analytics and business intelligence.',
      avatar: '/api/placeholder/150/150',
      skills: ['Data Science', 'Predictive Analytics', 'Business Intelligence'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Director',
      expertise: 'AI-Powered Security & Compliance',
      bio: 'Cybersecurity expert with focus on AI-driven threat detection and compliance.',
      avatar: '/api/placeholder/150/150',
      skills: ['Cybersecurity', 'AI Security', 'Compliance'],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Dr. James Kim',
      role: 'Quantum Computing Lead',
      expertise: 'Quantum Algorithms & AI Integration',
      bio: 'Quantum computing researcher developing next-generation AI algorithms.',
      avatar: '/api/placeholder/150/150',
      skills: ['Quantum Computing', 'Quantum AI', 'Algorithm Development'],
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI for Good',
      description: 'We believe AI should enhance human capabilities and solve real-world problems.',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Global Impact',
      description: 'Our solutions reach businesses worldwide, driving digital transformation.',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    }
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Exceptional Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're a diverse team of AI experts, engineers, and innovators passionate about 
              transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="relative mx-auto mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto`}>
                      <member.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-lg opacity-50`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.expertise}</p>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 text-center">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Values
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture of innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Innovation Team
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Ready to shape the future of AI and technology? We're always looking for 
              passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
