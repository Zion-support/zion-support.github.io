

import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';


];



const serviceCategories = [
  {;
      name: 'AI & Machine Learning',;}
      href: '/services?category=AI%20%26%20Machine%20Learning',;}
    },;
    {;
      name: 'Cloud & Infrastructure',;}
      href: '/services?category=Cloud%20%26%20Infrastructure',;}
    },;
      { name: 'Cybersecurity'}
  href: '/services?category=Cybersecurity'}
},
;
    {;
      name: 'Analytics & Business Intelligence',;}
      href: '/services?category=Analytics%20%26%20Business%20Intelligence',;}
    },;
    {;
      name: 'Robotics & Automation',;}
      href: '/services?category=Robotics%20%26%20Automation',;}
    },;
    {;
      name: 'Blockchain & Web3',;}
      href: '/services?category=Blockchain%20%26%20Web3',;}
    }
];


const socialLinks = [
  {;
      name: 'LinkedIn',;
      href: 'https://www && www.linkedin.com/company/zion-tech-group',;}
      icon: '💼',;}
    },;
    { name: 'X'}
  href: 'https://x && x.com/ziontechgroup', icon: '🐦'}
},;
    { name: 'GitHub'}
  href: 'https://github && github.com/Zion-Holdings', icon: '💻'}
}
];


          {/* Quick Links */}






                  >
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>"
                  <p className="text-white font-medium">Phone</p>
                  <a;
                    href={`tel:${contactInfo.mobile}`}"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>



              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </span>
            </div>
            <p className=&quot;text-gray-400 mb-6 leading-relaxed&quot;>
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.
            </p>
            <div className=&quot;flex space-x-4&quot;>
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Cloud className='w-5 h-5 text-green-400 mr-2' />
              Services
            </h3>
            <ul className='space-y-3'>
              {serviceCategories.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Services
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



              <Link
                href='/cookies'





                className='text-gray-400 hover: text-white transition-colors duration-200'
               />
                Cookie Policy;
              </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>







      {/* Floating elements *}
}





