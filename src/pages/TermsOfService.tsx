import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  Users, 
  Lock, 
  Eye, 
  Info, 
  Calendar, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Mail,
  FileText,
  Download,
  Share2
} from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = '2025-01-15';
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Shield,
      content: `Zion Tech Group provides technology consulting, software development, AI solutions, cybersecurity services, and related technology services. Our services include artificial intelligence and machine learning solutions, cybersecurity consulting and implementation, cloud infrastructure and digital transformation, software development and consulting, and technology strategy and advisory services.`
    },
    {
      id: 'accounts',
      title: 'User Accounts and Responsibilities',
      icon: Users,
      content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the security of your account and password, all activities that occur under your account, notifying us immediately of any unauthorized use, and ensuring your account information is up to date.`
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: Shield,
      content: `You agree not to use our website or services to violate any applicable laws or regulations, infringe on intellectual property rights, transmit harmful or malicious code, engage in unauthorized access or interference with our systems, or use our services for any illegal or unauthorized purpose.`
    },
    {
      id: 'privacy',
      title: 'Privacy and Data Protection',
      icon: Lock,
      content: `We are committed to protecting your privacy and personal information. Our collection, use, and protection of your data is governed by our Privacy Policy, which is incorporated into these Terms by reference.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Eye,
      content: `All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.`
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Limitations',
      icon: Shield,
      content: `Our services are provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Info,
      content: `In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Shield,
      content: `We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Calendar,
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: Globe,
      content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through our website. Continued use of our services constitutes acceptance of the modified Terms.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      content: `If you have any questions about these Terms of Service, please contact us using the information provided below.`
    }
  ];

  const handleDownload = () => {
    const content = `Zion Tech Group Terms of Service\nLast Updated: ${lastUpdated}\n\n${sections.map(section => `${section.title}\n${section.content}`).join('\n\n')}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'terms-of-service.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zion Tech Group Terms of Service',
          text: 'Read our terms of service',
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
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Learn about our service agreements, user responsibilities, and legal terms."
        keywords={['terms of service', 'service agreement', 'legal terms', 'Zion Tech Group', 'terms']}
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Please read these terms carefully before using our services.
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
            <Calendar className="w-4 h-4" />
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

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Terms?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our terms of service, 
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
                href="mailto:legal@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                legal@ziontechgroup.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}