import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Scale,
  Gavel,
  BookOpen,
  Lock,
  RefreshCw,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export function TermsOfServicePage() {
  const lastUpdated = 'January 15, 2024';
  const effectiveDate = 'January 15, 2024';

  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      description: 'Custom AI model development, machine learning solutions, and AI consulting services.',
      includes: ['Model development', 'Data analysis', 'AI integration', 'Training & support']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and security consulting.',
      includes: ['Security assessments', 'Threat monitoring', 'Incident response', 'Compliance consulting']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Cloud migration, infrastructure management, and DevOps automation services.',
      includes: ['Cloud migration', 'Infrastructure setup', 'DevOps automation', 'Monitoring & maintenance']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation services.',
      includes: ['Strategy consulting', 'Process optimization', 'Technology implementation', 'Change management']
    }
  ];

  const userObligations = [
    {
      icon: CheckCircle,
      title: 'Provide Accurate Information',
      description: 'Provide accurate, complete, and up-to-date information when using our services.'
    },
    {
      icon: CheckCircle,
      title: 'Maintain Security',
      description: 'Maintain the security of your account credentials and notify us of any unauthorized use.'
    },
    {
      icon: CheckCircle,
      title: 'Comply with Laws',
      description: 'Use our services in compliance with applicable laws, regulations, and these terms.'
    },
    {
      icon: CheckCircle,
      title: 'Respect Intellectual Property',
      description: 'Respect our intellectual property rights and the rights of third parties.'
    },
    {
      icon: XCircle,
      title: 'No Misuse',
      description: 'Do not use our services for illegal, harmful, or unauthorized purposes.'
    },
    {
      icon: XCircle,
      title: 'No Reverse Engineering',
      description: 'Do not attempt to reverse engineer, decompile, or disassemble our services.'
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or networks',
    'Interfering with or disrupting the operation of our services',
    'Transmitting viruses, malware, or other harmful code',
    'Engaging in data mining or scraping without permission',
    'Violating intellectual property rights or proprietary rights',
    'Engaging in fraudulent, deceptive, or illegal activities',
    'Harassing, threatening, or intimidating other users',
    'Violating applicable laws or regulations'
  ];

  const intellectualProperty = [
    {
      title: 'Our Rights',
      description: 'All content, software, and technology used in our services are owned by Zion Tech Group or our licensors.',
      includes: ['Software code', 'Documentation', 'Designs', 'Branding', 'Trade secrets']
    },
    {
      title: 'Your Rights',
      description: 'You retain ownership of your data and content, and we grant you a limited license to use our services.',
      includes: ['Your data ownership', 'Limited service license', 'Fair use rights']
    },
    {
      title: 'Third-Party Rights',
      description: 'Some services may include third-party software or content subject to their respective licenses.',
      includes: ['Open source software', 'Third-party APIs', 'Licensed content']
    }
  ];

  const paymentTerms = [
    {
      title: 'Service Fees',
      description: 'Fees are charged based on the service plan selected and usage metrics.',
      details: ['Monthly/annual billing cycles', 'Usage-based pricing', 'Additional service fees']
    },
    {
      title: 'Payment Methods',
      description: 'We accept various payment methods including credit cards, bank transfers, and corporate accounts.',
      details: ['Credit/debit cards', 'Bank transfers', 'Corporate billing', 'Invoicing']
    },
    {
      title: 'Late Payments',
      description: 'Late payments may result in service suspension and additional fees.',
      details: ['Payment due dates', 'Late payment fees', 'Service suspension', 'Collection procedures']
    }
  ];

  const terminationConditions = [
    {
      title: 'Termination by You',
      description: 'You may terminate your account at any time by providing written notice.',
      process: ['Submit written notice', 'Data export period', 'Account closure', 'Final billing']
    },
    {
      title: 'Termination by Us',
      description: 'We may terminate your account for violations of these terms or other serious misconduct.',
      process: ['Notice of violation', 'Opportunity to cure', 'Account termination', 'Data handling']
    },
    {
      title: 'Effect of Termination',
      description: 'Upon termination, your access to services will cease and data will be handled according to our policies.',
      process: ['Service access revoked', 'Data retention period', 'Final data export', 'Account deletion']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Service Terms and Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service, usage policies, and service conditions. Understand your rights and obligations when using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, usage policies, legal terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms-of-service" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms govern your use of Zion Tech Group's services. 
              Please read them carefully before using our services.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last Updated: {lastUpdated}
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Effective Date: {effectiveDate}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Agreement Overview</h2>
              <p className="text-xl text-gray-300">
                By accessing or using Zion Tech Group's services, you agree to be bound by these Terms of Service. 
                These terms constitute a legally binding agreement between you and Zion Tech Group.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Legal Agreement</h3>
                  <p className="text-gray-300">
                    These Terms of Service form a legally binding contract between you and Zion Tech Group. 
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zion Tech Group provides a comprehensive range of technology services and solutions 
              to help businesses innovate and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Includes:</h4>
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Your Obligations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities and obligations 
              that help ensure a safe and productive environment for all users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  obligation.icon === CheckCircle 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                    : 'bg-gradient-to-r from-red-500 to-pink-600'
                }`}>
                  <obligation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{obligation.title}</h3>
                <p className="text-gray-300 text-center text-sm">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Prohibited Activities</h2>
              <p className="text-xl text-gray-300">
                To maintain a secure and professional environment, certain activities are strictly prohibited 
                when using our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-red-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Strictly Forbidden</h3>
                  <p className="text-gray-300">Violation of these prohibitions may result in immediate account termination</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Intellectual Property Rights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding intellectual property rights is crucial for both parties. 
              This section clarifies ownership and usage rights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {intellectualProperty.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{item.description}</p>
                <div className="space-y-2">
                  {item.includes.map((include, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {include}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Payment Terms</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clear payment terms ensure a smooth business relationship. 
              Understand our billing practices and payment requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3 text-center">{term.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{term.description}</p>
                <div className="space-y-2">
                  {term.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Termination & Cancellation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand the conditions under which services may be terminated 
              and the process for account cancellation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {terminationConditions.map((condition, index) => (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3 text-center">{condition.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{condition.description}</p>
                <div className="space-y-2">
                  {condition.process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitation of Liability Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Limitation of Liability</h2>
              <p className="text-xl text-gray-300">
                This section outlines the extent of our liability and your responsibilities 
                when using our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Liability Limitations</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 mb-2">
                        <strong>Service Availability:</strong> We strive for high availability but do not guarantee uninterrupted service.
                      </p>
                      <p className="text-gray-300 text-sm">Scheduled maintenance and unforeseen circumstances may affect service availability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 mb-2">
                        <strong>Data Loss:</strong> While we implement robust backup systems, you are responsible for maintaining your own backups.
                      </p>
                      <p className="text-gray-300 text-sm">We recommend regular data backups and testing of recovery procedures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 mb-2">
                        <strong>Maximum Liability:</strong> Our total liability is limited to the amount paid for services in the 12 months preceding the claim.
                      </p>
                      <p className="text-gray-300 text-sm">This limitation applies to all claims regardless of the legal theory.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Exclusions</h3>
                <p className="text-gray-300 mb-4">
                  The following damages are excluded from our liability:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Indirect damages
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Consequential damages
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Lost profits
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Data loss
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Business interruption
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Third-party claims
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Governing Law & Disputes</h2>
              <p className="text-xl text-gray-300">
                This section specifies the legal framework and dispute resolution process 
                for any issues that may arise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Governing Law</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Gavel className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Delaware law governs these terms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Federal courts have jurisdiction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">Venue in Delaware courts</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Dispute Resolution</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Good faith negotiations first</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Mediation if needed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Legal action as last resort</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?</h2>
              <p className="text-xl text-gray-300">
                If you have questions about these Terms of Service or need clarification on any provision, 
                please contact our legal team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-cyan-400 font-medium">legal@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">For legal inquiries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm mt-2">Middletown, DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Terms Updates</h2>
              <p className="text-xl text-gray-300">
                We may update these Terms of Service from time to time to reflect changes in our services, 
                legal requirements, or business practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Stay Informed</h3>
                  <p className="text-gray-300">We will notify you of any material changes to these terms</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Notification Methods</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Email notifications
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Website announcements
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Service notifications
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Your Responsibility</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Review updated terms
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Accept new terms
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Contact us with questions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}