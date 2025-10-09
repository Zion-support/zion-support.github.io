import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI and technology visionary with 15+ years of experience in enterprise solutions',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning, leading our AI research and development initiatives',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Deep Learning', 'Research']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Technology architect with expertise in scalable systems and cloud infrastructure',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-cto',
      email: 'michael@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'DevOps', 'Security']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      bio: 'Data science expert specializing in predictive analytics and business intelligence',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/emily-watson-data',
      email: 'emily@ziontechgroup.com',
      expertise: ['Data Science', 'Analytics', 'Statistics']
    },
    {
      name: 'James Kim',
      role: 'Lead AI Engineer',
      bio: 'Full-stack AI engineer with expertise in natural language processing and computer vision',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/james-kim-ai',
      email: 'james@ziontechgroup.com',
      expertise: ['NLP', 'Computer Vision', 'AI Engineering']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Client Success',
      bio: 'Client success specialist ensuring exceptional customer experience and satisfaction',
      image: '/api/placeholder/300/300',
      linkedin: 'https://linkedin.com/in/lisa-thompson-success',
      email: 'lisa@ziontechgroup.com',
      expertise: ['Client Relations', 'Project Management', 'Customer Success']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'AI Projects', icon: Brain },
    { number: '99.9%', label: 'Client Satisfaction', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our diverse team of AI experts, engineers, and innovators is dedicated to transforming businesses through cutting-edge technology.
          </p>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our Culture & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">We constantly push the boundaries of what's possible with AI and technology.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">We believe in the power of diverse teams working together to solve complex problems.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Ethical AI</h3>
              <p className="text-gray-300">We develop AI solutions that are fair, transparent, and beneficial to society.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in everything we do, from code to customer service.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">We invest in our team's growth and stay ahead of the latest technological advances.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Client Success</h3>
              <p className="text-gray-300">Our success is measured by the success of our clients and their business outcomes.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI and innovation. Explore our open positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
