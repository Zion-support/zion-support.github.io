import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Globe,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Star,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Chief Technology Officer',
      expertise: 'AI, Cloud Architecture, Digital Transformation',
      bio: 'Visionary leader with over 15 years of experience in emerging technologies. Expert in AI implementation, cloud infrastructure, and digital transformation strategies.',
      avatar: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      location: 'Middletown, DE',
      achievements: ['AI Innovation Award 2024', 'Cloud Architecture Expert', 'Digital Transformation Leader'],
      skills: ['Artificial Intelligence', 'Cloud Computing', 'DevOps', 'Blockchain', 'IoT', 'Quantum Computing'],
      icon: Crown,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Scientist',
      expertise: 'Machine Learning, Neural Networks, Quantum AI',
      bio: 'Leading researcher in quantum machine learning and AI ethics. PhD in Computer Science with focus on next-generation AI systems.',
      avatar: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      github: 'https://github.com/sarah-chen-ai',
      email: 'sarah.chen@ziontechgroup.com',
      phone: '+1 302 464 0951',
      location: 'San Francisco, CA',
      achievements: ['PhD Computer Science', 'Quantum AI Research', 'AI Ethics Committee'],
      skills: ['Machine Learning', 'Quantum Computing', 'Neural Networks', 'AI Ethics', 'Data Science', 'Research'],
      icon: Brain,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Zero Trust Architecture, AI Security, Compliance',
      bio: 'Cybersecurity expert with deep knowledge in AI-powered security solutions and regulatory compliance frameworks.',
      avatar: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez-security',
      github: 'https://github.com/marcus-rodriguez-security',
      email: 'marcus.rodriguez@ziontechgroup.com',
      phone: '+1 302 464 0952',
      location: 'New York, NY',
      achievements: ['CISSP Certified', 'Zero Trust Expert', 'Security Innovation Award'],
      skills: ['Cybersecurity', 'Zero Trust', 'Compliance', 'AI Security', 'Network Security', 'Risk Management'],
      icon: Shield,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'VP of Cloud & DevOps',
      expertise: 'Cloud Architecture, FinOps, Infrastructure Automation',
      bio: 'Cloud infrastructure specialist with expertise in cost optimization and automated deployment strategies.',
      avatar: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/emily-watson-cloud',
      github: 'https://github.com/emily-watson-cloud',
      email: 'emily.watson@ziontechgroup.com',
      phone: '+1 302 464 0953',
      location: 'Seattle, WA',
      achievements: ['AWS Solutions Architect', 'FinOps Certified', 'DevOps Excellence'],
      skills: ['Cloud Computing', 'DevOps', 'FinOps', 'Infrastructure', 'Automation', 'Cost Optimization'],
      icon: Cloud,
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of IoT & Edge Computing',
      expertise: 'IoT Solutions, Edge Computing, Digital Twins',
      bio: 'IoT innovator specializing in edge computing solutions and digital twin implementations for industrial applications.',
      avatar: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/alex-thompson-iot',
      github: 'https://github.com/alex-thompson-iot',
      email: 'alex.thompson@ziontechgroup.com',
      phone: '+1 302 464 0954',
      location: 'Austin, TX',
      achievements: ['IoT Innovation Award', 'Edge Computing Expert', 'Digital Twin Pioneer'],
      skills: ['IoT', 'Edge Computing', 'Digital Twins', 'Industrial IoT', 'Sensor Networks', 'Real-time Systems'],
      icon: Rocket,
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Healthcare Technology Director',
      expertise: 'AI Healthcare, Medical AI, Healthcare Analytics',
      bio: 'Healthcare technology expert with focus on AI-powered diagnostic tools and healthcare data analytics.',
      avatar: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/priya-patel-healthcare',
      github: 'https://github.com/priya-patel-healthcare',
      email: 'priya.patel@ziontechgroup.com',
      phone: '+1 302 464 0955',
      location: 'Boston, MA',
      achievements: ['MD PhD', 'Healthcare AI Expert', 'Medical Innovation Award'],
      skills: ['Healthcare AI', 'Medical Diagnostics', 'Data Analytics', 'Regulatory Compliance', 'Clinical Research', 'AI Ethics'],
      icon: Heart,
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.',
      icon: Sparkles,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles.',
      icon: Shield,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of technology experts, AI scientists, and industry leaders driving innovation at Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Exceptional Team</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A diverse group of technology visionaries, AI researchers, and industry experts 
              working together to shape the future of business technology.
            </p>
            <div className="flex items-center justify-center space-x-4 text-slate-400">
              <Users className="w-6 h-6" />
              <span>{teamMembers.length} Team Members</span>
              <span>•</span>
              <Award className="w-6 h-6" />
              <span>Industry Experts</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 group"
              >
                {/* Avatar and Role */}
                <div className="text-center mb-6">
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <member.icon className={`w-12 h-12 bg-gradient-to-br ${member.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.expertise}</p>
                </div>

                {/* Bio */}
                <p className="text-slate-300 text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Achievements
                  </h4>
                  <div className="space-y-2">
                    {member.achievements.slice(0, 2).map((achievement) => (
                      <div key={achievement} className="flex items-center text-sm text-slate-300">
                        <Star className="w-3 h-3 text-yellow-400 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-cyan-400 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-cyan-400 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-slate-700">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide our team and shape our culture of innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className={`w-8 h-8 bg-gradient-to-br ${value.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-cyan-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovation Team</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for technology 
              and innovation. Explore opportunities to be part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
