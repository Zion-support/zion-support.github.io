<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube,
  Home,
  Briefcase,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Building,
  Users,
  BookOpen,
  FileText,
  Video,
  Code,
  Sparkles,
  Zap,
  Globe,
  Star,
  Lock,
  Database,
  Cpu,
  BarChart3,
  Lightbulb,
  Award,
  Mail,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-nav')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const navigationSections = [
    {
      id: 'services',
      title: 'Services',
      icon: Briefcase,
      items: [
        { label: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500' },
        { label: 'Quantum Computing', href: '/services?category=quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
        { label: 'Space Technology', href: '/services?category=space-tech', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
        { label: 'Cybersecurity', href: '/services?category=cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
        { label: 'Cloud Infrastructure', href: '/services?category=cloud', icon: Cloud, color: 'from-indigo-500 to-blue-500' },
        { label: 'Edge Computing', href: '/services?category=edge', icon: Cpu, color: 'from-green-500 to-emerald-500' }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      icon: Target,
      items: [
        { label: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, color: 'from-blue-500 to-indigo-500' },
        { label: 'Healthcare Technology', href: '/solutions/healthcare', icon: Users, color: 'from-green-500 to-emerald-500' },
        { label: 'Financial Technology', href: '/solutions/financial', icon: BarChart3, color: 'from-emerald-500 to-teal-500' },
        { label: 'Manufacturing & IoT', href: '/solutions/manufacturing', icon: Cpu, color: 'from-orange-500 to-red-500' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      items: [
        { label: 'Documentation', href: '/docs', icon: FileText, color: 'from-blue-500 to-cyan-500' },
        { label: 'Blog & Insights', href: '/blog', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
        { label: 'Webinars', href: '/webinars', icon: Video, color: 'from-purple-500 to-pink-500' },
        { label: 'Case Studies', href: '/case-studies', icon: Award, color: 'from-emerald-500 to-teal-500' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: Building,
      items: [
        { label: 'About Us', href: '/about', icon: Users, color: 'from-blue-500 to-purple-500' },
        { label: 'Leadership', href: '/leadership', icon: Star, color: 'from-yellow-500 to-orange-500' },
        { label: 'Careers', href: '/careers', icon: Users, color: 'from-green-500 to-emerald-500' },
        { label: 'Contact', href: '/contact', icon: Phone, color: 'from-cyan-500 to-blue-500' }
      ]
    }
  ];

  const quickActions = [
    { label: 'Get Started', href: '/contact', icon: Sparkles, color: 'from-cyan-500 to-purple-600' },
    { label: 'View Pricing', href: '/pricing', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { label: 'Schedule Demo', href: '/demo', icon: Video, color: 'from-purple-500 to-pink-500' },
    { label: 'Support', href: '/support', icon: Users, color: 'from-green-500 to-emerald-500' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const MobileNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">MobileNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default MobileNavigation;
