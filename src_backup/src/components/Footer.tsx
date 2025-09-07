import React from 'react';
import { Link  } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp  } from 'lucide-react';
const Footer: React.FC = () => {const currentYear  = new Date().getFullYear()const services = [;}
    { name: 'AI Services',}
  href: '/services/ai-services' },{ name: 'IT Services',}
  href: '/services/it-services' },{ name: 'Micro SaaS',}
  href: '/services/micro-saas' },{ name: 'Cybersecurity',}
  href: '/services/cybersecurity' },{ name: 'Cloud Solutions',}
  href: '/services/cloud-solutions' },{ name: 'Mobile Development',}
  href: '/services/mobile-development' }
  ];const company = [;
    { name: 'About Us',}
  href: '/about' },{ name: 'Our Team',}
  href: '/about#team' },{ name: 'Careers',}
  href: '/careers' },{ name: 'Blog',}
  href: '/blog' },{ name: 'Case Studies',}
  href: '/case-studies' }
  ];const support = [;
    { name: 'Help Center',}
  href: '/support' },{ name: 'FAQ',}
  href: '/faq' },{ name: 'Contact Us',}
  href: '/contact' },{ name: 'Documentation',}
  href: '/docs' },{ name: 'API Reference',}
  href: '/api' }
  ];const legal = [;
    { name: 'Privacy Policy',}
  href: '/privacy' },{ name: 'Terms of Service',}
  href: '/terms' },{ name: 'Cookie Policy',}
  href: '/cookies' },{ name: 'GDPR Compliance',}
  href: '/gdpr' }
  ];const socialLinks = [;
    { name: 'Facebook',}
  href: '#', icon: Facebook },{ name: 'Twitter',}
  href: '#', icon: Twitter },{ name: 'LinkedIn',}
  href: '#', icon: Linkedin },{ name: 'GitHub',}
  href: '#', icon: Github }
  ];const scrollToTop = (window.scrollTo({ top: 0, behavior: 'smooth' ) => {
  return $3;}
})}return (<footer className=\"bg-gray-900 text-white\" />;
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\" />;
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8\" />;
          {/* Company Info */}
          <div className=\"col-span-1 md:col-span-2\" />;
            <Link to=\"/\" className=\"flex items-center space-x-2 mb-4\" />;
              <div className=\"w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center\" />;
                <span className=\"text-black font-bold text-sm\" />Z</span>;
              </div>;
              <span className=\"text-xl font-bold text-white\" />Zion Tech Group</span>;
            </Link>;
            <p className=\"text-gray-300 mb-4 max-w-md\" />;
              Leading provider of cutting-edge AI, IT, and digital transformation solutions.;
              We help businesses scale, innovate, and succeed in the digital age.;
            </p>;
            <div className=\"space-y-2\" />;
              <div className=\"flex items-center text-gray-300\" />;
                <Phone className=\"w-4 h-4 mr-2\" />;
                <span />+1 302 464 0950</span>;
              </div>;
              <div className=\"flex items-center text-gray-300\" />;
                <Mail className=\"w-4 h-4 mr-2\" />;
                <span />kleber@ziontechgroup.com</span>;
              </div>;
              <div className=\"flex items-center text-gray-300\" />;
                <MapPin className=\"w-4 h-4 mr-2\" />;
                <span />364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div />;
            <h3 className=\"text-lg font-semibold text-white mb-4\" />Services</h3>;
            <ul className=\"space-y-2\" />;
              {services.map((service) => (<li key={service.name} />;
                  <Link;
                    to={service.href}
                    className=\"text-gray-300 hover:text-white transition-colors\";
                   />;
                    {service.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company */}
          <div />;
            <h3 className=\"text-lg font-semibold text-white mb-4\" />Company</h3>;
            <ul className=\"space-y-2\" />;
              {company.map((item) => (<li key={item.name} />;
                  <Link;
                    to={item.href}
                    className=\"text-gray-300 hover:text-white transition-colors\";
                   />;
                    {item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Support */}
          <div />;
            <h3 className=\"text-lg font-semibold text-white mb-4\" />Support</h3>;
            <ul className=\"space-y-2\" />;
              {support.map((item) => (<li key={item.name} />;
                  <Link;
                    to={item.href}
                    className=\"text-gray-300 hover:text-white transition-colors\";
                   />;
                    {item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
        {/* Newsletter Signup */}
        <div className=\"border-t border-gray-800 mt-12 pt-8\" />;
          <div className=\"max-w-md\" />;
            <h3 className=\"text-lg font-semibold mb-2\" />Stay Updated</h3>;
            <p className=\"text-gray-400 mb-4\" />;
              Get the latest news and updates from Zion Tech Group.;
            </p>;
            <div className=\"flex\" />;
              <input;
                type=\"email\";
                placeholder=\"Enter your email\";
                className=\"flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\";
              />;
              <button className=\"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors\" />;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Section */}
        <div className=\"border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center\" />;
          <div className=\"flex flex-wrap gap-6 mb-4 md:mb-0\" />;
            {legal.map((item) => (<Link;}
                key={item.name}
                to={item.href}
                className=\"text-gray-400 hover:text-white text-sm transition-colors\";
               />;
                {item.name}
              </Link>;
            ))}
          </div>;
          <div className=\"flex space-x-4\" />;
            {socialLinks.map((social) => (<a;}
                key={social.name}
                href={social.href}
                className=\"text-gray-400 hover:text-white transition-colors\";
                aria-label={social.name}
               />;
                <social.icon className=\"h-5 w-5\" />;
              </a>;
            ))}
          </div>;
        </div>;
        {/* Back to Top Button */}
        <div className=\"mt-8 flex justify-end\" />;
          <button;
            type=\"button\";
            onClick={scrollToTop}
            className=\"flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer\";
            aria-label=\"Back to top\";
           />;
            <ChevronUp className=\"h-4 w-4\" aria-hidden=\"true\" />;
            <span />Back to Top</span>;
          </button>;
        </div>;
        <div className=\"border-t border-gray-800 mt-8 pt-8 text-center\" />;
          <p className=\"text-gray-400 text-sm\" />;
            © {currentYear} Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
  )}export default Footer;