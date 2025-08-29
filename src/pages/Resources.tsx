import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Users, 
  Target, 
  Code, 
  HelpCircle, 
  DollarSign,
  ArrowRight,
  Star,
  Brain,
  Zap,
  Rocket,
  Heart,
  Shield,
  Cloud,
  Cpu,
  Globe,
  Leaf,
  Atom,
  TrendingUp,
  Building2,
  HeartHandshake,
  Award,
  GraduationCap,
  LifeBuoy,
  MessageCircle,
  Search,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Scale,
  Car,
  Home,
  Factory,
  City,
  CheckCircle
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Knowledge & Insights',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive guides, research, and industry insights',
      resources: [
        { name: 'Blog & Insights', href: '/blog', icon: BookOpen, description: 'Latest industry trends and insights' },
        { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Real-world success stories' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research and analysis' },
        { name: 'Webinars', href: '/webinars', icon: Users, description: 'Expert-led learning sessions' },
        { name: 'Documentation', href: '/documentation', icon: Code, description: 'Technical guides and APIs' }
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      color: 'from-green-500 to-emerald-500',
      description: 'Get help, support, and answers to your questions',
      resources: [
        { name: 'FAQ & Support', href: '/faq', icon: HelpCircle, description: 'Get help and answers' },
        { name: 'Help Center', href: '/help', icon: MessageCircle, description: 'Comprehensive help resources' },
        { name: 'Support Portal', href: '/support', icon: LifeBuoy, description: 'Technical support and assistance' },
        { name: 'Training Resources', href: '/training', icon: GraduationCap, description: 'Learn and develop skills' },
        { name: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our team' }
      ]
    },
    {
      title: 'Business Resources',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      description: 'Tools and resources for business growth and optimization',
      resources: [
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', icon: DollarSign, description: 'Complete pricing information' },
        { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026', icon: DollarSign, description: 'Complete Pricing & ROI Analysis' },
        { name: 'Pricing Guide 2027', href: '/comprehensive-pricing-guide-2027', icon: DollarSign, description: 'Advanced pricing strategies' },
        { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
        { name: 'Partners', href: '/partners', icon: HeartHandshake, description: 'Strategic partnerships' }
      ]
    },
    {
      title: 'Technology Resources',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      description: 'Technical documentation and development resources',
      resources: [
        { name: 'Developer Portal', href: '/documentation', icon: Code, description: 'API documentation and SDKs' },
        { name: 'Technology Stack', href: '/about', icon: Server, description: 'Our technology infrastructure' },
        { name: 'Best Practices', href: '/blog', icon: Award, description: 'Industry best practices' },
        { name: 'Integration Guides', href: '/documentation', icon: Network, description: 'System integration guides' },
        { name: 'Performance Tips', href: '/blog', icon: Zap, description: 'Optimization and performance' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'AI Business Intelligence Guide',
      description: 'Comprehensive guide to implementing AI-powered business intelligence solutions',
      href: '/services/ai-business-intelligence',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      featured: true
    },
    {
      title: 'Micro SaaS Implementation',
      description: 'Step-by-step guide to building and deploying micro SaaS solutions',
      href: '/services/micro-saas',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      title: 'Digital Transformation Roadmap',
      description: 'Strategic roadmap for digital transformation initiatives',
      href: '/services/digital-transformation',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices for modern businesses',
      href: '/services/cybersecurity',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      featured: true
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Emerging Tech 2030', href: '/emerging-tech-2030', icon: Rocket, description: 'Next-generation technologies' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access comprehensive guides, documentation, and resources to accelerate your digital transformation journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Expert Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start with our most popular and comprehensive resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color} w-fit mb-4`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  {resource.featured && (
                    <span className="inline-flex items-center gap-1 mt-4 text-xs text-cyan-400">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resource Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Organized resources to help you find exactly what you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors">
                        <resource.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {resource.name}
                        </h4>
                        <p className="text-sm text-gray-400">{resource.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Popular resources and services for quick access
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 text-center group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 w-fit mx-auto mb-4">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Specific Help?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Our team of experts is ready to help you find the right resources and solutions for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
