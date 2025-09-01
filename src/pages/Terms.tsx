import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
              Please read these terms carefully before using our services. By using our services, 
              you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. 
                Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims 
                and negates all other warranties.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to 
                business interruption) arising out of the use or inability to use the materials.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}