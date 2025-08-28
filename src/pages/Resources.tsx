import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle,
  ArrowRight,
  Star,
  ExternalLink,
  Play,
  Download,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Blog & Insights',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true,
      items: [
        { name: 'AI Technology Trends 2024', href: '/blog', type: 'Article' },
        { name: 'Digital Transformation Guide', href: '/blog', type: 'Guide' },
        { name: 'Cybersecurity Best Practices', href: '/blog', type: 'Article' },
        { name: 'Cloud Migration Strategies', href: '/blog', type: 'Guide' }
      ]
    },
    {
      title: 'Case Studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true,
      items: [
        { name: 'Healthcare AI Implementation', href: '/case-studies', type: 'Case Study' },
        { name: 'Financial Services Transformation', href: '/case-studies', type: 'Case Study' },
        { name: 'Manufacturing IoT Success', href: '/case-studies', type: 'Case Study' },
        { name: 'Government Digital Services', href: '/case-studies', type: 'Case Study' }
      ]
    },
    {
      title: 'White Papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: false,
      items: [
        { name: 'AI in Enterprise 2024', href: '/white-papers', type: 'White Paper' },
        { name: 'Quantum Computing Future', href: '/white-papers', type: 'White Paper' },
        { name: 'Cybersecurity Framework', href: '/white-papers', type: 'White Paper' },
        { name: 'Digital Twin Technology', href: '/white-papers', type: 'White Paper' }
      ]
    },
    {
      title: 'Webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: false,
      items: [
        { name: 'AI Strategy Workshop', href: '/webinars', type: 'Webinar' },
        { name: 'Cloud Security Best Practices', href: '/webinars', type: 'Webinar' },
        { name: 'Digital Transformation Roadmap', href: '/webinars', type: 'Webinar' },
        { name: 'Emerging Tech Trends', href: '/webinars', type: 'Webinar' }
      ]
    },
    {
      title: 'Documentation',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: false,
      items: [
        { name: 'API Reference Guide', href: '/docs', type: 'Documentation' },
        { name: 'Integration Tutorials', href: '/docs', type: 'Tutorial' },
        { name: 'Developer Quick Start', href: '/docs', type: 'Guide' },
        { name: 'Troubleshooting Guide', href: '/docs', type: 'Guide' }
      ]
    },
    {
      title: 'FAQ & Support',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: false,
      items: [
        { name: 'Common Questions', href: '/faq', type: 'FAQ' },
        { name: 'Technical Support', href: '/support', type: 'Support' },
        { name: 'Contact Support Team', href: '/contact', type: 'Support' },
        { name: 'Knowledge Base', href: '/knowledge-base', type: 'Resource' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'Pricing Guide 2030',
      description: 'Comprehensive pricing for all our AI and technology services',
      href: '/pricing-guide-2030',
      type: 'Guide',
      featured: true,
      icon: TrendingUp
    },
    {
      title: 'AI Services Overview',
      description: 'Complete guide to our AI-powered technology solutions',
      href: '/services',
      type: 'Overview',
      featured: true,
      icon: Brain
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise security standards and compliance frameworks',
      href: '/security',
      type: 'Framework',
      featured: true,
      icon: Shield
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Technology Summit 2024',
      date: 'December 15, 2024',
      time: '10:00 AM EST',
      type: 'Virtual Event',
      href: '/events/ai-summit-2024'
    },
    {
      title: 'Cybersecurity Workshop',
      date: 'December 20, 2024',
      time: '2:00 PM EST',
      type: 'Workshop',
      href: '/events/cybersecurity-workshop'
    },
    {
      title: 'Cloud Migration Webinar',
      date: 'January 10, 2025',
      time: '11:00 AM EST',
      type: 'Webinar',
      href: '/events/cloud-migration-webinar'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of resources including blog posts, case studies, white papers, webinars, documentation, and support materials."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Knowledge
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive library of insights, guides, case studies, and technical 
              resources to help you stay ahead in the rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get Support
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start with our most popular and comprehensive resources to get up to speed 
              with our latest technology solutions and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{resource.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                <a
                  href={resource.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our organized collection of resources by category to find exactly 
              what you need for your technology journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  category.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${
                    category.featured 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                      : 'bg-slate-700/50'
                  }`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      {category.featured && <Star className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">{item.type}</span>
                        <span className="text-white group-hover:text-cyan-400 transition-colors">{item.name}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-slate-700/50">
                  <a
                    href={category.items[0]?.href || '#'}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    View All {category.title}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our upcoming webinars, workshops, and events to learn from industry 
              experts and stay updated with the latest technology trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">{event.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
                <a
                  href={event.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need More Specific Resources?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our team is here to help you find 
              the right resources or create custom content for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Request Custom Content
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
