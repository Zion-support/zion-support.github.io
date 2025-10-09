

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our pages and discover the comprehensive range of AI and IT solutions we offer.
          </p>
        </div>

        {/* Main Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Home className="w-6 h-6 mr-3 text-cyan-400" />
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-gray-300 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
            AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-cyan-400" />
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Specialized Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Users className="w-6 h-6 mr-3 text-cyan-400" />
            Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Additional Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-gray-300 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <contact.icon className="w-6 h-6 text-cyan-400 mr-4" />
                <span className="text-white group-hover:text-cyan-400 transition-colors">
                  {contact.text}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Back to Top */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default SitemapPage;



