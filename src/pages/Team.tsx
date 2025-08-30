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
  Building,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      expertise: 'AI & Machine Learning',
      bio: 'Former Google AI researcher with 15+ years in enterprise AI solutions. PhD in Computer Science from Stanford.',
      avatar: '/avatars/sarah-chen.jpg',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      expertise: 'Cloud Architecture & DevOps',
      bio: 'Ex-AWS Solutions Architect with deep expertise in scalable cloud infrastructure and automation.',
      avatar: '/avatars/marcus-rodriguez.jpg',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Dr. James Kim',
      role: 'Chief Innovation Officer',
      expertise: 'Quantum Computing & Emerging Tech',
      bio: 'Leading researcher in quantum algorithms and quantum machine learning. PhD in Physics from MIT.',
      avatar: '/avatars/james-kim.jpg',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Security Officer',
      expertise: 'Cybersecurity & Compliance',
      bio: 'Former NSA cybersecurity specialist with expertise in zero-trust architecture and AI-powered security.',
      avatar: '/avatars/lisa-thompson.jpg',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'David Park',
      role: 'Head of AI Solutions',
      expertise: 'AI Business Intelligence',
      bio: 'Expert in implementing AI solutions for Fortune 500 companies. Specializes in predictive analytics.',
      avatar: '/avatars/david-park.jpg',
      icon: Brain,
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Amanda Foster',
      role: 'Head of Digital Transformation',
      expertise: 'Enterprise Digital Strategy',
      bio: 'Digital transformation consultant with 20+ years helping companies modernize their operations.',
      avatar: '/avatars/amanda-foster.jpg',
      icon: TrendingUp,
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our impact by your business outcomes.',
      icon: Target,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
      icon: Star,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Collaboration',
      description: 'Great solutions come from great teamwork, both within our team and with our clients.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '150+', icon: Award },
    { label: 'Projects Delivered', value: '500+', icon: Rocket },
    { label: 'Happy Clients', value: '200+', icon: Heart },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of technology experts, AI researchers, and business strategists driving innovation at Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A world-class team of technology experts, AI researchers, and business strategists 
              working together to transform how businesses operate in the digital age.
            </p>
            <div className="flex items-center justify-center space-x-8 text-white">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-semibold">50+ Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-semibold">150+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-semibold">25+ Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
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
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders who are shaping the future of technology and business innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                    <member.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                  <div className="text-gray-400 text-sm">{member.expertise}</div>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
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
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for exceptional talent to join our mission of transforming 
              businesses through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
