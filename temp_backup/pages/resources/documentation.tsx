import React from 'react',
import SEO from '../../components/SEO',
import { motion } from 'framer-motion',
import {,
  FileText,;
  BookOpen,;
  Code,;
  Search,;
  Download,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Users,;
  Clock,;
  Globe,;
  Zap,
} from 'lucide-react',
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',
,
const DocumentationPage: React.FC = () => {,
  const documentationCategories = [,
    {,
      title: 'API Documentation',;
      description: 'Comprehensive API reference and integration guides',;
      icon: <Code className="w-8 h-8"  />,;
      features: ['REST API Reference', 'SDK Documentation', 'Code Examples', 'Integration Guides'],;
      href: '/resources/api',;
      color: 'from-blue-50o0 to-cyan-50o0',
    ,},;
    {,
      title: 'Developer Guides',;
      description: 'Step-by-step guides for developers and engineers',;
      icon: <BookOpen className="w-8 h-8"  />,;
      features: ['Getting Started', 'Best Practices', 'Tutorials', 'Sample Projects'],;
      href: '/resources/developer-guides',;
      color: 'from-green-50o0 to-emerald-50o0',
    ,},;
    {,
      title: 'User Manuals',;
      description: 'User-friendly guides for end users and administrators',;
      icon: <Users className="w-8 h-8"  />,;
      features: ['User Interface Guide', 'Administration Guide', 'Troubleshooting', 'FAQ'],;
      href: '/resources/user-manuals',;
      color: 'from-purple-50o0 to-pink-50o0',
    ,},;
    {,
      title: 'Technical Specifications',;
      description: 'Detailed technical specifications and architecture',;
      icon: <FileText className="w-8 h-8"  />,;
      features: ['System Architecture', 'Data Models', 'Security Specifications', 'Performance Metrics'],;
      href: '/resources/technical-specs',;
      color: 'from-yellow-50o0 to-orange-50o0',
    ,},;
    {,
      title: 'Integration Guides',;
      description: 'Guides for integrating with third-party systems',;
      icon: <Zap className="w-8 h-8"  />,;
      features: ['Third-party Integrations', 'Webhook Setup', 'Authentication', 'Data Mapping'],;
      href: '/resources/integration-guides',;
      color: 'from-indigo-50o0 to-purple-50o0',
    ,},;
    {,
      title: 'Release Notes',;
      description: 'Detailed information about product updates and releases',;
      icon: <Clock className="w-8 h-8"  />,;
      features: ['Version History', 'New Features', 'Bug Fixes', 'Migration Guides'],;
      href: '/resources/release-notes',;
      color: 'from-red-50o0 to-orange-50o0',
    ,}
  ],
,
  const documentationFeatures = [,
    {,
      title: 'Comprehensive',;
      description: 'Complete coverage of all features and functionality',;
      icon: <CheckCircle className="w-6 h-6"  />,
    ,},;
    {,
      title: 'Up-to-Date',;
      description: 'Always current with the latest product versions',;
      icon: <Clock className="w-6 h-6"  />,
    ,},;
    {,
      title: 'Searchable',;
      description: 'Easy to find the information you need quickly',;
      icon: <Search className="w-6 h-6"  />,
    ,},;
    {,
      title: 'Downloadable',;
      description: 'Available in multiple formats for offline use',;
      icon: <Download className="w-6 h-6"  />,
    ,}
,
}]