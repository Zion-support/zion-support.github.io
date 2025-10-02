import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Case Studies',
      description: 'Real-world success stories from our clients',
      href: '/case-studies',
      icon: '📊',
      items: [
        { name: 'Fortune 100 Transformation', href: '/case-studies/fortune-100' },
        { name: 'Healthcare AI Implementation', href: '/case-studies/healthcare' },
        { name: 'FinTech Innovation', href: '/case-studies/fintech' }
      ]
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      href: '/docs',
      icon: '📚',
      items: [
        { name: 'API Reference', href: '/docs/api' },
        { name: 'Integration Guides', href: '/docs/integration' },
        { name: 'Best Practices', href: '/docs/best-practices' }
      ]
    },
    {
      title: 'Developer Tools',
      description: 'Tools and resources for developers',
      href: '/developer-tools',
      icon: '🛠️',
      items: [
        { name: 'SDKs & Libraries', href: '/tools/sdks' },
        { name: 'Code Examples', href: '/tools/examples' },
        { name: 'Testing Tools', href: '/tools/testing' }
      ]
    },
    {
      title: 'Training',
      description: 'Educational resources and certification programs',
      href: '/training',
      icon: '🎓',
      items: [
        { name: 'Online Courses', href: '/training/courses' },
        { name: 'Certification', href: '/training/certification' },
        { name: 'Webinars', href: '/training/webinars' }
      ]
    },
    {
      title: 'Community',
      description: 'Connect with other users and experts',
      href: '/community',
      icon: '👥',
      items: [
        { name: 'Forum', href: '/community/forum' },
        { name: 'User Groups', href: '/community/groups' },
        { name: 'Events', href: '/community/events' }
      ]
    },
    {
      title: 'White Papers',
      description: 'In-depth research and industry insights',
      href: '/white-papers',
      icon: '📄',
      items: [
        { name: 'AI Trends 2026', href: '/white-papers/ai-trends-2026' },
        { name: 'Quantum Computing', href: '/white-papers/quantum' },
        { name: 'Cybersecurity', href: '/white-papers/cybersecurity' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Access comprehensive resources including case studies, documentation, developer tools, training materials, and community resources." />
        <link rel="canonical" href="https://ziontechgroup.com/resources" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Resources Center
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Everything you need to succeed with AI and IT solutions. 
                From documentation to community support, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      className="block text-blue-600 hover:text-blue-700 transition-colors py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <Link
                  to={category.href}
                  className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  View All →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Access
              </h2>
              <p className="text-lg text-gray-600">
                Popular resources and frequently accessed content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Getting Started
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/docs/quick-start" className="hover:text-blue-600 transition-colors">Quick Start Guide</Link></li>
                  <li><Link to="/docs/installation" className="hover:text-blue-600 transition-colors">Installation Guide</Link></li>
                  <li><Link to="/case-studies" className="hover:text-blue-600 transition-colors">Success Stories</Link></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Support & Community
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/support" className="hover:text-blue-600 transition-colors">Technical Support</Link></li>
                  <li><Link to="/community/forum" className="hover:text-blue-600 transition-colors">Community Forum</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;