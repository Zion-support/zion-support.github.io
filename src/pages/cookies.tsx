import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  EyeOff,
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Database,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

const CookiesPage = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication', 'Security', 'Session management'],
      icon: Shield,
      required: true
    },
    {
      type: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: Database,
      required: false
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      icon: Globe,
      required: false
    },
    {
      type: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as language preferences and form data.',
      examples: ['Language settings', 'Form preferences', 'User customization'],
      icon: Settings,
      required: false
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      provider: 'Google'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      provider: 'Google'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication state',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      provider: 'Zion Tech Group'
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks user consent for marketing communications',
      duration: '2 years',
      provider: 'Zion Tech Group'
    }
  ];

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Cookie className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Cookie Policy
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Learn about how we use cookies and similar technologies to enhance your browsing experience 
              and understand how you can control them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={acceptAll}
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Accept All Cookies
              </button>
              <button
                onClick={rejectAll}
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Reject Non-Essential
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Preferences Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Manage Cookie Preferences
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Control which types of cookies you allow on our website. Essential cookies are always enabled 
              as they are necessary for basic functionality.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                      <cookie.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{cookie.type}</h3>
                        {cookie.required && (
                          <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {cookie.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example) => (
                          <span
                            key={example}
                            className="px-3 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-sm rounded-full border border-zion-cyan/20"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 ml-6">
                    {cookie.required ? (
                      <div className="flex items-center text-zion-cyan">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Always Active</span>
                      </div>
                    ) : (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences[cookie.type.toLowerCase().replace(' ', '') as keyof typeof cookiePreferences]}
                          onChange={() => handleCookieToggle(cookie.type.toLowerCase().replace(' ', ''))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zion-slate-dark peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zion-cyan/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                      </label>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={savePreferences}
              className="btn-neon px-8 py-4 text-lg font-semibold"
            >
              Save Preferences
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cookie Details Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Detailed Cookie Information
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specific details about the cookies we use, their purpose, and how long they remain active.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-4 bg-zion-cyan/10 border-b border-zion-cyan/20">
                <div className="p-4 font-semibold text-white">Cookie Name</div>
                <div className="p-4 font-semibold text-white">Purpose</div>
                <div className="p-4 font-semibold text-white">Duration</div>
                <div className="p-4 font-semibold text-white">Provider</div>
              </div>
              
              {cookieDetails.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-4 border-b border-zion-cyan/10 last:border-b-0 hover:bg-zion-slate-dark/30 transition-colors duration-300"
                >
                  <div className="p-4 font-mono text-zion-cyan">{cookie.name}</div>
                  <div className="p-4 text-zion-slate-light">{cookie.purpose}</div>
                  <div className="p-4 text-zion-slate-light">{cookie.duration}</div>
                  <div className="p-4 text-zion-slate-light">{cookie.provider}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Control Cookies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How to Control Cookies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Learn about different ways to manage cookies across various browsers and devices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Browser Settings',
                description: 'Most browsers allow you to control cookies through their settings menu.',
                icon: Monitor,
                steps: ['Open browser settings', 'Find privacy section', 'Manage cookie preferences']
              },
              {
                title: 'Mobile Devices',
                description: 'Control cookies on mobile devices through app settings and browser preferences.',
                icon: Smartphone,
                steps: ['Open device settings', 'Find app permissions', 'Manage data usage']
              },
              {
                title: 'Third-Party Tools',
                description: 'Use browser extensions and tools to manage cookies more granularly.',
                icon: Settings,
                steps: ['Install privacy extension', 'Configure preferences', 'Monitor cookie activity']
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {method.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                  {method.description}
                </p>
                
                <ol className="space-y-2">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start text-zion-slate-light">
                      <span className="w-6 h-6 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Information
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              More resources to help you understand our cookie policy and privacy practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-zion-cyan mr-3" />
                <h3 className="text-2xl font-bold text-white">Updates to Policy</h3>
              </div>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                We may update this cookie policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-zion-slate-light leading-relaxed">
                We will notify you of any material changes by posting the new policy on this page 
                and updating the "Last Updated" date.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-zion-cyan mr-3" />
                <h3 className="text-2xl font-bold text-white">Contact Us</h3>
              </div>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                If you have any questions about our use of cookies or this cookie policy, 
                please contact our privacy team.
              </p>
              <Link
                to="/contact"
                className="btn-futuristic inline-flex items-center"
              >
                Contact Privacy Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Privacy Matters
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We're committed to transparency and giving you control over your data. 
              Review our privacy policy to learn more about how we protect your information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/privacy"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Read Privacy Policy
              </Link>
              <Link
                to="/help"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Help
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;