<<<<<<< HEAD
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { FileText,
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
<<<<<<< HEAD
 } from 'lucide-react';
=======
<<<<<<< HEAD
const TermsOfService: React.FC = (): JSX.Element => {
=======
              } from 'lucide-react.ts';

<<<<<<< HEAD
const TermsOfService: React.FC = (): JSX.Element => {;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const lastUpdated = 'January 15, 2024';
  const compName = 'Zion Tech Group';
  const website = 'https://ziontechgroup.com';
  const email = 'legal@ziontechgroup.com';
  const phone = '+1 (555) 123-4567';
  const address = '123 Technology Drive, Innovation City, IC 12345, United States';
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
const TermsOfService = () => {;
  const lastUpdated = '2025-01-15';
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Lock, 
  Eye, 
  Info, 
  Calendar, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Mail 
} from 'lucide-react';

export default function TermsOfService() {
  const compName = 'Zion Tech Group';
  const website = 'https://ziontechgroup.com';
  
  const termsSections = [
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    {
      id: 'services',
      title: 'Description of Services',
      icon: Shield,
      content: `Zion Tech Group provides technology consulting, software development, AI solutions, cybersecurity services, and related technology services. Our services include artificial intelligence and machine learning solutions, cybersecurity consulting and implementation, cloud infrastructure and digital transformation, software development and consulting, and technology strategy and advisory services.`
    },
    {
      id: 'accounts',
      title: 'User Accounts and Responsibilities',
      icon: Users,
      content: `When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the security of your account and password, all activities that occur under your account, notifying us immediately of any unauthorized use, and ensuring your account information is up to date.`
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: Shield,
      content: `You agree not to use our website or services to violate any applicable laws or regulations, infringe on intellectual property rights, transmit harmful or malicious code, engage in unauthorized access or interference with our systems, or use our services for any illegal or unauthorized purpose.`
    },
    {
      id: 'privacy',
      title: 'Privacy and Data Protection',
      icon: Lock,
      content: `We are committed to protecting your privacy and personal information. Our collection, use, and protection of your data is governed by our Privacy Policy, which is incorporated into these Terms by reference.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Eye,
      content: `All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.`
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Limitations',
      icon: Shield,
      content: `Our services are provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Info,
      content: `In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Shield,
      content: `We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Calendar,
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: Globe,
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
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-zion-cyan" />
                Agreement to Terms
              </h2>
              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your use of the {compName} website located at {website} and related services provided by {compName} ("we," "our," or "us").
                </p>
                <p>
                  By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website or use our services.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <section.icon className="w-8 h-8 text-zion-cyan" />
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-zion-slate-light leading-relaxed">
                    <p>{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Provisions */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Provisions</h2>
              <p className="text-xl text-gray-300">Important terms and conditions you should know</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyProvisions.map((provision, index) => (
                <motion.div
                  key={provision.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <provision.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{provision.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{provision.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Dispute Resolution Process</h2>
              <p className="text-xl text-gray-300">Our approach to resolving conflicts and disputes</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {disputeResolution.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 justify-center">
                <Mail className="w-8 h-8 text-zion-cyan" />
                Contact Information
              </h2>
              <div className="space-y-4 text-zion-slate-light leading-relaxed max-w-2xl mx-auto">
                <p>
                  For questions about these Terms of Service or any other legal matters, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
<<<<<<< HEAD
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
        <section className = "py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.6,
  delay: 0.2 
}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Table of Contents
              </h2>
<<<<<<< HEAD
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, index) => (
=======
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    initial = {
  { opacity: 0,
  y: 20 
}}
                    animate = {
  { opacity: 1,
  y: 0 
}}
                    transition = {
  { duration: 0.6,
  delay: 0.1 * index 
}}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 hover:border-slate-300"
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium text-slate-900">{section.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
=======
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Key Provisions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.6,
  delay: 0.4 
}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Key Provisions
              </h2>
<<<<<<< HEAD
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyProvisions.map((provision, index) => (
=======
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
                {keyProvisions.map((provision, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  <motion.div
                    key={provision.title}
                    initial = {
  { opacity: 0,
  y: 20 
}}
                    animate = {
  { opacity: 1,
  y: 0 
}}
                    transition = {
  { duration: 0.6,
  delay: 0.1 * index 
}}
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
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: anyanyanyanyanyanyanyanyanyanyanyanyany0.6,
  delay: 0.6 
}}
            >
              {sections.map((section, index)              => (
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
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.6,
  delay: 0.8 
}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Dispute Resolution Process
              </h2>
<<<<<<< HEAD
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disputeResolution.map((step, index) => (
=======
              
              <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
                {disputeResolution.map((step, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                  <motion.div
                    key={step.step}
                    initial = {
  { opacity: 0,
  y: 20 
}}
                    animate = {
  { opacity: 1,
  y: 0 
}}
                    transition = {
  { duration: 0.6,
  delay: 0.1 * index 
}}
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
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.6,
  delay: 1.0 
}}
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
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
=======
      </div>
    </>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  );
}