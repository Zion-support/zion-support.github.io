import React from 'react';
import { SEO } from '../../components/SEO';

const ZeroTrustNetworkArchitecture: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zero Trust Network Architecture - Zion Tech Group"
        description="Implement zero trust security architecture for enhanced network security. Never trust, always verify approach to protect your digital assets."
        keywords="zero trust, network security, cybersecurity architecture, identity verification, access control, security framework"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Zero Trust Network Architecture
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implement the "never trust, always verify" security model to protect your network and data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Identity Verification */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔐</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Identity Verification</h3>
              <p className="text-gray-300 mb-4">
                Multi-factor authentication and continuous identity verification for all users and devices.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Multi-factor authentication</li>
                <li>• Biometric verification</li>
                <li>• Device fingerprinting</li>
                <li>• Behavioral analytics</li>
              </ul>
            </div>

            {/* Micro-segmentation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro-segmentation</h3>
              <p className="text-gray-300 mb-4">
                Divide your network into smaller, isolated segments to limit lateral movement.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Network segmentation</li>
                <li>• Access controls</li>
                <li>• Traffic monitoring</li>
                <li>• Policy enforcement</li>
              </ul>
            </div>

            {/* Continuous Monitoring */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Real-time monitoring and analysis of all network traffic and user activities.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time monitoring</li>
                <li>• Threat detection</li>
                <li>• Anomaly analysis</li>
                <li>• Incident response</li>
              </ul>
            </div>

            {/* Least Privilege Access */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Least Privilege Access</h3>
              <p className="text-gray-300 mb-4">
                Grant users only the minimum access necessary to perform their job functions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Role-based access control</li>
                <li>• Just-in-time access</li>
                <li>• Privilege escalation</li>
                <li>• Access reviews</li>
              </ul>
            </div>

            {/* Encryption Everywhere */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔐</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Encryption Everywhere</h3>
              <p className="text-gray-300 mb-4">
                End-to-end encryption for all data in transit and at rest across your network.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• End-to-end encryption</li>
                <li>• Data at rest protection</li>
                <li>• Key management</li>
                <li>• Secure communication</li>
              </ul>
            </div>

            {/* Security Automation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Automation</h3>
              <p className="text-gray-300 mb-4">
                Automated security responses and policy enforcement across your network infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Automated responses</li>
                <li>• Policy enforcement</li>
                <li>• Threat mitigation</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Secure Your Network with Zero Trust
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Protect your organization from advanced threats with our comprehensive zero trust network architecture implementation.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Implement Zero Trust Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZeroTrustNetworkArchitecture;