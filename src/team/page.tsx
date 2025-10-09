'use client';
import React from 'react';
import { Brain, Code, Shield, BarChart, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Business Development',
      experience: '15+ years',
      image: '👨‍💼',
      bio: 'Visionary leader with extensive experience in AI and technology innovation, driving Zion Tech Group\'s mission to transform businesses through cutting-edge AI solutions.',
      skills: ['AI Strategy', 'Business Development', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      expertise: 'Machine Learning & AI Research',
      experience: '12+ years',
      image: '👩‍🔬',
      bio: 'Leading AI researcher and machine learning expert, responsible for developing our core AI algorithms and ensuring cutting-edge technology implementation.',
      skills: ['Machine Learning', 'Deep Learning', 'AI Research', 'Algorithm Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      expertise: 'Technology Architecture & Development',
      experience: '18+ years',
      image: '👨‍💻',
      bio: 'Technology visionary with deep expertise in scalable system architecture, leading our development teams to build robust and innovative solutions.',
      skills: ['System Architecture', 'Cloud Computing', 'DevOps', 'Software Engineering']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      expertise: 'Data Analytics & Business Intelligence',
      experience: '10+ years',
      image: '👩‍📊',
      bio: 'Data science expert specializing in transforming complex data into actionable business insights and predictive analytics solutions.',
      skills: ['Data Science', 'Analytics', 'Business Intelligence', 'Statistics']
    },
    {
      name: 'James Thompson',
      role: 'Head of Security',
      expertise: 'Cybersecurity & Compliance',
      experience: '14+ years',
      image: '👨‍🔒',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards and compliance requirements for enterprise clients.',
      skills: ['Cybersecurity', 'Compliance', 'Risk Management', 'Security Architecture']
    },
    {
      name: 'Lisa Park',
      role: 'Head of Product',
      expertise: 'Product Strategy & User Experience',
      experience: '11+ years',
      image: '👩‍🎨',
      bio: 'Product strategist focused on creating user-centric AI solutions that deliver exceptional value and seamless user experiences.',
      skills: ['Product Strategy', 'UX Design', 'User Research', 'Product Management']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
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
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Average Experience' },
    { number: '25+', label: 'PhD Holders' },
    { number: '100%', label: 'Passionate About AI' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Meet Our Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            The Experts Behind Our AI Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Our diverse team of AI experts, engineers, and innovators work together to create 
            cutting-edge solutions that transform businesses and drive success.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-cyan-400 font-semibold mb-1">{member.role}</div>
                  <div className="text-purple-400 text-sm mb-2">{member.expertise}</div>
                  <div className="text-gray-400 text-sm">{member.experience} experience</div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">What We Believe</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>AI should augment human capabilities, not replace them</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Ethical AI development is our responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Continuous learning drives innovation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Diversity strengthens our solutions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">How We Work</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Agile development methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Cross-functional collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Data-driven decision making</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Customer-centric approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Join Our Mission
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're always looking for talented individuals who share our passion for AI and innovation. 
              Join us in building the future of intelligent business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                careers@ziontechgroup.com
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