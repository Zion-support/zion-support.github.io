
import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain, 
  Users,
  Clock,
  Award,
  CheckCircle,
  Play,
  Download,
  Star,
  Target,
  TrendingUp,
  Rocket,
  Lightbulb,
  Code,
  Globe,
  Server,
  Cpu,
  Network,
  BarChart3,
  MessageSquare,
  FileText,
  ExternalLink
} from 'lucide-react';

<<<<<<< HEAD
export default function Training() {
  const trainingPrograms = [
    {
      name: 'AI Fundamentals',
      description: 'Master the basics of artificial intelligence and machine learning',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$299',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      featured: true,
      topics: ['Machine Learning Basics', 'Neural Networks', 'Data Preprocessing', 'Model Training']
    },
    {
      name: 'Cloud & DevOps',
      description: 'Learn modern cloud infrastructure and deployment practices',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$399',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      featured: true,
      topics: ['AWS/Azure Fundamentals', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      name: 'Cybersecurity',
      description: 'Master modern security practices and threat detection',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$499',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      featured: false,
      topics: ['Network Security', 'Penetration Testing', 'Incident Response', 'Security Compliance']
    },
    {
      name: 'Data Analytics',
      description: 'Transform data into actionable business insights',
      duration: '7 weeks',
      level: 'Intermediate',
      price: '$349',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      featured: false,
      topics: ['Data Visualization', 'Statistical Analysis', 'Business Intelligence', 'Predictive Modeling']
    }
  ];

  const certificationPaths = [
    {
      name: 'AI Engineer',
      description: 'Comprehensive AI development and deployment certification',
      requirements: ['AI Fundamentals', 'Machine Learning', 'Deep Learning', 'AI Ethics'],
      duration: '6 months',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Cloud Architect',
      description: 'Expert-level cloud infrastructure design certification',
      requirements: ['Cloud Fundamentals', 'DevOps Practices', 'Security', 'Scalability'],
      duration: '8 months',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Security Specialist',
      description: 'Advanced cybersecurity and threat management certification',
      requirements: ['Security Fundamentals', 'Penetration Testing', 'Incident Response', 'Compliance'],
      duration: '10 months',
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Data Scientist',
      description: 'Expert data analysis and machine learning certification',
      requirements: ['Statistics', 'Machine Learning', 'Data Engineering', 'Business Intelligence'],
      duration: '7 months',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const learningFeatures = [
    {
      title: 'Interactive Labs',
      description: 'Hands-on practice with real-world scenarios',
      icon: Code,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals',
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Flexible Learning',
      description: 'Study at your own pace, 24/7 access',
      icon: Clock,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Certification',
      description: 'Earn recognized industry credentials',
      icon: Award,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Comprehensive training programs and certifications in AI, cloud computing, cybersecurity, and data analytics. Learn from industry experts and advance your career."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Professional Development
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training & Certification
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advance your career with our comprehensive training programs in AI, cloud computing, cybersecurity, and data analytics. Learn from industry experts and earn recognized certifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                View Programs
              </a>
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <Award className="w-4 h-4" />
                Certifications
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry-leading training programs designed to accelerate your career growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="programs" className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Training Programs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive courses designed to build real-world skills and knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:bg-slate-700/50 transition-all duration-300 ${
                  program.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white mb-1">{program.price}</div>
                    <div className="text-sm text-gray-400">Total Cost</div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">{program.name}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full">
                    {program.level}
                  </span>
                  {program.featured && (
                    <span className="inline-flex items-center gap-1 text-cyan-400">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">What You'll Learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 w-full justify-center"
                >
                  <Play className="w-4 h-4" />
                  Enroll Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Paths Section */}
      <section id="certifications" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Certification Paths</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Structured learning paths leading to industry-recognized certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificationPaths.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{cert.name}</h3>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Requirements:</h4>
                  <div className="space-y-2">
                    {cert.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <Target className="w-4 h-4 text-cyan-400" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline mr-2" />
                    {cert.duration}
                  </span>
                  <a
                    href="/request-quote"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm rounded-lg transition-colors"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">5K+</div>
              <div className="text-gray-400">Graduates</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Expert Instructors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Learning Access</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Advance Your Career?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our training programs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                Get Started
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600"
              >
                <MessageSquare className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
>>>>>>> origin/merged-prs
