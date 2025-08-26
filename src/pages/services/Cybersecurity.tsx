import React from 'react';
import { Link } from 'react-router-dom';

const CybersecurityServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Protect your digital assets with comprehensive security solutions.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Threat Detection</h3>
              <p className="text-slate-600">Advanced monitoring and threat intelligence systems.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Audits</h3>
              <p className="text-slate-600">Comprehensive security assessments and compliance.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Incident Response</h3>
              <p className="text-slate-600">24/7 security monitoring and rapid response.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Business Today</h2>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityServices;