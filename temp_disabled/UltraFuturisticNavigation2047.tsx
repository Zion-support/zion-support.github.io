



import React, { useState, useEffect } from 'react',
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X, Phone, Mail, ArrowRight;
import {

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  Brain, Rocket, Target, Atom, Shield;
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;


  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin;
} from 'lucide-react';



  icon?: React.ReactNode;




  description?: string;

}
const navigation_items: NavigationItem[] = [;
  {
    name: 'Home & Core',
    href: '/',


    icon: <Home className='w - 5 h - 5' />,    description: 'Main pages and core information',
    category: 'core',
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;
      {    icon: <Home className="w - 5 h - 5" />,
    description: 'Main pages and core information',
    category: 'core',
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;
      {
        name: 'Home',
        href: '/',
        description: 'Main homepage',
        icon: <Home className='w - 4 h - 4' />,
        color: 'from - emerald - 500 to - cyan - 500',
        featured: true,
      },
      {
        name: 'About Us',
        href: '/about',
        description: 'Company information and mission',
        icon: <Info className='w - 4 h - 4' />,
        color: 'from - blue - 500 to - cyan - 500',
      },
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
        icon: <Mail className='w - 4 h - 4' />,
        color: 'from - purple - 500 to - pink - 500',
      },
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our leadership team',
        icon: <Users className='w - 4 h - 4' />,
  color?: string;
}
  color?: string;
  color?: string;  color?: string;
}
  color?: string;

const navigationItems: NavigationItem[] = []
  {}
'
    name: 'Home & Core''
    href: '/''
    icon: <Home className='w-5 h-5' />,    description: 'Main pages and core information''
    category: 'core''
    color: 'from-emerald-500 to-cyan-500'
    children: []
      {    icon: <Home className="w-5 h-5" />'
    description: 'Main pages and core information''
    category: 'core''
    color: 'from-emerald-500 to-cyan-500'
    children: []
      {}
}
const navigation_items: NavigationItem[] = [;
  {'
    name: 'Home & Core','
    href: '/','
    icon: <Home className='w - 5 h - 5' />,    description: 'Main pages and core information','
    category: 'core','
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;"
      {    icon: <Home className="w - 5 h - 5" />,'
    description: 'Main pages and core information','
    category: 'core','
    color: 'from - emerald - 500 to - cyan - 500',
    children: [;
      {'
        name: 'Home','
        href: '/','
        description: 'Main homepage','
        icon: <Home className='w - 4 h - 4' />,'
        color: 'from - emerald - 500 to - cyan - 500',
        featured: true,
      },
      {'
        name: 'About Us','
        href: '/about','
        description: 'Company information and mission','
        icon: <Info className='w - 4 h - 4' />,'
        color: 'from - blue - 500 to - cyan - 500',
      },
      {'
        name: 'Contact','
        href: '/contact','
        description: 'Get in touch with our team','
        icon: <Mail className='w - 4 h - 4' />,'
        color: 'from - purple - 500 to - pink - 500',
      },
      {'
        name: 'Team','
        href: '/team','
        description: 'Meet our leadership team','
        icon: <Users className='w - 4 h - 4' />,'
        color: 'from - orange - 500 to - red - 500',
      },
    ],
  },
  {
    name: 'Advanced Solutions',
    href: '/solutions',
    icon: <Rocket className='w-5 h-5' />,    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {

    description: 'Cutting-edge technology solutions',
    category: 'solutions',
    color: 'from-blue-500 to-cyan-500',
    children: [

    description: 'Knowledge base and insights',
    category: 'resources',
    color: 'from-orange-500 to-red-500',
    children: [

    description: 'Company information and support',
    category: 'company',
    color: 'from-gray-500 to-slate-500',
    children: [
      {
        href: '/about',
        description: 'Our story and mission',
        icon: <Info className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Users className='w-4 h-4' />,
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Support',
        href: '/support',
        description: 'Get help and support',
        icon: <MessageCircle className='w-4 h-4' />,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy',
        description: 'Privacy and data protection',
        icon: <Shield className='w-4 h-4' />,
        color: 'from-red-500 to-pink-500',
      },
    ],
  },];        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-pink-500'
    name: 'AI & Technology Services',
    href: '/services',
    icon: <Brain className='w - 5 h - 5' />,    description: 'Advanced AI and technology solutions',        name: 'Home',
        href: '/',
        description: 'Main homepage',
        icon: <Home className="w - 4 h - 4" />,
        color: 'from - emerald - 500 to - cyan - 500',
        featured: true;
      }
      {
        name: 'About Us',
        href: '/about',
        description: 'Company information and mission',
        icon: <Info className="w - 4 h - 4" />,
        color: 'from - blue - 500 to - cyan - 500';
      }
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
        icon: <Mail className="w - 4 h - 4" />,
        color: 'from - purple - 500 to - pink - 500';
      }
      {
        name: 'Team',
        href: '/team',
        description: 'Meet our leadership team',
        icon: <Users className="w - 4 h - 4" />,
        color: 'from - orange - 500 to - red - 500';
      }
    ];
};






    const handleResize = (
      if (window.innerWidth >= 1024) {
        setIsOpen(false);


  }, []);
  return (
    <nav className='relative bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>




          <div className="flex-shrink-0">;






          {/* Desktop Navigation */}

                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4' />                </button>                <button


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2,
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon,
  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon,
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin
} from 'lucide-react',


                <AnimatePresence    />;
                  {activeDropdown === item.name && (<motion.div;}
                      initial={{ opacity: 0, y: 10 }

}
                      animate={{ opacity: 1, y: 0 }
}


                              {child.icon}
                            </div>;

                      <div className='space-y-4'>
                        {item.children?.map(child => (


          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items - center lg:space - x-8'>;
            {navigation_items.map (item => (
              <div key={item.name} className='relative group'>;
                <button;
                  on_click={() => handleDropdownToggle (item.name)}
                  className='flex items - center space - x-1 px - 3 py - 2 text - sm font - medium text - gray - 300 hover:text - white transition - colors duration - 200';
                >;


                              {child.icon}
                            </div>
                            <div className='flex-1'>
                              <div className='flex items-center space-x-2'>
                                <span className='font-medium text-white'>

                            <div className='flex-1'    />;
                              <div className='flex items-center space-x-2'    />;
                                <span className='font-medium text-white'    />;

                                  {child.name}

                                </span>
                                {child.featured && (

                                  <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full'    />
                                    Featured}
                                  </span>}

                                )}
                              </div>

                                  {child.name}
                                </span>
                                {child.featured && (






          {/* Contact Info & CTA */}

<div className='hidden lg: flex lg:items-center lg:space-x-4'    />
            <div className='flex items-center space-x-4 text-sm text-gray-400'    />
              <a;
href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
                  />


                <Phone className='w-4 h-4'    />
                <span    />{contactInfo.mobile}</span>
              </a>
            </div>
            <Link;
href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                />
              Get Started;
              <ArrowRight className='ml-2 w-4 h-4'    />
            </Link>
          </div>

          {/* Mobile menu button *}
        </div>;
      </div>;
<div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <a

                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >'
                <Phone className='w-4 h-4' />                <span>{contactInfo.mobile}</span>
              </a>
            </div>"
            <Link          <div className="hidden lg:flex lg:items-center lg:space-x-4">"
            <div className="flex items-center space-x-4 text-sm text-gray-400">"`
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">"
                <Phone className="w-4 h-4" />

          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            <div className='flex items-center space-x-4 text-sm text-gray-400'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-1 hover:text-white transition-colors'
              >
                <Phone className='w-4 h-4' />                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />


                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link

              href='/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4' />            </Link>
          </div>
          {/* Mobile menu button */}

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}



                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`}
                    />;
                  </button>          >;
            <div className="px-2 pt-2 pb-3 space-y-1">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name}>;


            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button


                    onClick={() => handleDropdownToggle(item && item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200";
                  >;
                    <div className="flex items-center space-x-2">;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
}
onClick={() => handleDropdownToggle(item && item.name)}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 "hover":text-white "hover":bg-slate-700/50 rounded-md transition-colors duration-200">"

                    <div className="flex items-center space-x-2">;"
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;'`
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`} />;
                  </button>;

                    <ChevronDown;
className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                       />
                  </button>
                  <AnimatePresence    />
                    {activeDropdown === item.name && (}
                      <motion.div;}
onClick={() =    /> handleDropdownToggle(item && item.name)}
                    className=\"w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200\">
"
                    <div className=\"flex items-center space-x-2\"    />;
                      {item && item.icon}
                      <span    />{item && item.name}</span>;
                    </div>;
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : ''}`}    />;
                  </button>;
      {/* Mobile Navigation */}
      <AnimatePresence    />;
        {is_open && (<motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
}
            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}

                          >
                            {child.name}
                          </Link>

                        ))}
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}

              {/* Mobile Contact Info */}'
              <div className=pt-4 pb-3 border-t border-slate-700/50>;'
                <div className='px-3 py-2 text-sm text-gray-400>;
                  <div className='flex items-center space-x-2 mb-2'>;
                    <Phone className=w-4 h-4' />;'
                      className=hover:text-white transition-colors>;
                      {contactInfo && contactInfo.mobile}
                    </a>;
                  </div>;
                  <Link'
                    href='/contact
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}>;
                    Get Started;
                    <ArrowRight className=ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}"
              <div className=pt-4 pb-3 border-t border-slate-700/50>"
                <div className="px-3 py-2 text-sm text-gray-400>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className=w-4 h-4" />"`
                    <a href={`tel:${contactInfo.mobile}`} className=hover:text-white transition-colors>
                      {contactInfo.mobile}
                    </a>
                  </div>"
                  <div className="flex items-center space-x-2 mb-2>
                    <Mail className="w-4 h-4" />`
                    <a href={`mailto:${contactInfo.email}`} className=hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>"
                  <div className=flex items-center space-x-2>"
                    <MapPin className="w-4 h-4 />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="px-3 pt-2">

              <div className="pt-4 pb-3 border-t border-slate-700/50">;




              {/* Mobile Contact Info */}
              <div className='pt-4 pb-3 border-t border-slate-700/50'>
                <div className='px-3 py-2 text-sm text-gray-400'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Phone className='w-4 h-4' />

                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Mail className='w-4 h-4' />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='w-4 h-4' />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className='px-3 pt-2'>
                  <Link
                    href='/contact'
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}
                  >
                    Get Started
                    <ArrowRight className='ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}
              <div className="pt-4 pb-3 border-t border-slate-700/50">
                <div className="px-3 py-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="px-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"

                  </Link>;
                </div>;
              </div>;
            </div>;


          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
;
export default UltraFuturisticNavigation2047);
}
;
export default UltraFuturisticNavigation2047;
;





                      {contactInfo.email}

                    </a>
                  </div>



)
};






