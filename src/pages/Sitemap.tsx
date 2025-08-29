import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home,
  Building2,
  Users,
  Briefcase,
  Phone,
  FileText,
  HelpCircle,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Calendar,
  Video,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Stethoscope,
  Palette,
  Lock,
  Cpu,
  Wifi,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: any;
  color: string;
  pages: {
    name: string;
    path: string;
    description?: string;
    icon?: any;
  }[];
}

export default function Sitemap() {
  const sitemapSections: SitemapSection[] = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group', icon: Home },
        { name: 'About Us', path: '/about', description: 'Learn about our company and mission', icon: Building2 },
        { name: 'Our Team', path: '/team', description: 'Meet our talented professionals', icon: Users },
        { name: 'Careers', path: '/careers', description: 'Join our growing team', icon: Briefcase },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us', icon: Phone }
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      pages: [
        { name: 'AI & Machine Learning', path: '/services/ai-ml', description: 'Artificial Intelligence solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Comprehensive security solutions', icon: Shield },
        { name: 'Cloud Computing', path: '/services/cloud', description: 'Cloud migration and management', icon: Cloud },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Data-driven insights', icon: Database },
        { name: 'IoT Solutions', path: '/services/iot', description: 'Internet of Things integration', icon: Network },
        { name: 'Blockchain', path: '/services/blockchain', description: 'Decentralized solutions', icon: Zap },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions', icon: Stethoscope },
        { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'Automated content generation', icon: Palette },
        { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI-powered security', icon: Lock },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-gen computing solutions', icon: Cpu },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Edge computing solutions', icon: Wifi }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      color: 'from-green-500 to-emerald-500',
      pages: [
        { name: 'Support Center', path: '/support', description: 'Get help and assistance', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions', icon: MessageSquare },
        { name: 'Knowledge Base', path: '/knowledge-base', description: 'Documentation and guides', icon: BookOpen },
        { name: 'Video Tutorials', path: '/video-tutorials', description: 'Learn through videos', icon: Video }
      ]
    },
    {
      title: 'Learning & Community',
      icon: GraduationCap,
      color: 'from-orange-500 to-red-500',
      pages: [
        { name: 'Training & Certification', path: '/training', description: 'Professional development programs', icon: GraduationCap },
        { name: 'Community', path: '/community', description: 'Connect with peers', icon: Users },
        { name: 'Events & Conferences', path: '/events', description: 'Upcoming events and webinars', icon: Calendar }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data', icon: Shield },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions', icon: FileText },
        { name: 'Cookie Policy', path: '/cookies', description: 'Our cookie usage policy', icon: FileText }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Site Navigation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                {' '}Sitemap
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore all the pages and resources available on our website. Find exactly what you're looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="space-y-16">
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color}`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                    <p className="text-gray-400">{section.pages.length} pages available</p>
                  </div>
                </div>

                {/* Pages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (pageIndex * 0.05) }}
                    >
                      <Link
                        to={page.path}
                        className="group block p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {page.icon && (
                              <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-blue-500/20 transition-colors">
                                <page.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                              </div>
                            )}
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {page.name}
                            </h3>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        
                        {page.description && (
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            {page.description}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="px-2 py-1 bg-slate-700/50 rounded">
                            {page.path}
                          </span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Site Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {sitemapSections.reduce((total, section) => total + section.pages.length, 0)}
                </div>
                <div className="text-gray-400">Total Pages</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {sitemapSections.find(s => s.title === 'Services')?.pages.length || 0}
                </div>
                <div className="text-gray-400">Services</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {sitemapSections.find(s => s.title === 'Support & Resources')?.pages.length || 0}
                </div>
                <div className="text-gray-400">Support Resources</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {sitemapSections.find(s => s.title === 'Learning & Community')?.pages.length || 0}
                </div>
                <div className="text-gray-400">Learning Resources</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our team is here to help you navigate our services and find the perfect solution for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Us
                <Phone className="w-5 h-5" />
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Get Support
                <HelpCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
