<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
=======
import { motion } from 'framer-motion';"
import { SEO } from '../components/SEO';"
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
import { FileText, Scale, Shield, Users, Globe } from 'lucide-react';
export default function TermsOfService() {
  return (
    <>
      <SEO "
        title="Terms of Service - Zion Tech Group | Legal Terms & Conditions"
        description="Read Zion Tech Group&apos;s terms of service and legal conditions. Understand your rights and responsibilities when using our services."'
        keywords="terms of service, terms and conditions, legal terms, user agreement, Zion Tech Group"
      /" >
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">"
          <div className="container mx-auto px-4">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto"" >"
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>"
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>"
              <div className="flex items-center justify-center">"
                <Scale className="w-16 h-16 text-blue-400" /" >
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}"
        <section className="py-16">"
          <div className="container mx-auto px-4 max-w-4xl">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50">
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound '
                  by the terms and provision of this agreement.
                </p>"
                <p className="text-gray-300">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>"
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on 
                  Zion Tech Group&apos;s website for personal, non-commercial transitory viewing only.'
                </p>
                <p className="text-gray-300">
                  This is the grant of a license, not a transfer of title, and under this license you may not: </p>
                <ul className="text-gray-300 space-y-2 mt-4">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for  commercial purpose</li>
                  <li>• Attempt to reverse engineer  software</li>
                  <li>• Remove  copyright or proprietary notations</li>
                </ul>
              </div>
"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>"
                <p className="text-gray-300 mb-4">
                  We strive to maintain high service availability, but we do not guarantee 
                  uninterrupted access to our services.
                </p>"
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue  part of our 
                  services at  time without notice.
                </p>
              </div>
"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>"
                <p className="text-gray-300 mb-4">
                  As a user of our services, you agree to: </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws</li>
                  <li>• Not engage in  harmful or illegal activities</li>
                </ul>
              </div>
"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>"
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group or its suppliers be liable for  damages 
                  arising out of the use or inability to use our services.
                </p>"
                <p className="text-gray-300">
                  This limitation applies to all claims, whether based on contract, tort, 
                  or  other legal theory.
                </p>
              </div>
"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">"
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>"
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us: </p>
                <div className="text-gray-300">
                  <p>Email: legal@ziontechgroup.com</p>
                  <p>Phone: +1 302 464 0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  );
}