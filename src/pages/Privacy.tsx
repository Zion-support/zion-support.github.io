import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, Users, Database, Globe, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
=======
import { SEOHead } from '../components/SEOHead';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  CheckCircle,
  Calendar,
  Mail
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const dataCollection = [
    {
      category: "Personal Information",
      examples: ["Name", "Email address", "Phone number", "Company name", "Job title"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address", "Browser type", "Device information", "Usage analytics", "Cookies"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Business Information",
      examples: ["Company size", "Industry", "Project requirements", "Budget information"],
      purpose: "To tailor our solutions to your needs"
    }
  ];

  const dataUsage = [
    "Provide and maintain our services",
    "Improve and personalize user experience",
    "Communicate with you about our services",
    "Ensure security and prevent fraud",
    "Comply with legal obligations",
    "Conduct research and analytics"
  ];

  const dataProtection = [
    "End-to-end encryption for data transmission",
    "Secure data centers with 24/7 monitoring",
    "Regular security audits and penetration testing",
    "Access controls and authentication measures",
    "Data backup and disaster recovery",
    "Employee training on data protection"
  ];

  const userRights = [
    {
      right: "Access",
      description: "Request a copy of your personal data"
    },
    {
      right: "Rectification",
      description: "Correct inaccurate or incomplete data"
    },
    {
      right: "Erasure",
      description: "Request deletion of your personal data"
    },
    {
      right: "Portability",
      description: "Receive your data in a portable format"
    },
    {
      right: "Objection",
      description: "Object to certain types of data processing"
    },
    {
      right: "Restriction",
      description: "Limit how we process your data"
    }
  ];
=======
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy ensures your information is secure and protected."
        keywords="privacy policy, data protection, GDPR, privacy, Zion Tech Group"
=======
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://ziontechgroup.com/privacy"
=======
=======
=======
      />
      
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = "December 15, 2024";

  const dataWeCollect = [
    {
      category: "Personal Information",
      examples: ["Name", "Email address", "Phone number", "Company name", "Job title"],
      purpose: "To provide our services, communicate with you, and personalize your experience"
    },
    {
      category: "Technical Information",
      examples: ["IP address", "Browser type", "Device information", "Usage data", "Cookies"],
      purpose: "To improve our services, ensure security, and provide technical support"
    },
    {
      category: "Usage Information",
      examples: ["Pages visited", "Features used", "Search queries", "Time spent", "Interactions"],
      purpose: "To analyze usage patterns, improve user experience, and develop new features"
    },
    {
      category: "Communication Data",
      examples: ["Support tickets", "Feedback", "Survey responses", "Marketing preferences"],
      purpose: "To provide customer support, improve our services, and send relevant communications"
    }
  ];

  const dataSharing = [
    {
      category: "Service Providers",
      description: "We share data with trusted third-party service providers who help us operate our platform",
      examples: ["Cloud hosting providers", "Payment processors", "Analytics services", "Customer support tools"]
    },
    {
      category: "Legal Requirements",
      description: "We may disclose data when required by law or to protect our rights and safety",
      examples: ["Court orders", "Government requests", "Legal proceedings", "Security investigations"]
    },
    {
      category: "Business Transfers",
      description: "In the event of a merger, acquisition, or sale of assets, data may be transferred",
      examples: ["Company restructuring", "Asset sales", "Mergers and acquisitions"]
    },
    {
      category: "With Your Consent",
      description: "We may share data with third parties when you explicitly consent",
      examples: ["Marketing partnerships", "Integration services", "Third-party applications"]
    }
  ];

  const userRights = [
    {
      right: "Access",
      description: "Request a copy of the personal data we hold about you",
      icon: <Eye className="h-5 w-5" />
    },
    {
      right: "Correction",
      description: "Request correction of inaccurate or incomplete data",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      right: "Deletion",
      description: "Request deletion of your personal data",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      right: "Portability",
      description: "Request transfer of your data to another service",
      icon: <Globe className="h-5 w-5" />
    },
    {
      right: "Restriction",
      description: "Request limitation of data processing",
      icon: <Lock className="h-5 w-5" />
    },
    {
      right: "Objection",
      description: "Object to certain types of data processing",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const securityMeasures = [
    "Encryption of data in transit and at rest",
    "Regular security audits and penetration testing",
    "Access controls and authentication mechanisms",
    "Employee training on data protection",
    "Incident response and breach notification procedures",
    "Regular backups and disaster recovery planning"
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="flex items-center justify-center space-x-4 text-zion-slate-light">
            <Calendar className="h-5 w-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#overview" className="text-zion-cyan hover:text-zion-purple-light transition-colors">1. Overview</a>
              <a href="#data-collection" className="text-zion-cyan hover:text-zion-purple-light transition-colors">2. Data Collection</a>
              <a href="#data-use" className="text-zion-cyan hover:text-zion-purple-light transition-colors">3. How We Use Data</a>
              <a href="#data-sharing" className="text-zion-cyan hover:text-zion-purple-light transition-colors">4. Data Sharing</a>
              <a href="#data-security" className="text-zion-cyan hover:text-zion-purple-light transition-colors">5. Data Security</a>
              <a href="#user-rights" className="text-zion-cyan hover:text-zion-purple-light transition-colors">6. Your Rights</a>
              <a href="#cookies" className="text-zion-cyan hover:text-zion-purple-light transition-colors">7. Cookies & Tracking</a>
              <a href="#children" className="text-zion-cyan hover:text-zion-purple-light transition-colors">8. Children's Privacy</a>
              <a href="#international" className="text-zion-cyan hover:text-zion-purple-light transition-colors">9. International Transfers</a>
              <a href="#changes" className="text-zion-cyan hover:text-zion-purple-light transition-colors">10. Policy Changes</a>
              <a href="#contact" className="text-zion-cyan hover:text-zion-purple-light transition-colors">11. Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">1. Overview</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our website, services, and applications.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p>
                This policy applies to all users of our services, including customers, partners, and visitors 
                to our website. It covers both online and offline interactions with Zion Tech Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section id="data-collection" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2. Data Collection</h2>
            <p className="text-zion-slate-light mb-8">
              We collect various types of information to provide and improve our services. Here's what we collect and why:
            </p>
            
            <div className="space-y-6">
              {dataWeCollect.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.category}</h3>
                  <div className="mb-3">
                    <h4 className="font-medium text-white mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, idx) => (
                        <span key={idx} className="bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Purpose:</h4>
                    <p className="text-zion-slate-light">{item.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Use */}
      <section id="data-use" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">3. How We Use Data</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>We use the collected information for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional activities (with consent)</li>
                <li>Customer support and technical assistance</li>
                <li>Research and development of new features</li>
              </ul>
              <p>
                We will only use your personal data for the purposes for which we collected it, unless we 
                reasonably consider that we need to use it for another reason and that reason is compatible 
                with the original purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section id="data-sharing" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">4. Data Sharing and Disclosure</h2>
            <p className="text-zion-slate-light mb-8">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy:
            </p>
            
            <div className="space-y-6">
              {dataSharing.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.category}</h3>
                  <p className="text-zion-slate-light mb-3">{item.description}</p>
                  <div>
                    <h4 className="font-medium text-white mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, idx) => (
                        <span key={idx} className="bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section id="data-security" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5. Data Security</h2>
            <p className="text-zion-slate-light mb-8">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{measure}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zion-slate-light">
              Despite our security measures, no method of transmission over the internet or electronic 
              storage is 100% secure. We cannot guarantee absolute security, but we are committed to 
              protecting your information to the best of our ability.
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
=======
  );
};

export default PrivacyPage;
