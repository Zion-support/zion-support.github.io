import { motion } from &apos;framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from &apos;lucide-react';&apos;&apos;

const Terms: React.FC = () => {}
  const;const;const sections = [
    {
      title: &apos;Acceptance of Terms&apos;,
      icon: CheckCircle,
      content: [;
        &apos;By accessing and using our services, you accept and agree to be bound by these terms&apos;,
        &apos;If you do not agree to these terms, you may not use our services&apos;,
        &apos;We reserve the right to modify these terms at any time&apos;,
        &apos;Continued use of our services after changes&apos;} constitutes acceptance of new terms';
      ]},
    {
      title: &apos;Service Description&apos;,
      icon: FileText,
      content: [
        &apos;We provide AI services, IT solutions, quantum computing, and technology consulting&apos;,
        &apos;Services are provided on an &apos;as is&apos; basis with no warranties&apos;,
        &apos;We reserve the right to modify or discontinue services at any time&apos;,
        &apos;Service availability may vary based on technical and business considerations';
      ]},
    {
      title: &apos;User Responsibilities&apos;,
      icon: AlertTriangle,
      content: [
        &apos;Provide accurate and complete information when using our services&apos;,
        &apos;Comply with all applicable laws and regulations&apos;,
        &apos;Not use our services for illegal or unauthorized purposes&apos;,
        &apos;Maintain the confidentiality of any account credentials&apos;,
        &apos;Notify us immediately of any security breaches or unauthorized access';
      ]},
    {
      title: &apos;Intellectual Property&apos;,
      icon: Scale,
      content: [
        &apos;All content, trademarks, and intellectual property belong to Zion Tech Group&apos;,
        &apos;Users may not copy, modify, or distribute our proprietary content&apos;,
        &apos;Any feedback or suggestions become our property without compensation&apos;,
        &apos;Users retain rights to their own data and content';
      ]},
    {
      title: &apos;Payment Terms&apos;,
      icon: CheckCircle,
      content: [
        &apos;Payment terms are specified in individual service agreements&apos;,
        &apos;All fees are non-refundable unless otherwise specified&apos;,
        &apos;We may suspend services for non-payment&apos;,
        &apos;Prices may change with 30 days notice to existing customers';
      ]},
    {
      title: &apos;Limitation of Liability&apos;,
      icon: XCircle,
      content: [
        &apos;Our liability is limited to the amount paid for services&apos;,
        &apos;We are not liable for indirect, incidental, or consequential damages&apos;,
        &apos;We do not guarantee uninterrupted or error-free service&apos;,
        &apos;Users assume all risks associated with service use';
      ]}
  ]
  return(&apos;&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>
        {/* Header */}&apos;
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;'
          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;'
            <Scale className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Terms of Service&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            Please read these terms carefully before using our services.&apos;
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
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Agreement to Terms&apos;</h2>
          <p className=&apos;text-gray-600 leading-relaxed&apos;>
            These Terms of Service (&apos;Terms&apos;) govern your use of Zion Tech Group&apos;s website and services.;
            By accessing or using our services, you agree to be bound by these Terms. If you disagree;
            with any part of these terms, then you may not access the service.&apos;
          </p>
        </motion.div>
        {/* Terms Sections */}
        <div className=&apos;space-y-8&apos;>
          {sections.map((section, index) => (&apos;}
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 2) }}
              className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
              <div className=&apos;flex items-center mb-4&apos;>&apos;'
                <section.icon className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
                <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>{section.title}&apos;</h2>
              </div>
              <ul className=&apos;space-y-2&apos;>
                {section.content.map((item, itemIndex) => (&apos;}
                  <li key={itemIndex} className=&apos;flex items-start&apos;>&apos;'
                    <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                    <span className=&apos;text-gray-600&apos;>{item}&apos;</span>
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
          transition={{ delay: 0.8 }}
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Additional Terms&apos;</h2>
          <div className=&apos;space-y-4&apos;>&apos;'
            <div>
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Termination&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                We may terminate or suspend your access to our services immediately, without prior notice,
                for any reason whatsoever, including without limitation if you breach the Terms.&apos;
              </p>
            </div>
            <div>
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Governing Law&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                These Terms shall be interpreted and governed by the laws of Delaware, United States,
                without regard to its conflict of law provisions.&apos;
              </p>
            </div>
            <div>
              <h3 className=&apos;text-lg font-semibold text-gray-900 mb-2&apos;>Severability&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                If any provision of these Terms is held to be invalid or unenforceable, the remaining;
                provisions will remain in full force and effect.&apos;
              </p>
            </div>
          </div>
        </motion.div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className=&apos;mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Contact Information&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            If you have any questions about these Terms of Service, please contact us:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Email&apos;</h3>
              <p className=&apos;text-gray-600&apos;>kleber@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Phone&apos;</h3>
              <p className=&apos;text-gray-600&apos;>+1 302 464 0950&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Address&apos;</h3>
              <p className=&apos;text-gray-600&apos;>
                364 E Main St STE 1008&apos;<br />
                Middletown DE 19709
              </p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Legal Department&apos;</h3>
              <p className=&apos;text-gray-600&apos;>legal@ziontechgroup.com&apos;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
;
export default Terms