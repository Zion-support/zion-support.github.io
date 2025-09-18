<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Globe, Bot, Cloud, Shield, Sparkles, Rocket, Cpu, Database, Brain, Atom, Eye, Lock, BarChart3, Users, Target, TrendingUp, Star, Award, ZapIcon, CloudIcon, BotIcon, ShieldIcon, GlobeIcon, CpuIcon, DatabaseIcon, BrainIcon, AtomIcon, EyeIcon, LockIcon, BarChart3Icon, UsersIcon, TargetIcon, TrendingUpIcon, StarIcon, AwardIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as HeadlessMenu, X as HeadlessX, Zap as HeadlessZap, Sparkles as HeadlessSparkles, ChevronDown, Globe as HeadlessGlobe, Shield as HeadlessShield, Cpu as HeadlessCpu, Brain as HeadlessBrain } from 'lucide-react';
import { BookOpen, ShieldCheck } from 'lucide-react';

export default function QuantumHolographicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const navItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: <Zap className="w-4 h-4" />,
      description: 'Welcome to the future'
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'LLM, RAG, MLOps packages'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud, SRE, security'
    },
    { 
      name: 'AI Services', 
      href: '/ai-services', 
      icon: <Brain className="w-4 h-4" />,
      description: 'LLM, RAG, MLOps'
    },
    { 
      name: 'IT Services', 
      href: '/it-services', 
      icon: <Cloud className="w-4 h-4" />,
      description: 'Cloud, DevOps, SRE'
    },
    { 
      name: 'Services', 
      href: '/services', 
      icon: <Cloud className="w-4 h-4" />,
      description: '350+ Micro SaaS Solutions',
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=AI%20%26%20Machine%20Learning', icon: <Brain className="w-4 h-4" />, description: 'Advanced AI solutions' },
        { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing', icon: <Atom className="w-4 h-4" />, description: 'Quantum-powered platforms' },
        { name: 'IoT & Smart Cities', href: '/services?category=IoT%20%26%20Smart%20Cities', icon: <Cpu className="w-4 h-4" />, description: 'Intelligent edge computing' },
        { name: 'Robotics & Automation', href: '/services?category=Robotics%20%26%20Automation', icon: <Bot className="w-4 h-4" />, description: 'Self-learning automation' },
        { name: 'Biotechnology & Healthcare', href: '/services?category=Biotechnology%20%26%20Healthcare', icon: <Eye className="w-4 h-4" />, description: 'Biomedical breakthroughs' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity', icon: <Lock className="w-4 h-4" />, description: 'Quantum-safe security' },
        { name: 'Analytics & Business Intelligence', href: '/services?category=Analytics%20%26%20Business%20Intelligence', icon: <BarChart3 className="w-4 h-4" />, description: 'Intelligent insights' },
        { name: 'Cloud & Infrastructure', href: '/services?category=Cloud%20%26%20Infrastructure', icon: <Sparkles className="w-4 h-4" />, description: 'Future innovations' }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/micro-saas', 
      icon: <Bot className="w-4 h-4" />,
      description: 'Innovative Solutions'
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      icon: <BookOpen className="w-4 h-4" />,
      description: 'Docs & reports'
    },
    { 
      name: 'Support', 
      href: '/support', 
      icon: <ShieldCheck className="w-4 h-4" />,
      description: 'Help & SLAs'
    },
    { 
      name: 'Pricing', 
      href: '/pricing', 
      icon: <Globe className="w-4 h-4" />,
      description: 'Transparent Plans'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: <Sparkles className="w-4 h-4" />,
      description: 'Insights & guides'
    },
    { 
      name: 'About', 
      href: '/about', 
      icon: <Shield className="w-4 h-4" />,
      description: 'Our Mission'
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: <Zap className="w-4 h-4" />,
      description: 'Get in Touch'
    },
  ];

  const handleDropdownEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const QuantumHolographicNavbar: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuantumHolographicNavbar</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default QuantumHolographicNavbar;
