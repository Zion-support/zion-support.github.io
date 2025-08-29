import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Map, ArrowRight, ExternalLink, FileText, Users, Settings, Shield, Globe, Database, Cloud, Brain, Zap } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = {
    main: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
      { name: 'Press', path: '/press', description: 'Press releases and media' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      { name: 'Team', path: '/team', description: 'Meet our leadership team' }
    ],
    services: [
      { name: 'Services Overview', path: '/services-overview', description: 'Complete services catalog' },
      { name: 'AI Services', path: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', path: '/it-services', description: 'Information technology services' },
      { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro software-as-a-service solutions' },
      { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud infrastructure and DevOps' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Data analysis and insights' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'IT infrastructure management' },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'AI-powered BI solutions' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'AI sales assistance' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Cloud financial optimization' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'AI compliance tools' },
      { name: 'AI Auto Email Responder', path: '/services/ai-auto-email-responder', description: 'Automated email responses' },
      { name: 'Customer Feedback Surveys', path: '/services/mobile-feedback-surveys', description: 'Feedback collection tools' },
      { name: 'AI Compliance Copilot', path: '/services/ai-compliance-copilot', description: 'Advanced compliance AI' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'Content generation platform' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Financial operations advisory' },
      { name: 'IoT Edge', path: '/services/iot-edge', description: 'Internet of Things edge computing' },
      { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', description: 'Enterprise blockchain' },
      { name: 'Healthcare Tech', path: '/services/healthcare-tech', description: 'Healthcare technology solutions' },
      { name: 'Zero Trust Architecture', path: '/services/zero-trust-architecture', description: 'Security architecture' },
      { name: 'Incident Response Platform', path: '/services/incident-response-platform', description: 'Security incident management' }
    ],
    resources: [
      { name: 'Documentation', path: '/docs', description: 'Technical documentation and guides' },
      { name: 'Training', path: '/training', description: 'Learning and certification programs' },
      { name: 'Webinars', path: '/webinars', description: 'Educational webinars and events' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Help Center', path: '/help', description: 'Help and support resources' },
      { name: 'Status', path: '/status', description: 'System status and uptime' }
    ],
    business: [
      { name: 'Pricing Guide', path: '/pricing-guide', description: 'Service pricing information' },
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
      { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
      { name: 'Marketplace', path: '/marketplace', description: 'Solution marketplace' },
      { name: 'Dashboard', path: '/dashboard', description: 'Client dashboard access' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy', description: 'Privacy and data protection' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' }
    ]
  };

  const categoryIcons = {
    main: Globe,
    services: Settings,
    resources: FileText,
    business: Users,
    legal: Shield
  };

  const categoryColors = {
    main: 'from-blue-500 to-cyan-500',
    services: 'from-purple-500 to-pink-500',
    resources: 'from-green-500 to-emerald-500',
    business: 'from-orange-500 to-red-500',
    legal: 'from-slate-500 to-gray-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Map className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Map
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Navigate through our complete website structure. Find all pages, services, 
              and resources organized by category for easy discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {Object.entries(siteStructure).map(([category, pages], categoryIndex) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              const gradientClass = categoryColors[category as keyof typeof categoryColors];
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white capitalize">
                      {category === 'main' ? 'Main Pages' : category === 'ai' ? 'AI Services' : category}
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {pages.map((page, pageIndex) => (
                      <motion.div
                        key={page.path}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (pageIndex * 0.05) }}
                        className="group"
                      >
                        <a
                          href={page.path}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group-hover:border-cyan-400/50 border border-transparent"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {page.name}
                              </h3>
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <p className="text-sm text-slate-400">{page.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Jump directly to the most popular sections and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'AI Services', path: '/ai-services', icon: Brain, color: 'from-purple-500 to-pink-500' },
              { name: 'Cloud Solutions', path: '/services/cloud-devops', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
              { name: 'Data Analytics', path: '/services/data-analytics', icon: Database, color: 'from-green-500 to-emerald-500' },
              { name: 'Cybersecurity', path: '/services/zero-trust-architecture', icon: Shield, color: 'from-red-500 to-orange-500' }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={service.path}
                  className="block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Discovery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Use our search functionality or contact our team for personalized assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/search"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                Search Website
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Explore our services, read our latest insights, or get in touch to discuss 
              how we can help transform your business with AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
