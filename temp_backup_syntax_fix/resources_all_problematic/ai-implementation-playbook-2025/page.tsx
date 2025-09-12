// @ts-nocheck
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Download, CheckCircle, Clock, Book, Shield, LineChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Implementation Playbook 2025: Step-by-Step Enterprise Guide',
  description: 'Free 2025 playbook covering architecture, ROI, security, and rollout for successful AI implementation at scale.',
  keywords: 'AI implementation playbook 2025, enterprise AI guide, rollout plan, ROI, security, architecture',
};

export const metadata: Metadata = {
  title: 'AI Implementation Playbook 2025 - Complete Guide',
  description: 'Step-by-step playbook for successful AI implementation. Download our comprehensive guide with proven strategies.',
  keywords: 'AI implementation, playbook, AI strategy, digital transformation',
};

export default function AIImplementationPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">January 28, 2025</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Implementation Playbook 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A step-by-step blueprint to evaluate readiness, design architecture, secure systems, and deliver ROI from your AI initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 45 min read</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Enterprise-Grade</div>
            <div className="flex items-center gap-2"><LineChart className="w-4 h-4" /> ROI Focused</div>
          </div>
        </div>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">What You’ll Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Architecture patterns and reference designs</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Security and governance checklists</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> ROI modeling templates</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Integration and data readiness guides</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Rollout plans with success metrics</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Troubleshooting and scaling playbooks</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Download the Free Playbook</h2>
          <p className="text-lg opacity-90 mb-6">No email required — instant access.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download PDF
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Implementation Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

