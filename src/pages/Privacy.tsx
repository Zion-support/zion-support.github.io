import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Settings,
  Trash2,
  Download,
  ArrowRight,
  Star,
  Award,
  Heart,
  Zap,
  Brain,
  Cloud,
  Cpu,
  Network,
  BarChart3,
  Code,
  Server,
  BarChart,
  PieChart,
  LineChart,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

const Privacy: React.FC = () => {
  const currentYear = new Date().getFullYear();
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
      description: 'We are transparent about how we collect, use, and protect your data.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and privacy preferences.'
    },
    {
      icon: Database,
      title: 'Data Minimization',
      description: 'We only collect the data necessary to provide our services.'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'We comply with international privacy laws and regulations.'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and contact details',
      purpose: 'Account creation, communication, and service delivery',
      retention: 'As long as your account is active or as required by law'
    },
    {
      category: 'Usage Data',
      description: 'How you interact with our services, features used, and preferences',
      purpose: 'Service improvement, personalization, and analytics',
      retention: '2 years from last activity'
    },
    {
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      purpose: 'Security, performance optimization, and troubleshooting',
      retention: '1 year from collection'
    },
    {
      category: 'Business Data',
      description: 'Company information, project details, and business requirements',
      purpose: 'Service delivery, customization, and support',
      retention: 'As long as your account is active'
    }
  ];

  const userRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of your personal data that we hold'
    },
    {
      icon: Edit,
      title: 'Right to Rectification',
      description: 'Correct inaccurate or incomplete personal data'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data (right to be forgotten)'
    },
    {
      icon: Download,
      title: 'Right to Portability',
      description: 'Receive your data in a structured, machine-readable format'
    },
    {
      icon: Settings,
      title: 'Right to Restrict Processing',
      description: 'Limit how we process your personal data'
    },
    {
      icon: AlertTriangle,
      title: 'Right to Object',
      description: 'Object to processing of your personal data'
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols'
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your data'
    },
    {
      icon: Database,
      title: 'Secure Storage',
      description: 'Data is stored in secure, certified data centers with redundant systems'
    },
    {
      icon: Users,
      title: 'Employee Training',
      description: 'Regular privacy and security training for all employees'
    },
    {
      icon: Globe,
      title: 'Regular Audits',
      description: 'Regular security audits and penetration testing'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Comprehensive incident response procedures and breach notification'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and personal data. Our comprehensive privacy policy outlines your rights and our data protection practices."
        keywords="privacy policy, data protection, GDPR, personal data, privacy rights, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your privacy is our priority. Learn how we protect your data and respect your rights.
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-400">
              <span>Last updated: {lastUpdated}</span>
              <span>•</span>
              <span>Effective: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Privacy Principles</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal data. 
              These principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Data We Collect</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We collect only the data necessary to provide our services and improve your experience.
            </p>
          </motion.div>

          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{category.category}</h3>
                    <p className="text-gray-300 text-sm">{category.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-1">Purpose</h4>
                    <p className="text-gray-300 text-sm">{category.purpose}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-1">Retention</h4>
                    <p className="text-gray-300 text-sm">{category.retention}</p>
                  </div>
                  <div className="flex items-center justify-end">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              You have comprehensive rights regarding your personal data. We make it easy to exercise these rights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <right.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{right.title}</h3>
                <p className="text-gray-300 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Security Measures</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your data from unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <measure.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{measure.title}</h3>
                <p className="text-gray-300 text-sm">{measure.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about this privacy policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Privacy Policy Question"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Email Privacy Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-gray-400 text-sm"
          >
            <p>
              This privacy policy is effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future, 
              which will be in effect immediately after being posted on this page.
            </p>
            <p className="mt-4">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
