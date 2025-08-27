import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  Lock,
  Eye,
  Database
} from 'lucide-react';

const TermsOfService: React.FC = () => {
  const lastUpdated = 'January 15, 2024';
  const companyName = 'Zion Tech Group';
  const website = 'https://ziontechgroup.com';
  const email = 'legal@ziontechgroup.com';
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
                <FileText className="w-10 h-10 text-zion-cyan" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Terms of <span className="text-zion-cyan">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
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
                Agreement to Terms
              </h2>
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your use of the {companyName} website located at {website} and any related services provided by {companyName} ("we," "our," or "us").
                </p>
                <p>
                  By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website or use our services.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use our website and services.
                </p>
              </div>
            </motion.div>

            {/* Services Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-zion-cyan" />
                Description of Services
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  {companyName} provides technology consulting, software development, AI solutions, cybersecurity services, and related technology services. Our services include:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Artificial Intelligence and Machine Learning solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Cybersecurity consulting and implementation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Cloud infrastructure and digital transformation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Software development and consulting
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Technology strategy and advisory services
                  </li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>
              </div>
            </motion.div>

            {/* User Accounts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-zion-cyan" />
                User Accounts and Responsibilities
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Maintaining the security of your account and password
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    All activities that occur under your account
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Notifying us immediately of any unauthorized use
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Ensuring your account information is up to date
                  </li>
                </ul>
                <p>
                  You may not use another person's account or provide false information. We reserve the right to terminate accounts that violate these terms.
                </p>
              </div>
            </motion.div>

            {/* Acceptable Use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-zion-cyan" />
                Acceptable Use Policy
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  You agree not to use our website or services to:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Violate any applicable laws or regulations
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Infringe on intellectual property rights
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Transmit harmful, offensive, or inappropriate content
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Attempt to gain unauthorized access to our systems
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Interfere with the proper functioning of our services
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Use our services for commercial purposes without authorization
                  </li>
                </ul>
                <p>
                  Violation of this policy may result in termination of your access to our services.
                </p>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-zion-cyan" />
                Intellectual Property Rights
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Our website and services contain content that is owned by {companyName} or its licensors, including but not limited to:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Text, graphics, images, and software
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Trademarks, service marks, and logos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Patents and trade secrets
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Copyrighted materials and designs
                  </li>
                </ul>
                <p>
                  You may not copy, reproduce, distribute, or create derivative works from our content without our express written permission.
                </p>
                <p>
                  Any content you submit to our services remains your property, but you grant us a license to use, modify, and distribute such content in connection with our services.
                </p>
              </div>
            </motion.div>

            {/* Privacy and Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-zion-cyan" />
                Privacy and Data Protection
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  By using our services, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
                <p>
                  We implement appropriate security measures to protect your data, but no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-zion-cyan" />
                Limitation of Liability
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  To the maximum extent permitted by law, {companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Loss of profits, data, or business opportunities
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Service interruptions or technical failures
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Security breaches or data loss
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Third-party actions or content
                  </li>
                </ul>
                <p>
                  Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>
            </motion.div>

            {/* Disclaimers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-zion-cyan" />
                Disclaimers
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
                </p>
                <p>
                  We do not warrant that:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Our services will be uninterrupted or error-free
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Defects will be corrected
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Our services are free of viruses or other harmful components
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    The results obtained from using our services will be accurate or reliable
                  </li>
                </ul>
                <p>
                  We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </motion.div>

            {/* Indemnification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-zion-cyan" />
                Indemnification
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless {companyName} and its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Your use of our services
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Your violation of these Terms
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Your violation of any third-party rights
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Any content you submit or transmit through our services
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-zion-cyan" />
                Termination
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use our services will cease immediately. If you wish to terminate your account, you may simply discontinue using our services.
                </p>
                <p>
                  All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-zion-cyan" />
                Governing Law and Dispute Resolution
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p>
                  The arbitration shall be conducted in English and the seat of arbitration shall be in the United States.
                </p>
              </div>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-zion-cyan" />
                Changes to These Terms
              </h2>
              
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-zion-cyan" />
                Contact Information
              </h2>
              
              <p className="text-zion-slate-light mb-6">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;