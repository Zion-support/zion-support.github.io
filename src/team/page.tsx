'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Code, Shield, BarChart, Users, Award, Mail, Linkedin, Github, Twitter, Phone, MapPin, Clock, CheckCircle, Star, TrendingUp, Zap } from 'lucide-react';

const TeamPage: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Former CTO at Fortune 500 companies, leading digital transformation initiatives.',
      image: '/api/placeholder/300/300',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/klebersantos',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation'],
      achievements: ['50+ AI implementations', '300% average ROI', 'Fortune 500 experience']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning from MIT. Leading researcher in neural networks and quantum computing with 20+ published papers.',
      image: '/api/placeholder/300/300',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarahchen',
      expertise: ['Machine Learning', 'Quantum Computing', 'Neural Networks'],
      achievements: ['20+ research papers', 'MIT PhD', 'Nobel Prize nominee']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Technology architect with expertise in cloud infrastructure and cybersecurity. Former lead engineer at major tech companies.',
      image: '/api/placeholder/300/300',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      expertise: ['Cloud Architecture', 'Cybersecurity', 'DevOps'],
      achievements: ['10+ years experience', 'AWS certified', 'Security expert']
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      icon: Brain,
      description: 'Cutting-edge AI research and model development',
      teamSize: '25+ experts',
      specialties: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Quantum AI'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Software Engineering',
      icon: Code,
      description: 'Full-stack development and system architecture',
      teamSize: '40+ developers',
      specialties: ['React/Next.js', 'Python', 'Node.js', 'Cloud Services', 'Microservices'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions and threat protection',
      teamSize: '15+ specialists',
      specialties: ['Penetration Testing', 'Security Audits', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Data Science',
      icon: BarChart,
      description: 'Data analytics and business intelligence solutions',
      teamSize: '20+ analysts',
      specialties: ['Predictive Analytics', 'Data Visualization', 'Big Data', 'Business Intelligence'],
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'DevOps & Infrastructure',
      icon: Zap,
      description: 'Cloud infrastructure and deployment automation',
      teamSize: '12+ engineers',
      specialties: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD', 'Monitoring', 'Scalability'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Customer Success',
      icon: Users,
      description: 'Client support and success management',
      teamSize: '18+ specialists',
      specialties: ['Account Management', 'Technical Support', 'Training', 'Implementation'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service'
    }
  ];

  const stats = [
    { number: '100+', label: 'Team Members' },
    { number: '15+', label: 'Countries Represented' },
    { number: '50+', label: 'Years Combined Experience' },
    { number: '25+', label: 'PhD Holders' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Team - AI & IT Experts | Zion Tech Group"
        description="Meet our world-class team of AI researchers, software engineers, and technology experts. Learn about our leadership and company culture."
        keywords={['team', 'AI experts', 'software engineers', 'leadership', 'company culture', 'technology professionals']}
        canonicalUrl="https://ziontechgroup.com/team"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Meet Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              World-class AI researchers, software engineers, and technology experts 
              working together to build the future of intelligent systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Team
              </a>
              <a href="/contact"
                className="cyber-button-secondary inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership <span className="text-purple-400">Team</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Visionary leaders driving innovation and growth
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{leader.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{leader.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </a>
                    <a href={leader.linkedin}
                      className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-cyan-400">Departments</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Specialized teams working together to deliver exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mr-4`}>
                      <dept.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
                      <p className="text-cyan-400 text-sm">{dept.teamSize}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{dept.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-purple-400">Values</span>
              </h2>
              <p className="text-gray-300 text-lg">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Culture & <span className="text-green-400">Benefits</span>
              </h2>
              <p className="text-gray-300 text-lg">
                We invest in our team's growth and well-being
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Competitive Compensation</h4>
                      <p className="text-gray-300">Above-market salaries with performance bonuses</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Learning & Development</h4>
                      <p className="text-gray-300">Annual learning budget and conference attendance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Flexible Work</h4>
                      <p className="text-gray-300">Remote work options and flexible hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Health & Wellness</h4>
                      <p className="text-gray-300">Comprehensive health insurance and wellness programs</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Our Culture</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Innovation Focus</h4>
                      <p className="text-gray-300">20% time for personal projects and research</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Collaborative Environment</h4>
                      <p className="text-gray-300">Open communication and knowledge sharing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Growth Opportunities</h4>
                      <p className="text-gray-300">Clear career paths and promotion opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Work-Life Balance</h4>
                      <p className="text-gray-300">Unlimited PTO and family-friendly policies</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We're always looking for talented individuals who share our passion for innovation. 
                Explore our open positions and start your journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/careers"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
                <a href="/contact"
                  className="cyber-button-secondary inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TeamPage;