import { SEO } from '@/components/SEO';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import { SEOHead } from '../components/SEOHead';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  Calendar,
  Info
} from 'lucide-react';

const Cookies: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: ["Authentication", "Security", "Session management"],
      duration: "Session or 1 year",
      necessary: true
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Page views", "User behavior", "Performance metrics"],
      duration: "2 years",
      necessary: false
    },
    {
      type: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: ["Language preferences", "User settings", "Form data"],
      duration: "1 year",
      necessary: false
    },
    {
      type: "Marketing Cookies",
      description: "Used for advertising and marketing purposes",
      examples: ["Targeted ads", "Social media integration", "Campaign tracking"],
      duration: "1 year",
      necessary: false
    }
  ];

  const cookieManagement = [
    {
      title: "Browser Settings",
      description: "Control cookies through your browser preferences",
      icon: Settings
    },
    {
      title: "Cookie Consent",
      description: "Manage preferences through our cookie banner",
      icon: Cookie
    },
    {
      title: "Third-party Opt-out",
      description: "Opt out of third-party tracking services",
      icon: Shield
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      cookies: ["_ga", "_gid", "_gat"]
    },
    {
      service: "Google Ads",
      purpose: "Advertising and conversion tracking",
      cookies: ["_gads", "_gac"]
    },
    {
      service: "Social Media",
      purpose: "Social media integration and sharing",
      cookies: ["fbp", "li_sugr"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Cookies Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies to improve your browsing experience. Understand cookie types, management options, and your privacy choices."
        keywords="cookies policy, cookie management, privacy, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cookies Policy
            </h1>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn how we use cookies and similar technologies to enhance your browsing experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version: 2.0</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-gray-300">
              This policy explains what cookies we use, why we use them, and how you can manage your cookie preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{cookie.type}</h3>
                  {cookie.necessary && (
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Essential
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{cookie.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-300">• {example}</li>
                    ))}
                  </ul>
                </div>
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
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Authentication and security</li>
                  <li>• Shopping cart functionality</li>
                  <li>• Form submissions</li>
                  <li>• Basic website navigation</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies help us understand how visitors interact with our website.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Page views and time spent</li>
                  <li>• Traffic sources and user behavior</li>
                  <li>• Performance monitoring</li>
                  <li>• Error tracking and debugging</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Settings className="w-6 h-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Preference Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies remember your choices and preferences for a personalized experience.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Language and region settings</li>
                  <li>• Theme and display preferences</li>
                  <li>• Accessibility settings</li>
                  <li>• Customized content delivery</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Globe className="w-6 h-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                </div>
                <p className="text-gray-300 mb-3">These cookies help us deliver relevant advertisements and measure their effectiveness.</p>
                <ul className="text-gray-300 space-y-2 ml-6 text-sm">
                  <li>• Targeted advertising</li>
                  <li>• Social media integration</li>
                  <li>• Campaign performance tracking</li>
                  <li>• User engagement metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              Some cookies on our website are placed by third-party services that we use to enhance functionality and analyze performance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Analytics Services</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Google Analytics</li>
                  <li>• Hotjar (user behavior)</li>
                  <li>• Mixpanel (product analytics)</li>
                  <li>• Amplitude (user insights)</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Marketing Tools</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Facebook Pixel</li>
                  <li>• Google Ads</li>
                  <li>• LinkedIn Insight Tag</li>
                  <li>• Twitter Pixel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Managing Your Cookie Preferences</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Browser Settings</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  You can control cookies through your web browser settings. Most browsers allow you to:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific sites</li>
                  <li>• Block all third-party cookies</li>
                  <li>• Set cookie preferences for future visits</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Cookie Consent Manager</h3>
                <p className="text-gray-300 mb-4">
                  We provide a cookie consent manager that allows you to:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Accept or decline non-essential cookies</li>
                  <li>• Customize your cookie preferences</li>
                  <li>• Update your choices at any time</li>
                  <li>• View detailed information about each cookie type</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Important Note</h3>
                </div>
                <p className="text-gray-300">
                  Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic site operation.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Cookie Duration</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-white">Session Cookies</h3>
                <p className="text-gray-300 text-sm">
                  Temporary cookies that are deleted when you close your browser. Used for basic functionality and security.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-white">Persistent Cookies</h3>
                <p className="text-gray-300 text-sm">
                  Cookies that remain on your device for a set period (usually 30 days to 2 years). Used for preferences and analytics.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-white">Third-Party Cookies</h3>
                <p className="text-gray-300 text-sm">
                  Cookies set by external services with their own expiration policies. Duration varies by service provider.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Data Protection & Privacy</h2>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-cyan-500 mr-3" />
                <h3 className="text-lg font-semibold text-white">Your Privacy is Protected</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Data Minimization</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• We only collect necessary data</li>
                    <li>• No personal information in cookies</li>
                    <li>• Anonymous analytics data</li>
                    <li>• Secure data transmission</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Compliance</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• GDPR compliance</li>
                    <li>• CCPA compliance</li>
                    <li>• Industry best practices</li>
                    <li>• Regular privacy audits</li>
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
                  </p>
=======
                <div className="text-sm text-gray-400">
                  Duration: {cookie.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Managing Your Cookie Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieManagement.map((method, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-party Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Third-party Cookies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{service.service}</h3>
                <p className="text-gray-300 mb-4">{service.purpose}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Cookies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.cookies.map((cookie, idx) => (
                      <span key={idx} className="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-xs">
                        {cookie}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Cookie Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Accept or decline non-essential cookies</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Withdraw consent at any time</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Delete existing cookies</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Set browser preferences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Questions About Cookies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 inline-block">
            <div className="flex items-center justify-center">
              <Info className="h-8 w-8 text-cyan-400 mr-3" />
              <div className="text-left">
                <p className="text-white font-semibold">Email: privacy@ziontechgroup.com</p>
                <p className="text-gray-300">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Manage Your Privacy
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Take control of your cookie preferences and browsing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Cookie Settings
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Privacy Policy
            </button>
          </div>
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

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
      </div>
    </div>
=======
        </div>
      </main>
    </>
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
=======
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Cookies() {
  return (
    <>
      <SEO
        title="Cookie Policy | Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies and similar technologies to improve your experience on our platform."
        keywords="cookie policy, cookies, Zion Tech Group, privacy, data collection"
        canonical="https://ziontechgroup.com/cookies"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Cookie Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              How we use cookies and similar technologies to enhance your experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
              <p className="text-zion-slate-light mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our platform.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">How We Use Cookies</h3>
              <p className="text-zion-slate-light mb-6">
                We use cookies for several purposes, including:
              </p>
              <ul className="text-zion-slate-light mb-6 space-y-2">
                <li>• Essential cookies for basic website functionality</li>
                <li>• Performance cookies to analyze site usage</li>
                <li>• Functionality cookies to remember your preferences</li>
                <li>• Marketing cookies to provide relevant content</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Managing Your Cookie Preferences</h3>
              <p className="text-zion-slate-light mb-6">
                You can control and manage cookies through your browser settings. However, 
                disabling certain cookies may affect the functionality of our website.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Updates to This Policy</h3>
              <p className="text-zion-slate-light">
                We may update this Cookie Policy from time to time. Please check back 
                periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies on our website"
        keywords="cookie policy, cookies, privacy, data collection, Zion Tech Group"
        canonical="https://ziontechgroup.com/cookies"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This policy explains how Zion Tech Group uses cookies and similar technologies 
            to enhance your browsing experience and provide personalized services.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* What Are Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What Are Cookies?</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit our website. They help us remember your preferences, analyze how you use 
              our site, and provide you with a better, more personalized experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cookies do not contain any personal information that can identify you individually, 
              but they may contain information about your device and how you interact with our website.
            </p>
          </div>
        </div>

        {/* Types of Cookies We Use */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, access to secure areas, and form submissions.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Session management</li>
                <li>• Security features</li>
                <li>• Basic functionality</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Website usage statistics</li>
                <li>• Performance monitoring</li>
                <li>• User behavior analysis</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Preference Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies remember your choices and preferences to provide you with a more 
                personalized experience on our website.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Language preferences</li>
                <li>• Theme settings</li>
                <li>• Customized content</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing Cookies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These cookies are used to track visitors across websites to display relevant 
                advertisements and measure the effectiveness of marketing campaigns.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Targeted advertising</li>
                <li>• Campaign effectiveness</li>
                <li>• Cross-site tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Cookies</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Website Functionality</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Remember your login status and preferences</li>
                  <li>• Enable secure transactions and form submissions</li>
                  <li>• Provide personalized content and recommendations</li>
                  <li>• Optimize website performance and user experience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Improvement</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Analyze website traffic and user behavior</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Improve website design and functionality</li>
                  <li>• Measure the effectiveness of our content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Third-Party Cookies</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              Some cookies on our website are set by third-party services that we use to enhance 
              functionality and provide additional features. These services may include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Analytics Services</h4>
                <p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Marketing Tools</h4>
                <p className="text-gray-300 text-sm">Facebook Pixel, Google Ads</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Customer Support</h4>
                <p className="text-gray-300 text-sm">Intercom, Zendesk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You can control and manage cookies through your browser settings. Most browsers 
                  allow you to view, delete, and block cookies from specific websites.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Please note that blocking certain cookies may affect the functionality of our 
                  website and your user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you first visit our website, you'll see a cookie consent banner that 
                  allows you to accept or decline non-essential cookies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You can change your preferences at any time by clicking the cookie settings 
                  link in the footer of our website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates to Policy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Updates to This Policy</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We will notify you of any material changes by posting the new policy on our 
              website and updating the "Last updated" date at the top of this page.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            If you have any questions about our use of cookies or this Cookie Policy, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </Link>
            <Link 
              to="/privacy"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CircleDot, Settings, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication cookies', 'Security cookies', 'Session management'],
      necessary: true
    },
    {
      title: 'Performance Cookies',
      icon: Settings,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Analytics cookies', 'Performance monitoring', 'Error tracking'],
      necessary: false
    },
    {
      title: 'Functional Cookies',
      icon: Eye,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Feature preferences'],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      icon: CircleDot,
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: ['Advertising cookies', 'Social media cookies', 'Tracking cookies'],
      necessary: false
    }
  ];

  const cookieTable = [
    {
      name: 'session_id',
      purpose: 'Maintains your session while using the website',
      duration: 'Session',
      type: 'Essential'
    },
    {
      name: 'auth_token',
      purpose: 'Keeps you logged in securely',
      duration: '30 days',
      type: 'Essential'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics - tracks website usage',
      duration: '2 years',
      type: 'Performance'
    },
    {
      name: '_fbp',
      purpose: 'Facebook Pixel - tracks conversions',
      duration: '3 months',
      type: 'Marketing'
    },
    {
      name: 'language',
      purpose: 'Remembers your language preference',
      duration: '1 year',
      type: 'Functional'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy | Zion Tech Group" 
        description="Learn about how Zion Tech Group uses cookies and similar technologies to improve your experience on our website."
        keywords="cookie policy, privacy, data protection, Zion Tech Group"
        canonical="https://ziontechgroup.com/cookies"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <CircleDot className="h-16 w-16 text-zion-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
            to recognize you when you visit our website and how we use them to improve your experience.
          </p>
          <p className="text-zion-slate-light mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* What are Cookies Section */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <CircleDot className="h-6 w-6 mr-2 text-zion-cyan" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zion-slate-light">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
            <p className="text-zion-slate-light">
              Cookies do not contain any information that personally identifies you, but personal information that we 
              store about you may be linked to the information stored in and obtained from cookies.
            </p>
          </CardContent>
        </Card>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.title} className="border-zion-blue-light">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-6 w-6 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{type.title}</CardTitle>
                      {type.necessary && (
                        <span className="px-2 py-1 bg-zion-purple text-white text-xs rounded-full">
                          Necessary
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light mb-3">
                      {type.description}
                    </CardDescription>
                    <ul className="space-y-1">
                      {type.examples.map((example, index) => (
                        <li key={index} className="text-zion-slate-light text-sm flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Cookie Table */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Specific Cookies We Use</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Below is a list of the specific cookies we use and their purposes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-white font-semibold">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Purpose</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Duration</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">session_id</td>
                    <td className="px-4 py-3 text-gray-300">Maintains your session</td>
                    <td className="px-4 py-3 text-gray-300">Session</td>
                    <td className="px-4 py-3 text-gray-300">Essential</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">_ga</td>
                    <td className="px-4 py-3 text-gray-300">Google Analytics tracking</td>
                    <td className="px-4 py-3 text-gray-300">2 years</td>
                    <td className="px-4 py-3 text-gray-300">Analytics</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">theme_preference</td>
                    <td className="px-4 py-3 text-gray-300">Remembers your theme choice</td>
                    <td className="px-4 py-3 text-gray-300">1 year</td>
                    <td className="px-4 py-3 text-gray-300">Preference</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50">
                    <td className="px-4 py-3 text-gray-300">fbp</td>
                    <td className="px-4 py-3 text-gray-300">Facebook advertising</td>
                    <td className="px-4 py-3 text-gray-300">3 months</td>
                    <td className="px-4 py-3 text-gray-300">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-cyan-300 text-sm">
                <strong>We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</strong>
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Questions About Cookies?</h2>
            <p className="text-gray-300 text-center mb-6">
              If you have any questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Phone</span>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white font-semibold">Address</span>
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
=======
        </div>
      </section>
    </div>
  );
};

export default Cookies;