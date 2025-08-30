import React from 'react';
import { motion  } from 'framer-motion';
import { SEO  } from '@/components/SEO';
import { Shield, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Globe,
  Lock,
  Clock,
  Mail,
  Phone,
<<<<<<< HEAD
  MapPin
 } from 'lucide-react';
=======
  MapPin,
  Calendar
} from 'lucide-react';
import { SEO } from "../components/SEO";
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default function Terms() {
  const lastUpdated = 'December 15, 2024';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      icon: CheckCircle
    },
    {
      title: 'Service Description',
      content: 'Zion Tech Group provides AI-powered technology solutions, cloud services, cybersecurity, digital transformation, and IT consulting services. We reserve the right to modify or discontinue services at  time.',
      icon: Shield
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining the security of their accounts, and complying with all applicable laws and regulations when using our services.',
      icon: Users
    },
<<<<<<< HEAD
    {
      title: 'Intellectual Property',
      content: 'All content, software, and materials provided by Zion Tech Group are protected by intellectual property rights. Users may not copy, modify, or distribute our proprietary materials without permission.',
      icon: Lock;
=======;
    {;
      icon: Globe,;
      title: 'Intellectual Property',;
      description: 'All content and technology remain the property of Zion Tech Group.';
    };
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services.'
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    },
    {
      title: 'Privacy and Data Protection',
      content: 'Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.',
      icon: Shield
    },
    {
<<<<<<< HEAD
      title: 'Limitation of Liability',
      content: 'Zion Tech Group shall not be liable for  indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to data loss or business interruption.',
      icon: AlertTriangle;
    };
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Using our services for illegal or harmful purposes',
    'Interfering with the operation of our services',
    'Attempting to reverse engineer our software',
    'Sharing account credentials with unauthorized users',;
    'Violating  applicable laws or regulations';
  ];

  const terminationConditions = [
    'Violation of these Terms of Service',
    'Non-payment of service fees',
    'Engagement in prohibited activities',
    'Breach of security or privacy policies',
    'Failure to comply with legal requirements',;
    'Mutual agreement to terminate services';
  ];

  return (
    <div className = "min-h-screen bg-slate-900">
=======
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with these terms.'
    },
    {
      obligation: 'Content Standards',
      description: 'Ensure all content you provide is accurate, lawful, and does not infringe on others\' rights.'
    },
    {
      obligation: 'Payment Terms',;
      description: 'Pay all fees and charges in accordance with agreed payment schedules.';
    },;
    {;
      obligation: 'Confidentiality',;
      description: 'Maintain the confidentiality of any proprietary information shared with you.';
    };
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or other users\' accounts',
    'Transmitting viruses, malware, or other harmful code',;
    'Interfering with the proper functioning of our services',;
    'Using our services for illegal or fraudulent activities',;
    'Reverse engineering or attempting to extract source code',;
    'Harassing, threatening, or abusing other users',;
    'Violating intellectual property rights',;
    'Collecting personal information without consent';
  ];

  const serviceLevels = [
    {
      level: 'Standard Support',
      description: 'Email support during business hours',
      response: '24-48 hours',
      included: true
    },
    {
      level: 'Priority Support',
      description: 'Phone and email support with faster response times',
      response: '4-8 hours',
      included: false
    },;
    {;
      level: 'Premium Support',;
      description: 'Dedicated support team and 24/7 emergency response',;
      response: '1-2 hours',;
      included: false;
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service to understand the rules and conditions for using our AI and technology services."
        keywords="terms of service, legal terms, service agreement, Zion Tech Group"
        canonical="https://ziontechgroup.com/terms"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
=======
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.8,
  delay: 0.2 

}}
          >
            Please read these terms carefully before using our services
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial = {
  { opacity: 0,
  y: 30 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.8,
  delay: 0.4 

}}
          >
            Last updated: {lastUpdated}
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Terms Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      {/* Key Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Terms Overview
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group's services and outline your rights and responsibilities
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {termsSections.map((section, index)  => (
              <motion.div
<<<<<<< HEAD
                key={section.title}
                initial = {
  { opacity: 0,
  y: 30 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                className="group"
=======
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{section.content}</p>
                </div>
<<<<<<< HEAD
=======
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities 
              that help ensure a secure and productive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                <p className="text-gray-300">{obligation.description}</p>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial = {
  { opacity: 0,
  x: -20 






}}
              whileInView = {
  { opacity: 1,
  x: 0 






}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To maintain a secure and professional environment, certain activities 
                are strictly prohibited when using our services.
              </p>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial = {
  { opacity: 0,
  x: 20 






}}
              whileInView = {
  { opacity: 1,
  x: 0 






}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Violation Consequences</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">First Offense</span>
                    <span className="text-yellow-400">Warning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Second Offense</span>
                    <span className="text-orange-400">Suspension</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Third Offense</span>
                    <span className="text-red-400">Termination</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Prohibited Activities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The following activities are strictly prohibited and may result in immediate account termination
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md: grid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index)  => (
                <motion.div
                  key={index}
<<<<<<< HEAD
                  initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30 

}}
                  whileInView = {
  { opacity: 1,
  x: 0 

}}
                  viewport={{ once: true }}
                  transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                  className="flex items-start space-x-3"
=======
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                  className={`bg-slate-800/50 p-6 rounded-xl border ${
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Termination Conditions */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Termination
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We reserve the right to terminate services under the following conditions
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md: grid-cols-2 gap-6">
              {terminationConditions.map((condition, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30 

}}
                  whileInView = {
  { opacity: 1,
  x: 0 

}}
                  viewport={{ once: true }}
                  transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{condition}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
<<<<<<< HEAD
              initial = {
  { opacity: 0,
  x: -30 

}}
              whileInView = {
  { opacity: 1,
  x: 0 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
=======
              initial = {
  { opacity: 0,
  x: -20 






}}
              whileInView = {
  { opacity: 1,
  x: 0 






}}
              transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Legal Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Governing Law</h3>
                    <p className="text-slate-300">These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Dispute Resolution</h3>
                    <p className="text-slate-300">Any disputes arising from these terms will be resolved through binding arbitration in accordance with the American Arbitration Association rules.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Changes to Terms</h3>
                    <p className="text-slate-300">We may update these terms from time to time. We will notify users of  material changes via email or through our website.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
<<<<<<< HEAD
              initial = {
  { opacity: 0,
  x: 30 

}}
              whileInView = {
  { opacity: 1,
  x: 0 

}}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
=======
              initial = {
  { opacity: 0,
  x: 20 






}}
              whileInView = {
  { opacity: 1,
  x: 0 






}}
              transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Important Notices</h3>
                <div className="space-y-4">
                  {[
                    'These terms constitute the entire agreement between you and Zion Tech Group',
                    'If  provision is found to be unenforceable, the remaining provisions remain in effect',
                    'Our failure to enforce  right does not constitute a waiver of that right',
                    'These terms are binding on your successors and assigns',
                    'You may not assign your rights under these terms without our written consent',
                    'Notices must be sent to our registered address or email'
                  ].map((notice, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{notice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
=======
      {/* Limitation of Liability */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Limitation of Liability
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We strive to provide reliable services, but it's important to understand 
              the scope of our liability and your responsibilities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Direct damages up to the amount paid for services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Service availability and performance issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Data security and privacy protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Don't Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Loss of profits or business opportunities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Third-party service failures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Termination & Cancellation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the terms for ending our service relationship 
              helps ensure a smooth transition for all parties.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">You May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">With 30 days written notice</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For material breach by us</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">If we become insolvent</span>
                    </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">We May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For violation of terms</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Non-payment of fees</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Illegal or harmful use</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              If you have  questions or concerns about these Terms of Service, please contact us
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial = {
  { opacity: 0,
  x: -30 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Legal Department</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span className="text-slate-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial = {
  { opacity: 0,
  x: 30 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">General inquiries: 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Legal matters: 3-5 business days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Urgent issues: Same day</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.2 

}}
          >
            By using our services, you agree to these terms. Contact us if you have  questions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial = {
  { opacity: 0,
  y: 30 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            viewport={{ once: true }}
            transition = {
  { duration: 0.8,
  delay: 0.4 

}}
          >
            <a 
              href="mailto:legal@ziontechgroup.com" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Legal Team
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              General Contact
            </a>
          </motion.div>
        </div>
      </section>
    </div>
=======
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              By using our services, you agree to these terms. 
              Contact us if you need any clarification or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
}
