import React from 'react';
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
    }
  ];

  const prohibitedActivities = [
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

  return (
    <>
      <SEO 
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's terms of service to understand the rules and conditions for using our technology services and solutions."
        keywords="terms of service, terms and conditions, legal, Zion Tech Group, service agreement"
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
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
              <span>Last Updated:</span>
              <span className="font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

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
              </p>
            </div>
          </div>
        </div>
      </section>

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
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts */}
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
              </p>
            </div>
          </div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* Privacy and Data */}
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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
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
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
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
              </p>
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
  );
};

export default Terms;