import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  Share
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const website = 'https://ziontechgroup.com';
  const email = 'privacy@ziontechgroup.com';
  const phone = '+1 (555) 123-4567';
  const address = '123 Technology Drive, Innovation City, IC 12345, United States';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-zion-cyan" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Privacy <span className="text-zion-cyan">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-zion-slate-light">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last updated: {lastUpdated}
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {website}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-zion-cyan" />
                Introduction
              </h2>
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  {companyName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {website} or use our services.
                </p>
                <p>
                  By using our website and services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our website or services.
                </p>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-zion-cyan" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-zion-slate-light mb-3">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="space-y-2 text-zion-slate-light ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Name and contact information (email address, phone number, mailing address)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Company name and job title
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Information you provide when contacting us or requesting services
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Resume or professional background information for job applications
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                  <p className="text-zion-slate-light mb-3">
                    When you visit our website, we automatically collect certain information, including:
                  </p>
                  <ul className="space-y-2 text-zion-slate-light ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      IP address and browser type
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Operating system and device information
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Pages visited and time spent on our website
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Referring website and search terms
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking Technologies</h3>
                  <p className="text-zion-slate-light mb-3">
                    We use cookies and similar tracking technologies to enhance your experience on our website:
                  </p>
                  <ul className="space-y-2 text-zion-slate-light ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Essential cookies for website functionality
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Analytics cookies to understand website usage
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Marketing cookies for personalized content
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-zion-cyan" />
                How We Use Your Information
              </h2>
              
              <p className="text-zion-slate-light mb-4">
                We use the information we collect for various purposes, including:
              </p>
              
              <ul className="space-y-3 text-zion-slate-light ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Providing and maintaining our website and services
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Responding to your inquiries and providing customer support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Processing job applications and recruitment activities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Sending newsletters, marketing materials, and updates (with your consent)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Improving our website, services, and user experience
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Analyzing website usage and trends
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Complying with legal obligations and protecting our rights
                </li>
              </ul>
            </motion.div>

            {/* Information Sharing and Disclosure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Share className="w-8 h-8 text-zion-cyan" />
                Information Sharing and Disclosure
              </h2>
              
              <p className="text-zion-slate-light mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              
              <ul className="space-y-3 text-zion-slate-light ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Consent:</strong> We may share information with your explicit consent
                </li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-zion-cyan" />
                Data Security
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  Our security measures include:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Encryption of data in transit and at rest
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Regular security assessments and updates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Access controls and authentication measures
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Employee training on data protection
                  </li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>
              </div>
            </motion.div>

            {/* Your Rights and Choices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-zion-cyan" />
                Your Rights and Choices
              </h2>
              
              <p className="text-zion-slate-light mb-4">
                You have certain rights regarding your personal information:
              </p>
              
              <ul className="space-y-3 text-zion-slate-light ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Access:</strong> Request access to your personal information
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Portability:</strong> Request a copy of your data in a portable format
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Cookies:</strong> Manage cookie preferences through your browser settings
                </li>
              </ul>
              
              <p className="text-zion-slate-light mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </motion.div>

            {/* International Data Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-zion-cyan" />
                International Data Transfers
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
                <p>
                  For transfers to countries outside the European Economic Area (EEA), we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards as required by law.
                </p>
              </div>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-zion-cyan" />
                Children's Privacy
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Our website and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will take steps to remove such information from our records.
                </p>
              </div>
            </motion.div>

            {/* Changes to This Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-zion-cyan" />
                Changes to This Policy
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Posting the updated policy on our website
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Updating the "Last Updated" date
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Sending email notifications for significant changes
                  </li>
                </ul>
                <p>
                  Your continued use of our website after any changes indicates your acceptance of the updated policy.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-zion-cyan" />
                Contact Us
              </h2>
              
              <p className="text-zion-slate-light mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span>{phone}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan mt-0.5" />
                    <span>{address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>{website}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-zion-slate-light mt-6">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;