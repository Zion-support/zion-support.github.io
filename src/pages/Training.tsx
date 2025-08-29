import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileText2,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Phone,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Code,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Brain,
  Cloud,
  Shield,
  Server,
  Database,
  Zap,
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Eye,
  Fingerprint,
  Key,
  Rocket,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Ribbon,
  Crown,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Pearl,
  Jade,
  Onyx,
  Quartz,
  Marble,
  Granite,
  Limestone,
  Sandstone,
  Shale,
  Clay,
  Silt,
  Loam,
  Peat,
  Chalk,
  Gypsum,
  Halite,
  Calcite,
  Dolomite,
  Feldspar,
  Mica,
  Hornblende,
  Pyroxene,
  Olivine,
  Garnet,
  Staurolite,
  Kyanite,
  Sillimanite,
  Andalusite,
  Chiastolite,
  Cordierite,
  Tourmaline,
  Beryl,
  Spinel,
  Corundum,
  Zircon,
  Rutile,
  Brookite,
  Anatase,
  Perovskite,
  Ilmenite,
  Magnetite,
  Hematite,
  Goethite,
  Limonite,
  Siderite,
  Pyrite,
  Marcasite,
  Chalcopyrite,
  Bornite,
  Covellite,
  Chalcocite,
  Galena,
  Sphalerite,
  Cinnabar,
  Realgar,
  Orpiment,
  Stibnite,
  Bismuthinite,
  Molybdenite,
  Wolframite,
  Scheelite,
  Cassiterite,
  Columbite,
  Tantalite,
  Uraninite,
  Pitchblende,
  Carnotite,
  Autunite,
  Torbernite,
  Zeunerite,
  Rocket
} from 'lucide-react';

const trainingCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Master artificial intelligence and machine learning technologies',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    courses: [
      { title: 'AI Fundamentals', duration: '8 hours', level: 'Beginner', price: '$299' },
      { title: 'Machine Learning with Python', duration: '16 hours', level: 'Intermediate', price: '$499' },
      { title: 'Deep Learning & Neural Networks', duration: '24 hours', level: 'Advanced', price: '$799' },
      { title: 'AI Ethics & Responsible AI', duration: '6 hours', level: 'Intermediate', price: '$199' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Learn cloud infrastructure and DevOps best practices',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    courses: [
      { title: 'Cloud Architecture Fundamentals', duration: '12 hours', level: 'Beginner', price: '$399' },
      { title: 'DevOps Pipeline Implementation', duration: '20 hours', level: 'Intermediate', price: '$599' },
      { title: 'Kubernetes & Container Orchestration', duration: '18 hours', level: 'Advanced', price: '$699' },
      { title: 'Infrastructure as Code', duration: '14 hours', level: 'Intermediate', price: '$449' }
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Develop expertise in cybersecurity and threat protection',
    icon: Shield,
    color: 'from-red-400 to-pink-500',
    courses: [
      { title: 'Cybersecurity Fundamentals', duration: '10 hours', level: 'Beginner', price: '$349' },
      { title: 'Threat Detection & Response', duration: '16 hours', level: 'Intermediate', price: '$549' },
      { title: 'Security Compliance & Auditing', duration: '12 hours', level: 'Intermediate', price: '$399' },
      { title: 'Advanced Penetration Testing', duration: '20 hours', level: 'Advanced', price: '$749' }
    ]
  },
  {
    title: 'Data & Analytics',
    description: 'Master data science and business intelligence',
    icon: BarChart3,
    color: 'from-green-400 to-emerald-500',
    courses: [
      { title: 'Data Analytics Fundamentals', duration: '8 hours', level: 'Beginner', price: '$249' },
      { title: 'Business Intelligence Tools', duration: '14 hours', level: 'Intermediate', price: '$449' },
      { title: 'Big Data Processing', duration: '18 hours', level: 'Advanced', price: '$649' },
      { title: 'Data Visualization & Storytelling', duration: '10 hours', level: 'Intermediate', price: '$299' }
    ]
  }
];

const featuredCourses = [
  {
    title: 'Complete AI Developer Bootcamp',
    description: 'Comprehensive training program covering all aspects of AI development',
    instructor: 'Dr. Sarah Chen',
    duration: '40 hours',
    level: 'Intermediate',
    price: '$1,299',
    rating: 4.9,
    students: 1247,
    badge: 'Bestseller',
    icon: Brain,
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Cloud Migration Masterclass',
    description: 'Learn to migrate legacy systems to modern cloud infrastructure',
    instructor: 'Mike Rodriguez',
    duration: '32 hours',
    level: 'Advanced',
    price: '$999',
    rating: 4.8,
    students: 892,
    badge: 'Popular',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Cybersecurity Professional Certification',
    description: 'Prepare for industry-recognized cybersecurity certifications',
    instructor: 'Lisa Thompson',
    duration: '48 hours',
    level: 'Advanced',
    price: '$1,499',
    rating: 4.9,
    students: 756,
    badge: 'Certified',
    icon: Shield,
    color: 'from-red-400 to-pink-500'
  }
];

const learningPaths = [
  {
    title: 'AI Engineer Path',
    description: 'Complete path to become a certified AI engineer',
    duration: '6 months',
    courses: 8,
    certification: 'AI Engineer Certification',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    skills: ['Machine Learning', 'Deep Learning', 'AI Ethics', 'Model Deployment']
  },
  {
    title: 'DevOps Engineer Path',
    description: 'Master DevOps practices and cloud infrastructure',
    duration: '4 months',
    courses: 6,
    certification: 'DevOps Engineer Certification',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    skills: ['Cloud Architecture', 'CI/CD', 'Containerization', 'Infrastructure as Code']
  },
  {
    title: 'Cybersecurity Specialist Path',
    description: 'Develop expertise in cybersecurity and threat protection',
    duration: '5 months',
    courses: 7,
    certification: 'Cybersecurity Specialist Certification',
    icon: Shield,
    color: 'from-red-400 to-pink-500',
    skills: ['Threat Detection', 'Incident Response', 'Compliance', 'Penetration Testing']
  }
];

const trainingStats = [
  {
    metric: '10,000+',
    label: 'Students Trained',
    description: 'Professionals who have completed our training programs'
  },
  {
    metric: '50+',
    label: 'Expert Instructors',
    description: 'Industry professionals with real-world experience'
  },
  {
    metric: '200+',
    label: 'Course Hours',
    description: 'Comprehensive training content across all topics'
  },
  {
    metric: '95%',
    label: 'Success Rate',
    description: 'Students who successfully complete their training'
  }
];

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? trainingCategories 
    : trainingCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Professional training programs and certifications in AI, cloud computing, cybersecurity, and data analytics. Advance your career with expert-led courses."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Training & Certification
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Advance your career with expert-led training programs in cutting-edge technologies. 
              Get certified and stay ahead in the rapidly evolving tech landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-400/25"
              >
                Start Learning
              </Link>
              <Link
                to="/training/catalog"
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training by the Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of professionals who have advanced their careers with our training programs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trainingStats.map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and highly-rated training programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-2 py-1 bg-amber-400/10 text-amber-400 text-xs rounded-full">
                    {course.badge}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {course.title}
                </h4>
                <p className="text-slate-300 text-sm mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Instructor:</span>
                    <span className="text-white">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Duration:</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Level:</span>
                    <span className="text-white">{course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-white text-sm">{course.rating}</span>
                    <span className="text-slate-400 text-sm">({course.students})</span>
                  </div>
                  <div className="text-amber-400 font-semibold">{course.price}</div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-300">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive training programs organized by technology domain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{category.title}</h4>
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="space-y-3 mb-4">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <h5 className="text-white font-medium text-sm">{course.title}</h5>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-slate-400 text-xs">{course.duration}</span>
                          <span className="text-slate-400 text-xs">{course.level}</span>
                        </div>
                      </div>
                      <div className="text-amber-400 font-semibold text-sm">{course.price}</div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full px-4 py-2 border border-amber-400 text-amber-400 font-medium rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                  View All Courses
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learning Paths
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <path.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3 text-center">{path.title}</h4>
                <p className="text-slate-300 text-sm mb-4 text-center">{path.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Duration:</span>
                    <span className="text-white">{path.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Courses:</span>
                    <span className="text-white">{path.courses}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Certification:</span>
                    <span className="text-white text-xs">{path.certification}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-amber-400 font-medium mb-2">Skills You'll Learn:</h5>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-300">
                  Start Path
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of professionals who have transformed their careers with our expert-led training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-400/25"
              >
                Get Started
              </Link>
              <Link
                to="/training/catalog"
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-slate-900 transition-colors duration-300"
              >
                Browse Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
