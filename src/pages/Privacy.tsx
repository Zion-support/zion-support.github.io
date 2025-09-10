import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings,
  Trash2,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy: React.FC = (): JSX.Element => {
  const lastUpdated = 'December 15, 2024';

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement enterprise-grade security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Processing',
      description: 'All data processing follows strict security protocols and industry best practices.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and protect your information.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can request changes or deletion.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      items: [
        'Name and contact information (email, phone, address)',
        'Company and job title information',
        'Professional credentials and certifications',
        'Communication preferences and history'
      ]
    },
    {
      title: 'Technical Information',
      items: [
        'IP address and device information',
        'Browser type and version',
        'Operating system and platform',
        'Usage data and analytics'
      ]
    },
    {
      title: 'Business Information',
      items: [
        'Project requirements and specifications',
        'Service usage and performance data',
        'Payment and billing information',
        'Support and communication records'
      ]
    }
  ];

  const dataUses = [
    {
      icon: Settings,
      title: 'Service Delivery',
      description: 'To provide and improve our technology services and solutions.'
    },
    {
      icon: Users,
      title: 'Communication',
      description: 'To communicate with you about our services, updates, and support.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'To ensure the security and integrity of our systems and services.'
    },
    {
      icon: Database,
      title: 'Analytics',
      description: 'To analyze usage patterns and improve our services and user experience.'
    }
  ];

  const dataRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of your personal data that we hold.'
    },
    {
      icon: FileText,
      title: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data in certain circumstances.'
    },
    {
      icon: Download,
      title: 'Right to Portability',
      description: 'Request transfer of your data to another service provider.'
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your data.'
    },
    {
      icon: Database,
      title: 'Secure Storage',
      description: 'Data is stored in secure, certified data centers with redundant security measures.'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'Our team receives regular security training and follows strict data handling procedures.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'privacy@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'mailto:privacy@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      description: 'Speak directly with our team',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Our headquarters location',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Response Time',
      value: 'Within 30 days',
      description: 'We respond to all privacy requests within 30 days',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy and understand your data rights."
        keywords="privacy policy, data protection, GDPR, data rights, personal information, Zion Tech Group, privacy"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
              <Shield className="w-5 h-5 text-zion-purple mr-2" />
              <span className="text-zion-purple font-medium">Privacy Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information 
              while providing exceptional technology services and solutions.
            </p>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30">
              <Calendar className="w-4 h-4 text-zion-cyan mr-2" />
              <span className="text-zion-cyan text-sm">Last updated: {lastUpdated}</span>
            </div>
          </motion.div>