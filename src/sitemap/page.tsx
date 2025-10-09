import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, Users, Phone, Mail, Globe, Brain, Cloud, Shield, Database, Code, Settings, BarChart3, ShoppingCart, Car } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Team', href: '/team', icon: Users },
  ];

  const aiServices = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart3 },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart3 },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: ShoppingCart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Settings },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'DevOps', href: '/devops', icon: Code },
  ];

  const specializedServices = [
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Car },
    { name: 'Blockchain', href: '/blockchain', icon: Code },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart3 },
    { name: 'IoT & Edge', href: '/iot-edge', icon: Settings },
    { name: 'Robotics', href: '/robotics', icon: Car },
  ];

  const additionalPages = [
    { name: 'Consultation', href: '/consultation', icon: Phone },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: Settings },
    { name: 'Cookie Policy', href: '/cookies', icon: Settings },
    { name: 'GDPR Compliance', href: '/gdpr', icon: Shield },
  ];

  const contactInfo = [
    { icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com' },
    { icon: Globe, text: 'ziontechgroup.com', href: 'https://ziontechgroup.com' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Pages */}
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {mainPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <li key={index}>
                    <Link
                      to={page.href}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* AI Services */}
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">AI Services</h2>
            <ul className="space-y-2">
              {aiServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* IT Services */}
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">IT Services</h2>
            <ul className="space-y-2">
              {itServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Specialized Services</h2>
            <ul className="space-y-2">
              {specializedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Additional Pages */}
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Additional Pages</h2>
            <ul className="space-y-2">
              {additionalPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <li key={index}>
                    <Link
                      to={page.href}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
            <ul className="space-y-2">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {contact.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SitemapPage;