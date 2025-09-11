import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Newspaper,
  HelpCircle,
  BookOpen,
  Code,
  Cpu,
  Video,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Zap,
  Brain,
  Shield,
  Cloud,
  Server,
} from 'lucide-react';

const resourceCategories = [
  {
    title: 'Knowledge Base',
    description: 'Comprehensive guides and documentation',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    resources: [
      {
        name: 'Documentation',
        path: '/documentation',
        icon: BookOpen,
        description: 'Technical documentation and guides',
      },
      {
        name: 'API Documentation',
        path: '/api-docs',
        icon: Code,
        description: 'API reference and integration guides',
      },
      {
        name: 'Developer Portal',
        path: '/developer',
        icon: Cpu,
        description: 'Developer resources and tools',
      },
      {
        name: 'Training Materials',
        path: '/training',
        icon: Video,
        description: 'Training courses and materials',
      },
    ],
  },
  {
    title: 'Latest Insights',
    description: 'Stay updated with industry trends and news',
    icon: Newspaper,
    color: 'from-green-500 to-emerald-500',
    resources: [
      {
        name: 'Blog',
        path: '/blog',
        icon: FileText,
        description: 'Latest insights and thought leadership',
      },
      {
        name: 'News',
        path: '/news',
        icon: Newspaper,
        description: 'Company and industry news',
      },
      {
        name: 'Case Studies',
        path: '/case-studies',
        icon: Target,
        description: 'Success stories and implementations',
      },
      {
        name: 'White Papers',
        path: '/white-papers',
        icon: FileText,
        description: 'In-depth research and analysis',
      },
    ],
  },
  {
    title: 'Support & Help',
    description: 'Get help when you need it',
    icon: HelpCircle,
    color: 'from-purple-500 to-pink-500',
    resources: [
      {
        name: 'Help Center',
        path: '/help',
        icon: HelpCircle,
        description: 'Self-service help and tutorials',
      },
      {
        name: 'FAQ',
        path: '/faq',
        icon: HelpCircle,
        description: 'Frequently asked questions',
      },
      {
        name: 'Contact Support',
        path: '/contact',
        icon: Users,
        description: 'Get in touch with our team',
      },
      {
        name: 'System Status',
        path: '/status',
        icon: TrendingUp,
        description: 'Service status and updates',
      },
    ],
  },
  {
    title: 'Service Resources',
    description: 'Resources specific to our services',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    resources: [
      {
        name: 'AI Services Guide',
        path: '/ai-services',
        icon: Brain,
        description: 'AI and machine learning resources',
      },
      {
        name: 'Cloud Solutions',
        path: '/services/cloud-devops',
        icon: Cloud,
        description: 'Cloud and DevOps resources',
      },
      {
        name: 'Security Resources',
        path: '/services/cybersecurity',
        icon: Shield,
        description: 'Cybersecurity best practices',
      },
      {
        name: 'Infrastructure Guide',
        path: '/services/it-infrastructure',
        icon: Server,
        description: 'IT infrastructure resources',
      },
    ],
  },
];

const featuredResources = [
  {
    title: 'Getting Started Guide',
    description:
      'Complete guide to getting started with Zion Tech Group services',
    path: '/documentation/getting-started',
    icon: BookOpen,
    category: 'Guide',
  },
  {
    title: 'AI Implementation Best Practices',
    description:
      'Learn the best practices for implementing AI solutions in your organization',
    path: '/blog/ai-implementation-best-practices',
    icon: Brain,
    category: 'Article',
  },
  {
    title: 'Cloud Migration Checklist',
    description:
      'Comprehensive checklist for successful cloud migration projects',
    path: '/documentation/cloud-migration',
    icon: Cloud,
    category: 'Checklist',
  },
];

export default function Resources() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      {/* Header */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Resources & Knowledge
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Access comprehensive resources, documentation, and insights to
              help you succeed with Zion Tech Group's innovative solutions.
            </p>
            <div className='flex items-center justify-center space-x-4'>
              <Link
                to='/contact'
                className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2'
              >
                <span>Get Support</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                to='/sitemap'
                className='px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200'
              >
                Explore All Pages
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-12'
        >
          <h2 className='text-3xl font-bold text-white mb-4 text-center'>
            Featured Resources
          </h2>
          <p className='text-gray-300 text-center max-w-2xl mx-auto'>
            Start with these essential resources to get the most out of our
            services
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
              className='group'
            >
              <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center'>
                    <resource.icon className='w-6 h-6 text-white' />
                  </div>
                  <span className='text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full'>
                    {resource.category}
                  </span>
                </div>

                <h3 className='text-lg font-bold text-white mb-3'>
                  {resource.title}
                </h3>
                <p className='text-gray-300 mb-4 text-sm leading-relaxed'>
                  {resource.description}
                </p>

                <Link
                  to={resource.path}
                  className='inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm'
                >
                  <span>Read More</span>
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resource Categories */}
      <div className='bg-slate-800/30 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-white mb-4'>
              Resource Categories
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Organized resources to help you find exactly what you need
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
                className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6'
              >
                <div className='flex items-center space-x-4 mb-6'>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <category.icon className='w-8 h-8 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      {category.title}
                    </h3>
                    <p className='text-gray-300 text-sm'>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className='space-y-3'>
                  {category.resources.map(resource => (
                    <Link
                      key={resource.name}
                      to={resource.path}
                      className='flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group'
                    >
                      <div className='w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-200'>
                        <resource.icon className='w-4 h-4 text-gray-400 group-hover:text-white' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-200'>
                          {resource.name}
                        </h4>
                        <p className='text-sm text-gray-400'>
                          {resource.description}
                        </p>
                      </div>
                      <ArrowRight className='w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200' />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center'
        >
          <h2 className='text-3xl font-bold text-white mb-4'>
            Need Help Finding Resources?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Our team is here to help you find the right resources and get the
            support you need.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Link
              to='/contact'
              className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2'
            >
              <span>Contact Support</span>
              <ArrowRight className='w-5 h-5' />
            </Link>
            <Link
              to='/help'
              className='px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200'
            >
              Visit Help Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
