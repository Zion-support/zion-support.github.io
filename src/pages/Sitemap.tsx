import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import {
  BarChart3,
  ShoppingCart,
  Building,
  Star,
  Target,
  DollarSign,
  Mail,
  Video,
  Heart,
  Globe,
  ArrowRight
} from 'lucide-react';

interface SitemapLink {
  name: string;
  path: string;
  description: string;
}

interface SitemapSection {
  title: string;
  icon: any;
  links: SitemapLink[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Data Analytics & AI',
    icon: BarChart3,
    links: [
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis' },
      { name: 'AI Financial Trading', path: '/services/ai-financial-trading', description: 'AI-powered trading' },
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', path: '/services/helpdesk', description: 'Customer support system' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support system' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Returns processing system' },
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Building,
    links: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise-grade solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare industry solutions' },
    ]
  },
  {
    title: 'Specialized Services',
    icon: Star,
    links: [
      { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', description: 'Legal document AI' },
      { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', description: 'Content creation AI' },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform', description: 'HR automation platform' },
      { name: 'AI Content Creation', path: '/services/ai-content-creation', description: 'AI content generation' },
      { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', description: 'AI security solutions' },
    ]
  },
  {
    title: 'Advanced Service Showcases',
    icon: Target,
    links: [
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
      { name: '2029 Cutting-Edge Services', path: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
      { name: 'Comprehensive Services 2025', path: '/comprehensive-services-showcase-2025', description: 'Comprehensive service overview' },
      { name: 'Innovative Services 2025', path: '/innovative-services-showcase-2025', description: 'Innovative service showcase' },
      { name: 'Ultimate Innovative Services 2025', path: '/ultimate-innovative-services-showcase-2025', description: 'Ultimate innovative services' },
      { name: 'New Services 2025', path: '/new-services-showcase-2025', description: 'New service offerings' },
    ]
  },
  {
    title: 'Pricing & Guides',
    icon: DollarSign,
    links: [
      { name: 'Comprehensive Pricing 2026', path: '/comprehensive-pricing-2026', description: '2026 pricing guide' },
      { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', description: '2028 pricing guide' },
      { name: 'Comprehensive Pricing Guide 2027', path: '/comprehensive-pricing-guide-2027', description: '2027 pricing guide' },
    ]
  }
];

interface SitemapSection {
  title: string;
  icon: any;
  description: string;
  links: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'Main Pages',
    icon: Globe,
    description: 'Core website pages and information',
    links: [
      { name: 'Home', href: '/', description: 'Main landing page' },
      { name: 'About', href: '/about', description: 'Company information and team' },
      { name: 'Services', href: '/services', description: 'Overview of all services' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' },
      { name: 'Partners', href: '/partners', description: 'Partnership information' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', href: '/help', description: 'Support and documentation' },
      { name: 'News', href: '/news', description: 'Company updates' },
      { name: 'Sitemap', href: '/sitemap', description: 'This page' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Globe,
    description: 'Artificial intelligence and machine learning services',
    links: [
      { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
      { name: 'Machine Learning Solutions', href: '/services/machine-learning', description: 'Custom ML models' },
      { name: 'Deep Learning', href: '/services/deep-learning', description: 'Neural network solutions' },
      { name: 'Computer Vision', href: '/services/computer-vision', description: 'Image and video analysis' },
      { name: 'Natural Language Processing', href: '/services/nlp', description: 'Text and language processing' }
    ]
  }
];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/20 rounded-full mb-6">
              <Map className="w-8 h-8 text-zion-cyan" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Navigate through our comprehensive website structure to find exactly what you're looking for.
            </p>
          </motion.div>

          {/* Main Pages */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Home className="w-6 h-6 text-zion-cyan mr-3" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <page.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{page.description}</p>
                  <Link 
                    to={page.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Visit Page
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Settings className="w-6 h-6 text-zion-cyan mr-3" />
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePages.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <service.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Explore Service
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Legal Pages */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Shield className="w-6 h-6 text-zion-cyan mr-3" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-3">
                      <page.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                  </div>
                  <p className="text-zion-slate-light text-sm mb-4">{page.description}</p>
                  <Link 
                    to={page.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors group-hover:translate-x-1"
                  >
                    Read Policy
                    <span className="ml-2">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-16 border-t border-zion-blue-light/20"
          >
            <p className="text-zion-slate-light mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-semibold"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300 font-semibold"
              >
                Help Center
              </Link>
            </div>
            <p className="text-zion-slate-light text-sm mt-8">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}


export default Sitemap;