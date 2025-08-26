import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

export default function Terms() {
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using the services provided by Zion Tech Group ("we," "us," or "our"), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. Description of Services</h2>
            <p className="text-gray-300 mb-6">
              Zion Tech Group provides technology consulting, development, and digital transformation services, including:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                AI and machine learning solutions
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Cloud infrastructure and DevOps services
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Cybersecurity and data protection
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Digital transformation consulting
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-6">
              You agree to:
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Provide accurate and complete information
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Maintain the security of your account credentials
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Use our services in compliance with applicable laws
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                Not engage in any unauthorized or harmful activities
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-6">
              All content, features, and functionality of our services are owned by Zion Tech Group 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">5. Privacy and Data Protection</h2>
            <p className="text-gray-300 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of our services.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages resulting from your 
              use of our services.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">7. Termination</h2>
            <p className="text-gray-300 mb-6">
              We may terminate or suspend your access to our services immediately, without prior 
              notice, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">8. Governing Law</h2>
            <p className="text-gray-300 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of Delaware, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">9. Changes to Terms</h2>
            <p className="text-gray-300 mb-6">
              We reserve the right to modify or replace these Terms at any time. If a revision is 
              material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">10. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help clarify any questions about our terms of service
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
              to="/privacy"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
