import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ;
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
  ChevronDown,
  ChevronUp;
} from 'lucide-react';
const Cookies: React.FC = () => {;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">;
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto">;
          <div className="text-center mb-16">;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Cookie;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">;
                {" "}Policy;
              </span>;
            </h1>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Understanding how we use cookies to enhance your browsing experience;
            </p>;
          </div>;
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">;
            Cookie{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Policy;
            </span>;
          </h1>;
          <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">;
            Learn how we use cookies and similar technologies to enhance your browsing experience,
            improve our services, and provide personalized content.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">;
              Manage Cookies;
            </button>;
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
              Learn More;
            </button>          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">;
            <div>;
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>;
              <p className="text-gray-300 mb-4">;
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to improve our website based on how you use it.;
              </p>;
            </div>;

            <div>;
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>;
              <p className="text-gray-300 mb-4">;
                We use cookies for several purposes:;
              </p>;
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">;
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>;
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>;
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>;
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>;
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant content and advertisements</li>;
              </ul>;
            </div>;

            <div>;
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>;
              <div className="space-y-4">;
                <div className="bg-white/10 rounded-lg p-4">;
                  <h3 className="text-lg font-semibold mb-2">Session Cookies</h3>;
                  <p className="text-gray-300 text-sm">;
                    Temporary cookies that are deleted when you close your browser. They help maintain your session and remember your preferences during your visit.;
                  </p>;
                </div>;
                <div className="bg-white/10 rounded-lg p-4">;
                  <h3 className="text-lg font-semibold mb-2">Persistent Cookies</h3>;
                  <p className="text-gray-300 text-sm">;
                    Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences across multiple visits.;
                  </p>;
                </div>;
                <div className="bg-white/10 rounded-lg p-4">;
                  <h3 className="text-lg font-semibold mb-2">Third-Party Cookies</h3>;
                  <p className="text-gray-300 text-sm">;
                    Cookies set by third-party services we use, such as analytics tools, social media plugins, and advertising networks.;
                  </p>;
                </div>;
              </div>;
            </div>;

            <div>;
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>;
              <p className="text-gray-300 mb-4">;
                You can control and manage cookies in several ways:;
              </p>;
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">;
                <li>Adjust your browser settings to block or delete cookies</li>;
                <li>Use browser extensions to manage cookie preferences</li>;
                <li>Opt-out of specific types of cookies through our cookie consent banner</li>;
                <li>Contact us to request changes to your cookie preferences</li>;
              </ul>;
            </div>;

            <div>;
              <h2 className="text-2xl font-bold mb-4">Cookie Consent</h2>;
              <p className="text-gray-300 mb-4">;
                When you first visit our website, you'll see a cookie consent banner. By clicking "Accept" or continuing to use our website, you consent to our use of cookies as described in this policy.;
              </p>;
            </div>;

            <div>;
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>;
              <p className="text-gray-300 mb-4">;
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.;
              </p>;
            </div>;

            <div>;
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>;
              <p className="text-gray-300 mb-4">;
                If you have questions about our use of cookies or this Cookie Policy, please contact us:;
              </p>;
              <div className="bg-white/20 rounded-lg p-4">;
                <p className="text-gray-300">;
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />;
                  <strong>Phone:</strong> +1 (302) 464-0950<br />;
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709;
const Cookies: React.FC = () => {}  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">;
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center">;
            <div className="flex justify-center mb-6">;
              <div className="p-3 bg-orange-600/20 rounded-full">;
                <CakeIcon className="h-12 w-12 text-orange-400"/>              </div>;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">;
              Cookie Policy;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Learn how Zion Tech Group uses cookies and similar technologies to enhance your browsing ;
              experience and improve our services.;
            </p>;
            <p className="text-sm text-gray-400">;
              Last updated: {new Date().toLocaleDateString()}
            </p>;
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-4xl mx-auto">;
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">;
            What Are Cookies?;
          </h2>;
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">;
            <p className="text-lg text-gray-300 mb-6">;
              Cookies are small text files that are stored on your device when you visit our website. ;
              They help us provide you with a better experience by remembering your preferences,
              analyzing how you use our site, and personalizing content.;
            </p>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <div className="text-center">;
                <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                  <CakeIcon className="h-8 w-8 text-orange-400"/>;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Small Text Files</h3>;
                <p className="text-gray-300 text-sm">;
                  Stored on your device to remember your preferences;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">;
                  <Cog6ToothIcon className="h-8 w-8 text-blue-400"/>;
                </div>;
                <h3 className="text-lg font-semibold mb-2">Enhanced Experience</h3>;
                <p className="text-gray-300 text-sm">;
                  Personalize content and improve functionality;
                </p>;
import {SEO} from "@/components/SEO";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
export default function Cookies() {}
  return (;
    <div className="min-h-screen bg-zion-blue">;
      <SEO title="Cookie Policy | Zion Tech Group" description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content." keywords="cookie policy, privacy, data collection, website cookies" canonical="https://ziontechgroup.com/cookies"/>;
      <Header />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
  ];
  return (";
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;";
      <div className = "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* comment */}

        <motion.div;";
          initial = "{{" opacity: 0, y: 20 }}";
          animate="{{" opacity: 1, y: 0 }}">;
          className="text-center mb-12">;";
          <div className="flex items-center justify-center mb-4">;";
            <Cookie className="h-8 w-8 text-blue-600 mr-3"  />;";
            <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>;
          </div>;";
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            Learn about how we use cookies to enhance your experience on our website.;
          </p>;";
          <p className="text-sm text-gray-500 mt-4">;
            Last updated: {new Date().toLocaleDateString()}

              <motion.div;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">;
                  <BarChart3 className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">Analytics</h3>;
                <p className="text-zion-slate-light">;
                  Cookies help us understand how our website is used and identify areas for improvement.;
                </p>;
              </motion.div>;
            </div>;
          </div>;
        </div>;
      </section>;
  return (";
    <div: className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">",",";
      <div: className="max-w-4xl mx-auto px-4 sm: px-6: lg:px-8: py-16">"," {/* comment */}

          <div className="max-w-6xl mx-auto space-y-6">;
            {cookieCategories.map((category, index) => (;
              <motion.div;
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300">;
                <div className="p-6">;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="flex items-center gap-4">;
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>;
                        <category.icon className="w-6 h-6 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>;
                        <p className="text-zion-slate-light">{category.description}</p>;
                      </div>                    </div>;

                    <div className="border-l-4 border-zion-purple pl-4">;
                      <h3 className="text-xl font-medium text-white mb-2">Analytics Cookies</h3>;
                      <p className="text-zion-slate-light">;
                        Help us understand how visitors interact with our website by collecting and reporting ;
                        information anonymously. This helps us improve our services.;
                      </p>;
                    </div>;

                    <div className="border-l-4 border-zion-purple-light pl-4">;
                      <h3 className="text-xl font-medium text-white mb-2">Preference Cookies</h3>;
                      <p className="text-zion-slate-light">;
                        Allow our website to remember information that changes the way it behaves or looks,
                        such as your preferred language or region.;
                      </p>;
                    </div>;

                    <div className="border-l-4 border-zion-cyan pl-4">;
                      <h3 className="text-xl font-medium text-white mb-2">Marketing Cookies</h3>;
                      <p className="text-zion-slate-light">;
                        Used to track visitors across websites to display relevant and engaging advertisements.;
                      </p>;
                    </div>;
                  </div>;
                </section>;

                <section>;
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>;
                  <p className="text-zion-slate-light leading-relaxed">;
                    Some cookies on our website are set by third-party services that we use to enhance ;
                    functionality, such as analytics providers, advertising networks, and social media platforms. ;
                    These third parties have their own privacy policies and cookie policies.;
                  </p>;
                </section>;

                <section>;
                  <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>;
                  <p className="text-zion-slate-light mb-4">;
                    You can control and manage cookies in several ways:;
                  </p>;
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">;
                    <li>Use your browser settings to delete or block cookies</li>;
                    <li>Set your browser to ask for permission before setting cookies</li>;
                    <li>Use our cookie consent manager (if available)</li>;
                    <li>Contact us to update your preferences</li>;
                  </ul>;
                </section>;

                <section>;
                  <h2 className="text-2xl font-semibold text-white mb-4">Browser Settings</h2>;
                  <p className="text-zion-slate-light leading-relaxed">;
                    Most web browsers allow you to manage cookies through their settings. You can usually find ;
                    these settings in the "Options" or "Preferences" menu of your browser. Please note that ;
                    disabling certain cookies may affect the functionality of our website.;
                  </p>;
                </section>;

                <section>;
                  <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>;
                  <p className="text-zion-slate-light leading-relaxed">;
                    We may update this Cookie Policy from time to time to reflect changes in our practices ;
                    or for other operational, legal, or regulatory reasons. We will notify you of any material ;
                    changes by posting the new policy on this page.;
                  </p>;
                </section>;

                <section>;
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>;
                  <p className="text-zion-slate-light leading-relaxed">;
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:;
                  </p>;
                  <div className="mt-4 p-4 bg-zion-blue-light rounded-lg">;
                    <p className="text-zion-slate-light">;
                      <strong>Email:</strong> privacy@ziontechgroup.com<br />;
                      <strong>Address:</strong> Zion Tech Group, San Francisco, CA<br />;
                      <strong>Phone:</strong> +1 (555) 123-4567;
                    </p>;
                  </div>;
                </section>;
              </div>;
            </div>;
          </div>;
        </div>;

      {/* Types of Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">;
            Types of Cookies We Use;
          </h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">;
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">;
                <ShieldCheckIcon className="h-8 w-8 text-green-400" />;
              </div>;
      {/* Types of Cookies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">;
            Types of Cookies We Use;
          </h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">;
              <div className="p-3 bg-green-600/20 rounded-lg w-fit mb-4">;
                <ShieldCheckIcon className="h-8 w-8 text-green-400"/>;
              </div>              </div>;
              <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>;
              <p className="text-gray-300 mb-4">;
                These cookies enable enhanced functionality and personalization.;
              </p>;
              <ul className="text-sm text-gray-400 space-y-1">;
                <li>• Language preferences</li>;
                <li>• User settings</li>;
                <li>• Form data</li>;
              </ul>;
            </div>;

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">;
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4">;
                                 <CakeIcon className="h-8 w-8 text-purple-400"/>              </div>;
              <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>;
              <p className="text-gray-300 mb-4">;
                These cookies help us understand how visitors use our website.;
              </p>;
              <ul className="text-sm text-gray-400 space-y-1">;
                <li>• Page views</li>;
                <li>• User behavior</li>;
                <li>• Performance metrics</li>;
              </ul>;
            </div>;

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">;
              <div className="p-3 bg-orange-600/20 rounded-lg w-fit mb-4">;
                <ShieldCheckIcon className="h-8 w-8 text-orange-400"/>              </div>;
              <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>;
              <p className="text-gray-300 mb-4">;
                These cookies are used to deliver relevant advertisements and track marketing campaigns.;
              </p>;
              <ul className="text-sm text-gray-400 space-y-1">;
                <li>• Ad targeting</li>;
                <li>• Campaign tracking</li>;
                <li>• Social media integration</li>;
              </ul>;
            </div>;

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">;
              <div className="p-3 bg-cyan-600/20 rounded-lg w-fit mb-4">;
                                 <Cog6ToothIcon className="h-8 w-8 text-cyan-400"/>              </div>;
              <h3 className="text-xl font-semibold mb-3">Third-Party Cookies</h3>;
              <p className="text-gray-300 mb-4">;
                These cookies are set by third-party services we integrate with.;
              </p>;
              <ul className="text-sm text-gray-400 space-y-1">;
                <li>• Social media</li>;
                <li>• Analytics tools</li>;
                <li>• Payment processors</li>;
              </ul>;
            </div>;

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">;
              <div className="p-3 bg-pink-600/20 rounded-lg w-fit mb-4">;
                                 <CakeIcon className="h-8 w-8 text-pink-400"/>              </div>;
              <h3 className="text-xl font-semibold mb-3">Session Cookies</h3>;
              <p className="text-gray-300 mb-4">;
                These cookies are temporary and are deleted when you close your browser.;
              </p>;
              <ul className="text-sm text-gray-400 space-y-1">;
                <li>• Shopping cart</li>;
                <li>• Login sessions</li>;
                <li>• Temporary preferences</li>;
              </ul>;
              to="/contact";
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg">;
              Contact Us;
            </Link>;
            <Link;
              to="/privacy";
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">;
              View Privacy Policy;
            </Link>;
          </div>;
        </div>;
      </section>;
    </></div>;
  );
};
export default Cookies;
      </main>;
      <Footer />;
    </div>;
  );
}
import {SEO} from '@/components/SEO';
import {GradientHeading} from '@/components/GradientHeading';
export default function Cookies() {}
  return (;
    <>;
      <SEO title="Cookie Policy - Zion Tech Group" description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience." keywords="cookie policy, cookies, tracking, Zion Tech Group, privacy" canonical="https://ziontechgroup.com/cookies"/>      ;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <GradientHeading>Cookie Policy</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>;
          </div>;
          <div className="max-w-4xl mx-auto space-y-8">;
            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>;
              <p className="text-zion-slate-light mb-4">;
                Cookies are small text files that are placed on your device when you visit our website. ;
                They help us provide you with a better experience by remembering your preferences,
                analyzing how you use our site, and personalizing content.;
              </p>;
              <p className="text-zion-slate-light">;
                Cookies can be either "session cookies" (which are deleted when you close your browser) ;
                or "persistent cookies" (which remain on your device for a set period of time).;
              </p>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>;
              <p className="text-zion-slate-light mb-4">;
                Zion Tech Group uses cookies for the following purposes:;
              </p>;
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">;
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>;
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>;
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>;
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>;
                <li><strong>Analytics Cookies:</strong> Help us analyze website traffic and usage patterns</li>;
              </ul>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>;
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.1 Essential Cookies</h3>;
              <p className="text-zion-slate-light mb-4">;
                These cookies are necessary for the website to function and cannot be switched off. ;
                They include cookies that enable basic functions like page navigation, access to secure areas,
                and form submissions.;
              </p>;
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.2 Performance Cookies</h3>;
              <p className="text-zion-slate-light mb-4">;
                These cookies allow us to count visits and traffic sources so we can measure and improve ;
                the performance of our site. They help us know which pages are popular and which are not.;
              </p>;
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.3 Functional Cookies</h3>;
              <p className="text-zion-slate-light mb-4">;
                These cookies enable the website to provide enhanced functionality and personalization. ;
                They may be set by us or by third-party providers whose services we have added to our pages.;
              </p>;
              <h3 className="text-xl font-semibold text-zion-cyan mb-3">3.4 Marketing Cookies</h3>;
              <p className="text-zion-slate-light mb-4">;
                These cookies may be set through our site by our advertising partners. They may be used ;
                by these companies to build a profile of your interests and show you relevant advertisements.;
              </p>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>;
              <p className="text-zion-slate-light mb-4">;
                Our website may use third-party services that place cookies on your device. These services include:;
              </p>;
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">;
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>;
                <li><strong>Stripe:</strong> For payment processing and security</li>;
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>;
                <li><strong>Advertising Networks:</strong> For relevant advertising content</li>;
              </ul>;
              <p className="text-zion-slate-light">;
                These third-party services have their own privacy policies and cookie practices. ;
                We encourage you to review their policies for more information.;
              </p>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Your Cookie Preferences</h2>;
              <p className="text-zion-slate-light mb-4">;
                You have several options for managing cookies:;
              </p>;
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">;
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings</li>;
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>;
                <li><strong>Third-Party Opt-Out:</strong> Opt out of specific third-party services</li>;
                <li><strong>Delete Cookies:</strong> Remove existing cookies from your device</li>;
              </ul>;
              <p className="text-zion-slate-light">;
                Please note that disabling certain cookies may affect the functionality of our website.;
              </p>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Duration</h2>;
              <p className="text-zion-slate-light mb-4">;
                The duration for which cookies are stored on your device depends on their type:;
              </p>;
              <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">;
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>;
                <li><strong>Persistent Cookies:</strong> Remain on your device for a specified period (usually 30 days to 2 years)</li>;
                <li><strong>Essential Cookies:</strong> May persist for longer periods to maintain functionality</li>;
              </ul>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>;
              <p className="text-zion-slate-light mb-4">;
                We may update this Cookie Policy from time to time to reflect changes in our practices ;
                or for other operational, legal, or regulatory reasons. We will notify you of any ;
                material changes by posting the updated policy on our website.;
              </p>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>;
              <p className="text-zion-slate-light mb-4">;
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:;
              </p>;
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;
                <p className="text-zion-slate-light mb-2">;
                  <strong>Email:</strong> privacy@ziontechgroup.com;
                </p>;
                <p className="text-zion-slate-light mb-2">;
                  <strong>Subject Line:</strong> Cookie Policy Inquiry;
                </p>;
                <p className="text-zion-slate-light">;
                  <strong>Address:</strong> Zion Tech Group, Privacy Team;
                </p>;
              </div>;
            </section>;

            <section>;
              <h2 className="text-2xl font-bold text-white mb-4">9. Additional Resources</h2>;
              <p className="text-zion-slate-light mb-4">;
                For more information about cookies and how to manage them, you may visit:;
              </p>;
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">;
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">All About Cookies</a> - Comprehensive information about cookies</li>;
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">Your Online Choices</a> - European Interactive Digital Advertising Alliance</li>;
                <li><a href="https://www.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">Network Advertising Initiative</a> - Digital advertising self-regulation</li>;
              </ul>;
            </section>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
    </></></></></></></></></></></>);
};        <motion.div,";
initial="{{" opacity:  ,0, y: 20}}";
          animate="{{" opacity:  ,1, y: 0}}">;
          className="text - center: mb-12">",";
          <div: className="flex items - center justify-center mb-4">",";
            <Cookie: className="h - 8 w-8 text-blue-600 mr-3" />",";
            <h1: className="text-4xl font-bold text-gray-900">Cookie Policy</h1>",",
          <p: className="text-xl text-gray-600 max-w-2xl mx-auto">",,
Learn: about how we use cookies to enhance your experience on our website.",
          <p className = "text-sm text-gray-500 mt-4">",",
            Last: updated: {new: Date().toLocaleDateString()}";
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">";
      <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        {/* comment */}";
          className="&apos;text-center" mb-12&apos;>&apos,";
          <div className="&apos;flex" items-center justify-center mb-4&apos;>&apos,";
            <Cookie className="&apos;h-8" w-8 text-blue-600 mr-3&apos;       />&apos;";
            <h1 className="&apos;text-4xl" font-bold text-gray-900&apos;>Cookie Policy&apos;</h1>";
          <p className="&apos;text-xl" text-gray-600 max-w-2xl mx-auto&apos;>;
            Learn about how we use cookies to enhance your experience on our website.&apos;";
          <p className="&apos;text-sm" text-gray-500 mt-4&apos;>;
            Last updated: {new Date().toLocaleDateString()}&apos;
        </motion.div>;
        {/* comment */}";
          transition = "{{" delay: 0.1}}";
          className="bg - white: rounded-lg shadow-sm border border-gray-200 p-8 mb-8">",";
          <h2: className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>",";
          <p: className="text-gray-600 leading-relaxed mb-4">",
            Cookies: are small text files that are stored on your device when you visit our website.,
            They: help us provide you with a better experience by remembering your preferences and,
understanding: how you use our site.",
          <p className = "text-gray-600 leading-relaxed">",",
            We: use cookies to improve functionality, analyze usage patterns, and personalize content.;
            You: can control cookie settings through your browser, but some features may not work;
            properly: if cookies are disabled.",
          transition = "{{" delay: 0.1   }}";
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>";
          <p className="text-gray-600 leading-relaxed mb-4">;
            Cookies are small text files that are stored on your device when you visit our website.;
            They help us provide you with a better experience by remembering your preferences and,
understanding how you use our site.";
          <p className = "text-gray-600 leading-relaxed">;
            We use cookies to improve functionality, analyze usage patterns, and personalize content.;
            You can control cookie settings through your browser, but some features may not work,
properly if cookies are disabled.";
          transition = "{{" delay: 0.1 }}";
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">;";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>;";
          <p className="text-gray-600 leading-relaxed mb-4">;
            They help us provide you with a better experience by remembering your preferences and;
            understanding how you use our site.;";
          <p className="text-gray-600 leading-relaxed">;";
          className="&apos;bg-white" rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos,";
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos;>What Are Cookies?&apos;</h2>";
          <p className="&apos;text-gray-600" leading-relaxed mb-4&apos;>;
            understanding how you use our site.&apos;";
          <p className="&apos;text-gray-600" leading-relaxed&apos;>;
            We use cookies to improve&apos; functionality, analyze usage patterns, and personalize content.;
            You can control cookie settings through your browser, but some features may not work;
            properly if cookies are disabled.;
        </motion.div> {/* comment */}";
        <div className="space - y-6">", {cookieTypes.map((cookie, index) => (";
            <motion.div: key = "{index}
              transition="{{" delay: 0.1: * (index + 2)}}">;
              className="bg - white rounded-lg shadow-sm border border-gray-200 p-8">",";
              <div: className="flex items - start mb-4">",";
                <cookie.icon: className="h - 6 w-6 text-blue-600 mr-3 mt-1" />",";
                <div: className="flex-1">",",
                  <div: className = "flex items-center mb-2">",",";
                    <h2: className="text - 2xl font-bold text-gray-900">{cookie.name}</h2>", {cookie.required: && (",
                      <span className = "ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">",",
                        Required: </span>",
                  <p className="text-gray-600 mb-4">{cookie.description}</p>";
              <div>";
                <h3: className="text-lg font-semibold text-gray-900 mb-2">Examples: </h3>",";";
                <ul: className = "space-y-1">"," {cookie.examples.map((example, exampleIndex) => (";
                    <li: key="{exampleIndex}" className="flex items - start">",";
                      <span: className = "text-blue-600 mr-2 mt-1">•</span>",",";
                      <span: className="text - gray-600">{example}</span>",";
        <div className="space-y-6"> {cookieTypes.map((cookie, index) => (;";
        <div className="&apos;space-y-6&apos;">;
          {cookieTypes.map((cookie, index) => (&apos}";
              key = "{index}
              transition="{{" delay: 0.1 * (index + 2)   }}";
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">";
              <div className="flex items-start mb-4">";
                <cookie.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />";
                <div className="flex-1">";
                  <div className="flex items-center mb-2">";
                    <h2 className="text-2xl font-bold text-gray-900">{cookie.name}</h2>;
                    {cookie.required && (";
                      <span className="ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">;
                        Required,";
transition="{{" delay: 0.1 * (index + 2) }}";
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">;";
              <div className="flex items-start mb-4">;";
                <cookie.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />;";
                <div className="flex-1">;";
                  <div className="flex items-center mb-2">;";
                    <h2 className="text-2xl font-bold text-gray-900">{cookie.name}</h2> {cookie.required && (;";
                      <span className="ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">;
                        Required;
                      </span>;";
                  <p className="text-gray-600 mb-4">{cookie.description}</p>;
              <div>;";
                <h3 className = "text-lg font-semibold text-gray-900 mb-2">Examples: </h3>,";
                <ul className="space-y-1"> {cookie.examples.map((example, exampleIndex) => (;";
                    <li key="{exampleIndex}" className="flex items-start">;";
                      <span className="text-blue-600 mr-2 mt-1">•</span>;";
                      <span className="text-gray-600">{example}</span>;
                    </li>;";
              className="&apos;bg-white" rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos,";
              <div className="&apos;flex" items-start mb-4&apos;>&apos,";
                <cookie.icon className="&apos;h-6" w-6 text-blue-600 mr-3 mt-1&apos; />&apos;";
                <div className="&apos;flex-1&apos;">&apos,";
                  <div className="&apos;flex" items-center mb-2&apos;>&apos,";
                    <h2 className="&apos;text-2xl" font-bold text-gray-900&apos;>{cookie.name}&apos;</h2>;
                    {cookie.required && (}";
                      <span className="&apos;ml-3" px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full&apos;>;
                        Required&apos;
                      </span>";
                  <p className="&apos;text-gray-600" mb-4&apos;>{cookie.description}&apos;</p>";
                <h3 className="&apos;text-lg" font-semibold text-gray-900 mb-2&apos;>Examples: &apos,</h3>",
                <ul className = "&apos,space-y-1&apos,">;
                  {cookie.examples.map((example, exampleIndex) => (&apos}";
                    <li key="{exampleIndex}" className="&apos;flex" items-start&apos;>&apos,";
                      <span className="&apos;text-blue-600" mr-2 mt-1&apos;>•&apos;</span>";
                      <span className="&apos;text-gray-600&apos;">{example}&apos;</span>";
                <h3 className = "text-lg font-semibold text-gray-900 mb-2">Examples: </h3>";
                <ul className="space-y-1">,
                  {cookie.examples.map((example, exampleIndex) => (";
                    <li key="{exampleIndex}" className="flex items-start">";
                      <span className="text-blue-600 mr-2 mt-1">•</span>";
                      <span className="text-gray-600">{example}</span>;
                    </li>;
                  ))}

                </ul>;
        {/* comment */}";
          transition = "{{" delay: 0.6}}";
          className="mt - 8: bg-white rounded-lg shadow-sm border border-gray-200 p-8">",";
          <h2: className="text - 2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>",";
          <div: className="space - y-4">",";
              <h3: className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>",",
              <p: className = "text-gray-600 mb-2">",",
                You: can control cookies through your browser settings. Most browsers allow you to: </p,>,";
              <ul: className="space - y-1 ml-4">",";
                <li: className="flex items - start">",";
                  <span: className="text - gray-600">Block all cookies</span>",";
                  <span: className="text - gray-600">Block third-party cookies only</span>",";
                  <span: className="text-gray-600">Delete existing cookies</span>",",
                  <span: className = "text-gray-600">Set preferences for specific websites</span>",",
        </div> {/* comment */}";
          transition="{{" delay: 0.6   }}";
          className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>";
          <div className="space-y-4">";
          transition="{{" delay: 0.6 }}";
          className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">;";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>;";
          <div className="space-y-4">;";
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browser Settings</h3>;";
              <p className="text-gray-600 mb-2">;
                You can control cookies through your browser settings. Most browsers allow you to: ;";
              <ul className="space-y-1 ml-4">;";
                <li className="flex items-start">;";
                  <span className="text-gray-600">Block all cookies</span>;";
                  <span className="text-gray-600">Block third-party cookies only</span>,";
                  <span className="text-gray-600">Delete existing cookies</span>,";
                  <span className="text-gray-600">Set preferences for specific websites</span>,",
              <h3 className = "text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>,";
              <p className="text-gray-600">,
                When you first visit our website, you"ll see a cookie consent banner. You can choose;
                which types of cookies to accept. You can change your preferences at any time by;
                clicking the cookie settings link in our footer.;";
          className="&apos;mt-8" bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos,";
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos;>Managing Your Cookie Preferences&apos;</h2>";
          <div className="&apos;space-y-4&apos;">&apos,";
              <h3 className="&apos;text-lg" font-semibold text-gray-900 mb-2&apos;>Browser Settings&apos;</h3>";
              <p className="&apos;text-gray-600" mb-2&apos;>;
                You can control cookies through your browser settings. Most browsers allow you to: &apos;";
              <ul className="&apos,space-y-1" ml-4&apos,>&apos,";
                <li className="&apos;flex" items-start&apos;>&apos,";
                  <span className="&apos;text-gray-600&apos;">Block all cookies&apos;</span>";
                  <span className="&apos;text-gray-600&apos;">Block third-party cookies only&apos;</span>";
                  <span className="&apos;text-gray-600&apos;">Delete existing cookies&apos;</span>";
                  <span className="&apos;text-gray-600&apos;">Set preferences for specific websites&apos;</span>;
              </ul>";
              <h3: className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>",",
              <p: className = "text-gray-600">",",
                When: you first visit our website, you"ll see a cookie consent banner. You can choose,
which: types of cookies to accept. You can change your preferences at any time by,
clicking: the cookie settings link in our footer.";
              <h3 className="&apos,text-lg" font-semibold text-gray-900 mb-2&apos,>Cookie Consent&apos,</h3>",
              <p className = "&apos,text-gray-600&apos,">;
                When you first visit our website, you&apos;ll see a cookie consent banner. You can choose;";
              <h3 className = "text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>";
              <p className="text-gray-600">;
                When you first visit our website, you"ll see a cookie consent banner. You can choose,
                which types of cookies to accept. You can change your preferences at any time by,
clicking the cookie settings link in our footer.";
                When you first visit our website, you&apos;ll see a cookie consent banner. You can choose,
                clicking the cookie settings link in our footer.&apos;
        {/* comment */}";
          transition = "{{" delay: 0.7}}";
          <h2: className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>",",
          <p: className = "text-gray-600 mb-4">",",
            We: may use third-party services that set their own cookies. These include: </p,>,";
          <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">",";";
              <h3: className="font - semibold text-gray-900 mb-2">Analytics</h3>",";
              <ul: className="space - y-1">",";
                <li: className="text - gray-600">Google Analytics</li>",";
                <li: className="text - gray-600">Hotjar</li>",";
                <li: className="text - gray-600">Mixpanel</li>",";
              <h3: className="font - semibold text-gray-900 mb-2">Marketing</h3>",";
                <li: className="text - gray-600">Google Ads</li>",";
                <li: className="text-gray-600">Facebook Pixel</li>",",
                <li: className = "text-gray-600">LinkedIn Insight</li>",",";
          transition="{{" delay: 0.7   }}";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>";
          <p className="text-gray-600 mb-4">;
            We may use third-party services that set their own cookies. These include: ",
          transition="{{" delay: 0.7 }}";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>;";
          <p className="text-gray-600 mb-4">;
            We may use third-party services that set their own cookies. These include: ;";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;";
              <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>;";
              <ul className="space-y-1">;";
                <li className="text-gray-600">Google Analytics</li>;";
                <li className="text-gray-600">Hotjar</li>;";
                <li className="text-gray-600">Mixpanel</li>;";
              <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>;";
                <li className="text-gray-600">Google Ads</li>;";
                <li className="text-gray-600">Facebook Pixel</li>;";
                <li className="text-gray-600">LinkedIn Insight</li>;";
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos;>Third-Party Cookies&apos,</h2>";
          <p className="&apos,text-gray-600" mb-4&apos,>,
            We may use third-party services that set their own cookies. These include:&apos,";
          <div className="&apos,grid" grid-cols-1 m,d: grid-cols-2 gap-4&apos,>&apos,";
              <h3 className="&apos;font-semibold" text-gray-900 mb-2&apos;>Analytics&apos;</h3>";
              <ul className="&apos;space-y-1&apos;">&apos,";
                <li className="&apos;text-gray-600&apos;">Google Analytics&apos;</li>";
                <li className="&apos;text-gray-600&apos;">Hotjar&apos;</li>";
                <li className="&apos;text-gray-600&apos;">Mixpanel&apos;</li>";
              <h3 className="&apos;font-semibold" text-gray-900 mb-2&apos;>Marketing&apos;</h3>";
                <li className="&apos;text-gray-600&apos;">Google Ads&apos;</li>";
                <li className="&apos;text-gray-600&apos;">Facebook Pixel&apos,</li>",
                <li className="&apos;text-gray-600&apos,">LinkedIn Insight&apos,</li>;
        {/* comment */}";
          transition = "{{" delay: 0.8}}";
          <h2: className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>",",
            If: you have any questions about our use of cookies, please contact us: </p,>,";
              <h3: className="font - semibold text-gray-900 mb-2">Email</h3>",";
              <p: className="text-gray-600">kleber@ziontechgroup.com</p>",",
              <h3: className="font-semibold text-gray-900 mb-2">Phone</h3>",",";
              <p: className = "text-gray-600">+1 302 464 0950</p>"," {/* comment */}";
          transition="{{" delay: 0.8   }}";
          transition="{{" delay: 0.8 }}";
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>;
            If you have any questions about our use of cookies, please contact us: ;";
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>;";
              <p className="text-gray-600">kleber@ziontechgroup.com</p>,";
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>,";
              <p className="text-gray-600">+1 302 464 0950</p>,",
          <h2 className="&apos;text-2xl" font-bold text-gray-900 mb-4&apos,>Questions About Cookies?&apos,</h2>;
            If you have any questions about our use of cookies, please contact us: &apos,";
          <h2 className = "text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>;
            If you have any questions about our use of cookies, please contact us: </p>";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">";
              <h3 className="&apos;font-semibold" text-gray-900 mb-2&apos;>Email&apos;</h3>";
              <p className="&apos;text-gray-600&apos;">kleber@ziontechgroup.com&apos;</p>";
              <h3 className="&apos,font-semibold" text-gray-900 mb-2&apos,>Phone&apos,</h3>",
              <p className="&apos;text-gray-600&apos;">+1 302 464 0950&apos,</p>;
export default Cookies,
export: default Cookies,"";";
}}}}}))))))))))))))))))))