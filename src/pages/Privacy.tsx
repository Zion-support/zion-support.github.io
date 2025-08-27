import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
<<<<<<< HEAD
  Eye, 
  Database, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = 'January 15, 2025';
  const companyInfo = {
    name: 'Zion Tech Group',
    address: '123 Innovation Drive, Tech Valley, CA 94000',
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    website: 'https://ziontechgroup.com'
  };

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Account registration', 'Newsletter signup']
    },
    {
      title: 'Technical Data',
      description: 'IP address, browser type, device information, usage analytics',
      examples: ['Website analytics', 'Performance monitoring', 'Security logs']
    },
    {
      title: 'Business Information',
      description: 'Company details, project requirements, service preferences',
      examples: ['Service inquiries', 'Project consultations', 'Client communications']
    },
    {
      title: 'Communication Data',
      description: 'Email correspondence, chat logs, support tickets',
      examples: ['Customer support', 'Project updates', 'Marketing communications']
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our technology services and solutions'
    },
    {
      purpose: 'Communication',
      description: 'To respond to inquiries and provide customer support'
    },
    {
      purpose: 'Improvement',
      description: 'To enhance our services and develop new features'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud and ensure system security'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal obligations and regulatory requirements'
    },
    {
      purpose: 'Marketing',
      description: 'To send relevant updates and promotional materials (with consent)'
    }
  ];

  const dataSharing = [
    {
      category: 'Service Providers',
      description: 'Trusted third-party vendors who assist in service delivery',
      examples: ['Cloud hosting providers', 'Payment processors', 'Analytics services']
    },
    {
      category: 'Legal Requirements',
      description: 'When required by law or to protect our rights',
      examples: ['Court orders', 'Government requests', 'Legal proceedings']
    },
    {
      category: 'Business Transfers',
      description: 'In connection with business mergers or acquisitions',
      examples: ['Company sale', 'Asset transfer', 'Corporate restructuring']
    },
    {
      category: 'Consent',
      description: 'When you explicitly authorize us to share your information',
      examples: ['Partner integrations', 'Case studies', 'Testimonials']
=======
  CheckCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it"
    },
    {
      icon: Lock,
      title: "Control",
      description: "You have control over your personal data and can request changes or deletion"
>>>>>>> cursor/website-audit-and-enhancement-8260
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Privacy
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-lg text-gray-400">
              Last updated: {lastUpdated}
=======
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and handle your personal information
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
>>>>>>> cursor/website-audit-and-enhancement-8260
            </p>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Data Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect information to provide and improve our services, communicate with you, and ensure security.
=======
      {/* Privacy Principles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the highest standards of data security
>>>>>>> cursor/website-audit-and-enhancement-8260
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your information responsibly and only for purposes that benefit you and our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataUses.map((use, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {use.purpose}
                </h3>
                <p className="text-gray-400">
                  {use.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Information Sharing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We do not sell your personal information. We only share information in specific, limited circumstances.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSharing.map((share, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{share.category}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {share.description}
                </p>
                <ul className="space-y-2">
                  {share.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Name, email address, and contact information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Business information and project requirements
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Communication preferences and feedback
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Technical information about your use of our services
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Provide and improve our services
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Communicate with you about our services
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Ensure security and prevent fraud
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Comply with legal obligations
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              You have the right to:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Access your personal information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Correct inaccurate information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Request deletion of your information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Object to processing of your information
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Data Security Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, access controls, and regular security audits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    End-to-end encryption for sensitive data
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Regular security assessments and penetration testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Employee training on data protection
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions about this privacy policy or want to exercise your data rights, 
                  please contact our privacy team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Contact Privacy Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates & Changes */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Policy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the new policy on our website.
            </p>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-blue-400 font-semibold">Important Notice</span>
              </div>
              <p className="text-gray-300 text-center">
                This privacy policy was last updated on <strong>{lastUpdated}</strong>. 
                Please review it periodically to stay informed about how we protect your information.
              </p>
            </div>
          </motion.div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help. Contact us with any privacy-related questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/terms"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Terms of Service
            </Link>
          </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
        </div>
      </section>
    </div>
  );
};

export default Privacy;
