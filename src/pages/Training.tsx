
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  Award, 
  Play, 
  Download, 
  Globe, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Video,
  FileText,
  Code,
  Rocket,
  Lock,
  Database,
  Network,
  Cpu,
  Atom,
  Leaf
} from 'lucide-react';

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const trainingCategories = [
    { id: 'all', name: 'All Programs', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 'security', name: 'Security & Compliance', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'data', name: 'Data & Analytics', icon: Database, color: 'from-indigo-500 to-purple-500' },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, color: 'from-yellow-500 to-orange-500' }
  ];

  const trainingPrograms = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals & Business Applications',
      category: 'ai',
      level: 'Beginner',
      duration: '8 weeks',
      format: 'Online + Live Sessions',
      price: '$2,999',
      description: 'Master the basics of artificial intelligence and learn how to apply AI solutions in business contexts.',
      features: [
        'Introduction to AI and Machine Learning',
        'Business Use Case Analysis',
        'AI Implementation Strategies',
        'Hands-on Projects',
        'Industry Best Practices'
      ],
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 1247,
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-advanced',
      title: 'Advanced AI & Deep Learning',
      category: 'ai',
      level: 'Advanced',
      duration: '12 weeks',
      format: 'Online + Workshops',
      price: '$4,999',
      description: 'Deep dive into advanced AI techniques including neural networks, deep learning, and AI ethics.',
      features: [
        'Neural Network Architecture',
        'Deep Learning Frameworks',
        'AI Ethics & Governance',
        'Real-world AI Projects',
        'Performance Optimization'
      ],
      instructor: 'Dr. Michael Rodriguez',
      rating: 4.8,
      students: 856,
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps Mastery',
      category: 'cloud',
      level: 'Intermediate',
      duration: '10 weeks',
      format: 'Online + Labs',
      price: '$3,499',
      description: 'Comprehensive training in cloud infrastructure, DevOps practices, and automation.',
      features: [
        'Cloud Platform Management',
        'CI/CD Pipeline Design',
        'Infrastructure as Code',
        'Monitoring & Observability',
        'DevOps Best Practices'
      ],
      instructor: 'Alex Thompson',
      rating: 4.7,
      students: 1123,
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Zero Trust',
      category: 'security',
      level: 'Intermediate',
      duration: '8 weeks',
      format: 'Online + Simulations',
      price: '$3,299',
      description: 'Learn modern cybersecurity strategies including zero trust architecture and threat detection.',
      features: [
        'Zero Trust Security Model',
        'Threat Detection & Response',
        'Security Architecture Design',
        'Compliance & Governance',
        'Incident Response Planning'
      ],
      instructor: 'Lisa Park',
      rating: 4.9,
      students: 945,
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      category: 'data',
      level: 'Beginner',
      duration: '6 weeks',
      format: 'Online + Projects',
      price: '$2,499',
      description: 'Transform data into actionable insights with modern analytics tools and techniques.',
      features: [
        'Data Visualization',
        'Statistical Analysis',
        'Business Intelligence Tools',
        'Predictive Analytics',
        'Data Storytelling'
      ],
      instructor: 'David Kim',
      rating: 4.6,
      students: 1567,
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Fundamentals',
      category: 'emerging',
      level: 'Advanced',
      duration: '10 weeks',
      format: 'Online + Quantum Labs',
      price: '$5,999',
      description: 'Explore the future of computing with quantum algorithms and quantum machine learning.',
      features: [
        'Quantum Mechanics Basics',
        'Quantum Algorithms',
        'Quantum Machine Learning',
        'Quantum Error Correction',
        'Real Quantum Hardware Access'
      ],
      instructor: 'Dr. Elena Petrova',
      rating: 4.9,
      students: 423,
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const certificationPaths = [
    {
      name: 'AI Solutions Specialist',
      level: 'Professional',
      requirements: ['AI Fundamentals', 'AI Advanced', 'AI Ethics'],
      duration: '6-12 months',
      exam: 'Online + Practical',
      validity: '2 years',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cloud DevOps Engineer',
      level: 'Professional',
      requirements: ['Cloud Fundamentals', 'Cloud DevOps Mastery', 'Infrastructure Management'],
      duration: '8-14 months',
      exam: 'Online + Lab Assessment',
      validity: '2 years',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cybersecurity Architect',
      level: 'Expert',
      requirements: ['Cybersecurity Fundamentals', 'Cybersecurity & Zero Trust', 'Security Architecture'],
      duration: '12-18 months',
      exam: 'Online + Design Project',
      validity: '3 years',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Data Science Professional',
      level: 'Professional',
      requirements: ['Data Analytics', 'Machine Learning', 'Data Engineering'],
      duration: '8-12 months',
      exam: 'Online + Capstone Project',
      validity: '2 years',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const learningResources = [
    {
      title: 'Video Tutorials',
      description: 'Comprehensive video content for all training programs',
      icon: Video,
      count: '500+ videos',
      href: '/tutorials',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Documentation',
      description: 'Detailed guides and reference materials',
      icon: FileText,
      count: '1000+ pages',
      href: '/docs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Code Examples',
      description: 'Practical code samples and templates',
      icon: Code,
      count: '200+ examples',
      href: '/code-examples',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Practice Labs',
      description: 'Hands-on exercises and real-world scenarios',
      icon: Rocket,
      count: '50+ labs',
      href: '/labs',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? trainingPrograms 
    : trainingPrograms.filter(program => program.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Training & Certification
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master cutting-edge technologies with our comprehensive training programs and earn industry-recognized certifications
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container-responsive py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {trainingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-slate-700/50 border-cyan-400/50 text-cyan-400'
                  : 'bg-slate-800/30 border-slate-700/30 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-400'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Training Programs */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Training Programs</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our comprehensive range of training programs designed to advance your career and skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-slate-800/30 border rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ${
                program.featured 
                  ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                  : 'border-slate-700/30 hover:border-cyan-400/30'
              }`}
            >
              {/* Program Header */}
              <div className={`p-6 bg-gradient-to-br ${program.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                    {program.level}
                  </span>
                  {program.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-white/80 text-sm">{program.description}</p>
              </div>

              {/* Program Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{program.format}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{program.price}</div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {program.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructor & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">{program.instructor}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-400">{program.rating}</span>
                        <span className="text-sm text-gray-500">({program.students} students)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Paths */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Certification Paths</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Build your expertise with structured certification paths that validate your skills and knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationPaths.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4`}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded">
                  {cert.level}
                </span>
                <span className="text-sm text-gray-400">• {cert.duration}</span>
              </div>
              <p className="text-gray-300 mb-4">Requirements: {cert.requirements.join(', ')}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Exam: {cert.exam}</span>
                <span>Valid: {cert.validity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="container-responsive py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Learning Resources</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Access comprehensive learning materials to support your training journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
            >
              <Link to={resource.href} className="block">
                <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-3">{resource.description}</p>
                <div className="text-cyan-400 font-medium">{resource.count}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-responsive py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our training team to discuss your learning goals and find the perfect program for you
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Middletown, DE</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Training Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/schedule-demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
