import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, 
  Settings, LogOut, Bell, Globe, Zap
} from 'lucide-react';
import Link from 'next/link';

interface EnhancedNavigationProps {
  className?: string;
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ className = '' }) => {
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

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Globe className="w-4 h-4" /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <Dna className="w-4 h-4" /> },
        { name: 'Financial Services', href: '/services?category=finance', icon: <DollarSign className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Lock className="w-4 h-4" /> },
        { name: 'IoT & Smart Devices', href: '/services?category=iot', icon: <Wifi className="w-4 h-4" /> },
        { name: 'Logistics & Supply Chain', href: '/services?category=logistics', icon: <Truck className="w-4 h-4" /> },
        { name: 'Metaverse & Gaming', href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4" /> },
        { name: 'Robotics & Automation', href: '/services?category=robotics', icon: <Bot className="w-4 h-4" /> },
        { name: 'Manufacturing', href: '/services?category=manufacturing', icon: <Factory className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/services?category=vehicles', icon: <Car className="w-4 h-4" /> }
