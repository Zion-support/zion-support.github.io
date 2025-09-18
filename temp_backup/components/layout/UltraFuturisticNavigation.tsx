<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Globe, 
  Brain, Rocket, Shield, Zap, Cpu,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

interface UltraFuturisticNavigationProps {
  className?: string;
}

const UltraFuturisticNavigation: React.FC<UltraFuturisticNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { name: 'Innovative Services', href: '/innovative-services', icon: <Rocket className="w-4 h-4" /> },
        { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
        { name: 'IT Services', href: '/it-services', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Quantum Services', href: '/quantum-services', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Security Services', href: '/security-services', icon: <Shield className="w-4 h-4" /> },
        { name: 'All Services', href: '/services', icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <Rocket className="w-4 h-4" />,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Startup Solutions', href: '/startup-solutions', icon: <Zap className="w-4 h-4" /> },
        { name: 'Government Solutions', href: '/government-solutions', icon: <Shield className="w-4 h-4" /> },
        { name: 'Healthcare Solutions', href: '/healthcare-solutions', icon: <Brain className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'Documentation', href: '/docs', icon: <Globe className="w-4 h-4" /> },
        { name: 'API Reference', href: '/api', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Blog', href: '/blog', icon: <Brain className="w-4 h-4" /> },
        { name: 'Case Studies', href: '/case-studies', icon: <Rocket className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { name: 'About Us', href: '/about', icon: <Globe className="w-4 h-4" /> },
        { name: 'Careers', href: '/careers', icon: <Brain className="w-4 h-4" /> },
        { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
        { name: 'Support', href: '/support', icon: <Shield className="w-4 h-4" /> }
      ]
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const UltraFuturisticNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticNavigation;
