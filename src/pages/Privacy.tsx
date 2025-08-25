import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, Users, Database, Globe, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Privacy = () => {
  const privacyPrinciples = [
    {
      title: "Transparency",
      description: "We are clear about how we collect, use, and protect your data",
      icon: Eye,
      color: "text-blue-400"
    },
    {
      title: "Security",
      description: "Your data is protected with enterprise-grade security measures",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Control",
      description: "You have full control over your personal information",
      icon: Lock,
      color: "text-purple-400"
    },
    {
      title: "Minimization",
      description: "We only collect data that is necessary for our services",
      icon: Database,
      color: "text-orange-400"
    }
  ];

  const dataCategories = [
    {
      category: "Personal Information",
      examples: ["Name, email address, phone number", "Company information", "Job title and role"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address, browser type", "Device information", "Usage analytics"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Business Information",
      examples: ["Project requirements", "Service preferences", "Feedback and reviews"],
      purpose: "To deliver personalized solutions and support"
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Request deletion of your data",
    "Object to data processing",
    "Data portability",
    "Withdraw consent",
    "Lodge a complaint"
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy | Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with data protection regulations."
        keywords="privacy policy, data protection, GDPR, privacy, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
=======
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Users, 
  Globe,
  Mail,
  Phone
} from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'January 17, 2025';

  const dataCategories = [
    {
      icon: Users,
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information, and job title.',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      icon: Database,
      title: 'Technical Data',
      description: 'IP address, browser type, device information, and usage analytics.',
      examples: ['Website analytics', 'Performance monitoring', 'Security logs']
    },
    {
      icon: Globe,
      title: 'Usage Information',
      description: 'Pages visited, time spent, features used, and interaction patterns.',
      examples: ['User behavior tracking', 'Feature usage analytics', 'Performance metrics']
    }
  ];

  const dataUses = [
    {
      icon: Mail,
      title: 'Communication',
      description: 'Respond to inquiries, provide support, and send important updates.'
    },
    {
      icon: Shield,
      title: 'Service Delivery',
      description: 'Provide and improve our services, customize user experiences.'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Protect against fraud, ensure system security, and maintain service integrity.'
    },
    {
      icon: Users,
      title: 'Analytics',
      description: 'Analyze usage patterns, improve services, and develop new features.'
    }
  ];

  const dataSharing = [
    {
      title: 'Service Providers',
      description: 'We may share data with trusted third-party service providers who assist us in operating our website, conducting business, or servicing users.'
    },
    {
      title: 'Legal Requirements',
      description: 'We may disclose information when required by law, court order, or government request, or to protect our rights and safety.'
    },
    {
      title: 'Business Transfers',
      description: 'In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction.'
    },
    {
      title: 'With Consent',
      description: 'We may share information with third parties when we have explicit consent from users to do so.'
    }
  ];

  const userRights = [
    {
      title: 'Access',
      description: 'Request access to the personal data we hold about you.'
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal data, subject to legal obligations.'
    },
    {
      title: 'Portability',
      description: 'Request a copy of your data in a portable format.'
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal data in certain circumstances.'
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing in certain situations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect 
              your personal information.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
              <span>Last Updated:</span>
              <span className="font-semibold">{lastUpdated}</span>
            </div>
=======
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Database, Globe, Zap } from 'lucide-react';

const Privacy = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      description: 'We collect information you provide directly to us and information we obtain automatically.',
      items: [
        'Personal information (name, email, phone number)',
        'Business information (company name, job title)',
        'Usage data and analytics',
        'Technical information (IP address, device information)'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'How We Use Information',
      description: 'We use the information we collect to provide and improve our services.',
      items: [
        'Provide and maintain our services',
        'Communicate with you about our services',
        'Improve and personalize user experience',
        'Ensure security and prevent fraud'
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Information Sharing',
      description: 'We do not sell, trade, or rent your personal information to third parties.',
      items: [
        'Service providers and partners',
        'Legal requirements and compliance',
        'Business transfers and mergers',
        'With your explicit consent'
      ],
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Security',
      description: 'We implement appropriate security measures to protect your information.',
      items: [
        'Encryption of sensitive data',
        'Regular security assessments',
        'Access controls and authentication',
        'Secure data transmission'
      ],
      icon: Lock,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
      icon: Eye
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: Shield
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
      icon: Lock
    },
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
              <Shield className="w-6 h-6" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Commitment
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-zion-slate-light mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Overview
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                By using our services, you agree to the collection and use of information in 
                accordance with this policy. If you do not agree with our policies and practices, 
                please do not use our services.
              </p>
              <p className="text-zion-slate leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services, 
              ensure security, and enhance user experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-zion-slate mb-4 text-center">
                  {category.description}
                </p>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-zion-slate flex items-start">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              How We Use Your Information
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We use the information we collect for various purposes to provide, 
              maintain, and improve our services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataUses.map((use, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <use.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3">
                  {use.title}
                </h3>
                <p className="text-zion-slate text-sm">
                  {use.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Information Sharing and Disclosure
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We are committed to protecting your privacy and do not sell, trade, 
              or otherwise transfer your personal information to third parties without your consent.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {dataSharing.map((item, index) => (
              <div key={index} className="bg-zinc-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-zion-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Data Security
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our security measures include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Encryption of data in transit and at rest
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Regular security assessments and penetration testing
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Access controls and authentication mechanisms
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Employee training on data protection and privacy
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Incident response and breach notification procedures
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                While we strive to protect your personal information, no method of transmission 
                over the internet or electronic storage is 100% secure. We cannot guarantee 
                absolute security but are committed to maintaining the highest standards of data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              You have certain rights regarding your personal information. 
              We respect these rights and are committed to helping you exercise them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <div key={index} className="bg-zinc-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {right.title}
                </h3>
                <p className="text-zion-slate text-sm">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand where our visitors are coming from.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Types of cookies we use:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Essential cookies:</strong> Required for basic website functionality
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Analytics cookies:</strong> Help us understand how visitors use our website
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Functional cookies:</strong> Remember your preferences and settings
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <strong>Marketing cookies:</strong> Used for targeted advertising and marketing
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                You can control and manage cookies through your browser settings. However, 
                disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Third-Party Services and Links
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our website may contain links to third-party websites and services. 
                We are not responsible for the privacy practices or content of these external sites.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We may use third-party services for:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Website analytics and performance monitoring
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Customer relationship management and support
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Payment processing and financial services
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Marketing and advertising services
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                We recommend reviewing the privacy policies of any third-party services 
                you interact with to understand how they handle your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Children's Privacy
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our services are not intended for children under the age of 13. 
                We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                If you are a parent or guardian and believe that your child has provided 
                us with personal information, please contact us immediately. We will take 
                steps to remove such information from our records.
              </p>
              <p className="text-zion-slate leading-relaxed">
                For users between the ages of 13 and 18, we recommend reviewing this 
                Privacy Policy with a parent or guardian to ensure understanding of our practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                International Data Transfers
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Your information may be transferred to and processed in countries other than 
                your own. We ensure that such transfers comply with applicable data protection laws.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                When we transfer data internationally, we implement appropriate safeguards such as:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Standard contractual clauses approved by data protection authorities
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Adequacy decisions by relevant authorities
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Binding corporate rules for multinational organizations
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Other appropriate safeguards as required by law
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                By using our services, you consent to the transfer of your information 
                to countries outside your residence, subject to the safeguards described above.
              </p>
            </div>
=======
      {/* Your Rights */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Your Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Rights
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              You have certain rights regarding your personal information under applicable privacy laws.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{right.title}</h3>
                  <p className="text-zion-slate-light">{right.description}</p>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
                    Zion Tech Group
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-zion-cyan" />
                      <a 
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                      <a 
                        href="tel:+13024640950"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        +1 (302) 464-0950
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 text-zion-cyan mt-0.5">
                        📍
                      </div>
                      <div className="text-zion-slate">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709<br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">
                    Data Protection Officer
                  </h3>
                  <p className="text-zion-slate mb-4">
                    For privacy-specific inquiries or to exercise your data rights, 
                    you can also contact our Data Protection Officer directly.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    Contact DPO
                  </Link>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your Privacy is Our
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Priority
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#privacy-policy"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Read Policy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                We follow these core principles to ensure your data is handled responsibly and securely.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${principle.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Privacy Policy Content */}
        <section id="privacy-policy" className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zion-blue border border-zion-cyan/20 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
                <p className="text-zion-slate-light mb-6">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>

                <div className="space-y-6 text-zion-slate-light">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                    <p>
                      Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                      when you visit our website or use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h3>
                    <div className="space-y-4">
                      {dataCategories.map((category, index) => (
                        <div key={index} className="bg-zion-blue-dark border border-zion-cyan/20 rounded-xl p-4">
                          <h4 className="text-white font-semibold mb-2">{category.category}</h4>
                          <div className="mb-2">
                            <strong className="text-zion-cyan">Examples:</strong>
                            <ul className="list-disc list-inside ml-4 mt-1">
                              {category.examples.map((example, idx) => (
                                <li key={idx}>{example}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-zion-cyan">Purpose:</strong> {category.purpose}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h3>
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Provide and maintain our services</li>
                      <li>Communicate with you about our services</li>
                      <li>Improve and personalize your experience</li>
                      <li>Ensure security and prevent fraud</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4. Data Sharing and Disclosure</h3>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>With your explicit consent</li>
                      <li>To trusted service providers who assist in our operations</li>
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and safety</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">5. Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational security measures to protect your 
                      personal information against unauthorized access, alteration, disclosure, or destruction. 
                      These measures include encryption, secure servers, and regular security assessments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
                    <p>You have the following rights regarding your personal data:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {rights.map((right, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {right}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">7. Data Retention</h3>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the purposes 
                      outlined in this policy, unless a longer retention period is required or permitted by law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">8. Cookies and Tracking</h3>
                    <p>
                      We use cookies and similar tracking technologies to enhance your browsing experience, 
                      analyze website traffic, and understand where our visitors are coming from. You can 
                      control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">9. International Transfers</h3>
                    <p>
                      Your information may be transferred to and processed in countries other than your own. 
                      We ensure that such transfers comply with applicable data protection laws and implement 
                      appropriate safeguards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">10. Children's Privacy</h3>
                    <p>
                      Our services are not intended for children under 13 years of age. We do not knowingly 
                      collect personal information from children under 13. If you are a parent or guardian and 
                      believe your child has provided us with personal information, please contact us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes 
                      by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">12. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-zion-blue-dark border border-zion-cyan/20 rounded-xl p-4 mt-3">
                      <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                      <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                      <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                We're committed to transparency and protecting your privacy. Contact us if you have any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/terms"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We're committed to transparency and protecting your privacy. 
            If you have any questions or concerns, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Privacy%20Policy%20Question"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Contact Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Privacy Team
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              If you have questions about this privacy policy or would like to exercise your privacy rights, 
              please contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Email</h3>
                <p className="text-zion-slate-light mb-2">For privacy inquiries:</p>
                <a href="mailto:privacy@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                  privacy@ziontechgroup.com
                </a>
              </div>
              
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">General Contact</h3>
                <p className="text-zion-slate-light mb-2">For general inquiries:</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Address</h3>
              <p className="text-zion-slate-light">
                Zion Tech Group<br />
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                United States
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Policy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Updates
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or applicable laws. We will notify you of any material changes.
            </p>
            
            <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Notification of Changes</h3>
              <p className="text-zion-slate-light">
                When we make changes to this privacy policy, we will update the "Last updated" date 
                at the top of this page and may send you an email notification for significant changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
  );
};

export default Privacy;