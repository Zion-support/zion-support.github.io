import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Shield, Cookie, Eye, Settings, Database, Lock } from 'lucide-react';
=======
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CircleDot, Settings, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e

export default function Cookies() {
  const cookieTypes = [
    {
<<<<<<< HEAD
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.',
      examples: ['Authentication', 'Security', 'Session management'],
      icon: Shield,
      necessary: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: Database,
      necessary: false
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: ['Language preferences', 'Theme settings', 'Form data'],
      icon: Settings,
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Social media integration', 'Advertising networks', 'Remarketing'],
      icon: Eye,
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
      necessary: false
    }
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services.
          </p>
        </div>

        {/* Cookie Information */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* What are Cookies */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content and advertisements.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            <div className="grid gap-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      cookie.necessary 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-br from-blue-500 to-purple-600'
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                        {cookie.necessary && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                            Necessary
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{cookie.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="text-gray-300 text-sm mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block all third-party cookies</li>
                  <li>• Clear all cookies when you close your browser</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                <p className="text-gray-300 text-sm mb-4">
                  When you first visit our website, you'll see a cookie consent banner that allows you to:
                </p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Accept all cookies</li>
                  <li>• Accept only necessary cookies</li>
                  <li>• Customize your preferences</li>
                  <li>• Learn more about our cookie policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some cookies on our website are set by third-party services that we use to enhance functionality and analyze usage. These services include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Analytics Services</h4>
                <p className="text-gray-300 text-sm">Google Analytics, Hotjar, and other analytics tools to understand user behavior and improve our services.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Social Media</h4>
                <p className="text-gray-300 text-sm">LinkedIn, Twitter, and other social platforms for sharing and engagement features.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Marketing Tools</h4>
                <p className="text-gray-300 text-sm">Advertising networks and marketing automation platforms for personalized content delivery.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-2">Security Services</h4>
                <p className="text-gray-300 text-sm">Cloudflare, reCAPTCHA, and other security services to protect against threats.</p>
              </div>
            </div>
          </div>

          {/* Updates and Contact */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Updates and Contact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Policy Updates</h3>
                <p className="text-gray-300 text-sm">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                <p className="text-gray-300 text-sm mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">Email: <span className="text-blue-400">kleber@ziontechgroup.com</span></p>
                  <p className="text-gray-300">Phone: <span className="text-blue-400">+1 302 464 0950</span></p>
                  <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Contact Form →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover how Zion Tech Group can transform your business with cutting-edge AI solutions and innovative technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
=======
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
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zion-blue-light">
                    <th className="text-left py-3 px-4 text-white font-semibold">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((cookie, index) => (
                    <tr key={index} className="border-b border-zion-blue-light/30">
                      <td className="py-3 px-4 text-zion-cyan font-mono">{cookie.name}</td>
                      <td className="py-3 px-4 text-zion-slate-light">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-zion-slate-light">{cookie.duration}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          cookie.type === 'Essential' 
                            ? 'bg-zion-purple text-white' 
                            : 'bg-zion-blue-light text-zion-slate-light'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Managing Cookies */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Settings className="h-6 w-6 mr-2 text-zion-cyan" />
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zion-slate-light">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies 
              can impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Browser Settings</h4>
                <p className="text-zion-slate-light text-sm">
                  Most browsers allow you to refuse to accept cookies and to delete cookies. 
                  The methods for doing so vary from browser to browser.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Cookie Consent</h4>
                <p className="text-zion-slate-light text-sm">
                  When you first visit our website, you'll see a cookie consent banner where 
                  you can choose which types of cookies to accept.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-8 border-zion-blue-light">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Lock className="h-6 w-6 mr-2 text-zion-cyan" />
              Third-Party Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zion-slate-light">
              In addition to our own cookies, we may also use various third-party cookies to report usage 
              statistics of the website, deliver advertisements on and through the website, and so on.
            </p>
            <p className="text-zion-slate-light">
              These third-party cookies are not under our control and are subject to the third party's 
              privacy policy. We recommend that you review the privacy policies of these third parties.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-zion-blue-light bg-zion-blue-dark/50">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Questions About Cookies?</CardTitle>
            <CardDescription className="text-zion-slate-light">
              If you have any questions about our use of cookies, please contact us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
              >
                Email Privacy Team
              </a>
            </div>
            <p className="text-center text-zion-slate-light mt-4">
              You can also read our full <Link to="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</Link> for more information.
            </p>
          </CardContent>
        </Card>
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
      </div>
    </div>
  );
}