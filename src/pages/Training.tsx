import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Star,
  Search,
  Filter,
  Play,
  Download,
  ExternalLink,
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Zap,
  Globe,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  DollarSign,
  FileText,
  Lightbulb,
  Microscope,
  Rocket,
  Code,
  Network,
  Cpu,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Eye,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  price: string;
  rating: number;
  reviewCount: number;
  instructor: string;
  image: string;
  features: string[];
  tags: string[];
}

const Training: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: GraduationCap, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 4 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 3 },
    { id: 'leadership', name: 'Leadership & Management', icon: Users, count: 4 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels', count: 0 },
    { id: 'beginner', name: 'Beginner', count: 0 },
    { id: 'intermediate', name: 'Intermediate', count: 0 },
    { id: 'advanced', name: 'Advanced', count: 0 },
    { id: 'expert', name: 'Expert', count: 0 }
  ];

  const formats = [
    { id: 'all', name: 'All Formats', count: 0 },
    { id: 'online', name: 'Online', count: 0 },
    { id: 'in-person', name: 'In-Person', count: 0 },
    { id: 'hybrid', name: 'Hybrid', count: 0 },
    { id: 'self-paced', name: 'Self-Paced', count: 0 }
  ];

  const trainingCourses: TrainingCourse[] = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals & Machine Learning',
      description: 'Master the basics of artificial intelligence and machine learning with hands-on projects and real-world applications.',
      category: 'ai-ml',
      level: 'beginner',
      format: 'hybrid',
      duration: '8 weeks',
      price: '$2,499',
      rating: 4.8,
      reviewCount: 156,
      instructor: 'Dr. Sarah Chen',
      image: 'https://ziontechgroup.com/images/training/ai-fundamentals.jpg',
      features: [
        'Comprehensive AI/ML foundation',
        'Hands-on Python programming',
        'Real-world project portfolio',
        'Industry expert instruction',
        'Certificate upon completion'
      ],
      tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Neural Networks']
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & DevOps',
      description: 'Learn to design scalable cloud architectures and implement DevOps practices for modern applications.',
      category: 'cloud',
      level: 'intermediate',
      format: 'online',
      duration: '6 weeks',
      price: '$1,999',
      rating: 4.9,
      reviewCount: 203,
      instructor: 'Michael Rodriguez',
      image: 'https://ziontechgroup.com/images/training/cloud-architecture.jpg',
      features: [
        'AWS, Azure, GCP platforms',
        'Infrastructure as Code',
        'CI/CD pipeline design',
        'Container orchestration',
        'Performance optimization'
      ],
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 'cybersecurity-advanced',
      title: 'Advanced Cybersecurity & Threat Intelligence',
      description: 'Develop expertise in cybersecurity defense, threat hunting, and incident response strategies.',
      category: 'security',
      level: 'advanced',
      format: 'in-person',
      duration: '4 weeks',
      price: '$3,499',
      rating: 4.7,
      reviewCount: 89,
      instructor: 'Alex Thompson',
      image: 'https://ziontechgroup.com/images/training/cybersecurity.jpg',
      features: [
        'Penetration testing',
        'Threat intelligence analysis',
        'Incident response simulation',
        'Security tool mastery',
        'Industry certifications'
      ],
      tags: ['Penetration Testing', 'SIEM', 'Forensics', 'Compliance']
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics Mastery',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization techniques.',
      category: 'data',
      level: 'intermediate',
      format: 'hybrid',
      duration: '10 weeks',
      price: '$2,999',
      rating: 4.6,
      reviewCount: 134,
      instructor: 'Dr. Emily Watson',
      image: 'https://ziontechgroup.com/images/training/data-science.jpg',
      features: [
        'Statistical analysis',
        'Data visualization',
        'Predictive modeling',
        'Big data processing',
        'Business intelligence'
      ],
      tags: ['Python', 'R', 'Tableau', 'SQL']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Fundamentals',
      description: 'Explore the future of computing with quantum algorithms and quantum machine learning applications.',
      category: 'emerging',
      level: 'expert',
      format: 'online',
      duration: '12 weeks',
      price: '$4,999',
      rating: 4.9,
      reviewCount: 67,
      instructor: 'Dr. James Wilson',
      image: 'https://ziontechgroup.com/images/training/quantum-computing.jpg',
      features: [
        'Quantum algorithms',
        'Quantum machine learning',
        'Quantum cryptography',
        'Research collaboration',
        'Industry applications'
      ],
      tags: ['Qiskit', 'Quantum Algorithms', 'Cryptography', 'Research']
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Strategy',
      description: 'Lead organizational change with proven digital transformation frameworks and methodologies.',
      category: 'strategy',
      level: 'advanced',
      format: 'in-person',
      duration: '5 weeks',
      price: '$3,999',
      rating: 4.8,
      reviewCount: 112,
      instructor: 'Lisa Park',
      image: 'https://ziontechgroup.com/images/training/digital-transformation.jpg',
      features: [
        'Change management',
        'Technology roadmapping',
        'ROI optimization',
        'Stakeholder alignment',
        'Implementation planning'
      ],
      tags: ['Strategy', 'Change Management', 'ROI', 'Leadership']
    }
  ];

  const filteredCourses = trainingCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesLevel = activeLevel === 'all' || course.level === activeLevel;
    const matchesFormat = activeFormat === 'all' || course.format === activeFormat;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Training & Education - Zion Tech Group"
        description="Comprehensive training programs in AI, cloud computing, cybersecurity, and emerging technologies. Upskill your team with expert-led courses."
        keywords="training, education, AI training, cloud computing courses, cybersecurity training, professional development, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training & Education
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your team with expert-led training programs in AI, cloud computing, cybersecurity, and emerging technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search training courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Tabs */}
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <h3 className="text-white font-semibold mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      {category.count > 0 && (
                        <span className="ml-1 px-2 py-0.5 bg-slate-600 rounded-full text-xs">
                          {category.count}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Levels and Formats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-semibold mb-3">Skill Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setActiveLevel(level.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                          activeLevel === level.id
                            ? 'bg-green-600 text-white'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                        }`}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-3">Format</h3>
                  <div className="flex flex-wrap gap-2">
                    {formats.map((format) => (
                      <button
                        key={format.id}
                        onClick={() => setActiveFormat(format.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                          activeFormat === format.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                        }`}
                      >
                        {format.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Courses */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Available Courses
            </h2>
            <p className="text-gray-300">
              Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} matching your criteria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/20 overflow-hidden hover:border-slate-500/40 transition-all duration-300"
              >
                {/* Course Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-blue-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{course.description}</p>
                    </div>
                  </div>

                  {/* Course Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.instructor}
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(course.rating)}
                      <span className="ml-1">({course.reviewCount})</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Enroll Now
                    </button>
                    <button className="px-4 py-2 border border-slate-600 text-gray-300 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss custom training programs tailored to your organization's specific needs and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Training Inquiry"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Training Team
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
