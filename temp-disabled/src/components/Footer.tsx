import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
 ;
  const currentYear = new Date().getFullYear();

const services = [
      { name: 'AI Services', href: '/services/ai-services',
},

      { name: 'IT Services', href: '/services/it-services',
},

      { name: 'Micro SaaS', href: '/services/micro-saas',
},

      { name: 'Cybersecurity', href: '/services/cybersecurity',
},

      { name: 'Cloud Solutions', href: '/services/cloud-solutions',
},

    { name: 'Mobile Development', href: '/services/mobile-development',
}
  ];

const company = [
      { name: 'About Us', href: '/about',
},

      { name: 'Our Team', href: '/about#team',
},

      { name: 'Careers', href: '/careers',
},

      { name: 'Blog', href: '/blog',
},

    { name: 'Case Studies', href: '/case-studies',
}
  ];

const support = [
      { name: 'Help Center', href: '/support',
},

      { name: 'FAQ', href: '/faq',
},

      { name: 'Contact Us', href: '/contact',
},

      { name: 'Documentation', href: '/docs',
},

    { name: 'API Reference', href: '/api',
}
  ];

const legal = [
      { name: 'Privacy Policy', href: '/privacy',
},

      { name: 'Terms of Service', href: '/terms',
},

      { name: 'Cookie Policy', href: '/cookies',
},

    { name: 'GDPR Compliance', href: '/gdpr',
}
  ];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI and technology solutions. 
              We deliver innovative software that drives growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services *,
}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover: text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company *,
}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover: text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal *,
}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover: text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ),
}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover: text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info *,
}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md: flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronUp className="w-5 h-5 mr-2" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};


export default Footer;