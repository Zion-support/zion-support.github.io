import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Trash2,
  RefreshCw,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  cookies: CookieItem[];
  necessary: boolean;
}

interface CookieItem {
  name: string;
  purpose: string;
  duration: string;
  provider: string;
}

const Cookies: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['essential']));
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const updateCookiePreference = (category: string, enabled: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage and update cookie consent
    // console.log removed for production
    // Show success message
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    savePreferences();
  };

  const cookieCategories: CookieCategory[] = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      necessary: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session and authentication state',
          duration: 'Session',
          provider: 'Zion Tech Group'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          provider: 'Zion Tech Group'
        },
        {
          name: 'language_preference',
          purpose: 'Remembers your language and regional settings',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'cookie_consent',
          purpose: 'Stores your cookie consent preferences',
          duration: '1 year',
          provider: 'Zion Tech Group'
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      necessary: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - Distinguishes unique users',
          duration: '2 years',
          provider: 'Google'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - Distinguishes unique users',
          duration: '24 hours',
          provider: 'Google'
        },
        {
          name: '_gat',
          purpose: 'Google Analytics - Throttles request rate',
          duration: '1 minute',
          provider: 'Google'
        },
        {
          name: 'amplitude_id',
          purpose: 'Amplitude Analytics - User behavior tracking',
          duration: '10 years',
          provider: 'Amplitude'
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      necessary: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - Tracks conversions and retargeting',
          duration: '3 months',
          provider: 'Facebook'
        },
        {
          name: 'ads_prefs',
          purpose: 'Google Ads - Stores advertising preferences',
          duration: '1 year',
          provider: 'Google'
        },
        {
          name: 'linkedin_oid',
          purpose: 'LinkedIn Insight Tag - Conversion tracking',
          duration: '2 years',
          provider: 'LinkedIn'
        },
        {
          name: 'twitter_id',
          purpose: 'Twitter Pixel - Conversion and retargeting',
          duration: '2 years',
          provider: 'Twitter'
        }
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      necessary: false,
      cookies: [
        {
          name: 'user_preferences',
          purpose: 'Stores user interface preferences and settings',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'chat_widget',
          purpose: 'Remembers chat widget state and history',
          duration: '30 days',
          provider: 'Zion Tech Group'
        },
        {
          name: 'form_autocomplete',
          purpose: 'Enables form autocomplete functionality',
          duration: '1 year',
          provider: 'Zion Tech Group'
        },
        {
          name: 'theme_preference',
          purpose: 'Remembers your theme preference (light/dark)',
          duration: '1 year',
          provider: 'Zion Tech Group'
        }
      ]
    }
  ];

  const lastUpdated = 'December 15, 2024';
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            Cookie Policy{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            How we use cookies and similar technologies.{" "}
          </p>{" "}
        </div>{" "}
        <div className="max-w-3xl mx-auto prose prose-lg">
          {" "}
          <h2>What Are Cookies</h2>{" "}
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit our website.
          </p>{" "}
          <h2>How We Use Cookies</h2>{" "}
          <p>
            We use cookies to improve your experience on our website,analyze
            site traffic,and personalize content.
          </p>{" "}
          <h2>Types of Cookies</h2>{" "}
          <p>
            We use both session cookies and persistent cookies. Session cookies
            are deleted when you close your browser,while persistent cookies
            remain on your device for a set period.
          </p>{" "}
          <h2>Managing Cookies</h2>{" "}
          <p>
            You can control and manage cookies through your browser settings.
            However,disabling cookies may affect the functionality of our
            website.
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Cookies;
