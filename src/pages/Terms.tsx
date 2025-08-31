import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Download,
  ExternalLink,
  Lock,
  Eye,
  Database,
  Settings,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = "January 15, 2024";
  const effectiveDate = "January 15, 2024";

  const serviceCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Artificial intelligence solutions, machine learning models, and autonomous business platforms"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Infrastructure",
      description: "Cloud computing services, DevOps solutions, and infrastructure management"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Security solutions, threat detection, and compliance frameworks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Business process automation, digital strategy, and technology consulting"
    }
  ];

  const userObligations = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance",
      description: "Comply with all applicable laws and regulations when using our services"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Maintain the security of your account credentials and systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Acceptable Use",
      description: "Use services only for lawful purposes and in accordance with our policies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Protection",
      description: "Protect sensitive data and respect privacy rights of others"
    }
  ];

  const prohibitedActivities = [
    "Attempting to gain unauthorized access to our systems or other users' accounts",
    "Using our services to transmit malware, viruses, or other harmful code",
    "Engaging in activities that could disrupt or interfere with service performance",
    "Violating intellectual property rights or using services for illegal purposes",
    "Attempting to reverse engineer, decompile, or modify our software",
    "Using services to send spam, phishing emails, or other unwanted communications"
  ];

  const intellectualProperty = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Our Rights",
      description: "We retain all rights to our software, content, and intellectual property"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Your Rights",
      description: "You retain rights to your data and content that you provide to our services"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Licenses",
      description: "We grant you a limited, non-exclusive license to use our services"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Feedback",
      description: "You grant us rights to use feedback and suggestions for service improvement"
    }
  ];

  const paymentTerms = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Billing Cycles",
      description: "Services are billed on a monthly, quarterly, or annual basis as agreed"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Payment Methods",
      description: "We accept major credit cards, bank transfers, and other payment methods"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Late Payments",
      description: "Late payments may result in service suspension and additional fees"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Refunds",
      description: "Refund policies vary by service and are outlined in individual agreements"
    }
  ];

  const terminationConditions = [
    "Breach of these terms or applicable laws",
    "Non-payment of fees for 30 days or more",
    "Engagement in prohibited activities",
    "Violation of security policies or acceptable use guidelines",
    "Failure to comply with reasonable requests for cooperation",
    "Mutual agreement to terminate services"
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
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
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
              Agreement to Terms
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                These Terms of Service ("Terms") govern your use of the services provided by Zion Tech Group ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If you do not agree with any of these terms, you are prohibited from using or accessing our services. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Description */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Zion Tech Group provides a comprehensive range of technology services and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
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
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
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
              Your Obligations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities and obligations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userObligations.map((obligation, index) => (
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
                      {obligation.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {obligation.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {obligation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                The following activities are strictly prohibited when using our services
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Note:</strong> Violation of these prohibitions may result in immediate account termination, 
                  legal action, and reporting to appropriate authorities.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intellectual Property */}
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
              Intellectual Property Rights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Understanding the ownership and licensing of intellectual property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {intellectualProperty.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <div className="text-purple-600 dark:text-purple-400">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
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
              Payment Terms
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Understanding our billing, payment, and refund policies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentTerms.map((term, index) => (
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
                      {term.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {term.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {term.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Termination
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Understanding when and how services may be terminated
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Grounds for Termination
              </h3>
              <div className="space-y-4 mb-8">
                {terminationConditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{condition}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Termination Process
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Upon termination, you will lose access to our services. We may retain certain information 
                  as required by law or for legitimate business purposes. Refunds will be processed according 
                  to our refund policy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Limitation of Liability
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Understanding the extent of our liability and your rights
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    General Limitation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to loss of 
                    profits, data, or use.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Maximum Liability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our total liability to you for any claims arising from the use of our services shall not exceed 
                    the amount you paid for the services in the 12 months preceding the claim.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Exclusions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    These limitations do not apply to damages caused by our gross negligence or willful misconduct, 
                    or where such limitations are prohibited by applicable law.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              If you have any questions about these Terms of Service, please contact us:
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
                Legal Department
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For legal inquiries or formal notices regarding these terms, please contact our legal department 
                at the email address above with "Legal Inquiry" in the subject line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Contact Legal Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
