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
  Mail,
  Phone,
  ExternalLink,
  Scale,
  Gavel,
  BookOpen
} from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = '2025-01-15';
  
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: BookOpen,
      content: `Zion Tech Group provides AI-powered business intelligence, cloud infrastructure, cybersecurity, and digital transformation services. Our services include software solutions, consulting, implementation, and ongoing support.`
    },
    {
      id: 'user-accounts',
      title: 'User Accounts and Registration',
      icon: Users,
      content: `To access certain services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: Shield,
      content: `You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our services to transmit harmful code, violate intellectual property rights, or engage in any illegal activities.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Lock,
      content: `All content, features, and functionality on our website and services are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.`
    },
    {
      id: 'privacy',
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: `Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your information.`
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms and Billing',
      icon: CheckCircle,
      content: `Payment terms vary by service. Some services require upfront payment, while others may be billed on a subscription basis. All fees are non-refundable unless otherwise specified in your service agreement.`
    },
    {
      id: 'service-levels',
      title: 'Service Levels and Availability',
      icon: Globe,
      content: `We strive to maintain high service availability but do not guarantee uninterrupted access. Service levels are defined in individual service agreements and may include uptime guarantees and support response times.`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: `To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.`
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: Shield,
      content: `You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from your use of our services or violation of these Terms.`
    },
    {
      id: 'termination',
      title: 'Termination and Suspension',
      icon: AlertTriangle,
      content: `We may terminate or suspend your access to our services at any time for violation of these Terms or for any other reason. You may terminate your account at any time by contacting us.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      icon: Gavel,
      content: `These Terms are governed by the laws of the jurisdiction where Zion Tech Group is incorporated. Any disputes shall be resolved through binding arbitration in accordance with our dispute resolution procedures.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: AlertTriangle,
      content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through our website. Continued use of our services constitutes acceptance of the modified Terms.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      content: `If you have any questions about these Terms of Service, please contact us using the information provided below.`
    }
  ];

  const keyProvisions = [
    {
      title: 'Service Usage',
      description: 'Services are provided "as is" without warranties of any kind',
      icon: CheckCircle
    },
    {
      title: 'Data Security',
      description: 'We implement industry-standard security measures to protect your data',
      icon: Shield
    },
    {
      title: 'Payment Terms',
      description: 'Fees are billed according to your service agreement and are non-refundable',
      icon: CheckCircle
    },
    {
      title: 'Intellectual Property',
      description: 'All content and services remain the property of Zion Tech Group',
      icon: Lock
    },
    {
      title: 'Liability Limits',
      description: 'Our liability is limited to the amount paid for services in the 12 months prior to the claim',
      icon: AlertTriangle
    },
    {
      title: 'Termination Rights',
      description: 'Either party may terminate services with appropriate notice as specified in service agreements',
      icon: AlertTriangle
    }
  ];

  const disputeResolution = [
    {
      step: '1',
      title: 'Direct Communication',
      description: 'Attempt to resolve disputes through direct communication with our support team'
    },
    {
      step: '2',
      title: 'Escalation',
      description: 'If direct communication fails, escalate to management for resolution'
    },
    {
      step: '3',
      title: 'Mediation',
      description: 'For complex disputes, engage in mediation with a neutral third party'
    },
    {
      step: '4',
      title: 'Arbitration',
      description: 'As a last resort, resolve disputes through binding arbitration'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the legal terms and conditions governing your use of our services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, Zion Tech Group, service agreement" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
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
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>

              <p className="text-zion-slate-light mt-6">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Table of Contents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 hover:border-slate-300"
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium text-slate-900">{section.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Provisions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Key Provisions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyProvisions.map((provision, index) => (
                  <motion.div
                    key={provision.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-purple-200"
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <provision.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{provision.title}</h3>
                    <p className="text-slate-600 text-center text-sm">{provision.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Dispute Resolution Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disputeResolution.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-indigo-200 text-center"
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Our legal team is here to help clarify any questions about our Terms of Service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                  Contact Legal Team
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                  Request Clarification
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;