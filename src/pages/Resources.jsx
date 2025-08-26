import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Users, 
  HelpCircle, 
  Map, 
  GraduationCap, 
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Download,
  Play
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Documentation & Guides',
      description: 'Comprehensive technical documentation and implementation guides',
      icon: FileText,
      resources: [
        { name: 'API Documentation', href: '/docs', description: 'Complete API reference and integration guides' },
        { name: 'Developer Guides', href: '/docs', description: 'Step-by-step development tutorials' },
        { name: 'Best Practices', href: '/docs', description: 'Industry best practices and standards' },
        { name: 'Architecture Patterns', href: '/docs', description: 'Design patterns and system architecture guides' }
      ]
    },
    {
      title: 'Learning & Training',
      description: 'Educational resources to help you master our technologies',
      icon: GraduationCap,
      resources: [
        { name: 'Training Programs', href: '/training', description: 'Structured learning paths and certifications' },
        { name: 'Webinars', href: '/webinars', description: 'Live and recorded educational sessions' },
        { name: 'Workshops', href: '/training', description: 'Hands-on interactive learning experiences' },
        { name: 'Video Tutorials', href: '/docs', description: 'Visual learning content and demonstrations' }
      ]
    },
    {
      title: 'Knowledge Base',
      description: 'Articles, white papers, and research insights',
      icon: BookOpen,
      resources: [
        { name: 'Blog', href: '/blog', description: 'Latest insights, updates, and industry trends' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and technical analysis' },
        { name: 'Case Studies', href: '/services/showcase', description: 'Real-world implementation examples' },
        { name: 'Research & Development', href: '/research', description: 'Cutting-edge research and innovation' }
      ]
    },
    {
      title: 'Support & Community',
      description: 'Get help and connect with other users',
      icon: Users,
      resources: [
        { name: 'Help Center', href: '/help', description: 'Self-service support and troubleshooting' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions and answers' },
        { name: 'Community Forum', href: '/community', description: 'Connect with other users and experts' },
        { name: 'Contact Support', href: '/contact', description: 'Direct support from our team' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'Getting Started Guide',
      description: 'Quick start guide for new users',
      type: 'Guide',
      href: '/docs',
      icon: FileText
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      type: 'Documentation',
      href: '/docs',
      icon: FileText
    },
    {
      title: 'Best Practices',
      description: 'Industry standards and recommendations',
      type: 'Guide',
      href: '/docs',
      icon: Lightbulb
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      type: 'Video',
      href: '/docs',
      icon: Video
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Resources
              <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                & Knowledge
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access our comprehensive collection of documentation, guides, training materials, 
              and support resources to help you succeed with Zion Tech Group solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Browse Documentation
              </Link>
              <Link
                to="/help"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get Help
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these essential resources to get up and running quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {resource.description}
                </p>
                
                <Link
                  to={resource.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our organized collection of resources by category to find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/30"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <Link
                      key={resourceIndex}
                      to={resource.href}
                      className="block p-4 bg-zinc-700/30 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">
                            {resource.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 text-center border border-purple-500/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you navigate 
              our resources and get the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="px-8 py-4 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Visit Help Center
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zinc-900 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
