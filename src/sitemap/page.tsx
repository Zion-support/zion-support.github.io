import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Home, Users, Briefcase, FileText, Phone, Mail, Globe } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main landing page' },
    { name: 'About Us', path: '/about', description: 'Learn about our company' },
    { name: 'Services', path: '/services', description: 'Our comprehensive service offerings' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
    { name: 'Team', path: '/team', description: 'Meet our expert team' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and projects' },
    { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
    { name: 'Enterprise', path: '/enterprise', description: 'Enterprise solutions' },
  ];

  const aiServices = [
    { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Healthcare AI solutions' },
    { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial technology AI' },
    { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation tools' },
    { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data analytics' },
    { name: 'AI Project Manager', path: '/ai-project-manager', description: 'AI project management tools' },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales process automation' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
  ];

  const itServices = [
    { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Infrastructure management' },
    { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud computing solutions' },
    { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection' },
    { name: 'Database Management', path: '/database-management', description: 'Database solutions' },
    { name: 'DevOps', path: '/devops', description: 'Development and operations' },
  ];

  const specializedServices = [
    { name: 'Micro SAAS', path: '/micro-saas', description: 'Small business software solutions' },
    { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating systems' },
    { name: 'Blockchain', path: '/blockchain', description: 'Blockchain technology' },
    { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'IoT Edge', path: '/iot-edge', description: 'Internet of Things solutions' },
    { name: 'Robotics', path: '/robotics', description: 'Robotic automation' },
  ];

  const additionalPages = [
    { name: 'Consultation', path: '/consultation', description: 'Expert consultation services' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
    { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance' },
    { name: 'Privacy Policy', path: '/privacy', description: 'Privacy and data protection' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'GDPR Compliance', path: '/gdpr', description: 'GDPR compliance information' },
    { name: 'Cookies', path: '/cookies', description: 'Cookie policy' },
  ];

  const contactInfo = [
    { icon: Phone, text: '(302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: Globe, text: 'ziontechgroup.com', href: 'https://ziontechgroup.com' },
  ];

  const renderPageSection = (title: string, pages: any[], icon: React.ElementType) => (
    <div className="cyber-card p-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <icon className="w-6 h-6 mr-3 text-cyan-400" />
        {title}
      </h3>
      <ul className="space-y-2">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              to={page.path}
              className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="font-medium">{page.name}</div>
                <div className="text-sm text-gray-400">{page.description}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {renderPageSection('Main Pages', mainPages, Home)}
            {renderPageSection('AI Services', aiServices, Users)}
            {renderPageSection('IT Services', itServices, Briefcase)}
            {renderPageSection('Specialized Services', specializedServices, FileText)}
            {renderPageSection('Additional Pages', additionalPages, FileText)}
          </div>

          {/* Contact Information */}
          <div className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <info.icon className="w-5 h-5 mr-2" />
                  {info.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;