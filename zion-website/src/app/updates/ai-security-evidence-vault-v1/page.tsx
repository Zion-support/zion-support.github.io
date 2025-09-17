import React from 'react';

export default function AiSecurityEvidenceVaultPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            AI Security Evidence Vault v1.0
          </h1>
          
          <div className="text-lg text-gray-300 mb-8">
            Centralized security evidence collection and audit trail management for AI systems.
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              The AI Security Evidence Vault v1.0 provides centralized collection, storage, and management 
              of security evidence for AI systems. This comprehensive solution enables audit-ready compliance 
              and security monitoring across your AI infrastructure.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Centralized evidence collection and storage</li>
              <li>• Automated audit trail generation</li>
              <li>• Compliance reporting and dashboards</li>
              <li>• Integration with security monitoring tools</li>
              <li>• Immutable evidence storage and verification</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 leading-relaxed">
              Learn how to deploy and configure the AI Security Evidence Vault in your environment. 
              Includes setup guides, integration examples, and best practices for security compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}