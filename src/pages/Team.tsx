import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Rocket,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Settings,
  Palette,
  Code,
  Server,
  Cpu,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Heart
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Kleber Santos',
      title: 'Chief Executive Officer & Founder',
      department: 'leadership',
      location: 'middletown',
      bio: 'Visionary leader with 20+ years of experience in technology innovation and business transformation. Founded Zion Tech Group with a mission to democratize cutting-edge technology.',
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development', 'AI Strategy'],
      education: 'PhD in Computer Science, MIT',
      experience: '20+ years',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com',
      avatar: '/team/kleber-santos.jpg',
      featured: true,
      achievements: [
        'Named Top 100 Technology Leaders 2023',
        'Led 3 successful technology startups',
        'Published 25+ research papers',
        'Advisor to Fortune 500 companies'
      ]
    },
    {
      id: 2,
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      department: 'leadership',
      location: 'san-francisco',
      bio: 'Leading expert in artificial intelligence and machine learning with a focus on enterprise AI solutions. Former research scientist at Google AI and Stanford University.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Enterprise Architecture', 'Research & Development'],
      education: 'PhD in Computer Science, Stanford University',
      experience: '15+ years',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com',
      avatar: '/team/sarah-chen.jpg',
      featured: true,
      achievements: [
        'Former Google AI Research Scientist',
        'Published 40+ AI research papers',
        'Led AI initiatives for Fortune 100 companies',
        'Recipient of ACM Distinguished Scientist Award'
      ]
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      title: 'Chief Security Officer',
      department: 'cybersecurity',
      location: 'new-york',
      bio: 'Cybersecurity expert with deep experience in protecting critical infrastructure and enterprise systems. Former cybersecurity advisor to the Department of Defense.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Risk Management', 'Compliance'],
      education: 'MS in Cybersecurity, Carnegie Mellon University',
      experience: '18+ years',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      avatar: '/team/michael-rodriguez.jpg',
      featured: true,
      achievements: [
        'Former DoD Cybersecurity Advisor',
        'Led security for Fortune 50 companies',
        'Certified CISSP, CISM, CISA',
        'Expert in zero-trust architecture'
      ]
    },
    {
      id: 4,
      name: 'Dr. Emily Watson',
      title: 'Head of AI Research',
      department: 'research',
      location: 'boston',
      bio: 'Leading researcher in artificial intelligence and machine learning. Former professor at MIT and research scientist at DeepMind.',
      expertise: ['AI Research', 'Machine Learning', 'Neural Networks', 'Computer Vision'],
      education: 'PhD in Computer Science, MIT',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson',
      email: 'emily@ziontechgroup.com',
      avatar: '/team/emily-watson.jpg',
      featured: true,
      achievements: [
        'Former MIT Professor',
        'Research Scientist at DeepMind',
        'Published 50+ AI research papers',
        'Recipient of NSF CAREER Award'
      ]
    },
    {
      id: 5,
      name: 'Marcus Johnson',
      title: 'Head of Cloud & DevOps',
      department: 'engineering',
      location: 'seattle',
      bio: 'Cloud infrastructure expert with deep experience in AWS, Azure, and Google Cloud. Led cloud transformations for multiple Fortune 500 companies.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure as Code', 'Kubernetes'],
      education: 'MS in Computer Science, University of Washington',
      experience: '14+ years',
      linkedin: 'https://linkedin.com/in/marcusjohnson',
      twitter: 'https://twitter.com/marcusjohnson',
      email: 'marcus@ziontechgroup.com',
      avatar: '/team/marcus-johnson.jpg',
      featured: false,
      achievements: [
        'AWS Solutions Architect Professional',
        'Led cloud migrations for Fortune 500',
        'Expert in containerization',
        'Kubernetes Certified Administrator'
      ]
    },
    {
      id: 6,
      name: 'Dr. Alex Kim',
      title: 'Quantum Computing Lead',
      department: 'research',
      location: 'austin',
      bio: 'Quantum computing researcher with expertise in quantum algorithms and quantum machine learning. Former researcher at IBM Quantum and Google Quantum AI.',
      expertise: ['Quantum Computing', 'Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography'],
      education: 'PhD in Physics, Caltech',
      experience: '10+ years',
      linkedin: 'https://linkedin.com/in/alexkim',
      twitter: 'https://twitter.com/alexkim',
      email: 'alex@ziontechgroup.com',
      avatar: '/team/alex-kim.jpg',
      featured: false,
      achievements: [
        'Former IBM Quantum Researcher',
        'Google Quantum AI Alumni',
        'Published 30+ quantum papers',
        'Expert in quantum algorithms'
      ]
    }
  ];

  const departments = [
    {
      name: 'Leadership',
      icon: Award,
      description: 'Strategic vision and executive leadership',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Research & Development',
      icon: Brain,
      description: 'Cutting-edge AI and technology research',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Engineering',
      icon: Code,
      description: 'Software development and infrastructure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Security and threat intelligence',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'leadership':
        return Award;
      case 'research':
        return Brain;
      case 'engineering':
        return Code;
      case 'cybersecurity':
        return Shield;
      default:
        return Users;
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'leadership':
        return 'from-purple-500 to-pink-500';
      case 'research':
        return 'from-blue-500 to-cyan-500';
      case 'engineering':
        return 'from-green-500 to-emerald-500';
      case 'cybersecurity':
        return 'from-red-500 to-orange-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of experts driving innovation at Zion Tech Group. From AI researchers to cybersecurity specialists, our team brings together decades of experience and cutting-edge expertise."
        keywords={['team', 'experts', 'AI researchers', 'cybersecurity specialists', 'technology leaders', 'Zion Tech Group']}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Exceptional minds working together to push the boundaries of what's possible. 
            Our team brings together decades of experience in AI, cybersecurity, cloud computing, and emerging technologies.
          </p>
        </motion.div>

        {/* Department Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${dept.color} flex items-center justify-center mb-4`}>
                <dept.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{dept.name}</h3>
              <p className="text-gray-300 text-sm">{dept.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.filter(member => member.featured).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.title}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Experts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xl font-bold text-white mx-auto mb-3">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{member.title}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getDepartmentColor(member.department)} text-white`}>
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {member.department.charAt(0).toUpperCase() + member.department.slice(1)}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
                  {member.bio.length > 120 ? `${member.bio.substring(0, 120)}...` : member.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our mission of democratizing cutting-edge technology. 
              If you're passionate about AI, cybersecurity, or emerging technologies, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Us
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}