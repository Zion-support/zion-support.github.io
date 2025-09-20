import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { Shield, Lock, Eye, Database, User, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable data protection laws."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 20, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li className="flex items-start">
                  <User className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                  Personal information (name, email address, phone number)
                </li>
                <li className="flex items-start">
                  <Database className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                  Business information (company name, job title, industry)
                </li>
                <li className="flex items-start">
                  <Eye className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                  Usage data (how you interact with our services)
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                  Communication preferences and support requests
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-8 h-8 text-cyan-400 mr-3" />
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Provide and deliver our AI and technology services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send technical notices, updates, and support messages</li>
                <li>• Respond to your comments and questions</li>
                <li>• Improve our services and develop new features</li>
                <li>• Monitor and analyze usage and trends</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Database className="w-8 h-8 text-cyan-400 mr-3" />
                Information Sharing
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and prevent fraud</li>
                <li>• With service providers who assist in our operations</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                Data Security
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-8 h-8 text-cyan-400 mr-3" />
                Your Rights
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You have the right to:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Object to processing of your data</li>
                <li>• Data portability</li>
                <li>• Withdraw consent at any time</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-8 h-8 text-cyan-400 mr-3" />
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">Address:</span>
                </div>
                <p className="text-gray-300 mb-4 ml-8">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
                
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">Email:</span>
                </div>
                <p className="text-gray-300 mb-4 ml-8">privacy@ziontechgroup.com</p>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white font-medium">Phone:</span>
                </div>
                <p className="text-gray-300 ml-8">+1 302 464 0950</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}