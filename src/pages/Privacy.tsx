import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  FileText,
  Settings,
  Trash2,
  Download,
  ExternalLink
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "January 15, 2024";
  const effectiveDate = "January 15, 2024";

  const dataCategories = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personal Information",
      description: "Name, email address, phone number, and company information",
      examples: ["Full name", "Email address", "Phone number", "Company name", "Job title"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Usage Data",
      description: "Information about how you interact with our services",
      examples: ["Website visits", "Feature usage", "Error logs", "Performance metrics"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Technical Data",
      description: "Device and browser information",
      examples: ["IP address", "Browser type", "Device information", "Operating system"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Communication Data",
      description: "Emails, support tickets, and customer service interactions",
      examples: ["Support emails", "Chat transcripts", "Feedback submissions", "Survey responses"]
    }
  ];

  const dataUses = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Service Delivery",
      description: "To provide and maintain our services, process transactions, and deliver customer support"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Service Improvement",
      description: "To analyze usage patterns, improve our services, and develop new features"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Communication",
      description: "To send important updates, respond to inquiries, and provide customer support"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "To protect against fraud, ensure security, and comply with legal obligations"
    }
  ];

  const dataSharing = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Service Providers",
      description: "Third-party vendors who help us deliver our services (hosting, analytics, support)",
      examples: ["Cloud hosting providers", "Analytics services", "Customer support tools"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Legal Requirements",
      description: "When required by law or to protect our rights and safety",
      examples: ["Court orders", "Government requests", "Legal proceedings"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Business Transfers",
      description: "In connection with a merger, acquisition, or sale of assets",
      examples: ["Company merger", "Asset sale", "Business reorganization"]
    }
  ];

  const userRights = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Access",
      description: "Request a copy of your personal data that we hold"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Correction",
      description: "Request correction of inaccurate or incomplete personal data"
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Deletion",
      description: "Request deletion of your personal data in certain circumstances"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Portability",
      description: "Request transfer of your data to another service provider"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Restriction",
      description: "Request restriction of processing in certain circumstances"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Objection",
      description: "Object to processing of your personal data in certain circumstances"
    }
  ];

  const securityMeasures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Access Controls",
      description: "Strict access controls and authentication mechanisms protect your data"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Backups",
      description: "Regular backups ensure data integrity and availability"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Training",
      description: "Regular security training for all employees who handle personal data"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Introduction
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or interact with us.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We use the information we collect for various purposes to provide and improve our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <div className="text-green-600 dark:text-green-400">
                      {use.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {use.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {use.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Sharing */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Information Sharing and Disclosure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We do not sell your personal information. We may share your information in limited circumstances
            </p>
          </motion.div>

          <div className="space-y-8">
            {dataSharing.map((sharing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-purple-600 dark:text-purple-400">
                      {sharing.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {sharing.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {sharing.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">Examples:</h4>
                      <ul className="space-y-1">
                        {sharing.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Your Rights and Choices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              You have certain rights regarding your personal information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {right.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {right.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {right.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Data Security
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We implement appropriate security measures to protect your personal information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <div className="text-green-600 dark:text-green-400">
                      {measure.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {measure.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {measure.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Data Protection Officer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For specific privacy concerns or to exercise your data rights, you may also contact our Data Protection Officer directly at the email address above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Request Data Report
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
