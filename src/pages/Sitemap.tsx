import React from 'react';
import { SEO } from '../components/SEO';
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
    title: 'Data Analytics Services',
    icon: BarChart3,
    description: 'Business intelligence and data analysis solutions',
    links: [
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data analysis' },
      { name: 'AI Financial Trading', href: '/services/ai-financial-trading', description: 'AI-powered trading' },
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Scalable software solutions for businesses',
    links: [
      { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
      { name: 'Helpdesk Platform', href: '/services/helpdesk', description: 'Customer support system' },
      { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance tracking & insights' },
      { name: 'IT Helpdesk', href: '/services/it-helpdesk', description: 'IT support system' },
      { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', href: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Email Sequencer', href: '/services/email-sequencer', description: 'Email automation' },
      { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'Audio transcription service' },
      { name: 'Returns Management', href: '/services/returns-management', description: 'Returns processing system' },
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Building,
    description: 'Industry-specific solutions and services',
    links: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Enterprise-grade solutions' },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare industry solutions' },
    ]
  },
  {
    title: 'Specialized Services',
    icon: Star,
    description: 'Advanced AI and specialized technology services',
    links: [
      { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation', description: 'Legal document AI' },
      { name: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite', description: 'Content creation AI' },
      { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'HR automation platform' },
      { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'AI content generation' },
      { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI security solutions' },
    ]
  },
  {
    title: 'Advanced Service Showcases',
    icon: Target,
    description: 'Future-focused technology showcases and overviews',
    links: [
      { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
      { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
      { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
      { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025', description: 'Comprehensive service overview' },
      { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', description: 'Innovative service showcase' },
      { name: 'Ultimate Innovative Services 2025', href: '/ultimate-innovative-services-showcase-2025', description: 'Ultimate innovative services' },
      { name: 'New Services 2025', href: '/new-services-showcase-2025', description: 'New service offerings' },
    ]
  },
  {
    title: 'Pricing & Guides',
    icon: DollarSign,
    description: 'Pricing information and service guides',
    links: [
      { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-2026', description: '2026 pricing guide' },
      { name: 'Comprehensive Pricing 2028', href: '/comprehensive-pricing-2028', description: '2028 pricing guide' },
      { name: 'Comprehensive Pricing Guide 2027', href: '/comprehensive-pricing-guide-2027', description: '2027 pricing guide' },
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our services, solutions, and pages organized by category."
        keywords="sitemap, website navigation, services, solutions, Zion Tech Group"
      />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Website Sitemap
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Navigate through our comprehensive collection of services, solutions, and resources. 
            Everything you need to know about Zion Tech Group is organized here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (linkIndex * 0.05) }}
                      className="block p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {link.name}
                          </h3>
                          {link.description && (
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                              {link.description}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </a>
              <a
                href="/help"
                className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
              >
                <Heart className="w-4 h-4 mr-2" />
                Help Center
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
