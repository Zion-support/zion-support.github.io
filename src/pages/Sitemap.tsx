import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Home, 
  Users, 
  Briefcase, 
  Settings, 
  Shield, 
  Globe, 
  MessageSquare, 
  Star, 
  Play, 
  HelpCircle 
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Our story and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Pricing', path: '/pricing', description: 'Our service pricing' },
        { name: 'Careers', path: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'Services',
      icon: Settings,
      links: [
        { name: 'All Services', path: '/services', description: 'Complete service overview' },
        { name: 'AI Solutions', path: '/services/ai', description: 'Artificial Intelligence services' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and automation' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and threat protection' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Network and system management' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Business process optimization' },
        { name: 'Consulting', path: '/services/consulting', description: 'Technology strategy and advisory' },
        { name: 'Quantum Technology', path: '/services/quantum-ai', description: 'Next-generation computing' },
        { name: 'Space Tech', path: '/services/space-tech', description: 'Space technology solutions' },
        { name: 'Micro SAAS', path: '/micro-saas-services', description: 'Scalable software solutions' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      links: [
        { name: 'Our Team', path: '/team', description: 'Meet our experts' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation hub' }
      ]
    },
    {
      title: 'Resources',
      icon: Briefcase,
      links: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'Events', path: '/events', description: 'Upcoming events' },
        { name: 'Webinars', path: '/webinars', description: 'Educational content' },
        { name: 'White Papers', path: '/white-papers', description: 'Research and analysis' },
        { name: 'Tutorials', path: '/tutorials', description: 'Learning resources' }
      ]
    },
    {
      title: 'Support',
      icon: Shield,
      links: [
        { name: 'Help Center', path: '/help', description: 'Self-service support' },
        { name: 'Support Portal', path: '/support', description: 'Technical support' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Status', path: '/status', description: 'Service status' }
      ]
    },
    {
      title: 'Legal',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility standards' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', path: '/get-started', icon: Star, color: 'bg-green-100 text-green-700' },
    { name: 'Request Demo', path: '/demo', icon: Play, color: 'bg-blue-100 text-blue-700' },
    { name: 'Contact Sales', path: '/contact-sales', icon: MessageSquare, color: 'bg-purple-100 text-purple-700' },
    { name: 'Support', path: '/support', icon: HelpCircle, color: 'bg-orange-100 text-orange-700' }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation guide for Zion Tech Group. Find all pages, services, and resources organized by category."
        keywords="sitemap, navigation, site structure, pages, services, Zion Tech Group"
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Site Navigation Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive website structure. Find all pages, services, and resources organized by category for easy navigation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`${link.color} p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200`}
              >
                <link.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold text-sm">{link.name}</div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-2 border-gray-200 pl-4">
                      <Link
                        to={link.path}
                        className="block text-blue-600 hover:text-blue-800 font-medium mb-1 transition-colors"
                      >
                        {link.name}
                      </Link>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Site Information</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Total Pages:</span>
                  <span className="font-medium">50+</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Site Version:</span>
                  <span className="font-medium">2.0.0</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Contact Support →
                </Link>
                <Link
                  to="/help"
                  className="block text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Visit Help Center →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
