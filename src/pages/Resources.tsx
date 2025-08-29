import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Video, 
  Code, 
  Users, 
  HelpCircle, 
  PenTool, 
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Tag,
  Eye,
  MessageCircle,
  Globe,
  Database,
  Shield,
  Rocket,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementations',
      icon: Target,
      color: 'from-blue-500 to-indigo-500',
      resources: [
        {
          title: 'AI Business Intelligence Implementation',
          description: 'How a Fortune 500 company achieved 300% ROI with our AI BI solution',
          type: 'Case Study',
          readTime: '8 min read',
          category: 'AI & Analytics',
          href: '/case-studies'
        },
        {
          title: 'Healthcare AI Platform Success',
          description: 'Digital transformation journey of a major healthcare provider',
          type: 'Case Study',
          readTime: '12 min read',
          category: 'Healthcare',
          href: '/case-studies'
        },
        {
          title: 'Manufacturing IoT Solution',
          description: 'Smart factory implementation reducing downtime by 40%',
          type: 'Case Study',
          readTime: '10 min read',
          category: 'Manufacturing',
          href: '/case-studies'
        }
      ]
    },
    {
      title: 'White Papers',
      description: 'In-depth research and industry insights',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      resources: [
        {
          title: 'The Future of AI in Business',
          description: 'Comprehensive guide to AI adoption and implementation strategies',
          type: 'White Paper',
          readTime: '25 min read',
          category: 'AI & Technology',
          href: '/white-papers'
        },
        {
          title: 'Cybersecurity in the AI Era',
          description: 'Protecting your business in the age of artificial intelligence',
          type: 'White Paper',
          readTime: '20 min read',
          category: 'Security',
          href: '/white-papers'
        },
        {
          title: 'Digital Transformation Roadmap',
          description: 'Step-by-step guide to modernizing your business operations',
          type: 'White Paper',
          readTime: '30 min read',
          category: 'Strategy',
          href: '/white-papers'
        }
      ]
    },
    {
      title: 'Webinars',
      description: 'Live and recorded educational sessions',
      icon: Video,
      color: 'from-green-500 to-emerald-500',
      resources: [
        {
          title: 'AI Implementation Best Practices',
          description: 'Learn from industry experts about successful AI deployments',
          type: 'Webinar',
          duration: '60 min',
          category: 'AI & Technology',
          href: '/webinars'
        },
        {
          title: 'Cloud Migration Strategies',
          description: 'Comprehensive guide to moving your infrastructure to the cloud',
          type: 'Webinar',
          duration: '45 min',
          category: 'Cloud & DevOps',
          href: '/webinars'
        },
        {
          title: 'Cybersecurity Threat Landscape',
          description: 'Understanding and defending against modern cyber threats',
          type: 'Webinar',
          duration: '75 min',
          category: 'Security',
          href: '/webinars'
        }
      ]
    },
    {
      title: 'Documentation',
      description: 'Technical guides and API documentation',
      icon: Code,
      color: 'from-gray-500 to-slate-500',
      resources: [
        {
          title: 'API Reference Guide',
          description: 'Complete API documentation for developers',
          type: 'Documentation',
          readTime: 'Reference',
          category: 'Development',
          href: '/docs'
        },
        {
          title: 'Integration Guide',
          description: 'Step-by-step integration instructions',
          type: 'Documentation',
          readTime: 'Reference',
          category: 'Development',
          href: '/docs'
        },
        {
          title: 'Best Practices Guide',
          description: 'Development and deployment best practices',
          type: 'Documentation',
          readTime: 'Reference',
          category: 'Development',
          href: '/docs'
        }
      ]
    },
    {
      title: 'Training & Certification',
      description: 'Learning programs and skill development',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      resources: [
        {
          title: 'AI Fundamentals Course',
          description: 'Comprehensive introduction to artificial intelligence',
          type: 'Training',
          duration: '40 hours',
          category: 'AI & Technology',
          href: '/training'
        },
        {
          title: 'Cloud Architecture Certification',
          description: 'Professional cloud architecture certification program',
          type: 'Training',
          duration: '60 hours',
          category: 'Cloud & DevOps',
          href: '/training'
        },
        {
          title: 'Cybersecurity Bootcamp',
          description: 'Intensive cybersecurity training program',
          type: 'Training',
          duration: '80 hours',
          category: 'Security',
          href: '/training'
        }
      ]
    },
    {
      title: 'Community & Support',
      description: 'User community and support resources',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      resources: [
        {
          title: 'Community Forum',
          description: 'Connect with other users and share experiences',
          type: 'Community',
          readTime: 'Interactive',
          category: 'Networking',
          href: '/community'
        },
        {
          title: 'Support Center',
          description: 'Get help with technical issues and questions',
          type: 'Support',
          readTime: '24/7',
          category: 'Help',
          href: '/support'
        },
        {
          title: 'FAQ Database',
          description: 'Answers to commonly asked questions',
          type: 'Support',
          readTime: 'Reference',
          category: 'Help',
          href: '/faq'
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Business Intelligence Implementation Guide',
      description: 'Comprehensive guide to implementing AI-powered business intelligence in your organization.',
      type: 'White Paper',
      readTime: '30 min read',
      category: 'AI & Analytics',
      href: '/white-papers',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Best Practices 2024',
      description: 'Essential cybersecurity practices to protect your business in the digital age.',
      type: 'Guide',
      readTime: '25 min read',
      category: 'Security',
      href: '/white-papers',
      featured: true,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud Migration Success Stories',
      description: 'Real-world examples of successful cloud migrations and lessons learned.',
      type: 'Case Study',
      readTime: '20 min read',
      category: 'Cloud & DevOps',
      href: '/case-studies',
      featured: true,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Webinar',
      date: 'December 15, 2024',
      time: '2:00 PM EST',
      description: 'Exploring the latest AI applications in healthcare and medical technology.',
      category: 'Healthcare',
      href: '/webinars'
    },
    {
      title: 'Cybersecurity Summit 2024',
      date: 'January 20, 2025',
      time: '9:00 AM EST',
      description: 'Annual cybersecurity conference featuring industry experts and latest trends.',
      category: 'Security',
      href: '/webinars'
    },
    {
      title: 'Digital Transformation Workshop',
      date: 'February 10, 2025',
      time: '1:00 PM EST',
      description: 'Hands-on workshop for business leaders planning digital transformation.',
      category: 'Strategy',
      href: '/training'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources &
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Learning</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of resources, from case studies and white papers to webinars and training programs. 
              Stay ahead with the latest insights and knowledge in technology and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Explore Resources
              </Link>
              <Link
                to="/training"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Start Learning
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Resources</h2>
          <p className="text-xl text-gray-300">Our most popular and valuable content</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-200 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6`}>
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {resource.type}
                </span>
                <span className="text-sm text-gray-400">{resource.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{resource.category}</span>
                <Link
                  to={resource.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Resource Categories</h2>
          <p className="text-xl text-gray-300">Organized by type and topic for easy discovery</p>
        </motion.div>

        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Link
                    key={resource.title}
                    to={resource.href}
                    className="group block p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {resource.type}
                      </span>
                      <span className="text-sm text-gray-400">
                        {resource.readTime || resource.duration}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-200 mb-2">
                      {resource.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{resource.category}</span>
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-300">Join our live sessions and workshops</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-200 hover:shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">{event.date}</span>
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">{event.time}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                  {event.category}
                </span>
                <Link
                  to={event.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  Register
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with Latest Insights</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our latest resources, case studies, and industry insights. 
            Never miss an important update or learning opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Subscribe to Updates
            </Link>
            <Link
              to="/training"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Start Learning
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
