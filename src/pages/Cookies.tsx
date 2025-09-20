import React, { useStateuseEffect } from "react";
import { motion } from "framer-motion";
import { ;
  Cookie,;
  CheckCircle,;
  Settings,;
  Eye,;
  Globe,;
  Info,;
  Shield,;
  ClockTargetExternalLink;
} from "lucide-react";
import { SEO } from "../components/SEO";
interface CookieType {
  id: string,name: string,description: string,color: string,icon: React.ComponentType<any>example,;
    s: string[]alwaysActiv,;
  e: boolean;
};
;
interface CookieDetail {
  name: string,purpose: string,duration: string,provider: string,type: 'essential' | 'analytics' | 'marketing' | 'functional';
;
const cookieType,;
    s: CookieType[] = [;
  {
    i,;
  d: 'essential',name: 'Essential Cookies',description: 'Required, for, basic website functionality',color: 'from-blue-50o0/20 to-cyan-50o0/20',icon: Shieldexample,;
    s: ['AuthenticationSecurity''Basic, navigation']alwaysActiv,;
  e: true;
  };
  {
    id: 'analytics',name: 'Analytics Cookies',description: 'Help, us, understand how, visitors, use our website',color: 'from-purple-50o0/20 to-pink-50o0/20',icon: Globe,examples: ['Page, viewsUser, behavior''Performance, metrics']alwaysActiv,;
  e: false;
  };
  {
    id: 'marketing',name: 'Marketing Cookies',description: 'Used, to, deliver personalized advertisements',color: 'from-orange-50o0/20 to-red-50o0/20',icon: Target,examples: ['Ad, targetingCampaign, tracking''Conversion, analysis']alwaysActiv,;
  e: false;
  };
  {
    id: 'functional',name: 'Functional Cookies',description: 'Enable, enhanced, functionality and personalization',color: 'from-green-50o0/20 to-emerald-50o0/20',icon: Settings,examples: ['Language, preferencesCustom, settings''Enhanced, features']alwaysActiv,;
  e: false;
  };
];
const cookieDetails: CookieDetail[] = [;
  {
    nam,;
  e: 'session_id',purpose: 'Maintains, user, session',duration: 'Session'provide,;
    r: 'Zion, Tech, Group'typ,;
  e: 'essential';
  };
  {
    name: 'analytics_id',purpose: 'Tracks, user, behavior',duration: '2 years'provide,;
    r: 'Google Analytics'typ,;
  e: 'analytics';
  };
  {
    name: 'marketing_id',purpose: 'Personalized advertising',duration: '1 year'provide,;
    r: 'Facebook Pixel'typ,;
  e: 'marketing';
  },;
  {
    name: 'preferences',purpose: 'User preferences'duration: '1 year'provide,;
    r: 'Zion, Tech, Group'typ,;
  e: 'functional';
 , };
];
const Cookies: React.FC = () => {
  const [cookiePreferencessetCookiePreferences] = useState({
    essential: trueanalytics: falsemarketin,;
    g: falsefunctiona,;
  l: false;
  });
  useEffect(() => {
    // Load, saved, preferences from localStorage;
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCookiePreferences({ ...cookiePreferences...parsed });
      } catch() {
        console.error('Failed, to, parse cookie preferences');
      };
    }
  }, []),;
  const updateCookiePreference = (type: string, enabled: boolean) => {;
    const newPreferences = { ...cookiePreferences[type]: enabled },;
    setCookiePreferences(newPreferences);
    localStorage.setItem('cookiePreferences'JSON.stringify(newPreferences)),;
  },;
  const acceptAll = () => {
    const allAccepted = {
      essential: true,analytics: truemarketin,;
    g: truefunctiona,;
  l: true;
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences'JSON.stringify(allAccepted)),;
  },;
  const savePreferences = () => {
    localStorage.setItem('cookiePreferences'JSON.stringify(cookiePreferences)) },;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Cookie Policy - Zion, Tech, Group";
        description="Learn, about, how Zion, Tech, Group uses cookies, manage, your, preferencesand understand, our, cookie policy.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50o0/10 via-red-50o0/10 to-pink-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-50o0/20 to-red-50o0/20 rounded-2xl mb-6">;
              <Cookie className="w-10 h-10 text-orange-40o0" />;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Cookie <span className="bg-gradient-to-r from-orange-40o0 via-red-50o0 to-pink-60o0 bg-clip-text text-transparent">Policy</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              We, use, cookies to, enhance, your browsing experience, analyze, site, trafficand personalize content.;
              Learn, more, about how, we, use cookies, and, manage your preferences.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Cookie, Preferences, Manager */}
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto";
          >;
            <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl p-8, border, border-slate-60o0/50">;
              <div className="text-center mb-8">;
                <h2 className="text-3xl font-bold text-white mb-4">Cookie Preferences</h2>;
                <p className="text-gray-30o0">;
                  Manage, your, cookie preferences, and, control how, we, use cookies, on, our website;
                </p>;
              </div>;
              <div className="space-y-6 mb-8">;
                {cookieTypes.map((type) => (;
                  <div key={type.id} className="bg-slate-70o0/30 rounded-xl p-6, border, border-slate-60o0/50">;
                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center">;
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl mr-4`}>;
                          {React.createElement(type.icon{ className: "w-6 h-6 text-white" })}
                        </div>;
                        <div>;
                          <h3 className="text-lg font-bold text-white">{type.name}</h3>;
                          <p className="text-gray-30o0 text-sm">{type.description}</p>;
                        </div>;
                      </div>;
                      <div className="flex items-center">;
                        <label className="relative inline-flex items-center cursor-pointer">;
                          <input;
                            type="checkbox";
                            checked={cookiePreferences[type.id, as, keyof typeof, cookiePreferences]}
                            onChange={(e) => updateCookiePreference(type.ide.target.checked)}
                            disabled={type.alwaysActive}
                            className="sr-only peer";
                          />;
                          <div className="w-11 h-6 bg-slate-60o0 peer-focus: outline-none rounded-full, peer, peer-checked: after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checke,;
    d:bg-cyan-40o0"></div>;
                        </label>;
                      </div>;
                    </div>;
                    <div className="ml-16">;
                      <h4 className="text-sm font-semibold text-white mb-2">Example,;
  s:</h4>;
                      <ul className="space-y-1">;
                        {type.examples.map((exampleindex) => (;
                          <li key={index} className="flex items-center text-gray-30o0 text-sm">;
                            <CheckCircle className="w-4 h-4 text-cyan-40o0 mr-2 flex-shrink-0" />;
                            {example}
                          </li>;
                        ))}
                      </ul>;
                    </div>;
                  </div>;
                ))}
              </div>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button;
                  onClick={acceptAll}
                  className="px-8 py-3 bg-gradient-to-r from-green-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-green-50o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0 hove,;
  r:scale-10o5";
                >;
                  Accept, All, Cookies;
                </button>;
                <button;
                  onClick={savePreferences}
                  className="px-8 py-3, border, border-white/20 text-white font-semibold rounded-lg hover: bg-white/10 transition-all duration-20o0";
                >;
                  Save Preferences;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Detailed, Cookie, Information */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Detailed, Cookie, Information</h2>;
            <p className="text-xl text-gray-30o0">;
              Comprehensive, list, of cookies, used, on our website;
            </p>;
          </motion.div>;
          <div className="max-w-4xl mx-auto">;
            <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 overflow-hidden">;
              <div className="p-6">;
                <div className="grid grid-cols-1 lg: grid-cols-5 gap-4 text-sm font-semibold text-gray-30o0 border-b border-slate-60o0/50 pb-3 mb-4">;
                  <div>Cookie Name</div>;
                  <div>Purpose</div>;
                  <div>Duration</div>;
                  <div>Provider</div>;
                  <div>Type</div>;
                </div>;
                <div className="space-y-3">;
                  {cookieDetails.map((cookieindex) => (;
                    <motion.div;
                      key={cookie.name}
                      initial={{ opacity: 0,;
  x: -20 }};
                      whileInView={{ opacity: 1,;
  x: 0 }}
                      transition={{ duration: 0.8dela,;
  y: index * 0.0o5 }}
                      className="grid grid-cols-1 lg: grid-cols-5 gap-4 text-sm py-3 border-b border-slate-60o0/30 las,;
  t:border-b-0";
                    >;
                      <div className="font-mono text-cyan-40o0">{cookie.name}</div>;
                      <div className="text-gray-30o0">{cookie.purpose}</div>;
                      <div className="text-gray-30o0">{cookie.duration}</div>;
                      <div className="text-gray-30o0">{cookie.provider}</div>;
                      <div>;
                        <span className={`px-2 py-1, rounded, text-xs font-medium ${
                          cookie.type === 'essential' ? 'bg-blue-50o0/20 text-blue-40o0' :;
                          cookie.type === 'analytics' ? 'bg-purple-50o0/20 text-purple-40o0' :;
                          cookie.type === 'marketing' ? 'bg-orange-50o0/20 text-orange-40o0' :;
                          'bg-green-50o0/20 text-green-40o0';
                        }`}>;
                          {cookie.type}
                        </span>;
                      </div>;
                    </motion.div>;
                  ))}
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Cookie Management */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Managing, Your, Cookies</h2>;
            <p className="text-xl text-gray-30o0">;
              Learn, how, to control, cookies, in your, browser, and device settings;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.1 }}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-50o0/20 to-cyan-50o0/20 rounded-xl mb-6">;
                  <Settings className="w-8 h-8 text-blue-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-4">Browser Settings</h3>;
                <p className="text-gray-30o0 text-sm mb-4">;
                  Most, browsers, allow you, to, control cookies, through, their settings menu;
                </p>;
                <a;
                  href="#";
                  className="text-cyan-40o0 hover: text-cyan-30o0 text-sm font-medium";
                >;
                  Learn More →;
                </a>;
              </div>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-xl mb-6">;
                  <Eye className="w-8 h-8 text-purple-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-4">Privacy Tools</h3>;
                <p className="text-gray-30o0 text-sm mb-4">;
                  Use, privacy, tools and, browser, extensions to, manage, cookies;
                </p>;
                <a;
                  href="#";
                  className="text-purple-40o0 hover: text-purple-30o0 text-sm font-medium";
                >;
                  Learn More →;
                </a>;
              </div>;
            </motion.div>;
;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.3 }}
              className="text-center";
            >;
              <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50">;
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 rounded-xl mb-6">;
                  <Globe className="w-8 h-8 text-green-40o0" />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-4">Global Settings</h3>;
                <p className="text-gray-30o0 text-sm mb-4">;
                  Configure, global, privacy settings, for, all websites;
                </p>;
                <a;
                  href="#";
                  className="text-green-40o0 hover: text-green-30o0 text-sm font-medium";
                >;
                  Learn More →;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Questions, About, Cookies?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              If, you, have any, questions, about our, cookie, policy or, how, we use cookies;
              please don't, hesitate, to contact us.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="mailto: privacy@ziontechgroup.com";
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-40o0 to-red-50o0 text-white font-semibold rounded-lg hover:from-orange-50o0 hover:to-red-60o0 transition-all duration-20o0 hove,;
    r:scale-10o5";
              >;
                <Info className="w-5 h-5 mr-2" />;
                Contact, Privacy, Team;
              </a>;
              <a;
                href="/privacy";
                className="inline-flex items-center px-8 py-3, border, border-orange-40o0 text-orange-40o0 font-semibold rounded-lg hover: bg-orange-40o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                <Shield className="w-5 h-5 mr-2" />;
                Privacy Policy;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
export, default, Cookies;
;