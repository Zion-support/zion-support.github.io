import React from 'react';
import { Linkedin, Mail, Phone, Award, Users, Brain, Code, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: 'CEO & Founder',
      bio: "Visionary leader with 15+ years in AI and technology innovation.",
      image: '/api/placeholder/300/300',
      linkedin: "https://linkedin.com/in/kleber-santos",
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: "Sarah Chen",
      role: 'Chief AI Officer',
      bio: "Expert in machine learning and AI research with 12+ years of experience.",
      image: '/api/placeholder/300/300',
      linkedin: "https://linkedin.com/in/sarah-chen-ai",
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Deep Learning', 'Research']
    },
    {
      name: "Michael Rodriguez",
      role: 'CTO',
      bio: "Technology architect specializing in scalable systems and cloud infrastructure.",
      image: '/api/placeholder/300/300',
      linkedin: "https://linkedin.com/in/michael-rodriguez-cto",
      email: 'michael@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: "Dr. Lisa Wang",
      role: 'Head of Research',
      bio: "Leading researcher in quantum computing and advanced AI algorithms.",
      image: '/api/placeholder/300/300',
      linkedin: "https://linkedin.com/in/lisa-wang-research",
      email: 'lisa@ziontechgroup.com',
      expertise: ['Quantum Computing', 'Algorithm Design', 'Research']
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind Zion Tech Group, driving innovation in AI and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and technology.
            </p>
            <a
              href="/careers"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default TeamPage;