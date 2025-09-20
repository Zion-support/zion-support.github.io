import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { FileText, Scale, AlertTriangle, CheckCircle, Shield, Users, Globe } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service to understand the rules and guidelines for using Zion Tech Group's AI and technology services."
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
              Terms of <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of our AI and technology services. Please read them carefully.
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
                <FileText className="w-8 h-8 text-cyan-400 mr-3" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                Use License
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Permission is granted to temporarily use our services for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  Modify or copy the materials
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  Use the materials for any commercial purpose or for any public display
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  Attempt to reverse engineer any software contained in our services
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  Remove any copyright or other proprietary notations from the materials
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                Service Availability
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We strive to maintain high service availability, but we do not guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-8 h-8 text-cyan-400 mr-3" />
                User Responsibilities
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a user of our services, you agree to:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  Provide accurate and complete information
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  Use our services in compliance with applicable laws
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  Not use our services for any unlawful purpose
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  Respect intellectual property rights
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  Maintain the confidentiality of your account credentials
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-8 h-8 text-cyan-400 mr-3" />
                Intellectual Property
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                All content, features, and functionality of our services are owned by Zion Tech Group and 
                are protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property or proprietary rights laws.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-cyan-400 mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-8 h-8 text-cyan-400 mr-3" />
                Changes to Terms
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes by posting the new terms on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-8 h-8 text-cyan-400 mr-3" />
                Governing Law
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Delaware, 
                without regard to its conflict of law provisions.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}