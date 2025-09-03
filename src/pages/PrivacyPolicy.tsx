import { motion } from 'framer-motion
import { SEO } from '../components/SEO
import { motion } from 'framer-motion
import { SEO } from '../components/SEO
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react';
export default function PrivacyPolicy() {
  return (
    <>"
      <SEO "
        title="Privacy Policy - Zion Tech Group | Data Protection & Privacy"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data protection practices."
        keywords="privacy policy, data protection, privacy, GDPR, CCPA, data security, Zion Tech Group'
      /  >'
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
        {/* Hero Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">"
          <div className="container mx-auto px-4">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}"
              className='text-center max-w-4xl mx-auto' >"
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy"
              </h1>"
              <p className="text-xl text-gray-300 mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>"
              <div className="flex items-center justify-center">"
                <Shield className="w-16 h-16 text-blue-400" /" >
              </div>
            </motion.div>
          </div>
        </section>
"
        {/* Content */}"
        <section className="py-16">"
          <div className="container mx-auto px-4 max-w-4xl">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}"
              className='prose prose-lg prose-invert max-w-none' >"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50">"
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>"
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support."
                </p>"
                <ul className="text-gray-300 space-y-2'>
                  <li>• Contact information (name, email, phone number)</li>
                  <li>• Account credentials and preferences</li>
                  <li>• Payment and billing information</li>
                  <li>• Communications with our support team</li>
                </ul>
              </div> 
              <div className='bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>"
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services."
                </p>"
                <ul className="text-gray-300 space-y-2'>
                  <li>• Provide and maintain our services</li>
                  <li>• Process transactions and send related information</li>
                  <li>• Send technical notices and support messages</li>
                  <li>• Respond to your comments and questions</li>
                </ul>
              </div> 
              <div className='bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>"
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction."
                </p>"
                <ul className="text-gray-300 space-y-2'>
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </div> 
              <div className='bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>"
                <p className="text-gray-300 mb-4">
                  You have certain rights regarding your personal information, including: </p>"
                <ul className="text-gray-300 space-y-2'>
                  <li>• Access to your personal information</li>
                  <li>• Correction of inaccurate information</li>
                  <li>• Deletion of your personal information</li>
                  <li>• Objection to processing of your information</li>
                </ul>
              </div> 
              <div className='bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>"
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at: </p>"
                <div className="text-gray-300">
                  <p>Email: privacy@ziontechgroup.com</p>
                  <p>Phone: +1 302 464 0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  );,
}
"