import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Lock, 
  CheckCircle, 
  ExternalLink, 
  AlertTriangle, 
  Mail, 
  Shield, 
  Clock, 
  FileText,
  Download,
  Share2
} from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = '2025-01-15';
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: Eye,
      content: `Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, company information, and any other information you choose to provide.`
    },
    {
      id: 'usage-information',
      title: 'How We Use Your Information',
      icon: Users,
      content: `We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform.`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Globe,
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: CheckCircle,
      content: `You have the right to access, correct, or delete your personal information. You can also opt out of certain communications and control how your information is used.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: Eye,
      content: `We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.`
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: ExternalLink,
      content: `Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties.`
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: Globe,
      content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.`
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: Users,
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.`
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: AlertTriangle,
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Mail,
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information provided below.`
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email address, phone number', 'Company and job title', 'Billing and payment information'],
      purpose: 'Account management, service delivery, billing',
      retention: 'As long as your account is active plus 7 years'
    },
    {
      category: 'Usage Data',
      examples: ['Service usage patterns', 'Feature interactions', 'Performance metrics'],
      purpose: 'Service improvement, analytics, troubleshooting',
      retention: '2 years from collection'
    },
    {
      category: 'Technical Data',
      examples: ['IP address, device information', 'Browser type and version', 'Operating system'],
      purpose: 'Security, fraud prevention, service optimization',
      retention: '1 year from collection'
    },
    {
      category: 'Marketing Data',
      examples: ['Communication preferences', 'Marketing campaign interactions', 'Feedback and surveys'],
      purpose: 'Marketing communications, product development',
      retention: '3 years from last interaction'
    }
  ];

  const handleDownload = () => {
    const content = `Zion Tech Group Privacy Policy\nLast Updated: ${lastUpdated}\n\n${sections.map(section => `${section.title}\n${section.content}`).join('\n\n')}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy-policy.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zion Tech Group Privacy Policy',
          text: 'Read our comprehensive privacy policy',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information. Read our comprehensive privacy policy."
        keywords={['privacy policy', 'data protection', 'personal information', 'Zion Tech Group', 'privacy']}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Your privacy is important to us. Learn how we protect and handle your personal information.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300">
            <Clock className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <section.icon className="w-4 h-4" />
                      {section.title}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data Categories Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Data Categories & Retention</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Examples</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  {dataCategories.map((category, index) => (
                    <tr key={category.category} className="border-t border-white/10">
                      <td className="px-6 py-4 text-white font-medium">{category.category}</td>
                      <td className="px-6 py-4 text-gray-300">
                        <ul className="list-disc list-inside space-y-1">
                          {category.examples.map((example, i) => (
                            <li key={i} className="text-sm">{example}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{category.purpose}</td>
                      <td className="px-6 py-4 text-gray-300">{category.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our privacy practices or this policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                privacy@ziontechgroup.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}