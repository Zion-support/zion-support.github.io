import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cookie, 
  Settings, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  Info, 
  AlertTriangle,
  Lock,
  Database,
  Globe,
  User,
  Bell,
  BarChart3,
  Target,
  Zap,
  Heart,
  Star,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Crown,
  Sparkles,
  ArrowRight,
  ChevronDown} from 'lucide-react';

const Cookies = () => {
  const [expandedSections, setExpandedSections] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Session management',
        'Load balancing'
      ],
      alwaysActive: true
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      examples: [
        'Language preferences',
        'Region settings',
        'User interface customization',
        'Form data retention'
      ],
      alwaysActive: false
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Page views and navigation',
        'User behavior patterns',
        'Performance metrics',
        'Error tracking'
      ],
      alwaysActive: false
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      examples: [
        'Ad personalization',
        'Campaign effectiveness',
        'Social media integration',
        'Retargeting'
      ],
      alwaysActive: false
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and provide a more personalized experience.',
      icon: Heart,
      color: 'from-indigo-500 to-purple-500',
      examples: [
        'Content preferences',
        'Notification settings',
        'Accessibility options',
        'Theme selection'
      ],
      alwaysActive: false
    }
  ];

  const cookieTable = [
    {
      name: 'session_id',
      purpose: 'Maintains your session while browsing the website',
      duration: 'Session',
      category: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'auth_token',
      purpose: 'Stores your authentication status',
      duration: '24 hours',
      category: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'language',
      purpose: 'Remembers your preferred language',
      duration: '1 year',
      category: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: 'theme',
      purpose: 'Stores your theme preference (light/dark)',
      duration: '1 year',
      category: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics tracking for website usage',
      duration: '2 years',
      category: 'Analytics',
      provider: 'Google'
    },
    {
      name: '_fbp',
      purpose: 'Facebook pixel for advertising optimization',
      duration: '3 months',
      category: 'Marketing',
      provider: 'Facebook'
    },
    {
      name: 'preferences',
      purpose: 'Stores your website preferences and settings',
      duration: '1 year',
      category: 'Preferences',
      provider: 'Zion Tech Group'
    }
  ];

export default function Cookies() {}
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO title="Cookie Policy | Zion Tech Group" description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content." keywords="cookie policy, privacy, data collection, website cookies" canonical="https://ziontechgroup.com/cookies"/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            
            <div className="bg-zion-blue-dark rounded-lg p-8 border border-zion-blue-light">
              <p className="text-zion-slate-light mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    We use cookies for several purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light mt-4 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand how visitors use our site</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies to provide relevant content</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Required for basic website functionality and security.
                      </p>
                    </div>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Preference Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Remember your settings and preferences for future visits.
                      </p>
                    </div>
                    <div className="bg-zion-blue-light/10 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                      <p className="text-zion-slate-light text-sm">
                        Used to deliver relevant advertisements and content.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light mt-4 space-y-2">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Set preferences for different types of cookies</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-zion-slate-light leading-relaxed">
                    If you have any questions about our cookie policy or how we use cookies, please contact us:
                  </p>
                  <div className="bg-white/20 rounded-lg p-4 mt-4">
                    <p className="text-gray-300">
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />
                      <strong>Phone:</strong> +1 (302) 464-0950<br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
