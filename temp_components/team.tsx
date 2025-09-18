import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, Mail, Linkedin, Github, Globe, Zap, Star,
  CheckCircle, TrendingUp, BarChart3, Cloud, Network
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Kleber Oliveira',
      role: 'Founder & CEO',
      expertise: 'AI Strategy, Quantum Computing, Business Development',
      bio: 'Visionary leader with 15+ years in AI and quantum technologies. Former AI researcher at leading institutions, now driving Zion Tech Group\'s mission to democratize cutting-edge technology.',
      avatar: '/api/placeholder/200/200',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleberoliveira',
      github: 'https://github.com/kleberoliveira',
      skills: ['AI Strategy', 'Quantum Computing', 'Business Development', 'Team Leadership'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI Architecture, Quantum Algorithms, System Design',
      bio: 'PhD in Computer Science with specialization in quantum machine learning. Led AI initiatives at Fortune 500 companies and research institutions.',
      avatar: '/api/placeholder/200/200',
      email: 'sarah.chen@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen',
      skills: ['AI Architecture', 'Quantum Algorithms', 'System Design', 'Research & Development'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Quantum Security, Threat Intelligence, Compliance',
      bio: 'Cybersecurity expert with deep knowledge in quantum-resistant encryption and AI-powered threat detection. Former security consultant for government agencies.',
      avatar: '/api/placeholder/200/200',
      email: 'marcus.rodriguez@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      github: 'https://github.com/marcusrodriguez',
      skills: ['Quantum Security', 'Threat Intelligence', 'Compliance', 'Incident Response'],
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Dr. Elena Petrova',
      role: 'Lead Quantum Researcher',
      expertise: 'Quantum Computing, Neural Networks, Research',
      bio: 'Quantum physicist with breakthrough research in quantum neural networks. Published author in top-tier journals and speaker at international conferences.',
      avatar: '/api/placeholder/200/200',
      email: 'elena.petrova@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/elenapetrova',
      github: 'https://github.com/elenapetrova',
      skills: ['Quantum Computing', 'Neural Networks', 'Research', 'Academic Collaboration'],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      expertise: 'Platform Architecture, DevOps, Scalability',
      bio: 'Engineering leader with expertise in building scalable platforms and autonomous systems. Former engineering director at major tech companies.',
      avatar: '/api/placeholder/200/200',
      email: 'alex.thompson@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/alexthompson',
      github: 'https://github.com/alexthompson',
      skills: ['Platform Architecture', 'DevOps', 'Scalability', 'Team Management'],
      color: 'from-emerald-600 to-teal-600'
    },
    {
      name: 'Dr. James Kim',
      role: 'Head of AI Research',
      expertise: 'Machine Learning, Neural Interfaces, AI Ethics',
      bio: 'AI researcher specializing in neural interfaces and consciousness studies. Pioneer in brain-computer interface technology and AI safety.',
      avatar: '/api/placeholder/200/200',
      email: 'james.kim@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/jameskim',
      github: 'https://github.com/jameskim',
      skills: ['Machine Learning', 'Neural Interfaces', 'AI Ethics', 'Research Leadership'],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, always exploring the next frontier of technology.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Excellence in Execution',
      description: 'We don\'t just dream big, we deliver exceptional results that exceed expectations.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Collaborative Growth',
      description: 'We believe in the power of diverse perspectives and collaborative problem-solving.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Ethical Technology',
      description: 'We develop technology that benefits humanity while ensuring safety and ethical considerations.',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Research Papers', icon: Star },
    { number: '25+', label: 'Patents Filed', icon: CheckCircle }
  ];

const team: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">team</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default team;
