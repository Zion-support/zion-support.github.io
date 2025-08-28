import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Github,
  Award,
  Users,
  Target,
  Rocket,
  Brain,
  Cloud,
  Shield,
  Atom,
  Zap,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Lightbulb,
  TrendingUp,
  Eye,
  Lock,
  Network,
  Database,
  Code,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Phone,
  MapPin,
  Calendar,
  Clock,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  BarChart3,
  PenTool,
  Server,
  Smartphone,
  Cpu,
  Truck
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  email: string;
  image: string;
  featured: boolean;
  leadership: boolean;
  achievements: string[];
}

const Team: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users, count: 0 },
    { id: 'leadership', name: 'Leadership', icon: Star, count: 0 },
    { id: 'ai', name: 'AI & Research', icon: Brain, count: 0 },
    { id: 'engineering', name: 'Engineering', icon: Code, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'business', name: 'Business Development', icon: TrendingUp, count: 0 },
    { id: 'design', name: 'Design & UX', icon: PenTool, count: 0 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 0 }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer & Chief AI Officer',
      department: 'leadership',
      bio: 'Visionary leader with 15+ years of experience in artificial intelligence and quantum computing. Former research lead at Google AI and Stanford University.',
      expertise: ['Artificial Intelligence', 'Quantum Computing', 'Machine Learning', 'Strategic Leadership'],
      experience: '15+ years',
      education: 'Ph.D. Computer Science, Stanford University',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen',
      website: 'https://sarahchen.com',
      email: 'sarah.chen@ziontechgroup.com',
      image: '/images/team/sarah-chen.jpg',
      featured: true,
      leadership: true,
      achievements: ['Forbes 30 Under 30', 'MIT Technology Review Innovator', 'Published 50+ Research Papers']
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      title: 'Chief Technology Officer',
      department: 'leadership',
      bio: 'Technology visionary with expertise in cloud architecture, quantum computing, and emerging technologies. Former CTO at Microsoft Azure.',
      expertise: ['Cloud Architecture', 'Quantum Computing', 'Emerging Technologies', 'System Design'],
      experience: '18+ years',
      education: 'M.S. Computer Engineering, MIT',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/mrodriguez',
      github: 'https://github.com/mrodriguez',
      email: 'michael.rodriguez@ziontechgroup.com',
      image: '/images/team/michael-rodriguez.jpg',
      featured: true,
      leadership: true,
      achievements: ['Microsoft MVP', 'Cloud Architecture Expert', 'Quantum Computing Pioneer']
    },
    {
      id: '3',
      name: 'Dr. Alex Thompson',
      title: 'Chief Security Officer',
      department: 'security',
      bio: 'Cybersecurity expert specializing in AI-powered threat detection and quantum-resistant cryptography. Former security lead at NSA.',
      expertise: ['Cybersecurity', 'AI Security', 'Quantum Cryptography', 'Threat Intelligence'],
      experience: '12+ years',
      education: 'Ph.D. Cybersecurity, Carnegie Mellon University',
      linkedin: 'https://linkedin.com/in/alexthompson',
      twitter: 'https://twitter.com/alexthompson',
      email: 'alex.thompson@ziontechgroup.com',
      image: '/images/team/alex-thompson.jpg',
      featured: true,
      leadership: true,
      achievements: ['NSA Recognition Award', 'Black Hat Speaker', 'Security Researcher of the Year']
    },
    {
      id: '4',
      name: 'Dr. Emily Watson',
      title: 'Head of AI Research',
      department: 'ai',
      bio: 'Leading researcher in machine learning and artificial intelligence. Specializes in quantum machine learning and neural network optimization.',
      expertise: ['Machine Learning', 'Quantum ML', 'Neural Networks', 'Research Leadership'],
      experience: '10+ years',
      education: 'Ph.D. Machine Learning, UC Berkeley',
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson',
      github: 'https://github.com/emilywatson',
      email: 'emily.watson@ziontechgroup.com',
      image: '/images/team/emily-watson.jpg',
      featured: true,
      leadership: false,
      achievements: ['Google Research Award', 'NeurIPS Best Paper', 'AI Research Grant Recipient']
    },
    {
      id: '5',
      name: 'Dr. James Kim',
      title: 'Quantum Computing Lead',
      department: 'quantum',
      bio: 'Quantum physicist and computing expert. Leading research in quantum algorithms and quantum-classical hybrid systems.',
      expertise: ['Quantum Physics', 'Quantum Algorithms', 'Quantum-Classical Hybrid', 'Research'],
      experience: '8+ years',
      education: 'Ph.D. Quantum Physics, Caltech',
      linkedin: 'https://linkedin.com/in/jameskim',
      twitter: 'https://twitter.com/jameskim',
      github: 'https://github.com/jameskim',
      email: 'james.kim@ziontechgroup.com',
      image: '/images/team/james-kim.jpg',
      featured: true,
      leadership: false,
      achievements: ['Caltech Distinguished Alumnus', 'Quantum Research Grant', 'Published in Nature']
    },
    {
      id: '6',
      name: 'Lisa Chang',
      title: 'Head of Cloud & DevOps',
      department: 'cloud',
      bio: 'Cloud infrastructure expert with deep knowledge of FinOps, automation, and scalable systems. Former AWS Solutions Architect.',
      expertise: ['Cloud Infrastructure', 'DevOps', 'FinOps', 'Automation'],
      experience: '14+ years',
      education: 'M.S. Information Systems, University of Washington',
      linkedin: 'https://linkedin.com/in/lisachang',
      twitter: 'https://twitter.com/lisachang',
      github: 'https://github.com/lisachang',
      email: 'lisa.chang@ziontechgroup.com',
      image: '/images/team/lisa-chang.jpg',
      featured: false,
      leadership: true,
      achievements: ['AWS Solutions Architect', 'DevOps Expert', 'Cloud Cost Optimization Specialist']
    },
    {
      id: '7',
      name: 'Robert Davis',
      title: 'Senior Software Engineer',
      department: 'engineering',
      bio: 'Full-stack developer specializing in microservices, AI integration, and scalable web applications.',
      expertise: ['Full-Stack Development', 'Microservices', 'AI Integration', 'Web Applications'],
      experience: '6+ years',
      education: 'B.S. Computer Science, University of Texas',
      linkedin: 'https://linkedin.com/in/robertdavis',
      github: 'https://github.com/robertdavis',
      email: 'robert.davis@ziontechgroup.com',
      image: '/images/team/robert-davis.jpg',
      featured: false,
      leadership: false,
      achievements: ['Microsoft Certified Developer', 'Open Source Contributor', 'Hackathon Winner']
    },
    {
      id: '8',
      name: 'Jennifer Lee',
      title: 'Business Development Manager',
      department: 'business',
      bio: 'Strategic business development professional with expertise in technology partnerships and market expansion.',
      expertise: ['Business Development', 'Partnerships', 'Market Strategy', 'Client Relations'],
      experience: '9+ years',
      education: 'MBA, Harvard Business School',
      linkedin: 'https://linkedin.com/in/jenniferlee',
      email: 'jennifer.lee@ziontechgroup.com',
      image: '/images/team/jennifer-lee.jpg',
      featured: false,
      leadership: false,
      achievements: ['Top Performer Award', 'Partnership Excellence', 'Client Satisfaction Leader']
    },
    {
      id: '9',
      name: 'David Wilson',
      title: 'UX/UI Design Lead',
      department: 'design',
      bio: 'Creative designer focused on user experience and interface design for complex technology applications.',
      expertise: ['UX/UI Design', 'User Research', 'Prototyping', 'Design Systems'],
      experience: '7+ years',
      education: 'B.F.A. Design, Rhode Island School of Design',
      linkedin: 'https://linkedin.com/in/davidwilson',
      website: 'https://davidwilson.design',
      email: 'david.wilson@ziontechgroup.com',
      image: '/images/team/david-wilson.jpg',
      featured: false,
      leadership: false,
      achievements: ['Design Excellence Award', 'User Experience Innovation', 'Design Thinking Facilitator']
    },
    {
      id: '10',
      name: 'Maria Garcia',
      title: 'Data Scientist',
      department: 'data',
      bio: 'Data science expert specializing in predictive analytics, machine learning, and business intelligence.',
      expertise: ['Data Science', 'Predictive Analytics', 'Machine Learning', 'Business Intelligence'],
      experience: '5+ years',
      education: 'M.S. Data Science, Columbia University',
      linkedin: 'https://linkedin.com/in/mariagarcia',
      github: 'https://github.com/mariagarcia',
      email: 'maria.garcia@ziontechgroup.com',
      image: '/images/team/maria-garcia.jpg',
      featured: false,
      leadership: false,
      achievements: ['Data Science Competition Winner', 'Research Publication', 'Analytics Innovation Award']
    }
  ];

  // Update department counts
  departments.forEach(dept => {
    if (dept.id === 'all') {
      dept.count = teamMembers.length;
    } else if (dept.id === 'leadership') {
      dept.count = teamMembers.filter(member => member.leadership).length;
    } else {
      dept.count = teamMembers.filter(member => member.department === dept.id).length;
    }
  });

  const filteredMembers = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesRole = selectedRole === 'all' || 
                       (selectedRole === 'leadership' && member.leadership) ||
                       (selectedRole === 'individual' && !member.leadership);
    return matchesDepartment && matchesRole;
  });

  const leadershipTeam = teamMembers.filter(member => member.leadership);
  const featuredMembers = teamMembers.filter(member => member.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team behind Zion Tech Group. Our experts in AI, quantum computing, cybersecurity, and emerging technologies are driving innovation."
        keywords="Zion Tech Group team, AI experts, quantum computing specialists, cybersecurity professionals, technology leadership"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Exceptional Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group's innovations in AI, quantum computing, 
              and emerging technologies. Our diverse team brings together expertise from leading 
              institutions and companies worldwide.
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'Team Members', value: teamMembers.length, icon: Users, color: 'from-cyan-500 to-blue-500' },
              { label: 'Departments', value: departments.length - 1, icon: Building, color: 'from-purple-500 to-pink-500' },
              { label: 'Years Experience', value: '100+', icon: Award, color: 'from-yellow-500 to-orange-500' },
              { label: 'Research Papers', value: '50+', icon: BookOpen, color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our visionary leaders driving innovation and strategic direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-8xl text-cyan-400/40">
                    {member.department === 'ai' && <Brain />}
                    {member.department === 'leadership' && <Star />}
                    {member.department === 'security' && <Shield />}
                    {member.department === 'cloud' && <Cloud />}
                    {member.department === 'quantum' && <Atom />}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-1">{member.title}</p>
                    <p className="text-gray-400 text-sm">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <span className="text-gray-400">Experience:</span>
                      <span className="text-white ml-2">{member.experience}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Education:</span>
                      <span className="text-white ml-2">{member.education}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Team by Department
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our talented team members across different departments and specialties
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <label className="block text-sm font-medium text-cyan-400 mb-3">Department</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedDepartment === dept.id
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <dept.icon className="w-4 h-4" />
                    <span>{dept.name}</span>
                    <span className="text-xs text-gray-400">({dept.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-48">
              <label className="block text-sm font-medium text-cyan-400 mb-3">Role</label>
              <div className="space-y-2">
                {[
                  { id: 'all', name: 'All Roles', count: teamMembers.length },
                  { id: 'leadership', name: 'Leadership', count: teamMembers.filter(m => m.leadership).length },
                  { id: 'individual', name: 'Individual Contributors', count: teamMembers.filter(m => !m.leadership).length }
                ].map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedRole === role.id
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {role.name} ({role.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl text-cyan-400/40">
                    {member.department === 'ai' && <Brain />}
                    {member.department === 'leadership' && <Star />}
                    {member.department === 'security' && <Shield />}
                    {member.department === 'cloud' && <Cloud />}
                    {member.department === 'quantum' && <Atom />}
                    {member.department === 'engineering' && <Code />}
                    {member.department === 'business' && <TrendingUp />}
                    {member.department === 'design' && <PenTool />}
                    {member.department === 'data' && <Database />}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mb-1">{member.title}</p>
                    <p className="text-gray-400 text-xs capitalize">{member.department}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our team and drive our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation First', icon: Lightbulb, description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.' },
              { title: 'Collaboration', icon: Users, description: 'Great ideas come from diverse perspectives working together towards common goals.' },
              { title: 'Excellence', icon: Star, description: 'We strive for excellence in everything we do, from code quality to client relationships.' },
              { title: 'Continuous Learning', icon: BookOpen, description: 'Our team is committed to lifelong learning and staying ahead of technology trends.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/30">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to work with cutting-edge technologies and brilliant minds? 
              Explore career opportunities at Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
