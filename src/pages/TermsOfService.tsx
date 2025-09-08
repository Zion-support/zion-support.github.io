import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  Users, 
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
      term: 'Service Provider',
      definition: 'Zion Tech Group, a technology company providing AI, cloud, and cybersecurity services.'
    },
    {
      term: 'Services',
      definition: 'All products, platforms, and services offered by Zion Tech Group, including AI solutions, cloud infrastructure, and cybersecurity services.'
    },
    {
      term: 'User/Client',
      definition: 'Any individual or entity that uses our services, visits our website, or enters into a business relationship with us.'
    },
    {
      term: 'Content',
      definition: 'Any information, data, text, software, graphics, or other materials provided through our services.'
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