<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileText, CheckCircle, AlertTriangle, Users, Globe, Scale } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Terms = () => {
  const keyTerms = [
    {
      title: "Acceptance",
      description: "By using our services, you agree to these terms and conditions",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      title: "Services",
      description: "We provide technology solutions and consulting services",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Payment",
      description: "Fees are due according to agreed payment schedules",
      icon: Scale,
      color: "text-purple-400"
    },
    {
      title: "Liability",
      description: "Limitations on our liability as outlined in these terms",
      icon: AlertTriangle,
      color: "text-orange-400"
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
    }
  ];

  const prohibitedActivities = [
<<<<<<< HEAD
    "Using our services for illegal purposes",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with service availability or performance",
    "Violating intellectual property rights",
    "Sharing confidential information without authorization",
    "Engaging in fraudulent or deceptive practices"
  ];

  const userObligations = [
    "Provide accurate and complete information",
    "Maintain the security of your account credentials",
    "Comply with all applicable laws and regulations",
    "Use services only for intended purposes",
    "Respect intellectual property rights",
    "Report security concerns promptly"
  ];
=======
import { SEO } from "@/components/SEO";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

  return (
    <>
<<<<<<< HEAD
      <SEO 
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's terms of service to understand the rules and conditions for using our technology services and solutions."
        keywords="terms of service, terms and conditions, legal, Zion Tech Group, service agreement"
=======
      <SEO
        title="Terms of Service"
        description="The terms and conditions for using the Zion platform."
        canonical="https://ziontechgroup.com/terms"
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
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
                <FileText className="w-4 h-4 mr-2" />
                Terms of Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms of
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                These terms govern your use of Zion Tech Group's services. Please read them carefully 
                to understand your rights and obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#terms-content"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Read Terms
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

        {/* Key Terms */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Key Terms
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Important concepts and conditions that govern our service relationship.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyTerms.map((term, index) => {
                const IconComponent = term.icon;
                return (
                  <motion.div
                    key={term.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${term.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {term.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {term.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section id="terms-content" className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zion-blue border border-zion-cyan/20 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Terms of Service</h2>
                <p className="text-zion-slate-light mb-6">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>

                <div className="space-y-6 text-zion-slate-light">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h3>
                    <p>
                      By accessing or using Zion Tech Group's services, you agree to be bound by these Terms of Service. 
                      If you disagree with any part of these terms, you may not access our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2. Description of Services</h3>
                    <p>
                      Zion Tech Group provides technology consulting, software development, AI solutions, cloud services, 
                      and digital transformation services. Our services are designed to help businesses leverage technology 
                      for growth and efficiency.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3. User Accounts</h3>
                    <p>
                      When you create an account with us, you must provide accurate and complete information. You are 
                      responsible for safeguarding your account credentials and for all activities that occur under your account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h3>
                    <p>You agree to use our services only for lawful purposes and in accordance with these terms. You agree not to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {prohibitedActivities.map((activity, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">5. User Obligations</h3>
                    <p>As a user of our services, you agree to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {userObligations.map((obligation, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {obligation}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">6. Payment Terms</h3>
                    <p>
                      Service fees are due according to the payment schedule agreed upon in your service agreement. 
                      Late payments may result in service suspension or termination. All fees are non-refundable unless 
                      otherwise specified.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h3>
                    <p>
                      Our services and content are protected by intellectual property laws. You retain ownership of 
                      your content, but grant us a license to use it for service delivery. We retain ownership of 
                      our proprietary technology and methodologies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">8. Confidentiality</h3>
                    <p>
                      Both parties agree to maintain the confidentiality of proprietary and sensitive information 
                      shared during our business relationship. This obligation survives the termination of services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                      incidental, special, consequential, or punitive damages arising from your use of our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">10. Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses 
                      arising from your use of our services or violation of these terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">11. Service Availability</h3>
                    <p>
                      We strive to maintain high service availability but do not guarantee uninterrupted access. 
                      We may perform maintenance or updates that temporarily affect service availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">12. Termination</h3>
                    <p>
                      Either party may terminate services with written notice according to the terms of your service 
                      agreement. Upon termination, you will lose access to our services and any stored data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">13. Governing Law</h3>
                    <p>
                      These terms are governed by the laws of the State of Delaware, United States. Any disputes 
                      will be resolved in the courts of Delaware.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">14. Changes to Terms</h3>
                    <p>
                      We may modify these terms at any time. We will notify you of significant changes via email 
                      or through our website. Continued use of services constitutes acceptance of modified terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">15. Contact Information</h3>
                    <p>
                      For questions about these terms or our services, please contact us:
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
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                We're here to help clarify any questions about our terms of service or policies.
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
                  to="/privacy"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
<<<<<<< HEAD
              <span>Last Updated:</span>
              <span className="font-semibold">{lastUpdated}</span>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
            </div>
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
                Agreement to Terms
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Zion Tech Group website, 
                services, and applications (collectively, the "Services"). By accessing or using 
                our Services, you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                If you do not agree with any of these terms, you are prohibited from using or 
                accessing our Services. These Terms apply to all visitors, users, and others who 
                access or use our Services.
              </p>
              <p className="text-zion-slate leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of 
                any material changes by updating the "Last Updated" date and posting the new Terms on our website.
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Key Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Key Terms and Conditions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understanding these key terms is essential for using our services. 
              Please review them carefully.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-zinc-50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <term.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3 text-center">
                  {term.title}
                </h3>
                <p className="text-zion-slate text-center">
                  {term.description}
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Prohibited Activities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Prohibited{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              The following activities are strictly prohibited when using our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prohibitedActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-400">{activity.title}</h3>
                  <p className="text-zion-slate-light">{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Termination */}
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
                Termination
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We reserve the right to terminate or suspend services under certain circumstances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termination.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{term.title}</h3>
                  <p className="text-zion-slate-light">{term.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Limitation of{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Liability
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Our liability is limited to the extent permitted by applicable law.
            </p>
            
            <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Liability Limits</h3>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, or use.
              </p>
              <p className="text-zion-slate-light">
                Our total liability shall not exceed the amount paid by you for the services in the 
                twelve months preceding the claim.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Governing{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Law
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              These terms are governed by and construed in accordance with applicable laws.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Jurisdiction</h3>
                <p className="text-zion-slate-light">
                  These terms are governed by the laws of the State of Delaware, United States. 
                  Any disputes shall be resolved in the courts of Delaware.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Dispute Resolution</h3>
                <p className="text-zion-slate-light">
                  We encourage resolving disputes through direct communication. If resolution cannot 
                  be reached, disputes may be resolved through arbitration or court proceedings.
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Description of Services
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Zion Tech Group provides technology solutions and services including but not limited to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Custom software development and consulting services
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  AI and machine learning solutions
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Cloud infrastructure and DevOps services
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Cybersecurity and compliance solutions
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Digital transformation consulting
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Marketplace platform for technology services
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our Services 
                at any time without notice. We shall not be liable to you or any third party for 
                any modification, suspension, or discontinuance of the Services.
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                User Accounts and Registration
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                To access certain features of our Services, you may be required to create an account. 
                When creating an account, you must provide accurate, current, and complete information.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                You are responsible for:
              </p>
              <ul className="space-y-2 mb-6">
                {userObligations.map((obligation, index) => (
                  <li key={index} className="flex items-start text-zion-slate">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    {obligation}
                  </li>
                ))}
              </ul>
              <p className="text-zion-slate leading-relaxed">
                You may not share your account credentials with others or allow others to access 
                your account. You are responsible for all activities that occur under your account.
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Acceptable Use */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Acceptable Use Policy
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. 
                You agree not to use our Services:
              </p>
              <ul className="space-y-2 mb-6">
                {prohibitedActivities.map((activity, index) => (
                  <li key={index} className="flex items-start text-zion-slate">
                    <XCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
              <p className="text-zion-slate leading-relaxed">
                Violation of this Acceptable Use Policy may result in immediate termination of your 
                account and access to our Services, as well as potential legal action.
              </p>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Intellectual Property */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Intellectual Property Rights
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                The Services and their original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The Services are protected 
                by copyright, trademark, and other laws.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                You retain ownership of any content you submit, post, or display on or through our Services. 
                By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                reproduce, modify, and distribute such content in connection with our Services.
              </p>
              <p className="text-zion-slate leading-relaxed">
                You may not use our trademarks, service marks, or trade names without our prior written consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Limitations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Limitations and Disclaimers
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understanding the limitations of our services helps set appropriate expectations 
              for what we can and cannot provide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceLimitations.map((limitation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {limitation.title}
                </h3>
                <p className="text-zion-slate">
                  {limitation.description}
                </p>
              </div>
            ))}
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
          </div>
        </div>
      </section>

      {/* Privacy and Data */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Privacy and Data Protection
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                By using our Services, you consent to the collection and use of information as 
                outlined in our Privacy Policy. You acknowledge that we may process your personal 
                data in accordance with our Privacy Policy.
              </p>
              <p className="text-zion-slate leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="mt-6">
                <Link 
                  to="/privacy" 
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors"
                >
                  View Privacy Policy
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Termination and Account Cancellation
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understanding when and how services may be terminated helps ensure 
              a smooth experience with our platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {terminationConditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {condition.title}
                </h3>
                <p className="text-zion-slate">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-zion-slate mb-4">
              Upon termination, your right to use the Services will cease immediately. 
              We may delete your account and all associated data at our discretion.
            </p>
=======
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
        </div>
      </section>

      {/* Termination */}
      <section id="termination" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">10. Termination</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                We may terminate or suspend your account and access to our Services immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use the Services will cease immediately. If you wish to terminate 
                your account, you may simply discontinue using the Services or contact us to delete your account.
              </p>
              <p>
                <strong>Grounds for termination include:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {terminationConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive 
                termination, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">11. Disclaimers</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ZION TECH GROUP MAKES NO 
                WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES, 
                INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
              </p>
              <p>
                We do not warrant that the Services will be uninterrupted or error-free, that defects will be 
                corrected, or that the Services or the servers that make them available are free of viruses 
                or other harmful components.
              </p>
              <p>
                We do not warrant or make any representations regarding the use or the results of the use of 
                the Services in terms of their correctness, accuracy, reliability, or otherwise.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Limitation of Liability
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                To the maximum extent permitted by applicable law, Zion Tech Group shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including 
                without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Our total liability to you for any claims arising from or relating to these Terms 
                or your use of our Services shall not exceed the amount you paid us for the Services 
                in the twelve (12) months preceding the claim.
              </p>
              <p className="text-zion-slate leading-relaxed">
                Some jurisdictions do not allow the limitation or exclusion of liability for incidental 
                or consequential damages, so the above limitation may not apply to you.
=======
      <section id="limitation-liability" className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">12. Limitation of Liability</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                IN NO EVENT SHALL ZION TECH GROUP, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
                OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
                INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
              </p>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, 
                IF ANY, FOR ACCESSING OUR SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING 
                RISE TO THE CLAIM.
              </p>
              <p>
                The limitations set forth in this section will survive and apply even if any limited remedy 
                specified in these Terms is found to have failed of its essential purpose.
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                Any disputes arising from or relating to these Terms or our Services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association. 
                The arbitration shall take place in Delaware, United States.
              </p>
              <p className="text-zion-slate leading-relaxed">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit 
                with respect to any dispute arising from these Terms or our Services.
=======
      <section id="governing-law" className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">13. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-zion-slate-light">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                California, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or the Services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                The arbitration shall be conducted in San Francisco, California, and the decision of the 
                arbitrator shall be final and binding.
              </p>
              <p>
                Notwithstanding the foregoing, we may seek injunctive or other equitable relief to protect 
                our intellectual property rights in any court of competent jurisdiction.
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Changes to Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-zion-blue-dark mb-6">
                Changes to Terms of Service
              </h2>
              <p className="text-zion-slate mb-4 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-zion-slate mb-4 leading-relaxed">
                What constitutes a material change will be determined at our sole discretion. 
                We will notify users of any changes by:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Posting the new Terms on our website
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Sending email notifications to registered users
                </li>
                <li className="flex items-start text-zion-slate">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Updating the "Last Updated" date
                </li>
              </ul>
              <p className="text-zion-slate leading-relaxed">
                By continuing to use our Services after any revisions become effective, you agree to 
                be bound by the revised terms. If you do not agree to the new terms, you are no longer 
                authorized to use our Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              If you have any questions about these Terms of Service or need clarification 
              on any provision, please don't hesitate to contact us.
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
                      <div className="w-5 h-5 text-zion-cyan">
                        📧
                      </div>
                      <a 
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 text-zion-cyan">
                        📱
                      </div>
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
                    Legal Department
                  </h3>
                  <p className="text-zion-slate mb-4">
                    For legal inquiries or formal notices regarding these Terms of Service, 
                    please contact our legal department.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    Contact Legal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            By using our services, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms of Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Terms%20of%20Service%20Question"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Email Questions
            </a>
=======
      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">14. Contact Information</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">legal@ziontechgroup.com</p>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-xl border border-zion-blue-light/20">
              <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
=======
      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Questions About{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                These Terms?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              If you have questions about these terms of service, please contact us.
            </p>
            
            <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-zion-slate-light mb-2">Email:</p>
                  <a href="mailto:legal@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                    legal@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <p className="text-zion-slate-light mb-2">General Contact:</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-zion-blue-light/20">
                <p className="text-zion-slate-light">
                  <strong>Address:</strong><br />
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
  );
};

export default Terms;
=======
  );
};

export default TermsPage;
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
