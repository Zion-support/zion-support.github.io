import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home, ChevronRight } from 'lucide-react';

const SimplePage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate page title and content based on route
  const getPageInfo = (path: string) => {
    const routeMap: { [key: string]: { title: string; description: string; content: string[] } } = {
      '/solutions': {
        title: 'Solutions',
        description: 'Industry-specific technology solutions designed to transform your business',
        content: [
          'Healthcare Technology Solutions',
          'Financial Services Innovation',
          'Manufacturing Digital Transformation',
          'Government Technology Modernization',
          'Retail Digital Experience',
          'Education Technology Platforms'
        ]
      },
      '/about': {
        title: 'About Us',
        description: 'Learn about Zion Tech Group and our mission to drive technological innovation',
        content: [
          'Our Story and Mission',
          'Leadership Team',
          'Company Values',
          'Industry Experience',
          'Global Presence',
          'Innovation Culture'
        ]
      },
      '/contact': {
        title: 'Contact Us',
        description: 'Get in touch with our team to discuss your technology needs',
        content: [
          'Schedule a Consultation',
          'Request a Quote',
          'Technical Support',
          'Partnership Inquiries',
          'Career Opportunities',
          'General Information'
        ]
      },
      '/blog': {
        title: 'Blog',
        description: 'Insights, updates, and thought leadership in technology and innovation',
        content: [
          'Technology Trends',
          'Industry Insights',
          'Case Studies',
          'Expert Opinions',
          'Product Updates',
          'Company News'
        ]
      },
      '/careers': {
        title: 'Careers',
        description: 'Join our team and help shape the future of technology',
        content: [
          'Open Positions',
          'Company Culture',
          'Benefits & Perks',
          'Career Growth',
          'Diversity & Inclusion',
          'Application Process'
        ]
      },
      '/partners': {
        title: 'Partners',
        description: 'Strategic partnerships that drive innovation and growth',
        content: [
          'Technology Partners',
          'Channel Partners',
          'Strategic Alliances',
          'Partner Programs',
          'Become a Partner',
          'Partner Resources'
        ]
      },
      '/press': {
        title: 'Press',
        description: 'Latest news, press releases, and media resources',
        content: [
          'Press Releases',
          'Media Kit',
          'Company News',
          'Executive Bios',
          'Press Contacts',
          'Media Coverage'
        ]
      },
      '/case-studies': {
        title: 'Case Studies',
        description: 'Real-world examples of how we help clients succeed',
        content: [
          'Success Stories',
          'Client Testimonials',
          'Project Highlights',
          'ROI Results',
          'Industry Solutions',
          'Technology Implementations'
        ]
      },
      '/research-development': {
        title: 'Research & Development',
        description: 'Cutting-edge research and development in emerging technologies',
        content: [
          'AI Research',
          'Quantum Computing',
          'Blockchain Innovation',
          'Cybersecurity Advances',
          'Cloud Technology',
          'Edge Computing'
        ]
      },
      '/docs': {
        title: 'Documentation',
        description: 'Comprehensive documentation and technical resources',
        content: [
          'API Documentation',
          'Integration Guides',
          'Best Practices',
          'Tutorials',
          'Reference Materials',
          'Developer Resources'
        ]
      },
      '/api': {
        title: 'API Reference',
        description: 'Complete API documentation and integration guides',
        content: [
          'Authentication',
          'Endpoints',
          'Request/Response Examples',
          'SDKs & Libraries',
          'Rate Limits',
          'Error Handling'
        ]
      },
      '/developer': {
        title: 'Developer Portal',
        description: 'Resources and tools for developers building with our platform',
        content: [
          'Getting Started',
          'API Keys',
          'Code Samples',
          'SDKs',
          'Community Forum',
          'Developer Support'
        ]
      },
      '/help': {
        title: 'Help Center',
        description: 'Find answers to common questions and get support',
        content: [
          'FAQs',
          'Knowledge Base',
          'Video Tutorials',
          'Troubleshooting',
          'Contact Support',
          'Training Resources'
        ]
      },
      '/training': {
        title: 'Training',
        description: 'Comprehensive training programs for your team',
        content: [
          'Online Courses',
          'Certification Programs',
          'Workshop Sessions',
          'Custom Training',
          'Training Materials',
          'Skill Assessment'
        ]
      },
      '/community': {
        title: 'Community',
        description: 'Connect with peers and experts in our technology community',
        content: [
          'User Forums',
          'Events & Meetups',
          'User Groups',
          'Knowledge Sharing',
          'Networking',
          'Community Guidelines'
        ]
      },
      '/support': {
        title: 'Support',
        description: 'Get the help you need when you need it',
        content: [
          'Technical Support',
          'Account Support',
          'Billing Support',
          'Feature Requests',
          'Bug Reports',
          'Support Tickets'
        ]
      },
      '/sitemap': {
        title: 'Sitemap',
        description: 'Complete overview of our website structure',
        content: [
          'Main Pages',
          'Service Pages',
          'Resource Pages',
          'Support Pages',
          'Legal Pages',
          'Contact Information'
        ]
      },
      '/comprehensive-sitemap': {
        title: 'Comprehensive Sitemap',
        description: 'Detailed sitemap with all pages and sections',
        content: [
          'Page Hierarchy',
          'Content Categories',
          'Navigation Structure',
          'Search Index',
          'SEO Information',
          'Accessibility Features'
        ]
      },
      '/privacy-policy': {
        title: 'Privacy Policy',
        description: 'How we collect, use, and protect your personal information',
        content: [
          'Information Collection',
          'Data Usage',
          'Data Protection',
          'Your Rights',
          'Contact Information',
          'Policy Updates'
        ]
      },
      '/terms-of-service': {
        title: 'Terms of Service',
        description: 'Terms and conditions for using our services',
        content: [
          'Service Description',
          'User Responsibilities',
          'Intellectual Property',
          'Limitation of Liability',
          'Dispute Resolution',
          'Terms Updates'
        ]
      },
      '/cookie-policy': {
        title: 'Cookie Policy',
        description: 'How we use cookies and similar technologies',
        content: [
          'Cookie Types',
          'Purpose of Cookies',
          'Cookie Management',
          'Third-party Cookies',
          'Opt-out Options',
          'Policy Updates'
        ]
      },
      '/request-quote': {
        title: 'Request Quote',
        description: 'Get a customized quote for your technology needs',
        content: [
          'Service Requirements',
          'Project Scope',
          'Timeline',
          'Budget Considerations',
          'Custom Solutions',
          'Quote Process'
        ]
      }
    };

    return routeMap[path] || {
      title: 'Page Not Found',
      description: 'The page you are looking for could not be found',
      content: [
        'Check the URL for errors',
        'Navigate back to the homepage',
        'Use the search function',
        'Contact our support team'
      ]
    };
  };

  const pageInfo = getPageInfo(pathname);

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Breadcrumb */}
      <nav className="bg-zion-blue-darker border-b border-zion-purple/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
            <Link to="/" className="flex items-center hover:text-zion-cyan transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{pageInfo.title}</span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue-darker to-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {pageInfo.title}
          </h1>
          <p className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto">
            {pageInfo.description}
          </p>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pageInfo.content.map((item, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item}
                </h3>
                <p className="text-zion-slate-light text-sm">
                  Learn more about {item.toLowerCase()} and how it can benefit your organization.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium mt-3"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact our team to learn more about how we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimplePage;