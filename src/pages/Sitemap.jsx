import React from 'react';'
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sitemapSections = [
    {
'
      title: 'Main Pages','
      links: [''
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        {
'
          name: 'About','
          path: '/about','
          description: 'Learn about our company'},
        {
'
          name: 'Contact','
          path: '/contact','
          description: 'Get in touch with us'},
        {
'
          name: 'Partners','
          path: '/partners','
          description: 'Our business partners'},'
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      ]},
    {
'
      title: 'Services',
      links: [
        {
'
          name: 'All Services','
          path: '/services','
          description: 'Complete service catalog'},
        {
'
          name: 'AI Solutions','
          path: '/services/ai','
          description: 'Artificial intelligence services'},
        {
'
          name: 'Cybersecurity','
          path: '/services/cybersecurity','
          description: 'Security and compliance'},
        {
'
          name: 'Cloud & DevOps','
          path: '/services/cloud-devops','
          description: 'Cloud infrastructure'},
        {
'
          name: 'Digital Transformation','
          path: '/services/digital-transformation','
          description: 'Business transformation'},
      ]},
    {
'
      title: 'Marketplace',
      links: [
        {
'
          name: 'Marketplace','
          path: '/marketplace','
          description: 'Browse our marketplace'},
        {
'
          name: 'Products','
          path: '/marketplace/products','
          description: 'Available products'},
        {
'
          name: 'Services','
          path: '/marketplace/services','
          description: 'Marketplace services'},
        {
'
          name: 'Talent','
          path: '/marketplace/talent','
          description: 'Find talent'},
      ]},
    {
'
      title: 'Support & Resources',
      links: [
        {
'
          name: 'Blog','
          path: '/blog','
          description: 'Latest insights and news'},
        {
'
          name: 'FAQ','
          path: '/faq','
          description: 'Frequently asked questions'},
        {
'
          name: 'Sitemap','
          path: '/sitemap','
          description: 'Complete site navigation'},
        {
'
          name: 'Help Center','
          path: '/help','
          description: 'Self-service support'},
        {
'
          name: 'System Status','
          path: '/status','
          description: 'Service status and uptime'},
        {
'
          name: 'Security','
          path: '/security','
          description: 'Security and compliance information'},
      ]},
    {
'
      title: 'Legal & Compliance',
      links: [
        {
'
          name: 'Privacy Policy','
          path: '/privacy','
          description: 'Data protection and privacy'},
        {
'
          name: 'Terms of Service','
          path: '/terms','
          description: 'Terms and conditions'},
        {
'
          name: 'Cookie Policy','
          path: '/cookies','
          description: 'Cookie usage information'},
        {
'
          name: 'Accessibility','
          path: '/accessibility','
          description: 'Accessibility information'},
      ]},
    {
'
      title: 'User Account','
      links: [''
        { name: 'Login', path: '/login', description: 'User authentication' },'
        { name: 'Sign Up', path: '/signup', description: 'Create new account' },
        {
'
          name: 'Dashboard','
          path: '/dashboard','
          description: 'User dashboard'},
        {
'
          name: 'Forgot Password','
          path: '/forgot-password','
          description: 'Password recovery'},
      ]},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">""
      <div className="container mx-auto px-4 py-16">"
        {/* Header */}""
        <div className="text-center mb-16">""
          <h1 className="text-4xl md:text-6xl font-bold mb-6">"
            Site""
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">'
              {' '}
              Map
            </span>"
          </h1>""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide to all pages and services on Zion Tech
            Group
          </p>
        </div>"
        {/* Sitemap Sections */}""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <div"
              key={sectionIndex}""
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20""
            >""
              <h2 className="text-xl font-bold text-white mb-4 border-b border-zion-cyan/30 pb-2">
                {section.title}"
              </h2>""
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link"
                      to={link.path}""
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group""
                    >""
                      <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                        {link.name}"
                      </div>""
                      <div className="text-sm text-gray-400 group-hover:text-zion-cyan/70 transition-colors">
                        {link.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>"
        {/* Quick Links */}""
        <div className="mt-16 text-center">""
          <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>""
          <div className="flex flex-wrap justify-center gap-4">"
            <Link""
              to="/contact""
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Get Started
            </Link>"
            <Link""
              to="/services""
              className="px-6 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
            >
              View Services
            </Link>"
            <Link""
              to="/help""
              className="px-6 py-3 border-2 border-zion-purple text-zion-purple rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-colors"
            >
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;'"
'"'"
