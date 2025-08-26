import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
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
    }
  ];

  return (
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
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the highest standards of data security
            </p>
          </div>
          
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
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
}
