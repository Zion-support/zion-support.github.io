import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen, HelpCircle, FileText, Video, Code, GraduationCap,
  Users, TrendingUp, BarChart3, Brain, Shield, Cloud, Cpu,
  Lock, Heart, Globe, ShoppingCart, Star, Rocket, Zap
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Learning & Documentation',
      icon: BookOpen,
      color: 'from-blue-600 to-cyan-600',
      resources: [
        { name: 'Help Center', href: '/help', description: 'Comprehensive support documentation', icon: HelpCircle },
        { name: 'Documentation', href: '/documentation', description: 'Technical documentation and guides', icon: FileText },
        { name: 'Training', href: '/training', description: 'Professional development and learning resources', icon: GraduationCap },
        { name: 'API Documentation', href: '/documentation', description: 'Developer resources and API guides', icon: Code }
      ]
    },
    {
      title: 'Content & Insights',
      icon: TrendingUp,
      color: 'from-purple-600 to-pink-600',
      resources: [
        { name: 'Blog', href: '/blog', description: 'Industry insights and latest updates', icon: FileText },
        { name: 'Webinars', href: '/webinars', description: 'Educational events and presentations', icon: Video },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research and technical papers', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', description: 'Real-world success stories', icon: BarChart3 }
      ]
    },
    {
      title: 'Support & Community',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      resources: [
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions', icon: HelpCircle },
        { name: 'Support Center', href: '/support', description: 'Technical support and troubleshooting', icon: HelpCircle },
        { name: 'Community', href: '/community', description: 'User community and forums', icon: Users },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch with our team', icon: HelpCircle }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Business Intelligence Guide',
      description: 'Complete guide to implementing AI-powered analytics in your organization',
      href: '/services/ai-business-intelligence',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Cloud DevOps Best Practices',
      description: 'Essential practices for modern cloud infrastructure and automation',
      href: '/services/cloud-devops',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Comprehensive security framework for enterprise protection',
      href: '/services/ai-cybersecurity-suite',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Digital Transformation Roadmap',
      description: 'Step-by-step guide to modernizing your business processes',
      href: '/services/digital-transformation',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8">
              Access comprehensive documentation, learning materials, and support resources to maximize your success with Zion Tech Group solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/help"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <HelpCircle size={20} />
                Get Help
              </Link>
              <Link
                to="/documentation"
                className="px-8 py-3 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <FileText size={20} />
                View Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Organized resources to help you find exactly what you need, from technical documentation to learning materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.href}
                      className="block p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <resource.icon size={20} className="text-slate-500" />
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Essential guides and resources to help you get started with our most popular solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <Link to={resource.href}>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center mb-6`}>
                    <resource.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 hover:text-purple-600 transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200">
                    Learn More
                    <TrendingUp size={20} className="ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Fast access to the most commonly needed resources and support options.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Help Center', href: '/help', icon: HelpCircle, color: 'from-blue-600 to-cyan-600' },
              { name: 'Documentation', href: '/documentation', icon: FileText, color: 'from-purple-600 to-pink-600' },
              { name: 'Training', href: '/training', icon: GraduationCap, color: 'from-green-600 to-emerald-600' },
              { name: 'Support', href: '/support', icon: Users, color: 'from-orange-600 to-red-600' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Link to={item.href}>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white hover:text-purple-600 transition-colors duration-200">
                    {item.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
