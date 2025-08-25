<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye, Database } from 'lucide-react';
=======
import { SEO } from '@/components/SEO';
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

export default function Cookies() {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, privacy, data protection, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Cookie</span> Policy
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Understanding how we use cookies and similar technologies to enhance your experience on Zion Tech Group.
            </p>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Are Cookies?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  We use cookies responsibly and in accordance with applicable privacy laws to ensure 
                  your data is protected while providing you with the best possible service.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Secure & Private</h3>
                <p className="text-zion-slate-light text-center">
                  All cookies are encrypted and used only for legitimate purposes to improve your experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Essential Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Required for basic website functionality and security.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Authentication</li>
                  <li>• Security</li>
                  <li>• Basic navigation</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Analytics Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Help us understand how visitors use our website.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Page views</li>
                  <li>• User behavior</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Preference Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Remember your settings and preferences for future visits.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Language settings</li>
                  <li>• Theme preferences</li>
                  <li>• Customized content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Managing Your Cookies</h2>
            <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• View and delete existing cookies</li>
                    <li>• Block cookies from specific sites</li>
                    <li>• Block all third-party cookies</li>
                    <li>• Clear all cookies when you close your browser</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-zion-cyan/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <p className="text-zion-slate-light">
                    Check your browser's help section for specific instructions on managing cookies.
=======
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience"
        keywords="cookie policy, cookies, tracking, privacy, Zion Tech Group cookies"
        canonical="https://ziontechgroup.com/cookies"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-zion-slate-light">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-zion-slate-light mb-6">
                  This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar 
                  technologies when you visit our website. This policy should be read together with our Privacy Policy, 
                  which explains how we use your personal information.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  What Are Cookies?
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                  when you visit a website. They help websites remember information about your visit, such as your 
                  preferred language and other settings, which can make your next visit easier and the site more useful to you.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  How We Use Cookies
                </h2>
                <p className="text-zion-slate-light mb-4">
                  We use cookies for several purposes, including:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                  <li>Essential cookies that are necessary for the website to function properly</li>
                  <li>Analytics cookies that help us understand how visitors interact with our website</li>
                  <li>Functionality cookies that remember your preferences and settings</li>
                  <li>Marketing cookies that help us deliver relevant content and advertisements</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Types of Cookies We Use
                </h2>
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">Essential Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies are essential for the website to function and cannot be switched off in our systems. 
                  They are usually only set in response to actions made by you which amount to a request for services, 
                  such as setting your privacy preferences, logging in, or filling in forms.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Analytics Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the 
                  performance of our site. They help us to know which pages are the most and least popular and 
                  see how visitors move around the site.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Functionality Cookies</h3>
                <p className="text-zion-slate-light mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">Marketing Cookies</h3>
                <p className="text-zion-slate-light mb-6">
                  These cookies may be set through our site by our advertising partners. They may be used by 
                  those companies to build a profile of your interests and show you relevant advertisements on other sites.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Third-Party Cookies
                </h2>
                <p className="text-zion-slate-light mb-6">
                  In addition to our own cookies, we may also use various third-party cookies to report usage 
                  statistics of the website, deliver advertisements on and through the website, and so on. 
                  These third-party cookies are not under our control and are subject to the third party's privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-zion-slate-light mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already 
                  on your computer and you can set most browsers to prevent them from being placed. However, 
                  if you do this, you may have to manually adjust some preferences every time you visit a site.
                </p>
                <p className="text-zion-slate-light mb-6">
                  Most web browsers allow you to manage cookies through their settings preferences. To learn more 
                  about how to manage cookies, visit the help section of your browser.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Specific Cookie Information
                </h2>
                <p className="text-zion-slate-light mb-4">
                  Below is a list of the main cookies we use and their purposes:
                </p>
                
                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Essential Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>session_id:</strong> Maintains your session while using our website</li>
                    <li><strong>csrf_token:</strong> Protects against cross-site request forgery attacks</li>
                    <li><strong>preferences:</strong> Stores your basic website preferences</li>
                  </ul>
                </div>

                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>_ga:</strong> Google Analytics cookie for tracking website usage</li>
                    <li><strong>_gid:</strong> Google Analytics cookie for tracking user sessions</li>
                    <li><strong>_gat:</strong> Google Analytics cookie for controlling request rate</li>
                  </ul>
                </div>

                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Functionality Cookies</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li><strong>theme:</strong> Remembers your preferred color theme</li>
                    <li><strong>language:</strong> Stores your preferred language setting</li>
                    <li><strong>notifications:</strong> Remembers your notification preferences</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Updates to This Policy
                </h2>
                <p className="text-zion-slate-light mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or 
                  for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                  Contact Us
                </h2>
                <p className="text-zion-slate-light mb-6">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                  <p className="text-zion-slate-light mb-2">
                    <strong>Email:</strong> kleber@ziontechgroup.com
                  </p>
                  <p className="text-zion-slate-light mb-2">
                    <strong>Phone:</strong> +1 (302) 464-0950
                  </p>
                  <p className="text-zion-slate-light">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
                  </p>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Questions About Cookies?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-e276

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-300">
            Learn how we use cookies and similar technologies to enhance your experience.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8"
        >
          <div className="flex items-center text-cyan-400 mb-2">
            <Lock className="w-5 h-5 mr-2" />
            <span className="font-semibold">Last Updated:</span>
          </div>
          <p className="text-white">December 2024</p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* What Are Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember information about your visit, such as your preferred language 
                and other settings.
              </p>
              <p>
                Cookies can make your next visit easier and the site more useful to you. They help us 
                provide you with a better experience by understanding how you use our website.
              </p>
            </div>
          </motion.section>

          {/* How We Use Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-cyan-400" />
              How We Use Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Security Cookies:</strong> Help protect against fraud and maintain security</li>
              </ul>
            </div>
          </motion.section>

          {/* Types of Cookies We Use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Types of Cookies We Use
            </h2>
<<<<<<< HEAD
=======
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                <p>
                  These cookies are temporary and are deleted when you close your browser. They help 
                  maintain your session and remember your preferences during your visit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. 
                  They help us remember your preferences for future visits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
                <p>
                  These cookies are set by third-party services we use, such as analytics providers 
                  and social media platforms.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Specific Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-cyan-400" />
              Specific Cookies We Use
            </h2>
>>>>>>> origin/cursor/build-and-fix-errors-e276
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                  <p className="text-sm">These cookies are necessary for the website to function and cannot be switched off.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                  <p className="text-sm">Help us understand how visitors interact with our website.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Preference Cookies</h3>
                  <p className="text-sm">Allow the website to remember choices you make.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Cookies</h3>
                  <p className="text-sm">Used to track visitors across websites for marketing purposes.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Managing Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View all cookies stored on your device</li>
                <li>Delete specific cookies or all cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Set preferences for different types of cookies</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
            >
              <Globe className="w-5 h-5 mr-2" />
              Contact Us
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Globe, Mail, Phone } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-300">
              Learn how we use cookies and similar technologies to enhance your experience.
            </p>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-8"
          >
            <div className="flex items-center text-cyan-400 mb-2">
              <Settings className="w-5 h-5 mr-2" />
              <span className="font-semibold">Last Updated:</span>
            </div>
            <p className="text-white">December 2024</p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* What Are Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
                What Are Cookies?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, such as your preferred language 
                  and other settings.
                </p>
                <p>
                  Cookies can make your next visit easier and the site more useful to you. They help us 
                  provide you with a better experience by understanding how you use our website.
                </p>
              </div>
            </motion.section>

            {/* How We Use Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Cookies
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We use cookies for several purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Security Cookies:</strong> Help protect against fraud and maintain security</li>
                </ul>
              </div>
            </motion.section>

            {/* Types of Cookies We Use */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Types of Cookies We Use
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                  <p className="text-gray-300 text-sm">Required for basic website functionality and security.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300 text-sm">Help us understand how visitors use our website.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Preference Cookies</h3>
                  <p className="text-gray-300 text-sm">Remember your settings and preferences.</p>
                </div>
              </div>
            </motion.section>

            {/* Managing Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Managing Your Cookies
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View all cookies stored on your device</li>
                  <li>Delete specific cookies or all cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>
                <p className="mt-4">
                  We respect your privacy choices and provide clear options for managing cookie preferences.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                Questions About Cookies?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about our cookie policy or how we use cookies, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                  <Link
                    to="/privacy"
                    className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-200"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
<<<<<<< HEAD
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
            >
              <Globe className="w-5 h-5 mr-2" />
              Back to Home
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
            </Link>
          </motion.div>
        </div>
=======
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Third-Party Services
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We use third-party services that may set cookies on your device:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media:</strong> Social media integration and sharing features</li>
                <li><strong>Payment Processors:</strong> Secure payment processing services</li>
                <li><strong>Customer Support:</strong> Live chat and support tools</li>
              </ul>
              <p>
                These services have their own privacy policies and cookie practices. We recommend 
                reviewing their policies for more information.
              </p>
            </div>
          </motion.section>

          {/* Updates to Policy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-cyan-400" />
              Updates to This Policy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the new policy on this page 
                and updating the "Last Updated" date. We encourage you to review this policy 
                periodically.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Email: kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Phone: +1 (302) 464-0950</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
=======
        </div>
      </main>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO
        title="Cookie Policy"
        description="Learn how Zion Tech Group uses cookies and similar technologies to improve your experience on our platform."
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GradientHeading>Cookie Policy</GradientHeading>
            
            <div className="prose prose-invert max-w-none mt-8">
              <p className="text-zion-slate-light text-lg mb-6">
                This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar technologies when you visit our website and use our services.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-6">
                Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Essential Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
              </p>

              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Performance Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
              </p>

              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Functional Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your language preferences and login status.
              </p>

              <h3 className="text-xl font-semibold text-zion-cyan mb-3">Marketing Cookies</h3>
              <p className="text-zion-slate-light mb-4">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">How to Manage Cookies</h2>
              <p className="text-zion-slate-light mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse cookies or delete them</li>
                <li>Device settings: You can manage cookies through your device settings</li>
                <li>Third-party tools: Use browser extensions or tools to manage cookies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="text-zion-slate-light mb-6">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-zion-slate-light mb-6">
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
                  support@ziontechgroup.com
                </a>
              </p>

              <div className="bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg p-6 mt-8">
                <p className="text-zion-slate-light text-sm">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
  );
}