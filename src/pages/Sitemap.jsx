import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Target, 
  Building, 
  FileText, 
  Video, 
  Mail, 
  HelpCircle, 
  Users, 
  Globe,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Sitemap() {
  const sitemapStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership programs' }
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      pages: [
        { name: 'AI Services', path: '/services/ai', description: 'Artificial intelligence solutions' },
        { name: 'Cloud Solutions', path: '/services/cloud', description: 'Cloud infrastructure and migration' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Hardware and network solutions' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation consulting' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' }
      ]
    },
    {
      title: 'Solutions',
      icon: Target,
      pages: [
        { name: 'Industry Solutions', path: '/solutions/industry', description: 'Sector-specific solutions' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart factory solutions' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'FinTech and banking solutions' },
        { name: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health solutions' },
        { name: 'Retail', path: '/solutions/retail', description: 'E-commerce and retail solutions' },
        { name: 'Education', path: '/solutions/education', description: 'EdTech solutions' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Research & Development', path: '/research-development', description: 'Innovation and research' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and articles' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry research papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' }
      ]
    },
    {
      title: 'Events & News',
      icon: Video,
      pages: [
        { name: 'Events', path: '/events', description: 'Upcoming and past events' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Press Releases', path: '/press', description: 'Official press releases' },
        { name: 'Media Kit', path: '/media-kit', description: 'Brand assets and resources' }
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/support', description: 'Self-service support' },
        { name: 'Training', path: '/training', description: 'Training and certification' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Status Page', path: '/status', description: 'System status and uptime' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: Users,
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data privacy information' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage information' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Security', path: '/security', description: 'Security practices and policies' }
      ]
    },
    {
      title: 'Developer Resources',
      icon: Globe,
      pages: [
        { name: 'API Documentation', path: '/api', description: 'Developer API reference' },
        { name: 'SDKs & Libraries', path: '/developers/sdks', description: 'Software development kits' },
        { name: 'Code Examples', path: '/developers/examples', description: 'Sample code and tutorials' },
        { name: 'Developer Blog', path: '/developers/blog', description: 'Technical articles' },
        { name: 'Community Forum', path: '/community', description: 'Developer community' }
      ]
    }
  ];

  const externalLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', description: 'Follow us on LinkedIn' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', description: 'Follow us on Twitter' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', description: 'Open source projects' },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', description: 'Video content and tutorials' },
    { name: 'Discord', url: 'https://discord.gg/ziontechgroup', description: 'Join our community' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Navigate through all the pages and resources available on the Zion Tech Group website
            </p>
            <p className="text-lg text-zion-slate-light">
              Find everything you need to explore our services, solutions, and resources
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sitemapStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-zion-purple/20 flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="group">
                      <Link
                        to={page.path}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
                      >
                        <ArrowRight className="h-4 w-4 text-zion-cyan mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <div className="flex-1">
                          <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                            {page.name}
                          </div>
                          <div className="text-zion-slate-light text-sm">
                            {page.description}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              External Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Connect with us on social media and explore additional resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zion-purple/20 flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Finding Something?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/80 hover:to-zion-cyan/80 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"
              >
                Search Website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}