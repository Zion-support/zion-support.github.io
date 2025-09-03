<<<<<<< HEAD
import { FileText, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Search, Shield, Zap, BarChart3 export default function AIDocumentIntelligence() {; 'AI-powered data extraction from complex forms',; 'Automated compliance checking and validation',; 'Real-time document processing and indexing',; 'Secure cloud storage with enterprise-grade encryption',; 'Custom workflow automation for document approval',; 'Integration with major business applications'; <=; ]},; > { ; name: 'Enterprise', ; price: '$999/mo', ; details: ['Unlimited pages',Unlimited users',Custom AI models',24/7 dedicated support'] },; ]; ; 'Invoice processing and expense management',; 'Contract analysis and legal document review',; 'Insurance claims processing and validation',; 'Healthcare records and medical documentation',; 'Financial statements and compliance reports',; 'HR documents and employee onboarding'; ]; ; 'Reduce manual data entry by 80-90%',; 'Improve processing accuracy by 95%',; 'Cut document processing costs by 60%',; 'Accelerate approval workflows by 5x',; 'Ensure 100% compliance with regulations',; 'Scale operations without additional headcount'; ]; ; return(); <div className="min-h-screen bg-white">";" <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-center">";" <div className="max-w-5xl mx-auto px-6">";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">";" <FileText className="w-4 h-4 mr-2" /> Intelligent Document Processing & Analysis";" </div>";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Document Intelligence Platform</h1>" <p className="text-teal-100 text-xl">Transform your document workflows with AI-powered intelligence that understands, extracts, and processes information with human-like accuracy.</p>; </div>;" </section>";" ";" <section className="py-16 max-w-6xl mx-auto px-6">";" <div className="grid md:grid-cols-2 gap-10">";" <div>";" <h2 className="text-3xl font-bold text-gray-900 mb-4">Cutting-Edge Features</h2>";" <ul className="space-y-3">";" {features.map((f) => (";" <li key={f} className="flex items-start">";" <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />" <span className="text-gray-700">{f}</span>; </li>;" ))}";" </ul>";" <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security, SOC 2 Type II compliance, and 99.9% uptime SLA.;" </div>";" </div>";" <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">";" <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>";" <div className="grid md:grid-cols-3 gap-4">";" {tiers.map((t) => (";" <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition-colors">";" <div className="text-lg font-semibold mb-1">{t.name}</div>";" <div className="text-2xl font-bold text-emerald-600 mb-2">{t.price}</div>";" <ul className="text-sm text-gray-600 space-y-1">; {t.details.map((d (<li key={d}>{d}</li>))}; </ul>; </div>;" ))}";" </div>";" <div className="mt-6 flex flex-wrap gap-3">";" <a href="/pricing" className="px-5 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center">";" View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />";" </a>";" <a href="https:
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIDocumentIntelligence = () => {
  return (
    <>
      <Head>
        <title>Document Intelligence - AI Services</title>
        <meta name="description" content="Professional Document Intelligence services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Document Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Document Intelligence services powered by artificial intelligence
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced AI Solutions</li>
                  <li>• Custom Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Expert Consultation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default AIDocumentIntelligence
>>>>>>> main
