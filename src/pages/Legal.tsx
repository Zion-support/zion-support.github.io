import React from 'react';
import { FileText, Shield, Scale } from 'lucide-react';
import SEO from '../components/SEO';

const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Legal - Zion Tech Group"
        description="Legal information, terms of service, and privacy policies for Zion Tech Group"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Legal Information
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Important legal documents and policies for Zion Tech Group
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <FileText className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Terms of Service</h3>
            <p className="text-gray-300 mb-6">
              Our terms and conditions for using our services and products.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              View Terms
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Shield className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Privacy Policy</h3>
            <p className="text-gray-300 mb-6">
              How we collect, use, and protect your personal information.
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              View Privacy Policy
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Scale className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Legal Compliance</h3>
            <p className="text-gray-300 mb-6">
              Our commitment to legal compliance and regulatory standards.
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;