import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileText, CheckCircle, AlertTriangle, Users, Globe, Scale } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Terms = () => {
  const keyTerms = [
    {
      term: "Services",
      definition: "AI-powered technology solutions, consulting, and related services provided by Zion Tech Group"
    },
    {
      term: "Client",
      definition: "Any individual or entity that uses our services or accesses our website"
    },
    {
      term: "Intellectual Property",
      definition: "All proprietary rights, including patents, copyrights, trademarks, and trade secrets"
    },
    {
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  Lock,
  Eye,
  Heart
} from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = "December 15, 2024";

  const keyTerms = [
    {
      term: "Services",
      definition: "All products, services, and features provided by Zion Tech Group through our platform"
    },
    {
      term: "User",
      definition: "Any individual or entity that accesses or uses our services"
    },
    {
      term: "Content",
      definition: "Any information, data, text, software, graphics, or other materials uploaded or shared"
    },
    {
      term: "Platform",
      definition: "Our website, applications, and any related technology infrastructure"
    }
  ];

  const userObligations = [
    {
      title: "Account Security",
      description: "Maintain the confidentiality of your account credentials and notify us of any unauthorized access",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "Acceptable Use",
      description: "Use our services only for lawful purposes and in accordance with these terms",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: "Content Standards",
      description: "Ensure all content you upload complies with our community guidelines and applicable laws",
      icon: <Eye className="h-5 w-5" />
    },
    {
      title: "Respectful Behavior",
      description: "Treat other users with respect and refrain from harassment or discriminatory behavior",
      icon: <Heart className="h-5 w-5" />
    }
  ];

  const prohibitedActivities = [
      term: "Confidential Information",
      definition: "Non-public information shared between parties during business relationships"
    }
  ];

  const userObligations = [
    "Provide accurate and complete information",
    "Use services only for lawful purposes",
    "Maintain security of account credentials",
    "Comply with all applicable laws and regulations",
    "Respect intellectual property rights",
    "Report security vulnerabilities promptly"
  ];

  const serviceTerms = [
    {
      title: "Service Delivery",
      description: "We commit to delivering services according to agreed specifications and timelines"
    },
    {
      title: "Quality Assurance",
      description: "All services undergo rigorous testing and quality control processes"
    },
    {
      title: "Support & Maintenance",
      description: "We provide ongoing support and maintenance for all delivered solutions"
    },
    {
      title: "Updates & Improvements",
      description: "Regular updates and improvements are included in our service packages"
    }
  ];

  const limitations = [
    {
      title: "Service Availability",
      description: "Services are provided on an 'as-is' basis with 99.9% uptime commitment"
    },
    {
      title: "Data Backup",
      description: "Clients are responsible for maintaining their own data backups"
    },
    {
      title: "Third-party Services",
      description: "We are not responsible for third-party services or integrations"
    },
    {
      title: "Force Majeure",
      description: "We are not liable for delays due to circumstances beyond our control"
    }
  ];
=======
import { SEO } from "@/components/SEO";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";

  return (
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://ziontechgroup.com/terms"
=======
=======
=======
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service to understand the conditions for using Zion Tech Group services. Clear guidelines for our business relationship."
        keywords="terms of service, terms and conditions, legal, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Please read these terms carefully before using our services. They outline the rules and guidelines for our business relationship.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-5 w-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's services, website, and any related applications. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-300">
              If you disagree with any part of these terms, you may not access our services. We reserve the right to modify these terms at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Key Terms & Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{item.term}</h3>
                <p className="text-gray-300">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Obligations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userObligations.map((obligation, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{obligation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Service Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTerms.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Service Limitations & Disclaimers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{limitation.title}</h3>
                <p className="text-gray-300">{limitation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about these Terms of Service, please contact our legal team:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400">legal@ziontechgroup.com</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400">+1 (302) 464-0950</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            By using our services, you agree to these terms. Contact us if you need any clarification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Legal Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Privacy Policy
            </button>
          </div>
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  Users, 
  Globe, 
  Lock, 
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Terms = () => {
  const lastUpdated = 'January 17, 2025';

  const keyTerms = [
    {
      icon: Users,
      title: 'User Accounts',
      description: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
    },
    {
      icon: Shield,
      title: 'Acceptable Use',
      description: 'You agree to use our services only for lawful purposes and in accordance with these Terms of Service.'
    },
    {
      icon: Lock,
      title: 'Intellectual Property',
      description: 'All content, features, and functionality are owned by Zion Tech Group and protected by copyright, trademark, and other laws.'
    },
    {
      icon: Globe,
      title: 'Service Availability',
      description: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.'
    }
  ];

  const prohibitedActivities = [
    'Violating any applicable laws or regulations',
    'Infringing on intellectual property rights',
    'Attempting to gain unauthorized access to our systems',
    'Transmitting malware, viruses, or harmful code',
    'Engaging in spam, phishing, or fraudulent activities',
    'Interfering with service operation or other users',
    'Collecting personal information without consent',
    'Using services for illegal or harmful purposes'
  ];

  const userObligations = [
    'Provide accurate and complete information',
    'Maintain the security of your account',
    'Comply with all applicable laws and regulations',
    'Respect intellectual property rights',
    'Report security vulnerabilities responsibly',
    'Use services in accordance with these terms',
    'Maintain appropriate backup of your data',
    'Pay all applicable fees and charges'
  ];

  const serviceLimitations = [
    {
      title: 'Availability',
      description: 'Services are provided "as is" and "as available" without warranties of any kind.'
    },
    {
      title: 'Performance',
      description: 'We do not guarantee specific performance levels or response times for our services.'
    },
    {
      title: 'Compatibility',
      description: 'Services may not be compatible with all devices, browsers, or operating systems.'
    },
    {
      title: 'Third-Party Services',
      description: 'We are not responsible for third-party services or content accessed through our platform.'
    }
  ];

  const terminationConditions = [
    {
      title: 'Breach of Terms',
      description: 'We may terminate or suspend access for violations of these terms.'
    },
    {
      title: 'Non-Payment',
      description: 'Services may be suspended for failure to pay applicable fees.'
    },
    {
      title: 'Inactivity',
      description: 'Accounts may be deactivated after extended periods of inactivity.'
    },
    {
      title: 'Legal Requirements',
      description: 'We may terminate services to comply with legal obligations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
=======
import { motion } from 'framer-motion';
import { Shield, FileText, Users, Globe, Lock, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const Terms = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to be bound by these terms and conditions.',
      items: [
        'You must be at least 18 years old',
        'You agree to comply with all applicable laws',
        'You accept responsibility for your account',
        'You agree to our privacy policy'
      ],
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Service Description',
      description: 'We provide technology solutions, consulting, and digital transformation services.',
      items: [
        'AI and machine learning services',
        'Cloud and DevOps solutions',
        'Enterprise technology consulting',
        'Digital transformation services'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'User Responsibilities',
      description: 'Users are responsible for maintaining the security and integrity of their accounts.',
      items: [
        'Keep login credentials secure',
        'Report security incidents',
        'Comply with usage policies',
        'Respect intellectual property rights'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intellectual Property',
      description: 'All content and services are protected by intellectual property laws.',
      items: [
        'Our trademarks and copyrights',
        'Proprietary technology and software',
        'Service methodologies and processes',
        'Confidential business information'
      ],
      icon: Lock,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const prohibitedActivities = [
    {
      title: 'Unauthorized Access',
      description: 'Attempting to gain unauthorized access to our systems or services',
      icon: AlertTriangle
    },
    {
      title: 'Data Misuse',
      description: 'Using our services to store or transmit malicious code or data',
      icon: Shield
    },
    {
      title: 'Service Interference',
      description: 'Interfering with the proper functioning of our services',
      icon: Globe
    },
    {
      title: 'Illegal Activities',
      description: 'Using our services for any illegal or unauthorized purpose',
      icon: FileText
    }
  ];

  const termination = [
    {
      title: 'Breach of Terms',
      description: 'We may terminate access for violations of these terms',
      icon: AlertTriangle
    },
    {
      title: 'Non-Payment',
      description: 'Services may be suspended for non-payment of fees',
      icon: CheckCircle
    },
    {
      title: 'Legal Requirements',
      description: 'We may terminate services to comply with legal obligations',
      icon: Shield
    },
    {
      title: 'Business Changes',
      description: 'Services may be discontinued due to business decisions',
      icon: Globe
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
              Terms of{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
    "Violating any applicable laws or regulations",
    "Infringing on intellectual property rights",
    "Transmitting malware, viruses, or harmful code",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with the proper functioning of our services",
    "Collecting personal information without consent",
    "Engaging in fraudulent or deceptive practices",
    "Spamming or sending unsolicited communications"
  ];

  const intellectualProperty = [
    {
      category: "Our IP",
      description: "All content, trademarks, logos, and software on our platform are owned by Zion Tech Group",
      rights: ["Copyright protection", "Trademark rights", "Patent rights", "Trade secret protection"]
    },
    {
      category: "Your Content",
      description: "You retain ownership of content you upload, but grant us a license to use it",
      rights: ["Non-exclusive license", "Worldwide distribution", "Modification rights", "Commercial use"]
    },
    {
      category: "Third-Party IP",
      description: "We respect third-party intellectual property and expect users to do the same",
      rights: ["Copyright compliance", "Trademark respect", "License adherence", "Attribution requirements"]
    }
  ];

  const privacyAndData = [
    "We collect and process personal data as described in our Privacy Policy",
    "By using our services, you consent to our data practices",
    "We implement appropriate security measures to protect your information",
    "We may share data with service providers and as required by law",
    "You have rights regarding your personal data as outlined in our Privacy Policy",
    "We retain data for as long as necessary to provide our services"
  ];

  const terminationConditions = [
    "Breach of these terms of service",
    "Violation of applicable laws or regulations",
    "Engagement in fraudulent or harmful activities",
    "Non-payment of applicable fees",
    "Extended period of account inactivity",
    "Request for account deletion by the user"
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <FileText className="h-10 w-10 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            These terms govern your use of Zion Tech Group's services. By using our platform, 
            you agree to be bound by these terms and our Privacy Policy.
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
              <a href="#definitions" className="text-zion-cyan hover:text-zion-purple-light transition-colors">2. Definitions</a>
              <a href="#acceptance" className="text-zion-cyan hover:text-zion-purple-light transition-colors">3. Acceptance of Terms</a>
              <a href="#services" className="text-zion-cyan hover:text-zion-purple-light transition-colors">4. Description of Services</a>
              <a href="#user-accounts" className="text-zion-cyan hover:text-zion-purple-light transition-colors">5. User Accounts</a>
              <a href="#user-obligations" className="text-zion-cyan hover:text-zion-purple-light transition-colors">6. User Obligations</a>
              <a href="#prohibited-activities" className="text-zion-cyan hover:text-zion-purple-light transition-colors">7. Prohibited Activities</a>
              <a href="#intellectual-property" className="text-zion-cyan hover:text-zion-purple-light transition-colors">8. Intellectual Property</a>
              <a href="#privacy-data" className="text-zion-cyan hover:text-zion-purple-light transition-colors">9. Privacy & Data</a>
              <a href="#termination" className="text-zion-cyan hover:text-zion-purple-light transition-colors">10. Termination</a>
              <a href="#disclaimers" className="text-zion-cyan hover:text-zion-purple-light transition-colors">11. Disclaimers</a>
              <a href="#limitation-liability" className="text-zion-cyan hover:text-zion-purple-light transition-colors">12. Limitation of Liability</a>
              <a href="#governing-law" className="text-zion-cyan hover:text-zion-purple-light transition-colors">13. Governing Law</a>
              <a href="#contact" className="text-zion-cyan hover:text-zion-purple-light transition-colors">14. Contact Information</a>
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
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your access to and use of 
                our website, applications, and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                If you disagree with any part of these terms, you may not access our Services.
              </p>
              <p>
                These Terms apply to all users of our Services, including without limitation users who are 
                browsers, vendors, customers, merchants, and contributors of content.
              </p>
              <p>
                We reserve the right to update or change these Terms at any time. Your continued use of the 
                Services following the posting of any changes constitutes acceptance of those changes.
              </p>
            </div>
          </div>
        </div>
      </section>

              <FileText className="w-6 h-6" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Service{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Terms
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group services and outline the rights 
              and responsibilities of both parties.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => {
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
=======
      {/* Definitions */}
      <section id="definitions" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">2. Definitions</h2>
            <p className="text-zion-slate-light mb-8">
              For the purposes of these Terms, the following terms have the following meanings:
            </p>
            
            <div className="space-y-6">
              {keyTerms.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.term}</h3>
                  <p className="text-zion-slate-light">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section id="acceptance" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">3. Acceptance of Terms</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                By accessing or using our Services, you confirm that you have read, understood, and agree to 
                be bound by these Terms. If you are using our Services on behalf of a company or other legal 
                entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
              <p>
                You must be at least 18 years old to use our Services. If you are under 18, you may only use 
                our Services with the involvement and consent of a parent or guardian.
              </p>
              <p>
                If you do not agree to these Terms, you must not use our Services. Your continued use of our 
                Services constitutes acceptance of these Terms and any amendments thereto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description of Services */}
      <section id="services" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">4. Description of Services</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                Zion Tech Group provides a comprehensive platform for technology services, including but not 
                limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI and autonomous systems solutions</li>
                <li>Quantum computing infrastructure and services</li>
                <li>Cybersecurity and zero-trust architecture</li>
                <li>IT infrastructure and cloud migration services</li>
                <li>Data analytics and business intelligence</li>
                <li>Professional consulting and advisory services</li>
                <li>Marketplace for technology talent and equipment</li>
                <li>Educational resources and training programs</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time 
                with or without notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts */}
      <section id="user-accounts" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">5. User Accounts</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                To access certain features of our Services, you may be required to create an account. You are 
                responsible for maintaining the confidentiality of your account credentials and for all activities 
                that occur under your account.
              </p>
              <p>
                You agree to provide accurate, current, and complete information during the registration process 
                and to update such information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for any activities or actions under your 
                account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              <p>
                We reserve the right to refuse service, terminate accounts, or remove or edit content at our 
                sole discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section id="user-obligations" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">6. User Obligations</h2>
            <p className="text-zion-slate-light mb-8">
              As a user of our Services, you agree to comply with the following obligations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-zion-cyan">{obligation.icon}</div>
                    <h3 className="text-lg font-semibold">{obligation.title}</h3>
                  </div>
                  <p className="text-zion-slate-light">{obligation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section id="prohibited-activities" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">7. Prohibited Activities</h2>
            <p className="text-zion-slate-light mb-8">
              You agree not to engage in any of the following prohibited activities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{activity}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zion-slate-light">
              Violation of these prohibitions may result in immediate termination of your account and access 
              to our Services, and may also result in legal action.
            </p>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section id="intellectual-property" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">8. Intellectual Property Rights</h2>
            <p className="text-zion-slate-light mb-8">
              Our Services and their original content, features, and functionality are and will remain the 
              exclusive property of Zion Tech Group and its licensors.
            </p>
            
            <div className="space-y-6">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="bg-zion-blue-light/10 p-6 rounded-xl border border-zion-blue-light/20">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-3">{item.category}</h3>
                  <p className="text-zion-slate-light mb-3">{item.description}</p>
                  <div>
                    <h4 className="font-medium text-white mb-2">Key Rights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.rights.map((right, idx) => (
                        <span key={idx} className="bg-zion-blue-light/20 text-zion-slate-light px-3 py-1 rounded-full text-sm">
                          {right}
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

      {/* Privacy and Data */}
      <section id="privacy-data" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">9. Privacy and Data Protection</h2>
            <p className="text-zion-slate-light mb-8">
              Your privacy is important to us. Our collection and use of personal information is governed by 
              our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {privacyAndData.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-zion-slate-light">
              By using our Services, you consent to our collection and use of information as detailed in our 
              Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
=======
  );
};

export default TermsPage;
