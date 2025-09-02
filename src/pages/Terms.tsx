import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
const Terms: React.FC = () => {
  const sections = [
    { title: 'Acceptance of Terms', icon: CheckCircle,
      content: [;
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time', 'Continued use of our services after changes constitutes acceptance of new terms';
      ]}, { title: 'Service Description',
      icon: FileText, content: [
        'We provide AI services, IT solutions, quantum computing, and technology consulting', 'Services are provided on an 'as is' basis with no warranties',
        'We reserve the right to modify or discontinue services at any time', 'Service availability may vary based on technical and business considerations';
      ]}, { title: 'User Responsibilities',
      icon: AlertTriangle, content: [
        'Provide accurate and complete information when using our services',
        'Comply with all applicable laws and regulations', 'Not use our services for illegal or unauthorized purposes',
        'Maintain the confidentiality of any account credentials', 'Notify us immediately of any security breaches or unauthorized access';
      ]}, { title: 'Intellectual Property',
      icon: Scale, content: [
        'All content, trademarks, and intellectual property belong to Zion Tech Group',
        'Users may not copy, modify, or distribute our proprietary content', 'Any feedback or suggestions become our property without compensation',
        'Users retain rights to their own data and content';
      ]}, { title: 'Payment Terms',
      icon: CheckCircle, content: [
        'Payment terms are specified in individual service agreements',
        'All fees are non-refundable unless otherwise specified', 'We may suspend services for non-payment',
        'Prices may change with 30 days notice to existing customers';
      ]}, { title: 'Limitation of Liability',
      icon: XCircle, content: [
        'Our liability is limited to the amount paid for services',
        'We are not liable for indirect, incidental, or consequential damages', 'We do not guarantee uninterrupted or error-free service',
        'Users assume all risks associated with service use'
      ]}
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <Scale className='h-8 w-8 text-blue-600 mr-3' />
            <h1 className='text-4xl font-bold text-gray-900'>Terms of Service</h1>
          </div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Please read these terms carefully before using our services.
          </p>
          <p className='text-sm text-gray-500 mt-4'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1   }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Agreement to Terms</h2>
          <p className='text-gray-600 leading-relaxed'>
            These Terms of Service ('Terms') govern your use of Zion Tech Group's website and services.;'
            By accessing or using our services, you agree to be bound by these Terms. If you disagree
            with any part of these terms, then you may not access the service.
          </p>
        </motion.div>
        {/* Terms Sections */}
        <div className='space-y-8'>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2)   }}
              className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
              <div className='flex items-center mb-4'>
                <section.icon className='h-6 w-6 text-blue-600 mr-3' />
                <h2 className='text-2xl font-bold text-gray-900'>{section.title}</h2>
              </div>
              <ul className='space-y-2'>
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className='flex items-start'>
                    <span className='text-blue-600 mr-2 mt-1'>•</span>
                    <span className='text-gray-600'>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8   }}
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Additional Terms</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Termination</h3>
              <p className='text-gray-600'>
                We may terminate or suspend your access to our services immediately, without prior notice,
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Governing Law</h3>
              <p className='text-gray-600'>
                These Terms shall be interpreted and governed by the laws of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Severability</h3>
              <p className='text-gray-600'>
                If any provision of these Terms is held to be invalid or unenforceable, the remaining
                provisions will remain in full force and effect.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9   }}
          className='mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-4'>
            If you have any questions about these Terms of Service, please contact us: </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Email</h3>
              <p className='text-gray-600'>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>
              <p className='text-gray-600'>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Address</h3>
              <p className='text-gray-600'>
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Legal Department</h3>
              <p className='text-gray-600'>legal@ziontechgroup.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}

export default Terms