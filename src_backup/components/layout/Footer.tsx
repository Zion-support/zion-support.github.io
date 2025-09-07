import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp  } from 'lucide-react';
export default function Footer() {const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' })}const currentYear  = new Date().getFullYear()const footerLinks = {services: [;
      { name: 'AI Services', href: '/services/ai-services' },{ name: 'IT Services', href: '/services/it-services' },{ name: 'Micro SaaS', href: '/services/micro-saas' },{ name: 'Web Development', href: '/services/web-development' },{ name: 'Cloud Services', href: '/services/cloud-services' },{ name: 'AI Development', href: '/services/ai-development' }
    ], solutions: [;
      { name: 'AI Content Creation', href: '/solutions/ai-content-creation' }, { name: 'Customer Support', href: '/solutions/customer-support' }, { name: 'Email Automation', href: '/solutions/email-automation' }, { name: 'Event Management', href: '/solutions/event-management' }, { name: 'Project Management', href: '/solutions/project-management' }, { name: 'Workflow Automation', href: '/solutions/workflow-automation' }
    ], company: [;
      { name: 'About Us', href: '/about' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Contact', href: '/contact' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' }
    ], resources: [;
      { name: 'Blog', href: '/blog' }, { name: 'Help Center', href: '/help' }, { name: 'Pricing Guide', href: '/pricing-guide' }, { name: 'Sitemap', href: '/sitemap' }, { name: 'Cookie Policy', href: '/cookies' }
    ];
  }const socialLinks = [;
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' }, { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },{ name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' }, { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' }
  ];return (<footer className='bg-gray-900 text-white'>;
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12'>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>;
          {/* Company Info */}
          <div className='lg:col-span-1'>;
            <h3 className='text-lg font-semibold mb-4'>Zion Tech Group</h3>;
            <p className='text-gray-300 mb-4'>;
              Leading the future of technology with innovative solutions and cutting-edge services.;
            </p>;
            <div className='flex space-x-4'>;
              {socialLinks.map((social) => {const Icon = social.icon;
                return (<a;
                    key={social.name}
                    href={social.href}
                    className='text-gray-400 hover: text-white transition-colors';
                    aria-label={social.name}
                  >;
                    <Icon className='h-5 w-5' />;
                  </a>;
                )})}
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className='text-lg font-semibold mb-4'>Services</h3>;
            <ul className='space-y-2'>;
              {footerLinks.services.map((link) => (<li key={link.name}>;
                  <Link href={link.href} className='text-gray-300 hover: text-white transition-colors'>;
                    {link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Solutions */}
          <div>;
            <h3 className='text-lg font-semibold mb-4'>Solutions</h3>;
            <ul className='space-y-2'>;
              {footerLinks.solutions.map((link) => (<li key={link.name}>;
                  <Link href={link.href} className='text-gray-300 hover: text-white transition-colors'>;
                    {link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company */}
          <div>;
            <h3 className='text-lg font-semibold mb-4'>Company</h3>;
            <ul className='space-y-2'>;
              {footerLinks.company.map((link) => (<li key={link.name}>;
                  <Link href={link.href} className='text-gray-300 hover: text-white transition-colors'>;
                    {link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Resources */}
          <div>;
            <h3 className='text-lg font-semibold mb-4'>Resources</h3>;
            <ul className='space-y-2'>;
              {footerLinks.resources.map((link) => (<li key={link.name}>;
                  <Link href={link.href} className='text-gray-300 hover: text-white transition-colors'>;
                    {link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
        {/* Contact Info */}
        <div className='border-t border-gray-800 mt-8 pt-8'>;
          <div className='grid grid-cols-1 md: grid-cols-3 gap-4'>;
            <div className='flex items-center space-x-2'>;
              <Mail className='h-4 w-4 text-gray-400' />;
              <span className='text-gray-300'>contact@ziontechgroup.com</span>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <Phone className='h-4 w-4 text-gray-400' />;
              <span className='text-gray-300'>+1 (555) 123-4567</span>;
            </div>;
            <div className='flex items-center space-x-2'>;
              <MapPin className='h-4 w-4 text-gray-400' />;
              <span className='text-gray-300'>San Francisco, CA</span>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md: flex-row justify-between items-center'>;
          <p className='text-gray-400 text-sm'>;
            © {currentYear} Zion Tech Group. All rights reserved.;
          </p>;
          <div className='flex space-x-6 mt-4 md:mt-0'>;
            <Link href='/privacy' className='text-gray-400 hover:text-white text-sm transition-colors'>;
              Privacy Policy;
            </Link>;
            <Link href='/terms' className='text-gray-400 hover:text-white text-sm transition-colors'>;
              Terms of Service;
            </Link>;
          </div>;
        </div>;
      </div>;
      {/* Back to Top Button */}
      <button;
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors';
        aria-label='Back to top';
      >;
        <ArrowUp className='h-5 w-5' />;
      </button>;
    </footer>;
  )}