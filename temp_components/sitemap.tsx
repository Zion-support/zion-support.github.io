import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, BookOpen, Phone, Mail, MapPin, Twitter, Linkedin, 
  Github, ArrowUp, Heart, TrendingUp, BarChart3, Cloud, Network,
  FileText, Briefcase, Users2, Building, Zap, Star, CheckCircle
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SitemapPage() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', href: '/', description: 'Main landing page' },
    { name: 'About Us', href: '/about', description: 'Company information and mission' },
    { name: 'Services', href: '/services', description: 'All our technology services' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
    { name: 'Team', href: '/team', description: 'Meet our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
    { name: 'Pricing', href: '/pricing-2025', description: 'Service pricing information' }
  ];

  const serviceCategories = [
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered analytics and insights' },
    { name: 'Quantum Cybersecurity', href: '/services/quantum-cybersecurity', description: 'Quantum-resistant security solutions' },
    { name: 'Edge Computing', href: '/services/edge-computing', description: 'Edge orchestration and IoT management' },
    { name: 'Space Technology', href: '/services/space-technology', description: 'Space exploration and satellite tech' },
    { name: 'AI Customer Experience', href: '/services/ai-customer-experience', description: 'AI-powered customer solutions' },
    { name: 'Neural Interface Development', href: '/services/neural-interface', description: 'Brain-computer interface development' }
  ];

  const companyPages = [
    { name: 'Portfolio', href: '/portfolio', description: 'Our work and achievements' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'News & Press', href: '/news', description: 'Company news and press releases' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
  ];

  const resourcePages = [
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and case studies' },
    { name: 'Whitepapers', href: '/whitepapers', description: 'Technical whitepapers and research' },
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', href: '/api', description: 'API documentation and reference' },
    { name: 'Support', href: '/support', description: 'Customer support and help' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' },
    { name: 'Security', href: '/security', description: 'Security information' },
    { name: 'Compliance', href: '/compliance', description: 'Compliance and certifications' }
  ];

  const specialPages = [
    { name: 'Comprehensive Services Showcase', href: '/comprehensive-2025-services-showcase', description: 'Complete service overview' },
    { name: 'Ultimate Futuristic Services', href: '/ultimate-futuristic-services-showcase-2025', description: 'Future-focused services' },
    { name: 'Technology Insights', href: '/technology-insights', description: 'Technology trends and insights' },
    { name: 'Solutions', href: '/solutions', description: 'Industry solutions' },
    { name: 'Startup Tools', href: '/startup-tools', description: 'Tools for startups' },
    { name: 'Tool Comparison', href: '/tool-comparison', description: 'Compare different tools' },
    { name: 'URL Shortener', href: '/url-shortener', description: 'URL shortening service' },
    { name: 'Website Performance Monitor', href: '/website-performance-monitor', description: 'Performance monitoring tool' },
    { name: 'WCAG Accessibility Scanner', href: '/wcag-accessibility-scanner', description: 'Accessibility compliance tool' },
    { name: 'Whitepaper Builder', href: '/whitepaper-builder', description: 'Whitepaper creation tool' },
    { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation', description: 'Compliance automation tool' },
    { name: 'Site Health', href: '/site-health', description: 'Website health monitoring' }
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const sitemap: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">sitemap</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default sitemap;
