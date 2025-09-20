import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ;
  Cookie,;
  CheckCircle, ;
  Settings, ;
  Eye, ;
  Globe, ;
  Info, ;
  Shield,;
  Clock,;
  Target,;
  ExternalLink;
} from "lucide-react"
import { SEO } from "../components/SEO"
interface CookieType {;
  id: string,name: string,description: string,color: string,icon: React.ComponentType<any>,examples: string[],alwaysActive: boolean;
};

interface CookieDetail {;
  name: string,purpose: string,duration: string,provider: string,type: 'essential' | 'analytics' | 'marketing' | 'functional'
};

const cookieTypes: CookieType[] = [;
  {;
    id: 'essential',name: 'Essential Cookies',description: 'Required for basic website functionality',color: 'from-blue-500/20 to-cyan-500/20',icon: Shield,examples: ['AuthenticationSecurity', 'Basic navigation'],;
    alwaysActive: true;
  };
  {;
    id: 'analytics',name: 'Analytics Cookies',description: 'Help us understand how visitors use our website',color: 'from-purple-500/20 to-pink-500/20',icon: Globe,examples: ['Page viewsUser behavior', 'Performance metrics'],;
    alwaysActive: false;
  };
  {;
    id: 'marketing',name: 'Marketing Cookies',description: 'Used to deliver personalized advertisements',color: 'from-orange-500/20 to-red-500/20',icon: Target,examples: ['Ad targetingCampaign tracking', 'Conversion analysis'],;
    alwaysActive: false;
  };
  {;
    id: 'functional',name: 'Functional Cookies',description: 'Enable enhanced functionality and personalization',color: 'from-green-500/20 to-emerald-500/20',icon: Settings,examples: ['Language preferencesCustom settings', 'Enhanced features'],;
    alwaysActive: false;
  };
];
const cookieDetails: CookieDetail[] = [;
  {;
    name: 'session_id',purpose: 'Maintains user session',duration: 'Session',provider: 'Zion Tech Group',type: 'essential'
  };
  {;
    name: 'analytics_id',purpose: 'Tracks user behavior',duration: '2 years',provider: 'Google Analytics',type: 'analytics'
  };
  {;
    name: 'marketing_id',purpose: 'Personalized advertising',duration: '1 year',provider: 'Facebook Pixel',type: 'marketing'
  };
  {;
    name: 'preferences',purpose: 'User preferences',duration: '1 year',provider: 'Zion Tech Group',type: 'functional'
  };
];
const Cookies: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({;
    essential: true,analytics: false,marketing: false,functional: false;
  });
  useEffect(() => {;
    //[^;]*
    const saved = localStorage.getItem('cookiePreferences')
    if (saved) {;
      try {;
        const parsed = JSON.parse(saved)
        setCookiePreferences({ ...cookiePreferences, ...parsed }),;
      } catch (e) {;
        console.error('Failed to parse cookie preferences'),;
      };
    };
  }, []),;

  const updateCookiePreference = (type: string, enabled: boolean) => {;
    const newPreferences = { ...cookiePreferences, [type]: enabled };
    setCookiePreferences(newPreferences),;
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences)),;
  },;

  const acceptAll = () => {;
    const allAccepted = {;
      essential: true,analytics: true,marketing: true,functional: true;
    };
    setCookiePreferences(allAccepted),;
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted)),;
  },;

  const savePreferences = () => {;
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences)),;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies, manage your preferences, and understand our cookie policy."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-6">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Cookie <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">Policy</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. ;
              Learn more about how we use cookies and manage your preferences.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Cookie Preferences Manager */};
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">;
              <div className="text-center mb-8">;
                <h2 className="text-3xl font-bold text-white mb-4">Cookie Preferences</[^>]*>
                <p className="text-gray-300">;
                  Manage your cookie preferences and control how we use cookies on our website;
                </[^>]*>
              </[^>]*>

              <div className="space-y-6 mb-8">;
                {cookieTypes.map((type) => (;
                  <div key={type.id} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center">;
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl mr-4`}>;
                          {React.createElement(type.icon, { className: "w-6 h-6 text-white" })};
                        </[^>]*>
                        <div>;
                          <h3 className="text-lg font-bold text-white">{type.name}</[^>]*>
                          <p className="text-gray-300 text-sm">{type.description}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="flex items-center">;
                        <label className="relative inline-flex items-center cursor-pointer">;
                          <input;
                            type="checkbox"
                            checked={cookiePreferences[type.id as keyof typeof cookiePreferences]};
                            onChange={(e) => updateCookiePreference(type.id, e.target.checked)};
                            disabled={type.alwaysActive};
                            className="[^"]*"
                          />;
                          <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                    ;
                    <div className="ml-16">;
                      <h4 className="text-sm font-semibold text-white mb-2">Examples:</[^>]*>
                      <ul className="space-y-1">;
                        {type.examples.map((example, index) => (;
                          <li key={index} className="flex items-center text-gray-300 text-sm">;
                            <[^>]*/>
                            {example};
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button;
                  onClick={acceptAll};
                  className="[^"]*"
                >;
                  Accept All Cookies;
                </[^>]*>
                <button;
                  onClick={savePreferences};
                  className="[^"]*"
                >;
                  Save Preferences;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Detailed Cookie Information */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Detailed Cookie Information</[^>]*>
            <p className="text-xl text-gray-300">;
              Comprehensive list of cookies used on our website;
            </[^>]*>
          </[^>]*>

          <div className="max-w-4xl mx-auto">;
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden">;
              <div className="p-6">;
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-sm font-semibold text-gray-300 border-b border-slate-600/50 pb-3 mb-4">;
                  <div>Cookie Name</[^>]*>
                  <div>Purpose</[^>]*>
                  <div>Duration</[^>]*>
                  <div>Provider</[^>]*>
                  <div>Type</[^>]*>
                </[^>]*>
                ;
                <div className="space-y-3">;
                  {cookieDetails.map((cookie, index) => (;
                    <motion.div
                      key={cookie.name};
                      initial={{ opacity: 0, x: -20 }};
                      whileInView={{ opacity: 1, x: 0 }};
                      transition={{ duration: 0.8, delay: index * 0.05 }};
                      className="[^"]*"
                    >;
                      <div className="font-mono text-cyan-400">{cookie.name}</[^>]*>
                      <div className="text-gray-300">{cookie.purpose}</[^>]*>
                      <div className="text-gray-300">{cookie.duration}</[^>]*>
                      <div className="text-gray-300">{cookie.provider}</[^>]*>
                      <div>;
                        <span className={`px-2 py-1 rounded text-xs font-medium ${;
                          cookie.type === 'essential' ? 'bg-blue-500/20 text-blue-400' :;
                          cookie.type === 'analytics' ? 'bg-purple-500/20 text-purple-400' :;
                          cookie.type === 'marketing' ? 'bg-orange-500/20 text-orange-400' :;
                          'bg-green-500/20 text-green-400'
                        }`}>;
                          {cookie.type};
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Cookie Management */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Managing Your Cookies</[^>]*>
            <p className="text-xl text-gray-300">;
              Learn how to control cookies in your browser and device settings;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.1 }};
              className="[^"]*"
            >;
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-4">Browser Settings</[^>]*>
                <p className="text-gray-300 text-sm mb-4">;
                  Most browsers allow you to control cookies through their settings menu;
                </[^>]*>
                <a;
                  href="#"
                  className="[^"]*"
                >;
                  Learn More →;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-4">Privacy Tools</[^>]*>
                <p className="text-gray-300 text-sm mb-4">;
                  Use privacy tools and browser extensions to manage cookies;
                </[^>]*>
                <a;
                  href="#"
                  className="[^"]*"
                >;
                  Learn More →;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.3 }};
              className="[^"]*"
            >;
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-bold text-white mb-4">Global Settings</[^>]*>
                <p className="text-gray-300 text-sm mb-4">;
                  Configure global privacy settings for all websites;
                </[^>]*>
                <a;
                  href="#"
                  className="[^"]*"
                >;
                  Learn More →;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Questions About Cookies?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              If you have any questions about our cookie policy or how we use cookies;
              please don't hesitate to contact us.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="mailto:privacy@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Contact Privacy Team;
              </[^>]*>
              <a;
                href="/privacy"
                className="[^"]*"
              >;
                <[^>]*/>
                Privacy Policy;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Cookies;