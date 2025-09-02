import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, BarChart3 } from 'lucide-react';

const Cookies: React.FC = () => {
  const cookieTypes = [{
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      examples: [;
        'Authentication and login status',
        'Shopping cart functionality',
        'Security and fraud prevention',
        'Load balancing and performance';
      ],
      required: true},
    {
      name: 'Analytics Cookies',
      icon: BarChart3,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [;
        'Page views and user behavior',
        'Traffic sources and referrals',
        'Popular content and features',
        'Performance metrics and errors';
      ],
      required: false},
    {
      name: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and track campaign performance.',
      examples: [;
        'Ad targeting and personalization',
        'Campaign effectiveness measurement',
        'Social media integration',
        'Retargeting and remarketing';
      ],
      required: false},
    {
      name: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your preferences and settings.',
      examples: [;
        'Language and region settings',
        'Theme and display preferences',
        'Accessibility options',
        'Customized content delivery';
      ],
      required: false}
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Cookie className='h-8 w-8 text-blue-600 mr-3' />
            <h1 className='text-4xl font-bold text-gray-900'>Cookie Policy</h1>
          </div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Learn about how we use cookies to enhance your experience on our website.
          </p>
          <p className='text-sm text-gray-500 mt-4'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>What Are Cookies?</h2>
          <p className='text-gray-600 leading-relaxed mb-4'>
            Cookies are small text files that are stored on your device when you visit our website.;
            They help us provide you with a better experience by remembering your preferences and;
            understanding how you use our site.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            We use cookies to improve functionality, analyze usage patterns, and personalize content.;
            You can control cookie settings through your browser, but some features may not work;
            properly if cookies are disabled.
          </p>
        </motion.div>
        {/* Cookie Types */}
        <div className='space-y-6'>
          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              <div className='flex items-start mb-4'>
                <cookie.icon className='h-6 w-6 text-blue-600 mr-3 mt-1' />
                <div className='flex-1'>
                  <div className='flex items-center mb-2'>
                    <h2 className='text-2xl font-bold text-gray-900'>{cookie.name}</h2>
                    {cookie.required && (
                      <span className='ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full'>
                        Required
                      </span>
                    )}
                  </div>
                  <p className='text-gray-600 mb-4'>{cookie.description}</p>
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Examples:</h3>
                <ul className='space-y-1'>
                  {cookie.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className='flex items-start'>
                      <span className='text-blue-600 mr-2 mt-1'>•</span>
                      <span className='text-gray-600'>{example}</span>
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
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Managing Your Cookie Preferences</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Browser Settings</h3>
              <p className='text-gray-600 mb-2'>
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className='space-y-1 ml-4'>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2 mt-1'>•</span>
                  <span className='text-gray-600'>Block all cookies</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2 mt-1'>•</span>
                  <span className='text-gray-600'>Block third-party cookies only</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2 mt-1'>•</span>
                  <span className='text-gray-600'>Delete existing cookies</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2 mt-1'>•</span>
                  <span className='text-gray-600'>Set preferences for specific websites</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Cookie Consent</h3>
              <p className='text-gray-600'>
                When you first visit our website, you'll see a cookie consent banner. You can choose;
                which types of cookies to accept. You can change your preferences at any time by;
                clicking the cookie settings link in our footer.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Third-Party Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Third-Party Cookies</h2>
          <p className='text-gray-600 mb-4'>
            We may use third-party services that set their own cookies. These include:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Analytics</h3>
              <ul className='space-y-1'>
                <li className='text-gray-600'>Google Analytics</li>
                <li className='text-gray-600'>Hotjar</li>
                <li className='text-gray-600'>Mixpanel</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Marketing</h3>
              <ul className='space-y-1'>
                <li className='text-gray-600'>Google Ads</li>
                <li className='text-gray-600'>Facebook Pixel</li>
                <li className='text-gray-600'>LinkedIn Insight</li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Questions About Cookies?</h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Email</h3>
              <p className='text-gray-600'>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>
              <p className='text-gray-600'>+1 302 464 0950</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
;
export default Cookies;