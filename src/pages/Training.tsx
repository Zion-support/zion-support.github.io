
import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  Play, 
  Download, 
  Award,
  Certificate,
  Video,
  FileText,
  Code,
  Brain,
  Shield,
  Cloud,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Calendar,
  MapPin,
  Globe,
  Smartphone,
  Laptop,
  Server,
  Database,
  Lock,
  Key,
  Rocket,
  Atom,
  Eye,
  MessageSquare,
  Image,
  BarChart3,
  Cpu,
  Network,
  Monitor,
  Smartphone as SmartphoneIcon,
  Tablet,
  Laptop as LaptopIcon
} from 'lucide-react';

export const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', count: 0, active: true },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12, active: false },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8, active: false },
    { id: 'cloud-devops', name: 'Cloud & DevOps', count: 10, active: false },
    { id: 'data-analytics', name: 'Data Analytics', count: 6, active: false },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 4, active: false },
    { id: 'iot-edge', name: 'IoT & Edge Computing', count: 5, active: false },
    { id: 'blockchain', name: 'Blockchain & Web3', count: 3, active: false }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning with hands-on projects and real-world applications.',
      category: 'ai-ml',
      level: 'Beginner',
      duration: '8 weeks',
      format: 'Online + Live Sessions',
      instructor: 'Dr. Sarah Chen',
      rating: 4.9,
      students: 1247,
      price: '$1,299',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      topics: ['Python Programming', 'Machine Learning Algorithms', 'Neural Networks', 'Deep Learning', 'AI Ethics'],
      certification: true,
      liveProjects: 5,
      support: '24/7'
    },
    {
      id: 2,
      title: 'Advanced Cybersecurity & Threat Intelligence',
      description: 'Learn advanced cybersecurity techniques, threat hunting, and incident response strategies.',
      category: 'cybersecurity',
      level: 'Advanced',
      duration: '10 weeks',
      format: 'Hybrid',
      instructor: 'Marcus Rodriguez',
      rating: 4.8,
      students: 892,
      price: '$1,599',
      featured: true,
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      topics: ['Penetration Testing', 'Threat Hunting', 'Incident Response', 'Security Architecture', 'Compliance'],
      certification: true,
      liveProjects: 8,
      support: '24/7'
    },
    {
      id: 3,
      title: 'Cloud-Native Development & DevOps',
      description: 'Build scalable applications using modern cloud technologies and DevOps practices.',
      category: 'cloud-devops',
      level: 'Intermediate',
      duration: '6 weeks',
      format: 'Online',
      instructor: 'Alex Thompson',
      rating: 4.7,
      students: 1102,
      price: '$999',
      featured: true,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      topics: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS/Azure/GCP', 'Microservices', 'Infrastructure as Code'],
      certification: true,
      liveProjects: 6,
      support: 'Business Hours'
    },
    {
      id: 4,
      title: 'Data Science & Business Intelligence',
      description: 'Transform raw data into actionable insights using modern analytics tools and techniques.',
      category: 'data-analytics',
      level: 'Intermediate',
      duration: '8 weeks',
      format: 'Online + Workshops',
      instructor: 'Dr. Emily Watson',
      rating: 4.6,
      students: 756,
      price: '$1,199',
      featured: false,
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      topics: ['Python & R', 'Statistical Analysis', 'Data Visualization', 'SQL & NoSQL', 'Predictive Modeling'],
      certification: true,
      liveProjects: 4,
      support: 'Business Hours'
    },
    {
      id: 5,
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to quantum computing principles, algorithms, and practical applications.',
      category: 'quantum-computing',
      level: 'Advanced',
      duration: '12 weeks',
      format: 'Online + Lab Access',
      instructor: 'Dr. James Wilson',
      rating: 4.9,
      students: 445,
      price: '$2,199',
      featured: true,
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      topics: ['Quantum Mechanics', 'Quantum Algorithms', 'Qiskit Programming', 'Quantum Cryptography', 'Quantum Machine Learning'],
      certification: true,
      liveProjects: 3,
      support: '24/7'
    },
    {
      id: 6,
      title: 'IoT & Edge Computing Solutions',
      description: 'Design and implement IoT systems with edge computing capabilities for real-time processing.',
      category: 'iot-edge',
      level: 'Intermediate',
      duration: '7 weeks',
      format: 'Hybrid',
      instructor: 'David Chen',
      rating: 4.5,
      students: 623,
      price: '$899',
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      topics: ['IoT Architecture', 'Edge Computing', 'Sensor Networks', 'Real-time Processing', 'Security'],
      certification: true,
      liveProjects: 5,
      support: 'Business Hours'
    }
  ];

  const filteredPrograms = trainingPrograms.filter(program => 
    selectedCategory === 'all' || program.category === selectedCategory
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  const getFormatIcon = (format: string) => {
    if (format.includes('Online')) return Smartphone;
    if (format.includes('Hybrid')) return Laptop;
    if (format.includes('Live')) return Users;
    return Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Professional training programs and certifications in AI, cybersecurity, cloud computing, and emerging technologies. Advance your career with expert-led courses."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Professional Development
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training &
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Certification
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advance your career with industry-leading training programs in AI, cybersecurity, 
              cloud computing, and emerging technologies. Learn from experts and earn recognized certifications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-5 h-5" />
                <span>{trainingPrograms.length} Programs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5" />
                <span>Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-emerald-400 bg-emerald-400/20 text-emerald-400'
                    : 'border-slate-600 text-gray-400 hover:border-slate-500 hover:text-gray-300'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Programs</h2>
            <p className="text-gray-400">Our most popular and highly-rated training programs</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.filter(program => program.featured).map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-400">{program.price}</div>
                      <div className="text-sm text-gray-400">Full Program</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-emerald-400 text-xs font-medium rounded-full mb-3">
                      {program.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  
                  {/* Program Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{program.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{program.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{program.instructor}</span>
                    </div>
                  </div>
                  
                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white mb-2">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="inline-block px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                      {program.topics.length > 3 && (
                        <span className="inline-block px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                          +{program.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Training Programs</h2>
            <p className="text-gray-400">Complete catalog of our professional development courses</p>
          </div>
          
          <div className="space-y-6">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-emerald-400 text-xs font-medium rounded-full">
                        {program.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(program.level)}`}>
                        {program.level}
                      </span>
                      {program.featured && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-400/30">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{program.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{program.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{program.instructor}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {program.certification && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-400/30">
                          <Certificate className="w-3 h-3" />
                          Certification
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                        <Code className="w-3 h-3" />
                        {program.liveProjects} Projects
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                        <MessageSquare className="w-3 h-3" />
                        {program.support} Support
                      </span>
                    </div>
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-3">{program.price}</div>
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Training?</h2>
            <p className="text-gray-400">Comprehensive learning experience designed for your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of real-world experience',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Award,
                title: 'Industry Certifications',
                description: 'Earn recognized certifications that advance your career',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Code,
                title: 'Hands-on Projects',
                description: 'Apply your learning with real-world projects and case studies',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Flexible Learning',
                description: 'Online, hybrid, and in-person options to fit your schedule',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: MessageSquare,
                title: '24/7 Support',
                description: 'Get help whenever you need it with our comprehensive support system',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: TrendingUp,
                title: 'Career Advancement',
                description: 'Boost your skills and advance your career with our programs',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our training programs. 
              Start your journey today and unlock new opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Browse All Programs
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
