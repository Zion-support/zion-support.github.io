import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { motion   } from "framer-motion";
import {
  Cookie;
  CheckCircle,
  Settings,
  Eye,
  Globe,
  Info,
  Shield;
  Clock;
  Target;
  ExternalLink;
}
}
 } from "lucide-react";
import { SEO   } from "../components/SEO";
interface CookieType {
  id: string,na,
  m: e: string,descripti,
  o: n: string,col,
  o: r: string,ic,
  o: n: React.ComponentType<any>,exampl,
  e: s: string[],alwaysActi,
  v: e: boolean;
}
}
}

interface CookieDetail {
  na,
  m: e: string,purpo,
  s: e: string,durati,
  o: n: string,provid,
  e: r: string,ty,
  p: e: 'essential' | 'analytics' | 'marketing' | 'functional'
}
}
}

const,
  cookieType: s: CookieType[] = [
  {
  i,
  d: 'essential',na,
  m: e: 'Essential Cookies',descripti,
  o: n: 'Required for basic website functionality',col,
  o: r: 'from-blue-500/20 to-cyan-500/20',ic,
  o: n: Shield,exampl,
  e: s: ['AuthenticationSecurity', 'Basic navigation']
    alwaysActi,
  v: e: true;
},
  {
  id: 'analytics',na,
  m: e: 'Analytics Cookies',descripti,
  o: n: 'Help us understand how visitors use our website',col,
  o: r: 'from-purple-500/20 to-pink-500/20',ic,
  o: n: Globe,exampl,
  e: s: ['Page viewsUser behavior', 'Performance metrics']
    alwaysActi,
  v: e: false;
},
  {
  id: 'marketing',na,
  m: e: 'Marketing Cookies',descripti,
  o: n: 'Used to deliver personalized advertisements',col,
  o: r: 'from-orange-500/20 to-red-500/20',ic,
  o: n: Target,exampl,
  e: s: ['Ad targetingCampaign tracking', 'Conversion analysis']
    alwaysActi,
  v: e: false;
},
  {
  id: 'functional',na,
  m: e: 'Functional Cookies',descripti,
  o: n: 'Enable enhanced functionality and personalization',col,
  o: r: 'from-green-500/20 to-emerald-500/20',ic,
  o: n: Settings,exampl,
  e: s: ['Language preferencesCustom settings', 'Enhanced features']
    alwaysActi,
  v: e: false;
},
  ]
const,
  cookieDetail: s: CookieDetail[] = [
  {
  nam,
  e: 'session_id',purpo,
  s: e: 'Maintains user session',durati,
  o: n: 'Session',provid,
  e: r: 'Zion Tech Group',ty,
  p: e: 'essential'
},
  {
  na,
  m: e: 'analytics_id',purpo,
  s: e: 'Tracks user behavior',durati,
  o: n: '2 years',provid,
  e: r: 'Google Analytics',ty,
  p: e: 'analytics'
},
  {
  na,
  m: e: 'marketing_id',purpo,
  s: e: 'Personalized advertising',durati,
  o: n: '1 year',provid,
  e: r: 'Facebook Pixel',ty,
  p: e: 'marketing'
},
  {
  na,
  m: e: 'preferences',purpo,
  s: e: 'User preferences',durati,
  o: n: '1 year',provid,
  e: r: 'Zion Tech Group',ty,
  p: e: 'functional'
},
  ]
const,
  Cookie: s: React.FC = () () => {
  const [cookiePreferences, setCookiePreferences] = useState({
  essenti,
  a: l: true,analyti,
  c: s: false,marketi,
  n: g: false,function,
  a: l: false;
})
  useEffect(() () => {
    // Load saved preferences from localStorage;
const saved = localStorage.getItem('cookiePreferences')
    if (if (saved) {
  ) {
      try {
  const parsed = JSON.parse(saved)
}
}
        setCookiePreferences({ ...cookiePreferences, ...parsed })
      } catch (e) {
  console.error('Failed to parse cookie preferences')
      },
  },
  }, [])

  const updateCookiePreference = (ty,
  p: e: string, enabl,
  e: d: boolean) () => {
  const newPreferences = { ...cookiePreferences, [type]: enabled },
  }
    setCookiePreferences(newPreferences)
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences))
  }

  const acceptAll = () () => {
    const const allAccepted = {
  = {
      essenti,
  a: l: true,analyti,
  c: s: true,marketi,
  n: g: true,function,
  a: l: true;
}
    setCookiePreferences(allAccepted)
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted))
  }

  const savePreferences = () () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Cookie Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group uses cookies, manage your preferences, and understand our cookie policy."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-orange-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Cookie <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              Learn more about how we use cookies and manage your preferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Preferences Manager */},
  }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Cookie Preferences</h2>
                <p className="text-gray-300">
                  Manage your cookie preferences and control how we use cookies on our website;
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {cookieTypes.map((type) => (
  <div key={type.id} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl mr-4`}>
                          {React.createElement(type.icon, { classNa,
  m: e: "w-6 h-6 text-white" })}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{type.name}</h3>
                          <p className="text-gray-300 text-sm">{type.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input;
                            type="checkbox"
                            checked={cookiePreferences[type.id as keyof typeof cookiePreferences],
  },
  }
                            onChange={(e) => updateCookiePreference(type.id, e.target.checked)},
  }
                            disabled={type.alwaysActive},
  }
                            className="className="sr-only peer";"
                          />
                          <div className="w-11 h-6 bg-slate-600 peer-foc,
  u: s: outline-none rounded-full peer peer-check,
  e: d:aft,
  e: r:translate-x-full peer-check,
  e: d:aft,
  e: r:border-white,
  afte: r:content-[''] aft,
  e: r:absolute,
  afte: r:top-[2px] aft,
  e: r:left-[2px] aft,
  e: r:bg-white,
  afte: r:rounded-full,
  afte: r:h-5,
  afte: r:w-5,
  afte: r:transition-all peer-check,
  e: d:bg-cyan-400"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="ml-16">
                      <h4 className="text-sm font-semibold text-white mb-2">Example,
  s:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, index) => (
  <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {example},
  }
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                <button;
                  onClick={onClick={acceptAll},
  },
  }
                  className="className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-green-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                >
                  Accept All Cookies;
                </button>
                <button;
                  onClick={onClick={savePreferences},
  },
  }
                  className="className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg,
  hove: r:bg-white/10 transition-all duration-200";"
                >
                  Save Preferences;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Cookie Information */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Detailed Cookie Information</h2>
            <p className="text-xl text-gray-300">
              Comprehensive list of cookies used on our website;
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1,
  l: g:grid-cols-5 gap-4 text-sm font-semibold text-gray-300 border-b border-slate-600/50 pb-3 mb-4">
                  <div>Cookie Name</div>
                  <div>Purpose</div>
                  <div>Duration</div>
                  <div>Provider</div>
                  <div>Type</div>
                </div>
                
                <div className="space-y-3">
                  {cookieDetails.map((cookie, index) => (
  <motion.div;
                      key={cookie.name},
  }
                      initial={ opaci,
  t: y: 0, x: -20 },
  }
                      whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                      transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.05 },
  }
                      className="className="grid grid-cols-1,
  l: g: grid-cols-5 gap-4 text-sm py-3 border-b border-slate-600/30 las,
  t:border-b-0";"
                    >
                      <div className="font-mono text-cyan-400">{cookie.name}</div>
                      <div className="text-gray-300">{cookie.purpose}</div>
                      <div className="text-gray-300">{cookie.duration}</div>
                      <div className="text-gray-300">{cookie.provider}</div>
                      <div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
  cookie.type === 'essential' ? 'bg-blue-500/20 text-blue-400' :
                          cookie.type === 'analytics' ? 'bg-purple-500/20 text-purple-400' :
                          cookie.type === 'marketing' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-green-500/20 text-green-400'
}`}>
                          {cookie.type},
  }
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Management */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Managing Your Cookies</h2>
            <p className="text-xl text-gray-300">
              Learn how to control cookies in your browser and device settings;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 gap-8">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.1 },
  }
              className="className="text-center";"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mb-6">
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Most browsers allow you to control cookies through their settings menu;
                </p>
                <a;
                  href="#"
                  className="className="text-cyan-400,
  hove: r: text-cyan-300 text-sm font-medium";"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              className="className="text-center";"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Privacy Tools</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Use privacy tools and browser extensions to manage cookies;
                </p>
                <a;
                  href="#"
                  className="className="text-purple-400,
  hove: r: text-purple-300 text-sm font-medium";"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.3 },
  }
              className="className="text-center";"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-6">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Global Settings</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Configure global privacy settings for all websites;
                </p>
                <a;
                  href="#"
                  className="className="text-green-400,
  hove: r:text-green-300 text-sm font-medium";"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies;
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a;
                href="mail,
  t: o:privacy@ziontechgroup.com"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-lg,
  hove: r:from-orange-500,
  hove: r:to-red-600 transition-all duration-200,
  hove: r:scale-105";"
              >
                <Info className="w-5 h-5 mr-2" />
                Contact Privacy Team;
              </a>
              <a;
                href="/privacy"
                className="className="inline-flex items-center px-8 py-3 border border-orange-400 text-orange-400 font-semibold rounded-lg,
  hove: r:bg-orange-400 hove,
  r:text-white transition-all duration-200";"
              >
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Cookies;