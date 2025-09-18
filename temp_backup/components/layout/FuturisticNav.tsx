<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Phone, Mail } from 'lucide-react';

export default function FuturisticNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI & Automation', href: '/services#ai' },
        { name: 'Cloud Infrastructure', href: '/services#cloud' },
        { name: 'Security & Compliance', href: '/services#security' },
        { name: 'Data Analytics', href: '/services#analytics' },
        { name: 'DevOps & CI/CD', href: '/services#devops' },
        { name: 'Digital Transformation', href: '/services#digital' }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas',
      dropdown: [
        { name: 'Content & Marketing', href: '/micro-saas?category=Content+%26+Marketing' },
        { name: 'Development & DevOps', href: '/micro-saas?category=Development+%26+DevOps' },
        { name: 'Sales & CRM', href: '/micro-saas?category=Sales+%26+CRM' },
        { name: 'Analytics & Data', href: '/micro-saas?category=Analytics+%26+Data' },
        { name: 'AI & Machine Learning', href: '/micro-saas?category=AI+%26+Machine+Learning' },
        { name: 'Emerging Technologies', href: '/micro-saas?category=Emerging+Technologies' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const FuturisticNav: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FuturisticNav</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FuturisticNav;
