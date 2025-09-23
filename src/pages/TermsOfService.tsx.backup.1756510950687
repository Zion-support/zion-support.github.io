import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  AlertTriangle, 
 
  CheckCircle, 
  ArrowRight, 
  Download, 
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
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Terms of Service
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our services. By using our services, you agree to these terms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
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