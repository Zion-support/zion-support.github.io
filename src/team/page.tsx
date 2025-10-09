import React from 'react';
import { Linkedin, Mail, Phone, Award, Users, Brain, Code, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const _teamMembers = [
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Team</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced team solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default TeamPage;