<<<<<<< HEAD
import { motion } from &apos;framer-motion';
import { Cookie, Settings, Shield, Eye, BarChart3 } from &apos;lucide-react';&apos;&apos;

const Cookies: React.FC = () => {}
  const;const cookieTypes = [{
      name: &apos;Essential Cookies&apos;,
      icon: Shield,
      description: &apos;These cookies are necessary for the website to&apos;} function;function properly.&apos;,
      examples: [;
        &apos;Authentication and login status&apos;,
        &apos;Shopping cart&apos; functionality&apos;,
        &apos;Security and fraud prevention&apos;,
        &apos;Load balancing and performance';
      ],
      required: true},
    {
      name: &apos;Analytics Cookies&apos;,
      icon: BarChart3,
      description: &apos;These cookies help us understand how visitors interact with our website.&apos;,
      examples: [;
        &apos;Page views and user behavior&apos;,
        &apos;Traffic sources and referrals&apos;,
        &apos;Popular content and features&apos;,
        &apos;Performance metrics and errors';
      ],
      required: false},
    {
      name: &apos;Marketing Cookies&apos;,
      icon: Eye,
      description: &apos;These cookies are used to deliver relevant advertisements and track campaign performance.&apos;,
      examples: [;
        &apos;Ad targeting and personalization&apos;,
        &apos;Campaign effectiveness measurement&apos;,
        &apos;Social media integration&apos;,
        &apos;Retargeting and remarketing';
      ],
      required: false},
    {
      name: &apos;Preference Cookies&apos;,
      icon: Settings,
      description: &apos;These cookies remember your preferences and settings.&apos;,
      examples: [;
        &apos;Language and region settings&apos;,
        &apos;Theme and display preferences&apos;,
        &apos;Accessibility options&apos;,
        &apos;Customized content delivery';
      ],
      required: false}
  ]
  return(&apos;&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>
        {/* Header */}&apos;
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';""
import { Cookie, Settings, Shield, Eye, BarChart3 } from 'lucide-react';
""
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, BarChart3 } from 'lucide-react';

const Cookies: React.FC = () => {
  const cookieTypes = [{
      name: 'Essential Cookies', icon: Shield,
      description: 'These cookies are necessary for the website to function properly.', examples: [;
        'Authentication and login status', 'Shopping cart functionality',
        'Security and fraud prevention', 'Load balancing and performance';
      ], required: true},
    {
      name: 'Analytics Cookies', icon: BarChart3,
      description: 'These cookies help us understand how visitors interact with our website.', examples: [;
        'Page views and user behavior', 'Traffic sources and referrals',
        'Popular content and features', 'Performance metrics and errors';
      ], required: false},
    {
      name: 'Marketing Cookies', icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.', examples: [;
        'Ad targeting and personalization', 'Campaign effectiveness measurement',
        'Social media integration', 'Retargeting and remarketing';
      ], required: false},
    {
      name: 'Preference Cookies', icon: Settings,
      description: 'These cookies remember your preferences and settings.', examples: [;
        'Language and region settings', 'Theme and display preferences',
        'Accessibility options', 'Customized content delivery';
      ], required: false}
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        {/* Header */}
>>>>>>> main
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;'
          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;'
            <Cookie className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Cookie Policy&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Learn about how we use cookies to enhance your experience on our website.&apos;
          </p>
          <p className=&apos;text-sm text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos;
          </p>
        </motion.div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>What Are Cookies?&apos;</h2>
          <p className=&apos;text-gray-600 leading-relaxed mb-4&apos;>
            Cookies are small text files that are stored on your device when you visit our website.;
            They help us provide you with a better experience by remembering your preferences and;
            understanding how you use our site.&apos;
          </p>
          <p className=&apos;text-gray-600 leading-relaxed&apos;>
            We use cookies to improve&apos; functionality, analyze usage patterns, and personalize content.;
            You can control cookie settings through your browser, but some features may not work;
            properly if cookies are disabled.
          </p>
        </motion.div>
        {/* Cookie Types */}
        <div className=&apos;space-y-6&apos;>
          {cookieTypes.map((cookie, index) => (&apos;}
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
              className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
              <div className=&apos;flex items-start mb-4&apos;>&apos;'
                <cookie.icon className=&apos;h-6 w-6 text-blue-600 mr-3 mt-1&apos; />&apos;
                <div className=&apos;flex-1&apos;>&apos;'
                  <div className=&apos;flex items-center mb-2&apos;>&apos;'
                    <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>{cookie.name}&apos;</h2>
                    {cookie.required && (}
                      <span className=&apos;ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full&apos;>
                        Required&apos;
                      </span>
                    )}
                  </div>
                  <p className=&apos;text-gray-600 mb-4&apos;>{cookie.description}&apos;</p>
                </div>
              </div>
              <div>
<<<<<<< HEAD
                <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Examples:&apos;</h3>
                <ul className=&apos;space-y-1&apos;>
                  {cookie.examples.map((example, exampleIndex) => (&apos;}
                    <li key={exampleIndex} className=&apos;flex items-start&apos;>&apos;'
                      <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                      <span className=&apos;text-gray-600&apos;>{example}&apos;</span>
=======
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Examples: </h3>
                <ul className='space-y-1'>
                  {cookie.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className='flex items-start'>
                      <span className='text-blue-600 mr-2 mt-1'>•</span>
                      <span className='text-gray-600'>{example}</span>
>>>>>>> main
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Cookie Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Managing Your Cookie Preferences&apos;</h2>
          <div className=&apos;space-y-4&apos;>&apos;'
            <div>
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Browser Settings&apos;</h3>
              <p className=&apos;text-gray-600 mb-2&apos;>
                You can control cookies through your browser settings. Most browsers allow you to:&apos;
              </p>
              <ul className=&apos;space-y-1 ml-4&apos;>&apos;'
                <li className=&apos;flex items-start&apos;>&apos;'
                  <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                  <span className=&apos;text-gray-600&apos;>Block all cookies&apos;</span>
                </li>
                <li className=&apos;flex items-start&apos;>&apos;'
                  <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                  <span className=&apos;text-gray-600&apos;>Block third-party cookies only&apos;</span>
                </li>
                <li className=&apos;flex items-start&apos;>&apos;'
                  <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                  <span className=&apos;text-gray-600&apos;>Delete existing cookies&apos;</span>
                </li>
                <li className=&apos;flex items-start&apos;>&apos;'
                  <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                  <span className=&apos;text-gray-600&apos;>Set preferences for specific websites&apos;</span>
                </li>
              </ul>
            </div>
            <div>
<<<<<<< HEAD
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Cookie Consent&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                When you first visit our website, you&apos;ll see a cookie consent banner. You can choose;
=======
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Cookie Consent</h3>
              <p className='text-gray-600'>
                When you first visit our website, you&apos;ll see a cookie consent banner. You can choose;'
>>>>>>> main
                which types of cookies to accept. You can change your preferences at any time by;
                clicking the cookie settings link in our footer.&apos;
              </p>
            </div>
          </div>
        </motion.div>
        {/* Third-Party Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Third-Party Cookies&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            We may use third-party services that set their own cookies. These include:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Analytics&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;'
                <li className=&apos;text-gray-600&apos;>Google Analytics&apos;</li>
                <li className=&apos;text-gray-600&apos;>Hotjar&apos;</li>
                <li className=&apos;text-gray-600&apos;>Mixpanel&apos;</li>
              </ul>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Marketing&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;'
                <li className=&apos;text-gray-600&apos;>Google Ads&apos;</li>
                <li className=&apos;text-gray-600&apos;>Facebook Pixel&apos;</li>
                <li className=&apos;text-gray-600&apos;>LinkedIn Insight&apos;</li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
<<<<<<< HEAD
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Questions About Cookies?&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            If you have any questions about our use of cookies, please contact us:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
=======
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Questions About Cookies?</h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about our use of cookies, please contact us: </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
>>>>>>> main
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Email&apos;</h3>
              <p className=&apos;text-gray-600&apos;>kleber@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Phone&apos;</h3>
              <p className=&apos;text-gray-600&apos;>+1 302 464 0950&apos;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
;
export default Cookies
=======
import { motion } from 'framer-motion
import { Cookie, Settings, Shield, Eye, BarChart3 } from 'lucide-react
>>>>>>> main
>>>>>>> main
