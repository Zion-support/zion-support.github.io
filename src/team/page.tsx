'use client';
import React from 'react';
import { Users, Brain, Code, Shield, BarChart, Zap, Award, Globe, Mail, Linkedin, Github, Twitter, CheckCircle, Star, Clock, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Former Google AI researcher and serial entrepreneur.',
      image: '👨‍💼',
      expertise: ['AI Strategy', 'Leadership', 'Innovation', 'Business Development'],
      linkedin: '#',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with PhD from MIT. Expert in machine learning, neural networks, and quantum computing.',
      image: '👩‍🔬',
      expertise: ['Machine Learning', 'Neural Networks', 'Quantum AI', 'Research'],
      linkedin: '#',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Technology architect with 12+ years building scalable systems. Former AWS solutions architect and cloud expert.',
      image: '👨‍💻',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design', 'Security'],
      linkedin: '#',
      email: 'michael@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      bio: 'Data science expert with PhD in Statistics. Specializes in big data analytics and predictive modeling.',
      image: '👩‍💼',
      expertise: ['Data Science', 'Analytics', 'Statistics', 'Big Data'],
      linkedin: '#',
      email: 'emily@ziontechgroup.com'
    },
    {
      name: 'James Kim',
      role: 'Lead Software Engineer',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about clean code.',
      image: '👨‍🔧',
      expertise: ['Full-Stack Development', 'React', 'Node.js', 'Cloud'],
      linkedin: '#',
      email: 'james@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with CISSP certification. Former NSA security analyst with deep threat intelligence experience.',
      image: '👩‍🔒',
      expertise: ['Cybersecurity', 'Threat Analysis', 'Compliance', 'Risk Management'],
      linkedin: '#',
      email: 'lisa@ziontechgroup.com'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We prioritize security and build trust through transparency and reliability',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Our success is measured by our clients\' achievements and satisfaction',
      color: 'text-orange-400'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'Microsoft Azure Expert',
    'CISSP Security Certification',
    'PMP Project Management',
    'ITIL Service Management',
    'ISO 27001 Lead Auditor',
    'CISA Information Systems Audit'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            World-class experts in AI, technology, and innovation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Our diverse team of engineers, scientists, and innovators is dedicated to pushing the boundaries 
            of artificial intelligence and delivering cutting-edge solutions that transform businesses worldwide.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{member.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Professional Certifications
          </h2>
          
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <p className="text-gray-300 text-center mb-8">
              Our team holds industry-leading certifications to ensure we deliver the highest quality services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Culture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Work Environment</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Remote-First:</strong> Flexible work arrangements that promote work-life balance
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Brain className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Continuous Learning:</strong> Regular training, conferences, and skill development opportunities
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Users className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Collaborative:</strong> Open communication and knowledge sharing across all teams
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Award className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Recognition:</strong> Regular recognition and rewards for outstanding contributions
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Benefits & Perks</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <DollarSign className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Competitive Salary:</strong> Industry-leading compensation packages
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Shield className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Health & Wellness:</strong> Comprehensive health, dental, and vision coverage
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Clock className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Flexible Time Off:</strong> Unlimited PTO and flexible scheduling
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Globe className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Global Opportunities:</strong> Work with international clients and teams
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and innovation. 
              Explore our open positions and become part of the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;