import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Brain, 
  Zap,
  Shield,
  Rocket,
  Heart,
  Star,
  CheckCircle,
  Mail,
  Linkedin,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Lock,
  Atom
} from 'lucide-react';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Passionate about democratizing access to cutting-edge technology solutions.',
      expertise: ['AI Strategy', 'Business Innovation', 'Digital Transformation', 'Technology Leadership'],
      image: '/team/kleber-santos.jpg',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/klebersantos',
      achievements: ['15+ Years Experience', '500+ Projects Delivered', 'AI Innovation Award 2024']
    }
  ];

  const coreTeam = [
    {
      name: 'AI Research Team',
      role: 'Research & Development',
      bio: 'World-class engineers and researchers pushing the boundaries of AI technology and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'AI Research', 'Algorithm Development'],
      image: '/team/ai-research-team.jpg',
      size: '12+ Engineers',
      achievements: ['50+ Research Papers', '15 AI Patents', 'Industry Recognition']
    },
    {
      name: 'Digital Solutions Team',
      role: 'Implementation & Consulting',
      bio: 'Expert consultants ensuring successful digital transformation for our clients across industries.',
      expertise: ['Digital Transformation', 'Cloud Architecture', 'DevOps', 'Project Management'],
      image: '/team/solutions-team.jpg',
      size: '25+ Consultants',
      achievements: ['200+ Projects Completed', '98% Client Satisfaction', 'Global Delivery']
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security & Compliance',
      bio: 'Specialists in protecting digital assets and ensuring compliance with industry standards.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management', 'Threat Intelligence'],
      image: '/team/security-team.jpg',
      size: '15+ Specialists',
      achievements: ['Zero Security Breaches', 'ISO 27001 Certified', 'Industry Awards']
    }
  ];

  const expertiseAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning, deep learning, and AI-powered solutions',
      teamSize: '20+',
      projects: '150+'
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Quantum algorithms and hybrid quantum-classical solutions',
      teamSize: '8+',
      projects: '25+'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud architecture, automation, and infrastructure management',
      teamSize: '18+',
      projects: '200+'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Threat detection, compliance, and security architecture',
      teamSize: '15+',
      projects: '100+'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Big data, business intelligence, and predictive analytics',
      teamSize: '12+',
      projects: '80+'
    },
    {
      icon: Zap,
      title: 'Innovation Lab',
      description: 'Emerging technologies and experimental solutions',
      teamSize: '10+',
      projects: '30+'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new possibilities in technology.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to client service.'
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay ahead of emerging technologies.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Delivered', icon: Rocket },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind our innovative solutions, driving the future 
              of AI and technology transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders guide our vision and ensure we deliver 
              exceptional value to our clients.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-xl text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
                  {member.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Teams */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized teams working together to deliver comprehensive 
              technology solutions and exceptional client experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreTeam.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{team.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-center">{team.role}</p>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">{team.bio}</p>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Team Size</span>
                    <p className="font-semibold text-gray-900">{team.size}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Key Expertise</span>
                    <div className="flex flex-wrap gap-1 justify-center mt-1">
                      {team.expertise.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Achievements</span>
                    <div className="space-y-1 mt-1">
                      {team.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized teams bring deep knowledge and experience 
              across the full spectrum of modern technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <area.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Team Size</span>
                    <p className="font-semibold text-gray-900">{area.teamSize}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Projects</span>
                    <p className="font-semibold text-gray-900">{area.projects}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values & Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our team and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              technology and innovation. Explore opportunities to grow with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Contact HR Team
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}