import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, Home, Brain, Cloud, Shield, Code, BarChart, Users, Settings, Target, MessageSquare, Eye, Zap, Star, CheckCircle } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Main homepage with company overview' },
    { name: 'About Us', href: '/about', description: 'Learn about Zion Tech Group and our mission' },
    { name: 'Services', href: '/services', description: 'Comprehensive AI and IT services overview' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
    { name: 'Blog', href: '/blog', description: 'Latest AI insights and technology articles' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and client results' },
    { name: 'Pricing', href: '/pricing', description: 'Transparent pricing for all our services' }
  ];

  const aiServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', category: 'Productivity' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', category: 'Marketing' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', category: 'Analytics' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', category: 'Marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', category: 'Support' },
    { name: 'AI Code Generation', href: '/ai-code-generation', category: 'Development' },
    { name: 'AI Content Generation', href: '/ai-content-generation', category: 'Content' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', category: 'Sales' },
    { name: 'AI Document Processing', href: '/ai-document-processing', category: 'Automation' },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', category: 'Marketing' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', category: 'E-commerce' },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', category: 'Finance' },
    { name: 'AI Video Generation', href: '/ai-video-generation', category: 'Content' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', category: 'Content' },
    { name: 'AI Music Composition', href: '/ai-music-composition', category: 'Content' },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', category: 'Design' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', category: 'Health' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', category: 'Automation' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', category: 'Sales' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', category: 'Analytics' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', category: 'Design' },
    { name: 'Machine Learning', href: '/machine-learning', category: 'AI Core' },
    { name: 'Natural Language Processing', href: '/nlp', category: 'AI Core' },
    { name: 'Computer Vision', href: '/computer-vision', category: 'AI Core' },
    { name: 'AI Automation', href: '/ai-automation', category: 'AI Core' },
    { name: 'Quantum AI', href: '/quantum-ai', category: 'Advanced AI' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', category: 'Security' },
    { name: 'AI Healthcare', href: '/ai-healthcare', category: 'Healthcare' },
    { name: 'AI Fintech', href: '/ai-fintech', category: 'Finance' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', category: 'Development' },
    { name: 'AI CRM', href: '/ai-crm', category: 'Business' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', category: 'Productivity' },
    { name: 'AI Scheduler', href: '/ai-scheduler', category: 'Productivity' }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', category: 'Infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity', category: 'Security' },
    { name: 'DevOps & CI/CD', href: '/devops', category: 'Development' },
    { name: 'Database Services', href: '/database-services', category: 'Data' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', category: 'Infrastructure' },
    { name: 'IT Support & Helpdesk', href: '/it-support', category: 'Support' },
    { name: 'IT Consulting', href: '/it-consulting', category: 'Consulting' },
    { name: 'Cloud Migration', href: '/cloud-migration', category: 'Migration' },
    { name: 'Compliance & Governance', href: '/compliance', category: 'Compliance' },
    { name: 'Developer Tools', href: '/developer-tools', category: 'Development' },
    { name: 'Marketing Tools', href: '/marketing-tools', category: 'Marketing' },
    { name: 'Productivity Solutions', href: '/productivity', category: 'Productivity' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', category: 'Advanced' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', category: 'Advanced' },
    { name: 'Blockchain & Web3', href: '/blockchain', category: 'Emerging' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', category: 'Emerging' },
    { name: 'Business Intelligence', href: '/business-intelligence', category: 'Analytics' },
    { name: 'Robotics Solutions', href: '/robotics', category: 'Advanced' },
    { name: 'Enterprise Solutions', href: '/enterprise', category: 'Enterprise' },
    { name: 'Analytics Tools', href: '/analytics-tools', category: 'Analytics' },
    { name: 'Business Apps', href: '/business-apps', category: 'Applications' },
    { name: 'Expense Tracker Pro', href: '/expense-tracker', category: 'Finance' },
    { name: 'Task Manager Pro', href: '/task-manager-pro', category: 'Productivity' },
    { name: 'Smart Analytics', href: '/smart-analytics', category: 'Analytics' }
  ];

  const supportPages = [
    { name: 'Support Center', href: '/support', description: 'Get help and support' },
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
    { name: 'Status Page', href: '/status', description: 'System status and uptime' },
    { name: 'System Health', href: '/system-status', description: 'Detailed system health' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' },
    { name: 'GDPR Compliance', href: '/gdpr', description: 'GDPR compliance information' },
    { name: 'Security', href: '/security', description: 'Security measures and practices' }
  ];

  const blogCategories = [
    'AI Enterprise Transformation',
    'Mega Trends',
    'Architecture',
    'AI Agents',
    'Intelligence',
    'Cost Optimization',
    'Computing',
    'Transformation'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Site Map
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Navigate through all our services and pages
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Find everything you need on our website. From AI services to IT solutions, 
              case studies to pricing information - everything is organized for easy navigation.
            </p>
          </section>

          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <a key={index} href={page.href} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* AI Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiServices.map((service, index) => (
                <a key={index} href={service.href} className="cyber-card p-4 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {itServices.map((service, index) => (
                <a key={index} href={service.href} className="cyber-card p-4 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Specialized Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Specialized Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializedServices.map((service, index) => (
                <a key={index} href={service.href} className="cyber-card p-4 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Support & Legal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 text-center neon-text">
                Support
              </h2>
              <div className="space-y-3">
                {supportPages.map((page, index) => (
                  <a key={index} href={page.href} className="cyber-card p-4 hover:scale-105 transition-all duration-300 group block">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{page.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 text-center neon-text">
                Legal & Policies
              </h2>
              <div className="space-y-3">
                {legalPages.map((page, index) => (
                  <a key={index} href={page.href} className="cyber-card p-4 hover:scale-105 transition-all duration-300 group block">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{page.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Blog Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Blog Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {blogCategories.map((category, index) => (
                <a key={index} href="/blog" className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300 group">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {category}
                  </h3>
                </a>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for personalized assistance and recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;