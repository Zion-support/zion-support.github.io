import { motion } from 'framer-motion';"
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {"
      title: 'Information We Collect',
      icon: Database,
      content: [;"
        'Personal information you provide (name, email, phone number)',"
        'Business information for service delivery',"
        'Technical information (IP address, browser type, device information)',"
        'Usage data and analytics to improve our services',"
        'Communication records and support interactions';,
]},
    {"
      title: 'How We Use Your Information',
      icon: Eye,
      content: ["
        'To provide and improve our services',"
        'To communicate with you about our services',"
        'To process payments and manage accounts',"
        'To provide customer support',"
        'To comply with legal obligations',"
        'To protect our rights and prevent fraud';,
]},
    {"
      title: 'Information Sharing',
      icon: UserCheck,
      content: ["
        'We do not sell your personal information',"
        'We may share information with trusted service providers',"
        'We may disclose information if required by law',"
        'We may share information in case of business transfers',"
        'We may share aggregated, non-personal information';,
]},
    {"
      title: 'Data Security',
      icon: Lock,
      content: ["
        'We use industry-standard encryption to protect your data',"
        'We implement access controls and authentication',"
        'We regularly update our security measures',"
        'We conduct security audits and assessments',"
        'We train our staff on data protection practices';,
]},
    {"
      title: 'Your Rights',
      icon: Shield,
      content: ["
        'Right to access your personal information',"
        'Right to correct inaccurate information',"
        'Right to delete your personal information',"
        'Right to restrict processing of your information',"
        'Right to data portability',"
        'Right to object to processing';,
]},
    {"
      title: 'Cookies and Tracking',
      icon: FileText,
      content: ["
        'We use cookies to improve website functionality',"
        'We use analytics cookies to understand usage',"
        'We use marketing cookies for targeted advertising',"
        'You can control cookie settings in your browser',"
        'Some features may not work without cookies';,
]}
  ]
  return("
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>"
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          className='text-center mb-12'>"
          <div className='flex items-center justify-center mb-4'>"
            <Shield className='h-8 w-8 text-blue-600 mr-3' /" >"
            <h1 className='text-4xl font-bold text-gray-900'>Privacy Policy</h1>
          </div>"
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>"
          <p className='text-sm text-gray-500 mt-4'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}"
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>"
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Introduction</h2>"
          <p className='text-gray-600 leading-relaxed'>"
            Zion Tech Group ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy;
            explains how we collect, use, disclose, and safeguard your information when you visit our website;
            or use our services. Please read this privacy policy carefully. If you do not agree with the terms;
            of this privacy policy, please do not access the site or use our services.
          </p>
        </motion.div>
        {/* Policy Sections */}"
        <div className='space-y-8'>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}"
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>"
              <div className='flex items-center mb-4'>"
                <section .icon className='h-6 w-6 text-blue-600 mr-3' /" >"
                <h2 className='text-2xl font-bold text-gray-900'>{section.title}</h2>
              </div>"
              <ul className='space-y-2'>
                {section.content.map((item, itemIndex) => ("
                  <li key={itemIndex} className='flex items-start'>"
                    <span className='text-blue-600 mr-2 mt-1'>•</span>"
                    <span className='text-gray-600'>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}"
          className='mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>"
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Us</h2>"
          <p className='text-gray-600 mb-4'>
            If you have  questions about this Privacy Policy or our data practices, please contact us:
          </p>"
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>"
              <h3 className='font-semibold text-gray-900 mb-2'>Email</h3>"
              <p className='text-gray-600'>kleber@ziontechgroup.com</p>
            </div>
            <div>"
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>"
              <p className='text-gray-600'>+1 302 464 0950</p>
            </div>
            <div>"
              <h3 className='font-semibold text-gray-900 mb-2'>Address</h3>"
              <p className='text-gray-600'>
                364 E Main St STE 1008<br /" >
                Middletown DE 19709
              </p>
            </div>
            <div>"
              <h3 className='font-semibold text-gray-900 mb-2'>Data Protection Officer</h3>"
              <p className='text-gray-600'>dpo@ziontechgroup.com</p>
            </div>
          </div>
        </motion.div>
        {/* Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}"
          className='mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6'>"
          <h3 className='text-lg font-semibold text-blue-900 mb-2'>Policy Updates</h3>"
          <p className='text-blue-800'>
            We may update this Privacy Policy from time to time. We will notify you of  changes by posting;"
            the new Privacy Policy on this page and updating the 'Last updated' date. You are advised to review;
            this Privacy Policy periodically for  changes.
          </p>
        </motion.div>
      </div>
    </div>
  )}
export default Privacy"